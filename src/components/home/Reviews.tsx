import { GOOGLE_REVIEWS_URL, Stars } from "./Hero";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Anne Leeuwen",
    text: "Prima werk geleverd bij onze oude boerderij. Ook nadien bij vragen vakkundig en laagdrempelig advies. Aanrader.",
  },
  {
    name: "Marian Witvoet",
    text: "Fijn bedrijf, leveren al 35 jaar werk naar volle tevredenheid!",
  },
];

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-sage">
      <div className="rings-watermark pointer-events-none absolute -right-[320px] -top-[420px] hidden size-[820px] rounded-full lg:block" aria-hidden />
      <div className="relative container-site py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr] lg:gap-10">
          <Reveal className="lg:border-r lg:border-forest/15 lg:pr-10">
            <h2 className="text-4xl lg:text-[60px]">Wat opdrachtgevers zeggen</h2>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 block hover:opacity-80"
            >
              <Stars className="text-5xl leading-none lg:text-6xl" />
              <p className="mt-4 text-bark/75">Beoordeeld op Google</p>
            </a>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 90}>
                <article className="flex h-full flex-col border border-forest/20 bg-background p-7">
                  <p className="flex-1 text-bark/80">"{review.text}"</p>
                  <div className="mt-6 border-t border-forest/20 pt-4">
                    <p className="font-medium text-forest">{review.name}</p>
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
