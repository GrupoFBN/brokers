import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Preciso ser corretor para participar do FBN Brokers?",
    a: "Não. O programa foi criado para empresas que não são corretoras, mas que possuem relacionamento com clientes e desejam gerar mais valor por meio da parceria com a FBN.",
  },
  {
    q: "Minha empresa precisa vender seguros?",
    a: "Não. A atuação da empresa parceira é identificar oportunidades e conectar clientes interessados à FBN. O atendimento consultivo é realizado pela equipe FBN.",
  },
  {
    q: "Que tipo de empresa pode ser broker?",
    a: "Contadores, advogados, consultorias, imobiliárias, comércio de veículos, entidades de classe, influenciadores e outras empresas com base de clientes podem ser avaliados para a parceria.",
  },
  {
    q: "O cliente será atendido por quem?",
    a: "O cliente indicado será atendido pela equipe FBN, que fará a análise consultiva e apresentará as soluções disponíveis conforme o perfil e a necessidade.",
  },
  {
    q: "A parceria exige exclusividade?",
    a: "Essa condição pode ser avaliada conforme o perfil da empresa parceira e o modelo de atuação definido entre as partes.",
  },
  {
    q: "Como começo?",
    a: "Basta preencher o formulário de interesse. A equipe FBN entrará em contato para apresentar o modelo e entender se a parceria faz sentido para sua empresa.",
  },
];

export function FAQ() {
  return (
    <section className="bg-surface-muted py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
