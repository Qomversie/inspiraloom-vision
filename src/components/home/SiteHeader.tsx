import { useEffect, useState } from "react";
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

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
 const [open, setOpen] = useState(false);
 const pathname = useRouterState({ select: (st) => st.location.pathname });
 const [scrolled, setScrolled] = useState(false);
 useEffect(() => {
  if (!overlay) return;
  const onScroll = () => setScrolled(window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, [overlay]);
 const clear = overlay && !scrolled && !open;
 const isActive = (m?: string) => !!m && pathname.startsWith(m);

 return (
  <header
   className={cn(
    "top-0 z-40 border-b transition-colors duration-200",
    overlay ? "fixed inset-x-0" : "sticky",
    clear ? "border-transparent bg-transparent" : "border-border/70 bg-background",
   )}
  >
   <div className="mx-auto flex items-center justify-between gap-6 container-site py-4">
    <a href="/" className="flex shrink-0 items-center gap-3">
     <img
      src={logo.url}
      alt="Hoekstra Houtbehoud"
      width={48}
      height={48}
      className="size-11 rounded-full object-cover"
     />
     <span className={cn("leading-tight", clear ? "text-white" : "text-bark")}>
      <span className="block text-[13px] font-bold tracking-[0.1em] uppercase transition-colors duration-200">
       Hoekstra
      </span>
      <span className="block text-[13px] font-medium tracking-[0.1em] uppercase transition-colors duration-200">
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
        "relative whitespace-nowrap text-[13px] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:opacity-0 hover:after:opacity-100",
        clear ? "text-white after:bg-white" : "text-bark after:bg-forest",
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
      className={cn(
       "hidden items-center gap-3 whitespace-nowrap py-2 pl-5 pr-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 sm:inline-flex",
       clear ? "bg-sage text-forest hover:bg-background" : "bg-primary text-primary-foreground hover:bg-forest-deep",
      )}
     >
      Bel 0513 529 899
      <span className={cn("flex size-8 items-center justify-center rounded-full", clear ? "bg-forest/10" : "bg-primary-foreground/15")}>
       <Phone className="size-4" aria-hidden />
      </span>
     </a>
     <a
      href="tel:0513529899"
      aria-label="Bel 0513 529 899"
      className={cn("flex size-11 items-center justify-center rounded-full transition-colors duration-200 sm:hidden", clear ? "bg-sage text-forest" : "bg-primary text-primary-foreground")}
     >
      <Phone className="size-5" aria-hidden />
     </a>
     <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-label={open ? "Menu sluiten" : "Menu openen"}
      aria-expanded={open}
      className={cn("flex size-11 items-center justify-center rounded-full border transition-colors duration-200 min-[1400px]:hidden", clear ? "border-white/40 text-white" : "border-forest/25 text-forest")}
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
        className="border-b border-border/60 py-3 text-[14px] font-semibold tracking-[0.1em] text-bark uppercase last:border-0"
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
