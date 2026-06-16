import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight, Sparkles, TrendingDown } from "lucide-react";
import heroImg from "@/assets/aryz/hero-team.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-gradient-brand opacity-10 blur-3xl" />
        <div className="absolute top-1/3 -left-32 size-[400px] rounded-full bg-brand-purple opacity-10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-soft border border-border text-xs font-semibold text-primary mb-6">
            <Sparkles className="size-3.5" />
            Case real ARYZ + FBN
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
            Como economizamos na contratação do{" "}
            <span className="text-gradient-brand">Plano de Saúde</span> da nossa equipe
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Nossa empresa encontrou na <strong className="text-foreground">FBN</strong> uma
            solução que nos deixou satisfeitos. Queremos que a sua empresa também tenha acesso
            ao mesmo cuidado e às mesmas condições.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand hover:opacity-90 shadow-soft h-12 px-6 text-base"
            >
              <a href="#case">
                <PlayCircle className="size-5" />
                Assistir depoimento
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base border-2"
            >
              <a href="#contato">
                Solicitar contato
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-brand-blue" />
              Atendimento consultivo
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-brand-purple" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-gradient-brand" />
              Soluções empresariais
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-soft border border-border">
              <img
                src={heroImg}
                alt="Equipe corporativa colaborando em ambiente de trabalho"
                width={1280}
                height={1280}
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6">
                <div className="bg-background/95 backdrop-blur rounded-2xl p-4 shadow-card border border-border flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground shadow-soft shrink-0">
                    <TrendingDown className="size-5" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Resultado
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-foreground">
                      Redução de custos com plano de saúde
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
