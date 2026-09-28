import { Mail, Phone } from "lucide-react";
import balken from "@/assets/balken.jpg";
import portret from "@/assets/portret.jpg";
import { ArrowButton } from "./ArrowButton";
import { Reveal } from "./Reveal";

export function ContactBlock() {
 return (
  <section id="contact" className="relative isolate overflow-hidden">
   <img
    src={balken}
    alt="Oude eiken balkconstructie op een monumentale zolder"
    loading="lazy"
    width={1280}
    height={960}
    className="absolute inset-0 size-full object-cover"
   />
   <div className="absolute inset-0 bg-forest-deep/70" />
   <div className="relative container-site py-20 lg:py-28">
    <Reveal className="max-w-[720px]">
     <div className="rounded-none bg-background p-8 lg:p-10">
      <img
       src={portret}
       alt="Jaap en Jurjen Hoekstra"
       loading="lazy"
       width={912}
       height={912}
       className="size-20 rounded-full object-cover"
      />
      <h2 className="mt-6 text-4xl lg:text-[60px]">Wij denken graag met u mee</h2>
      <p className="mt-4 text-bark/75">
       Twijfelt u of het hout nog wordt aangetast? Bel ons of stuur een bericht. Jaap of
       Jurjen kijkt met u mee en vertelt u eerlijk wat er nodig is.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
       <ArrowButton
        href="tel:0513529899"
        icon={<Phone className="size-4" aria-hidden />}
       >
        0513 529 899
       </ArrowButton>
       <ArrowButton
        href="mailto:info@hoekstrahoutbehoud.nl"
        variant="outline"
        icon={<Mail className="size-4" aria-hidden />}
       >
        Mail ons
       </ArrowButton>
       <ArrowButton href="#top" variant="outline">
        Naar contact
       </ArrowButton>
      </div>
     </div>
    </Reveal>
   </div>
  </section>
 );
}
