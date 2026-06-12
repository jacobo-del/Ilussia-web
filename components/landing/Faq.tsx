"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Necesito experiencia previa con publicidad digital?",
    a: "No. Configuramos todo desde cero y te explicamos cada decisión. Solo necesitas un negocio activo y disposición para crecer.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados?",
    a: "Primeros datos en 7 días. Resultados optimizados entre semana 3 y 6, según industria y presupuesto de pauta.",
  },
  {
    q: "¿El presupuesto de pauta va incluido en el precio?",
    a: "No. El precio es nuestra gestión, el sistema y la tecnología. El presupuesto de Meta Ads es tuyo y lo manejas directamente. Recomendamos mínimo Q3,000/mes de pauta para resultados consistentes.",
  },
  {
    q: "¿Qué pasa si no estoy satisfecho?",
    a: "Contratos mensuales. Si en el primer mes no ves valor, puedes salir sin penalización.",
  },
  {
    q: "¿Para qué tipo de negocios trabajan?",
    a: "Negocios establecidos en Guatemala con servicio o producto validado que quieren escalar. Salud, estética, educación, servicios B2B, ticket medio-alto.",
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-pad" style={{ background: "#070A20" }}>
      <div style={{ maxWidth: 768, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
            fontWeight: 400,
            color: "#fff",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Lo que nos preguntan antes de empezar
        </motion.h2>

        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                borderLeft: openIdx === i
                  ? "2px solid #C9A84C"
                  : "2px solid transparent",
                transition: "border-color 0.3s",
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 1.25rem 1.25rem 1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    color: openIdx === i ? "#fff" : "#d0d0d0",
                    fontSize: "0.95rem",
                    fontWeight: openIdx === i ? 500 : 400,
                    fontFamily: "var(--font-inter)",
                    transition: "color 0.2s",
                    lineHeight: 1.5,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#C9A84C",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                    display: "inline-block",
                    transform: openIdx === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.3s",
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        padding: "0 1.5rem 1.5rem",
                        color: "#B8BCCF",
                        fontSize: "0.9rem",
                        lineHeight: 1.75,
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
