import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Problem } from "@/components/Problem";
import { AgentMockup } from "@/components/AgentMockup";
import { Benefits } from "@/components/Benefits";
import { Proof } from "@/components/Proof";
import { FoundersOffer } from "@/components/FoundersOffer";
import { Pricing } from "@/components/Pricing";
import { Differentiation } from "@/components/Differentiation";
import { HowItWorks } from "@/components/HowItWorks";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

// Orden: Hero, Confianza, Problema, Solución (demo WhatsApp, única sección oscura),
// Beneficios, Prueba (piloto fundadores + precios), Diferenciación, Cómo funciona, FAQ, CTA final.
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <Problem />
        <AgentMockup />
        <Benefits />
        <Proof />
        <FoundersOffer />
        <Pricing />
        <Differentiation />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
