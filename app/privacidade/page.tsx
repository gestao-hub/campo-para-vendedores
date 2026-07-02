import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

const supportEmail = "gestao@excluvia.com.br";

export const metadata: Metadata = {
  title: "Politica de Privacidade | Entre em Campo",
  description: "Politica de privacidade da landing page Entre em Campo."
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Politica de privacidade"
      updatedAt="2 de julho de 2026"
    >
      <LegalSection title="1. Dados coletados">
        <p>
          Para processar a compra e liberar o acesso ao produto, podemos coletar
          nome, e-mail, CPF ou CNPJ quando informado, dados do pedido, status de
          pagamento e registros tecnicos de acesso.
        </p>
      </LegalSection>

      <LegalSection title="2. Finalidade">
        <p>
          Os dados sao usados para criar o pedido, processar pagamento, liberar
          o acesso ao produto, enviar comunicacoes transacionais, prestar suporte
          e cumprir obrigacoes legais.
        </p>
      </LegalSection>

      <LegalSection title="3. Compartilhamento">
        <p>
          Dados necessarios podem ser compartilhados com provedores essenciais ao
          funcionamento da venda, como Asaas para pagamento, Supabase para banco
          e armazenamento, Vercel para hospedagem e Resend para envio de e-mails
          transacionais.
        </p>
      </LegalSection>

      <LegalSection title="4. Seguranca">
        <p>
          O acesso ao material e protegido por token individual e o arquivo do
          curso fica em armazenamento privado. Ainda assim, nenhum sistema e
          totalmente imune a riscos, por isso usamos controles proporcionais ao
          tipo de produto e operacao.
        </p>
      </LegalSection>

      <LegalSection title="5. Direitos do titular">
        <p>
          Voce pode solicitar informacoes, correcao ou exclusao de dados quando
          aplicavel. Para isso, envie uma mensagem para{" "}
          <a className="font-bold text-field-700" href={`mailto:${supportEmail}`}>
            {supportEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Retencao">
        <p>
          Dados de pedidos e pagamentos podem ser mantidos pelo periodo
          necessario para suporte, comprovacao de compra, seguranca, auditoria e
          cumprimento de obrigacoes legais.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
