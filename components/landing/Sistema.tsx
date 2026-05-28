"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";
import {
  Megaphone,
  MessageCircle,
  Bot,
  Filter,
  Database,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

const nodes = [
  { icon: Megaphone, label: "Meta Ads", sub: "Facebook e Instagram", color: "#F59E0B", badge: null },
  { icon: MessageCircle, label: "WhatsApp", sub: "Lead llega directo", color: "#10B981", badge: null },
  { icon: Bot, label: "Sofía IA", sub: "Responde en < 2 min", color: "#7C3AED", badge: "El núcleo" },
  { icon: Filter, label: "Calificación", sub: "Score automático", color: "#2563EB", badge: null },
  { icon: Database, label: "CRM Kommo", sub: "Pipeline organizado", color: "#10B981", badge: null },
  { icon: CalendarCheck, label: "Cita confirmada", sub: "Tu equipo cierra", color: "#22C55E", badge: null },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Sistema() {
  const lineRef = useRef(null);
  const inView = useInView(lineRef, { once: true });

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0D1117" }}
    >
      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #7C3AED 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#2563EB]/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#7C3AED] text-sm font-semibold tracking-wider uppercase mb-3">
            La solución
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            El Motor de Adquisición ilussIA
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No somos una agencia de posteos. Somos ingeniería de datos aplicada a la
            captación de pacientes premium.
          </p>
        </motion.div>

        {/* Pipeline — desktop */}
        <div className="hidden lg:block" ref={lineRef}>
          <div className="relative flex items-start">
            {/* Track line */}
            <div className="absolute top-[28px] left-[48px] right-[48px] h-[2px] bg-[#1E293B] z-0">
              <motion.div
                className="h-full"
                style={{
                  background: "linear-gradient(90deg, #F59E0B, #10B981, #7C3AED, #2563EB, #10B981, #22C55E)",
                  transformOrigin: "left",
                }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
              />
            </div>

            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={node.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col items-center relative z-10 px-1"
                >
                  {node.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-lg shadow-purple-900/30">
                        {node.badge}
                      </div>
                    </div>
                  )}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-3 border-2"
                    style={{
                      backgroundColor: `${node.color}15`,
                      borderColor: `${node.color}50`,
                      boxShadow: `0 0 24px ${node.color}20`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: node.color }} />
                  </div>
                  <p className="text-white font-bold text-sm text-center leading-tight">
                    {node.label}
                  </p>
                  <p className="text-slate-500 text-xs text-center mt-1 leading-tight">
                    {node.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pipeline — mobile */}
        <div className="lg:hidden flex flex-col gap-3">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <div key={node.label} className="flex flex-col items-center gap-1">
                <motion.div
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full glass-card rounded-xl p-4 flex items-center gap-4"
                  style={{ borderColor: `${node.color}25` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${node.color}15`,
                      border: `1px solid ${node.color}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: node.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-white font-bold text-sm">{node.label}</p>
                      {node.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white">
                          {node.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-xs">{node.sub}</p>
                  </div>
                  <span className="text-xs font-bold text-slate-700 flex-shrink-0">
                    #{i + 1}
                  </span>
                </motion.div>
                {i < nodes.length - 1 && (
                  <div className="text-slate-800">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 glass-card rounded-2xl p-6 md:p-8 text-center border border-[#7C3AED]/15"
        >
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Sofía gestiona el primer contacto{" "}
            <span className="text-white font-bold">24/7</span>. Tu equipo recibe solo leads
            listos para cerrar.{" "}
            <span className="text-[#10B981] font-semibold">
              Sin tiempo perdido en consultas repetitivas.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
