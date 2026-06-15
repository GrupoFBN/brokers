import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA = [
  {
    q: "O Dolphin Mini Dicas vende seguro ou consórcio diretamente?",
    a: "Não. O Dolphin Mini Dicas atua como parceiro indicador. O atendimento consultivo é realizado pela FBN.",
  },
  {
    q: "Quem entrará em contato comigo?",
    a: "A equipe responsável pela parceria FBN + Dolphin Mini Dicas entrará em contato pelos dados informados no formulário.",
  },
  {
    q: "Posso solicitar seguro mesmo que meu carro não seja um Dolphin Mini?",
    a: "Sim. Você pode solicitar contato para Seguro Auto mesmo tendo outro veículo. A equipe avaliará as informações enviadas e orientará as opções disponíveis.",
  },
  {
    q: "Posso pedir atendimento para consórcio mesmo que ainda esteja pesquisando o carro?",
    a: "Sim. O consórcio pode ser analisado como uma alternativa para quem deseja planejar a compra futura de um veículo.",
  },
  {
    q: "A solicitação garante aprovação, preço ou contratação?",
    a: "Não. As opções dependem da análise do perfil, das informações enviadas, das regras do produto e das condições disponíveis.",
  },
  {
    q: "Existe algum custo para solicitar contato?",
    a: "Não. O envio da solicitação é gratuito e serve para iniciar o atendimento consultivo.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-fbn-blue-soft/30 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fbn-blue">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-fbn-blue-deep sm:text-4xl">
            Dúvidas comuns
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {QA.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-fbn-blue-deep hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
