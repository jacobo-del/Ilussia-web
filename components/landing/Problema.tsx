"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "📊",
    text: "Tu agencia te manda un PDF con alcance e impresiones, pero no puedes conectar esos números con tus ventas del mes.",
  },
  {
    icon: "💬",
    text: "Te llegan mensajes de personas que preguntan el precio y desaparecen. Nadie les da seguimiento a tiempo.",
  },
  {
    icon: "💸",
    text: "Llevas meses pagando publicidad y no sabes con certeza si está funcionando o si simplemente estás gastando.",
  },
];

export default function Problema() {
  return (
    <section className="section-pad" style={{ background: "#070A20" }}>
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
          ¿Reconoces alguna de estas situaciones?
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: "#0B0F2C",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "8px",
                padding: "2rem",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.icon}</div>
              <p
                style={{
                  color: "#B8BCCF",
                  lineHeight: 1.75,
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {c.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: "center",
            color: "#C9A84C",
            fontStyle: "italic",
            fontSize: "1rem",
            marginTop: "3rem",
            fontFamily: "var(--font-playfair)",
          }}
        >
          Si reconociste al menos una, tu publicidad no está trabajando a su
          máximo potencial.
        </motion.p>
      </div>
    </section>
  );
}
