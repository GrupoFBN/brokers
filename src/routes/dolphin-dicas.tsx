import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/dolphin/Header";
import { Hero } from "@/components/dolphin/Hero";
import { PartnershipSection } from "@/components/dolphin/PartnershipSection";

import { SolutionsSection } from "@/components/dolphin/SolutionsSection";
import { BenefitsSection } from "@/components/dolphin/BenefitsSection";
import { HowItWorksSection } from "@/components/dolphin/HowItWorksSection";
import { ValueCallSection } from "@/components/dolphin/ValueCallSection";
import { ContactSection } from "@/components/dolphin/ContactSection";
import { FaqSection } from "@/components/dolphin/FaqSection";
import { Closing } from "@/components/dolphin/Closing";

export const Route = createFileRoute("/dolphin-dicas")({
  head: () => ({
    meta: [
      {
        title: "FBN + Dolphin Mini Dicas | Seguro e consórcio para o seu elétrico",
      },
      {
        name: "description",
        content:
          "Parceria FBN e Dolphin Mini Dicas: atendimento consultivo em Seguro Auto e Consórcio para a comunidade do BYD Dolphin Mini e amantes de carros elétricos.",
      },
      { property: "og:title", content: "FBN + Dolphin Mini Dicas" },
      {
        property: "og:description",
        content:
          "Seguro e consórcio para quem vive o universo Dolphin Mini, com atendimento consultivo da FBN.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DolphinConnectPage,
});

function DolphinConnectPage() {
  const [product, setProduct] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onPick={setProduct} />
        <PartnershipSection />
        
        <SolutionsSection onPick={setProduct} />
        <BenefitsSection />
        <HowItWorksSection />
        <ValueCallSection />
        <ContactSection product={product} onProductChange={setProduct} />
        <FaqSection />
        <Closing />
      </main>
      <Toaster richColors position="top-center" />
    </div>
  );
}
