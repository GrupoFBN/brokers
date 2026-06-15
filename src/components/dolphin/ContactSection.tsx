import { LeadForm } from "./LeadForm";

type Props = {
  product: string;
  onProductChange: (v: string) => void;
};

export function ContactSection({ product, onProductChange }: Props) {
  return (
    <section id="contato" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-fbn-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fbn-blue">
            Solicitar contato
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-fbn-blue-deep sm:text-4xl">
            Solicite contato
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha os dados abaixo e a equipe responsável entrará em contato
            para entender sua necessidade e apresentar as opções disponíveis.
          </p>
        </div>

        <div className="mt-10">
          <LeadForm product={product} onProductChange={onProductChange} />
        </div>
      </div>
    </section>
  );
}
