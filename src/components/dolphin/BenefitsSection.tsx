import {
  Headphones,
  Scale,
  UserCheck,
  PhoneCall,
  Workflow,
  Users,
  BatteryCharging,
  ShieldCheck,
} from "lucide-react";

const ITEMS = [
  { icon: Headphones, title: "Atendimento consultivo" },
  { icon: Scale, title: "Mais clareza para comparar opções" },
  { icon: UserCheck, title: "Soluções adequadas ao perfil" },
  { icon: PhoneCall, title: "Contato direto com a equipe" },
  { icon: Workflow, title: "Processo simples e objetivo" },
  { icon: Users, title: "Pensado para a comunidade" },
  { icon: BatteryCharging, title: "Apoio para quem vive o elétrico" },
  { icon: ShieldCheck, title: "Mais segurança na decisão" },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-fbn-blue-soft/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-fbn-blue-deep sm:text-4xl">
            Por que solicitar pela parceria FBN + Dolphin Mini Dicas?
          </h2>
          <p className="mt-4 text-muted-foreground">
            A parceria entre FBN e Dolphin Mini Dicas foi criada para oferecer
            uma experiência mais simples, segura e orientada para quem busca
            proteger seu veículo ou planejar a compra do próximo carro.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <li
              key={it.title}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-fbn-blue text-white">
                <it.icon className="size-5" />
              </div>
              <p className="text-sm font-semibold text-fbn-blue-deep">
                {it.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
