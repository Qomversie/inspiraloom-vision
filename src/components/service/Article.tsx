import { Check, Mail, Phone } from "lucide-react";
import portret from "@/assets/portret.jpg";
import { ArrowButton } from "@/components/home/ArrowButton";
import type { ArticleSection, Block } from "./types";

function renderBlock(b: Block, i: number) {
  if (b.type === "h3") return <h3 key={i} className="mt-8 text-2xl">{b.text}</h3>;
  if (b.type === "list")
    return (
      <ul key={i} className="my-6 border-t border-forest/20">
        {b.items.map((item) => (
          <li key={item} className="border-b border-forest/20 py-3">
            {item}
          </li>
        ))}
      </ul>
    );
  return <p key={i} className="mt-5 text-bark/85">{b.text}</p>;
}

function ContactCard({ question, compact }: { question: string; compact?: boolean }) {
  return (
    <div className="bg-sage p-6 lg:p-8">
      <div className="flex items-center gap-4">
        <img src={portret} alt="Jaap en Jurjen Hoekstra" loading="lazy" width={912} height={912} className="size-14 shrink-0 rounded-full object-cover" />
        <p className="text-xl leading-snug text-forest">{question}</p>
      </div>
      {!compact && (
        <ul className="mt-6 space-y-2 text-[16px]">
          {["Gediplomeerd en gecertificeerd", "Specialist in monumenten", "Particulier en zakelijk"].map((t) => (
            <li key={t} className="flex items-center gap-3">
              <Check className="size-4 shrink-0 text-forest" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-col gap-2">
        <ArrowButton href="tel:0513529899" icon={<Phone className="size-4" aria-hidden />}>
          0513 529 899
        </ArrowButton>
        <ArrowButton href="mailto:info@hoekstrahoutbehoud.nl" variant="outline" icon={<Mail className="size-4" aria-hidden />}>
          Mail ons
        </ArrowButton>
      </div>
    </div>
  );
}

export function Article({
  sections,
  question,
  toc,
}: {
  sections: ArticleSection[];
  question: string;
  toc?: ArticleSection[];
}) {
  return (
    <section className="line-top">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[minmax(0,720px)_360px] lg:justify-between lg:py-24">
        <div className="min-w-0">
          {sections.map((s, si) => (
            <div key={s.id} id={s.id} className="scroll-mt-28 [&:not(:first-child)]:mt-14">
              <h2 className="text-4xl lg:text-[56px]">{s.title}</h2>
              {s.blocks.map((b, i) => (
                <div key={i}>
                  {renderBlock(b, i)}
                  {si === 0 && i === 0 && (
                    <div className="mt-8 lg:hidden">
                      <ContactCard question={question} compact />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <aside className="hidden lg:block lg:border-l lg:border-forest/15 lg:pl-10">
          <div className="sticky top-28">
            <ContactCard question={question} />
            {toc && toc.length > 0 && (
              <nav aria-label="Inhoud" className="mt-8">
                <p className="mb-3 text-sm font-medium tracking-[0.08em] text-forest uppercase">Op deze pagina</p>
                <ul className="border-t border-forest/20 text-[16px]">
                  {toc.map((t) => (
                    <li key={t.id} className="border-b border-forest/20">
                      <a href={`#${t.id}`} className="block py-2.5 text-bark/80 hover:text-forest">
                        {t.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
