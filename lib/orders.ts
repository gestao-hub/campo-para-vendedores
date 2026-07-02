import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getProductConfig } from "@/lib/product";

export type OrderRecord = {
  id: string;
  product_id: string;
  customer_name: string;
  customer_email: string;
  customer_document: string | null;
  status: "pending" | "paid" | "refunded" | "canceled";
  amount_cents: number;
  gateway: string;
  gateway_customer_id: string | null;
  gateway_payment_id: string | null;
  checkout_url: string | null;
  paid_at: string | null;
};

export async function ensureProduct() {
  const supabase = createSupabaseAdminClient();
  const product = getProductConfig();

  const { data, error } = await supabase
    .from("products")
    .upsert(
      {
        slug: product.slug,
        name: product.name,
        price_cents: product.priceCents,
        file_path: product.filePath,
        active: true
      },
      { onConflict: "slug" }
    )
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createPendingOrder(input: {
  customerName: string;
  customerEmail: string;
  customerDocument?: string;
}) {
  const supabase = createSupabaseAdminClient();
  const product = await ensureProduct();
  const productConfig = getProductConfig();

  const { data, error } = await supabase
    .from("orders")
    .insert({
      product_id: product.id,
      customer_name: input.customerName,
      customer_email: input.customerEmail,
      customer_document: input.customerDocument || null,
      status: "pending",
      amount_cents: productConfig.priceCents,
      gateway: "asaas"
    })
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as OrderRecord;
}

export async function attachGatewayPayment(input: {
  orderId: string;
  gatewayCustomerId: string;
  gatewayPaymentId: string;
  checkoutUrl: string;
}) {
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase
    .from("orders")
    .update({
      gateway_customer_id: input.gatewayCustomerId,
      gateway_payment_id: input.gatewayPaymentId,
      checkout_url: input.checkoutUrl
    })
    .eq("id", input.orderId)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as OrderRecord;
}

export async function findOrderByPayment(input: {
  gatewayPaymentId?: string;
  externalReference?: string;
}) {
  const supabase = createSupabaseAdminClient();

  if (input.gatewayPaymentId) {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("gateway_payment_id", input.gatewayPaymentId)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (data) {
      return data as OrderRecord;
    }
  }

  if (input.externalReference) {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("id", input.externalReference)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data as OrderRecord | null;
  }

  return null;
}

export async function markOrderPaid(orderId: string) {
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase
    .from("orders")
    .update({
      status: "paid",
      paid_at: new Date().toISOString()
    })
    .eq("id", orderId)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as OrderRecord;
}

export async function markOrderRefunded(orderId: string) {
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase
    .from("orders")
    .update({
      status: "refunded"
    })
    .eq("id", orderId)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as OrderRecord;
}
