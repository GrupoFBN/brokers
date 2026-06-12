import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brokers/Header";
import { Hero } from "@/components/brokers/Hero";
import { SobreBrokers } from "@/components/brokers/SobreBrokers";
import { PropostaValor } from "@/components/brokers/PropostaValor";
import { ComoFunciona } from "@/components/brokers/ComoFunciona";
import { BeneficiosEmpresa } from "@/components/brokers/BeneficiosEmpresa";
import { BeneficiosClientes } from "@/components/brokers/BeneficiosClientes";
import { PerfisIdeais } from "@/components/brokers/PerfisIdeais";
import { EraDoJunto } from "@/components/brokers/EraDoJunto";
import { Solucoes } from "@/components/brokers/Solucoes";
import { FormularioBroker } from "@/components/brokers/FormularioBroker";
import { FAQ } from "@/components/brokers/FAQ";
import { Encerramento } from "@/components/brokers/Encerramento";

const TITLE = "FBN Brokers — Relevância para sua empresa, consultoria para seus clientes";
const DESC =
  "Programa de parceria da FBN para empresas que desejam ampliar a relevância junto aos seus clientes oferecendo acesso à consultoria em seguros, benefícios e proteção.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SobreBrokers />
        <PropostaValor />
        <ComoFunciona />
        <BeneficiosEmpresa />
        <BeneficiosClientes />
        <PerfisIdeais />
        <EraDoJunto />
        <Solucoes />
        <FormularioBroker />
        <FAQ />
      </main>
      <Encerramento />
    </div>
  );
}
