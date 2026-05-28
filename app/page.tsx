import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vsl from "@/components/Vsl";
import Problema from "@/components/Problema";
import Solucion from "@/components/Solucion";
import Metricas from "@/components/Metricas";
import CasoMonreve from "@/components/CasoMonreve";
import ComoFunciona from "@/components/ComoFunciona";
import Servicios from "@/components/Servicios";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vsl />
        <Problema />
        <Solucion />
        <Metricas />
        <CasoMonreve />
        <ComoFunciona />
        <Servicios />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
