import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, MapPin, Award, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-rider.jpg";

const trustStats = [
  { icon: Calendar, label: "Desde 1996" },
  { icon: MapPin, label: "+17 estados" },
  { icon: ShieldCheck, label: "+220 cidades" },
  { icon: Award, label: "Associada ABF" },
];

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-background pt-36 pb-20 md:pt-44 lg:pt-48 lg:pb-28"
    >
      {/* Subtle decorative grid + radial */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,_color-mix(in_oklab,var(--primary)_10%,transparent),_transparent_55%)]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            FBN · Corretora desde 1996
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Seguro de moto e auto com a{" "}
            <span className="text-gradient-fbn">consultoria de quem protege o que importa</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A <strong className="font-semibold text-foreground">FBN</strong> é referência em proteção
            financeira e consultoria em seguros. Em parceria com a comunidade Moto Viagens, abrimos
            um canal especializado para seguro de moto e auto, com o mesmo cuidado e a clareza que
            marcam a nossa atuação desde 1996.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={onCta}
              className="h-12 bg-gradient-fbn px-6 text-base text-primary-foreground shadow-elegant hover:opacity-95"
            >
              Fale com a FBN
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 border-border bg-surface px-6 text-base text-foreground hover:bg-secondary"
            >
              <a href="#sobre">Conhecer a FBN</a>
            </Button>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustStats.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm shadow-card"
              >
                <s.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate font-medium text-foreground">{s.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: image panel with partner card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-elegant">
            <img
              src={heroImg}
              alt="Motociclista em estrada de montanha"
              width={1280}
              height={896}
              className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent p-5">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-foreground">
                  <span className="font-logo font-bold uppercase tracking-[0.15em] text-foreground"><span className="text-[#F46A00]">M</span><span className="text-foreground">O</span><span className="text-foreground">T</span><span className="text-foreground">O</span><span className="text-[#F46A00]">V</span><span className="text-foreground">I</span><span className="text-foreground">A</span><span className="text-foreground">G</span><span className="text-foreground">E</span><span className="text-foreground">N</span><span className="text-foreground">S</span></span>
                </span>
                <p className="mt-3 font-display text-base font-semibold text-white sm:text-lg">
                  Um canal FBN para a comunidade Moto Viagens.
                </p>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">
                  Atendimento consultivo · Moto · Auto
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
