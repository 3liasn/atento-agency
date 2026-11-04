import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AgentMockup } from "@/components/AgentMockup";
import { FoundersOffer } from "@/components/FoundersOffer";
import { Problem } from "@/components/Problem";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AgentMockup />
        <FoundersOffer />
        <Problem />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
