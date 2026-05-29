"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { MessageCircle, CheckCircle2, XCircle } from "lucide-react";
import type { Variants } from "framer-motion";

const WA =
  "https://wa.me/50232421865?text=Hola,%20quiero%20saber%20si%20mi%20centro%20califica%20para%20ilussIA";

function CountUp({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, to, { duration: 1.5, ease: "easeOut" });
    return ctrl.stop;
  }, [inView, to, count]);

  useEffect(() => {
    return count.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
    });
  }, [count, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

const metrics = [
  { to: 2, prefix: "< ", suffix: " min", label: "Primera respuesta" },
  { to: 68, prefix: "+", suffix: "%", label: "Más citas agendadas" },
  { to: 3, suffix: "x", label: "Leads convertidos" },
  { to: 2400, suffix: "+", label: "Mensajes/mes" },
];

const before = [
  "WhatsApp manual con 2 recepcionistas",
  "Leads sin respuesta por horas",
  "Agenda 30-40% vacía cada semana",
  "Sin trazabilidad de campañas",
  "Citas canceladas sin recuperar",
];

const after = [
  "El agente responde en < 2 min, 24/7",
  "Cada lead entra al CRM automáticamente",
  "Agenda 85-90% ocupada consistentemente",
  "Dashboard en tiempo real por canal",
  "Seguimiento automático de cancelaciones",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CasoMonreve() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0D0A14]">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=900&q=85&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover object-center opacity-12"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,10,20,0.90)" }}
        />
      </div>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          {/* Logo cliente */}
          <div className="flex justify-center mb-6">
            <p className="text-2xl font-light tracking-[0.3em] text-white/80 uppercase text-center">
              Mon Rêve
              <span className="block text-xs tracking-widest text-slate-400 mt-1">
                Centro Estético
              </span>
            </p>
          </div>
          <p className="text-[#10B981] text-sm font-semibold tracking-wider uppercase mb-3">
            Caso de éxito
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Mon Rêve — Centro Estético
            <br className="hidden md:block" /> Guatemala
          </h2>
        </motion.div>

        {/* Metrics 2x2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5 md:p-6 text-center border border-[#10B981]/10"
            >
              <div className="text-4xl md:text-5xl font-black text-[#10B981] mb-1">
                <CountUp to={m.to} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="text-slate-400 text-sm">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 border border-red-500/20"
          >
            <p className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4">
              Antes
            </p>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 border border-[#10B981]/20"
          >
            <p className="text-[#10B981] font-bold text-sm uppercase tracking-wider mb-4">
              Con ilussIA
            </p>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 md:p-8 border border-[#7C3AED]/20 text-center max-w-2xl mx-auto mb-10"
        >
          <div className="text-5xl text-[#7C3AED] leading-none mb-4 font-serif">"</div>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
            Cambiamos por completo cómo captamos clientes. Ahora sabemos qué anuncio trae
            a cada persona que paga, el sistema atiende al instante, y aunque siempre hay
            curiosos, nuestro equipo ya no pierde el día respondiéndoles.
          </p>
          <p className="text-slate-500 text-sm font-semibold">— Mon Rêve, Centro Estético · Guatemala</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-bold hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-purple-900/30"
          >
            <MessageCircle className="w-4 h-4" />
            Quiero estos resultados para mi centro →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
