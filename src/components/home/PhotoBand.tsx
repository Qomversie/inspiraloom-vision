import kap from "@/assets/kapconstructie.jpg";

export function PhotoBand() {
  return (
    <section className="relative isolate h-[70vh] overflow-hidden">
      <img
        src={kap}
        alt="Close-up van oude eikenhouten balken in een kapconstructie met zijlicht"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-forest-deep/0" />
      <div className="relative flex h-full items-end container-site pb-12 lg:pb-16">
        <p className="max-w-[720px] text-3xl leading-tight font-normal text-white lg:text-[48px]">
          Wat eeuwen staat, verdient het om te blijven staan.
        </p>
      </div>
    </section>
  );
}
