"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    text: "Llevábamos 8 meses pagando publicidad sin saber si funcionaba. Con Ilussia, en el primer mes ya teníamos trazabilidad completa. Ahora sé exactamente cuánto me cuesta cada cliente.",
    name: "Carlos Mendoza",
    role: "Propietario, Centro Estético",
    avatar: "https://i.pravatar.cc/80?img=3",
  },
  {
    text: "Lo que más me sorprendió fue el agente de IA. Responde leads en segundos, los filtra y solo me pasa los que realmente quieren comprar. Mi equipo ahora cierra más con menos esfuerzo.",
    name: "Andrea Ruiz",
    role: "Directora, Clínica de Bienestar",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    text: "Probé dos agencias antes. Ambas me hablaban de likes. Ilussia fue la primera que me habló de retorno. La diferencia se nota desde la primera reunión.",
    name: "Roberto Salazar",
    role: "Gerente, Empresa de Servicios B2B",
    avatar: "https://i.pravatar.cc/80?img=8",
  },
];

export default function Testimoniales() {
  return (
    <section
      id="testimoniales"
      className="section-pad"
      style={{ background: "#0B0F2C" }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem" }}>
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
            marginBottom: "3.5rem",
          }}
        >
          Lo que dicen negocios que ya trabajan con nosotros
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: "#111538",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "8px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <p
                style={{
                  color: "#B8BCCF",
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  fontFamily: "var(--font-inter)",
                  flex: 1,
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                }}
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  style={{
                    borderRadius: "50%",
                    border: "2px solid rgba(201,168,76,0.3)",
                  }}
                />
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      color: "#B8BCCF",
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#444",
            fontSize: "0.7rem",
            marginTop: "2.5rem",
            fontFamily: "var(--font-inter)",
          }}
        >
          *Testimoniales representativos. Los resultados pueden variar según
          industria y presupuesto de pauta.
        </p>
      </div>
    </section>
  );
}
