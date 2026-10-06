import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-mark.png.asset.json";

const menu: { label: string; href: string; match?: string }[] = [
 { label: "Houtaantasters", href: "/#diensten" },
 { label: "Schimmels & zwammen", href: "/#diensten", match: "/schimmels-zwammen" },
 { label: "Bestrijdingsmethoden", href: "/#methode" },
 { label: "Referenties", href: "/#referenties" },
 { label: "Over ons", href: "/#werkwijze" },
 { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
 const [open, setOpen] = useState(false);
 const pathname = useRouterState({ select: (st) => st.location.pathname });
 const isActive = (m?: string) => !!m && pathname.startsWith(m);

 return (
  <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
   <div className="mx-auto flex items-center justify-between gap-6 container-site py-4">
    <a href="/" className="flex shrink-0 items-center gap-3">
     <img
      src={logo.url}
      alt="Hoekstra Houtbehoud"
      width={48}
      height={48}
      className="size-11 rounded-full object-cover"
     />
     <span className="leading-tight">
      <span className="block text-[13px] font-semibold tracking-[0.1em] text-forest uppercase">
       Hoekstra
      </span>
      <span className="block text-[13px] font-normal tracking-[0.1em] text-forest uppercase">
       Houtbehoud
      </span>
     </span>
    </a>

    <nav className="hidden min-w-0 items-center gap-8 min-[1400px]:flex">
     {menu.map((item) => (
      <a
       key={item.label}
       href={item.href}
       className={cn(
        "relative whitespace-nowrap text-[13px] font-medium tracking-[0.1em] text-forest uppercase transition-colors after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:bg-current after:opacity-0 after:transition-opacity hover:text-forest-deep hover:after:opacity-100",
        isActive(item.match) && "after:opacity-100",
       )}
      >
       {item.label}
      </a>
     ))}
    </nav>

    <div className="flex shrink-0 items-center gap-2">
     <a
      href="tel:0513529899"
      className="hidden items-center gap-3 whitespace-nowrap bg-primary py-2 pl-5 pr-2 text-[13px] font-medium tracking-[0.08em] uppercase text-primary-foreground transition-colors hover:bg-forest-deep sm:inline-flex"
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
      className="flex size-11 items-center justify-center rounded-full border border-forest/25 text-forest min-[1400px]:hidden"
     >
      {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
     </button>
    </div>
   </div>

   {open && (
    <nav className="border-t border-border bg-background min-[1400px]:hidden">
     <div className="mx-auto flex flex-col container-site py-2">
      {menu.map((item) => (
       <a
        key={item.label}
        href={item.href}
        onClick={() => setOpen(false)}
        className="border-b border-border/60 py-3 text-[14px] font-medium tracking-[0.1em] text-forest uppercase last:border-0"
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
