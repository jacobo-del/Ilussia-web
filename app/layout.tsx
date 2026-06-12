import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilussia Agency · Performance Marketing Latinoamérica",
  description:
    "Agencia de performance marketing en Latinoamérica. Meta Ads, CRM y agentes IA para convertir publicidad en ventas reales.",
  keywords: [
    "performance marketing Latinoamérica",
    "Meta Ads Latinoamérica",
    "agencia publicidad digital Latinoamérica",
    "CRM Latinoamérica",
    "agente IA ventas",
    "ilussia agency",
  ],
  openGraph: {
    title: "Ilussia Agency · Performance Marketing Latinoamérica",
    description:
      "Agencia de performance marketing en Latinoamérica. Meta Ads, CRM y agentes IA para convertir publicidad en ventas reales.",
    url: "https://ilussia.agency",
    siteName: "Ilussia Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ilussia Agency — Performance Marketing Latinoamérica",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilussia Agency · Performance Marketing Latinoamérica",
    description:
      "Agencia de performance marketing en Latinoamérica. Meta Ads, CRM y agentes IA para convertir publicidad en ventas reales.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://ilussia.agency"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
