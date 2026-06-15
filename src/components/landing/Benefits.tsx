import { motion } from "framer-motion";
import {
  UserCheck,
  Bike,
  Smartphone,
  Building2,
  Award,
  Users,
} from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Corretora desde 1996",
    text: "Tradição e solidez no mercado de seguros e proteção financeira.",
  },
  {
    icon: UserCheck,
    title: "Atendimento consultivo",
    text: "Especialistas FBN orientam cada etapa, com clareza e sem pressão de venda.",
  },
  {
    icon: Building2,
    title: "Estrutura nacional",
    text: "Presente em 17 estados e mais de 220 cidades, com associação à ABF.",
  },
  {
    icon: Bike,
    title: "Soluções moto e auto",
    text: "Atendimento para os dois veículos no mesmo lugar, com a mesma curadoria.",
  },
  {
    icon: Smartphone,
    title: "Processo simples e digital",
    text: "Você inicia em minutos, sem burocracia. A análise é técnica e transparente.",
  },
  {
    icon: Users,
    title: "Canal Moto Viagens",
    text: "Parceria dedicada a integrantes e clientes da comunidade Moto Viagens.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative bg-surface-alt py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_color-mix(in_oklab,var(--primary)_8%,transparent),_transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Por que a FBN
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Por que falar com a <span className="text-gradient-fbn">FBN</span>?
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-primary/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base text-muted-foreground sm:text-lg">
          A FBN amplia o cuidado que dedica a famílias, empresas e profissionais a um novo público: a
          comunidade Moto Viagens. O resultado é uma ponte confiável para quem busca proteger a moto,
          o carro e a próxima jornada.
        </p>
      </div>
    </section>
  );
}
