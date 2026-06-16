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

const TITLE = "FBN Brokers | Programa de Parceria em Seguros e Benefícios";
const DESC =
  "Aumente a relevância da sua empresa com o FBN Brokers. Ofereça consultoria especializada em seguros e benefícios para seus clientes com a solidez do Grupo FBN.";
const KEYWORDS = "corretora de seguros, programa de corretores, parceria comercial, benefícios corporativos, consultoria de seguros, fbn brokers, grupo fbn";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: KEYWORDS },
      
      // GEO Tags
      { name: "geo.region", content: "BR" },
      { name: "geo.placename", content: "Brasil" },
      { name: "geo.position", content: "-23.55052;-46.633309" },
      { name: "ICBM", content: "-23.55052, -46.633309" },

      // Open Graph / Facebook
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fbn.com.br/brokers" },
      { property: "og:site_name", content: "FBN Brokers" },
      { property: "og:locale", content: "pt_BR" },
      
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:site", content: "@GrupoFBN" },
    ],
    links: [
      { rel: "canonical", href: "https://fbn.com.br/brokers" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "FBN Brokers",
          "description": DESC,
          "provider": {
            "@type": "Organization",
            "name": "Grupo FBN",
            "url": "https://fbn.com.br"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Brazil"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Parcerias FBN",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consultoria em Seguros"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Benefícios Corporativos"
                }
              }
            ]
          }
        })
      }
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
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
