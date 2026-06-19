import React, { useState, useId } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { IMaskInput } from "react-imask";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  telefone: z
    .string()
    .trim()
    .min(8, "Informe um número de telefone válido")
    .max(20)
    .regex(/^[0-9()+\-.\s]+$/, "Use apenas números e símbolos comuns"),
  email: z.string().trim().email("E-mail inválido").max(160),
  produto: z.string().min(1, "Selecione o produto de interesse"),
  lgpd: z.literal(true, { errorMap: () => ({ message: "Autorização obrigatória" }) }),
});

type FormData = z.input<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  nome: "",
  telefone: "",
  email: "",
  produto: "",
  lgpd: false as unknown as true,
};

export function Contato() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const flat: Errors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof FormData;
        if (!flat[k]) flat[k] = issue.message;
      }
      setErrors(flat);
      toast.error("Revise os campos obrigatórios antes de enviar.");
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");

    // Meta Pixel Tracking
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "Aryz Lead Form",
        parceiro: window.location.pathname,
        produto: data.produto,
      });
    }

    toast.success("Solicitação enviada com sucesso.");
  }

  const submitting = status === "submitting";

  return (
    <section id="contato" className="py-12 sm:py-20 lg:py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-brand opacity-5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Texto Informativo */}
          <div className="lg:col-span-5 text-left">
            <span className="inline-block rounded-full bg-gradient-soft border border-border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
              Solicitar Contato
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground font-display">
              Quer conhecer essas soluções para sua empresa?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Fale com nosso time consultivo, sem compromisso. Queremos entender sua
              necessidade e apresentar as melhores opções de benefícios para seus colaboradores.
            </p>
            <div className="mt-8 space-y-4 border-t border-border pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-brand-blue" />
                <span>Atendimento consultivo personalizado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-brand-purple" />
                <span>Sem compromisso de contratação</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-gradient-brand" />
                <span>Retorno rápido em até 1 dia útil</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário */}
          <div className="lg:col-span-7">
            <div className="relative min-h-[400px]">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-soft"
                  >
                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-soft text-primary">
                      <CheckCircle2 className="size-9 text-brand-purple animate-pulse" strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                      Solicitação enviada com sucesso!
                    </h3>
                    <p className="mt-2 text-muted-foreground max-w-sm">
                      Em breve nossa equipe entrará em contato para apresentar a melhor proposta.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-8 border-2 border-primary/20 hover:border-primary/45"
                      onClick={() => {
                        setData(INITIAL);
                        setStatus("idle");
                      }}
                    >
                      Enviar outra solicitação
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="aryz-form"
                    id="formulario-aryz"
                    name="formulario-aryz"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    onSubmit={handleSubmit}
                    className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10"
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Nome" required error={errors.nome}>
                        <Input
                          value={data.nome}
                          onChange={(e) => set("nome", e.target.value)}
                          placeholder="Seu nome completo"
                          autoComplete="name"
                        />
                      </Field>

                      <Field label="Telefone" required error={errors.telefone}>
                        <IMaskInput
                          mask="(00) 00000-0000"
                          value={data.telefone}
                          unmask={false}
                          onAccept={(value: string) => set("telefone", value)}
                          placeholder="(00) 00000-0000"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </Field>

                      <Field label="E-mail" required error={errors.email} className="sm:col-span-2">
                        <Input
                          type="email"
                          value={data.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="seu@email.com"
                          autoComplete="email"
                        />
                      </Field>

                      <Field label="Produto de interesse" required error={errors.produto} className="sm:col-span-2">
                        <Select
                          value={data.produto || undefined}
                          onValueChange={(v) => set("produto", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o produto de interesse" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              "Plano de Saúde Empresarial",
                              "Seguro de Vida",
                              "Plano Odontológico",
                              "Todos os benefícios",
                            ].map((o) => (
                              <SelectItem key={o} value={o}>
                                {o}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>

                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4">
                      <Checkbox
                        id="lgpd"
                        checked={!!data.lgpd}
                        onCheckedChange={(v) => set("lgpd", (v === true) as unknown as true)}
                        className="mt-0.5"
                      />
                      <Label
                        htmlFor="lgpd"
                        className="text-sm font-normal leading-relaxed text-muted-foreground"
                      >
                        Autorizo o contato da FBN para atendimento da minha solicitação,
                        conforme a legislação de proteção de dados.
                      </Label>
                    </div>
                    {errors.lgpd && (
                      <p className="mt-2 text-sm text-destructive">{errors.lgpd}</p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="mt-6 w-full bg-gradient-brand text-white hover:opacity-90 font-semibold sm:w-auto sm:px-10"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 size-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar solicitação
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const id = useId();

  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-brand-purple">*</span>}
      </Label>
      {React.isValidElement(children) ? React.cloneElement(children as React.ReactElement<any>, { id }) : children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
