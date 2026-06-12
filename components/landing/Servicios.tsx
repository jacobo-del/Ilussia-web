"use client";

import { motion } from "framer-motion";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const plans = [
  {
    name: "Sistema Base",
    setup: "Q3,000",
    monthly: "Q4,000/mes",
    featured: false,
    features: [
      "Gestión Meta Ads",
      "CRM con captura automática de leads",
      "Pipeline de seguimiento",
      "Membresía y mantenimiento CRM",
      "Reporte mensual de resultados",
    ],
    cta: "Comenzar con Sistema Base",
  },
  {
    name: "Máquina de Crecimiento",
    badge: "Más popular",
    setup: "Q4,000",
    monthly: "Q5,800/mes",
    featured: true,
    features: [
      "Meta Ads estrategia B2B + B2C",
      "CRM completo con pipeline y trazabilidad",
      "WhatsApp Business API integrado",
      "Agente conversacional IA 24/7",
      "Automatizaciones de seguimiento post-lead",
      "Reportes quincenales",
    ],
    cta: "Quiero la Máquina de Crecimiento",
  },
  {
    name: "Sistema Completo",
    setup: "Q7,000",
    monthly: "Q8,500/mes",
    featured: false,
    features: [
      "Todo lo de Máquina de Crecimiento",
      "Google Ads: Search + Display + Maps",
      "TikTok Ads",
      "Google Shopping",
      "Reporte unificado Meta + Google",
    ],
    cta: "Hablar sobre Sistema Completo",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="section-pad" style={{ background: "#0A0A0A" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "#fff",
              marginBottom: "0.5rem",
            }}
          >
            Elige el sistema que necesitas
          </h2>
          <p
            style={{
              color: "#A0A0A0",
              fontFamily: "var(--font-inter)",
              fontSize: "0.95rem",
            }}
          >
            IVA incluido. Sin costos ocultos.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: "0 8px 40px rgba(201,168,76,0.12)" }}
              style={{
                background: plan.featured ? "#1A1A1A" : "#111111",
                border: plan.featured
                  ? "1px solid #C9A84C"
                  : "1px solid rgba(201,168,76,0.18)",
                borderRadius: "8px",
                padding: "2rem",
                position: "relative",
                transition: "box-shadow 0.3s",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#C9A84C",
                    color: "#0A0A0A",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.9rem",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.25rem",
                  color: "#fff",
                  marginBottom: "1rem",
                  fontWeight: 400,
                }}
              >
                {plan.name}
              </h3>

              <div style={{ marginBottom: "1.75rem" }}>
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-inter)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Setup: {plan.setup}
                </p>
                <p
                  style={{
                    color: "#C9A84C",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-inter)",
                    lineHeight: 1.1,
                  }}
                >
                  {plan.monthly}
                </p>
              </div>

              <ul
                style={{
                  marginBottom: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      color: "#A0A0A0",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-inter)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: "#C9A84C",
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo("formulario")}
                style={{
                  width: "100%",
                  background: plan.featured ? "#C9A84C" : "transparent",
                  color: plan.featured ? "#0A0A0A" : "#C9A84C",
                  border: plan.featured
                    ? "none"
                    : "1px solid rgba(201,168,76,0.4)",
                  borderRadius: "4px",
                  padding: "0.875rem",
                  fontWeight: 700,
                  fontSize: "0.875rem",
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
                {plan.cta}
              </button>
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
            color: "#A0A0A0",
            fontSize: "0.875rem",
            marginTop: "2rem",
            fontFamily: "var(--font-inter)",
          }}
        >
          ¿No sabes cuál elegir?{" "}
          <button
            onClick={() => scrollTo("formulario")}
            style={{
              color: "#C9A84C",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
            }}
          >
            La auditoría gratuita te lo dirá.
          </button>
        </motion.p>
      </div>
    </section>
  );
}
