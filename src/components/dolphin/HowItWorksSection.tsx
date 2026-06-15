import { ClipboardList, SearchCheck, PhoneCall } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Você preenche o formulário",
    desc: "Informe seus dados, selecione Seguro Auto ou Consórcio e conte um pouco sobre seu perfil.",
  },
  {
    icon: SearchCheck,
    title: "A FBN analisa sua necessidade",
    desc: "A equipe avalia as informações enviadas e entende qual solução faz mais sentido para o seu momento.",
  },
  {
    icon: PhoneCall,
    title: "Você recebe contato consultivo",
    desc: "Um especialista entra em contato para orientar os próximos passos e apresentar as opções disponíveis.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-fbn-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fbn-blue">
            Passo a passo
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-fbn-blue-deep sm:text-4xl">
            Como funciona
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-extrabold text-fbn-blue/15">
                  0{i + 1}
                </span>
                <div className="grid size-12 place-items-center rounded-2xl bg-fbn-blue-soft text-fbn-blue">
                  <s.icon className="size-6" />
                </div>
              </div>
              <h3 className="mt-3 text-xl font-bold text-fbn-blue-deep">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
