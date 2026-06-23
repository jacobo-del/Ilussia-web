import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilussia Agency · Clínicas Estéticas que llenan su agenda",
  description:
    "Llenamos la agenda de tu clínica estética o centro de bienestar con pacientes calificados. Meta Ads, CRM y agentes IA para convertir publicidad en citas reales.",
  keywords: [
    "marketing para clinicas esteticas",
    "publicidad clínica médico estética",
    "Meta Ads centros de bienestar",
    "agencia marketing spa premium",
    "agente IA clínica estética",
    "ilussia agency",
  ],
  openGraph: {
    title: "Ilussia Agency · Clínicas Estéticas que llenan su agenda",
    description:
      "Llenamos la agenda de tu clínica estética con pacientes calificados. Meta Ads, CRM y agentes IA.",
    url: "https://ilussia.agency",
    siteName: "Ilussia Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ilussia Agency — Marketing para Clínicas Estéticas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilussia Agency · Clínicas Estéticas que llenan su agenda",
    description:
      "Llenamos la agenda de tu clínica estética con pacientes calificados. Meta Ads, CRM y agentes IA.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://ilussia.agency"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
