"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const WA =
  "https://wa.me/50232421865?text=Hola,%20quiero%20saber%20si%20mi%20centro%20califica%20para%20ilussIA";

const items = [
  "Tengo clínica estética, spa, centro capilar u odontología estética",
  "Mi tratamiento promedio supera Q500 / €100",
  "Quiero clientes que paguen sin pedir descuento",
  "Estoy dispuesto a invertir en publicidad",
  "Prefiero automatización a depender solo de mi equipo",
];

// Static positions so SSR is safe (no Math.random)
const PARTICLES = [
  { top: "8%",  left: "4%",  delay: "0s",    size: 3, purple: true  },
  { top: "18%", left: "92%", delay: "0.5s",  size: 2, purple: false },
  { top: "32%", left: "12%", delay: "1s",    size: 4, purple: true  },
  { top: "50%", left: "96%", delay: "1.5s",  size: 2, purple: false },
  { top: "66%", left: "6%",  delay: "0.8s",  size: 3, purple: true  },
  { top: "82%", left: "88%", delay: "0.3s",  size: 2, purple: false },
  { top: "91%", left: "50%", delay: "1.2s",  size: 3, purple: true  },
  { top: "14%", left: "72%", delay: "0.6s",  size: 2, purple: false },
  { top: "46%", left: "44%", delay: "1.8s",  size: 2, purple: true  },
  { top: "76%", left: "28%", delay: "0.9s",  size: 3, purple: false },
  { top: "28%", left: "62%", delay: "1.4s",  size: 2, purple: true  },
  { top: "58%", left: "78%", delay: "0.2s",  size: 4, purple: false },
  { top: "4%",  left: "38%", delay: "1.6s",  size: 2, purple: true  },
  { top: "86%", left: "64%", delay: "0.7s",  size: 3, purple: false },
  { top: "42%", left: "22%", delay: "1.1s",  size: 2, purple: true  },
];

export default function Cualificador() {
  const [checked, setChecked] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );
  const count = checked.filter(Boolean).length;

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const status =
    count === 0
      ? { text: "Marca las que aplican", color: "text-slate-500" }
      : count < 3
      ? { text: "Sigue marcando...", color: "text-yellow-400" }
      : { text: "✓ Tu centro califica — tenemos que hablar", color: "text-[#10B981]" };

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0D1117" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #7C3AED 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.purple ? "#7C3AED" : "#2563EB",
            animation: `float-particle 4s ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7C3AED]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#7C3AED] text-sm font-semibold tracking-wider uppercase mb-3">
            ¿Calificas?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            No trabajamos con todos.
            <br />
            Queremos resultados reales
            <br />
            o no firmamos.
          </h2>
        </motion.div>

        {/* Checklist */}
        <div className="space-y-3 mb-8">
          {items.map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => toggle(i)}
              className="w-full text-left flex items-center gap-4 p-4 rounded-xl glass-card transition-all duration-200 cursor-pointer min-h-[56px]"
              style={{
                borderColor: checked[i]
                  ? "rgba(124,58,237,0.45)"
                  : "rgba(255,255,255,0.06)",
                backgroundColor: checked[i]
                  ? "rgba(124,58,237,0.08)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{
                  border: checked[i] ? "2px solid #7C3AED" : "2px solid #334155",
                  backgroundColor: checked[i] ? "#7C3AED" : "transparent",
                }}
              >
                {checked[i] && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <span
                className="text-sm font-medium leading-snug transition-colors duration-200"
                style={{ color: checked[i] ? "#E2E8F0" : "#94A3B8" }}
              >
                {item}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Reactive status */}
        <motion.p
          key={count}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`text-center font-semibold text-base mb-8 transition-colors duration-300 ${status.color}`}
        >
          {status.text}
        </motion.p>

        {/* CTA (appears at 3+ checks) */}
        <AnimatePresence>
          {count >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center"
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white text-lg font-bold hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-purple-900/40"
              >
                <MessageCircle className="w-5 h-5" />
                Ver si mi centro califica →
              </a>
              <p className="text-slate-500 text-xs mt-4 leading-relaxed max-w-sm mx-auto">
                Auditoría gratuita · 30 min · Solo 3 cupos disponibles este mes ·
                Respondemos por WhatsApp en &lt; 2 horas
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
