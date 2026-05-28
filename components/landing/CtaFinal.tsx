"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const WA =
  "https://wa.me/50232421865?text=Hola,%20quiero%20saber%20si%20mi%20centro%20califica%20para%20ilussIA";

const guarantees = [
  "Sin contratos el primer mes",
  "Resultados medibles desde semana 1",
  "Si no vemos oportunidad real, te lo decimos",
];

export default function CtaFinal() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Diagonal gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #0D9488 100%)",
        }}
      />
      {/* Image overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900&q=85&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.08 }}
          sizes="100vw"
        />
      </div>
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          Disponible para nuevos centros
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-white leading-tight mb-6"
        >
          ¿Lista tu agenda para
          <br />
          llenarse de pacientes
          <br />
          que pagan?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          En 30 minutos de auditoría gratuita te mostramos exactamente dónde
          pierdes leads y cómo detenerlo esta semana.
        </motion.p>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10"
        >
          {guarantees.map((text) => (
            <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
              <CheckCircle2 className="w-4 h-4 text-white/60 flex-shrink-0" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-white text-[#1E0A3C] text-lg font-black shadow-lg hover:shadow-2xl transition-all duration-200"
        >
          <MessageCircle className="w-5 h-5" />
          Ver si mi centro califica →
        </motion.a>

        {/* Micro text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-white/50 text-sm mt-6"
        >
          ilussIA · Guatemala y España · Respondemos en menos de 2 horas
        </motion.p>
      </div>
    </section>
  );
}
