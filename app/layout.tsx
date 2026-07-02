import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://campo-para-vendedores.vercel.app"
  ),
  title: "Entre em Campo | Manual Oficial de Campo para Vendedores",
  description:
    "Desafio pratico de 21 dias para criar rotina de prospeccao, abordar clientes com mais confianca e vender com mais constancia.",
  openGraph: {
    title: "Entre em Campo",
    description:
      "Manual pratico de 21 dias para vendedores que querem parar de adiar contatos e entrar em campo.",
    url: "/",
    siteName: "Entre em Campo",
    images: [
      {
        url: "/assets/entre-em-campo-cover.png",
        width: 960,
        height: 1500,
        alt: "Capa do manual Entre em Campo"
      }
    ],
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
