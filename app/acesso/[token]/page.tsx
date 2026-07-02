import Link from "next/link";
import { Download, LockKeyhole, ShieldAlert } from "lucide-react";
import { validateAccessToken } from "@/lib/access/tokens";

type AccessPageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default async function AccessPage({ params }: AccessPageProps) {
  const { token } = await params;
  const access = await validateAccessToken(token);

  if (!access.ok) {
    return (
      <main className="grid min-h-screen place-items-center bg-field-50 px-4 py-10 text-ink">
        <section className="max-w-lg rounded-lg border border-red-100 bg-white p-6 text-center shadow-field">
          <ShieldAlert className="mx-auto h-12 w-12 text-red-600" />
          <h1 className="mt-5 text-3xl font-black text-field-900">
            Acesso indisponivel
          </h1>
          <p className="mt-4 text-gray-700">{access.reason}</p>
          <Link
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-scoreboard px-6 py-3 font-black uppercase text-field-900"
            href="/"
          >
            Voltar
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center bg-field-50 px-4 py-10 text-ink">
      <section className="max-w-xl rounded-lg border border-field-100 bg-white p-6 text-center shadow-field">
        <LockKeyhole className="mx-auto h-12 w-12 text-field-700" />
        <p className="mt-5 text-sm font-black uppercase text-field-700">
          Acesso liberado
        </p>
        <h1 className="mt-2 text-4xl font-black text-field-900">
          Entre em Campo
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          Seu pagamento foi confirmado. Use o botao abaixo para baixar o manual
          com link temporario e seguro.
        </p>
        <a
          className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-scoreboard px-6 py-3 font-black uppercase text-field-900"
          href={`/api/access/${encodeURIComponent(token)}`}
        >
          <Download aria-hidden className="h-5 w-5" />
          Baixar manual
        </a>
      </section>
    </main>
  );
}
