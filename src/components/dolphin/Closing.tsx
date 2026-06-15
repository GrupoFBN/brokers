import fbnLogo from "@/assets/Logo-FBN-SVG.svg";
import dolphinLogo from "@/assets/dolphinlogo.png";

export function Closing() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <img src={fbnLogo} alt="Grupo FBN" className="h-14 w-auto" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            em parceria com
          </span>
          <div className="flex items-center gap-2">
            <img
              src={dolphinLogo}
              alt="Dolphin Mini Dicas"
              className="size-10 shrink-0 rounded-full object-cover ring-1 ring-border"
            />
            <span className="font-display text-xl font-extrabold text-fbn-blue-deep">
              Dolphin Mini Dicas
            </span>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
          Parceria criada para facilitar o acesso a Seguro Auto e Consórcio
          com atendimento consultivo e seguro.
        </p>
      </div>
    </section>
  );
}
