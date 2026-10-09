"use client";

import { useState, useEffect } from "react";
import type { ReactNode, ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn, springSoft } from "@/lib/utils";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  noBlur?: boolean;
};

/* Luxury cinematic motion curve — silky smooth acceleration and deceleration */
const luxuryEase = [0.16, 1, 0.3, 1] as const;

const luxuryVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: luxuryEase,
    },
  },
};

export function MotionSection({
  children,
  className,
  delay = 0,
  id,
}: MotionSectionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={false}
      whileInView={
        reduce
          ? undefined
          : {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.85,
                delay,
                ease: luxuryEase,
              },
            }
      }
      viewport={{ once: true, amount: "some", margin: "120px 0px" }}
      className={cn("relative", className)}
    >
      <div>{children}</div>
    </motion.section>
  );
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  noBlur?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as keyof typeof motion);

  return (
    <MotionTag
      initial={false}
      whileInView={
        reduce
          ? undefined
          : {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.75,
                delay,
                ease: luxuryEase,
              },
            }
      }
      viewport={{ once: true, amount: "some", margin: "100px 0px" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
