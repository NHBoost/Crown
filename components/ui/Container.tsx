import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg" | "full";

const sizes: Record<Size, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  full: "max-w-none",
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
}

export function Container({
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-10 lg:px-16",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
