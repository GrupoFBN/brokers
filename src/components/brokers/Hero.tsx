import { motion } from "framer-motion";
import { ArrowRight, Handshake, Users, TrendingUp, Sparkles } from "lucide-react";
import hero from "@/assets/hero-brokers.jpg";
import { Button } from "@/components/ui/button";

const floats = [
  { icon: Handshake, label: "Parcerias estratégicas", pos: "left-0 top-10" },
  { icon: Sparkles, label: "Atendimento consultivo", pos: "right-0 top-32" },
  { icon: Users, label: "Mais valor para seus clientes", pos: "left-2 bottom-32" },
  { icon: TrendingUp, label: "Crescimento conjunto", pos: "right-2 bottom-10" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-muted via-background to-background" />
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary-glow/15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            FBN Brokers
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Relevância para sua empresa,{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              consultoria para seus clientes.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Amplie o valor que sua empresa entrega aos clientes conectando sua base à experiência
            consultiva da FBN em seguros, benefícios e soluções de proteção.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark">
              <a href="#sobre">
                Conhecer o programa
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5"
            >
              <a href="#contato">Quero ser broker</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Modelo</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">Consultivo</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Foco</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">Parceria</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Resultado</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">Crescimento</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-border/60 bg-surface shadow-[0_30px_80px_-30px_rgba(30,71,143,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <img
              src={hero}
              alt="Consultora FBN apresentando o programa Brokers"
              className="h-full w-full object-cover"
            />
          </div>

          {floats.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
              className={`absolute ${f.pos} hidden items-center gap-3 rounded-2xl border border-border/70 bg-background/95 px-4 py-3 shadow-xl backdrop-blur md:flex`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-foreground">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
