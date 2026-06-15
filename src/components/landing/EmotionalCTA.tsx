import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import roadImg from "@/assets/road-overlay.jpg";

export function EmotionalCTA({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={roadImg}
          alt="Estrada ao entardecer"
          loading="lazy"
          className="h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-deep opacity-90" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
          FBN · canal Moto Viagens
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          Antes da estrada, a sua proteção. <br className="hidden sm:inline" />
          A <span className="text-white/95 underline decoration-white/40 underline-offset-8">FBN</span> cuida da parte difícil.
        </motion.h2>
        <p className="mx-auto mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
          Imprevistos acontecem. Estar preparado muda tudo. Coloque o seguro no seu checklist com a
          consultoria de uma corretora premium presente em todo o país desde 1996.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            onClick={onCta}
            className="h-12 bg-white px-7 text-base font-semibold text-primary shadow-elegant hover:bg-white/90"
          >
            <CheckCircle2 className="mr-1 h-5 w-5" />
            Fale com a FBN
          </Button>
        </div>
      </div>
    </section>
  );
}
