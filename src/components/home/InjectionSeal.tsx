import { useId } from "react";

export function InjectionSeal() {
  const circleId = `injection-seal-${useId().replace(/:/g, "")}`;

  return (
    <a
      href="/bestrijdingsmethoden/injecteren/"
      aria-label="Hoekstra Injectie"
      className="injection-seal mt-6 block size-[110px] shrink-0 rounded-full text-forest opacity-95 transition-colors hover:text-forest-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream lg:absolute lg:-bottom-[75px] lg:right-10 lg:z-20 lg:mt-0 lg:size-[150px]"
    >
      <svg viewBox="0 0 200 200" className="size-full -rotate-[4deg] overflow-visible font-sans" aria-hidden="true">
        <defs>
          <path id={circleId} d="M 100,20 A 80,80 0 1,1 100,180 A 80,80 0 1,1 100,20" />
        </defs>
        <circle cx="100" cy="100" r="99" className="fill-cream" />
        <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <g className="injection-seal-ring">
          <text fill="currentColor" fontSize="10" fontWeight="600" textLength="498" lengthAdjust="spacing">
            <textPath href={`#${circleId}`} startOffset="0.5%">
              EIGEN GEPATENTEERDE METHODE <tspan className="fill-amber">★</tspan> STANDAARD IN URL 5001 <tspan className="fill-amber">★</tspan>
            </textPath>
          </text>
        </g>
        <g transform="rotate(2 100 100)">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M 68,59 H 90 M 110,59 H 132" />
            <path d="M 70,141 H 130 M 70,146 H 130" />
          </g>
          <text x="100" y="63" className="fill-amber" fontSize="12" textAnchor="middle">★</text>
          <path d="M 4,78 H 196 L 190,100 196,122 H 4 L 10,100 Z" className="fill-amber" />
          <text x="100" y="106" textAnchor="middle" className="fill-cream" fontSize="18" fontWeight="700">HOEKSTRA INJECTIE</text>
        </g>
      </svg>
    </a>
  );
}