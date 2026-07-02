import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entre em Campo | Manual Oficial de Campo para Vendedores",
  description:
    "Desafio pratico de 21 dias para criar rotina de prospeccao, abordar clientes com mais confianca e vender com mais constancia."
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
