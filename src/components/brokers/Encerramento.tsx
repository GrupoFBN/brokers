import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoBranco from "@/assets/logo-fbn-branco.png.asset.json";

export function Encerramento() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-20 text-primary-foreground sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="g2" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g2)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
      >
        <img src={logoBranco.url} alt="Grupo FBN" className="h-12 w-auto" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">
          FBN Brokers
        </p>
        <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Relevância para sua empresa,
          <br className="hidden sm:block" /> consultoria para seus clientes.
        </h2>

        <Button
          asChild
          size="lg"
          className="mt-10 bg-background text-primary hover:bg-background/90"
        >
          <a href="#contato">Quero me tornar um broker FBN</a>
        </Button>

        <p className="mt-12 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Grupo FBN. Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
