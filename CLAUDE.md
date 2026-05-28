@AGENTS.md

# IlussIA Web — Notas del Proyecto

## Descripción
Sitio web one-page para IlussIA, agencia de automatización e IA para clínicas estéticas en Guatemala.

## Stack
- **Next.js 16** con App Router
- **Tailwind CSS v4** (sin tailwind.config — usa @theme inline en globals.css)
- **TypeScript**
- **Framer Motion** — animaciones scroll-triggered con `useInView`
- **Lucide React** — íconos
- **Fuentes**: Inter (cuerpo) + Outfit (títulos) via `next/font/google`

## Paleta de colores
| Token | Valor |
|-------|-------|
| Fondo | `#080B14` |
| Texto | `#F8FAFC` |
| Texto secundario | `#94A3B8` |
| Acento purple | `#7C3AED` |
| Acento blue | `#2563EB` |
| Acento green | `#10B981` |
| Bordes | `#1E293B` |

## Estructura de componentes
```
components/
  Navbar.tsx        — Navbar fija con blur, menú mobile
  Hero.tsx          — Hero con badge, headline, CTAs y mockup WhatsApp
  WhatsAppMockup.tsx — Animación de conversación WhatsApp en bucle
  Problema.tsx      — 6 pain points en grid
  Solucion.tsx      — Pipeline visual de 7 pasos
  Metricas.tsx      — 4 métricas animadas con CountUp
  CasoMonreve.tsx   — Antes/después + stats + testimonial
  ComoFunciona.tsx  — 4 pasos de onboarding tipo timeline
  Servicios.tsx     — 3 pilares: IA, CRM, Automatización
  CtaFinal.tsx      — CTA con gradiente y link a WhatsApp
  Footer.tsx        — Logo, links, social, copyright
```

## Clases CSS personalizadas (globals.css)
- `.gradient-text` — Gradiente purple→blue en texto
- `.glass-card` — Glassmorphism oscuro con backdrop-blur

## CTA principal de WhatsApp
`https://wa.me/50230000000?text=Hola,%20quiero%20la%20auditoría%20gratuita%20de%20IlussIA`
> Reemplazar `50230000000` con el número real cuando esté disponible.

## Deploy
Pensado para Vercel. Solo hacer `vercel --prod` desde la raíz.

## Pendientes
- [ ] Número de WhatsApp real
- [ ] Links reales de Instagram y LinkedIn
- [ ] Email real (actualmente placeholder: hola@ilussia.agency)
- [ ] Imagen OG (`/public/og-image.png`)
- [ ] Logo final (actualmente usa ícono Sparkles de Lucide)
