import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONFIG } from "./config";

export function Contato() {
  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 lg:p-16 text-primary-foreground shadow-soft">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Quer conhecer essas soluções para sua empresa?
            </h2>
            <p className="mt-5 text-lg opacity-95 leading-relaxed">
              Fale com nosso time consultivo, sem compromisso. Queremos entender sua
              necessidade e apresentar as melhores opções para seus colaboradores.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="h-12 px-7 text-base bg-background text-primary hover:bg-background/90"
              >
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-7 text-base border-2 border-white/40 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                <a href={`mailto:${CONFIG.contactEmail}`}>
                  <Mail className="size-5" />
                  Enviar e-mail
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm opacity-80">
              Atendimento consultivo. Sem compromisso. Resposta em até 1 dia útil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
