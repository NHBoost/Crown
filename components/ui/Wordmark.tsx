import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, { crown: string; agency: string }> = {
  sm: { crown: "text-[0.78rem]", agency: "text-[0.5rem]" },
  md: { crown: "text-base", agency: "text-[0.62rem]" },
  lg: { crown: "text-xl", agency: "text-[0.78rem]" },
  xl: { crown: "text-3xl", agency: "text-[1.1rem]" },
};

interface WordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Size;
  invert?: boolean;
}

export function Wordmark({
  size = "md",
  invert = false,
  className,
  ...props
}: WordmarkProps) {
  const s = sizes[size];
  return (
    <span
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label="Crown Agency"
      {...props}
    >
      <span
        className={cn(
          "font-serif font-normal uppercase tracking-[var(--tracking-crown)]",
          invert ? "text-blanc" : "text-noir",
          s.crown
        )}
      >
        CROWN
      </span>
      <span
        className={cn(
          "font-serif font-normal uppercase mt-[2px] text-or tracking-[var(--tracking-agency)]",
          s.agency
        )}
      >
        AGENCY
      </span>
    </span>
  );
}
