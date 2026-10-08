"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { PatternName, PatternThickness } from "@/lib/patterns";
import { PATTERN_HEIGHTS } from "@/lib/patterns";

type PatternDividerProps = {
  pattern?: PatternName;
  thickness?: PatternThickness;
  eyebrow?: string;
  className?: string;
  eyebrowAccent?: "terracotta" | "mango" | "forest" | "indigo";
};

const patternBg: Record<PatternName, string> = {
  kente: "bg-kente",
  ankara: "bg-ankara",
  mudcloth: "bg-mudcloth",
  woven: "bg-woven",
  bogolan: "bg-bogolan",
};

const eyebrowAccents: Record<NonNullable<PatternDividerProps["eyebrowAccent"]>, string> = {
  terracotta: "bg-terracotta-700 text-cream-50",
  mango: "bg-mango-500 text-charcoal-900",
  forest: "bg-forest-700 text-cream-50",
  indigo: "bg-indigo-700 text-cream-50",
};

export function PatternDivider({
  pattern = "kente",
  thickness = "medium",
  eyebrow,
  className,
  eyebrowAccent = "terracotta",
}: PatternDividerProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? {} : { opacity: 0, scaleX: 0.8 }}
      whileInView={reduce ? {} : { opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 160, damping: 22 }}
      className={cn("w-full relative overflow-hidden", className)}
    >
      <div
        aria-hidden
        className={cn(
          "w-full",
          PATTERN_HEIGHTS[thickness],
          patternBg[pattern],
          !reduce && "animate-pattern-flow",
        )}
      />
      {eyebrow && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "font-mono text-micro uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full shadow-card",
              eyebrowAccents[eyebrowAccent],
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
    </motion.div>
  );
}
