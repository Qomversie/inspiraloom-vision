import houtworm from "@/assets/houtworm.jpg";
import balken from "@/assets/balken.jpg";
import huiszwam from "@/assets/huiszwam.jpg";
import hetelucht from "@/assets/hetelucht.jpg";
import injectie from "@/assets/injectie.jpg";
import boerderij from "@/assets/boerderij.jpg";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Houtworm",
    text: "Kleine ronde gaatjes en fijn boormeel. Wij bepalen of de aantasting nog actief is.",
    image: houtworm,
    alt: "Close-up van houtwormgaatjes in een oude balk",
    span: "lg:col-span-2",
  },
  {
    title: "Boktor",
    text: "De huisboktor tast naaldhout in kappen en vloeren aan en kan constructief schade geven.",
    image: balken,
    alt: "Oude eiken balkconstructie op een zolder",
    span: "lg:col-span-1",
  },
  {
    title: "Bonte knaagkever",
    text: "Vooral in oud eikenhout van kerken, molens en boerderijen. Vraagt een gerichte aanpak.",
    image: boerderij,
    alt: "Monumentale Friese boerderij van bovenaf",
    span: "lg:col-span-1",
  },
  {
    title: "Huiszwam",
    text: "Een schimmel die droog hout aantast en zich door muurwerk verplaatst. Snel handelen helpt.",
    image: huiszwam,
    alt: "Zwamgroei op een vochtige vloerbalk in een kruipruimte",
    span: "lg:col-span-2",
  },
  {
    title: "Heteluchtbehandeling",
    text: "Het hout wordt in zijn geheel opgewarmd. Zonder bestrijdingsmiddelen, geschikt voor erfgoed.",
    image: hetelucht,
    alt: "Heteluchtbehandeling op een kerkzolder met slangen en apparatuur",
    span: "lg:col-span-2",
  },
  {
    title: "Hoekstra Injectie",
    text: "Onze eigen gepatenteerde methode. Het middel komt van binnenuit in het hout terecht.",
    image: injectie,
    alt: "Vakman injecteert een oude eiken balk",
    span: "lg:col-span-1",
  },
];

export function Services() {
  return (
    <section id="diensten" className="bg-cream">
      <div className="mx-auto  wrap py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl lg:text-[60px]">Houtaantasters en schimmels</h2>
          <p className="mt-4 text-bark/75">
            Wij herkennen de aantaster aan het beeld in het hout en kiezen daarna de methode die bij
            uw pand past.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 90} className={service.span}>
              <article className="group h-full overflow-hidden rounded-none bg-background">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{service.title}</h3>
                  <p className="mt-2 text-[15px] text-bark/75">{service.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
