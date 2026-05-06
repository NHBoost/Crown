import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverted";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-sans font-medium tracking-wide transition-[background,color,opacity,transform] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-or focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-or text-noir hover:bg-[color-mix(in_oklab,var(--color-or),black_8%)]",
  secondary:
    "bg-transparent text-noir border border-noir/80 hover:bg-noir hover:text-blanc",
  inverted:
    "bg-blanc text-noir hover:bg-or",
  ghost:
    "bg-transparent text-inherit hover:text-or",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-5 text-xs",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-[0.95rem]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  arrow?: boolean;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function Button(props: ButtonProps | AnchorProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    arrow = false,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span
          aria-hidden
          className="relative block h-[1px] w-4 bg-current transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
          <span className="absolute right-0 top-1/2 block h-[1px] w-2 origin-right -translate-y-1/2 rotate-45 bg-current" />
          <span className="absolute right-0 top-1/2 block h-[1px] w-2 origin-right -translate-y-1/2 -rotate-45 bg-current" />
        </span>
      ) : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
