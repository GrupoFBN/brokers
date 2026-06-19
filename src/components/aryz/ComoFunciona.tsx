import { FileText, Search, PhoneCall } from "lucide-react";

const PASSOS = [
  {
    n: "01",
    icon: FileText,
    title: "Análise ou Estudo Personalizado",
    text: "Traga seu contrato atual para uma análise comparativa ou solicite um estudo personalizado do zero para a sua empresa.",
  },
  {
    n: "02",
    icon: Search,
    title: "Análise do perfil",
    text: "A FBN avalia a necessidade e identifica as melhores soluções disponíveis.",
  },
  {
    n: "03",
    icon: PhoneCall,
    title: "Contato consultivo",
    text: "A empresa recebe atendimento personalizado para avançar com a proposta.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Como funciona
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground font-display">
            Em <span className="text-gradient-brand">3 passos</span>, conectamos sua empresa às melhores soluções
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue opacity-30" />
          {PASSOS.map((p) => (
            <div key={p.n} className="relative bg-background border border-border rounded-3xl p-7 shadow-card">
              <div className="flex items-start justify-between mb-5">
                <div className="size-12 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground shadow-soft">
                  <p.icon className="size-6" strokeWidth={1.75} />
                </div>
                <span className="text-3xl font-extrabold text-gradient-brand font-display">{p.n}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
