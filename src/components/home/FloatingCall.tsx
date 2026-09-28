import { Phone } from "lucide-react";

export function FloatingCall() {
  return (
    <a
      href="tel:0513529899"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-forest-deep py-3 pl-5 pr-3 text-sm font-medium text-sage shadow-lg shadow-forest-deep/25 transition-transform hover:scale-105"
    >
      <span className="hidden sm:inline">Bel direct</span>
      <span className="flex size-9 items-center justify-center rounded-full bg-sage text-forest">
        <Phone className="size-4" aria-hidden />
      </span>
    </a>
  );
}
