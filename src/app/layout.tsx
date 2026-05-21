import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zarpfy Marketing AI — Venda em marketplaces com IA",
  description:
    "Analise produtos, concorrentes e oportunidades em marketplaces com IA. Decida com dados antes de investir.",
  openGraph: {
    title: "Zarpfy Marketing AI",
    description: "Inteligência artificial para vender melhor em marketplaces.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@zarpfy",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
