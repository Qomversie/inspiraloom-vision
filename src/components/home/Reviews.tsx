import { Reveal } from "./Reveal";

const reviews = [
  { name: "[Naam klant 1]", place: "[Plaats]", type: "Woonhuis" },
  { name: "[Naam klant 2]", place: "[Plaats]", type: "Kerk" },
  { name: "[Naam klant 3]", place: "[Plaats]", type: "Boerderij" },
];

export function Reviews() {
  return (
    <section className="bg-cream">
      <div className="mx-auto  wrap py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl lg:text-[60px]">Wat opdrachtgevers zeggen</h2>
          <p className="mt-4 text-bark/75">Een 8,3 op Trustoo, opgebouwd sinds 1984.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 90}>
              <article className="flex h-full flex-col rounded-none border border-border bg-background p-7">
                <p className="flex-1 text-bark/80">[Review klant {i + 1}]</p>
                <div className="mt-6 border-t border-border pt-4">
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
    </section>
  );
}
