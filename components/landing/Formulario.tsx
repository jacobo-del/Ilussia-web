"use client";

import { useState, useRef } from "react";

const WA_NUMBER = "502TUNUMERO"; // ← Reemplaza con tu número real (sin + ni espacios)

type FormState = {
  nombre: string;
  telefono: string;
  email: string;
  tipoNegocio: string;
  presupuesto: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const tiposNegocio = [
  "Clínica médico-estética",
  "Centro de bienestar / spa",
  "Clínica dental estética",
  "Otro tipo de negocio",
];

const budgets = [
  "Menos de Q5,000/mes",
  "Q5,000 – Q10,000/mes",
  "Q10,000 – Q20,000/mes",
  "Más de Q20,000/mes",
];

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.nombre.trim()) e.nombre = "Tu nombre es requerido";
  const digits = f.telefono.replace(/\D/g, "");
  if (digits.length < 8) e.telefono = "Ingresa al menos 8 dígitos";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Email inválido";
  if (!f.tipoNegocio) e.tipoNegocio = "Selecciona tu tipo de negocio";
  if (!f.presupuesto) e.presupuesto = "Selecciona tu presupuesto";
  return e;
}

export default function Formulario() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    email: "",
    tipoNegocio: "",
    presupuesto: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name as keyof FormState]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { nombre: true, telefono: true, email: true, tipoNegocio: true, presupuesto: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);

    setTimeout(() => {
      const msg = encodeURIComponent(
        `Hola, me llamo ${form.nombre}. Quiero información sobre la auditoría gratuita de Ilussia Agency.`
      );
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  const inputStyle = (field: keyof FormState): React.CSSProperties => ({
    width: "100%",
    background: "#111538",
    border: `1px solid ${
      errors[field] && touched[field]
        ? "#ef4444"
        : "rgba(255,255,255,0.14)"
    }`,
    borderRadius: "4px",
    padding: "0.85rem 1rem",
    color: "#fff",
    fontSize: "0.9rem",
    fontFamily: "var(--font-dm-sans)",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#B8BCCF",
    fontSize: "0.8rem",
    marginBottom: "0.4rem",
    fontFamily: "var(--font-dm-sans)",
    letterSpacing: "0.03em",
  };

  const errorStyle: React.CSSProperties = {
    color: "#ef4444",
    fontSize: "0.75rem",
    marginTop: "0.3rem",
    fontFamily: "var(--font-dm-sans)",
  };

  const isValid = Object.keys(validate(form)).length === 0;

  return (
    <section
      id="formulario"
      style={{
        padding: "120px 1.5rem",
        background: "#0B0F2C",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
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
        </div>

        <div
          style={{
            background: "#111538",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "8px",
            padding: "2.5rem",
          }}
        >
          {success ? (
            <div
              style={{
                textAlign: "center",
                padding: "2rem 0",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(34,197,94,0.12)",
                  border: "2px solid #22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  fontSize: "1.5rem",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  color: "#22c55e",
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                ¡Listo, {form.nombre}!
              </h3>
              <p
                style={{
                  color: "#B8BCCF",
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Te redirigimos a WhatsApp para coordinar tu auditoría. Si la
                ventana no se abrió,{" "}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                    `Hola, me llamo ${form.nombre}. Quiero información sobre la auditoría gratuita de Ilussia Agency.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF" }}
                >
                  haz clic aquí
                </a>
                .
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <label htmlFor="nombre" style={labelStyle}>
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={inputStyle("nombre")}
                    autoComplete="given-name"
                  />
                  {errors.nombre && touched.nombre && (
                    <p style={errorStyle}>{errors.nombre}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefono" style={labelStyle}>
                    Teléfono *
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+502"
                    value={form.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={inputStyle("telefono")}
                    autoComplete="tel"
                  />
                  {errors.telefono && touched.telefono && (
                    <p style={errorStyle}>{errors.telefono}</p>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="email" style={labelStyle}>
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={inputStyle("email")}
                  autoComplete="email"
                />
                {errors.email && touched.email && (
                  <p style={errorStyle}>{errors.email}</p>
                )}
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="tipoNegocio" style={labelStyle}>
                  ¿Qué tipo de negocio tenés? *
                </label>
                <select
                  id="tipoNegocio"
                  name="tipoNegocio"
                  value={form.tipoNegocio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    ...inputStyle("tipoNegocio"),
                    color: form.tipoNegocio ? "#fff" : "#555",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled hidden>
                    Selecciona tu tipo de negocio
                  </option>
                  {tiposNegocio.map((t) => (
                    <option key={t} value={t} style={{ background: "#111538" }}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.tipoNegocio && touched.tipoNegocio && (
                  <p style={errorStyle}>{errors.tipoNegocio}</p>
                )}
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label htmlFor="presupuesto" style={labelStyle}>
                  Presupuesto mensual en pauta *
                </label>
                <select
                  id="presupuesto"
                  name="presupuesto"
                  value={form.presupuesto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    ...inputStyle("presupuesto"),
                    color: form.presupuesto ? "#fff" : "#555",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled hidden>
                    Selecciona tu presupuesto
                  </option>
                  {budgets.map((b) => (
                    <option key={b} value={b} style={{ background: "#111538" }}>
                      {b}
                    </option>
                  ))}
                </select>
                {errors.presupuesto && touched.presupuesto && (
                  <p style={errorStyle}>{errors.presupuesto}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: isValid ? "#FFFFFF" : "rgba(201,168,76,0.25)",
                  color: isValid ? "#070A20" : "#666",
                  border: "none",
                  borderRadius: "4px",
                  padding: "1rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  cursor: loading || !isValid ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-dm-sans)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  transition: "background 0.3s, color 0.3s",
                  letterSpacing: "0.03em",
                }}
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        border: "2px solid rgba(0,0,0,0.2)",
                        borderTopColor: "#070A20",
                        borderRadius: "50%",
                        display: "inline-block",
                        animation: "spin 0.7s linear infinite",
                      }}
                    />
                    Enviando…
                  </>
                ) : (
                  "Solicitar auditoría gratuita →"
                )}
              </button>

              <p
                style={{
                  textAlign: "center",
                  color: "#555",
                  fontSize: "0.75rem",
                  marginTop: "1rem",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Sin spam. Tus datos son privados y no se comparten.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
