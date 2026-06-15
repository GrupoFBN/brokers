import { motion } from "framer-motion";
import { ClipboardList, SearchCheck, PhoneCall } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Você preenche o formulário",
    text: "Informe seus dados e o tipo de produto desejado.",
  },
  {
    n: "02",
    icon: SearchCheck,
    title: "A FBN analisa o seu perfil",
    text: "Nossa equipe verifica as informações e busca opções compatíveis com sua necessidade.",
  },
  {
    n: "03",
    icon: PhoneCall,
    title: "Atendimento consultivo FBN",
    text: "Um especialista entra em contato para orientar a melhor solução disponível.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Processo
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Simples para você. <span className="text-gradient-fbn">Consultivo pela FBN.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-8 w-full lg:block"
            viewBox="0 0 1200 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 60 20 C 300 -20, 500 60, 720 20 S 1100 -10, 1140 20"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              opacity="0.35"
            />
          </svg>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-surface p-6 shadow-card lg:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-fbn text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-primary/15">{s.n}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
