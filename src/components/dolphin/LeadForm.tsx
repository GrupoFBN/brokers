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
    .min(8, "Informe um número válido")
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

type Props = {
  product: string;
  onProductChange: (v: string) => void;
};

export function LeadForm({ product, onProductChange }: Props) {
  const [data, setData] = useState<FormData>({ ...INITIAL, produto: product });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  if (product && data.produto !== product && status === "idle") {
    setData((d) => ({ ...d, produto: product }));
  }

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
        content_name: "Dolphin Dicas",
        parceiro: window.location.pathname,
      });
    }

    toast.success("Solicitação enviada com sucesso.");
  }

  const submitting = status === "submitting";

  return (
    <div className="relative min-h-[400px]">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-xl"
          >
            <div className="mx-auto grid size-16 place-items-center rounded-full bg-volt-soft text-fbn-blue-deep">
              <CheckCircle2 className="size-9 text-volt" strokeWidth={2.2} />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-fbn-blue-deep">
              Solicitação enviada com sucesso!
            </h3>
            <p className="mt-2 text-muted-foreground max-w-sm">
              Em breve a equipe responsável entrará em contato para orientações do próximo passo.
            </p>
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => {
                setData({ ...INITIAL, produto: "" });
                onProductChange("");
                setStatus("idle");
              }}
            >
              Enviar outra solicitação
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="dolphin-form"
            id="formulario-dolphin-connect"
            name="formulario-dolphin-connect"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome" required error={errors.nome}>
                <Input
                  value={data.nome}
                  onChange={(e) => set("nome", e.target.value)}
                  placeholder="Como devemos te chamar"
                  autoComplete="name"
                />
              </Field>

              <Field label="Número" required error={errors.telefone}>
                <IMaskInput
                  mask="(00) 00000-0000"
                  value={data.telefone}
                  unmask={false}
                  onAccept={(value: string) => set("telefone", value)}
                  placeholder="(00) 00000-0000"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </Field>

              <Field label="E-mail" required error={errors.email}>
                <Input
                  type="email"
                  value={data.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="seu@email.com"
                  autoComplete="email"
                />
              </Field>

              <Field label="Produto de interesse" required error={errors.produto}>
                <Select
                  value={data.produto || undefined}
                  onValueChange={(v) => {
                    set("produto", v);
                    onProductChange(v);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Seguro Auto", "Consórcio", "Tenho interesse nos dois"].map((o) => (
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
              className="mt-6 w-full bg-fbn-blue text-white hover:bg-fbn-blue-deep sm:w-auto sm:px-10"
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
      <Label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fbn-blue-deep">
        {label}
        {required && <span className="ml-1 text-fbn-blue">*</span>}
      </Label>
      {React.isValidElement(children) ? React.cloneElement(children as React.ReactElement<any>, { id }) : children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
