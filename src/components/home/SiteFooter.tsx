import logo from "@/assets/logo-mark.png.asset.json";

const menu = [
 { label: "Houtaantasters", href: "/#diensten" },
 { label: "Schimmels & zwammen", href: "/#diensten" },
 { label: "Bestrijdingsmethoden", href: "/#methode" },
 { label: "Referenties", href: "/#referenties" },
 { label: "Over ons", href: "/#werkwijze" },
 { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
 return (
  <footer className="bg-forest-deep text-sage/80">
   <div className="mx-auto grid gap-10 container-site py-16 lg:grid-cols-3">
    <div>
     <div className="flex items-center gap-3">
      <img
       src={logo.url}
       alt="Hoekstra Houtbehoud"
       width={56}
       height={56}
       loading="lazy"
       className="size-12 rounded-full object-cover"
      />
      <span className="text-sm font-semibold tracking-wide text-sage uppercase">
       Hoekstra Houtbehoud
      </span>
     </div>
     <p className="mt-5 max-w-xs text-sm">
      Beheerst, beschermd en conserveert sinds 1984. Werkgebied: heel Nederland en België.
     </p>
    </div>

    <div className="text-sm">
     <p className="mb-4 font-medium text-sage">Contact</p>
     <p>Riperwei 23</p>
     <p>8406 AL Tijnje</p>
     <p className="mt-3">
      <a href="tel:0513529899" className="hover:text-sage">
       0513 529 899
      </a>
     </p>
     <p>
      <a href="mailto:info@hoekstrahoutbehoud.nl" className="hover:text-sage">
       info@hoekstrahoutbehoud.nl
      </a>
     </p>
    </div>

    <div className="text-sm">
     <p className="mb-4 font-medium text-sage">Menu</p>
     <ul className="space-y-2">
      {menu.map((item) => (
       <li key={item.label}>
        <a href={item.href} className="hover:text-sage">
         {item.label}
        </a>
       </li>
      ))}
     </ul>
    </div>
   </div>
   <div className="border-t border-sage/15">
    <div className="mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 container-site py-6 text-xs">
     <span>NVPB</span>
     <span>KPMB IPM Houtbescherming</span>
     <span>VCA</span>
     <span>K+K</span>
    </div>
   </div>
  </footer>
 );
}
