export type PatternName = "kente" | "ankara" | "mudcloth" | "woven" | "bogolan";
export type PatternThickness = "thin" | "medium" | "bold";

export const PATTERN_COLORWAYS: Record<PatternName, Array<{ name: string; colors: string[] }>> = {
  kente: [
    { name: "sunset", colors: ["terracotta-500", "mango-400", "charcoal-900", "cream-100"] },
    { name: "forest", colors: ["forest-600", "earth-600", "cream-100", "terracotta-600"] },
    { name: "indigo", colors: ["indigo-700", "mango-500", "cream-100", "charcoal-900"] },
  ],
  ankara: [
    { name: "classic", colors: ["mango-500", "terracotta-600", "indigo-700", "forest-700"] },
    { name: "earth", colors: ["earth-600", "terracotta-500", "cream-100", "charcoal-700"] },
  ],
  mudcloth: [
    { name: "classic", colors: ["charcoal-900", "earth-600", "cream-50"] },
    { name: "terracotta", colors: ["terracotta-700", "mango-400", "cream-100"] },
  ],
  woven: [
    { name: "warm", colors: ["terracotta-500", "mango-500"] },
    { name: "cool", colors: ["indigo-700", "forest-600"] },
  ],
  bogolan: [
    { name: "earth", colors: ["earth-600", "charcoal-900", "mango-500"] },
    { name: "sunset", colors: ["terracotta-700", "charcoal-700", "cream-100"] },
  ],
};

export const PATTERN_HEIGHTS: Record<PatternThickness, string> = {
  thin: "h-6",
  medium: "h-10",
  bold: "h-16",
};

export const PATTERN_FRAME_WIDTHS: Record<PatternThickness, string> = {
  thin: "p-[2px]",
  medium: "p-2",
  bold: "p-4 sm:p-5",
};
