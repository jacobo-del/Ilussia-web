"use client";

import { motion } from "framer-motion";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const plans = [
  {
    name: "Sistema Base",
    tagline: "Para clínicas que quieren comenzar a escalar con control",
    featured: false,
    features: [
      "Gestión completa de Meta Ads",
      "CRM con captura automática de pacientes",
      "Pipeline de seguimiento de leads",
      "Membresía y mantenimiento del CRM",
      "Reporte mensual de resultados",
    ],
    cta: "Solicitar información",
  },
  {
    name: "Sistema de Crecimiento",
    tagline: "Para clínicas establecidas que quieren llenar su agenda",
    badge: "Más solicitado",
    featured: true,
    features: [
      "Meta Ads estrategia B2B + B2C",
      "CRM completo con pipeline y trazabilidad",
      "WhatsApp Business API integrado",
      "Agente conversacional IA 24/7",
      "Automatizaciones de seguimiento post-consulta",
      "Reportes quincenales detallados",
    ],
    cta: "Solicitar información",
  },
  {
    name: "Sistema Completo",
    tagline: "Para clínicas premium que dominan todos sus canales",
    featured: false,
    features: [
      "Todo lo del Sistema de Crecimiento",
      "Google Ads: Search + Display + Maps",
      "TikTok Ads para captación de pacientes",
      "Google Shopping",
      "Reporte unificado multi-canal",
    ],
    cta: "Solicitar información",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="section-pad" style={{ background: "#070A20" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              padding: "0.4rem 1.1rem",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ fontSize: "0.75rem" }}>✦</span>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "0.75rem",
                fontWeight: 600,
                fontFamily: "var(--font-dm-sans)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Oferta de lanzamiento · Setup gratuito
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Elige el sistema para tu clínica
          </h2>
          <p
            style={{
              color: "#C0C4D8",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.95rem",
            }}
          >
            Precios personalizados según tu clínica.{" "}
            <button
              onClick={() => scrollTo("formulario")}
              style={{
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.95rem",
              }}
            >
              Solicita tu propuesta sin compromiso.
            </button>
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
              whileHover={{ y: -6 }}
              style={{
                background: plan.featured ? "#111538" : "#0B0F2C",
                border: plan.featured
                  ? "1px solid rgba(255,255,255,0.35)"
                  : "1px solid rgba(255,255,255,0.1)",
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
                    background: "#FFFFFF",
                    color: "#070A20",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.25rem 0.9rem",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-dm-sans)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "1.5rem",
                  color: "#fff",
                  marginBottom: "0.5rem",
                  fontWeight: 400,
                }}
              >
                {plan.name}
              </h3>

              <p
                style={{
                  color: "#8890B0",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-dm-sans)",
                  lineHeight: 1.5,
                  marginBottom: "1.75rem",
                }}
              >
                {plan.tagline}
              </p>

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
                      color: "#C0C4D8",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-dm-sans)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#FFFFFF", marginTop: 2, flexShrink: 0, opacity: 0.6 }}>
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
                  background: plan.featured ? "#FFFFFF" : "transparent",
                  color: plan.featured ? "#070A20" : "#FFFFFF",
                  border: plan.featured
                    ? "none"
                    : "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "4px",
                  padding: "0.875rem",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  fontFamily: "var(--font-dm-sans)",
                  transition: "opacity 0.2s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "0.8")
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
            color: "#555",
            fontSize: "0.75rem",
            marginTop: "2rem",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          * Setup gratuito por tiempo limitado para los primeros clientes de lanzamiento.
        </motion.p>
      </div>
    </section>
  );
}
