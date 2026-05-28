"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  MessageSquareOff,
  Clock,
  TrendingDown,
  BarChart2,
  DollarSign,
  Flame,
} from "lucide-react";

const pains = [
  {
    icon: MessageSquareOff,
    title: "WhatsApp sin responder",
    description:
      "Docenas de mensajes acumulados sin atender. Leads que esperan y se van con la competencia.",
  },
  {
    icon: Clock,
    title: "Recepcionista saturada",
    description:
      "Tu equipo pierde horas respondiendo consultas repetitivas en lugar de atender a los clientes que ya están en tu centro.",
  },
  {
    icon: Flame,
    title: "Leads que se enfrían",
    description:
      "Una persona ve tu publicidad en Instagram, escribe y no recibe respuesta rápida. En 30 minutos ya olvidó que preguntó.",
  },
  {
    icon: BarChart2,
    title: "Sin métricas de conversión",
    description:
      "No sabes cuántos mensajes se convierten en citas, ni qué campañas traen los mejores clientes.",
  },
  {
    icon: DollarSign,
    title: "Publicidad sin seguimiento",
    description:
      "Gastas en Meta Ads o TikTok pero no tienes sistema para darle seguimiento al lead después del primer contacto.",
  },
  {
    icon: TrendingDown,
    title: "Citas canceladas sin recuperar",
    description:
      "Un cliente cancela y nadie hace seguimiento para reagendar. Ese espacio se pierde y la silla queda vacía.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Problema() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problema" className="relative">
      {/* Banner image with overlay */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80&auto=format"
          alt="Centro de estética ocupado"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8,11,20,0.70)" }}
        />
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080B14] to-transparent" />
      </div>

      <div className="relative py-16 md:py-24">
        {/* Subtle red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DC2626]/4 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/8 text-sm text-red-400 mb-4">
              <span>😩</span>
              <span className="font-medium">El problema</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              ¿Te suena familiar?
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
              La mayoría de centros de belleza y bienestar en Guatemala enfrentan exactamente estos problemas. Y todos tienen solución.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {pains.map((pain) => {
              const Icon = pain.icon;
              return (
                <motion.div
                  key={pain.title}
                  variants={cardVariants}
                  className="group glass-card rounded-2xl p-6 border border-red-500/10 hover:border-red-500/20 transition-all duration-300 hover:bg-red-500/[0.03]"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {pain.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-[#94A3B8] text-base">
              Si identificas <span className="text-white font-semibold">3 o más</span> de estos problemas,{" "}
              <span className="gradient-text font-semibold">IlussIA fue hecho para ti.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
