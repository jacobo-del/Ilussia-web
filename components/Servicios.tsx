"use client";

import { motion } from "framer-motion";
import { Bot, Database, Workflow, CheckCircle2, Megaphone } from "lucide-react";

interface Service {
  icon: React.ElementType;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  note?: string;
  color: string;
  gradient: string;
  borderColor: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: Megaphone,
    name: "Campañas de Publicidad",
    tagline: "Meta Ads & TikTok — La fuente de leads",
    description:
      "Diseñamos y gestionamos tus campañas publicitarias para atraer el perfil exacto de cliente que busca tus servicios.",
    features: [
      "Meta Ads (Facebook e Instagram)",
      "TikTok Ads",
      "Google Ads",
      "Creatividades y copys de anuncios",
      "Optimización semanal de campañas",
      "Pixel + Conversions API instalado correctamente",
      "Anuncios que mejoran solos con cada cliente que entra",
    ],
    note: "La mayoría de agencias solo instala el Pixel básico. Nosotros configuramos Conversions API para que Meta reciba datos precisos y optimice hacia clientes reales, no solo clics.",
    color: "#F97316",
    gradient: "from-[#F97316]/20 to-[#EF4444]/5",
    borderColor: "rgba(249,115,22,0.2)",
  },
  {
    icon: Bot,
    name: "Agente IA en WhatsApp",
    tagline: "Sofía — Tu recepcionista digital",
    description:
      "Un agente conversacional entrenado con la información de tu centro. Responde preguntas, califica leads, recomienda tratamientos y agenda citas — sin intervención humana.",
    features: [
      "Respuesta en menos de 2 minutos",
      "Tono y voz de tu marca",
      "Calificación automática de leads",
      "Maneja múltiples conversaciones en paralelo",
      "✓ Escala a tu equipo humano en el momento exacto",
    ],
    color: "#A78BFA",
    gradient: "from-[#7C3AED]/20 to-[#2563EB]/5",
    borderColor: "rgba(167,139,250,0.2)",
  },
  {
    icon: Database,
    name: "CRM y Pipeline de Ventas",
    tagline: "Kommo — Tu sala de control",
    description:
      "Todos tus leads organizados en un pipeline visual. Sabes exactamente en qué etapa está cada prospecto, qué campaña lo trajo y qué tan probable es que agende.",
    features: [
      "Pipeline visual personalizado",
      "Score automático por lead",
      "Historial completo de conversaciones",
      "Reportes de conversión por canal",
      "Integración con Meta Ads y TikTok",
    ],
    color: "#60A5FA",
    gradient: "from-[#2563EB]/20 to-[#7C3AED]/5",
    borderColor: "rgba(96,165,250,0.2)",
    featured: true,
  },
  {
    icon: Workflow,
    name: "Automatización y Seguimiento",
    tagline: "N8N — El motor invisible",
    description:
      "Flujos automáticos para cada escenario: lead que no responde, cita que no se confirmó, cliente que no vuelve. El sistema trabaja en segundo plano para no perder ninguna oportunidad.",
    features: [
      "Seguimiento a leads fríos",
      "Recordatorios de citas automáticos",
      "Recuperación de citas canceladas",
      "Flujos post-tratamiento",
      "Sincronización entre todos los canales",
    ],
    color: "#34D399",
    gradient: "from-[#10B981]/20 to-[#2563EB]/5",
    borderColor: "rgba(52,211,153,0.2)",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E293B] bg-white/3 text-sm text-[#94A3B8] mb-4">
            <span className="font-medium">🧩 Los cuatro pilares</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            ¿Qué incluye trabajar{" "}
            <span className="gradient-text">con IlussIA?</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Un sistema completo de cuatro pilares que trabajan juntos para llenar tu agenda.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative glass-card rounded-2xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:scale-[1.02] ${
                  service.featured ? "ring-1 ring-[#2563EB]/30" : ""
                }`}
                style={{ borderColor: service.borderColor }}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-lg shadow-purple-900/30">
                      El núcleo del sistema
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${service.color}15`,
                      border: `1px solid ${service.borderColor}`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold text-lg leading-tight"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {service.name}
                    </h3>
                    <div className="text-sm mt-0.5" style={{ color: service.color }}>
                      {service.tagline}
                    </div>
                  </div>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: service.color }}
                      />
                      <span className="text-[#94A3B8] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.note && (
                  <p className="text-[#475569] text-xs leading-relaxed border-t border-[#1E293B] pt-3">
                    {service.note}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Note about pricing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[#475569] text-sm mt-8"
        >
          Los cuatro componentes se implementan juntos como un sistema integrado.{" "}
          <button
            onClick={() => {
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#7C3AED] hover:text-[#A78BFA] underline transition-colors"
          >
            Agenda tu auditoría gratuita para conocer el precio.
          </button>
        </motion.p>
      </div>
    </section>
  );
}
