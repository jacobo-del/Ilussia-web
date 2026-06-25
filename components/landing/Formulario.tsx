"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Formulario() {
  useEffect(() => {
    const scriptId = "ghl-form-embed";
    if (document.getElementById(scriptId)) return;
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://links.ilussia.agency/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, []);

  return (
    <section
      id="formulario"
      style={{
        padding: "120px 1.5rem",
        background: "#0B0F2C",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Solicita tu auditoría gratuita
          </h2>
          <p
            style={{
              color: "#B8BCCF",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Sin compromiso. Te decimos en 30 minutos qué está fallando y qué
            cambiaríamos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://links.ilussia.agency/widget/booking/SVnUjt1Q1u7MKC3eXsOw"
            id="SVnUjt1Q1u7MKC3eXsOw_1782430486958"
            scrolling="no"
            style={{
              width: "100%",
              border: "none",
              overflow: "hidden",
              minHeight: "700px",
              display: "block",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #SVnUjt1Q1u7MKC3eXsOw_1782430486958 {
            min-height: 900px !important;
          }
        }
      `}</style>
    </section>
  );
}
