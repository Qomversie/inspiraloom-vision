import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-mark.png.asset.json";
import houtworm from "@/assets/houtworm.jpg";
import huiszwam from "@/assets/huiszwam.jpg";
import injectie from "@/assets/injectie.jpg";
import portret from "@/assets/portret.jpg";

type SubLink = { label: string; href: string; children?: { label: string; href: string }[] };
type Item = {
  label: string;
  href: string;
  match?: string;
  mega?: { image: string; alt: string; all: string; links: SubLink[] };
};

// Pagina's die nog niet bestaan wijzen voorlopig naar de passende sectie op de homepage.
const menu: Item[] = [
  {
    label: "Houtaantasters",
    href: "/#diensten",
    mega: {
      image: houtworm,
      alt: "Houtwormgaatjes in een oude balk",
      all: "Alles over houtaantasters",
      links: [
        { label: "Boktor bestrijden", href: "/#diensten" },
        { label: "Bonte knaagkever", href: "/#diensten" },
        { label: "Houtworm", href: "/#diensten" },
        { label: "Spinthoutkever", href: "/#diensten" },
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
      links: [
        { label: "Huiszwam", href: "/schimmels-zwammen/huiszwam" },
        { label: "Kelderzwam", href: "/#diensten" },
        { label: "Poriënzwam", href: "/#diensten" },
        { label: "Plaatjeszwam", href: "/#diensten" },
        { label: "Oppervlakte schimmels", href: "/#diensten" },
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
      links: [
        { label: "Hoekstra Injectie", href: "/#methode" },
        { label: "Heteluchtbehandeling", href: "/#diensten" },
        { label: "Oppervlaktebehandeling", href: "/#diensten" },
        { label: "Gassingen", href: "/#diensten" },
      ],
    },
  },
  { label: "Referenties", href: "/#referenties" },
  {
    label: "Over ons",
    href: "/over-ons",
    match: "/over-ons",
    mega: {
      image: portret,
      alt: "Jaap en Jurjen Hoekstra",
      all: "Alles over ons",
      links: [
        {
          label: "Expertise",
          href: "/over-ons",
          children: [
            { label: "Monumenten", href: "/over-ons" },
            { label: "Kerken", href: "/over-ons" },
            { label: "Molens", href: "/over-ons" },
          ],
        },
        { label: "Kwaliteit", href: "/over-ons" },
        { label: "Werkgebied", href: "/over-ons" },
      ],
    },
  },
  { label: "Contact", href: "/contact", match: "/contact" },
];

function MegaLink({ label, href, small }: { label: string; href: string; small?: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 py-1.5 text-bark transition-colors hover:text-forest",
        small ? "text-[15px]" : "text-[16px]",
      )}
    >
      <ArrowRight className="size-3.5 shrink-0 text-amber transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      {label}
    </a>
  );
}

// `overlay` is accepted for backwards compatibility; the header is always sand and sticky.
export function SiteHeader(_props: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const isActive = (m?: string) => !!m && pathname.startsWith(m);
  const activeItem = menu.find((m) => m.label === mega);
  const activeMega = activeItem?.mega;

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
                "inline-flex items-center gap-1 whitespace-nowrap py-2 text-[13px] font-semibold tracking-[0.1em] text-bark uppercase transition-colors duration-200 hover:text-amber",
                (isActive(item.match) || mega === item.label) && "text-amber",
              )}
            >
              {item.label}
              {item.mega && (
                <ChevronDown
                  className={cn("size-3.5 transition-transform duration-200", mega === item.label && "rotate-180")}
                  aria-hidden
                />
              )}
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
        <div className="absolute inset-x-0 top-full hidden border-b border-forest/15 bg-cream shadow-lg shadow-bark/5 animate-in fade-in slide-in-from-top-2 duration-200 min-[1400px]:block">
          <div className="mx-auto grid grid-cols-[1fr_2fr_1fr] gap-12 border-t border-forest/15 container-site py-10">
            <div>
              <img src={activeMega.image} alt={activeMega.alt} loading="lazy" className="h-36 w-full object-cover" />
              <a
                href={activeItem?.href}
                className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-forest hover:text-amber"
              >
                {activeMega.all} <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>
            <ul className="grid content-start grid-cols-2 gap-x-10 gap-y-1">
              {activeMega.links.map((l) => (
                <li key={l.label}>
                  <MegaLink label={l.label} href={l.href} />
                  {l.children && (
                    <ul className="mb-1 ml-6 border-l border-forest/15 pl-4">
                      {l.children.map((c) => (
                        <li key={c.label}>
                          <MegaLink label={c.label} href={c.href} small />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="self-start bg-forest-deep p-7">
              <p className="text-xl text-primary-foreground">Direct advies nodig?</p>
              <p className="mt-2 text-[15px] text-primary-foreground/80">Bel ons, wij denken graag met u mee.</p>
              <a
                href="tel:0513529899"
                className="mt-5 inline-flex items-center gap-3 bg-sage py-2 pl-5 pr-2 text-[13px] font-semibold tracking-[0.08em] text-forest uppercase transition-colors hover:bg-background"
              >
                Bel 0513 529 899
                <span className="flex size-8 items-center justify-center rounded-full bg-amber text-primary-foreground">
                  <Phone className="size-4" aria-hidden />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {open && (
        <nav className="fixed inset-x-0 bottom-0 top-[77px] z-40 flex flex-col overflow-y-auto border-t border-forest/15 bg-cream min-[1400px]:hidden">
          <div className="mx-auto flex w-full flex-1 flex-col container-site py-2">
            {menu.map((item) => (
              <div key={item.label} className="border-b border-forest/15">
                {item.mega ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                      aria-expanded={expanded === item.label}
                      className={cn(
                        "flex w-full items-center justify-between py-4 text-left text-[14px] font-semibold tracking-[0.1em] text-bark uppercase",
                        isActive(item.match) && "text-amber",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("size-4 transition-transform duration-200", expanded === item.label && "rotate-180")}
                        aria-hidden
                      />
                    </button>
                    {expanded === item.label && (
                      <ul className="pb-4 pl-1">
                        <li>
                          <a href={item.href} onClick={() => setOpen(false)} className="block py-1.5 text-[15px] font-semibold text-forest">
                            {item.mega.all}
                          </a>
                        </li>
                        {item.mega.links.flatMap((l) => [l, ...(l.children ?? [])]).map((l) => (
                          <li key={l.label} onClick={() => setOpen(false)}>
                            <MegaLink label={l.label} href={l.href} small />
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-4 text-[14px] font-semibold tracking-[0.1em] text-bark uppercase",
                      isActive(item.match) && "text-amber",
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="tel:0513529899"
              className="mb-6 mt-auto inline-flex items-center justify-between gap-3 bg-primary py-2 pl-5 pr-2 text-[14px] font-semibold tracking-[0.08em] text-primary-foreground uppercase"
            >
              Bel 0513 529 899
              <span className="flex size-9 items-center justify-center rounded-full bg-amber">
                <Phone className="size-4" aria-hidden />
              </span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
