import fbnLogo from "@/assets/Logo-FBN-SVG.svg";
import dolphinLogo from "@/assets/dolphinlogo.png";
import { cn } from "@/lib/utils";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
  stacked?: boolean;
};

export function BrandLockup({ size = "md", className, stacked = false }: Props) {
  const fbnH = size === "lg" ? "h-16" : size === "md" ? "h-14" : "h-10";
  const partnerText = size === "lg" ? "text-xl" : "text-base";
  const dolphinSize =
    size === "lg" ? "size-14" : size === "md" ? "size-12" : "size-8";

  return (
    <div
      className={cn(
        "flex items-center gap-3 min-w-0",
        stacked && "flex-col items-start gap-2",
        className,
      )}
    >
      <img
        src={fbnLogo}
        alt="Grupo FBN"
        className={cn(fbnH, "w-auto shrink-0")}
      />
      <div className={cn("flex items-center gap-2 min-w-0", stacked && "pl-0")}>
        <span
          className={cn(
            "shrink-0 rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
            size === "sm" && "hidden sm:inline-flex",
          )}
        >
          Parceria
        </span>
        <div className="flex items-center gap-1.5 min-w-0">
          <img
            src={dolphinLogo}
            alt="Dolphin Mini Dicas"
            className={cn(
              dolphinSize,
              "shrink-0 rounded-full object-cover ring-1 ring-border",
            )}
          />
          <span
            className={cn(
              "font-display font-bold text-fbn-blue-deep leading-none truncate",
              partnerText,
            )}
          >
            Dolphin Mini Dicas
          </span>
        </div>
      </div>
    </div>
  );
}
