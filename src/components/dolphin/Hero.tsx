import { Button } from "@/components/ui/button";
import carImg from "@/assets/byd-dolphin-mini.png";
import { ShieldCheck, Sparkles, BatteryCharging, Headphones } from "lucide-react";

type Props = { onPick?: (product: string) => void };

const FLOAT_CARDS = [
  {
    icon: <Headphones className="size-5 text-fbn-blue" />,
    title: "Atendimento consultivo FBN",
    sub: "Equipe especializada",
  },
  {
    icon: <ShieldCheck className="size-5 text-fbn-blue" />,
    title: "Seguro e consórcio",
    sub: "Para a comunidade Dolphin Mini Dicas",
  },
  {
    icon: <BatteryCharging className="size-5 text-volt" />,
    title: "Proteção e planejamento",
    sub: "Para o seu elétrico",
  },
];

export function Hero(_props: Props) {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-gradient-to-b from-fbn-blue-soft via-background to-background"
    >
      <div className="pointer-events-none absolute -top-32 right-[-10%] size-[480px] rounded-full bg-fbn-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-[-10%] size-[420px] rounded-full bg-volt/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-10 pt-8 sm:px-6 sm:gap-12 sm:pb-16 sm:pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-fbn-blue/20 bg-white px-3 py-1 text-xs font-medium text-fbn-blue shadow-sm sm:mb-5">
            <Sparkles className="size-3.5 text-volt" />
            FBN x Dolphin Mini Dicas
          </span>

          <h1 className="text-3xl font-extrabold leading-[1.15] text-fbn-blue-deep sm:text-5xl sm:leading-tight lg:text-[3.4rem]">
            Seguro e consórcio para quem vive o universo{" "}
            <span className="text-fbn-blue">EV</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:mt-5 sm:text-lg">
            A FBN, em parceria com o Dolphin Mini Dicas, facilita o acesso a
            soluções de Seguro Auto e Consórcio com atendimento consultivo,
            seguro e personalizado para quem já tem ou deseja ter um carro
            elétrico.
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
            <Button
              asChild
              size="lg"
              className="w-full bg-fbn-blue text-white shadow-lg shadow-fbn-blue/20 hover:bg-fbn-blue-deep sm:w-auto"
            >
              <a href="#contato">Quero solicitar contato</a>
            </Button>
          </div>

          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-5 sm:mt-10 sm:gap-6 sm:pt-6">
            <Stat label="Atendimento" value="Consultivo" />
            <Stat label="Foco" value="Proteção" />
            <Stat label="Parceria" value="Exclusiva" />
          </dl>
        </div>

        <div className="relative min-w-0">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-fbn-blue-soft to-white shadow-xl shadow-fbn-blue/10 sm:rounded-3xl sm:shadow-2xl">
            <img
              src={carImg}
              alt="BYD Dolphin Mini branco visto de frente em três quartos"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full object-contain p-2 sm:p-6"
            />
          </div>

          {/* Desktop floating cards */}
          <FloatCard
            className="absolute -left-4 -top-4 hidden md:flex"
            delay={0}
            {...FLOAT_CARDS[0]}
          />
          <FloatCard
            className="absolute -right-6 top-1/2 hidden -translate-y-1/2 md:flex"
            delay={0.8}
            {...FLOAT_CARDS[1]}
          />
          <FloatCard
            className="absolute bottom-32 right-58 hidden md:flex"
            delay={1.6}
            {...FLOAT_CARDS[2]}
          />

          {/* Mobile horizontal snap carousel */}
          <div className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-6 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FLOAT_CARDS.map((c) => (
              <FloatCard
                key={c.title}
                {...c}
                className="flex min-w-[80%] snap-start"
                noAnimate
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">
        {label}
      </dt>
      <dd className="mt-1 font-display text-base font-bold text-fbn-blue-deep sm:text-lg">
        {value}
      </dd>
    </div>
  );
}

function FloatCard({
  className,
  icon,
  title,
  sub,
  delay = 0,
  noAnimate = false,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  delay?: number;
  noAnimate?: boolean;
}) {
  return (
    <div
      style={noAnimate ? undefined : { animationDelay: `${delay}s` }}
      className={`max-w-[15rem] items-start gap-3 rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur ${noAnimate ? "" : "animate-float"} ${className ?? ""}`}
    >
      <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-fbn-blue-soft">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-fbn-blue-deep">{title}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}
