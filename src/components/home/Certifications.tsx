import { Reveal } from "./Reveal";

const items = ["NVPB", "KPMB IPM Houtbescherming", "VCA", "K+K"];

// Compacte keurmerkenstrook direct onder de cijferbalk. Logo's volgen; nu tekstvlakken als plaatshouder.
export function Certifications() {
  return (
    <section className="line-top bg-background">
      <div className="container-site py-12 lg:py-14">
        <Reveal className="grid items-center gap-8 lg:grid-cols-[260px_1fr]">
          <h2 className="text-2xl lg:text-3xl">Aangesloten en gecertificeerd</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {items.map((name) => (
              <div
                key={name}
                className="flex h-24 items-center justify-center border border-forest/15 px-4 text-center text-sm font-semibold tracking-wide text-forest/70 grayscale"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
