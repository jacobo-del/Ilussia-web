"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, MessageCircle } from "lucide-react";

const WA = "https://wa.me/50232421865?text=Hola,%20quiero%20la%20auditoría%20gratuita%20de%20IlussIA";

export default function Vsl() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7C3AED]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-sm text-[#A78BFA] mb-5"
        >
          <Play className="w-3.5 h-3.5" />
          <span className="font-medium">Ve cómo funciona en 2 minutos</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.1]"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          ¿Cómo llenamos tu agenda con{" "}
          <span className="gradient-text">clientes calificados?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#94A3B8] text-base md:text-lg mb-10"
        >
          Jacobo, fundador de IlussIA, te explica el sistema en menos de 3 minutos.
        </motion.p>

        {/* Video placeholder / iframe container */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mb-8"
          style={{ maxWidth: 800 }}
        >
          {/*
           * TO EMBED THE VIDEO: Replace the entire <div> placeholder below with:
           *
           * <div className="relative w-full rounded-2xl overflow-hidden border border-[#7C3AED]/25 shadow-2xl shadow-purple-900/20" style={{ aspectRatio: "16/9" }}>
           *   <iframe
           *     src="https://www.youtube.com/embed/VIDEO_ID"
           *     className="w-full h-full rounded-2xl"
           *     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           *     allowFullScreen
           *   />
           * </div>
           */}
          <div
            className="relative w-full rounded-2xl border border-[#7C3AED]/25 bg-[#0F1629] shadow-2xl shadow-purple-900/20 flex flex-col items-center justify-center gap-5 overflow-hidden"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                backgroundSize: "28px 28px",
              }}
            />
            {/* Glow center */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/8 via-transparent to-[#2563EB]/6 pointer-events-none" />

            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full border-2 border-[#7C3AED]/50 bg-[#7C3AED]/15 flex items-center justify-center shadow-lg shadow-purple-900/30">
                <Play className="w-8 h-8 text-[#A78BFA] fill-[#A78BFA] translate-x-0.5" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">
                  Video disponible próximamente
                </p>
                <p className="text-[#64748B] text-sm mt-1">
                  Mientras tanto, agenda tu auditoría gratuita
                </p>
              </div>
            </div>

            {/* Corner badge */}
            <div className="absolute bottom-4 right-4 bg-[#080B14]/80 border border-[#1E293B] rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <p className="text-[#64748B] text-xs">IlussIA · Sistema de IA</p>
            </div>
          </div>
        </motion.div>

        {/* CTA below video */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-semibold text-base hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-purple-900/25"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar Auditoría por WhatsApp
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
