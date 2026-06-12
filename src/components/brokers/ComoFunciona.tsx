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
          <svg
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px w-full lg:block"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.line
              x1="0" y1="1" x2="1000" y2="1"
              stroke="url(#cflinegrad)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="cflinegrad" x1="0" x2="1">
                <stop offset="0" stopColor="transparent" />
                <stop offset="0.5" stopColor="var(--color-accent-cyan)" />
                <stop offset="1" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
          {passos.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="tech-card group relative rounded-2xl border border-border p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-base font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  {p.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-cyan opacity-0 transition-opacity group-hover:opacity-100">
                  Etapa
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
