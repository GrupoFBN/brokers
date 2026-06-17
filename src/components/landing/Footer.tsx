import fbnLogo from "@/assets/fbn-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <img
            src={fbnLogo}
            alt="Grupo FBN"
            className="h-8 w-auto object-contain sm:h-10"
          />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            em parceria
          </span>
          <span className="text-2xl font-logo font-bold uppercase tracking-[0.15em] sm:text-4xl">
            <span className="text-[#F46A00]">M</span><span className="text-foreground">O</span><span className="text-foreground">T</span><span className="text-foreground">O</span><span className="text-[#F46A00]">V</span><span className="text-foreground">I</span><span className="text-foreground">A</span><span className="text-foreground">G</span><span className="text-foreground">E</span><span className="text-foreground">N</span><span className="text-foreground">S</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} FBN · Moto Viagens
        </p>
      </div>
    </footer>
  );
}
