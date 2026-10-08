"use client";

import { Link } from "@/i18n/routing";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconArrowRight, IconArrowUpRight } from "@/components/ui/icons";

type Variant = "primary" | "secondary" | "dark" | "ghost" | "text";
type Size = "md" | "lg";

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: "arrow" | "external" | "none";
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type ButtonAsLink = {
  href: string;
  ariaLabel?: string;
};

type ButtonAsButton = {
  href?: undefined;
};

export type ButtonProps = ButtonBaseProps & (ButtonAsLink | ButtonAsButton);

const variantClasses: Record<Variant, string> = {
  primary:
    "text-white shadow-cta [background:linear-gradient(135deg,rgb(var(--terracotta-500)),rgb(var(--mango-500)))] hover:shadow-cta-hover",
  secondary:
    "border-2 border-terracotta-500 text-terracotta-700 bg-transparent hover:bg-terracotta-500/5",
  dark:
    "text-white shadow-card [background:linear-gradient(135deg,rgb(var(--forest-700)),rgb(var(--indigo-700)))] hover:shadow-cta-hover",
  ghost:
    "bg-cream-50 text-charcoal-900 border-2 border-transparent hover:text-charcoal-900 relative isolate",
  text:
    "bg-transparent text-terracotta-600 p-0 shadow-none hover:text-terracotta-700 underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon = "arrow",
    className,
    children,
    disabled = false,
    type = "button",
    onClick,
  } = props;

  const reduce = useReducedMotion();

  const innerClasses = cn(
    "group relative inline-flex items-center justify-center gap-2.5 rounded-soft font-sans font-bold uppercase tracking-[0.08em] whitespace-nowrap transition ease-spring will-change-transform select-none",
    variantClasses[variant],
    variant !== "text" && sizeClasses[size],
    disabled && "opacity-50 pointer-events-none cursor-not-allowed",
    className,
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {icon === "arrow" && (
        <IconArrowRight
          className="relative z-10 transition-transform duration-300 ease-spring group-hover:translate-x-1"
          size={size === "lg" ? 20 : 18}
        />
      )}
      {icon === "external" && (
        <IconArrowUpRight
          className="relative z-10 transition-transform duration-300 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          size={size === "lg" ? 18 : 16}
        />
      )}
      {variant === "ghost" && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-soft bg-woven opacity-30 group-hover:opacity-50 transition-opacity"
        />
      )}
    </>
  );

  const commonMotionProps = reduce
    ? {
        whileHover: { opacity: 0.95 },
        whileTap: { opacity: 0.9 },
      }
    : {
        whileHover: { y: -4, scale: 1.03 },
        whileTap: { scale: 0.97, y: 0 },
        transition: { type: "spring", stiffness: 340, damping: 22 } as any,
      };

  if (props.href) {
    const MotionLink = motion(Link);
    return (
      <MotionLink
        href={props.href}
        className={innerClasses}
        aria-label={(props as ButtonAsLink).ariaLabel ?? undefined}
        {...commonMotionProps}
      >
        {inner}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={innerClasses}
      {...commonMotionProps}
    >
      {inner}
    </motion.button>
  );
}
