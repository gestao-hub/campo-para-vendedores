import { Resend } from "resend";
import { getOptionalEnv } from "@/lib/env";

export async function sendPurchaseAccessEmail(input: {
  to: string;
  name: string;
  accessUrl: string;
}) {
  const apiKey = getOptionalEnv("RESEND_API_KEY");
  const from = getOptionalEnv("FROM_EMAIL");

  if (!apiKey || !from) {
    return {
      skipped: true,
      providerMessageId: null
    };
  }

  const resend = new Resend(apiKey);
  const response = await resend.emails.send({
    from,
    to: input.to,
    subject: "Seu acesso ao Entre em Campo foi liberado",
    text: `Ola, ${input.name}. Seu acesso ao Entre em Campo foi liberado: ${input.accessUrl}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h1 style="color: #14532D;">Voce entrou em campo.</h1>
        <p>Ola, ${input.name}.</p>
        <p>Seu pagamento foi confirmado e seu acesso ao manual Entre em Campo esta liberado.</p>
        <p>
          <a href="${input.accessUrl}" style="display: inline-block; padding: 12px 18px; background: #FACC15; color: #052E16; font-weight: 800; text-decoration: none; border-radius: 6px;">
            Acessar meu manual
          </a>
        </p>
        <p>Bom treino. O campo e seu.</p>
      </div>
    `
  });

  return {
    skipped: false,
    providerMessageId: response.data?.id ?? null
  };
}
