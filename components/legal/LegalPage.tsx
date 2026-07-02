import Link from "next/link";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  children
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-field-50 text-ink">
      <section className="bg-field-900 px-4 py-12 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-black uppercase text-scoreboard">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-semibold text-field-100">
            Ultima atualizacao: {updatedAt}
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-lg border border-field-100 bg-white p-6 leading-7 text-gray-700 shadow-sm">
          <div className="grid gap-7">{children}</div>
          <div className="mt-8 border-t border-field-100 pt-6">
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-scoreboard px-5 py-2 text-sm font-black uppercase text-field-900"
              href="/"
            >
              Voltar para a landing page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function LegalSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-black text-field-900">{title}</h2>
      <div className="mt-3 grid gap-3">{children}</div>
    </section>
  );
}
