import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLockup } from "./BrandLockup";

const navItems = [
  { href: "#sobre", label: "Sobre a FBN" },
  { href: "#seguros", label: "Seguros" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

export function Header({ onCta }: { onCta: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center">
            <BrandLockup />
          </a>

          <nav className="hidden items-center justify-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Button
              onClick={onCta}
              className="hidden lg:inline-flex bg-gradient-fbn text-primary-foreground shadow-card hover:opacity-95"
            >
              Fale com a FBN
            </Button>
            <button
              type="button"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border text-foreground lg:hidden"
              onClick={() => setOpen((s) => !s)}
              aria-label="Abrir menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setOpen(false);
                  onCta();
                }}
                className="mt-2 bg-gradient-fbn text-primary-foreground"
              >
                Fale com a FBN
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
