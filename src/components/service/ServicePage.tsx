import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { ContactBlock } from "@/components/home/ContactBlock";
import { FloatingCall } from "@/components/home/FloatingCall";
import { ServiceHero } from "./ServiceHero";
import { Article } from "./Article";
import { MobileCallBar, RecentProjects, Related } from "./Blocks";
import type { ServiceContent } from "./types";

/** Sjabloon Dienstpagina: elk blok is optioneel en los weg te laten. */
export function ServicePage({ c }: { c: ServiceContent }) {
  return (
    <div className="bg-background pb-14 lg:pb-0">
      <SiteHeader overlay />
      <main>
        <ServiceHero c={c} />
        <Article part1={c.part1} part2={c.part2} photos={c.photos} question={c.cardQuestion} />
        {c.projects && c.projects.length > 0 && <RecentProjects projects={c.projects} />}
        {c.related && c.related.length > 0 && <Related items={c.related} />}
        <ContactBlock {...c.contact} />
      </main>
      <SiteFooter />
      <div className="hidden lg:block">
        <FloatingCall />
      </div>
      <MobileCallBar />
    </div>
  );
}
