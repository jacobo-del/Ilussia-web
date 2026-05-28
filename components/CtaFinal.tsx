"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageCircle, Clock, Shield } from "lucide-react";

const WA = "https://wa.me/50232421865?text=Hola,%20quiero%20la%20auditoría%20gratuita%20de%20IlussIA";

export default function CtaFinal() {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80&auto=format"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8,11,20,0.80)" }}
        />
        {/* Purple radial overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.14) 0%, rgba(37,99,235,0.08) 40%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 text-sm text-[#10B981] mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-medium">Disponible para nuevos centros</span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            ¿Listo tu centro para{" "}
            <span className="gradient-text">dejar de perder leads?</span>
          </h2>

          {/* Sub-text */}
          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Hacemos una auditoría gratuita de tu proceso actual.{" "}
            <span className="text-white font-medium">Sin compromiso.</span> En 30 minutos
            sabés exactamente qué te falta para llenar tu agenda.
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
              { icon: Clock, text: "30 minutos por videollamada" },
              { icon: Shield, text: "Sin compromiso de contratación" },
              { icon: MessageCircle, text: "Respuesta en menos de 24h" },
            ].map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.text} className="flex items-center gap-2 text-sm text-[#64748B]">
                  <Icon className="w-4 h-4 text-[#10B981]" />
                  <span>{point.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA button */}
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-bold text-lg shadow-xl shadow-purple-900/30 hover:opacity-95 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Auditoría Gratuita
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <p className="mt-4 text-[#475569] text-sm">
            Te respondemos por WhatsApp · Guatemala
          </p>
        </motion.div>
      </div>
    </section>
  );
}
