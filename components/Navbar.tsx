"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const WA = "https://wa.me/50232421865?text=Hola,%20quiero%20la%20auditoría%20gratuita%20de%20IlussIA";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Resultados", href: "#resultados" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080B14]/80 backdrop-blur-xl border-b border-[#1E293B]/60 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center"
            >
              <Image
                src="/logo-ilussia.png"
                height={28}
                width={110}
                alt="IlussIA"
                className="object-contain"
                style={{ maxHeight: "28px", width: "auto", mixBlendMode: "screen" }}
                priority
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-3 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + mobile menu */}
            <div className="flex items-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-900/25"
              >
                Auditoría Gratuita
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#080B14]/95 backdrop-blur-xl border-b border-[#1E293B] md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 text-left text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 text-center font-semibold rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white"
              >
                Auditoría Gratuita
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
