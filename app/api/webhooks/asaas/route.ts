import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { createAccessToken, revokeAccessTokensForOrder } from "@/lib/access/tokens";
import { getServerEnv } from "@/lib/env";
import { sendPurchaseAccessEmail } from "@/lib/email/resend";
import { findOrderByPayment, markOrderPaid, markOrderRefunded } from "@/lib/orders";
import { getAsaasPayment } from "@/lib/payments/asaas";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const paidStatuses = new Set(["RECEIVED", "CONFIRMED"]);
const paidEvents = new Set(["PAYMENT_RECEIVED", "PAYMENT_CONFIRMED"]);
const revokedEvents = new Set([
  "PAYMENT_REFUNDED",
  "PAYMENT_CHARGEBACK_REQUESTED",
  "PAYMENT_DELETED"
]);

function getWebhookToken(request: Request) {
  const authorization = request.headers.get("authorization");
  const bearer = authorization?.replace(/^Bearer\s+/i, "");

  return (
    request.headers.get("asaas-access-token") ??
    request.headers.get("x-asaas-token") ??
    bearer ??
    new URL(request.url).searchParams.get("token") ??
    ""
  );
}

function getEventId(rawBody: string) {
  return crypto.createHash("sha256").update(rawBody).digest("hex");
}

async function registerWebhookEvent(input: {
  eventId: string;
  eventType: string;
  payload: unknown;
}) {
  const supabase = createSupabaseAdminClient();

  const { error } = await supabase.from("webhook_events").insert({
    gateway: "asaas",
    event_id: input.eventId,
    event_type: input.eventType,
    payload: input.payload
  });

  if (error?.code === "23505") {
    return false;
  }

  if (error) {
    throw error;
  }

  return true;
}

async function markWebhookProcessed(eventId: string) {
  const supabase = createSupabaseAdminClient();

  await supabase
    .from("webhook_events")
    .update({ processed_at: new Date().toISOString() })
    .eq("event_id", eventId);
}

async function logEmail(input: {
  orderId: string;
  to: string;
  template: string;
  status: string;
  providerMessageId?: string | null;
}) {
  const supabase = createSupabaseAdminClient();

  await supabase.from("email_logs").insert({
    order_id: input.orderId,
    to_email: input.to,
    template: input.template,
    status: input.status,
    provider_message_id: input.providerMessageId ?? null,
    sent_at: input.status === "sent" ? new Date().toISOString() : null
  });
}

export async function POST(request: Request) {
  const env = getServerEnv();
  const incomingToken = getWebhookToken(request);

  if (incomingToken !== env.ASAAS_WEBHOOK_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rawBody = await request.text();
  const eventId = getEventId(rawBody);
  const payload = JSON.parse(rawBody) as {
    event?: string;
    payment?: {
      id?: string;
      status?: string;
      externalReference?: string;
    };
  };
  const eventType = payload.event ?? "unknown";

  const isNewEvent = await registerWebhookEvent({
    eventId,
    eventType,
    payload
  });

  if (!isNewEvent) {
    return NextResponse.json({ ok: true, duplicate: true });
  }

  const paymentId = payload.payment?.id;

  if (!paymentId) {
    await markWebhookProcessed(eventId);
    return NextResponse.json({ ok: true, ignored: "missing_payment_id" });
  }

  if (revokedEvents.has(eventType)) {
    const order = await findOrderByPayment({
      gatewayPaymentId: paymentId,
      externalReference: payload.payment?.externalReference
    });

    if (order) {
      await markOrderRefunded(order.id);
      await revokeAccessTokensForOrder(order.id);
    }

    await markWebhookProcessed(eventId);
    return NextResponse.json({ ok: true, revoked: Boolean(order) });
  }

  if (!paidEvents.has(eventType)) {
    await markWebhookProcessed(eventId);
    return NextResponse.json({ ok: true, ignored: eventType });
  }

  const payment = await getAsaasPayment(paymentId);
  const status = payment.status ?? payload.payment?.status ?? "";

  if (!paidStatuses.has(status)) {
    await markWebhookProcessed(eventId);
    return NextResponse.json({ ok: true, ignored_status: status });
  }

  const order = await findOrderByPayment({
    gatewayPaymentId: payment.id,
    externalReference: payment.externalReference ?? payload.payment?.externalReference
  });

  if (!order) {
    await markWebhookProcessed(eventId);
    return NextResponse.json({ ok: true, ignored: "order_not_found" });
  }

  if (order.status !== "paid") {
    const paidOrder = await markOrderPaid(order.id);
    const { token } = await createAccessToken(order.id);
    const accessUrl = `${env.NEXT_PUBLIC_SITE_URL}/acesso/${token}`;
    const email = await sendPurchaseAccessEmail({
      to: paidOrder.customer_email,
      name: paidOrder.customer_name,
      accessUrl
    });

    await logEmail({
      orderId: paidOrder.id,
      to: paidOrder.customer_email,
      template: "purchase-approved",
      status: email.skipped ? "skipped" : "sent",
      providerMessageId: email.providerMessageId
    });
  }

  await markWebhookProcessed(eventId);
  return NextResponse.json({ ok: true });
}
