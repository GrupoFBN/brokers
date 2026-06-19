import { Stethoscope, Heart, Smile, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import planoSaudeImg from "@/assets/aryz/plano-saude.png";
import seguroVidaImg from "@/assets/aryz/seguro-vida.png";
import planoOdontoImg from "@/assets/aryz/plano-odonto.png";

const SOLUCOES = [
  {
    icon: Stethoscope,
    title: "Plano de Saúde Empresarial",
    text: "Soluções de saúde corporativa para empresas que desejam oferecer mais cuidado, segurança e valorização aos seus colaboradores.",
    image: planoSaudeImg,
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    text: "Proteção financeira e tranquilidade para colaboradores e suas famílias, com opções adequadas ao perfil de cada empresa.",
    image: seguroVidaImg,
  },
  {
    icon: Smile,
    title: "Plano Odontológico",
    text: "Benefício acessível e valorizado, ideal para empresas que desejam ampliar o pacote de cuidados oferecido à equipe.",
    image: planoOdontoImg,
  },
];

export function Solucoes() {
  return (
    <section id="solucoes" className="py-12 sm:py-20 lg:py-28 bg-aryz-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Soluções
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground font-display">
            Benefícios que <span className="text-gradient-brand">cuidam da sua equipe</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Três frentes essenciais de proteção e valorização para os colaboradores da sua empresa.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {SOLUCOES.map((s) => (
            <div
              key={s.title}
              className="group relative bg-background rounded-3xl border border-border shadow-card hover:shadow-soft transition-all overflow-hidden flex flex-col h-full"
            >
              {/* Image Header with Hover Effect */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Float Icon */}
                <div className="absolute bottom-4 left-6 size-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-primary-foreground shadow-soft">
                  <s.icon className="size-6" strokeWidth={1.75} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">{s.text}</p>
                </div>
                <Button asChild variant="ghost" className="mt-6 -ml-3 text-primary hover:text-primary w-fit font-semibold">
                  <a href="#contato">
                    Tenho interesse
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
