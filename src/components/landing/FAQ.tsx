import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quem é responsável pelo seguro?",
    a: "A FBN é a corretora responsável pela análise e atendimento. A Moto Viagens atua como canal parceiro, conectando integrantes da comunidade ao atendimento especializado da FBN.",
  },
  {
    q: "Posso solicitar seguro de moto e auto juntos?",
    a: "Sim. Você pode pedir atendimento para moto ou auto e, durante a conversa, a equipe FBN cuida das duas frentes.",
  },
  {
    q: "Preciso ser da comunidade Moto Viagens para falar com a FBN?",
    a: "A página foi criada para atender integrantes, clientes e pessoas conectadas à Moto Viagens, mas a FBN avalia qualquer solicitação enviada por aqui.",
  },
  {
    q: "O envio do formulário garante aprovação ou preço final?",
    a: "Não. A proposta depende da análise do perfil, veículo, região, coberturas e condições disponíveis no mercado segurador.",
  },
  {
    q: "Quem entrará em contato comigo?",
    a: "A equipe da FBN entrará em contato pelos dados informados.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-surface-alt py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Perguntas <span className="text-gradient-fbn">frequentes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tudo o que você precisa saber antes de falar com a FBN.</p>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="mb-3 overflow-hidden rounded-2xl border border-border bg-surface px-5 shadow-card"
            >
              <AccordionTrigger className="text-left font-display text-base font-bold hover:no-underline sm:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
