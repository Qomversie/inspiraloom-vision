import { Phone } from "lucide-react";
import { ArrowButton } from "@/components/home/ArrowButton";
import { Reveal } from "@/components/home/Reveal";
import type { ServiceContent } from "./types";

export function PhotoStrip({ photos }: { photos: NonNullable<ServiceContent["photos"]> }) {
  const [big, ...small] = photos;
  return (
    <section className="line-top">
      <div className="grid gap-px bg-forest/20 lg:grid-cols-3">
        <figure className="bg-background lg:col-span-2">
          <img src={big.src} alt={big.alt} loading="lazy" width={1280} height={960} className="h-80 w-full object-cover lg:h-[620px]" />
        </figure>
        <div className="grid gap-px bg-forest/20">
          {small.map((p) => (
            <figure key={p.caption} className="bg-background">
              <img src={p.src} alt={p.alt} loading="lazy" width={1280} height={960} className="h-64 w-full object-cover lg:h-[255px]" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RecentProjects({ projects }: { projects: NonNullable<ServiceContent["projects"]> }) {
  return (
    <section className="rings-pattern-light bg-forest-deep">
      <div className="container-site py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl text-white lg:text-[60px]">Recente projecten</h2>
          <ArrowButton href="/#referenties" variant="sage">Alle referenties</ArrowButton>
        </div>
        <div className={`mt-10 grid gap-6 sm:grid-cols-2 ${projects.length >= 3 ? "lg:grid-cols-3" : ""}`}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <a href="/#referenties" className="group block">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.alt} loading="lazy" width={1280} height={960} className="h-[200px] w-full md:h-[250px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-2xl text-white">{p.title}</h3>
                <p className="text-[15px] text-white/70">{p.place}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Related({ items }: { items: NonNullable<ServiceContent["related"]> }) {
  return (
    <section className="line-top bg-cream">
      <div className="container-site py-16 lg:py-20">
        <h2 className="text-3xl lg:text-[44px]">Andere zwammen en schimmels</h2>
        <div className="mt-8 grid gap-px border border-forest/20 bg-forest/20 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((r) => (
            <a key={r.label} href={r.href} className="group flex items-center justify-between bg-cream p-6 text-lg text-forest transition-colors hover:bg-sage">
              {r.label}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileCallBar() {
  return (
    <a
      href="tel:0513529899"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3 bg-forest-deep py-4 text-base font-medium text-sage lg:hidden"
    >
      <Phone className="size-4" aria-hidden />
      Bel direct: 0513 529 899
    </a>
  );
}
