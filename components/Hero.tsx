"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import WhatsAppMockup from "./WhatsAppMockup";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#7C3AED]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/8 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-sm text-[#A78BFA] mb-6"
            >
              <span className="text-base">🤖</span>
              <span className="font-medium">Sistema Completo de Adquisición para Centros de Belleza</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Llena tu agenda con{" "}
              <span className="gradient-text">clientes calificados.</span>{" "}
              Automáticamente.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#94A3B8] leading-relaxed mb-8 max-w-lg"
            >
              Creamos y gestionamos tus campañas de Meta Ads y TikTok,
              automatizamos la calificación con IA, y organizamos todo
              en tu CRM —{" "}
              <span className="text-white font-medium">
                para que tu agenda se llene sola.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <button
                onClick={() => scrollToSection("#como-funciona")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-semibold text-base hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-purple-900/30"
              >
                Ver cómo funciona
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("#caso-monreve")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#1E293B] text-white font-semibold text-base hover:bg-white/5 hover:border-[#334155] active:scale-[0.98] transition-all duration-200"
              >
                <Play className="w-4 h-4 text-[#7C3AED]" />
                Ver caso de éxito
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                3 centros activos
              </div>
              <div className="w-1 h-1 rounded-full bg-[#1E293B]" />
              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Guatemala
              </div>
              <div className="w-1 h-1 rounded-full bg-[#1E293B]" />
              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Resultados desde el primer mes
              </div>
            </motion.div>
          </div>

          {/* Right column — WhatsApp mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <WhatsAppMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
