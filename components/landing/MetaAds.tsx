"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp } from "lucide-react";

function MetaIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
import type { Variants } from "framer-motion";

const channels = [
  {
    icon: MetaIcon,
    color: "#2563EB",
    name: "Meta Ads (Facebook + Instagram)",
    description:
      "Nuestro canal principal. Donde construimos audiencias de clientes con perfil de alto valor y optimizamos hacia conversiones reales.",
    badge: "Canal principal",
  },
  {
    icon: Search,
    color: "#10B981",
    name: "Google Ads",
    description:
      "Para clientes que ya saben lo que buscan. Capturamos intención de compra en el momento exacto.",
    badge: "Canal secundario",
  },
  {
    icon: TrendingUp,
    color: "#64748B",
    name: "TikTok Ads",
    description:
      "Para centros que buscan audiencias jóvenes o quieren construir marca. Evaluamos caso por caso.",
    badge: "Según el perfil",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.12 },
  }),
};

export default function MetaAds() {
  return (
    <section className="relative py-24 md:py-32 bg-[#080B14]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E293B] to-transparent" />
      </div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#2563EB]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#2563EB] text-sm font-semibold tracking-wider uppercase mb-3">
            Nuestra especialidad
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Meta Ads es nuestro
            <br className="hidden md:block" /> campo de batalla principal
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Facebook e Instagram son donde están tus clientes ideales. Ahí es donde ganamos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <motion.div
                key={ch.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
                style={{ borderColor: `${ch.color}20` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${ch.color}15`,
                    border: `1px solid ${ch.color}25`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: ch.color }} />
                </div>
                <div>
                  <div
                    className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ color: ch.color, backgroundColor: `${ch.color}15` }}
                  >
                    {ch.badge}
                  </div>
                  <h3 className="text-white font-bold text-base leading-tight mb-2">
                    {ch.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{ch.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-500 text-sm italic mt-8 max-w-xl mx-auto"
        >
          La combinación exacta de canales depende de tu mercado. Lo definimos en la auditoría.
        </motion.p>
      </div>
    </section>
  );
}
