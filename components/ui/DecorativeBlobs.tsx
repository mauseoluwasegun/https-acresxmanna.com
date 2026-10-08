import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type BlobColor = "terracotta" | "mango" | "forest" | "indigo" | "cream";
type BlobSize = "sm" | "md" | "lg" | "xl" | "2xl";

const blobColors: Record<BlobColor, string> = {
  terracotta: "bg-terracotta-500",
  mango: "bg-mango-400",
  forest: "bg-forest-600",
  indigo: "bg-indigo-700",
  cream: "bg-cream-50",
};

const blobSizes: Record<BlobSize, string> = {
  sm: "w-24 h-24",
  md: "w-40 h-40",
  lg: "w-64 h-64",
  xl: "w-80 h-80",
  "2xl": "w-[28rem] h-[28rem]",
};

export function DecorativeBlob({
  color = "terracotta",
  size = "md",
  opacity = 0.18,
  className,
  top,
  left,
  right,
  bottom,
  rotate,
  delay = 0,
  blur,
}: {
  color?: BlobColor;
  size?: BlobSize;
  opacity?: number;
  className?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  delay?: number;
  blur?: number;
}) {
  const style: CSSProperties = {
    opacity,
    top,
    left,
    right,
    bottom,
    rotate: `${rotate ?? 0}deg`,
    animationDelay: `${delay}s`,
    filter: blur ? `blur(${blur}px)` : undefined,
    borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
  };

  return (
    <span
      aria-hidden
      className={cn(
        "absolute pointer-events-none",
        blobColors[color],
        blobSizes[size],
        "animate-blob-drift",
        className,
      )}
      style={style}
    />
  );
}

export function DecorativeBlobSet({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none inset-0 absolute", className)}>
      <DecorativeBlob color="terracotta" size="lg" top="-4%" left="-6%" opacity={0.12} />
      <DecorativeBlob color="mango" size="md" top="10%" right="0%" opacity={0.15} rotate={20} delay={2} />
      <DecorativeBlob color="terracotta" size="sm" bottom="0%" right="12%" opacity={0.22} rotate={-30} delay={4} />
      <DecorativeBlob color="mango" size="lg" bottom="-10%" left="20%" opacity={0.1} delay={1} />
    </div>
  );
}
