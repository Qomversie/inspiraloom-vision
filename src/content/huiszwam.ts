import huiszwam from "@/assets/huiszwam.jpg";
import balken from "@/assets/balken.jpg";
import kap from "@/assets/kapconstructie.jpg";
import woning from "@/assets/woning.jpg";
import kerk from "@/assets/kerk-akkrum.jpg";
import boerderij from "@/assets/boerderij.jpg";
import stadspoort from "@/assets/stadspoort.jpg";
import type { ServiceContent } from "@/components/service/types";

// Concepttekst: vervangen door de bestaande paginatekst (zelfde H2's, zelfde volgorde).
export const huiszwamContent: ServiceContent = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Schimmels en zwammen", href: "/#diensten" },
    { label: "Huiszwam" },
  ],
  label: "Schimmels en zwammen",
  title: "Huiszwam bestrijden",
  intro: "Huiszwam tast hout snel aan en verspreidt zich door muurwerk. Wij stoppen het, grondig en blijvend.",
  heroImage: huiszwam,
  heroAlt: "Zwamgroei op een vochtige vloerbalk in een kruipruimte",
  cardQuestion: "Vermoedt u huiszwam?",
  part1: [
    {
      id: "wat-is-huiszwam",
      title: "Wat is huiszwam?",
      blocks: [
        { type: "p", text: "De echte huiszwam is een schimmel die hout afbreekt. Hij groeit op vochtig hout in een slecht geventileerde ruimte, zoals een kruipruimte, een kelder of achter een betimmering. Het hout verliest zijn sterkte, gaat blokvormig scheuren en verkruimelt uiteindelijk tussen de vingers." },
        { type: "p", text: "Wat de huiszwam zo verraderlijk maakt, is dat hij zich met dunne strengen door metselwerk en voegen kan verplaatsen. Zo bereikt hij ook hout dat zelf droog lijkt. Een aantasting blijft daardoor vaak lang onopgemerkt." },
        { type: "p", text: "Snel handelen beperkt de schade. Hoe eerder de oorzaak wordt aangepakt en het aangetaste hout wordt behandeld, hoe minder er vervangen hoeft te worden." },
      ],
    },
    {
      id: "gevolgen",
      title: "Wat zijn de gevolgen?",
      blocks: [
        { type: "p", text: "Aangetast hout kan zijn dragende functie verliezen. Vloeren gaan doorbuigen, balkkoppen in de muur worden zacht en in ernstige gevallen kan een constructie onveilig worden. Daarnaast geeft de zwam een muffe, paddenstoelachtige geur." },
        { type: "p", text: "Bij monumenten speelt nog iets anders mee: elk stuk origineel hout dat behouden kan blijven, is winst. Daarom kijken wij altijd eerst wat er gered kan worden voordat er iets wordt vervangen." },
      ],
    },
  ],
  photos: [
    { src: balken, alt: "Oude eiken balkconstructie met schade", caption: "Aangetaste balkkoppen bij een buitenmuur" },
    { src: kap, alt: "Close-up van oude eikenhouten balken", caption: "Kapconstructie na inspectie" },
    { src: woning, alt: "Woonhuis met houten vloeren", caption: "Kruipruimte onder een woonhuis" },
  ],
  part2: [
    {
      id: "herkennen",
      title: "Huiszwam herkennen",
      blocks: [
        { type: "p", text: "Huiszwam is niet altijd direct zichtbaar. Let op de volgende kenmerken:" },
        { type: "list", items: [
          "Wit tot grijs watachtig schimmelpluis op hout of muurwerk",
          "Dikke grijze strengen die over steen en voegen lopen",
          "Een roestbruin poeder: dit zijn de sporen van de zwam",
          "Hout dat in blokjes scheurt en licht en bros aanvoelt",
          "Een muffe, paddenstoelachtige geur",
        ] },
        { type: "p", text: "Ziet u een of meer van deze kenmerken? Laat het hout dan controleren. Wij stellen vast of het om huiszwam gaat of om een andere, minder schadelijke schimmel." },
      ],
    },
    {
      id: "waar",
      title: "Waar komt de huiszwam voor?",
      blocks: [
        { type: "p", text: "De zwam houdt van vocht, weinig licht en stilstaande lucht. Typische plekken zijn:" },
        { type: "list", items: [
          "Kruipruimtes met een hoge luchtvochtigheid",
          "Balkkoppen die in een vochtige buitenmuur liggen",
          "Achter betimmeringen, plinten en lambriseringen",
          "Kelders en souterrains",
          "Kerken en monumenten met dikke, langzaam drogende muren",
        ] },
        { type: "p", text: "Vaak is er een duidelijke oorzaak, zoals een lekkage, een verstopte ventilatieopening of opstijgend vocht. Die oorzaak moet altijd worden opgelost; anders komt de zwam terug." },
      ],
    },
  ],
  methods: [
    { label: "Hoekstra Injectie", href: "/#methode" },
    { label: "Heteluchtbehandeling", href: "/#diensten" },
  ],
  projects: [
    { title: "Kerk Akkrum", place: "Akkrum", image: kerk, alt: "Dorpskerk met bakstenen toren" },
    { title: "Monumentale boerderij", place: "Friesland", image: boerderij, alt: "Friese boerderij van bovenaf" },
    { title: "Stadspoort Kampen", place: "Kampen", image: stadspoort, alt: "Historische stadspoort van baksteen" },
  ],
  faq: [
    { q: "Hoe snel moet ik handelen bij huiszwam?", a: "Zo snel mogelijk. De zwam kan zich onder gunstige omstandigheden snel uitbreiden. Bel ons, dan plannen wij een inspectie." },
    { q: "Moet al het aangetaste hout worden vervangen?", a: "Niet altijd. Wij bepalen per onderdeel wat nog sterk genoeg is en wat behandeld kan worden." },
    { q: "Krijg ik garantie?", a: "Ja. Na de behandeling komen wij controleren en u krijgt garantie op het uitgevoerde werk." },
    { q: "Werken jullie ook in monumenten?", a: "Ja, kerken, molens en rijksmonumenten zijn onze specialiteit. Wij werken volgens de regels voor erfgoed." },
  ],
  related: [
    { label: "Kelderzwam", href: "/#diensten" },
    { label: "Poriënzwam", href: "/#diensten" },
    { label: "Plaatjeszwam", href: "/#diensten" },
    { label: "Oppervlakte schimmels", href: "/#diensten" },
  ],
};
