# Homepage Hoekstra Houtbehoud

Een moderne, rustige homepage voor het familiebedrijf uit Tijnje: veel witruimte, grote koppen, grote foto's en blokken met afgeronde hoeken (16px). Sfeer van een Scandinavisch houtbedrijf, niet van een ongediertebestrijder. De screenshots dienen alleen als sfeerreferentie.

## Uitstraling

- Kleuren: bosgroen #324A23, diep bosgroen #1F2E17, saliegroen #DDE6D2, houtcrème #F6EEDF, donkerbruin #2A1E18 voor tekst, amberoranje #E08114 alleen als klein detail.
- Letter: Manrope. Koppen groot in normaal/medium gewicht, body 17–18px met ruime regelafstand.
- Knoppen: bosgroen met witte tekst; op donkere vlakken saliegroen met groene tekst. Rechts een pijl in een cirkel.
- Jaarringen uit het logo als subtiel decoratief lijnpatroon en als rond beeldelement dat half over een sectierand valt.
- Rustige animaties: fade-in bij scrollen en hover-effecten. Niets zwaars.

## Opbouw

Header: logo links, menu (Houtaantasters, Schimmels & zwammen, Bestrijdingsmethoden, Referenties, Over ons, Contact), rechts "Bel 0513 529 899". Op mobiel hamburgermenu plus telefoonknop.

1. Hero met grote dronefoto van een monumentale kerk: "Oud hout verdient vakmanschap", subkop over houtworm- en zwambestrijding sinds 1984, knoppen "Bel direct" en "Stuur ons een bericht".
2. Kengetallenbalk op diep bosgroen: 42 jaar ervaring, 100+ monumenten, 8,3 op Trustoo, eigen gepatenteerde methode.
3. Twee routes als fototegels: "Voor uw woning" en "Voor monumenten, kerken en molens".
4. Diensten in een asymmetrisch raster met foto in de tegel: Houtworm, Boktor, Bonte knaagkever, Huiszwam, Heteluchtbehandeling, Hoekstra Injectie.
5. Uitgelicht blok "De Hoekstra Injectie": tekst links, foto rechts, knop "Meer over de methode".
6. Vier keurmerkkaarten in saliegroen: NVPB, KPMB IPM Houtbescherming, VCA, K+K.
7. Referenties: fotoraster met categorie-label en plaatsnaam, knop "Bekijk alle projecten".
8. Werkwijze als uitklapbare lijst naast een donkergroen vlak: inspectie, advies, behandeling, nazorg en garantie.
9. Drie reviewkaarten met zichtbare placeholdertekst — geen verzonnen reviews.
10. Contactblok: grote foto met witte kaart erover, "Wij denken graag met u mee", ronde portretfoto, knoppen voor mail, telefoon en contact.
11. Footer op diep bosgroen met adres Riperwei 23, 8406 AL Tijnje, telefoon, e-mail, menulinks en keurmerken.

Een zwevende ronde "Bel direct"-knop blijft rechtsonder altijd zichtbaar, ook op mobiel.

## Beeld

Alle foto's worden gegenereerd in de gevraagde stijl: dronebeelden van een Friese kerk en molen, een boerderij, een woning, close-ups van oud eikenhout en balkconstructies, en een portretbeeld voor het contactblok. Het logo wordt in de header en footer gebruikt.

## Mobiel

Mobile first: tegels onder elkaar, kengetallen in een 2x2-raster, belknop altijd in beeld.

## Technisch

- Alles op de startpagina (`src/routes/index.tsx`) met losse sectiecomponenten onder `src/components/home/`, zodat de structuur één-op-één in Elementor na te bouwen is.
- Kleuren en radius als tokens in `src/styles.css`; geen hardgecodeerde kleurklassen in componenten.
- Manrope via een `<link>` in de root-route, niet via een CSS-import.
- Fade-in bij scrollen met een kleine IntersectionObserver-hook; accordion en mobiel menu via bestaande shadcn-componenten.
- Eigen titel, beschrijving en social-tags in de `head()` van de startpagina.
- Menu-items verwijzen naar ankers op de pagina zolang de subpagina's nog niet bestaan.
