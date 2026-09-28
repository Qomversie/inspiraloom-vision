import { ArrowButton } from "./ArrowButton";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="bg-sage">
      <div className="container-site py-20 lg:py-28">
        <Reveal className="max-w-[1100px]">
          <p className="text-3xl leading-[1.15] tracking-[-0.02em] text-forest sm:text-4xl lg:text-5xl">
            Wij behandelen hout zo dat het nog generaties meegaat.
            <br className="hidden sm:block" /> Van een balk in uw schuur tot de kap van een
            rijksmonument.
          </p>
          <div className="mt-10">
            <ArrowButton href="#werkwijze">Over Hoekstra</ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
