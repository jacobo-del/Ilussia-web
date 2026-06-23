"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Necesito experiencia previa con publicidad digital?",
    a: "No. Nosotros configuramos todo desde cero. Solo necesitas una clínica activa con capacidad para atender nuevos pacientes.",
  },
  {
    q: "¿En cuánto tiempo empieza a llenarse mi agenda?",
    a: "Primeros leads calificados en los primeros 7 días. Agenda con flujo consistente entre la semana 3 y 6, dependiendo de tu especialidad y presupuesto de pauta.",
  },
  {
    q: "¿El presupuesto de pauta va incluido en el precio?",
    a: "No. El precio cubre nuestra gestión, el sistema y la tecnología. El presupuesto de Meta Ads lo manejas directamente tú. Recomendamos mínimo Q3,000/mes de pauta para ver resultados consistentes.",
  },
  {
    q: "¿Trabajan solo con clínicas estéticas o también con otros negocios?",
    a: "Trabajamos principalmente con clínicas médico-estéticas, centros de bienestar y spas premium. Nuestros sistemas están diseñados para el modelo clínico: agenda, seguimiento de pacientes y trazabilidad de tratamientos.",
  },
  {
    q: "¿Qué pasa si los resultados no son los que esperaba?",
    a: "Contratos mensuales, sin permanencia. Si en el primer mes no ves el valor, puedes salir sin penalización. Nuestro modelo funciona solo si el tuyo también funciona.",
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
            fontFamily: "var(--font-cormorant)",
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
                  ? "2px solid #FFFFFF"
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
                    fontFamily: "var(--font-dm-sans)",
                    transition: "color 0.2s",
                    lineHeight: 1.5,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#FFFFFF",
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
                        fontFamily: "var(--font-dm-sans)",
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
