"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Zap, Clock, TrendingUp, ShieldCheck, BarChart2 } from "lucide-react";

type Metric = {
  value: string;
  label: string;
  description: string;
  icon: React.ElementType;
  prefix?: string;
  suffix?: string;
};

const metrics: Metric[] = [
  {
    value: "2",
    prefix: "< ",
    suffix: " min",
    label: "Primera respuesta",
    description: "Sofía responde cualquier consulta antes de que el lead se enfríe",
    icon: Zap,
  },
  {
    value: "24/7",
    label: "Disponibilidad",
    description: "El agente trabaja noches, fines de semana y días festivos sin descanso",
    icon: Clock,
  },
  {
    value: "3",
    suffix: "x",
    label: "Más leads calificados",
    description: "Comparado con atención manual, la IA convierte 3x más prospectos en citas",
    icon: TrendingUp,
  },
  {
    value: "0",
    label: "Leads perdidos",
    description: "Cada prospecto recibe seguimiento automático hasta agendar o descartar",
    icon: ShieldCheck,
  },
  {
    value: "2",
    suffix: "x",
    label: "Mejor calidad de leads",
    description: "Con CAPI instalado, Meta aprende más rápido y atrae perfiles con mayor intención de agendar",
    icon: BarChart2,
  },
];

function AnimatedNumber({ value, suffix, prefix }: { value: string; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (isNaN(Number(value))) {
    return (
      <span ref={ref} className="text-5xl md:text-6xl font-bold text-[#10B981]" style={{ fontFamily: "var(--font-outfit)" }}>
        {prefix}{value}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-[#10B981]" style={{ fontFamily: "var(--font-outfit)" }}>
      {prefix}
      <CountUp to={Number(value)} isInView={isInView} />
      {suffix}
    </span>
  );
}

function CountUp({ to, isInView }: { to: number; isInView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [isInView, to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export default function Metricas() {
  return (
    <section id="resultados" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=80&auto=format"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8,11,20,0.85)" }}
        />
      </div>

      {/* Green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />

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
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="font-medium">Resultados</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Resultados que puedes medir{" "}
            <span className="gradient-text">desde el primer mes</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Números reales de centros de belleza y bienestar que ya usan el sistema IlussIA.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-7 flex flex-col gap-4 border border-[#10B981]/10 hover:border-[#10B981]/20 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center group-hover:bg-[#10B981]/15 transition-colors">
                  <Icon className="w-5 h-5 text-[#10B981]" />
                </div>

                <AnimatedNumber
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                />

                <div>
                  <div className="text-white font-semibold text-base mb-1">
                    {metric.label}
                  </div>
                  <div className="text-[#64748B] text-sm leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
