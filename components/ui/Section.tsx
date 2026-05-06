import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "light" | "soft" | "dark";
type Spacing = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  light: "bg-blanc text-noir",
  soft: "bg-fond text-noir",
  dark: "bg-noir text-blanc",
};

const spacings: Record<Spacing, string> = {
  sm: "py-16 sm:py-20 lg:py-24",
  md: "py-24 sm:py-32 lg:py-40",
  lg: "py-32 sm:py-44 lg:py-56",
};

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant;
  spacing?: Spacing;
  as?: "section" | "div" | "article";
}

export function Section({
  variant = "light",
  spacing = "md",
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "relative w-full",
        variants[variant],
        spacings[spacing],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
