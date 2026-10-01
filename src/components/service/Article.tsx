import { Check, Mail, Phone } from "lucide-react";
import portret from "@/assets/portret.jpg";
import { ArrowButton } from "@/components/home/ArrowButton";
import type { ArticleSection, Block, Photo } from "./types";

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

function ContactCard({ question }: { question: string }) {
  return (
    <div className="bg-sage p-6 lg:p-8">
      <div className="flex items-center gap-4">
        <img src={portret} alt="Jaap en Jurjen Hoekstra" loading="lazy" width={912} height={912} className="size-14 shrink-0 rounded-full object-cover" />
        <p className="text-xl leading-snug text-forest">{question}</p>
      </div>
        <ul className="mt-6 space-y-2 text-[16px]">
          {[
            "Gediplomeerd specialist in het bestrijden van ongedierte en zwammen",
            "Specialist in bestrijding in Monumenten en Monumentale panden",
            "Voor particulieren als voor zakelijke klanten",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3">
              <Check className="mt-1.5 size-4 shrink-0 text-forest" aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      <div className="mt-6 flex flex-col gap-2">
        <ArrowButton href="tel:0513529899" icon={<Phone className="size-4" aria-hidden />}>
          Bel direct voor professioneel advies!
        </ArrowButton>
        <ArrowButton href="mailto:info@hoekstrahoutbehoud.nl" variant="outline" icon={<Mail className="size-4" aria-hidden />}>
          Mail ons
        </ArrowButton>
      </div>
    </div>
  );
}

function PhotoGrid({ photos }: { photos: [Photo, Photo, Photo] }) {
  const [big, a, b] = photos;
  const img = "size-full object-cover";
  return (
    <div className="my-14 grid h-[320px] grid-cols-[2fr_1fr] grid-rows-2 gap-2 sm:h-[460px]">
      <img src={big.src} alt={big.alt} loading="lazy" className={`${img} row-span-2`} />
      <img src={a.src} alt={a.alt} loading="lazy" className={img} />
      <img src={b.src} alt={b.alt} loading="lazy" className={img} />
    </div>
  );
}

function Sections({ sections }: { sections: ArticleSection[] }) {
  return (
    <>
      {sections.map((s) => (
        <div key={s.id} id={s.id} className="scroll-mt-28 mt-14 first:mt-0">
          <h2 className="text-4xl lg:text-[56px]">{s.title}</h2>
          {s.blocks.map((b, i) => renderBlock(b, i))}
        </div>
      ))}
    </>
  );
}

export function Article({
  part1,
  part2 = [],
  photos,
  question,
}: {
  part1: ArticleSection[];
  part2?: ArticleSection[];
  photos?: [Photo, Photo, Photo];
  question: string;
}) {
  const toc = [...part1, ...part2];
  return (
    <section className="line-top">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[minmax(0,720px)_380px] lg:justify-between lg:py-24">
        <div className="min-w-0">
          <Sections sections={part1} />
          {photos && <PhotoGrid photos={photos} />}
          {part2.length > 0 && <div className={photos ? "" : "mt-14"}><Sections sections={part2} /></div>}
        </div>
        <aside className="lg:border-l lg:border-forest/15 lg:pl-10">
          <div className="lg:sticky lg:top-28">
            <ContactCard question={question} />
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
          </div>
        </aside>
      </div>
    </section>
  );
}
