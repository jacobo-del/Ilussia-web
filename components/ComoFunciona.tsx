"use client";

import { motion } from "framer-motion";
import { Search, Pencil, Plug, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Auditoría gratuita",
    description:
      "Analizamos tu proceso actual: cómo recibes leads, qué tan rápido respondes, qué pasa con los que no agendan. Identificamos exactamente dónde estás perdiendo dinero.",
    duration: "30 min · Sin compromiso",
    color: "#7C3AED",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Diseño del sistema",
    description:
      "Configuramos tu agente IA con el tono y los servicios de tu clínica, diseñamos el pipeline en Kommo y mapeamos todas las automatizaciones de seguimiento.",
    duration: "3-5 días · Tú apruebas todo",
    color: "#2563EB",
  },
  {
    number: "03",
    icon: Plug,
    title: "Implementación",
    description:
      "Conectamos WhatsApp Business, el CRM Kommo y las automatizaciones con N8N. Integramos con tus campañas de Meta Ads, TikTok e Instagram.",
    duration: "5-7 días · Cero downtime",
    color: "#0EA5E9",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento y seguimiento",
    description:
      "El sistema entra en vivo. Tú ves los resultados en tiempo real. Nosotros monitoreamos y optimizamos cada semana durante el primer mes.",
    duration: "Seguimiento continuo",
    color: "#10B981",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-sm text-[#60A5FA] mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span className="font-medium">Proceso de implementación</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Empezamos en{" "}
            <span className="gradient-text">2 semanas</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Un proceso claro, sin tecnicismos. Tú apruebas cada paso antes de que avancemos.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-[#7C3AED]/40 via-[#2563EB]/40 to-[#10B981]/40" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.number} className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-10">
                  {/* Dot on the center line */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border-2 items-center justify-center"
                    style={{
                      backgroundColor: "#080B14",
                      borderColor: step.color,
                      boxShadow: `0 0 20px ${step.color}40`,
                    }}
                  >
                    <span className="text-xs font-bold" style={{ color: step.color }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Left / Right placement */}
                  <div className={`${isEven ? "lg:col-start-1" : "lg:col-start-2"} lg:row-start-${index + 1}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 md:p-8 border hover:scale-[1.01] transition-transform duration-300"
                      style={{ borderColor: `${step.color}25` }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: `${step.color}15`,
                            border: `1px solid ${step.color}30`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: step.color }} />
                        </div>
                        <div className="flex-1">
                          {/* Mobile step number */}
                          <div
                            className="lg:hidden text-xs font-bold mb-1"
                            style={{ color: step.color }}
                          >
                            Paso {step.number}
                          </div>
                          <h3
                            className="text-white font-bold text-lg mb-2"
                            style={{ fontFamily: "var(--font-outfit)" }}
                          >
                            {step.title}
                          </h3>
                          <p className="text-[#94A3B8] text-sm leading-relaxed mb-3">
                            {step.description}
                          </p>
                          <div
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                            style={{
                              color: step.color,
                              backgroundColor: `${step.color}12`,
                            }}
                          >
                            <span>⏱</span>
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
