import React, { useEffect, useState, useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { IMaskInput } from "react-imask";
import { CheckCircle2, Send, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type InsuranceType = "moto" | "auto" | "consorcio";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(180),
  tipo: z.enum(["moto", "auto", "consorcio"], { required_error: "Selecione o tipo de produto" }),
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm({ preselected }: { preselected?: InsuranceType }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      telefone: "",
      email: "",
      tipo: preselected,
    },
  });

  useEffect(() => {
    if (preselected) form.setValue("tipo", preselected);
  }, [preselected, form]);

  const onSubmit = async (_values: FormValues) => {
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");

    // Meta Pixel Tracking
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "Moto Viagens",
        parceiro: window.location.pathname,
      });
    }

    toast.success("Enviado para a FBN", {
      description: "Em breve nossa equipe entrará em contato.",
    });
  };

  return (
    <section id="cotacao" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            FBN · canal Moto Viagens
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Fale com a <span className="text-gradient-fbn">FBN</span>
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Deixe seus dados. Nossa equipe entra em contato para entender o seu perfil e apresentar
            as opções disponíveis.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface shadow-elegant"
        >
          <div className="border-b border-border bg-gradient-fbn-soft px-6 py-4 sm:px-10">
            <div className="flex items-center gap-3 text-sm">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">
                Atendido pela equipe FBN, canal{" "}
                <span className="font-semibold text-foreground">Moto Viagens</span>
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-10 min-h-[400px]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">
                    Enviado com sucesso!
                  </h3>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Em breve você receberá um contato da nossa equipe para orientações do próximo passo.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => {
                      form.reset();
                      setStatus("idle");
                    }}
                  >
                    Enviar outra solicitação
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="moto-form"
                  id="formulario-motoviagens"
                  name="formulario-motoviagens"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <Field label="Nome completo" error={form.formState.errors.nome?.message} required className="sm:col-span-2">
                    <Input placeholder="Seu nome" {...form.register("nome")} />
                  </Field>

                  <Field label="Telefone / WhatsApp" error={form.formState.errors.telefone?.message} required>
                    <IMaskInput
                      mask="(00) 00000-0000"
                      unmask={false}
                      placeholder="(00) 00000-0000"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...form.register("telefone")}
                      onAccept={(value: string) => form.setValue("telefone", value, { shouldValidate: true })}
                    />
                  </Field>

                  <Field label="E-mail" error={form.formState.errors.email?.message} required>
                    <Input type="email" placeholder="voce@email.com" {...form.register("email")} />
                  </Field>

                  <Field label="Tipo de produto" error={form.formState.errors.tipo?.message} required className="sm:col-span-2">
                    <Select
                      value={form.watch("tipo")}
                      onValueChange={(v) => form.setValue("tipo", v as InsuranceType, { shouldValidate: true })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moto">Seguro de Moto</SelectItem>
                        <SelectItem value="auto">Seguro Auto</SelectItem>
                        <SelectItem value="consorcio">Consórcio de Veículo</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                      className="h-12 w-full bg-gradient-fbn text-base text-primary-foreground shadow-elegant hover:opacity-95"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-1 h-4 w-4" />
                          Enviar para a FBN
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required,
  className,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const id = useId();

  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </Label>
      {React.isValidElement(children) ? React.cloneElement(children as React.ReactElement<any>, { id }) : children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
