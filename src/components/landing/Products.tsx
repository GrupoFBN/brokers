import { motion } from "framer-motion";
import { Bike, Car, Wallet, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import motoImg from "@/assets/moto-card.jpg";
import autoImg from "@/assets/auto-card.jpg";
import consorcioImg from "@/assets/consorcio-card.jpg";
import type { InsuranceType } from "./QuoteForm";

const motoBenefits = [
  "Cobertura roubo e furto",
  "Colisão e danos",
  "Assistência 24 horas",
  "Guincho e suporte",
  "Danos a terceiros",
  "Perfil personalizado",
];

const autoBenefits = [
  "Proteção completa",
  "Assistência 24 horas",
  "Danos a terceiros",
  "Suporte emergencial",
  "Diferentes perfis de uso",
  "Atendimento consultivo",
];

const consorcioBenefits = [
  "Planos para carro",
  "Planos para moto",
  "Parcelas sem juros",
  "Lance e contemplação",
  "Quitação de financiamento",
  "Curadoria FBN",
];

type Props = { onQuote: (type: InsuranceType) => void };

export function Products({ onQuote }: Props) {
  return (
    <section id="seguros" className="relative bg-surface-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Seguros pela FBN
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Escolha a proteção ideal para <span className="text-gradient-fbn">o seu veículo</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Atendimento consultivo da FBN. Você nos conta o perfil, a equipe
            analisa e apresenta as melhores opções.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            icon={<Bike className="h-5 w-5" />}
            tag="Duas rodas"
            title="Seguro de Moto"
            description="Proteção para motociclistas no uso diário, viagens ou grandes expedições, com a curadoria FBN."
            image={motoImg}
            imageAlt="Moto adventure parada em mirante de montanha"
            benefits={motoBenefits}
            cta="Falar sobre seguro de moto"
            onCta={() => onQuote("moto")}
          />
          <ProductCard
            icon={<Car className="h-5 w-5" />}
            tag="Quatro rodas"
            title="Seguro Auto"
            description="Proteção para o carro da família ou o automóvel do dia a dia, com atendimento consultivo FBN."
            image={autoImg}
            imageAlt="SUV em estrada cênica de montanha"
            benefits={autoBenefits}
            cta="Falar sobre seguro auto"
            onCta={() => onQuote("auto")}
          />
          <ProductCard
            icon={<Wallet className="h-5 w-5" />}
            tag="Planejamento"
            title="Consórcio de Veículo"
            description="Conquiste seu carro ou moto de forma planejada, com parcelas que cabem no seu orçamento."
            image={consorcioImg}
            imageAlt="Entrega de chaves de um carro novo em concessionária"
            benefits={consorcioBenefits}
            cta="Falar sobre consórcio"
            onCta={() => onQuote("consorcio")}
          />
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          A FBN não promete aprovação ou menor preço. Todas as condições dependem de análise técnica.
        </p>
      </div>
    </section>
  );
}

function ProductCard({
  icon,
  tag,
  title,
  description,
  image,
  imageAlt,
  benefits,
  cta,
  onCta,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  cta: string;
  onCta: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="group flex flex-col h-full overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition-all hover:border-primary/40 hover:shadow-elegant"
    >
      <div className="relative h-48 overflow-hidden sm:h-56 shrink-0">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
          <span>{icon}</span>
          {tag}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <div className="flex-1">
          <h3 className="font-display text-2xl font-extrabold sm:text-3xl">{title}</h3>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{description}</p>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={onCta}
          size="lg"
          className="mt-8 w-full bg-gradient-fbn text-primary-foreground shadow-card hover:opacity-95 shrink-0"
        >
          {cta}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  );
}
