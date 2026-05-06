"use client";

import Link from "next/link";
import { useState } from "react";
import { useVisible } from "@/lib/useVisible";
import { cn } from "@/lib/cn";

const services = [
  {
    num: "01",
    tag: "Acquisition",
    title: "Stratégie d'Acquisition",
    desc: "SEO, SEA, Social Ads, Email — stratégies sur-mesure pour attirer des prospects qualifiés et rentables.",
    tags: ["SEO", "Google Ads", "Meta Ads"],
  },
  {
    num: "02",
    tag: "Web",
    title: "Création de Sites Web",
    desc: "Design premium et développement performant pour des sites vitrine, landing pages et e-commerces qui convertissent.",
    tags: ["Next.js", "UX/UI", "E-commerce"],
  },
  {
    num: "03",
    tag: "Social",
    title: "Réseaux Sociaux",
    desc: "Création de contenu, community management et campagnes paid orchestrées pour servir vos objectifs business.",
    tags: ["LinkedIn", "Instagram", "TikTok"],
  },
  {
    num: "04",
    tag: "CRO",
    title: "Optimisation de Conversion",
    desc: "A/B testing, heatmaps et analyse comportementale pour transformer le trafic existant en revenu.",
    tags: ["CRO", "Analytics", "A/B Testing"],
  },
  {
    num: "05",
    tag: "Brand",
    title: "Branding & Identité",
    desc: "Identités distinctives et systèmes visuels cohérents qui font tenir votre marque dix ans, pas dix mois.",
    tags: ["Logo", "Charte", "UI Kit"],
  },
  {
    num: "06",
    tag: "Audit",
    title: "Conseil & Audit",
    desc: "Diagnostic complet de votre stack digitale avec recommandations priorisées et budget chiffré.",
    tags: ["Audit", "Roadmap", "KPIs"],
  },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden
      className={cn("inline-block shrink-0", className)}
    >
      <path
        d="M9 1l4 4-4 4M0 5h13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Services() {
  const [ref, visible] = useVisible<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden border-t border-noir/5 bg-fond px-6 py-[50px] sm:px-14"
    >
      {/* Atmosphere — subtle gold mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 50% 60% at 0% 0%, rgba(201,168,76,0.08), transparent 65%)",
            "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(201,168,76,0.06), transparent 70%)",
          ].join(", "),
        }}
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,26,26,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        {/* ── Header asymétrique ── */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <div
              className={cn(
                "mb-4 flex items-center gap-3 transition-opacity duration-500",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-or">
                Nos Services
              </span>
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-noir/30">
                · 06 modules
              </span>
            </div>
            <h2
              className={cn(
                "max-w-[640px] font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.05] text-noir transition-all duration-500 delay-100",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              )}
            >
              Une offre complète
              <br />
              pour votre{" "}
              <span className="italic text-or">croissance.</span>
            </h2>
          </div>
          <div
            className={cn(
              "flex flex-col gap-6 transition-opacity duration-500 delay-200",
              visible ? "opacity-100" : "opacity-0"
            )}
          >
            <p className="max-w-[44ch] font-sans text-[1rem] font-light leading-[1.7] text-noir/60">
              De l&apos;acquisition à la conversion, du branding à l&apos;audit
              — six modules pensés pour s&apos;assembler ou se prendre
              séparément, selon votre stade de maturité.
            </p>
            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-3 font-sans text-[0.78rem] font-medium uppercase tracking-[0.14em] text-noir transition-colors duration-200 hover:text-or"
            >
              <span>Tout explorer en détail</span>
              <Arrow className="text-or transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Grille 6 services ── */}
        <div className="grid gap-px bg-noir/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isHover = hovered === i;
            return (
              <article
                key={s.num}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "group relative flex flex-col bg-blanc px-7 py-9 transition-all duration-500 ease-out",
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{
                  transitionDelay: `${0.05 * i}s`,
                }}
              >
                {/* Top accent — draws on hover */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-[2px] origin-left transform bg-or transition-transform duration-500 ease-out",
                    isHover ? "scale-x-100" : "scale-x-0"
                  )}
                />
                {/* Ghost number — bottom-right of card */}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute right-3 bottom-3 select-none font-serif text-[5.5rem] leading-none transition-colors duration-500",
                    isHover ? "text-or/[0.08]" : "text-or/[0.03]"
                  )}
                >
                  {s.num}
                </span>

                {/* Top row : counter + tag + arrow */}
                <header className="relative mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-or">
                      {s.num}
                    </span>
                    <span className="h-[3px] w-[3px] rounded-full bg-or/60" />
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-noir/45">
                      {s.tag}
                    </span>
                  </div>
                  <Arrow
                    className={cn(
                      "text-or transition-all duration-300 ease-out",
                      isHover
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-1 opacity-0"
                    )}
                  />
                </header>

                {/* Title */}
                <h3 className="relative mb-3 font-serif text-[1.35rem] leading-[1.2] text-noir">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="relative mb-7 max-w-[42ch] flex-1 font-sans text-[0.88rem] font-light leading-[1.65] text-noir/60">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="relative flex flex-wrap gap-[6px] border-t border-noir/[0.08] pt-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "border px-[10px] py-[3px] font-mono text-[0.58rem] uppercase tracking-[0.1em] transition-all duration-300",
                        isHover
                          ? "border-or/40 text-or"
                          : "border-noir/10 text-noir/45"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Footer line ── */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-noir/8 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-noir/45">
            <span className="text-or">●</span> 06 / 06 modules · Scope défini ·
            Prix fixe
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-sans text-[0.78rem] font-medium uppercase tracking-[0.14em] text-noir transition-colors duration-200 hover:text-or"
          >
            <span>Discuter d&apos;un projet</span>
            <Arrow className="text-or transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
