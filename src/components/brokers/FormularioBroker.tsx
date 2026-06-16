import React, { useState, useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { IMaskInput } from "react-imask";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  empresa: z.string().trim().min(2, "Informe o nome da empresa").max(120),
  segmento: z.string().trim().min(2, "Informe o segmento").max(120),
  cargo: z.string().trim().min(2, "Informe o cargo ou função").max(120),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(30),
  email: z.string().trim().email("E-mail inválido").max(160),
  cnpj: z.string().trim().min(14, "Informe o CNPJ").max(20),
  site: z.string().trim().max(160).optional().or(z.literal("")),
  base: z.string().min(1, "Selecione o tamanho da base"),
  mensagem: z.string().max(1000).optional().or(z.literal("")),
  lgpd: z.literal(true, { errorMap: () => ({ message: "Você precisa autorizar o contato" }) }),
});

type FormValues = z.infer<typeof schema>;

const BASE_OPTIONS = [
  "Até 100 clientes",
  "De 101 a 500 clientes",
  "De 501 a 1.000 clientes",
  "Acima de 1.000 clientes",
  "Ainda não sei informar",
];

export function FormularioBroker() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      lgpd: undefined,
    },
  });

  const baseValue = watch("base");
  const lgpdValue = watch("lgpd");

  const onSubmit = (_data: FormValues) => {
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      reset();

      // Meta Pixel Tracking
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Brokers",
          parceiro: window.location.pathname,
        });
      }
    }, 1500);
  };

  const onInvalid = () => setStatus("error");

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Vamos conversar"
          title="Quero me tornar um broker FBN"
          subtitle="Preencha os dados abaixo e nossa equipe entrará em contato para entender o perfil da sua empresa e apresentar o modelo de parceria."
        />

        <div className="mt-12 relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center p-8 sm:p-16 rounded-3xl border border-success/20 bg-success/5 shadow-xl"
              >
                <div className="mb-6 rounded-full bg-success/10 p-4">
                  <CheckCircle2 className="h-12 w-12 text-success" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl font-['Poppins']">
                  Solicitação enviada com sucesso!
                </h3>
                <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
                  Em breve você receberá um contato da nossa equipe para orientações do próximo passo.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => setStatus("idle")}
                >
                  Enviar outra solicitação
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="broker-form"
                id="formulario-broker"
                name="formulario-broker"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                noValidate
                onSubmit={handleSubmit(onSubmit, onInvalid)}
                className="rounded-3xl border border-border bg-card p-6 shadow-[0_30px_80px_-40px_rgba(30,71,143,0.35)] sm:p-10"
              >
                {status === "error" && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-destructive">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm font-medium">
                      Revise os campos obrigatórios antes de enviar.
                    </p>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nome completo" error={errors.nome?.message}>
                    <Input {...register("nome")} placeholder="Seu nome" />
                  </Field>
                  <Field label="Nome da empresa" error={errors.empresa?.message}>
                    <Input {...register("empresa")} placeholder="Nome fantasia" />
                  </Field>
                  <Field label="Segmento de atuação" error={errors.segmento?.message}>
                    <Input {...register("segmento")} placeholder="Ex.: Contabilidade, Imobiliária..." />
                  </Field>
                  <Field label="Cargo ou função" error={errors.cargo?.message}>
                    <Input {...register("cargo")} placeholder="Seu cargo na empresa" />
                  </Field>
                  <Field label="Telefone ou WhatsApp" error={errors.telefone?.message}>
                    <IMaskInput
                      mask="(00) 00000-0000"
                      unmask={false}
                      placeholder="(00) 00000-0000"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...register("telefone")}
                      onAccept={(value: string) => setValue("telefone", value, { shouldValidate: true })}
                    />
                  </Field>
                  <Field label="E-mail" error={errors.email?.message}>
                    <Input type="email" {...register("email")} placeholder="voce@empresa.com" />
                  </Field>
                  <Field label="CNPJ" error={errors.cnpj?.message}>
                    <IMaskInput
                      mask="00.000.000/0000-00"
                      unmask={false}
                      placeholder="00.000.000/0000-00"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...register("cnpj")}
                      onAccept={(value: string) => setValue("cnpj", value, { shouldValidate: true })}
                    />
                  </Field>
                  <Field label="Site da empresa" error={errors.site?.message}>
                    <Input {...register("site")} placeholder="empresa.com.br" />
                  </Field>
                  <Field
                    label="Tamanho aproximado da base de clientes"
                    error={errors.base?.message}
                    className="sm:col-span-2"
                  >
                    <Select value={baseValue} onValueChange={(v) => setValue("base", v, { shouldValidate: true })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        {BASE_OPTIONS.map((o) => (
                          <SelectItem key={o} value={o}>{o}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field
                    label="Mensagem ou observações"
                    error={errors.mensagem?.message}
                    className="sm:col-span-2"
                  >
                    <Textarea
                      {...register("mensagem")}
                      rows={4}
                      placeholder="Conte um pouco sobre sua empresa e o que espera da parceria"
                    />
                  </Field>
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-surface-muted p-4">
                  <Checkbox
                    id="lgpd"
                    checked={!!lgpdValue}
                    onCheckedChange={(c) => setValue("lgpd", (c === true) as true, { shouldValidate: true })}
                    className="mt-0.5"
                  />
                  <Label htmlFor="lgpd" className="text-sm font-normal leading-relaxed text-muted-foreground">
                    Autorizo o contato da FBN para atendimento da minha solicitação e apresentação do
                    modelo de parceria FBN Brokers, conforme a legislação de proteção de dados.
                  </Label>
                </div>
                {errors.lgpd?.message && (
                  <p className="mt-2 text-sm text-destructive">{errors.lgpd.message}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-8 h-12 w-full bg-primary text-primary-foreground hover:bg-primary-dark sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Quero me tornar um broker
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const id = useId();

  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">{label}</Label>
      {React.isValidElement(children) ? React.cloneElement(children as React.ReactElement<any>, { id }) : children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
