import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

const supportEmail = "gestao@excluvia.com.br";

export const metadata: Metadata = {
  title: "Termos de Uso | Entre em Campo",
  description: "Termos de uso do produto digital Entre em Campo."
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Termos legais"
      title="Termos de uso"
      updatedAt="2 de julho de 2026"
    >
      <LegalSection title="1. Produto">
        <p>
          O Entre em Campo e um produto digital em formato de manual PDF, com
          missoes, exercicios e checklists voltados a rotina comercial,
          prospeccao, abordagem, follow-up e planejamento de vendas.
        </p>
      </LegalSection>

      <LegalSection title="2. Acesso">
        <p>
          Apos a confirmacao do pagamento pelo gateway Asaas, o comprador recebe
          acesso digital ao material por e-mail. O link de acesso e individual e
          nao deve ser compartilhado publicamente.
        </p>
      </LegalSection>

      <LegalSection title="3. Uso permitido">
        <p>
          O comprador pode baixar, ler e imprimir o material para uso proprio. A
          copia, revenda, distribuicao publica, compartilhamento em grupos ou
          publicacao do conteudo sem autorizacao sao proibidos.
        </p>
      </LegalSection>

      <LegalSection title="4. Resultados">
        <p>
          O material oferece orientacao pratica, mas nao garante faturamento,
          clientes, contratos ou resultados especificos. Os resultados dependem
          da aplicacao individual, mercado, oferta, rotina e contexto comercial
          de cada pessoa.
        </p>
      </LegalSection>

      <LegalSection title="5. Pagamento e entrega">
        <p>
          O pagamento e processado pelo Asaas. Prazos de confirmacao podem
          variar conforme o metodo escolhido, como Pix, cartao ou boleto. A
          entrega automatica acontece apos a confirmacao do pagamento.
        </p>
      </LegalSection>

      <LegalSection title="6. Suporte">
        <p>
          Para duvidas sobre compra, acesso ou suporte ao produto, entre em
          contato pelo e-mail{" "}
          <a className="font-bold text-field-700" href={`mailto:${supportEmail}`}>
            {supportEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
