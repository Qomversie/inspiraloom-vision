import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Intro } from "@/components/home/Intro";
import { TwoRoutes } from "@/components/home/TwoRoutes";
import { Services } from "@/components/home/Services";
import { Injection } from "@/components/home/Injection";
import { Certifications } from "@/components/home/Certifications";
import { Projects } from "@/components/home/Projects";
import { PhotoBand } from "@/components/home/PhotoBand";
import { Werkwijze } from "@/components/home/Werkwijze";
import { Reviews } from "@/components/home/Reviews";
import { ContactBlock } from "@/components/home/ContactBlock";
import { SiteFooter } from "@/components/home/SiteFooter";
import { FloatingCall } from "@/components/home/FloatingCall";

const title = "Hoekstra Houtbehoud — houtworm- en zwambestrijding sinds 1984";
const description =
  "Specialist in houtwormbestrijding, zwambestrijding en houtconservering. Van woonhuis tot rijksmonument, in heel Nederland en België.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Intro />
        <TwoRoutes />
        <Services />
        <Injection />
        <Certifications />
        <Projects />
        <PhotoBand />
        <Werkwijze />
        <Reviews />
        <ContactBlock />
      </main>
      <SiteFooter />
      <FloatingCall />
    </div>
  );
}
