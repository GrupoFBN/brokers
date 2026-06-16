import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandLockup } from "./BrandLockup";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#contato", label: "Solicitar contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8">
        <a href="#topo" aria-label="FBN" className="min-w-0">
          <BrandLockup size="md" />
        </a>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-fbn-blue"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button
            asChild
            className="hidden bg-fbn-blue text-white hover:bg-fbn-blue-deep sm:inline-flex"
          >
            <a href="#contato">Solicitar contato</a>
          </Button>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-fbn-blue text-white hover:bg-fbn-blue-deep"
            >
              <a href="#contato" onClick={() => setOpen(false)}>
                Solicitar contato
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
