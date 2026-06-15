import { motion } from "framer-motion";
import { Briefcase, HeartHandshake, MapPinned, Users } from "lucide-react";

const values = [
  {
    icon: Briefcase,
    title: "Consultoria especializada",
    text: "Corretora premium com quase três décadas de experiência em seguros e proteção financeira.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humano",
    text: "Conversa próxima e orientação clara, do primeiro contato à contratação.",
  },
  {
    icon: MapPinned,
    title: "Cobertura nacional",
    text: "Presença em 17 estados e mais de 220 cidades, com estrutura para atender em todo o país.",
  },
  {
    icon: Users,
    title: "Parceria Moto Viagens",
    text: "Um canal dedicado a integrantes e clientes da comunidade Moto Viagens.",
  },
];

export function CommunityIntro() {
  return (
    <section id="sobre" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Quem é a FBN
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Uma corretora <span className="text-gradient-fbn">premium e consultiva</span>, com a comunidade Moto Viagens ao lado.
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Desde 1996, a FBN protege famílias, empresas, profissionais da saúde e franquias com
            soluções de seguro e benefícios. Agora, em parceria com a Moto Viagens, oferecemos um
            canal especializado para quem busca proteção sólida para a moto e o auto, com a mesma
            consultoria e o mesmo cuidado que nos definem.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-gradient-fbn group-hover:text-primary-foreground group-hover:ring-primary">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
