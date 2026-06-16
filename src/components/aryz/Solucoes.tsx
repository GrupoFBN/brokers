import { Stethoscope, Heart, Smile, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOLUCOES = [
  {
    icon: Stethoscope,
    title: "Plano de Saúde Empresarial",
    text: "Soluções de saúde corporativa para empresas que desejam oferecer mais cuidado, segurança e valorização aos seus colaboradores.",
  },
  {
    icon: Heart,
    title: "Seguro de Vida",
    text: "Proteção financeira e tranquilidade para colaboradores e suas famílias, com opções adequadas ao perfil de cada empresa.",
  },
  {
    icon: Smile,
    title: "Plano Odontológico",
    text: "Benefício acessível e valorizado, ideal para empresas que desejam ampliar o pacote de cuidados oferecido à equipe.",
  },
];

export function Solucoes() {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-aryz-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Soluções
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Benefícios que <span className="text-gradient-brand">cuidam da sua equipe</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Três frentes essenciais de proteção e valorização para os colaboradores da sua empresa.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {SOLUCOES.map((s) => (
            <div
              key={s.title}
              className="group relative bg-background rounded-3xl p-8 border border-border shadow-card hover:shadow-soft transition-all overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="size-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-primary-foreground shadow-soft mb-5">
                  <s.icon className="size-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
                <Button asChild variant="ghost" className="mt-5 -ml-3 text-primary hover:text-primary">
                  <a href="#contato">
                    Tenho interesse
                    <ArrowRight className="size-4" />
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
