import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function SobreBrokers() {
  return (
    <section id="sobre" className="bg-surface-muted py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="O que é" title="Conheça o FBN Brokers" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          <p>
            O mundo está mudando. A cada dia somos mais exigidos em nossas relações com clientes e
            precisamos mostrar diferenciais que realmente façam sentido e permitam desenvolver
            resultados reais.
          </p>
          <p>
            A FBN sempre acreditou em parcerias. Para nós, ter parceiros é uma forma consistente de
            crescer levando relevância a diversos públicos que seriam mais difíceis de atingir
            sozinhos.
          </p>
          <p className="border-l-4 border-primary pl-6 text-foreground">
            A FBN Brokers nasce dessa consciência. Estamos na era do junto, da interdependência e
            da informação compartilhada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
