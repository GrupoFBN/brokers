import { motion } from "framer-motion";
import { ArrowRight, Handshake, Users, TrendingUp, Sparkles, Zap } from "lucide-react";
import hero from "@/assets/hero-brokers.jpg";
import { Button } from "@/components/ui/button";

const floats = [
  {
    icon: Handshake,
    label: "Parcerias",
    sub: "B2B consultivo",
    posMobile: "left-2 top-8",
    posDesktop: "md:left-[-6%] md:top-[55%]",
    delay: 0.5,
    showMobile: true,
  },
  {
    icon: Users,
    label: "Mais valor",
    sub: "Entrega completa",
    posMobile: "hidden",
    posDesktop: "md:flex md:left-[-2%] md:bottom-[12%]",
    delay: 0.7,
    showMobile: false,
  },
  {
    icon: Sparkles,
    label: "Consultoria",
    sub: "Experiência FBN",
    posMobile: "hidden",
    posDesktop: "md:flex md:right-[-6%] md:top-[58%]",
    delay: 0.6,
    showMobile: false,
  },
  {
    icon: TrendingUp,
    label: "Crescimento",
    sub: "+ recorrência",
    posMobile: "right-2 bottom-3",
    posDesktop: "md:right-[-4%] md:bottom-[8%]",
    delay: 0.8,
    showMobile: true,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-muted via-background to-background" />
        <div className="absolute inset-0 tech-grid opacity-60" />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[360px] w-[360px] sm:h-[460px] sm:w-[460px] rounded-full bg-accent-cyan/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur sm:px-4 sm:text-[11px] sm:tracking-[0.22em]">
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inset-0 rounded-full bg-accent-cyan animate-pulse-ring" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            </span>
            FBN Brokers · Parceria
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1] tracking-tight text-foreground sm:mt-6 sm:text-6xl lg:text-7xl">
            Relevância para sua empresa,{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-primary via-primary-glow to-accent-cyan bg-clip-text text-transparent">
                consultoria
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M2 5 Q 100 1 198 5"
                  stroke="url(#hgrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="hgrad" x1="0" x2="1">
                    <stop offset="0" stopColor="var(--color-primary)" />
                    <stop offset="1" stopColor="var(--color-accent-cyan)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            para seus clientes.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">
            Amplie o valor que sua empresa entrega aos clientes conectando sua base à experiência
            consultiva da FBN em seguros, benefícios e soluções de proteção.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="shine h-12 w-full bg-primary text-primary-foreground hover:bg-primary-dark sm:w-auto"
            >
              <a href="#sobre">
                Conhecer o programa
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full border-primary/30 text-primary hover:bg-primary/5 sm:w-auto"
            >
              <a href="#contato">Quero me tornar um broker</a>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border/60 pt-5 sm:mt-12 sm:gap-6 sm:pt-6">
            {[
              { k: "Modelo", v: "Consultivo" },
              { k: "Foco", v: "Parceria" },
              { k: "Resultado", v: "Crescimento" },
            ].map((m) => (
              <div key={m.k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.2em]">
                  {m.k}
                </dt>
                <dd className="mt-1 text-xs font-semibold tracking-tight text-foreground sm:text-sm">
                  {m.v}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
        >
          {/* Decorative tech ring */}
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-accent-cyan/20 to-transparent blur-2xl sm:-inset-6" />


          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.85rem] border border-border/60 bg-surface shadow-[0_40px_100px_-30px_rgba(30,71,143,0.55)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <img
              src={hero}
              alt="Consultora FBN apresentando o programa Brokers"
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />

            {/* Bottom scanline */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent" />

            {/* Floating cards — mobile (inside frame) */}
            {floats.filter((f) => f.showMobile).map((f, i) => (
              <motion.div
                key={`m-${f.label}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: f.delay, duration: 0.6 }}
                className={`absolute ${f.posMobile} z-10 flex max-w-[46%] items-center gap-2 rounded-xl border border-white/50 bg-background/85 px-2.5 py-1.5 shadow-lg backdrop-blur-md md:hidden animate-float`}
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow shadow-primary/30">
                  <f.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[11px] font-semibold leading-tight text-foreground">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Floating cards — desktop (overflowing frame) */}
          {floats.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: f.delay, duration: 0.6 }}
              className={`absolute ${f.posDesktop} z-10 hidden max-w-[200px] items-center gap-3 rounded-2xl border border-border/70 bg-background/90 px-3.5 py-2.5 shadow-xl backdrop-blur md:flex animate-float`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-md shadow-primary/30">
                <f.icon className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-foreground">{f.label}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {f.sub}
                </span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
