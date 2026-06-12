import { motion } from "framer-motion";
import { Handshake, Lightbulb, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pilares = [
  { icon: Handshake, title: "Parceria", text: "Empresas que crescem juntas, com objetivos alinhados." },
  { icon: Lightbulb, title: "Consultoria", text: "Apoio especializado para entender e atender cada necessidade." },
  { icon: Sparkles, title: "Relevância", text: "Mais valor percebido no relacionamento com seus clientes." },
  { icon: ShieldCheck, title: "Confiança", text: "Atuação segura, ética e comprometida com o resultado." },
  { icon: TrendingUp, title: "Resultado", text: "Soluções que fortalecem clientes e ampliam oportunidades." },
];

export function PropostaValor() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proposta"
          title="Uma nova forma de gerar valor para sua base de clientes"
          subtitle="A FBN Brokers permite que empresas que não são corretoras possam levar aos seus clientes a experiência consultiva da FBN. Quando sua empresa oferece um conjunto de serviços mais completo e diferenciado, o cliente percebe mais relevância na sua atuação."
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Nossa abordagem consultiva permite agregar valor ao que sua empresa já faz bem,
          identificando oportunidades, necessidades e gargalos em que a atuação conjunta pode
          defender melhor os interesses do cliente.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pilares.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-25px_rgba(30,71,143,0.4)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
