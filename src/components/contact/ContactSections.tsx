import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import portret from "@/assets/portret.jpg";
import { ArrowButton } from "@/components/home/ArrowButton";
import { Reveal } from "@/components/home/Reveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const mainPhone = { text: "0513-529899", href: "tel:0513529899" };

const people = [
  { name: "Jaap Hoekstra", text: "06-54211898", href: "tel:0654211898" },
  { name: "Jurjen Hoekstra", text: "06-19242503", href: "tel:0619242503" },
];

const email = { text: "info@hoekstrabedrijfshygiene.nl", href: "mailto:info@hoekstrabedrijfshygiene.nl" };

const fields = [
  { id: "name", label: "Naam *", autoComplete: "name" },
  { id: "company", label: "Bedrijf", autoComplete: "organization" },
  { id: "place", label: "Plaats", autoComplete: "address-level2" },
  { id: "phone", label: "Telefoonnummer *", type: "tel", autoComplete: "tel" },
  { id: "email", label: "E-mailadres *", type: "email", autoComplete: "email" },
  { id: "subject", label: "Onderwerp *", autoComplete: "off" },
];

export function ContactDetailsAndForm() {
  return (
    <section className="bg-background">
      <div className="container-site grid gap-12 py-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 lg:py-24">
        <Reveal className="min-w-0">
          <h2 className="text-4xl lg:text-[56px]">Hoekstra Houtbehoud</h2>
          <p className="mt-5 text-sm text-amber">(voorheen bekend als Hoekstra Bedrijfshygiëne)</p>
          <address className="mt-8 not-italic">Riperwei 23<br />8406 AL Tijnje</address>

          <a
            href={mainPhone.href}
            className="mt-8 flex items-center gap-4 bg-forest p-5 text-primary-foreground transition-colors hover:bg-forest-deep"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-amber">
              <Phone className="size-5" aria-hidden />
            </span>
            <span className="min-w-0 break-words text-2xl font-medium leading-tight">{mainPhone.text}</span>
          </a>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {people.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="flex items-center gap-3 rounded-[var(--contact-card-radius)] bg-cream p-3 transition-colors hover:bg-sage"
              >
                <img src={portret} alt={`Portret ${p.name}`} loading="lazy" className="size-14 shrink-0 rounded-full object-cover" />
                <span className="min-w-0">
                  <span className="block font-semibold text-forest">{p.name}</span>
                  <span className="block break-words text-bark/80">{p.text}</span>
                </span>
              </a>
            ))}
          </div>

          <ul className="mt-8 border-t border-forest/20">
            <li className="border-b border-forest/20">
              <a href={email.href} className="flex min-h-16 items-center gap-3 py-4 text-base text-forest transition-colors hover:text-forest-deep sm:text-lg">
                <Mail className="size-5 shrink-0" aria-hidden />
                <span className="min-w-0 break-words">{email.text}</span>
              </a>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-[var(--contact-card-radius)]">
            <iframe
              title="Kaart Hoekstra Houtbehoud, Riperwei 23 Tijnje"
              src="https://www.google.com/maps?q=Riperwei+23,+8406+AL+Tijnje&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full border-0 [filter:grayscale(0.6)_sepia(0.15)_contrast(0.95)]"
            />
          </div>
          <ArrowButton
            href="https://www.google.com/maps/dir/?api=1&destination=Riperwei+23,+8406+AL+Tijnje"
            variant="outline"
            className="mt-4 max-w-full gap-3 pl-4 text-sm sm:pl-6 sm:text-base"
            icon={<ArrowRight className="size-4" aria-hidden />}
          >
            Plan uw route
          </ArrowButton>
        </Reveal>
        <Reveal className="min-w-0">
          <form onSubmit={(event) => event.preventDefault()} className="rounded-[var(--contact-card-radius)] bg-cream p-6 sm:p-8 xl:p-10">
            <h2 className="text-4xl lg:text-[48px]">Contactformulier</h2>
            <p className="mt-5">Om u zo goed mogelijk van dienst te zijn vragen we u tenminste de velden met een * in te vullen:</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <div key={field.id} className="min-w-0 space-y-2">
                  <Label htmlFor={`contact-${field.id}`} className="text-base leading-normal">{field.label}</Label>
                  <Input id={`contact-${field.id}`} name={field.id} type={field.type ?? "text"} autoComplete={field.autoComplete} className="h-12 bg-background text-base shadow-none md:text-base" />
                </div>
              ))}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="contact-message" className="text-base leading-normal">Bericht</Label>
                <Textarea id="contact-message" name="message" rows={6} className="min-h-44 resize-y bg-background text-base shadow-none md:text-base" />
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3">
              <Checkbox id="contact-consent" className="mt-1 size-5" />
              <Label htmlFor="contact-consent" className="text-base font-normal leading-relaxed">Ik ga akkoord met het insturen en opslaan van bovenstaande gegevens.</Label>
            </div>
            <Button type="submit" className="mt-7 h-auto gap-6 py-2 pl-6 pr-2 text-base shadow-none hover:bg-forest-deep">
              Verzenden
              <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15"><ArrowRight aria-hidden /></span>
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const features = [
  "Gediplomeerd specialist in het bestrijden van ongedierte en zwammen",
  "Specialist in bestrijding in Monumenten en Monumentale panden",
  "Voor particulieren als voor zakelijke klanten",
];

export function ContactFeatures() {
  return (
    <section className="bg-sage">
      <Reveal className="container-site py-20 lg:py-28">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <h3 className="text-4xl lg:text-[48px]">Last van ongedierte?</h3>
          <ArrowButton href="tel:0513529899" className="max-w-full gap-3 pl-4 text-sm sm:pl-6 sm:text-base" icon={<Phone className="size-4" aria-hidden />}>
            Bel direct voor professioneel advies!
          </ArrowButton>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((text) => (
            <li key={text} className="bg-background p-7">
              <span className="flex size-11 items-center justify-center rounded-full bg-sage">
                <Check className="size-5 text-forest" aria-hidden />
              </span>
              <p className="mt-5 text-bark">{text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
