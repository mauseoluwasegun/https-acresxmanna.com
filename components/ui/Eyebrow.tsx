import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  accent?: "terracotta" | "mango" | "forest" | "indigo" | "charcoal";
};

const accents: Record<NonNullable<EyebrowProps["accent"]>, string> = {
  terracotta: "text-terracotta-700",
  mango: "text-mango-500",
  forest: "text-forest-700",
  indigo: "text-indigo-700",
  charcoal: "text-charcoal-700",
};

export function Eyebrow({
  children,
  className,
  accent = "terracotta",
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-label uppercase tracking-[0.12em]",
        accents[accent],
        className,
      )}
    >
      {children}
    </p>
  );
}
