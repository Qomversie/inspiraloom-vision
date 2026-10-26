import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { ContactBlock } from "@/components/home/ContactBlock";
import { FloatingCall } from "@/components/home/FloatingCall";
import { ServiceHero } from "@/components/service/ServiceHero";
import { MobileCallBar } from "@/components/service/Blocks";
import type { ServiceContent } from "@/components/service/types";
import balken from "@/assets/kapconstructie.jpg";
import {
  AboutCerts, AboutLinks, AboutOpening, AboutPeople, AboutStats, AboutInjection, 
} from "@/components/about/AboutSections";

const title = "Over ons — Hoekstra Houtbehoud, familiebedrijf uit Tijnje";
const description =
  "Familiebedrijf uit Tijnje dat al ruim 35 jaar Nederlands erfgoed beschermt tegen houtworm en zwam. Maak kennis met Jaap en Jurjen Hoekstra.";

const hero = {
  heroImage: balken,
  heroAlt: "Oude eikenhouten balken in een kapconstructie",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Over ons" }],
  label: "Over Hoekstra",
  title: "Vakmensen met respect voor erfgoed",
} as unknown as ServiceContent;

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background pb-14 lg:pb-0">
      <SiteHeader overlay />
      <main>
        <ServiceHero c={hero} />
        <AboutOpening />
        <AboutInjection />
        <AboutStats />
        <AboutPeople />
        <AboutCerts />
        <AboutLinks />
        <ContactBlock />
      </main>
      <SiteFooter />
      <div className="hidden lg:block"><FloatingCall /></div>
      <MobileCallBar />
    </div>
  );
}
