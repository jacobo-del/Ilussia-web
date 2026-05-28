"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Zap, BarChart2, MapPin } from "lucide-react";
import type { Variants } from "framer-motion";

const WA =
  "https://wa.me/50232421865?text=Hola,%20quiero%20saber%20si%20mi%20centro%20califica%20para%20ilussIA";

const pills = [
  { icon: Zap, text: "3 centros activos" },
  { icon: BarChart2, text: "ROAS promedio 4.05x" },
  { icon: MapPin, text: "Guatemala" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Layer 1 — background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
          priority
        />
      </div>
      {/* Layer 2 — gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080B14] via-[#080B14]/60 to-[#080B14]" />
      {/* Layer 3 — grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/5 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/6 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 w-[400px] h-[400px] rounded-full bg-[#2563EB]/6 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block mb-8"
        >
          <div
            className="rounded-full p-[1px]"
            style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
          >
            <div className="rounded-full bg-[#080B14] px-4 py-2 text-sm font-semibold tracking-wider uppercase text-[#A78BFA]">
              ✦ Motor de Adquisición para Centros de Belleza y Estética Premium ✦
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-white"
        >
          NO NECESITAS MÁS
          <br />
          LIKES NI SEGUIDORES.
          <br />
          NECESITAS PACIENTES
          <br />
          QUE{" "}
          <span className="animated-gradient-text">PAGUEN.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          El 80% de las clínicas estéticas pierden dinero atendiendo curiosos por WhatsApp.
          Te instalamos un Motor de Adquisición con IA que filtra, agenda y conecta cada
          venta con Meta Ads.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white text-lg font-bold hover:opacity-90 active:scale-[0.98] transition-opacity duration-200 shadow-xl shadow-purple-900/30"
          >
            <MessageCircle className="w-5 h-5" />
            Ver si mi centro califica →
          </a>
        </motion.div>

        {/* Indicators */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          {pills.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm"
            >
              <Icon className="w-3.5 h-3.5 text-[#10B981]" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
