"use client";

import { motion } from "framer-motion";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#070A20",
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&q=75"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.12,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, #070A20 55%, rgba(10,10,10,0.5) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1152,
          margin: "0 auto",
          padding: "7rem 1.5rem 5rem",
          width: "100%",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            color: "#C9A84C",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "1.75rem",
            fontFamily: "var(--font-inter)",
          }}
        >
          Performance Marketing · Latinoamérica
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(2.8rem, 5.5vw, 4.25rem)",
            lineHeight: 1.12,
            color: "#ffffff",
            marginBottom: "1.75rem",
            fontWeight: 400,
            maxWidth: 640,
          }}
        >
          Tu competencia
          <br />paga publicidad.
          <br />Tú pagas por
          <br />
          <span style={{ color: "#C9A84C" }}>clientes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "#B8BCCF",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: 480,
            fontFamily: "var(--font-inter)",
          }}
        >
          No medimos likes ni alcance. Construimos el sistema completo que
          convierte tu inversión publicitaria en ventas reales y medibles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <button
            onClick={() => scrollTo("formulario")}
            style={{
              background: "#C9A84C",
              color: "#070A20",
              padding: "0.9rem 2rem",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-inter)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Quiero mi auditoría gratuita →
          </button>
          <button
            onClick={() => scrollTo("como-funciona")}
            style={{
              background: "transparent",
              color: "#ffffff",
              padding: "0.9rem 2rem",
              borderRadius: "4px",
              fontWeight: 500,
              fontSize: "1rem",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              fontFamily: "var(--font-inter)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "rgba(201,168,76,0.5)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.2)")
            }
          >
            Ver cómo funciona
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: "#555",
            fontSize: "0.85rem",
            fontFamily: "var(--font-inter)",
          }}
        >
          ✓ Sin contrato anual &nbsp;·&nbsp; ✓ Resultados en 30 días
          &nbsp;·&nbsp; ✓ Data en tiempo real
        </motion.p>
      </div>

      {/* Sentinel for floating CTA visibility trigger */}
      <div id="hero-end" style={{ position: "absolute", bottom: 0 }} />
    </section>
  );
}
