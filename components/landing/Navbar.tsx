"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const links = [
  { label: "Servicios", id: "servicios" },
  { label: "Cómo funciona", id: "como-funciona" },
  { label: "Resultados", id: "testimoniales" },
  { label: "Contacto", id: "formulario" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(7,10,32,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 1.5rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/logo-ilussia.png"
            alt="Ilussia Agency"
            width={120}
            height={36}
            style={{ objectFit: "contain", height: 36, width: "auto" }}
            priority
          />
        </button>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                color: "#B8BCCF",
                fontSize: "0.875rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-dm-sans)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#B8BCCF")
              }
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("formulario")}
            style={{
              background: "#FFFFFF",
              color: "#070A20",
              padding: "0.5rem 1.25rem",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "0.875rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-dm-sans)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Auditoría gratuita
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: "4px",
          }}
          aria-label="Menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: open ? "#FFFFFF" : "#fff",
                transition: "background 0.2s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: "#0B0F2C",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => {
                scrollTo(l.id);
                setOpen(false);
              }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                color: "#B8BCCF",
                background: "none",
                border: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo("formulario");
              setOpen(false);
            }}
            style={{
              width: "100%",
              background: "#FFFFFF",
              color: "#070A20",
              padding: "0.75rem",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "0.95rem",
              border: "none",
              cursor: "pointer",
              marginTop: "1rem",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Auditoría gratuita
          </button>
        </div>
      )}
    </nav>
  );
}
