import { useId } from "react";

export function InjectionSeal() {
  const circleId = `injection-seal-${useId().replace(/:/g, "")}`;

  return (
    <a
      href="/bestrijdingsmethoden/injecteren/"
      aria-label="Hoekstra Injectie"
      className="mt-6 block size-[120px] shrink-0 -rotate-[8deg] rounded-full text-forest transition-colors hover:text-forest-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream lg:absolute lg:right-[4%] lg:top-[52%] lg:mt-0 lg:size-[184px] xl:size-[200px]"
    >
      <svg viewBox="0 0 200 200" className="size-full font-sans" aria-hidden="true">
        <defs>
          <path id={circleId} d="M 100,20 A 80,80 0 1,1 100,180 A 80,80 0 1,1 100,20" />
        </defs>
        <circle cx="100" cy="100" r="99" className="fill-cream" />
        <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <g className="injection-seal-ring">
          <text fill="currentColor" fontSize="11.5" fontWeight="600" textLength="498" lengthAdjust="spacing">
            <textPath href={`#${circleId}`}>
              EIGEN GEPATENTEERDE METHODE ★ STANDAARD IN URL 5001 ★
            </textPath>
          </text>
        </g>
        <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="1" />
        <g className="fill-amber" fontSize="15" fontWeight="700" textAnchor="middle">
          <text x="100" y="68">★ ★ ★</text>
          <text x="100" y="148">★ ★ ★</text>
        </g>
        <g transform="rotate(5 100 100)">
          <path d="M 12,79 H 188 L 179,100 188,121 H 12 L 21,100 Z" className="fill-amber" />
          <text x="100" y="106" textAnchor="middle" className="fill-cream" fontSize="15.5" fontWeight="700">HOEKSTRA INJECTIE</text>
        </g>
      </svg>
    </a>
  );
}