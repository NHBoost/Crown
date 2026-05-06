import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Level = 1 | 2 | 3 | 4;
type Tag = "h1" | "h2" | "h3" | "h4";

const sizes: Record<Level, string> = {
  1: "text-[clamp(3rem,7vw,6rem)] leading-[0.95]",
  2: "text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]",
  3: "text-[clamp(1.5rem,3vw,2.25rem)] leading-tight",
  4: "text-xl sm:text-2xl leading-snug",
};

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  as?: Tag;
}

export function Heading({
  level = 2,
  as,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag: Tag = as ?? (`h${level}` as Tag);
  const classes = cn(
    "font-serif font-normal text-balance",
    sizes[level],
    className
  );
  const common = { className: classes, ...props, children };
  switch (Tag) {
    case "h1":
      return <h1 {...common} />;
    case "h2":
      return <h2 {...common} />;
    case "h3":
      return <h3 {...common} />;
    case "h4":
      return <h4 {...common} />;
  }
}

export function Eyebrow({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-or",
        className
      )}
      {...props}
    >
      <span aria-hidden className="h-px w-8 bg-or" />
      {children}
    </span>
  );
}
