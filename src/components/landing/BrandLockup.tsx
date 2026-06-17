import { cn } from "@/lib/utils";
import fbnLogo from "@/assets/fbn-logo.png";

export function BrandLockup({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "lg" ? "h-8" : size === "sm" ? "h-5" : "h-7";
  const textSize = size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-xl";

  return (
    <div className={cn("flex min-w-0 items-center gap-3 sm:gap-4", className)}>
      <img
        src={fbnLogo}
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
        <span className={cn(textSize, "font-logo font-bold uppercase tracking-[0.15em] mt-0.5")}>
          <span className="text-[#F46A00]">M</span><span className="text-foreground">O</span><span className="text-foreground">T</span><span className="text-foreground">O</span><span className="text-[#F46A00]">V</span><span className="text-foreground">I</span><span className="text-foreground">A</span><span className="text-foreground">G</span><span className="text-foreground">E</span><span className="text-foreground">N</span><span className="text-foreground">S</span>
        </span>
      </div>
    </div>
  );
}
