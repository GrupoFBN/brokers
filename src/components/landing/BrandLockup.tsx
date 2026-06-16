import { cn } from "@/lib/utils";
import fbnLogo from "@/assets/logo-fbn.png.asset.json";
import mvLogo from "@/assets/logo-motoviagens.png.asset.json";

export function BrandLockup({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "lg" ? "h-12" : size === "sm" ? "h-7" : "h-9";
  const mvH = size === "lg" ? "h-7" : size === "sm" ? "h-4" : "h-5";

  return (
    <div className={cn("flex min-w-0 items-center gap-3 sm:gap-4", className)}>
      <img
        src={fbnLogo.url}
        alt="Grupo FBN"
        className={cn(h, "w-auto shrink-0 object-contain")}
      />
      <span
        aria-hidden
        className="hidden h-8 w-px shrink-0 bg-border sm:block"
      />
      <div className="hidden min-w-0 flex-col sm:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          em parceria com
        </span>
        <img
          src={mvLogo.url}
          alt="Moto Viagens"
          className={cn(mvH, "mt-1 w-auto shrink-0 object-contain")}
        />
      </div>
    </div>
  );
}
