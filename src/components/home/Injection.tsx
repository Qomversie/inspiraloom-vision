import injectie from "@/assets/injectie.jpg";
import { ArrowButton } from "./ArrowButton";
import { Reveal } from "./Reveal";

export function Injection() {
 return (
  <section id="methode" className="relative overflow-hidden bg-forest-deep">
   <div className="relative mx-auto grid items-center gap-12 container-site py-20 lg:grid-cols-2 lg:py-28">
    <Reveal>
     <p className="text-sm tracking-wide text-amber uppercase">Uitgelicht</p>
     <h2 className="mt-4 text-3xl text-white sm:text-4xl lg:text-[60px]">De Hoekstra Injectie</h2>
     <p className="mt-6 text-sage/85">
      Onze eigen gepatenteerde methode. Het middel wordt onder druk in het hout gebracht en
      doet zijn werk van binnenuit. Zo blijft het originele hout behouden en hoeft er niets te
      worden vervangen.
     </p>
     <p className="mt-4 text-sage/85">
      De methode is inmiddels de standaard in URL 5001 voor de behandeling van monumentaal
      hout.
     </p>
     <div className="mt-9">
      <ArrowButton href="#contact" variant="sage">
       Meer over de methode
      </ArrowButton>
     </div>
    </Reveal>
    <Reveal delay={120} className="relative">
     <div className="rings-pattern-light pointer-events-none absolute -right-24 -top-24 size-[360px] rounded-full opacity-70" />
     <img
      src={injectie}
      alt="Vakman brengt met een injectienaald middel in een oude eiken balk"
      loading="lazy"
      width={1280}
      height={1280}
      className="aspect-square w-full relative rounded-none object-cover"
     />
    </Reveal>
   </div>
  </section>
 );
}
