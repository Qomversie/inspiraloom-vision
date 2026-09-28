import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "sage" | "outline";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-forest-deep",
  sage: "bg-sage text-forest hover:bg-cream",
  outline: "border border-forest/30 text-forest hover:bg-sage/60",
};

export function ArrowButton({
  children,
  href = "#contact",
  variant = "primary",
  className,
  icon,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 py-2 pl-6 pr-2 text-base font-medium transition-colors",
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-full transition-transform group-hover:translate-x-1",
          variant === "primary"
            ? "bg-primary-foreground/15"
            : "bg-forest/10",
        )}
      >
        {icon ?? <ArrowRight className="size-4" aria-hidden />}
      </span>
    </a>
  );
}
