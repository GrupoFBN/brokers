import { PlayCircle, TrendingDown, HeartHandshake, Workflow } from "lucide-react";
import { CONFIG, youtubeEmbed } from "./config";

const HIGHLIGHTS = [
  {
    icon: TrendingDown,
    title: "Economia significativa",
    text: "Redução real no custo do plano de saúde contratado para a equipe.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento consultivo",
    text: "Análise do perfil da empresa e recomendação das melhores soluções.",
  },
  {
    icon: Workflow,
    title: "Processo simples",
    text: "Da primeira conversa à contratação, tudo conduzido pelo time FBN.",
  },
];

export function VideoDepoimento() {
  const embedUrl = youtubeEmbed(CONFIG.videoUrl);

  return (
    <section id="case" className="py-20 lg:py-28 bg-aryz-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Depoimento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Victor Carvalho, CEO da Aryz, conta como foi a{" "}
            <span className="text-gradient-brand">experiência com a FBN</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Victor de Carvalho, CEO e fundador da Aryz (empresa especializada em saúde e
            segurança no ambiente de trabalho), compartilha como o atendimento e a atenção aos
            detalhes da FBN o surpreenderam na gestão do plano de saúde. Mesmo depois de passar
            por outras quatro corretoras, ele afirma nunca ter visto uma entrega igual.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-soft border border-border bg-foreground aspect-video">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="Depoimento de Victor Carvalho, CEO da Aryz"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-brand text-primary-foreground gap-4 p-8 text-center">
                  <PlayCircle className="size-20 opacity-90" strokeWidth={1.5} />
                  <div className="text-xl font-bold">Vídeo do depoimento</div>
                </div>
              )}
            </div>
            <div className="mt-4 flex items-baseline gap-2 flex-wrap">
              <span className="text-base font-semibold text-foreground">Victor Carvalho</span>
              <span className="text-sm text-muted-foreground">CEO e fundador da Aryz</span>
            </div>
          </div>

          <div className="space-y-4">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="bg-background rounded-2xl p-5 border border-border shadow-card"
              >
                <div className="size-11 rounded-xl bg-gradient-soft flex items-center justify-center mb-3">
                  <h.icon className="size-5 text-primary" />
                </div>
                <div className="font-semibold text-foreground">{h.title}</div>
                <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
