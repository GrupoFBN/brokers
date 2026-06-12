import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EraDoJunto() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-24 text-primary-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary-glow/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Posicionamento
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Estamos na era do junto
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            O crescimento mais consistente acontece quando empresas unem forças, compartilham
            conhecimento e constroem relações de valor.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            A FBN Brokers conecta a sua relevância junto aos clientes com a nossa experiência
            consultiva. Sua empresa mantém o relacionamento, a FBN apoia na solução, e o cliente
            recebe uma entrega mais completa.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-10 bg-background text-primary hover:bg-background/90"
          >
            <a href="#contato">
              Quero entender a parceria
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
