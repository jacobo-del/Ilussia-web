"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WA =
  "https://wa.me/50232421865?text=Hola,%20quiero%20saber%20si%20mi%20centro%20califica%20para%20ilussIA";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080B14]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center"
        >
          <Image
            src="/logo-ilussia.png"
            height={28}
            width={110}
            alt="ilussIA"
            className="object-contain"
            style={{ maxHeight: "28px", width: "auto", mixBlendMode: "screen" }}
            priority
          />
        </button>

        {/* Single CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-900/30"
        >
          Ver si califico
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
}
