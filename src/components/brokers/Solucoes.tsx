import { motion } from "framer-motion";
import { Building2, HeartPulse, Stethoscope, Smile, Car, Home, Shield, Gift, MoreHorizontal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const solucoes = [
  { icon: Building2, title: "Seguros empresariais" },
  { icon: HeartPulse, title: "Seguro de vida" },
  { icon: Stethoscope, title: "Planos de saúde" },
  { icon: Smile, title: "Plano odontológico" },
  { icon: Car, title: "Seguro auto" },
  { icon: Home, title: "Seguro residencial" },
  { icon: Shield, title: "Proteção patrimonial" },
  { icon: Gift, title: "Benefícios corporativos" },
  { icon: MoreHorizontal, title: "Entre outros..." },
];

export function Solucoes() {
  return (
    <section className="bg-surface-muted py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Soluções"
          title="Soluções que podem fazer sentido para seus clientes"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {solucoes.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold text-foreground">{s.title}</span>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          As soluções apresentadas dependem do perfil, da necessidade e da análise de cada cliente.
          A atuação da FBN é consultiva, buscando orientar a melhor alternativa disponível para
          cada contexto.
        </p>
      </div>
    </section>
  );
}
