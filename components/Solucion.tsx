"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Megaphone,
  MessageCircle,
  Bot,
  Star,
  Database,
  CalendarCheck,
  Bell,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: TrendingUp,
    label: "Campañas de Ads",
    description: "Meta Ads, TikTok o Google Ads",
    color: "#F97316",
    bgColor: "rgba(249,115,22,0.1)",
    borderColor: "rgba(249,115,22,0.2)",
  },
  {
    icon: Megaphone,
    label: "Lead en Redes",
    description: "Meta Ads, TikTok o Instagram",
    color: "#F59E0B",
    bgColor: "rgba(245,158,11,0.1)",
    borderColor: "rgba(245,158,11,0.2)",
  },
  {
    icon: MessageCircle,
    label: "Llega a WhatsApp",
    description: "Un mensaje directo a tu número",
    color: "#25D366",
    bgColor: "rgba(37,211,102,0.1)",
    borderColor: "rgba(37,211,102,0.2)",
  },
  {
    icon: Bot,
    label: "Sofía responde",
    description: "Agente IA en menos de 2 min",
    color: "#A78BFA",
    bgColor: "rgba(167,139,250,0.1)",
    borderColor: "rgba(167,139,250,0.2)",
  },
  {
    icon: Star,
    label: "Calificación",
    description: "Score automático del lead",
    color: "#7C3AED",
    bgColor: "rgba(124,58,237,0.1)",
    borderColor: "rgba(124,58,237,0.2)",
  },
  {
    icon: Database,
    label: "CRM Kommo",
    description: "Pipeline organizado y visible",
    color: "#2563EB",
    bgColor: "rgba(37,99,235,0.1)",
    borderColor: "rgba(37,99,235,0.2)",
  },
  {
    icon: CalendarCheck,
    label: "Cita agendada",
    description: "Confirmación automática",
    color: "#10B981",
    bgColor: "rgba(16,185,129,0.1)",
    borderColor: "rgba(16,185,129,0.2)",
  },
  {
    icon: Bell,
    label: "Notificación",
    description: "Tu equipo recibe el aviso",
    color: "#06B6D4",
    bgColor: "rgba(6,182,212,0.1)",
    borderColor: "rgba(6,182,212,0.2)",
  },
];

export default function Solucion() {
  return (
    <section id="solucion" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8,11,20,0.88)" }}
        />
      </div>

      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7C3AED]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-sm text-[#A78BFA] mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span className="font-medium">La solución</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Un sistema que trabaja mientras{" "}
            <span className="gradient-text">tú atiendes clientes</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Desde el anuncio en redes hasta la cita confirmada,
            todo el proceso sucede de forma automática.
          </p>
        </motion.div>

        {/* Pipeline flow — desktop */}
        <div className="hidden lg:block">
          <div className="relative flex items-start justify-between gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-start gap-2 flex-1 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex-1 min-w-0"
                  >
                    <div
                      className="glass-card rounded-2xl p-4 flex flex-col items-center text-center gap-3 hover:scale-[1.03] transition-transform duration-300"
                      style={{ borderColor: step.borderColor }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: step.bgColor,
                          border: `1px solid ${step.borderColor}`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm mb-1">
                          {step.label}
                        </div>
                        <div className="text-[#64748B] text-xs leading-tight">
                          {step.description}
                        </div>
                      </div>
                      <div
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          color: step.color,
                          backgroundColor: step.bgColor,
                        }}
                      >
                        #{index}
                      </div>
                    </div>
                  </motion.div>

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.3 }}
                      className="flex-shrink-0 mt-6 text-[#1E293B]"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile — vertical list */}
        <div className="lg:hidden flex flex-col gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex flex-col items-center gap-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="w-full glass-card rounded-2xl p-4 flex items-center gap-4"
                  style={{ borderColor: step.borderColor }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: step.bgColor,
                      border: `1px solid ${step.borderColor}`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">
                      {step.label}
                    </div>
                    <div className="text-[#64748B] text-xs">{step.description}</div>
                  </div>
                  <div
                    className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ color: step.color, backgroundColor: step.bgColor }}
                  >
                    #{index}
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="text-[#1E293B]">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 glass-card rounded-2xl p-6 md:p-8 border border-[#7C3AED]/20 text-center"
        >
          <p className="text-[#94A3B8] text-base md:text-lg">
            Sofía gestiona el primer contacto{" "}
            <span className="text-white font-bold">24/7</span>. Tu equipo recibe
            solo los leads calificados, listos para cerrar.{" "}
            <span className="gradient-text font-semibold">
              Sin tiempo perdido en consultas repetitivas.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
