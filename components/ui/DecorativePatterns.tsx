import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { PatternName } from "@/lib/patterns";

const patternBg: Record<PatternName, string> = {
  kente: "bg-kente",
  ankara: "bg-ankara",
  mudcloth: "bg-mudcloth",
  woven: "bg-woven",
  bogolan: "bg-bogolan",
};

export function PatternWatermark({
  pattern = "kente",
  opacity = 0.06,
  className,
}: {
  pattern?: PatternName;
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "w-full h-full",
          patternBg[pattern],
          "pattern-watermark animate-pattern-flow",
        )}
        style={{ opacity }}
      />
    </div>
  );
}

/* Single isolated floating kente diamond / ankara block motif */
export function FloatingPatternMotif({
  color = "terracotta",
  size = 220,
  className,
  top,
  left,
  right,
  bottom,
  rotate = 0,
  pattern = "kente",
}: {
  color?: "terracotta" | "mango" | "forest" | "indigo" | "earth";
  size?: number;
  className?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  pattern?: PatternName;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute animate-blob-drift",
        className,
      )}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        rotate: `${rotate}deg`,
      }}
    >
      <div
        className={cn(
          "w-full h-full rounded-lg opacity-40",
          patternBg[pattern],
          "mix-blend-multiply",
        )}
        style={{
          clipPath:
            "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
    </div>
  );
}

/* Hand-drawn SVG plant / grain decorative line-art illustrations */
export function HandDrawnPlantLine({
  variant = "maize",
  size = 96,
  className,
}: {
  variant?: "maize" | "cocoa" | "rice" | "leaf" | "shea";
  size?: number;
  className?: string;
}): ReactNode {
  const paths: Record<string, ReactNode> = {
    maize: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 95 V35" />
        <path d="M50 78 C42 76 36 70 34 62" />
        <path d="M50 78 C58 76 64 70 66 62" />
        <path d="M50 62 C44 58 40 52 40 44" />
        <path d="M50 62 C56 58 60 52 60 44" />
        <path d="M50 48 C46 42 46 32 50 22 C54 32 54 42 50 48Z" />
        <path d="M44 28 L40 16 M56 28 L60 16" />
      </g>
    ),
    cocoa: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 95 V45" />
        <path d="M30 70 Q50 55 70 70" />
        <path d="M28 55 Q50 40 72 55" />
        <path d="M42 30 Q50 18 58 30 Q50 38 42 30Z" />
        <path d="M50 30 V20" />
      </g>
    ),
    rice: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 95 V28" />
        <path d="M50 35 C40 32 32 25 32 15 C42 20 48 28 50 35Z" />
        <path d="M50 45 C60 42 68 35 68 25 C58 30 52 38 50 45Z" />
        <path d="M50 55 C40 52 32 45 32 35 C42 40 48 48 50 55Z" />
        <path d="M50 65 C60 62 68 55 68 45 C58 50 52 58 50 65Z" />
        <path d="M50 75 C40 72 32 65 32 55 C42 60 48 68 50 75Z" />
      </g>
    ),
    leaf: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 90 Q40 50 85 25 Q55 55 20 90Z" />
        <path d="M30 80 Q45 62 70 38" />
        <path d="M35 74 L42 70 M44 66 L52 61 M54 58 L62 52 M64 49 L72 43" />
      </g>
    ),
    shea: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 95 V42" />
        <ellipse cx="40" cy="40" rx="10" ry="14" />
        <ellipse cx="60" cy="40" rx="10" ry="14" />
        <ellipse cx="50" cy="28" rx="10" ry="14" />
        <path d="M50 14 V8" />
      </g>
    ),
  };

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("text-terracotta-600/80", className)}
      aria-hidden
    >
      {paths[variant]}
    </svg>
  );
}
