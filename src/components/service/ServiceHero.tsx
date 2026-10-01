import { Mail, Phone } from "lucide-react";
import { ArrowButton } from "@/components/home/ArrowButton";
import type { ServiceContent } from "./types";

export function ServiceHero({ c }: { c: ServiceContent }) {
  return (
    <section id="top" className="relative isolate min-h-[50vh] overflow-hidden">
      <img
        src={c.heroImage}
        alt={c.heroAlt}
        width={1280}
        height={960}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/65" />
      <div className="relative flex min-h-[50vh] flex-col justify-end container-site pb-12 pt-20 lg:pb-16">
        <nav aria-label="Broodkruimel" className="mb-6 text-sm text-sage/75">
          {c.breadcrumb.map((b, i) => (
            <span key={b.label}>
              {i > 0 && <span className="mx-2">/</span>}
              {b.href ? (
                <a href={b.href} className="hover:text-sage">
                  {b.label}
                </a>
              ) : (
                <span className="text-sage">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="mb-4 text-sm font-medium tracking-[0.08em] text-amber uppercase">{c.label}</p>
        <h1 className="max-w-4xl text-4xl text-white sm:text-5xl lg:text-[72px]">{c.title}</h1>
        {c.intro && <p className="mt-5 max-w-[720px] text-lg text-sage">{c.intro}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <ArrowButton href="tel:0513529899" variant="sage" icon={<Phone className="size-4" aria-hidden />}>
            Bel direct
          </ArrowButton>
          <ArrowButton
            href="#contact"
            variant="outline"
            className="border-sage/40 text-sage hover:bg-sage/15"
            icon={<Mail className="size-4" aria-hidden />}
          >
            Stuur ons een bericht
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
