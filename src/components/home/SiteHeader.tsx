import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-mark.png.asset.json";

type SubLink = { label: string; href: string; children?: { label: string; href: string }[] };
type Item = {
  label: string;
  href: string;
  match?: string;
  mega?: { links: SubLink[] };
};

// Pagina's die nog niet bestaan wijzen voorlopig naar de passende sectie op de homepage.
const menu: Item[] = [
  {
    label: "Houtaantasters",
    href: "/#diensten",
    mega: {
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

function MegaLink({ label, href, children }: { label: string; href: string; children?: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const current = !href.includes("#") && pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
  return (
    <a
      href={href}
      aria-current={current ? "page" : undefined}
      className={cn(
        "flex min-h-11 items-center justify-between gap-3 border-b border-forest/15 text-[16px] font-normal leading-6 text-bark transition-colors hover:text-amber focus-visible:text-amber",
        current && "text-amber",
      )}
    >
      {label}
      {children}
    </a>
  );
}

// `overlay` is accepted for backwards compatibility; the header is always sand and sticky.
export function SiteHeader(_props: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [subMenu, setSubMenu] = useState<string | null>(null);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const categoryLinks = useRef(new Map<string, HTMLAnchorElement>());
  const [panelLeft, setPanelLeft] = useState(0);
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const isActive = (m?: string) => !!m && pathname.startsWith(m);
  const activeItem = menu.find((m) => m.label === mega);
  const activeMega = activeItem?.mega;
  const activeChildren = activeMega?.links.find((link) => link.label === subMenu)?.children;
  const showCategory = (label: string | null) => {
    if (mega !== label) setSubMenu(null);
    if (label) setPanelLeft(categoryLinks.current.get(label)?.getBoundingClientRect().left ?? 0);
    setMega(label);
  };
  useEffect(() => {
    const alignPanel = () => {
      if (mega) setPanelLeft(categoryLinks.current.get(mega)?.getBoundingClientRect().left ?? 0);
    };
    window.addEventListener("resize", alignPanel);
    return () => window.removeEventListener("resize", alignPanel);
  }, [mega]);

  return (
    <header
      className="sticky top-0 z-40 border-b border-forest/15 bg-cream"
      onMouseLeave={() => showCategory(null)}
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
              ref={(element) => { if (element) categoryLinks.current.set(item.label, element); else categoryLinks.current.delete(item.label); }}
              href={item.href}
              onMouseEnter={() => showCategory(item.mega ? item.label : null)}
              onPointerMove={() => { if (mega !== (item.mega ? item.label : null)) showCategory(item.mega ? item.label : null); }}
              onFocus={() => showCategory(item.mega ? item.label : null)}
              onClick={(event) => {
                if (!item.mega) return;
                event.preventDefault();
                showCategory(item.label);
              }}
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
        <div key={activeItem?.label} className="absolute inset-x-0 top-full hidden border-t border-b border-forest/15 bg-cream shadow-lg shadow-bark/5 animate-in fade-in slide-in-from-top-2 duration-200 min-[1400px]:block">
          <div className="py-6 pr-10" style={{ paddingLeft: panelLeft }}>
            <h2 className="mb-3 text-[18px] font-bold leading-7 text-forest">
              <a href={activeItem?.href} className="transition-colors hover:text-amber">{activeItem?.label}</a>
            </h2>
            <div className="flex max-w-[584px] items-start gap-6">
              <ul className="w-[280px] shrink-0">
                {activeMega.links.map((link) => (
                  <li key={link.label} onMouseEnter={() => setSubMenu(link.children ? link.label : null)} onFocus={() => setSubMenu(link.children ? link.label : null)}>
                    <MegaLink label={link.label} href={link.href}>
                      {link.children && <ChevronRight className="size-4" aria-hidden />}
                    </MegaLink>
                  </li>
                ))}
              </ul>
              {activeChildren && (
                <ul className="min-w-0 max-w-[280px] flex-1">
                  {activeChildren.map((child) => (
                    <li key={child.label}><MegaLink label={child.label} href={child.href} /></li>
                  ))}
                </ul>
              )}
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
                    <Button variant="ghost"
                      type="button"
                      onClick={() => { setExpanded((v) => (v === item.label ? null : item.label)); setMobileSubMenu(null); }}
                      aria-expanded={expanded === item.label}
                      className={cn(
                        "flex h-11 w-full items-center justify-between rounded-none px-0 text-left text-[16px] font-semibold text-bark hover:bg-transparent hover:text-amber",
                        isActive(item.match) && "text-amber",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("size-4 transition-transform duration-200", expanded === item.label && "rotate-180")}
                        aria-hidden
                      />
                    </Button>
                    {expanded === item.label && (
                      <ul className="pb-4">
                        {item.mega.links.map((l) => (
                          <li key={l.label}>
                            {l.children ? (
                              <Button variant="ghost" onClick={() => setMobileSubMenu((v) => v === l.label ? null : l.label)} aria-expanded={mobileSubMenu === l.label} className="h-11 w-full justify-between rounded-none border-b border-forest/15 px-0 text-[16px] font-normal text-bark hover:bg-transparent hover:text-amber">
                                {l.label}<ChevronRight className={cn(mobileSubMenu === l.label && "rotate-90")} aria-hidden />
                              </Button>
                            ) : <div onClick={() => setOpen(false)}><MegaLink label={l.label} href={l.href} /></div>}
                            {l.children && mobileSubMenu === l.label && (
                              <ul className="pl-4">
                                {l.children.map((child) => (
                                  <li key={child.label} onClick={() => setOpen(false)}><MegaLink label={child.label} href={child.href} /></li>
                                ))}
                              </ul>
                            )}
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
                      "flex min-h-11 items-center text-[16px] font-semibold text-bark hover:text-amber",
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
