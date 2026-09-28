import { TreePine } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "1. Inspectie",
    text: "Wij komen langs, bekijken het hout en bepalen welke aantaster actief is en hoe diep de schade zit.",
  },
  {
    title: "2. Advies op maat",
    text: "U krijgt een helder rapport met de oorzaak, de mogelijke behandelingen en een duidelijke prijs.",
  },
  {
    title: "3. Behandeling",
    text: "Wij werken zorgvuldig en netjes, met de methode die bij uw pand en bij de regels voor erfgoed past.",
  },
  {
    title: "4. Nazorg en garantie",
    text: "Na de behandeling komen wij terug om te controleren. U krijgt garantie op het uitgevoerde werk.",
  },
];

export function Werkwijze() {
  return (
    <section id="werkwijze" className="line-top grid-lines mx-auto  wrap py-20 lg:py-28">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="rings-pattern-light flex h-full min-h-72 flex-col justify-between rounded-none bg-forest-deep p-8">
            <span className="flex size-14 items-center justify-center rounded-full bg-sage text-forest">
              <TreePine className="size-7" aria-hidden />
            </span>
            <div className="mt-10">
              <h2 className="text-4xl text-white lg:text-[60px]">Onze werkwijze</h2>
              <p className="mt-4 text-sage/85">
                Vier stappen, geen verrassingen. U weet steeds wat er gebeurt en waarom.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {steps.map((step, i) => (
              <AccordionItem key={step.title} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg text-forest hover:no-underline">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-bark/75">{step.text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
