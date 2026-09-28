import kerk from "@/assets/hero-kerk.jpg";
import molen from "@/assets/molen.jpg";
import stadspoort from "@/assets/stadspoort.jpg";
import kerkAkkrum from "@/assets/kerk-akkrum.jpg";
import { ArrowButton } from "./ArrowButton";
import { Reveal } from "./Reveal";

const projects = [
 {
  category: "Kerk",
  place: "Sneek",
  title: "Martinikerk Sneek",
  work: "bonte knaagkever",
  image: kerk,
  alt: "Monumentale kerk in het Friese landschap",
 },
 {
  category: "Molen",
  place: "Langerak",
  title: "Westermolen Langerak",
  work: "begassing",
  image: molen,
  alt: "Traditionele Nederlandse molen aan het water",
 },
 {
  category: "Monument",
  place: "Kampen",
  title: "Stadspoort Kampen",
  work: "bonte knaagkever",
  image: stadspoort,
  alt: "Historische stadspoort van baksteen",
 },
 {
  category: "Kerk",
  place: "Akkrum",
  title: "Kerk Akkrum",
  work: "houtwormbestrijding",
  image: kerkAkkrum,
  alt: "Dorpskerk met bakstenen toren tussen de bomen",
 },
];

export function Projects() {
  return (
    <section id="referenties" className="line-top bg-background">
      <div className="container-site py-20 lg:py-28">
        <Reveal className="max-w-[720px]">
          <h2 className="text-4xl lg:text-[60px]">Projecten in heel Nederland en België</h2>
          <p className="mt-4 text-bark/75">
            Van een woonhuis in de straat tot een rijksmonument met een eeuwenoude kap.
          </p>
        </Reveal>
      </div>
      <div className="grid gap-px border-b border-forest/20 bg-forest/20 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 110} className="bg-background">
            <article className="group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[560px]"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-sm">
                  <span className="bg-sage px-3 py-1 text-forest">{project.category}</span>
                  <span className="bg-background px-3 py-1 text-bark/80">{project.place}</span>
                </div>
              </div>
              <div className="px-4 py-5 sm:px-6 lg:px-10">
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-[15px] text-bark/70">{project.work}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="container-site py-12">
        <ArrowButton href="#contact">Bekijk alle projecten</ArrowButton>
      </div>
    </section>
  );
}
