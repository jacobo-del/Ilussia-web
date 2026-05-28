const items = [
  "Motor de Adquisición",
  "Meta Ads",
  "IA 24/7",
  "ROAS 4.05x",
  "CRM Kommo",
  "Pacientes Premium",
  "N8N Automation",
  "606 Conversiones",
  "Agenda Llena",
  "Meta CAPI",
  "Seguimiento Automático",
  "WhatsApp IA",
  "Dashboard en Tiempo Real",
];

export default function Ticker() {
  // Duplicate for seamless infinite loop
  const content = [...items, ...items];

  return (
    <div className="overflow-hidden h-12 flex items-center bg-gradient-to-r from-[#1A0B2E] via-[#0D0D1F] to-[#1A0B2E] border-y border-[#7C3AED]/20">
      <div className="ticker-track flex gap-10 px-4">
        {content.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
          >
            <span className="text-[#A78BFA]">{item}</span>
            <span className="text-[#2563EB]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
