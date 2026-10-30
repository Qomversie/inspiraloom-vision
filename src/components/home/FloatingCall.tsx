import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:0513529899"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3 bg-primary py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-forest-deep/25 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:py-3 sm:pl-5 sm:pr-3 sm:text-sm sm:transition-transform sm:hover:scale-105"
    >
      <span>
        Bel direct<span className="sm:hidden"> 0513 529 899</span>
      </span>
      <span className="flex size-9 items-center justify-center rounded-full bg-amber">
        <Phone className="size-4" aria-hidden />
      </span>
    </a>
  );
}
