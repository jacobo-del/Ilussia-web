"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Auditoría gratuita",
    desc: "Revisamos tu publicidad actual. Te entregamos un diagnóstico con lo que está fallando y qué harías diferente.",
  },
  {
    num: "02",
    title: "Sistema activo",
    desc: "Configuramos tu campaña, CRM y flujo de seguimiento automático. Todo conectado desde el primer día.",
  },
  {
    num: "03",
    title: "Optimización continua",
    desc: "Cada semana revisamos los datos. Ajustamos lo que no convierte y escalamos lo que funciona.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section-pad" style={{ background: "#0A0A0A" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
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
            El sistema que construimos para ti
          </h2>
          <p
            style={{
              color: "#A0A0A0",
              fontSize: "1rem",
              fontFamily: "var(--font-inter)",
            }}
          >
            En menos de 2 semanas, tienes todo activo
          </p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block" style={{ position: "relative" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            style={{
              position: "absolute",
              top: 27,
              left: "calc(16.66% + 28px)",
              right: "calc(16.66% + 28px)",
              height: 2,
              background: "#C9A84C",
              transformOrigin: "left",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "2rem",
            }}
          >
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "2px solid #C9A84C",
                    background: "#0A0A0A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.1rem",
                    color: "#C9A84C",
                    fontWeight: 600,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {s.num}
                </div>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    marginBottom: "0.75rem",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "#A0A0A0",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden" style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                display: "flex",
                gap: "1.25rem",
                paddingBottom: i < steps.length - 1 ? "2rem" : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "2px solid #C9A84C",
                    background: "#0A0A0A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "var(--font-playfair)",
                    fontSize: "0.95rem",
                    color: "#C9A84C",
                    fontWeight: 600,
                  }}
                >
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      background: "rgba(201,168,76,0.3)",
                      marginTop: "0.5rem",
                    }}
                  />
                )}
              </div>
              <div style={{ paddingTop: "0.65rem" }}>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "#A0A0A0",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
