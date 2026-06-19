import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/aryz/Header";
import { Hero } from "@/components/aryz/Hero";
import { VideoDepoimento } from "@/components/aryz/VideoDepoimento";
import { Parceria } from "@/components/aryz/Parceria";
import { Solucoes } from "@/components/aryz/Solucoes";
import { ComoFunciona } from "@/components/aryz/ComoFunciona";
import { Confianca } from "@/components/aryz/Confianca";
import { Contato } from "@/components/aryz/Contato";
import { Footer } from "@/components/aryz/Footer";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/aryz/hero-team.jpg";

export const Route = createFileRoute("/aryz")({
  head: () => ({
    meta: [
      { title: "ARYZ + FBN — Benefícios corporativos para cuidar da sua equipe" },
      {
        name: "description",
        content:
          "Como economizamos na contratação do plano de saúde da nossa equipe — descubra o case ARYZ + FBN e solicite contato consultivo.",
      },
      { property: "og:title", content: "ARYZ + FBN — Benefícios corporativos para sua empresa" },
      {
        property: "og:description",
        content:
          "Plano de saúde, seguro de vida e plano odontológico com atendimento consultivo da ARYZ em parceria com a FBN.",
      },
      { property: "og:url", content: "/aryz" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/aryz" }],
  }),
  component: AryzLanding,
});

function AryzLanding() {
  return (
    <div className="aryz-theme min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <VideoDepoimento />
        <Parceria />
        <Solucoes />
        <ComoFunciona />
        <Confianca />
        <Contato />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
