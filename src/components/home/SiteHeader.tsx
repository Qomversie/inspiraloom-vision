import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-mark.png.asset.json";
import houtworm from "@/assets/houtworm.jpg";
import huiszwam from "@/assets/huiszwam.jpg";
import injectie from "@/assets/injectie.jpg";

type Column = { heading: string; links: { label: string; href: string }[] };
type Item = {
  label: string;
  href: string;
  match?: string;
  mega?: { image: string; alt: string; all: string; columns: Column[] };
};

const menu: Item[] = [
  {
    label: "Houtaantasters",
    href: "/#diensten",
    mega: {
      image: houtworm,
      alt: "Houtwormgaatjes in een oude balk",
      all: "Alles over houtaantasters",
      columns: [
        {
          heading: "Houtaantasters",
          links: [
            { label: "Houtworm", href: "/#diensten" },
            { label: "Boktor", href: "/#diensten" },
            { label: "Bonte knaagkever", href: "/#diensten" },
          ],
        },
      ],
    },
  },
  {
    label: "Schimmels & zwammen",
    href: "/#diensten",
    match: "/schimmels-zwammen",
    mega: {
      image: huiszwam,
      alt: "Zwamgroei op een vloerbalk",
      all: "Alles over schimmels & zwammen",
      columns: [
        {
          heading: "Schimmels & zwammen",
          links: [{ label: "Huiszwam", href: "/schimmels-zwammen/huiszwam" }],
        },
      ],
    },
  },
  {
    label: "Bestrijdingsmethoden",
    href: "/#methode",
    mega: {
      image: injectie,
      alt: "Vakman injecteert een oude eiken balk",
      all: "Alles over bestrijdingsmethoden",
      columns: [
        {
          heading: "Eigen methode",
          links: [{ label: "Hoekstra Injectie", href: "/#methode" }],
        },
        {
          heading: "Bestrijdingsmethoden",
          links: [{ label: "Heteluchtbehandeling", href: "/#diensten" }],
        },
      ],
    },
  },
  { label: "Referenties", href: "/#referenties" },
  { label: "Over ons", href: "/over-ons", match: "/over-ons" },
  { label: "Contact", href: "/contact", match: "/contact" },
];

// `overlay` is accepted for backwards compatibility; the header is always white and sticky.
export function SiteHeader(_props: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const isActive = (m?: string) => !!m && pathname.startsWith(m);
  const activeMega = menu.find((m) => m.label === mega)?.mega;

  return (
    <header
      className="sticky top-0 z-40 border-b border-forest/15 bg-cream"
      onMouseLeave={() => setMega(null)}
    >
      <div className="mx-auto flex items-center justify-between gap-6 container-site py-4">
        <a href="/" className="flex shrink-0 items-center gap-3">
          <img src={logo.url} alt="Hoekstra Houtbehoud" width={48} height={48} className="size-11 rounded-full object-cover" />
          <span className="leading-tight text-bark">
            <span className="block text-[13px] font-bold tracking-[0.1em] uppercase">Hoekstra</span>
            <span className="block text-[13px] font-medium tracking-[0.1em] uppercase">Houtbehoud</span>
          </span>
        </a>

        <nav className="hidden min-w-0 items-center gap-8 min-[1400px]:flex">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setMega(item.mega ? item.label : null)}
              onFocus={() => setMega(item.mega ? item.label : null)}
              aria-expanded={item.mega ? mega === item.label : undefined}
              className={cn(
                "relative inline-flex items-center gap-1 whitespace-nowrap py-2 text-[13px] font-semibold tracking-[0.1em] text-bark uppercase transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-amber after:opacity-0 hover:text-amber hover:after:opacity-100",
                (isActive(item.match) || mega === item.label) && "text-amber after:opacity-100",
              )}
            >
              {item.label}
              {item.mega && <ChevronDown className="size-3.5" aria-hidden />}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="tel:0513529899"
            className="hidden items-center gap-3 whitespace-nowrap bg-primary py-2 pl-5 pr-2 text-[13px] font-semibold tracking-[0.08em] text-primary-foreground uppercase transition-colors duration-200 hover:bg-forest-deep sm:inline-flex"
          >
            Bel 0513 529 899
            <span className="flex size-8 items-center justify-center rounded-full bg-amber">
              <Phone className="size-4" aria-hidden />
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-full border border-forest/25 text-forest min-[1400px]:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {activeMega && (
        <div className="absolute inset-x-0 top-full hidden border-y border-border bg-background shadow-xl shadow-bark/10 min-[1400px]:block">
          <div className="mx-auto grid grid-cols-[280px_1fr] gap-14 container-site py-10">
            <div>
              <img src={activeMega.image} alt={activeMega.alt} loading="lazy" className="h-40 w-full object-cover" />
              <a
                href={menu.find((m) => m.label === mega)?.href}
                className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-forest hover:text-amber"
              >
                {activeMega.all} <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-10">
              {activeMega.columns.map((col) => (
                <div key={col.heading}>
                  <p className="border-b border-border pb-3 text-[13px] font-semibold tracking-[0.1em] text-bark uppercase">
                    {col.heading}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="-mx-3 block px-3 py-2 text-[16px] text-forest transition-colors hover:bg-sage">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {open && (
        <nav className="border-t border-border bg-background min-[1400px]:hidden">
          <div className="mx-auto flex flex-col container-site py-2">
            {menu.map((item) => (
              <div key={item.label} className="border-b border-border/60 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[14px] font-semibold tracking-[0.1em] text-bark uppercase"
                >
                  {item.label}
                </a>
                {item.mega && (
                  <ul className="pb-3 pl-4">
                    {item.mega.columns.flatMap((c) => c.links).map((l) => (
                      <li key={l.label}>
                        <a href={l.href} onClick={() => setOpen(false)} className="block py-1.5 text-[15px] text-forest">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
