import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
 children,
 className,
 delay = 0,
}: {
 children: ReactNode;
 className?: string;
 delay?: number;
}) {
 const { ref, visible } = useReveal<HTMLDivElement>();
 return (
  <div
   ref={ref}
   className={cn("reveal", visible && "reveal-in", className)}
   style={delay ? { transitionDelay: `${delay}ms` } : undefined}
  >
   {children}
  </div>
 );
}
