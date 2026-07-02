import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Dumbbell,
  Flag,
  Goal,
  ListChecks,
  MessageCircle,
  ShieldCheck,
  Target,
  Trophy
} from "lucide-react";
import { CheckoutForm } from "@/components/landing/CheckoutForm";
import { getProductConfig } from "@/lib/product";

const painChecks = [
  "Disse que ligaria amanha.",
  "Deixou um lead sem resposta.",
  "Ficou estudando em vez de prospectar.",
  "Sentiu vergonha de abordar um cliente.",
  "Esperou o momento perfeito.",
  "Pensou: quando eu tiver mais confianca."
];

const methodCards = [
  {
    icon: Flag,
    title: "Missao",
    text: "A acao objetiva do dia para voce sair da intencao e fazer contato."
  },
  {
    icon: Target,
    title: "Leitura de jogo",
    text: "Um insight de mentalidade para vender com clareza, sem pressao."
  },
  {
    icon: Dumbbell,
    title: "Campo de treino",
    text: "Espaco para escrever, praticar abordagem e registrar aprendizados."
  },
  {
    icon: Trophy,
    title: "Placar",
    text: "Checklists simples para acompanhar progresso e manter constancia."
  }
];

const rounds = [
  ["Dia 1", "Primeiro passo"],
  ["Dia 3", "Escuta ativa"],
  ["Dia 7", "Prospeccao ativa"],
  ["Dia 10", "Revisao de campo"],
  ["Dia 14", "Gestao do nao"],
  ["Dia 17", "Networking ativo"],
  ["Dia 21", "Plano de 90 dias"]
];

const inside = [
  "21 rodadas de acao",
  "Missoes diarias",
  "Checklists de progresso",
  "Exercicios de prospeccao",
  "Abordagens e follow-ups",
  "Respostas para objecoes",
  "Placar da temporada",
  "Plano de campo de 90 dias"
];

const faqs = [
  {
    question: "O que eu recebo depois da compra?",
    answer:
      "Voce recebe acesso ao manual Entre em Campo em PDF, com 21 rodadas praticas, exercicios, checklists e plano de 90 dias."
  },
  {
    question: "O acesso e imediato?",
    answer:
      "O acesso e liberado automaticamente apos a confirmacao do pagamento pelo Asaas. Pix e cartao tendem a confirmar mais rapido que boleto."
  },
  {
    question: "E curso em video?",
    answer:
      "Nao. A proposta e um manual de campo direto, feito para aplicar todos os dias, sem videos longos ou teoria desnecessaria."
  },
  {
    question: "Serve para quem nunca vendeu?",
    answer:
      "Sim. O manual foi pensado para quem precisa criar comportamento comercial, inclusive pessoas timidas ou inseguras."
  },
  {
    question: "Posso imprimir?",
    answer:
      "Sim. O manual foi criado para ser lido, marcado, preenchido e usado como campo de treino."
  }
];

export default function Home() {
  const product = getProductConfig();
  const price = (product.priceCents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  });

  return (
    <main className="min-h-screen bg-field-50 text-ink">
      <section className="field-lines bg-field-900 text-white">
        <div className="section-shell grid min-h-screen gap-8 py-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-14">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-md border border-scoreboard/50 px-3 py-2 text-xs font-black uppercase tracking-wide text-scoreboard">
              <Goal aria-hidden className="h-4 w-4" />
              Desafio pratico de 21 dias
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-normal text-white md:text-7xl">
              Voce nao esta sem dinheiro. Esta sem prospeccao.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-field-100 md:text-xl">
              Entre em campo pelos proximos 21 dias e crie uma rotina simples
              para abordar clientes, fazer follow-up e vender com mais
              confianca.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-scoreboard px-6 py-3 text-base font-black uppercase text-field-900 transition hover:bg-yellow-300"
                href="#oferta"
              >
                Quero entrar em campo
                <ArrowRight aria-hidden className="h-5 w-5" />
              </a>
              <p className="flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-lg font-black text-scoreboard sm:justify-start">
                {price}
              </p>
            </div>
            <div className="mt-6 grid gap-2 text-sm font-semibold text-field-100 sm:grid-cols-3">
              <span>Manual pratico</span>
              <span>Missoes diarias</span>
              <span>Plano de 90 dias</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="absolute inset-0 translate-x-4 translate-y-5 rounded-lg bg-scoreboard/40" />
            <div className="relative overflow-hidden rounded-lg border border-scoreboard bg-field-50 p-5 text-field-900 shadow-field">
              <div className="rounded-md bg-field-900 p-5 text-white">
                <p className="text-sm font-black uppercase text-scoreboard">
                  Manual Oficial
                </p>
                <h2 className="mt-8 text-5xl font-black leading-none">
                  Entre em Campo
                </h2>
                <p className="mt-4 text-base font-semibold text-field-100">
                  Manual pratico de 21 dias para conquistar clientes com
                  confianca.
                </p>
              </div>
              <div className="mt-4 grid gap-2">
                {["Missao", "Leitura de jogo", "Campo de treino", "Placar"].map(
                  (item) => (
                    <div
                      className="flex items-center gap-2 rounded-md border border-field-100 bg-white px-3 py-2 text-sm font-black"
                      key={item}
                    >
                      <CheckCircle2
                        aria-hidden
                        className="h-4 w-4 text-field-700"
                      />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-field-700">
              O problema real
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-field-900 md:text-5xl">
              Ninguem acorda gostando de prospectar.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              Nem os melhores vendedores dependem de motivacao. Eles seguem
              rotina. Enquanto alguns esperam vontade, outros fazem a proxima
              acao.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-field">
            <h3 className="text-xl font-black text-field-900">
              Responda com sinceridade
            </h3>
            <div className="mt-4 grid gap-3">
              {painChecks.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-md border border-field-100 bg-field-50 p-3 text-sm font-bold text-gray-800"
                  key={item}
                >
                  <ClipboardCheck
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-field-700"
                  />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-md bg-field-900 p-4 text-base font-black text-white">
              Se marcou duas ou mais, talvez o problema nao seja tecnica. E
              comportamento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-field-900 py-16 text-white md:py-24">
        <div className="section-shell text-center">
          <p className="text-sm font-black uppercase text-scoreboard">
            O maior concorrente
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Nao e outro vendedor. E a frase: amanha eu comeco.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-field-100">
            Ela custa clientes, dinheiro e oportunidades. E normalmente nunca
            chega.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-field-700">
              O metodo
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-field-900 md:text-5xl">
              Um treinador de bolso para entrar em campo todos os dias.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              A cada rodada voce recebe uma missao curta, um insight de
              mentalidade, um espaco de pratica e um placar para acompanhar a
              evolucao.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {methodCards.map((card) => (
              <article
                className="rounded-lg border border-field-100 bg-white p-5 shadow-sm"
                key={card.title}
              >
                <card.icon aria-hidden className="h-7 w-7 text-field-700" />
                <h3 className="mt-4 text-xl font-black text-field-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-black uppercase text-field-700">
              As 21 rodadas
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-field-900 md:text-5xl">
              Um plano simples para parar de improvisar.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              O jogo dura 21 dias. A cada dia, uma acao concreta para construir
              confianca e constancia comercial.
            </p>
          </div>
          <div className="grid gap-3">
            {rounds.map(([day, title], index) => (
              <div
                className="grid grid-cols-[72px_1fr] items-center gap-3 rounded-lg border border-field-100 bg-field-50 p-3"
                key={day}
              >
                <span className="rounded-md bg-field-900 px-3 py-2 text-center text-sm font-black text-scoreboard">
                  {day}
                </span>
                <div>
                  <p className="text-xs font-black uppercase text-field-700">
                    Rodada {index + 1}
                  </p>
                  <p className="text-lg font-black text-field-900">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="section-shell grid gap-8 md:grid-cols-2 md:items-center">
          <div className="rounded-lg bg-field-900 p-6 text-white shadow-field">
            <p className="text-sm font-black uppercase text-scoreboard">
              Nao e so um PDF
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Voce compra a proxima acao.
            </h2>
            <p className="mt-4 text-lg leading-8 text-field-100">
              Todos os dias o manual responde a pergunta que trava muita gente:
              o que eu faco hoje para vender mais?
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {inside.map((item) => (
              <div
                className="flex items-start gap-3 rounded-lg border border-field-100 bg-white p-4 text-sm font-bold text-gray-800 shadow-sm"
                key={item}
              >
                <ListChecks
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-field-700"
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="section-shell grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-field-100 bg-field-50 p-6">
            <h2 className="text-3xl font-black text-field-900">
              Para quem e
            </h2>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-gray-700">
              <li>Quem precisa prospectar, mas trava na hora de agir.</li>
              <li>Quem quer uma rotina simples em vez de aula longa.</li>
              <li>Quem vende servicos, produtos ou a propria consultoria.</li>
              <li>Quem quer mais constancia, confianca e follow-up.</li>
            </ul>
          </article>
          <article className="rounded-lg border border-field-100 bg-field-50 p-6">
            <h2 className="text-3xl font-black text-field-900">
              Para quem nao e
            </h2>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-gray-700">
              <li>Quem procura promessa de dinheiro facil.</li>
              <li>Quem quer apenas consumir conteudo sem aplicar.</li>
              <li>Quem espera uma formula magica sem disciplina diaria.</li>
              <li>Quem nao esta disposto a fazer contato com clientes.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-16 md:py-24" id="oferta">
        <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase text-field-700">
              Oferta
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-field-900 md:text-5xl">
              Quanto vale um cliente novo para voce?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              Se o Entre em Campo ajudar voce a conquistar apenas um cliente,
              os R$47 deixam de ser custo e viram investimento.
            </p>
            <div className="mt-6 rounded-lg bg-field-900 p-5 text-white">
              <p className="text-sm font-bold uppercase text-scoreboard">
                Entre em Campo
              </p>
              <p className="mt-2 text-2xl font-black">
                Manual Oficial de Campo para Vendedores
              </p>
              <div className="mt-5 flex items-end gap-3">
                <span className="text-lg font-bold text-field-100 line-through">
                  R$97
                </span>
                <span className="text-5xl font-black text-scoreboard">
                  {price}
                </span>
              </div>
            </div>
          </div>
          <CheckoutForm productSlug={product.slug} />
        </div>
      </section>

      <section className="bg-field-900 py-16 text-white md:py-24">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          <div>
            <ShieldCheck aria-hidden className="h-9 w-9 text-scoreboard" />
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Leia. Use. Pratique.
            </h2>
            <p className="mt-4 text-lg leading-8 text-field-100">
              Se o material nao entregar valor para sua realidade dentro do
              prazo de garantia informado no checkout, voce pode solicitar
              reembolso conforme a politica de compra.
            </p>
          </div>
          <div>
            <MessageCircle aria-hidden className="h-9 w-9 text-scoreboard" />
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Duvidas frequentes
            </h2>
            <div className="mt-5 grid gap-3">
              {faqs.map((faq) => (
                <details
                  className="rounded-lg border border-white/15 bg-white/5 p-4"
                  key={faq.question}
                >
                  <summary className="cursor-pointer text-base font-black">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-field-100">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-field-950 bg-field-900 px-4 py-10 text-white">
        <div className="section-shell flex flex-col gap-4 text-sm text-field-100 md:flex-row md:items-center md:justify-between">
          <p className="font-bold">
            Entre em Campo - Manual Oficial de Campo para Vendedores
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="hover:text-scoreboard" href="mailto:suporte@seudominio.com">
              Suporte
            </a>
            <a className="hover:text-scoreboard" href="/termos">
              Termos
            </a>
            <a className="hover:text-scoreboard" href="/privacidade">
              Privacidade
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
