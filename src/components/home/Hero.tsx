import { Mail, Phone } from "lucide-react";
import hero from "@/assets/hero-kerk.jpg";
import { ArrowButton } from "./ArrowButton";

export function Hero() {
 return (
  <section id="top" className="relative isolate min-h-[88vh] overflow-hidden">
   <img
    src={hero}
    alt="Dronefoto van een monumentale Friese kerk in het open landschap"
    width={1920}
    height={1280}
    className="absolute inset-0 size-full object-cover"
   />
   <div className="absolute inset-0 bg-forest-deep/55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-forest-deep/50 to-transparent" />
   <div className="relative mx-auto flex min-h-[88vh] flex-col justify-end container-site pb-16 pt-36 lg:pb-24">
    <p className="mb-5 inline-flex w-fit items-center gap-2 bg-background/15 px-4 py-1.5 text-sm text-sage backdrop-blur">
     <span className="size-2 rounded-full bg-amber" aria-hidden />
     Familiebedrijf uit Tijnje, sinds 1984
    </p>
    <h1 className="max-w-3xl text-4xl text-white sm:text-5xl lg:text-[88px]">
     Oud hout verdient vakmanschap
    </h1>
    <p className="mt-6 max-w-[720px] text-lg text-sage">
     Specialist in houtworm- en zwambestrijding, van woonhuis tot rijksmonument. Al sinds 1984.
    </p>
    <div className="mt-9 flex flex-wrap gap-3">
     <ArrowButton
      href="tel:0513529899"
      variant="sage"
      icon={<Phone className="size-4" aria-hidden />}
     >
      Bel direct
     </ArrowButton>
     <ArrowButton
      href="#contact"
      className="border border-sage/40 bg-transparent text-sage hover:bg-sage/15"
      variant="outline"
      icon={<Mail className="size-4" aria-hidden />}
     >
      Stuur ons een bericht
     </ArrowButton>
    </div>
   </div>
  </section>
 );
}
