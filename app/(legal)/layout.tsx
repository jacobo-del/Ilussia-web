import type { ReactNode } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./legal.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`legal-page ${cormorant.variable} ${dmSans.variable}`}>
      {children}
    </div>
  );
}
