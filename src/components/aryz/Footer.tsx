import aryzLogo from "@/assets/aryz/aryz-logo.png";
import fbnLogo from "@/assets/aryz/fbn-logo.svg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-aryz-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <img src={aryzLogo} alt="ARYZ" className="h-10 sm:h-12 w-auto" />
          <div className="h-8 w-px bg-border" />
          <img src={fbnLogo} alt="Grupo FBN" className="h-10 sm:h-12 w-auto" />
        </div>
      </div>
    </footer>
  );
}
