const aryzLogo = { url: "https://cdn.lovable.dev/assets-v1/ae19720b-deae-4b62-ba8e-2c4299c616b1/aryz-logo-transparent.png" };
const fbnLogo = { url: "https://cdn.lovable.dev/assets-v1/e481f4ab-bc17-46f7-a923-ed2d28da6432/fbn-logo.png" };

export function Footer() {
  return (
    <footer className="border-t border-border bg-aryz-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10">
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          <img src={aryzLogo.url} alt="ARYZ" className="h-10 sm:h-12 w-auto" />
          <div className="h-8 w-px bg-border" />
          <img src={fbnLogo.url} alt="Grupo FBN" className="h-10 sm:h-12 w-auto" />
        </div>
      </div>
    </footer>
  );
}
