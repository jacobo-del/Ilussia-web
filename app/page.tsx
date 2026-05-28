import Header       from "@/components/landing/Header";
import Hero         from "@/components/landing/Hero";
import Ticker       from "@/components/landing/Ticker";
import Dolor        from "@/components/landing/Dolor";
import Sistema      from "@/components/landing/Sistema";
import PruebaTecnica from "@/components/landing/PruebaTecnica";
import CasoMonreve  from "@/components/landing/CasoMonreve";
import MetaAds      from "@/components/landing/MetaAds";
import Vsl          from "@/components/landing/Vsl";
import Cualificador from "@/components/landing/Cualificador";
import CtaFinal     from "@/components/landing/CtaFinal";
import Footer       from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* S1 — HERO: fusión clínica + tech */}
        <Hero />

        {/* S2 — TICKER animado */}
        <Ticker />

        {/* S3 — EL DOLOR: mundo clínica */}
        <Dolor />

        {/* S4 — EL SISTEMA: mundo tech */}
        <Sistema />

        {/* S5 — PRUEBA TÉCNICA: datos reales */}
        <PruebaTecnica />

        {/* S6 — CASO MONREVE: mundo clínica */}
        <CasoMonreve />

        {/* S7 — META ADS: especialidad */}
        <MetaAds />

        {/* S8 — VSL: mundo clínica */}
        <Vsl />

        {/* S9 — PRE-CUALIFICADOR: tech / filtro */}
        <Cualificador />

        {/* S10 — CTA FINAL ÉPICO */}
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
