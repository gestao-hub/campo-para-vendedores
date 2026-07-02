import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

const supportEmail = "gestao@excluvia.com.br";

export const metadata: Metadata = {
  title: "Politica de Reembolso | Entre em Campo",
  description: "Politica de reembolso do produto digital Entre em Campo."
};

export default function RefundPage() {
  return (
    <LegalPage
      eyebrow="Garantia"
      title="Politica de reembolso"
      updatedAt="2 de julho de 2026"
    >
      <LegalSection title="1. Prazo">
        <p>
          Voce pode solicitar reembolso em ate 7 dias corridos apos a compra do
          produto digital Entre em Campo.
        </p>
      </LegalSection>

      <LegalSection title="2. Como solicitar">
        <p>
          Envie um e-mail para{" "}
          <a className="font-bold text-field-700" href={`mailto:${supportEmail}`}>
            {supportEmail}
          </a>{" "}
          com o e-mail usado na compra, nome completo e, se possivel, o
          identificador do pedido ou comprovante de pagamento.
        </p>
      </LegalSection>

      <LegalSection title="3. Processamento">
        <p>
          Apos a validacao da compra, o reembolso sera solicitado no gateway de
          pagamento. O prazo para o valor aparecer ao comprador depende do metodo
          de pagamento e das regras do provedor financeiro.
        </p>
      </LegalSection>

      <LegalSection title="4. Acesso ao produto">
        <p>
          Quando o reembolso for aprovado, o acesso ao produto podera ser
          revogado e links de download poderao deixar de funcionar.
        </p>
      </LegalSection>

      <LegalSection title="5. Suporte">
        <p>
          Se tiver dificuldade de acesso antes de pedir reembolso, entre em
          contato pelo suporte. Muitas vezes o problema pode ser resolvido com
          reenvio do link ou verificacao do e-mail informado na compra.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
