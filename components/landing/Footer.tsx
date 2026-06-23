"use client";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const navLinks = [
  { label: "Inicio", id: "inicio" },
  { label: "Cómo funciona", id: "como-funciona" },
  { label: "Servicios", id: "servicios" },
  { label: "Testimoniales", id: "testimoniales" },
  { label: "Auditoría gratuita", id: "formulario" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#070A20",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "3.5rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.4rem",
                color: "#fff",
                marginBottom: "0.75rem",
                letterSpacing: "0.04em",
              }}
            >
              Ilussia Agency
            </p>
            <p
              style={{
                color: "#555",
                fontSize: "0.85rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Performance marketing en Latinoamérica. Meta Ads, CRM y agentes IA
              para convertir publicidad en ventas reales.
            </p>
          </div>

          {/* Nav */}
          <nav>
            <p
              style={{
                color: "#B8BCCF",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Navegación
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#555",
                      fontSize: "0.875rem",
                      fontFamily: "var(--font-dm-sans)",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#555")
                    }
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p
              style={{
                color: "#B8BCCF",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Contacto
            </p>
            <a
              href="mailto:hola@ilussia.agency"
              style={{
                color: "#555",
                fontSize: "0.875rem",
                fontFamily: "var(--font-dm-sans)",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.5rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#555")
              }
            >
              hola@ilussia.agency
            </a>
            <p
              style={{
                color: "#555",
                fontSize: "0.875rem",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Latinoamérica
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              color: "#444",
              fontSize: "0.78rem",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            © {new Date().getFullYear()} Ilussia Agency. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="/privacidad"
              style={{
                color: "#444",
                fontSize: "0.78rem",
                fontFamily: "var(--font-dm-sans)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#444")
              }
            >
              Privacidad
            </a>
            <a
              href="/terminos"
              style={{
                color: "#444",
                fontSize: "0.78rem",
                fontFamily: "var(--font-dm-sans)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#444")
              }
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
