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
  <section id="referenties" className="bg-cream">
   <div className="container-site py-20 lg:py-28">
    <Reveal className="max-w-[720px]">
     <h2 className="text-4xl lg:text-[60px]">Projecten in heel Nederland en België</h2>
     <p className="mt-4 text-bark/75">
      Van een woonhuis in de straat tot een rijksmonument met een eeuwenoude kap.
     </p>
    </Reveal>
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
     {projects.map((project, i) => (
      <Reveal key={project.title} delay={(i % 2) * 110}>
       <article className="group">
        <div className="mb-3 flex items-center justify-between text-sm">
         <span className="bg-sage px-3 py-1 text-forest">
          {project.category}
         </span>
         <span className="text-bark/60">{project.place}</span>
        </div>
        <div className="overflow-hidden rounded-none">
         <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          width={1280}
          height={960}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-80"
         />
        </div>
        <h3 className="mt-4 text-xl">{project.title}</h3>
        <p className="text-[15px] text-bark/70">{project.work}</p>
       </article>
      </Reveal>
     ))}
    </div>
    <div className="mt-12">
     <ArrowButton href="#contact">Bekijk alle projecten</ArrowButton>
    </div>
   </div>
  </section>
 );
}
