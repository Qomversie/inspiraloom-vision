import { useId } from "react";

export function InjectionSeal() {
  const circleId = `injection-seal-${useId().replace(/:/g, "")}`;

  return (
    <a
      href="/bestrijdingsmethoden/injecteren/"
      aria-label="Hoekstra Injectie"
      className="mt-6 block size-[120px] shrink-0 -rotate-[8deg] rounded-full text-forest transition-colors hover:text-forest-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream lg:absolute lg:right-[4%] lg:top-[52%] lg:mt-0 lg:size-[184px] xl:size-[200px]"
    >
      <svg viewBox="0 0 200 200" className="size-full" aria-hidden="true">
        <defs>
          <path id={circleId} d="M 100,20 A 80,80 0 1,1 100,180 A 80,80 0 1,1 100,20" />
        </defs>
        <circle cx="100" cy="100" r="99" className="fill-cream" />
        <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <g className="injection-seal-ring">
          <text fill="currentColor" fontSize="10.5" fontWeight="500" textLength="493" lengthAdjust="spacing">
            <textPath href={`#${circleId}`}>
              EIGEN GEPATENTEERDE METHODE • STANDAARD IN URL 5001 •
            </textPath>
          </text>
        </g>
        <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <path d="m100 47 2.5 7.5h8l-6.5 4.7 2.5 7.6-6.5-4.7-6.5 4.7 2.5-7.6-6.5-4.7h8Z" className="fill-amber" />
        <text x="100" y="101" textAnchor="middle" fill="currentColor" fontSize="25" fontWeight="500">Hoekstra</text>
        <text x="100" y="131" textAnchor="middle" fill="currentColor" fontSize="24" fontWeight="400">Injectie</text>
      </svg>
    </a>
  );
}