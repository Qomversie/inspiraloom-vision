import { ArrowRight, Phone } from "lucide-react";
import vakman from "@/assets/vakman-kap.jpg";
import portret from "@/assets/portret.jpg";
import molen from "@/assets/molen.jpg";
import kerk from "@/assets/kerk-akkrum.jpg";
import stadspoort from "@/assets/stadspoort.jpg";
import boerderij from "@/assets/boerderij.jpg";
import injectie from "@/assets/injectie.jpg";
import { Reveal } from "@/components/home/Reveal";

export function AboutOpening() {
  return (
    <section className="bg-background line-top">
      <div className="container-site grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal className="max-w-[720px]">
          <p className="text-sm font-medium tracking-[0.08em] text-amber uppercase">Hoekstra Bedrijfshygiëne</p>
          <h2 className="mt-4 text-4xl lg:text-[60px]">Erfgoed beschermen is geen klus. Het is ons vak.</h2>
          <div className="mt-6 space-y-4 text-bark/80">
            <p><strong>Bij Hoekstra</strong> zijn we al meer dan 35 jaar actief om Neerlands erfgoed te beschermen tegen alle ongewenste veelvraten, zoals de bonte knaagkever, de boktor, zwammen en houtwormen.</p>
            <p>Dat doen we op een slagvaardige manier, waarbij alleen het ongedierte het loodje legt en het monument (evenals de omgeving) voor de toekomst behouden blijft.</p>
            <p><strong>Bij Hoekstra</strong> maken we geen gebruik van het spreekwoordelijke 'kanon om een mug uit de lucht te schieten'. Wij passen onze <a href="/bestrijdingsmethoden/" className="text-forest underline underline-offset-4 hover:text-forest-deep">bestrijdingsmethoden</a> subtiel toe en gebruiken milieubewuste middelen om het ongedierte selectief te elimineren.</p>
            <p>We werken ook met een <a href="/bestrijdingsmethoden/heteluchtbehandeling/" className="text-forest underline underline-offset-4 hover:text-forest-deep">hete luchtbehandeling</a>. Dat betekent bestrijding zonder chemische middelen, maar met een 100% resultaat.</p>
            <p>Tot slot kunnen we vergassen. Maar dat alleen in het uiterste geval.</p>
            <p><strong>Bij Hoekstra</strong> weten we hoe we met een minimale inzet van tijd, geld en bestrijdingsmiddelen een maximaal effect kunnen bereiken. Honderden scholen, boerderijen, <a href="/over-ons/expertise/ongediertebestrijding-kerken/" className="text-forest underline underline-offset-4 hover:text-forest-deep">kerken</a> en woonhuizen hebben wij van schadelijk ongedierte verlost en evenzoveel gebouwen voor de toekomst beschermd.</p>
            <p>Ook u kunt <strong>bij Hoekstra</strong> terecht om ongedierte in de kiem te smoren. Bel Jaap Hoekstra (<a href="tel:+31654211898" className="text-forest underline underline-offset-4 hover:text-forest-deep">06-54211898</a>) en maak direct een afspraak.</p>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative min-h-[420px] lg:min-h-0">
          <img src={vakman} alt="Vakman inspecteert oude eiken balken in een kapconstructie" loading="lazy" width={1280} height={1600} className="absolute inset-0 size-full object-cover" />
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
    <section className="rings-pattern-subtle bg-sage line-top">
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4 lg:py-16">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <p className="text-3xl font-medium text-forest lg:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-bark/80">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

type Person = { name: string; role: string; phone?: string; tel?: string; photo: string };
const people: Person[] = [
  { name: "Jaap Hoekstra", role: "Eigenaar", phone: "06-54211898", tel: "+31654211898", photo: portret },
  { name: "Jurjen Hoekstra", role: "[functie]", phone: "06-19242503", tel: "+31619242503", photo: portret },
  { name: "[Naam]", role: "[functie]", photo: portret },
];

export function AboutPeople() {
  return (
    <section className="line-top">
      <div className="container-site py-20 lg:py-28">
        <Reveal className="max-w-[720px]">
          <h2 className="text-4xl lg:text-[60px]">De mensen achter Hoekstra</h2>
          <p className="mt-4 text-bark/75">U belt met ons rechtstreeks. Geen callcenter, maar de vakman zelf.</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {people.map((p, i) => (
            <Reveal key={p.name + i} delay={i * 100}>
              <article className="flex h-full flex-col bg-cream">
                <img src={p.photo} alt={`Portret ${p.name}`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl">{p.name}</h3>
                  <p className="mt-1 text-bark/70">{p.role}</p>
                  {p.phone && (
                    <a href={`tel:${p.tel}`} className="mt-5 inline-flex items-center gap-3 self-start bg-primary py-2 pl-5 pr-2 font-medium text-primary-foreground hover:bg-forest-deep">
                      {p.phone}
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15"><Phone className="size-4" aria-hidden /></span>
                    </a>
                  )}
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
                <div className="mb-6 flex h-16 w-40 items-center justify-center bg-white text-sm text-bark/50">Logo</div>
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

export function AboutInjection() {
  return (
    <section className="bg-forest-deep text-sage">
      <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <img src={injectie} alt="Injectie in een oude houten constructie" loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </Reveal>
        <Reveal delay={120} className="max-w-[720px]">
          <p className="text-sm font-medium tracking-[0.08em] text-amber uppercase">Eigen uitvinding</p>
          <h3 className="mt-4 text-4xl text-white lg:text-[56px]">Eigen gepatenteerde injectiemethode</h3>
          <p className="mt-6 inline-block border border-sage/40 px-4 py-2 text-sm font-semibold tracking-[0.08em] text-sage uppercase">Gepatenteerd · Standaard in de URL 5001</p>
          <p className="mt-6 text-sage/85">
            Bij Hoekstra hanteren we daarnaast een gepatenteerde injectiemethode om de bonte knaagkever of huisboktor in hout te bestrijden. Dat doen we uiterst zorgvuldig, zodat ongewenste sporen van de ingreep definitief tot het verleden behoren. Dit is een reden voor de REC* om deze methode als standaard te bestempelen en op te nemen in de URL 5001. Dit houdt in dat de oude injectiemethode niet langer is toegestaan in monumenten.
          </p>
          <p className="mt-3 text-sm text-sage/60">*Rijksdienst voor het Cultureel Erfgoed</p>
          <a href="/bestrijdingsmethoden/injecteren/" className="mt-8 inline-flex items-center gap-3 bg-sage py-2 pl-5 pr-2 font-medium text-forest hover:bg-cream">
            Meer over Hoekstra Injectie
            <span className="flex size-9 items-center justify-center rounded-full bg-forest/10"><ArrowRight className="size-4" aria-hidden /></span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
