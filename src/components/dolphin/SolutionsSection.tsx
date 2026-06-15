import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, PiggyBank } from "lucide-react";
import seguroImg from "@/assets/solucao-seguro.jpg";
import consorcioImg from "@/assets/solucao-consorcio.jpg";


type Props = { onPick: (value: string) => void };

const SEGURO_BENEFITS = [
  "Atendimento consultivo",
  "Análise conforme perfil do veículo e do condutor",
  "Opções para uso urbano, familiar ou diário",
  "Apoio para entender coberturas e assistências",
  "Mais segurança para proteger seu carro",
];

const CONSORCIO_BENEFITS = [
  "Planejamento para compra futura",
  "Opções conforme objetivo e capacidade de pagamento",
  "Alternativa para quem quer se organizar antes de comprar",
  "Atendimento para entender o melhor caminho",
  "Possibilidade de usar para veículos, conforme regras do produto",
];

export function SolutionsSection({ onPick }: Props) {
  return (
    <section id="solucoes" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-volt-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fbn-blue-deep">
            Soluções
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-fbn-blue-deep sm:text-4xl">
            Soluções disponíveis pela parceria
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <SolutionCard
            image={seguroImg}
            icon={<ShieldCheck className="size-6" />}
            tag="Proteção"
            name="Seguro Auto"
            description="Proteção para quem já tem um Dolphin Mini, outro carro elétrico ou veículo de uso diário e quer contar com orientação para escolher uma opção compatível com seu perfil."
            benefits={SEGURO_BENEFITS}
            cta="Tenho interesse em Seguro Auto"
            onClick={() => onPick("Seguro Auto")}
          />
          <SolutionCard
            image={consorcioImg}
            icon={<PiggyBank className="size-6" />}
            tag="Planejamento"
            name="Consórcio"
            description="Uma alternativa para quem deseja planejar a compra do próximo carro, trocar de veículo ou entrar no universo dos elétricos com organização e acompanhamento consultivo."
            benefits={CONSORCIO_BENEFITS}
            cta="Tenho interesse em Consórcio"
            onClick={() => onPick("Consórcio")}
          />
        </div>


        <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-muted-foreground">
          As condições dependem de análise, perfil, disponibilidade do produto
          e regras das administradoras ou seguradoras. A FBN realiza
          atendimento consultivo para orientar as opções possíveis.
        </p>
      </div>
    </section>
  );
}

function SolutionCard({
  image,
  icon,
  tag,
  name,
  description,
  benefits,
  cta,
  onClick,
}: {
  image: string;
  icon: React.ReactNode;
  tag: string;
  name: string;
  description: string;
  benefits: string[];
  cta: string;
  onClick: () => void;
}) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-fbn-blue/5">
      <div className="relative">
        <img
          src={image}
          alt={`Imagem ilustrativa de ${name}`}
          width={1024}
          height={640}
          loading="lazy"
          className="h-44 w-full object-cover sm:h-52"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute -bottom-6 left-6 grid size-14 place-items-center rounded-2xl bg-fbn-blue text-white shadow-lg ring-4 ring-card">
          {icon}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-8 pt-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-fbn-blue">
          {tag}
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold text-fbn-blue-deep">
          {name}
        </h3>
        <p className="mt-4 text-sm text-muted-foreground">{description}</p>
        <ul className="mt-6 space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-volt-soft text-fbn-blue-deep">
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button
            asChild
            onClick={onClick}
            className="w-full bg-fbn-blue text-white hover:bg-fbn-blue-deep"
          >
            <a href="#contato">{cta}</a>
          </Button>
        </div>
      </div>
    </article>
  );
}

