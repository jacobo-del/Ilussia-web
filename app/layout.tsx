import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IlussIA — Automatización e IA para centros de belleza, estética y bienestar premium en Guatemala",
  description:
    "Automatizamos tu WhatsApp y CRM para que tu centro de belleza o estética llene su agenda con clientes calificados las 24 horas. Agente IA + CRM Kommo + Automatización N8N.",
  keywords: [
    "agencia IA Guatemala",
    "automatización WhatsApp spa",
    "CRM centros de belleza",
    "IlussIA",
    "inteligencia artificial estética bienestar",
    "automatización clínica capilar",
    "odontología estética IA Guatemala",
  ],
  openGraph: {
    title: "IlussIA — Automatización e IA para centros de belleza y bienestar premium",
    description:
      "Llena tu agenda con clientes calificados. Automáticamente.",
    url: "https://ilussia.agency",
    siteName: "IlussIA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IlussIA — Automatización IA para Clínicas Estéticas",
      },
    ],
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IlussIA — Sistema de IA para Clínicas Estéticas",
    description:
      "Llena tu agenda con pacientes calificados. Automáticamente.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full antialiased bg-[#080B14] text-white">
        {children}
      </body>
    </html>
  );
}
