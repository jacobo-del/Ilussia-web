"use client";

import { motion } from "framer-motion";

export default function Vsl() {
  return (
    <section className="section-pad" style={{ background: "#111111" }}>
      <div
        style={{
          maxWidth: 896,
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Ve el sistema en acción
          </h2>
          <p
            style={{
              color: "#A0A0A0",
              fontSize: "1rem",
              marginBottom: "2.5rem",
              fontFamily: "var(--font-inter)",
            }}
          >
            2 minutos que te van a cambiar la forma de ver tu publicidad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: "relative",
            aspectRatio: "16/9",
            maxWidth: 800,
            margin: "0 auto",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(201,168,76,0.3)",
            background: "#1A1A1A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           INSERTAR VIDEO DE YOUTUBE AQUÍ
           Reemplaza este bloque por:

           <iframe
             src="https://www.youtube.com/embed/TU_VIDEO_ID"
             title="Ilussia Agency — Sistema en acción"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
             style={{
               position: "absolute", inset: 0,
               width: "100%", height: "100%",
               border: "none"
             }}
           />

           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          */}
          <div>
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                opacity: 0.3,
                color: "#C9A84C",
              }}
            >
              ▶
            </div>
            <p
              style={{
                color: "#555",
                fontSize: "0.85rem",
                fontFamily: "var(--font-inter)",
              }}
            >
              Video próximamente
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
