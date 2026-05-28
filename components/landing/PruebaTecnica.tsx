"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Variants } from "framer-motion";

const WA =
  "https://wa.me/50232421865?text=Hola,%20quiero%20saber%20si%20mi%20centro%20califica%20para%20ilussIA";

const cards = [
  {
    badge: "Meta Ads Manager",
    title: "ROAS 4.05x — Q26,339 rastreados",
    description:
      "Por cada quetzal invertido, el sistema retornó Q4.05 en valor rastreado. 27 compras atribuidas en 30 días.",
    stat: "27 compras · 30 días",
    image: "/pruebas/meta-roas.png",
    imageAlt: "Meta Ads Manager - ROAS 4.05x",
    color: "#10B981",
    borderColor: "rgba(16,185,129,0.2)",
  },
  {
    badge: "N8N Automation",
    title: "Automatización en 1.72 segundos",
    description:
      "De Kommo a Meta CAPI en tiempo real. Cada lead procesado, hasheado y enviado al algoritmo automáticamente.",
    stat: "100% sin intervención humana",
    image: "/pruebas/n8n-flujo.png",
    imageAlt: "N8N Automation Flow",
    color: "#A78BFA",
    borderColor: "rgba(167,139,250,0.2)",
  },
  {
    badge: "Conversions API",
    title: "606 eventos rastreados via CAPI",
    description:
      "Datos del servidor, no del browser. El algoritmo de Meta aprende quién compra de verdad — no solo quién hace clic.",
    stat: "Activo · Última recepción: hace 5 horas",
    image: "/pruebas/meta-capi.png",
    imageAlt: "Meta CAPI Events Dashboard",
    color: "#F97316",
    borderColor: "rgba(249,115,22,0.2)",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.12 },
  }),
};

export default function PruebaTecnica() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0D1117" }}
    >
      {/* Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#10B981]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] bg-[#F97316]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#10B981] text-sm font-semibold tracking-wider uppercase mb-3">
            Resultados reales
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Rastreamos el retorno hasta
            <br className="hidden md:block" /> la caja registradora
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mientras otras agencias reportan &apos;likes&apos;, nosotros mostramos el sistema real.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
              style={{ borderColor: card.borderColor }}
            >
              {/* Badge */}
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: card.color }}
              >
                {card.badge}
              </span>

              {/* Image */}
              <div
                className="rounded-xl overflow-hidden relative border"
                style={{ aspectRatio: "16/9", borderColor: card.borderColor }}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-base leading-snug">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {card.description}
              </p>
              <div
                className="text-xs font-semibold px-3 py-1.5 rounded-full w-fit"
                style={{ color: card.color, backgroundColor: `${card.color}15` }}
              >
                {card.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-bold hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-purple-900/30"
          >
            <MessageCircle className="w-4 h-4" />
            Quiero resultados así para mi centro →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
