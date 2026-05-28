"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, TrendingUp, Workflow } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    color: "#F97316",
    borderColor: "rgba(249,115,22,0.2)",
    bgColor: "rgba(249,115,22,0.08)",
    badge: "Meta Conversions API",
    title: "606 eventos rastreados via CAPI",
    description:
      "Datos reales de cliente activo. Cada lead que entra por WhatsApp queda registrado en Meta con nombre, teléfono y etapa del funnel — para que el algoritmo aprenda quién compra de verdad.",
    image: "/pruebas/meta-capi.png",
    imageAlt: "Dashboard Meta CAPI - Eventos de conversión activos",
  },
  {
    icon: TrendingUp,
    color: "#10B981",
    borderColor: "rgba(16,185,129,0.2)",
    bgColor: "rgba(16,185,129,0.08)",
    badge: "Meta Ads Manager",
    title: "ROAS 4.05 — Q26,339 en conversiones",
    description:
      "Últimos 30 días de campaña activa. Por cada quetzal invertido en publicidad, el sistema retornó Q4.05 en valor rastreado. 27 compras atribuidas con precisión.",
    image: "/pruebas/meta-roas.png",
    imageAlt: "Meta Ads Manager - ROAS 4.05 y 27 compras rastreadas",
    featured: true,
  },
  {
    icon: Workflow,
    color: "#A78BFA",
    borderColor: "rgba(167,139,250,0.2)",
    bgColor: "rgba(167,139,250,0.08)",
    badge: "N8N Automation",
    title: "Automatización ejecutándose en tiempo real",
    description:
      "El flujo Kommo → N8N → Meta CAPI procesa cada lead en menos de 2 segundos. Webhook, extracción de datos, hasheo y envío a Meta — todo automático, sin intervención humana.",
    image: "/pruebas/n8n-flujo.png",
    imageAlt: "Flujo N8N - Automatización CAPI en tiempo real",
  },
];

export default function PruebaSocial() {
  return (
    <section id="prueba-social" className="relative py-24 md:py-32">
      {/* Top divider */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[400px] bg-[#F97316]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-[#10B981]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-sm text-[#10B981] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-medium">Datos reales, no promesas</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Prueba técnica de{" "}
            <span className="gradient-text">lo que construimos</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Capturas reales de sistemas activos. Así se ve el sistema IlussIA
            funcionando en producción para un cliente real en Guatemala.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className={`glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.015] ${
                  card.featured ? "ring-1 ring-[#10B981]/25" : ""
                }`}
                style={{ borderColor: card.borderColor }}
              >
                {/* Badge */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: card.bgColor,
                      border: `1px solid ${card.borderColor}`,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: card.color }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-white font-bold text-lg leading-snug"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {card.title}
                </h3>

                {/* Image */}
                <div
                  className="rounded-xl overflow-hidden border"
                  style={{ borderColor: card.borderColor }}
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#475569] text-sm mt-10"
        >
          Capturas de pantalla reales tomadas de sistemas activos. Nombres de clientes omitidos por confidencialidad.
        </motion.p>
      </div>
    </section>
  );
}
