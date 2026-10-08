"use client";

import type { ReactNode, ComponentType, ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn, springSoft, stagger } from "@/lib/utils";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  noBlur?: boolean;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...springSoft, duration: 0.7 },
  },
};

const noBlurVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ...springSoft, duration: 0.6 },
  },
};

export function MotionSection({
  children,
  className,
  delay = 0,
  id,
  noBlur = false,
}: MotionSectionProps) {
  const reduce = useReducedMotion();

  const finalVariants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.4, delay } },
      }
    : {
        ...(noBlur ? noBlurVariants : defaultVariants),
        show: {
          ...((noBlur ? noBlurVariants.show : defaultVariants.show) as any),
          transition: {
            ...((noBlur ? noBlurVariants.show : defaultVariants.show) as any)
              .transition,
            delay,
          },
        },
      };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: "-80px" }}
      variants={stagger}
      className={cn("relative", className)}
    >
      <motion.div variants={finalVariants}>{children}</motion.div>
    </motion.section>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
  noBlur = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  noBlur?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as keyof typeof motion);

  const v: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.35, delay } },
      }
    : noBlur
      ? {
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { ...springSoft, duration: 0.55, delay },
          },
        }
      : {
          hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { ...springSoft, duration: 0.6, delay },
          },
        };

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={v}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
