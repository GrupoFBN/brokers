import {
  Users,
  Workflow,
  Target,
  Handshake,
  PhoneCall,
  Zap,
} from "lucide-react";

const ITEMS = [
  { icon: Users, title: "Atendimento especializado", desc: "Equipe FBN preparada para orientar a comunidade Dolphin Mini Dicas." },
  { icon: Workflow, title: "Processo simples", desc: "Você preenche, a gente entra em contato e conduz cada etapa." },
  { icon: Target, title: "Solução pelo seu perfil", desc: "Sem fórmula pronta. A análise considera o seu momento e objetivo." },
  { icon: Handshake, title: "Parceria de confiança", desc: "Indicação de um canal próximo de quem vive o universo Dolphin Mini." },
  { icon: PhoneCall, title: "Contato rápido", desc: "A equipe responsável retorna assim que recebe a solicitação." },
  { icon: Zap, title: "Pensado para elétricos", desc: "Experiência feita para donos e interessados em carros elétricos." },
];

export function PartnershipSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-fbn-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fbn-blue">
            A parceria
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-fbn-blue-deep sm:text-4xl">
            FBN e Dolphin Mini Dicas: uma parceria para gerar mais segurança nas suas escolhas
          </h2>
          <div className="mt-5 space-y-4 text-base text-muted-foreground">
            <p>
              O Dolphin Mini Dicas se conecta com pessoas que querem entender
              melhor o BYD Dolphin Mini, carros elétricos, autonomia,
              carregamento, uso no dia a dia e decisões inteligentes de compra.
            </p>
            <p>
              Por meio da parceria com a FBN, essa comunidade passa a contar
              com um caminho simples para solicitar atendimento consultivo em
              Seguro Auto e Consórcio.
            </p>
            <p>
              A proposta é unir informação, proteção e planejamento para quem
              já tem um Dolphin Mini ou está avaliando entrar no mundo dos
              elétricos.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <li
              key={it.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-fbn-blue/5"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-fbn-blue-soft text-fbn-blue">
                <it.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-fbn-blue-deep">
                {it.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
