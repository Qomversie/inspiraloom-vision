import { ArrowRight } from "lucide-react";
import woning from "@/assets/woning.jpg";
import kerk from "@/assets/hero-kerk.jpg";
import { Reveal } from "./Reveal";

const routes = [
 {
  title: "Voor uw woning",
  text: "Houtworm of zwam in huis, schuur of kruipruimte? Wij zoeken de oorzaak en behandelen alleen wat nodig is.",
  image: woning,
  alt: "Woonhuis met schuur in de tuin",
 },
 {
  title: "Voor monumenten, kerken en molens",
  text: "Erfgoed behandelen volgens URL 5001. Met respect voor het originele hout en de constructie.",
  image: kerk,
  alt: "Monumentale kerk van bovenaf gezien",
 },
];

export function TwoRoutes() {
 return (
  <section className="line-top">
<div className="container-site py-20 lg:py-28">
   <Reveal className="max-w-[720px]">
    <h2 className="text-4xl lg:text-[60px]">Waar kunnen wij u mee helpen?</h2>
    <p className="mt-4 text-bark/75">
     Twee routes, dezelfde aanpak: eerst kijken, dan adviseren, dan behandelen.
    </p>
   </Reveal>
   <div className="mt-12 grid gap-6 lg:grid-cols-2">
    {routes.map((route, i) => (
     <Reveal key={route.title} delay={i * 120}>
      <a
       href="#diensten"
       className="group relative block h-[420px] overflow-hidden rounded-none lg:h-[520px]"
      >
       <img
        src={route.image}
        alt={route.alt}
        loading="lazy"
        width={1280}
        height={960}
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/25 to-transparent" />
       <div className="relative flex h-full flex-col justify-end p-7 lg:p-9">
        <h3 className="text-2xl text-white lg:text-3xl">{route.title}</h3>
        <p className="mt-3 max-w-md text-sage/90">{route.text}</p>
        <span className="mt-6 flex size-11 items-center justify-center rounded-full bg-sage text-forest transition-transform group-hover:translate-x-1">
         <ArrowRight className="size-5" aria-hidden />
        </span>
       </div>
      </a>
     </Reveal>
    ))}
   </div>
  </div>
</section>
 );
}
