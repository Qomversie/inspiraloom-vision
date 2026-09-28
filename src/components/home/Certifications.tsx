import { Reveal } from "./Reveal";

const items = [
 {
  name: "NVPB",
  text: "Lid van de branchevereniging voor plaagdiermanagement en houtbescherming.",
  tags: ["Branche", "Vakkennis"],
 },
 {
  name: "KPMB IPM Houtbescherming",
  text: "Gecertificeerd volgens het keurmerk voor verantwoorde houtbescherming.",
  tags: ["Keurmerk", "IPM"],
 },
 {
  name: "VCA",
  text: "Veilig werken op locatie, ook in kerken, molens en op hoogte.",
  tags: ["Veiligheid"],
 },
 {
  name: "K+K",
  text: "Kwaliteit en kennis van behandelingen aan monumentaal hout.",
  tags: ["Monumenten", "Kwaliteit"],
 },
];

export function Certifications() {
 return (
  <section className="line-top relative overflow-hidden bg-cream">
   <div className="rings-watermark pointer-events-none absolute -right-[260px] -top-[340px] hidden size-[620px] rounded-full lg:block" aria-hidden />
<div className="relative container-site py-20 lg:py-28">
   <Reveal className="max-w-[720px]">
    <h2 className="text-4xl lg:text-[60px]">Aangesloten en gecertificeerd</h2>
    <p className="mt-4 text-bark/75">
     U weet waar u aan toe bent. Wij werken volgens vaste richtlijnen en laten ons toetsen.
    </p>
   </Reveal>
   <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item, i) => (
     <Reveal key={item.name} delay={i * 80}>
      <article className="flex h-full flex-col rounded-none bg-sage p-6">
       <h3 className="text-lg">{item.name}</h3>
       <p className="mt-3 flex-1 text-[15px] text-forest/80">{item.text}</p>
       <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
         <span
          key={tag}
          className="bg-background/70 px-3 py-1 text-xs text-forest"
         >
          {tag}
         </span>
        ))}
       </div>
      </article>
     </Reveal>
    ))}
   </div>
  </div>
</section>
 );
}
