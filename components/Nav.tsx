"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/about" },
  { label: "Ressources", href: "/ressources" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.6v1.64h.05c.5-.9 1.74-1.85 3.58-1.85 3.83 0 4.54 2.37 4.54 5.46V21h-4v-5.47c0-1.3 0-2.97-1.9-2.97-1.9 0-2.19 1.4-2.19 2.88V21h-3.98z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-7H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/3221234567",
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.57-.48-.5-.66-.5h-.57c-.2 0-.51.07-.78.37-.27.3-1.03 1-1.03 2.45s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.13-.27-.2-.57-.35M12 22c-1.7 0-3.34-.43-4.78-1.27L3 22l1.31-4.07A9.96 9.96 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden fill="currentColor">
        <path d="M18.9 2H22l-7.5 8.58L23 22h-6.78l-5.3-6.93L4.82 22H1.7l8.02-9.17L1 2h6.94l4.8 6.34zm-1.18 18h1.7L6.36 3.88H4.54z" />
      </svg>
    ),
  },
];

function Chevron({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      width="5"
      height="8"
      viewBox="0 0 5 8"
      aria-hidden
      className={cn("inline-block shrink-0", flip && "scale-x-[-1]", className)}
    >
      <path d="M0 0 L5 4 L0 8 Z" fill="currentColor" />
    </svg>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const navListRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const activeHref = links.find((l) => isActive(l.href))?.href ?? null;

  useEffect(() => {
    const target = hoveredHref ?? activeHref;
    if (!target || !navListRef.current) {
      setIndicator((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const el = linkRefs.current[target];
    if (!el) {
      setIndicator((s) => ({ ...s, opacity: 0 }));
      return;
    }
    const parentRect = navListRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, [hoveredHref, activeHref, scrolled, pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background,backdrop-filter] duration-500 ease-out",
          scrolled ? "py-3 backdrop-blur-2xl" : "py-4"
        )}
        style={{
          background: scrolled
            ? "rgba(246,242,233,0.85)"
            : "rgba(246,242,233,0.55)",
          animation: "navIn 0.7s cubic-bezier(0.22,1,0.36,1) both",
          boxShadow: scrolled
            ? "0 12px 36px -20px rgba(26,26,26,0.18), inset 0 -1px 0 rgba(26,26,26,0.06)"
            : "none",
        }}
      >
        {/* Hairline gold light at top edge */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.35) 50%, transparent 100%)",
          }}
        />

        <style>{`
          @keyframes navIn {
            from { opacity: 0; transform: translateY(-12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes navItemIn {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes drawerLink {
            from { opacity: 0; transform: translateX(20px); }
            to   { opacity: 1; transform: translateX(0); }
          }
        `}</style>

        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-10">
          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label="Crown Agency — Accueil"
            className="group relative shrink-0"
            onMouseEnter={() => setHoveredHref(null)}
            style={{ animation: "navItemIn 0.6s ease-out 0.1s both" }}
          >
            <Image
              src="/logo.png"
              alt="Crown Agency"
              width={586}
              height={338}
              priority
              className={cn(
                "w-auto transition-[height] duration-500 ease-out",
                scrolled ? "h-16" : "h-20"
              )}
            />
          </Link>

          {/* ── Center pill with nav links ── */}
          <nav
            className="hidden lg:block"
            aria-label="Principale"
            onMouseLeave={() => setHoveredHref(null)}
          >
            <div
              ref={navListRef}
              className="relative flex items-center rounded-full p-[5px]"
              style={{
                background: "rgba(26,26,26,0.06)",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "inset 0 0 0 1px rgba(26,26,26,0.04), inset 0 1px 0 rgba(255,255,255,0.5)",
                animation: "navItemIn 0.6s ease-out 0.2s both",
              }}
            >
              {/* Magic sliding pill indicator */}
              <span
                aria-hidden
                className="pointer-events-none absolute top-[5px] bottom-[5px] rounded-full transition-[transform,width,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(${indicator.left}px)`,
                  width: `${indicator.width}px`,
                  opacity: indicator.opacity,
                  background: "rgba(255,255,255,0.92)",
                  boxShadow:
                    "0 1px 2px rgba(26,26,26,0.06), 0 4px 14px -8px rgba(26,26,26,0.18)",
                }}
              />

              {links.map((l, i) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    ref={(el) => {
                      linkRefs.current[l.href] = el;
                    }}
                    onMouseEnter={() => setHoveredHref(l.href)}
                    className={cn(
                      "relative z-[1] px-5 py-[10px] font-sans text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-200 ease-out",
                      active ? "text-noir" : "text-noir/60 hover:text-noir"
                    )}
                    style={
                      {
                        animation: `navItemIn 0.55s ease-out ${0.25 + i * 0.04}s both`,
                      } as CSSProperties
                    }
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* ── Right cluster ── */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Socials (desktop only, hidden < xl) */}
            <div
              className="hidden items-center gap-1.5 xl:flex"
              style={{ animation: "navItemIn 0.55s ease-out 0.4s both" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-noir/8 bg-blanc/40 text-noir/55 transition-all duration-250 hover:-translate-y-[1px] hover:border-or/40 hover:bg-or/10 hover:text-or"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Secondary text link with chevrons */}
            <a
              href="tel:+3221234567"
              className="group hidden items-center gap-2 rounded-full px-4 py-[10px] font-sans text-[0.7rem] font-medium uppercase tracking-[0.12em] text-noir/70 transition-colors duration-250 hover:text-noir md:inline-flex"
              style={{ animation: "navItemIn 0.55s ease-out 0.45s both" }}
            >
              <Chevron className="text-or transition-transform duration-300 group-hover:translate-x-[2px]" />
              <span>Appeler</span>
              <Chevron flip className="text-or transition-transform duration-300 group-hover:-translate-x-[2px]" />
            </a>

            {/* Primary CTA pill */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-noir py-[10px] pl-4 pr-5 font-sans text-[0.72rem] font-medium uppercase tracking-[0.12em] text-blanc transition-[transform,box-shadow,background] duration-300 hover:-translate-y-[1px] hover:bg-noir/90"
              style={{
                boxShadow:
                  "0 8px 24px -8px rgba(26,26,26,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
                animation: "navItemIn 0.55s ease-out 0.5s both",
              }}
            >
              {/* Sheen */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-[-130%] w-1/2 skew-x-[-22deg] bg-or/30 transition-transform duration-[900ms] ease-out group-hover:translate-x-[320%]"
              />
              <Chevron className="relative text-or transition-transform duration-300 group-hover:translate-x-[2px]" />
              <span className="relative">Démarrer un projet</span>
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-noir/8 bg-blanc/40 lg:hidden"
            >
              <span className="relative h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-[3px] block h-px w-5 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open
                      ? "translate-y-[5px] rotate-45 bg-or"
                      : "bg-noir"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[11px] block h-px transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open
                      ? "w-5 -translate-y-[3px] -rotate-45 bg-or"
                      : "w-3.5 bg-noir"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer (cinematic dark) ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-[opacity,backdrop-filter] duration-500 ease-out",
          open
            ? "pointer-events-auto opacity-100 backdrop-blur-2xl"
            : "pointer-events-none opacity-0 backdrop-blur-0"
        )}
        style={{
          background: open
            ? "linear-gradient(135deg, rgba(20,20,20,0.97) 0%, rgba(36,34,28,0.97) 100%)"
            : "transparent",
        }}
      >
        <div className="flex h-full w-full flex-col px-6 pt-24 pb-10 sm:px-10">
          <div
            className="mb-10 inline-flex w-fit items-center gap-2 rounded-full border border-or/30 px-3 py-[6px]"
            style={{
              animation: open ? "drawerLink 0.5s ease-out 0.05s both" : "none",
            }}
          >
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-or opacity-60" />
              <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-or" />
            </span>
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-or">
              Disponible cette semaine
            </span>
          </div>

          <nav className="flex flex-1 flex-col" aria-label="Mobile">
            {links.map((l, i) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group relative flex items-baseline justify-between border-b border-blanc/8 py-5 transition-colors",
                    active ? "text-or" : "text-blanc hover:text-or"
                  )}
                  style={{
                    animation: open
                      ? `drawerLink 0.55s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.06}s both`
                      : "none",
                  }}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] opacity-50">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-[2rem] leading-none">
                      {l.label}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "transition-transform duration-300",
                      active ? "translate-x-2" : "group-hover:translate-x-2"
                    )}
                  >
                    <Chevron className="h-3 w-2 text-or" />
                  </span>
                </Link>
              );
            })}
          </nav>

          <div
            className="mt-10 space-y-5"
            style={{
              animation: open ? "drawerLink 0.5s ease-out 0.5s both" : "none",
            }}
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-or px-6 py-4 font-sans text-[0.78rem] font-medium uppercase tracking-[0.12em] text-noir"
              style={{ boxShadow: "0 12px 36px rgba(201,168,76,0.32)" }}
            >
              <span className="flex items-center gap-2">
                <Chevron className="text-noir" />
                <span>Démarrer un projet</span>
              </span>
              <span aria-hidden className="text-base">→</span>
            </Link>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-blanc/10 bg-blanc/[0.04] text-blanc/65 transition-colors hover:border-or/50 hover:text-or"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-blanc/35">
                Crown Agency · 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
