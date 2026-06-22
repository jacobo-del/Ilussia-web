"use client";

import { motion } from "framer-motion";

const rows = [
  { bad: "Venden likes y branding vacío", good: "Llenamos tu agenda clínica" },
  { bad: "Reportan seguidores", good: "Reportamos costo por paciente" },
  { bad: "Publican contenido", good: "Diseñamos campañas de conversión" },
  { bad: "Recepcionistas colapsadas respondiendo WhatsApps", good: "IA que filtra curiosos y agenda pacientes 24/7" },
  { bad: "Métricas de vanidad", good: "Retorno sobre inversión real" },
];

export default function Diferenciador() {
  return (
    <section className="section-pad" style={{ background: "#0B0F2C" }}>
      <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 1.5rem" }}>
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
          No somos una agencia de redes sociales
        </motion.h2>

        <div
          style={{
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "#111538",
              borderBottom: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div
              style={{
                padding: "1rem 1.5rem",
                color: "#555",
                fontWeight: 600,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-inter)",
              }}
            >
              Otras agencias
            </div>
            <div
              style={{
                padding: "1rem 1.5rem",
                color: "#C9A84C",
                fontWeight: 600,
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderLeft: "1px solid rgba(201,168,76,0.2)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Ilussia
            </div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom:
                  i < rows.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
              }}
            >
              <div
                style={{
                  padding: "1.1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#555",
                  fontSize: "0.9rem",
                  fontFamily: "var(--font-inter)",
                }}
              >
                <span style={{ color: "#333", fontSize: "1rem", flexShrink: 0 }}>
                  ✗
                </span>
                {row.bad}
              </div>
              <div
                style={{
                  padding: "1.1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#d0d0d0",
                  fontSize: "0.9rem",
                  borderLeft: "1px solid rgba(201,168,76,0.15)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                <span style={{ color: "#C9A84C", fontSize: "1rem", flexShrink: 0 }}>
                  ✓
                </span>
                {row.good}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
