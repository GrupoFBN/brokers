import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/Logo-FBN-SVG.svg";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#sobre", label: "O que é" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#perfis", label: "Perfis ideais" },
  { href: "#beneficios", label: "Benefícios" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(30,71,143,0.25)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:h-28 sm:gap-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <img src={logo} alt="Grupo FBN" className="h-14 w-auto shrink-0 sm:h-20" />
          <span className="hidden text-lg font-bold tracking-tight text-primary sm:inline lg:text-2xl font-['Poppins']">Brokers</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden bg-primary text-primary-foreground hover:bg-primary-dark sm:inline-flex">
            <a href="#contato">Quero ser um broker</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-11 w-11 lg:hidden" aria-label="Abrir menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary-dark"
                  onClick={() => setOpen(false)}
                >
                  <a href="#contato">Quero ser um broker</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
