import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { ContactBlock } from "@/components/home/ContactBlock";
import { FloatingCall } from "@/components/home/FloatingCall";
import { ServiceHero } from "./ServiceHero";
import { Article } from "./Article";
import { MobileCallBar, PhotoStrip, RecentProjects, Related } from "./Blocks";
import type { ServiceContent } from "./types";

/** Sjabloon Dienstpagina: elk blok is optioneel en los weg te laten. */
export function ServicePage({ c }: { c: ServiceContent }) {
  const toc = [...c.part1, ...(c.part2 ?? [])];
  return (
    <div className="bg-background pb-14 lg:pb-0">
      <SiteHeader />
      <main>
        <ServiceHero c={c} />
        <Article sections={c.part1} question={c.cardQuestion} toc={toc} />
        {c.photos && <PhotoStrip photos={c.photos} />}
        {c.part2 && c.part2.length > 0 && <Article sections={c.part2} question={c.cardQuestion} toc={toc} />}
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
