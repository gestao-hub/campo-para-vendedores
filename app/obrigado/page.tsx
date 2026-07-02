import Link from "next/link";
import { CheckCircle2, Mail } from "lucide-react";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-field-50 px-4 py-12 text-ink">
      <section className="mx-auto grid min-h-[70vh] max-w-2xl place-items-center">
        <div className="rounded-lg border border-field-100 bg-white p-6 text-center shadow-field">
          <CheckCircle2 className="mx-auto h-12 w-12 text-field-700" />
          <h1 className="mt-5 text-4xl font-black text-field-900">
            Pedido recebido.
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Assim que o Asaas confirmar o pagamento, o acesso ao Entre em Campo
            sera enviado para o e-mail informado na compra.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-field-50 px-4 py-3 text-sm font-bold text-field-900">
            <Mail aria-hidden className="h-4 w-4" />
            Confira tambem a caixa de spam e promocoes.
          </p>
          <Link
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-scoreboard px-6 py-3 font-black uppercase text-field-900"
            href="/"
          >
            Voltar para a pagina
          </Link>
        </div>
      </section>
    </main>
  );
}
