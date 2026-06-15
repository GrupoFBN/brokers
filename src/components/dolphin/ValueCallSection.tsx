import { Button } from "@/components/ui/button";
import { ArrowRight, BatteryCharging } from "lucide-react";

export function ValueCallSection() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-fbn-blue-deep px-8 py-14 text-white shadow-2xl sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-fbn-blue/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-volt/20 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                <BatteryCharging className="size-3.5 text-volt" />
                Pensado para a sua jornada elétrica
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Mais segurança para cuidar do seu Dolphin Mini ou planejar o próximo carro
              </h2>
              <p className="mt-4 max-w-2xl text-white/80">
                Quem acompanha dicas sobre carro elétrico sabe que cada detalhe
                importa. Seguro, consórcio, uso diário, autonomia, recarga e
                planejamento fazem parte de uma decisão mais inteligente.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-white text-fbn-blue-deep shadow-lg hover:bg-white/90"
            >
              <a href="#contato" className="inline-flex items-center gap-2">
                Solicitar contato agora
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
