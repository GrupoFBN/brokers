import { Heart, Building2, Handshake, Workflow, Shield } from "lucide-react";

const DESTAQUES = [
  { icon: Heart, label: "Atendimento humanizado" },
  { icon: Building2, label: "Soluções empresariais" },
  { icon: Handshake, label: "Parceria estratégica" },
  { icon: Workflow, label: "Processo simples" },
  { icon: Shield, label: "Cuidado e proteção" },
];

export function Confianca() {
  return (
    <section className="py-20 lg:py-28 bg-aryz-surface">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Confiança</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
          Por que contar com a <span className="text-gradient-brand"> FBN</span>?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          A ARYZ já atua próxima das empresas em temas essenciais de saúde e segurança ocupacional. Com a parceria da
          FBN, essa relação se amplia, oferecendo também acesso a benefícios corporativos que contribuem para a
          proteção, retenção e valorização dos colaboradores.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {DESTAQUES.map((d) => (
            <div
              key={d.label}
              className="bg-background border border-border rounded-2xl p-5 flex flex-col items-center gap-3 shadow-card"
            >
              <div className="size-12 rounded-full bg-gradient-soft flex items-center justify-center">
                <d.icon className="size-5 text-accent-foreground" />
              </div>
              <div className="text-sm font-semibold text-foreground">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
