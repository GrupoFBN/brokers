import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
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

export type InsuranceType = "moto" | "auto";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(120),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(180),
  tipo: z.enum(["moto", "auto"], { required_error: "Selecione o tipo de produto" }),
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
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
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

          <div className="p-6 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">
                  Enviado com sucesso
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Em breve a equipe FBN entrará em contato pelos dados informados.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => {
                    form.reset();
                    setStatus("idle");
                  }}
                >
                  Enviar nova solicitação
                </Button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Nome completo" error={form.formState.errors.nome?.message} required className="sm:col-span-2">
                  <Input placeholder="Seu nome" {...form.register("nome")} />
                </Field>

                <Field label="Telefone / WhatsApp" error={form.formState.errors.telefone?.message} required>
                  <Input placeholder="(11) 99999-0000" inputMode="tel" {...form.register("telefone")} />
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
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-1 h-4 w-4" />
                        Enviar para a FBN
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
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
  return (
    <div className={className}>
      <Label className="mb-2 block text-sm font-medium text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
