"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Users,
  Clock,
  Quote,
} from "lucide-react";

const before = [
  { text: "WhatsApp respondido manualmente por 2 recepcionistas" },
  { text: "Leads de Instagram sin respuesta por horas o días" },
  { text: "Sin seguimiento a clientes que no confirmaban cita" },
  { text: "Agenda con 30-40% de espacios vacíos cada semana" },
  { text: "Imposible saber cuántos leads venían de cada campaña" },
];

const after = [
  { text: "Sofía (agente IA) responde en menos de 2 minutos, 24/7" },
  { text: "Cada lead de redes sociales entra al CRM automáticamente" },
  { text: "Seguimiento automático para citas no confirmadas y cancelaciones" },
  { text: "Agenda con ocupación del 85-90% de forma consistente" },
  { text: "Dashboard en tiempo real con conversiones por canal" },
];

const stats = [
  { icon: Clock, value: "< 2 min", label: "Tiempo de respuesta" },
  { icon: Calendar, value: "+68%", label: "Citas agendadas" },
  { icon: Users, value: "3x", label: "Leads convertidos" },
  { icon: MessageSquare, value: "2,400+", label: "Mensajes gestionados/mes" },
];

export default function CasoMonreve() {
  return (
    <section id="caso-monreve" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-sm text-[#A78BFA] mb-4">
            <span className="font-medium">✨ Caso de éxito</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Así funciona en{" "}
            <span className="gradient-text">un centro real</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Monreve, centro de belleza y estética en Guatemala, implementó el sistema IlussIA
            y transformó su proceso de captación de clientes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-xl p-4 text-center border border-[#10B981]/15"
              >
                <Icon className="w-4 h-4 text-[#10B981] mx-auto mb-2" />
                <div
                  className="text-2xl font-bold text-[#10B981] mb-0.5"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[#64748B] text-xs">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Before / After + image */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4 mb-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-red-500/15 xl:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-red-500/15 border border-red-500/25 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                Antes de IlussIA
              </h3>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-[#94A3B8] text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-[#10B981]/20 xl:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-[#10B981]/15 border border-[#10B981]/25 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              </div>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                Con IlussIA
              </h3>
            </div>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/15 border border-[#10B981]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                  </div>
                  <span className="text-[#94A3B8] text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual image column — xl only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden xl:block xl:col-span-1 relative rounded-2xl overflow-hidden min-h-[340px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=700&q=80&auto=format"
              alt="Centro de estética moderno"
              fill
              className="object-cover object-center"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/60 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10 border border-[#7C3AED]/20 relative overflow-hidden"
        >
          <div className="absolute top-6 right-8 text-[#7C3AED]/15">
            <Quote className="w-16 h-16" />
          </div>
          <div className="relative z-10">
            <p className="text-white text-lg md:text-xl leading-relaxed mb-6 max-w-3xl">
              "Antes perdíamos clientes todos los días porque no podíamos responder rápido.
              Con el sistema de IlussIA, Sofía responde al instante y ya no me preocupa que alguien
              quede sin atención. Nuestra agenda mejoró notablemente desde el primer mes."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <div className="text-white font-semibold">Andrea V.</div>
                <div className="text-[#64748B] text-sm">Directora · Monreve, Guatemala</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-[#475569] text-xs mt-4">
          * Caso real, resultados propios del cliente. Los números pueden variar según el volumen de tráfico de cada centro.
        </p>
      </div>
    </section>
  );
}
