import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const spring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 220,
  damping: 24,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...springSoft, duration: 0.7 },
  },
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
