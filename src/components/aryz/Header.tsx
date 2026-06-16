import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import aryzLogo from "@/assets/aryz/aryz-logo-transparent.png";
import fbnLogo from "@/assets/aryz/fbn-logo.png";

const NAV = [
  { href: "#case", label: "Case" },
  { href: "#parceria", label: "Parceria" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 sm:gap-4 shrink-0">
          <img src={aryzLogo} alt="ARYZ" className="h-7 sm:h-8 w-auto" />
          <span className="h-6 w-px bg-border" />
          <img src={fbnLogo} alt="Grupo FBN" className="h-7 sm:h-8 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-gradient-brand hover:opacity-90 shadow-soft">
            <a href="#contato">Solicitar contato</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-foreground/80"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-3 bg-gradient-brand hover:opacity-90">
              <a href="#contato" onClick={() => setOpen(false)}>
                Solicitar contato
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
