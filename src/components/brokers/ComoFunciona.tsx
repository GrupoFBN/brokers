import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const passos = [
  {
    n: "01",
    title: "Sua empresa se torna broker FBN",
    text: "A empresa parceira passa a contar com a FBN como apoio consultivo para soluções de seguros, benefícios e proteção.",
  },
  {
    n: "02",
    title: "Você identifica oportunidades na sua base",
    text: "A partir do relacionamento que já existe com seus clientes, sua empresa identifica demandas que podem ser atendidas pela FBN.",
  },
  {
    n: "03",
    title: "A indicação é registrada",
    text: "A empresa parceira envia os dados do cliente interessado por meio da página ou canal definido para a parceria.",
  },
  {
    n: "04",
    title: "A FBN realiza o atendimento consultivo",
    text: "A equipe FBN entra em contato, entende o cenário do cliente e apresenta as soluções mais adequadas.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Jornada" title="Como funciona a parceria" />

        <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          {passos.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20">
                {p.n}
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
