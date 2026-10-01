import { Phone } from "lucide-react";
import { ArrowButton } from "@/components/home/ArrowButton";
import { Reveal } from "@/components/home/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { ServiceContent } from "./types";

export function PhotoStrip({ photos }: { photos: NonNullable<ServiceContent["photos"]> }) {
  const [big, ...small] = photos;
  return (
    <section className="line-top">
      <div className="grid gap-px bg-forest/20 lg:grid-cols-3">
        <figure className="bg-background lg:col-span-2">
          <img src={big.src} alt={big.alt} loading="lazy" width={1280} height={960} className="h-80 w-full object-cover lg:h-[620px]" />
          <figcaption className="px-4 py-4 text-[15px] text-bark/70 sm:px-6 lg:px-10">{big.caption}</figcaption>
        </figure>
        <div className="grid gap-px bg-forest/20">
          {small.map((p) => (
            <figure key={p.caption} className="bg-background">
              <img src={p.src} alt={p.alt} loading="lazy" width={1280} height={960} className="h-64 w-full object-cover lg:h-[255px]" />
              <figcaption className="px-4 py-4 text-[15px] text-bark/70 sm:px-6">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { t: "Inspectie", d: "Wij bekijken het hout, meten het vocht en bepalen hoe ver de aantasting gaat." },
  { t: "Advies", d: "U krijgt een helder rapport met oorzaak, behandeling en een duidelijke prijs." },
  { t: "Behandeling", d: "Wij werken zorgvuldig, met de methode die bij uw pand past." },
  { t: "Nazorg", d: "Wij komen terug om te controleren en geven garantie op het werk." },
];

export function Approach({ methods }: { methods?: ServiceContent["methods"] }) {
  return (
    <section className="rings-pattern-light bg-forest-deep">
      <div className="container-site py-20 lg:py-28">
        <h2 className="max-w-[720px] text-4xl text-white lg:text-[60px]">Onze aanpak</h2>
        <ol className="mt-12 grid border-t border-sage/20 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="border-b border-sage/20 bg-forest-deep py-8 sm:px-6 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0">
              <span className="text-5xl text-amber">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-2xl text-white">{s.t}</h3>
              <p className="mt-2 text-sage/85">{s.d}</p>
            </li>
          ))}
        </ol>
        {methods && methods.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-3">
            {methods.map((m) => (
              <ArrowButton key={m.label} href={m.href} variant="sage">
                {m.label}
              </ArrowButton>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function RecentProjects({ projects }: { projects: NonNullable<ServiceContent["projects"]> }) {
  return (
    <section className="line-top">
      <div className="container-site py-16 lg:py-24">
        <h2 className="text-4xl lg:text-[60px]">Recente projecten</h2>
      </div>
      <div className="grid gap-px border-y border-forest/20 bg-forest/20 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="bg-background">
            <a href="/#referenties" className="group block">
              <div className="overflow-hidden">
                <img src={p.image} alt={p.alt} loading="lazy" width={1280} height={960} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[420px]" />
              </div>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="text-[15px] text-bark/70">{p.place}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <div className="container-site py-10">
        <ArrowButton href="/#referenties">Alle referenties</ArrowButton>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: NonNullable<ServiceContent["faq"]> }) {
  return (
    <section className="line-top">
      <div className="container-site grid items-start gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <div className="rings-pattern-light flex min-h-72 flex-col justify-end bg-forest-deep p-8">
          <h2 className="text-4xl text-white lg:text-[60px]">Veelgestelde vragen</h2>
        </div>
        <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
          {items.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-lg text-forest hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[16px] text-bark/75">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function Related({ items }: { items: NonNullable<ServiceContent["related"]> }) {
  return (
    <section className="line-top bg-cream">
      <div className="container-site py-16 lg:py-20">
        <h2 className="text-3xl lg:text-[44px]">Verwante onderwerpen</h2>
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
