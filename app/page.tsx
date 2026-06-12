import Navbar       from "@/components/landing/Navbar";
import Hero          from "@/components/landing/Hero";
import Problema      from "@/components/landing/Problema";
import Diferenciador from "@/components/landing/Diferenciador";
import ComoFunciona  from "@/components/landing/Sistema";
import Vsl           from "@/components/landing/Vsl";
import Servicios     from "@/components/landing/Servicios";
import Testimoniales from "@/components/landing/Testimoniales";
import Faq           from "@/components/landing/Faq";
import Formulario    from "@/components/landing/Formulario";
import Footer        from "@/components/landing/Footer";
import FloatingCta   from "@/components/landing/FloatingCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="inicio">
        <Hero />
        <Problema />
        <Diferenciador />
        <ComoFunciona />
        <Vsl />
        <Servicios />
        <Testimoniales />
        <Faq />
        <Formulario />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
