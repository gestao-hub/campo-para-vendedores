"use client";

import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { useState } from "react";

type CheckoutFormProps = {
  productSlug: string;
};

type CheckoutState = "idle" | "loading" | "error";

export function CheckoutForm({ productSlug }: CheckoutFormProps) {
  const [state, setState] = useState<CheckoutState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      productSlug,
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      cpfCnpj: String(formData.get("cpfCnpj") ?? "").replace(/\D/g, "")
    };

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as {
        checkoutUrl?: string;
        error?: string;
      };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error ?? "Nao foi possivel iniciar o pagamento.");
      }

      window.location.href = data.checkoutUrl;
    } catch (checkoutError) {
      setState("error");
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Nao foi possivel iniciar o pagamento."
      );
    }
  }

  return (
    <form
      className="grid gap-3 rounded-lg border border-field-100 bg-white p-4 shadow-field"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-1">
        <label className="text-sm font-bold text-field-900" htmlFor="name">
          Nome completo
        </label>
        <input
          className="min-h-12 rounded-md border border-field-100 px-3 text-base outline-none ring-field-500 transition focus:ring-2"
          id="name"
          name="name"
          placeholder="Seu nome"
          required
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-bold text-field-900" htmlFor="email">
          E-mail de acesso
        </label>
        <input
          className="min-h-12 rounded-md border border-field-100 px-3 text-base outline-none ring-field-500 transition focus:ring-2"
          id="email"
          name="email"
          placeholder="voce@email.com"
          required
          type="email"
        />
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-bold text-field-900" htmlFor="cpfCnpj">
          CPF ou CNPJ
        </label>
        <input
          className="min-h-12 rounded-md border border-field-100 px-3 text-base outline-none ring-field-500 transition focus:ring-2"
          id="cpfCnpj"
          inputMode="numeric"
          name="cpfCnpj"
          placeholder="Somente numeros"
        />
      </div>

      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}

      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-scoreboard px-5 py-3 text-base font-black uppercase text-field-900 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={state === "loading"}
        type="submit"
      >
        {state === "loading" ? (
          <Loader2 aria-hidden className="h-5 w-5 animate-spin" />
        ) : (
          <ArrowRight aria-hidden className="h-5 w-5" />
        )}
        Quero comecar hoje
      </button>

      <p className="inline-flex items-start gap-2 text-xs font-semibold leading-relaxed text-gray-600">
        <ShieldCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-field-700" />
        Pagamento processado pelo Asaas. O acesso e enviado apos a confirmacao.
      </p>
    </form>
  );
}
