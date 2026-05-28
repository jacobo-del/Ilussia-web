"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Clock, BarChart2, CalendarX2, ChevronDown } from "lucide-react";
import type { Variants } from "framer-motion";

const symptoms = [
  {
    icon: Clock,
    color: "#EF4444",
    number: "01",
    title: "Tiempo perdido en curiosos",
    description:
      "Tu recepcionista responde horas de '¿cuánto cuesta?' a personas que nunca van a agendar. Los leads serios esperan sin respuesta y se van.",
  },
  {
    icon: BarChart2,
    color: "#F97316",
    number: "02",
    title: "Publicidad sin trazabilidad",
    description:
      "Pagas Meta Ads pero nadie sabe cuántos tratamientos reales se vendieron. Solo ves 'costo por mensaje'.",
  },
  {
    icon: CalendarX2,
    color: "#EF4444",
    number: "03",
    title: "Agenda con huecos semanales",
    description:
      "Haces tratamientos de alto valor pero compites por precio porque no filtras a quien puede pagar.",
  },
];

const slideDown: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.25 } },
};

export default function Dolor() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0D0A14]">
      {/* Warm purple glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=85&auto=format&fit=crop"
              alt="Clínica estética"
              width={700}
              height={600}
              className="w-full object-cover rounded-2xl"
              style={{ maxHeight: "580px" }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                boxShadow:
                  "inset 0 0 60px rgba(124,58,237,0.12), 0 0 60px rgba(124,58,237,0.06)",
              }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0D0A14]/60 via-transparent to-transparent" />
          </motion.div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#7C3AED] text-sm font-semibold tracking-wider uppercase mb-3">
                El problema
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                ¿Tu centro sufre
                <br />
                alguno de estos
                <br />
                síntomas?
              </h2>
            </motion.div>

            {/* Accordion */}
            <div className="space-y-3">
              {symptoms.map((s, i) => {
                const Icon = s.icon;
                const isOpen = open === i;
                return (
                  <motion.div
                    key={s.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="glass-card rounded-xl overflow-hidden cursor-pointer select-none"
                    style={{
                      borderColor: isOpen ? `${s.color}40` : "rgba(255,255,255,0.06)",
                    }}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4 p-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${s.color}15`,
                          border: `1px solid ${s.color}30`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: s.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-500 text-xs font-bold">
                          SÍNTOMA {s.number}
                        </p>
                        <p className="text-white font-semibold text-sm mt-0.5">
                          {s.title}
                        </p>
                      </div>
                      <ChevronDown
                        className="w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          variants={slideDown}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <div className="px-4 pb-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                            {s.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-[#10B981] font-semibold text-sm"
            >
              Si te identificas con 2 o más → tienes un problema de sistema.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
