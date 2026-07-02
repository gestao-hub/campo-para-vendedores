import { getServerEnv } from "@/lib/env";

type AsaasCustomer = {
  id: string;
};

export type AsaasPayment = {
  id: string;
  status?: string;
  invoiceUrl?: string;
  bankSlipUrl?: string;
  paymentLink?: string;
  externalReference?: string;
  customer?: string;
};

function getAsaasBaseUrl() {
  const env = getServerEnv();
  return env.ASAAS_ENV === "sandbox"
    ? "https://api-sandbox.asaas.com/v3"
    : "https://api.asaas.com/v3";
}

async function asaasFetch<T>(path: string, init: RequestInit = {}) {
  const env = getServerEnv();
  const response = await fetch(`${getAsaasBaseUrl()}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      access_token: env.ASAAS_API_KEY,
      ...(init.headers ?? {})
    },
    cache: "no-store"
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message =
      data?.errors?.[0]?.description ??
      data?.message ??
      `Asaas request failed with ${response.status}`;
    throw new Error(message);
  }

  return data as T;
}

export async function createAsaasCustomer(input: {
  name: string;
  email: string;
  cpfCnpj?: string;
}) {
  return asaasFetch<AsaasCustomer>("/customers", {
    method: "POST",
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      cpfCnpj: input.cpfCnpj || undefined,
      notificationDisabled: true
    })
  });
}

export async function createAsaasPayment(input: {
  customerId: string;
  orderId: string;
  valueCents: number;
  description: string;
}) {
  const env = getServerEnv();
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 3);

  return asaasFetch<AsaasPayment>("/payments", {
    method: "POST",
    body: JSON.stringify({
      customer: input.customerId,
      billingType: "UNDEFINED",
      value: input.valueCents / 100,
      dueDate: dueDate.toISOString().slice(0, 10),
      description: input.description,
      externalReference: input.orderId,
      callback: {
        successUrl: `${env.NEXT_PUBLIC_SITE_URL}/obrigado?order=${input.orderId}`,
        autoRedirect: true
      }
    })
  });
}

export async function getAsaasPayment(paymentId: string) {
  return asaasFetch<AsaasPayment>(`/payments/${paymentId}`);
}

export function getPaymentCheckoutUrl(payment: AsaasPayment) {
  return payment.invoiceUrl ?? payment.paymentLink ?? payment.bankSlipUrl ?? "";
}
