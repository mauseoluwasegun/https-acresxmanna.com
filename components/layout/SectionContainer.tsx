import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  as?: T;
  size?: "default" | "wide" | "narrow";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SectionContainer<T extends ElementType = "div">({
  children,
  className,
  as,
  size = "default",
  ...rest
}: SectionContainerProps<T>) {
  const widths = {
    default: "max-w-[1400px]",
    wide: "max-w-[1600px]",
    narrow: "max-w-[1100px]",
  };
  const Tag: ElementType = as ?? "div";
  const Comp = Tag as any;
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        widths[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
