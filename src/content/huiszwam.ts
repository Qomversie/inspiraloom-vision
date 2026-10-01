import huiszwam from "@/assets/huiszwam.jpg";
import balken from "@/assets/balken.jpg";
import kap from "@/assets/kapconstructie.jpg";
import woning from "@/assets/woning.jpg";
import kerk from "@/assets/kerk-akkrum.jpg";
import boerderij from "@/assets/boerderij.jpg";
import stadspoort from "@/assets/stadspoort.jpg";
import type { ServiceContent } from "@/components/service/types";

export const huiszwamContent: ServiceContent = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Schimmels en zwammen", href: "/#diensten" },
    { label: "Huiszwam" },
  ],
  label: "Schimmels en zwammen",
  title: "Huiszwam",
  heroImage: huiszwam,
  heroAlt: "Zwamgroei op een vochtige vloerbalk in een kruipruimte",
  cardQuestion: "Vermoedt u huiszwam?",
  part1: [
    {
      id: "huiszwam-bestrijden",
      title: "Huiszwam bestrijden",
      blocks: [
        { type: "p", text: "Heeft u last van huiszwam in huis of uw bedrijfspand? De beste oplossing is om huiszwam effectief te laten bestrijden door professionals. Wanneer huiszwam hout aantast wordt dit ook wel bruinrot genoemd. Hout dat is aangetast verkleurd of wordt bruiner, ook verliest het zijn sterkte en wordt het zachter. Hoekstra Bedrijfshygiëne beschikt over verschillende bestrijdingsmethoden om huiszwam te bestrijden." },
      ],
    },
    {
      id: "woning-of-bedrijfspand",
      title: "Huiszwam bestrijden in uw woning of bedrijfspand",
      blocks: [
        { type: "p", text: "Heeft u het vermoeden dat uw huis of bedrijfspand wordt aangetast door huiszwam? Wacht niet te lang, maar neem direct contact op met ons. Wij helpen u graag van huiszwam of andere zwammen en schimmels af. Bel gerust 0513-529899." },
      ],
    },
  ],
  photos: [
    { src: balken, alt: "Oude eiken balkconstructie met schade" },
    { src: kap, alt: "Close-up van oude eikenhouten balken" },
    { src: woning, alt: "Woonhuis met houten vloeren" },
  ],
  part2: [
    {
      id: "herkennen",
      title: "Huiszwam herkennen",
      blocks: [
        { type: "p", text: "Hout dat is aangetast door huiszwam is bruinachtig van kleur en wordt ook wel bruine rot genoemd. Naarmate de huiszwam groeit, wordt het hout steeds zachter en verliest het zijn stevige structuur. De schimmeldraden die zich in het hout bevinden zijn met het blote oog niet zichtbaar. Bovenop het hout zijn soms wel schimmeldraden te ontdekken. Deze zijn dikker dan de draden die zich in het hout bevinden en hebben ze soms de vorm van witte vlokken." },
        { type: "p", text: "Huiszwam tast het hout zodanig aan dat de celwanden van hout worden afgebroken, waardoor de huiszwam nog beter gaat groeien. Ook droog hout kan worden aangetast, want huiszwam transporteert vocht via de schimmeldraden naar droog hout, zodat het zich kan uitbreiden. Na verloop van tijd vormt compact weefsel van de huiszwam een platte 'paddestoelen' (vruchtlichamen) die vaak bruin gekleurd zijn met een witte rand." },
      ],
    },
    {
      id: "waar",
      title: "Waar komt de huiszwam voor?",
      blocks: [
        { type: "p", text: "Huiszwam kan zich eenvoudig verder ontwikkelen bij temperaturen tussen de 23-28 graden. Is de temperatuur hoger, dan stervende schimmeldraden af. De sporen kunnen hogere temperaturen doorstaan en kunnen weer gaan groeien wanneer de temperatuur daalt. Wanneer het vriest 'slaapt' de huiszwam, en wordt verdere ontwikkeling gepauzeerd. De ideale omstandigheden voor de huiszwam zijn:" },
        { type: "list", items: [
          "Hoge luchtvochtigheid (vochtgehalte hoger dan 21 procent)",
          "Temperatuur van 23 tot 28 graden",
          "Weinig ventilatie",
          "Aanwezigheid van hout (maar ook op en in beton)",
        ] },
      ],
    },
  ],
  contact: {
    title: "Last van huiszwam?",
    text: "Neem bij aanwezigheid van huiszwam direct contact op met Hoekstra Bedrijfshygiëne.",
  },
  projects: [
    { title: "Kerk Akkrum", place: "Akkrum", image: kerk, alt: "Dorpskerk met bakstenen toren" },
    { title: "Monumentale boerderij", place: "Friesland", image: boerderij, alt: "Friese boerderij van bovenaf" },
    { title: "Stadspoort Kampen", place: "Kampen", image: stadspoort, alt: "Historische stadspoort van baksteen" },
  ],
  related: [
    { label: "Kelderzwam", href: "/#diensten" },
    { label: "Poriënzwam", href: "/#diensten" },
    { label: "Plaatjeszwam", href: "/#diensten" },
    { label: "Oppervlakte schimmels", href: "/#diensten" },
  ],
};
