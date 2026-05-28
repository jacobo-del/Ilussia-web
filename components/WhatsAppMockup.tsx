"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Battery, Signal } from "lucide-react";

type Message = {
  id: number;
  from: "user" | "sofia";
  text: string;
  time: string;
  delay: number;
};

const conversation: Message[] = [
  {
    id: 1,
    from: "user",
    text: "Hola, vi su publicidad. ¿Cuánto cuesta la limpieza facial?",
    time: "10:03",
    delay: 0,
  },
  {
    id: 2,
    from: "sofia",
    text: "¡Hola! Soy Sofía, asistente de Monreve 💫 Me da mucho gusto atenderte.",
    time: "10:03",
    delay: 1200,
  },
  {
    id: 3,
    from: "sofia",
    text: "Tenemos distintos tratamientos faciales desde Q350. ¿Me cuentas qué tipo de piel tienes o cuál es tu principal preocupación?",
    time: "10:03",
    delay: 2400,
  },
  {
    id: 4,
    from: "user",
    text: "Piel mixta, tengo poros abiertos y quiero algo que me hidrate",
    time: "10:04",
    delay: 4000,
  },
  {
    id: 5,
    from: "sofia",
    text: "¡Perfecto! Para ese perfil te recomendaría nuestra *Limpieza Profunda + Hidratación Intensiva* ✨\n\nIncluye:\n• Extracción de comedones\n• Mascarilla poro-minimizadora\n• Sérum de ácido hialurónico\n\nValor: Q450 · Duración: 75 min",
    time: "10:04",
    delay: 5200,
  },
  {
    id: 6,
    from: "sofia",
    text: "¿Te gustaría agendar tu cita? Tenemos disponibilidad esta semana 🗓️",
    time: "10:04",
    delay: 6400,
  },
  {
    id: 7,
    from: "user",
    text: "Sí me interesa, ¿tienen el jueves?",
    time: "10:05",
    delay: 7800,
  },
  {
    id: 8,
    from: "sofia",
    text: "¡Claro! El jueves tenemos disponible a las 10:00 AM, 1:00 PM y 4:30 PM. ¿Cuál te funciona mejor? 😊",
    time: "10:05",
    delay: 9000,
  },
];

export default function WhatsAppMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    conversation.forEach((msg, idx) => {
      if (msg.from === "sofia" && idx > 0) {
        const showTypingTimer = setTimeout(() => {
          setTyping(true);
        }, msg.delay - 600);

        const showMsgTimer = setTimeout(() => {
          setTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
          setCurrentIndex(idx);
        }, msg.delay);

        timers.push(showTypingTimer, showMsgTimer);
      } else {
        const timer = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, msg.id]);
          setCurrentIndex(idx);
        }, msg.delay);
        timers.push(timer);
      }
    });

    // Restart loop
    const restartTimer = setTimeout(() => {
      setVisibleMessages([]);
      setCurrentIndex(0);
      setTyping(false);
    }, 13000);
    timers.push(restartTimer);

    return () => timers.forEach(clearTimeout);
  }, [visibleMessages.length === 0 && currentIndex === 0]);

  useEffect(() => {
    if (visibleMessages.length === 0 && currentIndex === 0) {
      // trigger re-mount loop
    }
  }, [visibleMessages, currentIndex]);

  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/20 to-[#2563EB]/20 rounded-[40px] blur-3xl scale-90" />

      {/* Phone frame */}
      <div className="relative w-[300px] bg-[#0D1117] rounded-[36px] border border-[#1E293B] shadow-2xl shadow-black/50 overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[11px] text-white font-semibold">10:05</span>
          <div className="flex items-center gap-1">
            <Signal className="w-3 h-3 text-white" />
            <Wifi className="w-3 h-3 text-white" />
            <Battery className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="bg-[#075E54] px-4 py-2.5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
            S
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-white">Sofía · Monreve</div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-[11px] text-[#94A3B8]">
                Agente IA · Siempre activa
              </span>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="bg-[#0B141A] px-3 py-3 h-[400px] overflow-hidden flex flex-col gap-2">
          <AnimatePresence>
            {conversation
              .filter((m) => visibleMessages.includes(m.id))
              .map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12px] leading-[1.5] ${
                      msg.from === "user"
                        ? "bg-[#005C4B] text-white rounded-br-sm"
                        : "bg-[#202C33] text-white rounded-bl-sm"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <div className="text-[10px] text-[#64748B] text-right mt-0.5">
                      {msg.time}
                    </div>
                  </div>
                </motion.div>
              ))}

            {/* Typing indicator */}
            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="bg-[#202C33] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay,
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <div className="bg-[#0B141A] px-3 pb-4 pt-2 flex items-center gap-2">
          <div className="flex-1 bg-[#202C33] rounded-full px-4 py-2 text-[12px] text-[#64748B]">
            Escribe un mensaje…
          </div>
          <div className="w-9 h-9 rounded-full bg-[#075E54] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* "IA respondió" badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="absolute -bottom-4 -right-4 bg-[#10B981]/10 border border-[#10B981]/30 rounded-xl px-3 py-2 backdrop-blur-sm"
      >
        <div className="text-[11px] text-[#10B981] font-semibold">⚡ Respondió en 1.3s</div>
      </motion.div>
    </div>
  );
}
