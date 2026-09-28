import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo-hoekstra.jpg.asset.json";

const menu = [
  { label: "Houtaantasters", href: "#diensten" },
  { label: "Schimmels & zwammen", href: "#diensten" },
  { label: "Bestrijdingsmethoden", href: "#methode" },
  { label: "Referenties", href: "#referenties" },
  { label: "Over ons", href: "#werkwijze" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Hoekstra Houtbehoud"
            width={48}
            height={48}
            className="size-11 rounded-full object-cover object-top"
          />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-forest uppercase">
              Hoekstra
            </span>
            <span className="block text-sm font-semibold tracking-wide text-bark uppercase">
              Houtbehoud
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] text-bark/80 transition-colors hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:0513529899"
            className="hidden items-center gap-3 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-forest-deep sm:inline-flex"
          >
            Bel 0513 529 899
            <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/15">
              <Phone className="size-4" aria-hidden />
            </span>
          </a>
          <a
            href="tel:0513529899"
            aria-label="Bel 0513 529 899"
            className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground sm:hidden"
          >
            <Phone className="size-5" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-full border border-forest/25 text-forest xl:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-bark/85 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
