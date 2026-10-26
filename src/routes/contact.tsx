import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ContactDetailsAndForm, ContactFeatures } from "@/components/contact/ContactSections";
import balken from "@/assets/kapconstructie.jpg";

const title = "Contact | Hoekstra Houtbehoud";
const description = "Wij denken graag met u mee. Neem contact op met Hoekstra Houtbehoud in Tijnje via telefoon, e-mail of het contactformulier.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background">
      <SiteHeader overlay />
      <main>
        <ServiceHero compact c={{
          heroImage: balken,
          heroAlt: "Oude eikenhouten balken in een kapconstructie",
          breadcrumb: [{ label: "Home", href: "/" }, { label: "Contact" }],
          label: "Contact",
          title: "Wij denken graag met u mee",
        }} />
        <ContactDetailsAndForm />
        <ContactFeatures />
      </main>
      <SiteFooter />
    </div>
  );
}