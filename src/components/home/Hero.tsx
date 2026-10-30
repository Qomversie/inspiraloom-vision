import { useEffect, useRef, useState } from "react";
import { Home, Mail, Phone } from "lucide-react";
import hero from "@/assets/hero-kerk.jpg";
import { ArrowButton } from "./ArrowButton";

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Hoekstra+Houtbehoud+Tijnje+reviews";

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`tracking-[0.12em] text-amber ${className}`} aria-label="4 van 5 sterren">
      ★★★★<span className="opacity-40">★</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[80vh] overflow-hidden">
      <img
        src={hero}
        alt="Dronefoto van een monumentale Friese kerk in het open landschap"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-forest-deep/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-deep/50 to-transparent" />
      <div className="relative mx-auto flex min-h-[80vh] flex-col justify-end container-site pb-16 pt-24 lg:pb-24">
        <p className="mb-5 inline-flex w-fit items-center gap-2 border border-white/40 px-4 py-1.5 text-sm font-medium text-white">
          <Home className="size-4 text-amber" aria-hidden />
          Familiebedrijf uit Tijnje, sinds 1984
        </p>
        <h1 className="max-w-3xl text-4xl text-white sm:text-5xl lg:text-[88px]">
          Oud hout verdient vakmanschap
        </h1>
        <p className="mt-6 max-w-[720px] text-lg text-white">
          Eigen gepatenteerde Hoekstra Injectie, standaard in de URL 5001 voor monumenten
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ArrowButton href="tel:0513529899" icon={<Phone className="size-4" aria-hidden />}>
            Bel direct 0513 529 899
          </ArrowButton>
          <ArrowButton
            href="/contact"
            variant="outline"
            className="border-white/70 text-white hover:bg-white/15"
            icon={<Mail className="size-4" aria-hidden />}
          >
            Stuur ons een bericht
          </ArrowButton>
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-fit items-center gap-3 text-[15px] text-white hover:underline"
        >
          <Stars className="text-xl" />
          Beoordeeld op Google
        </a>
        <ul className="mt-10 flex flex-wrap gap-3" aria-label="Keurmerken">
          {[
            { src: "/logos/nvpb.png", alt: "NVPB" },
            { src: "/logos/kpmb.png", alt: "KPMB IPM Houtbescherming" },
            { src: "/logos/vca.png", alt: "VCA" },
            { src: "/logos/kk.png", alt: "K+K" },
          ].map((l) => (
            <LogoTile key={l.src} {...l} />
          ))}
        </ul>
      </div>
    </section>
  );
}

// Wit logovlakje; toont de naam als plaatshouder zolang het logobestand ontbreekt.
function LogoTile({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <li className="flex h-14 w-[90px] items-center justify-center bg-background p-2">
      {failed ? (
        <span className="text-center text-[10px] font-semibold leading-tight text-forest/70">{alt}</span>
      ) : (
        <img ref={ref} src={src} alt={alt} onError={() => setFailed(true)} className="max-h-full max-w-full object-contain" />
      )}
    </li>
  );
}
