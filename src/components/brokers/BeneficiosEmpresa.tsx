import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const itens = [
  "Mais relevância no relacionamento com clientes",
  "Ampliação do portfólio sem se tornar corretora",
  "Diferenciação em relação ao mercado",
  "Acesso à consultoria especializada da FBN",
  "Nova oportunidade de relacionamento comercial",
  "Fortalecimento da confiança com sua base",
  "Possibilidade de criar valor sem mudar sua operação principal",
];

export function BeneficiosEmpresa() {
  return (
    <section id="beneficios" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Para sua empresa"
          title="O que sua empresa ganha com o FBN Brokers"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((it, i) => (
            <motion.div
              key={it}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-sm font-medium leading-relaxed text-foreground">{it}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          A FBN Brokers foi criada para empresas que desejam crescer de forma inteligente,
          oferecendo soluções relevantes sem perder o foco no que já fazem bem.
        </p>
      </div>
    </section>
  );
}
