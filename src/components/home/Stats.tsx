import { GOOGLE_REVIEWS_URL, Stars } from "./Hero";
import { Reveal } from "./Reveal";

const stats = [
  { value: "42", label: "jaar ervaring" },
  { value: "100+", label: "monumenten behandeld" },
  { value: "stars", label: "op Google" },
  { value: "4", label: "keurmerken" },
];

export function Stats() {
  return (
    <section className="rings-pattern-light bg-forest-deep">
      <div className="container-site py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              {stat.value === "stars" ? (
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80">
                  <Stars className="text-4xl leading-[1.1] lg:text-5xl" />
                  <p className="mt-2 text-sm text-white/75">{stat.label}</p>
                </a>
              ) : (
                <>
                  <p className="text-4xl font-medium text-white lg:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/75">{stat.label}</p>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
