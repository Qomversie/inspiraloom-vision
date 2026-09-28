import { Reveal } from "./Reveal";

const stats = [
  { value: "42", label: "jaar ervaring" },
  { value: "100+", label: "monumenten behandeld" },
  { value: "8,3", label: "op Trustoo" },
  { value: "Eigen", label: "gepatenteerde methode" },
];

export function Stats() {
  return (
    <section className="rings-pattern-light bg-forest-deep">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <p className="text-4xl font-medium text-sage lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-sage/75">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
