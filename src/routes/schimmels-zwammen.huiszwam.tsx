import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service/ServicePage";
import { huiszwamContent } from "@/content/huiszwam";

const title = "Huiszwam bestrijden — Hoekstra Houtbehoud";
const description =
  "Huiszwam herkennen en grondig laten bestrijden. Specialist sinds 1984, van woonhuis tot rijksmonument, in heel Nederland en België.";

export const Route = createFileRoute("/schimmels-zwammen/huiszwam")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ServicePage c={huiszwamContent} />,
});
