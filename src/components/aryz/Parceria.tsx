import { Plus, Users, Building2, Zap, MessageCircle, ShieldCheck } from "lucide-react";
import aryzLogo from "@/assets/aryz/aryz-logo-transparent.png";
import fbnLogo from "@/assets/aryz/fbn-logo.png";

const DIFERENCIAIS = [
  { icon: Users, title: "Atendimento especializado", text: "Time consultivo dedicado ao seu setor." },
  { icon: Building2, title: "Soluções para empresas", text: "Benefícios corporativos sob medida." },
  { icon: Zap, title: "Processo rápido", text: "Da indicação ao atendimento sem burocracia." },
  { icon: MessageCircle, title: "Consultoria personalizada", text: "Análise do perfil e recomendação certa." },
  { icon: ShieldCheck, title: "Proteção para colaboradores", text: "Cuidado e segurança em cada etapa." },
];

export function Parceria() {
  return (
    <section id="parceria" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              Quem somos
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Uma parceria para ampliar o cuidado com{" "}
              <span className="text-gradient-brand">empresas e colaboradores</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">ARYZ</strong> atua com soluções em saúde e segurança
              ocupacional, ajudando empresas a manterem ambientes mais seguros e preparados.
            </p>
            <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
              Por meio da parceria com a <strong className="text-foreground">FBN</strong>, conectamos
              sua empresa a soluções estratégicas de benefícios corporativos: planos de saúde, seguro
              de vida e plano odontológico.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-soft rounded-3xl p-8 lg:p-12 border border-border shadow-card">
              <div className="flex items-center justify-center gap-6 lg:gap-10">
                <div className="bg-background rounded-2xl p-6 shadow-card flex items-center justify-center min-h-[60px] flex-1">
                  <img src={aryzLogo} alt="ARYZ" className="h-7 lg:h-8 w-auto object-contain" />
                </div>
                <div className="size-12 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground shadow-soft shrink-0">
                  <Plus className="size-6" />
                </div>
                <div className="bg-background rounded-2xl p-6 shadow-card flex items-center justify-center min-h-[60px] flex-1">
                  <img src={fbnLogo} alt="Grupo FBN" className="h-7 lg:h-10 w-auto object-contain" />
                </div>
              </div>
              <div className="mt-6 text-center text-sm text-muted-foreground italic">
                "Confiança não tem preço, tem valor."
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DIFERENCIAIS.map((d) => (
            <div
              key={d.title}
              className="bg-background border border-border rounded-2xl p-5 hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <div className="size-10 rounded-lg bg-gradient-soft flex items-center justify-center mb-3">
                <d.icon className="size-5 text-accent-foreground" />
              </div>
              <div className="font-semibold text-foreground text-sm">{d.title}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{d.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
