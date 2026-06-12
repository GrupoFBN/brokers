import { motion } from "framer-motion";
import { Stethoscope, FileSearch, ShieldCheck, Compass, Package, BadgeCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const itens = [
  { icon: Stethoscope, title: "Atendimento consultivo" },
  { icon: FileSearch, title: "Diagnóstico das necessidades" },
  { icon: ShieldCheck, title: "Soluções de proteção alinhadas ao perfil" },
  { icon: Compass, title: "Orientação especializada" },
  { icon: Package, title: "Acesso a produtos relevantes" },
  { icon: BadgeCheck, title: "Mais segurança na tomada de decisão" },
];

export function BeneficiosClientes() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Para seus clientes" title="O que seus clientes recebem" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/20">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-bold text-foreground">{it.title}</h3>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          O cliente recebe uma experiência mais completa, com apoio especializado para entender
          riscos, necessidades e oportunidades de proteção.
        </p>
      </div>
    </section>
  );
}
