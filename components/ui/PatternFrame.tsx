import type { ReactNode, ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import type { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import type { PatternName, PatternThickness } from "@/lib/patterns";
import { PATTERN_FRAME_WIDTHS } from "@/lib/patterns";

type PatternFrameProps = {
  children?: ReactNode;
  thickness?: PatternThickness;
  pattern?: PatternName;
  patternColorway?: string;
  innerClassName?: string;
  className?: string;
  showCorners?: boolean;
  cornerAccent?: "terracotta" | "mango" | "forest" | "indigo";
};

const patternBg: Record<PatternName, string> = {
  kente: "bg-kente",
  ankara: "bg-ankara",
  mudcloth: "bg-mudcloth",
  woven: "bg-woven",
  bogolan: "bg-bogolan",
};

const cornerColors: Record<NonNullable<PatternFrameProps["cornerAccent"]>, string> = {
  terracotta: "bg-terracotta-600",
  mango: "bg-mango-500",
  forest: "bg-forest-700",
  indigo: "bg-indigo-700",
};

export function PatternFrame({
  children,
  thickness = "medium",
  pattern = "kente",
  innerClassName,
  className,
  showCorners = true,
  cornerAccent = "terracotta",
}: PatternFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-soft-lg overflow-hidden isolate group",
        PATTERN_FRAME_WIDTHS[thickness],
        patternBg[pattern],
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full h-full rounded-soft overflow-hidden bg-cream-50 ring-1 ring-cream-50/30",
          innerClassName,
        )}
      >
        {children}
      </div>
      {showCorners && (
        <>
          <span
            aria-hidden
            className={cn(
              "absolute top-0 left-0 w-4 h-4 z-10",
              cornerColors[cornerAccent],
            )}
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
          />
          <span
            aria-hidden
            className={cn(
              "absolute top-0 right-0 w-4 h-4 z-10",
              cornerColors[cornerAccent],
            )}
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          />
          <span
            aria-hidden
            className={cn(
              "absolute bottom-0 left-0 w-4 h-4 z-10",
              cornerColors[cornerAccent],
            )}
            style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
          />
          <span
            aria-hidden
            className={cn(
              "absolute bottom-0 right-0 w-4 h-4 z-10",
              cornerColors[cornerAccent],
            )}
            style={{ clipPath: "polygon(100% 100%, 100% 0, 0 100%)" }}
          />
        </>
      )}
    </div>
  );
}

type PatternFramedImageProps = Omit<PatternFrameProps, "children"> &
  Omit<ComponentPropsWithoutRef<typeof Image>, "src" | "alt"> & {
    src: ImageProps["src"];
    alt: string;
    imgClassName?: string;
  };

export function PatternFramedImage({
  thickness = "medium",
  pattern = "kente",
  showCorners = true,
  cornerAccent = "terracotta",
  className,
  innerClassName,
  imgClassName,
  alt,
  ...imageProps
}: PatternFramedImageProps) {
  return (
    <PatternFrame
      thickness={thickness}
      pattern={pattern}
      showCorners={showCorners}
      cornerAccent={cornerAccent}
      className={className}
      innerClassName={innerClassName}
    >
      <Image
        alt={alt}
        {...imageProps}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700 ease-spring-soft group-hover:scale-[1.08]",
          imgClassName,
        )}
      />
    </PatternFrame>
  );
}
