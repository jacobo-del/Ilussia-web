"use client";

import { useState, useEffect, useRef } from "react";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("hero-end");
    if (!el) return;
    sentinelRef.current = el as HTMLDivElement;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? 0 : 80}px)`,
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s",
        zIndex: 50,
        pointerEvents: visible ? "auto" : "none",
        // Only show on mobile via media query workaround using inline style
      }}
      className="md:hidden"
    >
      <button
        onClick={scrollToForm}
        style={{
          background: "#C9A84C",
          color: "#070A20",
          border: "none",
          borderRadius: "999px",
          padding: "0.9rem 2rem",
          fontWeight: 700,
          fontSize: "0.875rem",
          cursor: "pointer",
          fontFamily: "var(--font-inter)",
          boxShadow: "0 4px 24px rgba(201,168,76,0.4)",
          whiteSpace: "nowrap",
          letterSpacing: "0.02em",
        }}
      >
        Auditoría gratuita →
      </button>
    </div>
  );
}
