import { ArrowRight, Phone } from "lucide-react";
import vakman from "@/assets/vakman-kap.jpg";
import portret from "@/assets/portret.jpg";
import molen from "@/assets/molen.jpg";
import kerk from "@/assets/kerk-akkrum.jpg";
import stadspoort from "@/assets/stadspoort.jpg";
import boerderij from "@/assets/boerderij.jpg";
import { Reveal } from "@/components/home/Reveal";

export function AboutOpening() {
  return (
    <section className="line-top">
      <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.08em] text-amber uppercase">Familiebedrijf uit Tijnje</p>
          <h2 className="mt-4 text-4xl lg:text-[60px]">Erfgoed beschermen is geen klus. Het is ons vak.</h2>
          <p className="mt-6 max-w-[720px] text-bark/75">
            Al meer dan 35 jaar beschermen wij Nederlands erfgoed tegen houtworm, boktor, bonte
            knaagkever en zwammen. Vanuit het hart van Friesland, met de handen aan het hout.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <img src={vakman} alt="Vakman inspecteert oude eiken balken in een kapconstructie" loading="lazy" width={1280} height={1600} className="aspect-[4/5] w-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

export function AboutStory() {
  return (
    <section className="bg-cream line-top">
      <div className="container-site grid gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:py-28">
        <Reveal className="max-w-[720px]">
          <h2 className="text-4xl lg:text-[60px]">Ons verhaal</h2>
          <div className="mt-6 space-y-4 text-bark/80">
            <p>
              Hoekstra is een familiebedrijf uit Tijnje, opgericht in [jaartal]. Wat begon als
              Hoekstra Bedrijfshygiëne heet nu Hoekstra Houtbehoud. Die naam past beter bij waar
              wij voor staan: het behoud van hout.
            </p>
            <p>
              "Wij schieten geen kanon af op een mug." We bestrijden gericht, met milieubewuste
              middelen. Zo verdwijnt alleen het ongedierte en blijft het gebouw behouden. Waar het
              kan, kiezen we voor heteluchtbehandeling, zonder chemische middelen.
            </p>
            <p>
              Onze eigen uitvinding is de gepatenteerde Hoekstra Injectie: kleinere gaten en geen
              zichtbare sporen. De Rijksdienst voor het Cultureel Erfgoed nam de methode op als
              standaard in de URL 5001.
            </p>
            <p>
              Inmiddels behandelden wij honderden kerken, molens, boerderijen, scholen en
              woonhuizen, in heel Nederland, België en daarbuiten.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className="flex items-center lg:border-l lg:border-forest/15 lg:pl-12">
          <blockquote>
            <p className="text-3xl leading-[1.2] tracking-[-0.02em] text-forest lg:text-[44px]">
              "Een monument behandel je niet als een bouwproject. Je behandelt het met respect."
            </p>
            <footer className="mt-6 text-sm font-medium tracking-[0.08em] text-bark/70 uppercase">Jaap Hoekstra</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

const stats = [
  { value: "35+", label: "jaar ervaring" },
  { value: "Honderden", label: "monumenten behandeld" },
  { value: "Eigen", label: "gepatenteerde methode" },
  { value: "URL 5001", label: "gecertificeerd IPM" },
];

export function AboutStats() {
  return (
    <section className="rings-pattern-light bg-forest-deep">
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4 lg:py-16">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <p className="text-3xl font-medium text-sage lg:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-sage/75">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { title: "Inspectie", text: "We komen langs en kijken wat er echt aan de hand is: welk insect of welke zwam, en hoe ver het is." },
  { title: "Advies op maat", text: "U krijgt een eerlijk advies. Alleen wat nodig is, met een heldere prijs vooraf." },
  { title: "Behandeling met garantie", text: "Wij behandelen gericht en zorgvuldig. U krijgt garantie op het resultaat." },
];

export function AboutSteps() {
  return (
    <section className="bg-sage">
      <div className="container-site py-20 lg:py-28">
        <Reveal className="max-w-[720px]">
          <h2 className="text-4xl lg:text-[60px]">Zo werken wij</h2>
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="border-t border-forest/20 py-8 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0">
              <p className="text-5xl text-forest/40">0{i + 1}</p>
              <h3 className="mt-4 text-2xl">{s.title}</h3>
              <p className="mt-3 text-forest/80">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const people = [
  { name: "Jaap Hoekstra", role: "Eigenaar", phone: "06-54211898", tel: "0654211898" },
  { name: "Jurjen Hoekstra", role: "[Rol Jurjen]", phone: "06-19242503", tel: "0619242503" },
];

export function AboutPeople() {
  return (
    <section className="line-top">
      <div className="container-site py-20 lg:py-28">
        <Reveal className="max-w-[720px]">
          <h2 className="text-4xl lg:text-[60px]">De mensen achter Hoekstra</h2>
          <p className="mt-4 text-bark/75">U belt met ons rechtstreeks. Geen callcenter, maar de vakman zelf.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="bg-cream">
                <img src={portret} alt={`Portret ${p.name}`} loading="lazy" width={912} height={912} className="aspect-[4/3] w-full object-cover" />
                <div className="p-7">
                  <h3 className="text-2xl">{p.name}</h3>
                  <p className="mt-1 text-bark/70">{p.role}</p>
                  <a href={`tel:${p.tel}`} className="mt-5 inline-flex items-center gap-3 bg-primary py-2 pl-5 pr-2 font-medium text-primary-foreground hover:bg-forest-deep">
                    {p.phone}
                    <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15"><Phone className="size-4" aria-hidden /></span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const certs = [
  { name: "KPMB — IPM Houtbescherming", text: "Wij werken volgens het keurmerk voor verantwoorde, gerichte houtbescherming." },
  { name: "NVPB", text: "Lid van de branchevereniging voor plaagdiermanagement en houtbescherming." },
];

export function AboutCerts() {
  return (
    <section className="bg-cream line-top">
      <div className="container-site py-20 lg:py-28">
        <Reveal className="max-w-[720px]"><h2 className="text-4xl lg:text-[60px]">Keurmerken</h2></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certs.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <article className="h-full bg-sage p-7">
                <h3 className="text-xl">{c.name}</h3>
                <p className="mt-3 text-forest/80">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const links = [
  { title: "Expertise", text: "Monumenten, kerken en molens", image: molen },
  { title: "Kwaliteit", text: "Keurmerken en garantie", image: kerk },
  { title: "Werkgebied", text: "Nederland, België en daarbuiten", image: boerderij },
  { title: "Nieuws", text: "Projecten en ontwikkelingen", image: stadspoort },
];

export function AboutLinks() {
  return (
    <section className="line-top">
      <div className="container-site py-20 lg:py-28">
        <Reveal className="max-w-[720px]"><h2 className="text-4xl lg:text-[60px]">Lees verder</h2></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l, i) => (
            <Reveal key={l.title} delay={i * 80}>
              <a href="/" className="group relative block h-[380px] overflow-hidden">
                <img src={l.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/25 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <h3 className="text-2xl text-white">{l.title}</h3>
                  <p className="mt-2 text-sage/90">{l.text}</p>
                  <span className="mt-5 flex size-11 items-center justify-center rounded-full bg-sage text-forest transition-transform group-hover:translate-x-1"><ArrowRight className="size-5" aria-hidden /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
