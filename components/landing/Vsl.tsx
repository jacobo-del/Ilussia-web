"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, MessageCircle } from "lucide-react";

const WA =
  "https://wa.me/50232421865?text=Hola,%20quiero%20saber%20si%20mi%20centro%20califica%20para%20ilussIA";

export default function Vsl() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0D0A14]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=85&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover object-center opacity-10"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,10,20,0.93)" }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[#7C3AED] text-sm font-semibold tracking-wider uppercase mb-3">
            Ve el sistema en acción
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            3 minutos que pueden cambiar
            <br className="hidden md:block" /> cómo llevas tu clínica
          </h2>
          <p className="text-slate-400 text-lg">
            Jacobo, fundador de ilussIA, te muestra por dentro el Motor de Adquisición.
          </p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mb-8"
        >
          {/*
           * TO EMBED VIDEO: Replace the entire wrapper below with:
           *
           * <div className="relative w-full rounded-2xl overflow-hidden border border-[#7C3AED]/25"
           *      style={{ aspectRatio: "16/9" }}>
           *   <iframe
           *     src="https://www.youtube.com/embed/VIDEO_ID"
           *     className="w-full h-full"
           *     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           *     allowFullScreen
           *   />
           * </div>
           */}
          <div className="video-glow-border rounded-2xl p-[1px]">
            <div
              className="relative w-full rounded-2xl bg-[#0F1629] flex flex-col items-center justify-center overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              {/* Texture */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/6 via-transparent to-[#2563EB]/4 pointer-events-none" />

              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#7C3AED]/20 animate-ping" />
                  <div className="w-20 h-20 rounded-full border-2 border-[#7C3AED]/60 bg-[#7C3AED]/15 flex items-center justify-center shadow-lg shadow-purple-900/30 relative">
                    <Play className="w-8 h-8 text-[#A78BFA] fill-[#A78BFA] translate-x-0.5" />
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    Video disponible próximamente
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    Agenda tu auditoría mientras tanto
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-bold hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-purple-900/30"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar Auditoría por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
