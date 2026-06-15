import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { CommunityIntro } from "@/components/landing/CommunityIntro";
import { Products } from "@/components/landing/Products";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { EmotionalCTA } from "@/components/landing/EmotionalCTA";
import { QuoteForm, type InsuranceType } from "@/components/landing/QuoteForm";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import heroImg from "@/assets/hero-rider.jpg";

export const Route = createFileRoute("/moto-road-protect")({
  head: () => ({
    meta: [
      { title: "FBN e Moto Viagens · Seguro de Moto e Auto" },
      {
        name: "description",
        content:
          "Atendimento consultivo da FBN, em parceria com a comunidade Moto Viagens, para seguro de moto e seguro auto. Fale com a equipe e receba orientação.",
      },
      { property: "og:title", content: "FBN e Moto Viagens · Seguro de Moto e Auto" },
      {
        property: "og:description",
        content:
          "Proteção para quem vive a estrada. Atendimento consultivo da FBN em parceria com a comunidade Moto Viagens.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: MotoRoadProtect,
});

function MotoRoadProtect() {
  const [preselected, setPreselected] = useState<InsuranceType | undefined>(undefined);

  const scrollToQuote = (type?: InsuranceType) => {
    if (type) setPreselected(type);
    const el = document.getElementById("cotacao");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onCta={() => scrollToQuote()} />
      <main>
        <Hero onCta={() => scrollToQuote()} />
        <CommunityIntro />
        <Products onQuote={scrollToQuote} />
        <HowItWorks />
        <Benefits />
        <EmotionalCTA onCta={() => scrollToQuote()} />
        <QuoteForm preselected={preselected} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
