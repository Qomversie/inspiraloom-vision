import { Reveal } from "./Reveal";

const reviews = [
  { name: "[Naam klant 1]", place: "[Plaats]", type: "Woonhuis" },
  { name: "[Naam klant 2]", place: "[Plaats]", type: "Kerk" },
  { name: "[Naam klant 3]", place: "[Plaats]", type: "Boerderij" },
];

export function Reviews() {
  return (
    <section className="bg-sage">
      <div className="container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr] lg:gap-10">
          <Reveal className="lg:border-r lg:border-forest/15 lg:pr-10">
            <h2 className="text-4xl lg:text-[60px]">Wat opdrachtgevers zeggen</h2>
            <p className="mt-10 text-[96px] leading-none text-forest lg:text-[140px]">8,3</p>
            <p className="mt-3 text-bark/75">gemiddeld op Trustoo</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 90}>
                <article className="flex h-full flex-col border border-forest/20 bg-background p-7">
                  <p className="flex-1 text-bark/80">[Review klant {i + 1}]</p>
                  <div className="mt-6 border-t border-forest/20 pt-4">
                    <p className="font-medium text-forest">{review.name}</p>
                    <p className="text-sm text-bark/60">
                      {review.place} — {review.type}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
