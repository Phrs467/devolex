import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Devolex | Soluções Digitais & Desenvolvimento de Software",
  description: "Transformamos ideias em soluções digitais que geram resultados. Criamos landing pages, sites profissionais, sistemas personalizados e automações.",
  openGraph: {
    title: "Devolex | Soluções Digitais & Desenvolvimento de Software",
    description: "Transformamos ideias em soluções digitais que geram resultados.",
    url: "https://devolex.com.br",
    siteName: "Devolex",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
