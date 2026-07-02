import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const siteUrl =
  process.env.WEBHOOK_SITE_URL ||
  process.env.VERCEL_SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL;
const apiKey = process.env.ASAAS_API_KEY;
const webhookToken = process.env.ASAAS_WEBHOOK_TOKEN;
const asaasEnv = process.env.ASAAS_ENV || "production";
const webhookEmail = process.env.ASAAS_WEBHOOK_EMAIL;

if (!siteUrl || !apiKey || !webhookToken) {
  console.error(
    "Missing NEXT_PUBLIC_SITE_URL, ASAAS_API_KEY or ASAAS_WEBHOOK_TOKEN."
  );
  process.exit(1);
}

if (!webhookEmail) {
  console.error("Missing ASAAS_WEBHOOK_EMAIL. Asaas requires an email for webhooks.");
  process.exit(1);
}

if (siteUrl.includes("localhost")) {
  console.error("Use uma URL publica antes de cadastrar o webhook no Asaas.");
  process.exit(1);
}

const baseUrl =
  asaasEnv === "sandbox"
    ? "https://api-sandbox.asaas.com/v3"
    : "https://api.asaas.com/v3";

const payload = {
  name: "Entre em Campo - pagamentos",
  url: `${siteUrl.replace(/\/$/, "")}/api/webhooks/asaas`,
  email: webhookEmail,
  enabled: true,
  interrupted: false,
  apiVersion: 3,
  authToken: webhookToken,
  sendType: "SEQUENTIALLY",
  events: ["PAYMENT_CONFIRMED", "PAYMENT_RECEIVED", "PAYMENT_REFUNDED"]
};

const response = await fetch(`${baseUrl}/webhooks`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    access_token: apiKey
  },
  body: JSON.stringify(payload)
});

const data = await response.json().catch(() => null);

if (!response.ok) {
  console.error(data);
  process.exit(1);
}

console.log(JSON.stringify(data, null, 2));
