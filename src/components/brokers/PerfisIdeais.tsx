import { motion } from "framer-motion";
import { Calculator, Scale, Briefcase, Home, Car, Users2, Megaphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const perfis = [
  { icon: Calculator, title: "Contadores", text: "Profissionais e escritórios que acompanham empresas de perto e podem identificar necessidades relacionadas à proteção, benefícios e continuidade dos negócios." },
  { icon: Scale, title: "Advogados", text: "Escritórios que desejam oferecer uma visão mais completa aos clientes, conectando demandas jurídicas, patrimoniais e empresariais a soluções de proteção." },
  { icon: Briefcase, title: "Assessorias e consultorias", text: "Empresas que orientam negócios em gestão, planejamento, vendas, finanças, RH ou estratégia e querem agregar soluções complementares." },
  { icon: Home, title: "Imobiliárias", text: "Empresas que se relacionam com compradores, locatários, investidores e proprietários, podendo indicar soluções de proteção patrimonial e pessoal." },
  { icon: Car, title: "Comércio de veículos", text: "Lojas, concessionárias e empresas ligadas ao mercado automotivo que desejam oferecer mais segurança aos clientes no momento da compra." },
  { icon: Users2, title: "Entidades de classe", text: "Associações, sindicatos, grupos empresariais e instituições que desejam entregar mais valor aos seus associados." },
  { icon: Megaphone, title: "Influenciadores", text: "Criadores de conteúdo com comunidades engajadas que desejam indicar soluções confiáveis e relevantes para sua audiência." },
];

export function PerfisIdeais() {
  return (
    <section id="perfis" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Perfis ideais"
          title="Para quem é o FBN Brokers"
          subtitle="O programa é indicado para empresas e profissionais que já possuem relacionamento com uma base de clientes e desejam ampliar sua relevância por meio de soluções consultivas."
        />

        <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {perfis.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-30px_rgba(30,71,143,0.45)] sm:w-auto sm:shrink"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
