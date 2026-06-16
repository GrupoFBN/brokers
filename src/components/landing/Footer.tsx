import fbnLogo from "@/assets/logo-fbn.png.asset.json";
import mvLogo from "@/assets/logo-motoviagens.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <img
            src={fbnLogo.url}
            alt="Grupo FBN"
            className="h-12 w-auto object-contain sm:h-14"
          />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            em parceria
          </span>
          <img
            src={mvLogo.url}
            alt="Moto Viagens"
            className="h-7 w-auto object-contain sm:h-8"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FBN · Moto Viagens
        </p>
      </div>
    </footer>
  );
}
