"use client";

import Link from "next/link";
import { useState } from "react";
import { useVisible } from "@/lib/useVisible";
import { cn } from "@/lib/cn";

const services = [
  {
    num: "01",
    title: "Stratégie d'Acquisition",
    desc: "SEO, SEA, Social Ads, Email — stratégies sur-mesure pour attirer des prospects qualifiés.",
    tags: ["SEO", "Google Ads", "Meta Ads"],
  },
  {
    num: "02",
    title: "Création de Sites Web",
    desc: "Design premium et développement performant pour des sites vitrine, landing pages et e-commerce.",
    tags: ["Next.js", "UX/UI", "E-commerce"],
  },
  {
    num: "03",
    title: "Gestion des Réseaux Sociaux",
    desc: "Création de contenu, community management et campagnes publicitaires ciblées.",
    tags: ["LinkedIn", "Instagram", "TikTok"],
  },
  {
    num: "04",
    title: "Optimisation de Conversion",
    desc: "A/B testing, analyse des parcours et optimisation des tunnels de vente pour maximiser le ROI.",
    tags: ["CRO", "Analytics", "A/B Testing"],
  },
  {
    num: "05",
    title: "Branding & Identité",
    desc: "Identités visuelles cohérentes et mémorables qui reflètent les valeurs de votre entreprise.",
    tags: ["Logo", "Charte Graphique", "Brand"],
  },
  {
    num: "06",
    title: "Conseil & Audit",
    desc: "Diagnostic complet de votre présence digitale avec des recommandations actionnables.",
    tags: ["Audit", "Roadmap", "KPIs"],
  },
];

export function Services() {
  const [ref, visible] = useVisible<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="scroll-mt-24 border-t border-noir/5 bg-fond px-6 py-[50px] sm:px-14"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-[72px] flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <div
              className={cn(
                "mb-[14px] flex items-center gap-[10px] transition-all duration-500",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="h-px w-8 bg-or" />
              <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-or">
                Nos Services
              </span>
            </div>
            <h2
              className={cn(
                "max-w-[520px] font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal leading-[1.2] text-noir transition-all duration-500 delay-100",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
            >
              Une offre complète pour votre croissance
            </h2>
          </div>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center border border-or bg-transparent px-7 py-3 font-sans text-[0.72rem] font-normal uppercase tracking-[0.1em] text-or transition-all duration-250 hover:bg-or hover:text-blanc",
              visible ? "opacity-100" : "opacity-0"
            )}
          >
            Discuter de votre projet
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px bg-noir/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isHover = hovered === i;
            return (
              <div
                key={s.num}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "group relative cursor-pointer px-10 py-11 transition-[background,transform,opacity] duration-500",
                  isHover ? "bg-blanc" : "bg-fond",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${0.04 * i}s` }}
              >
                {/* Top gold border on hover */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-[2px] origin-center bg-or transition-transform duration-300",
                    isHover ? "scale-x-100" : "scale-x-0"
                  )}
                />
                <div className="mb-5 font-serif text-[0.7rem] tracking-[0.1em] text-or">
                  {s.num}
                </div>
                <h3 className="mb-3 font-serif text-[1.15rem] font-normal leading-[1.3] text-noir">
                  {s.title}
                </h3>
                <p className="mb-6 font-sans text-[0.82rem] font-light leading-[1.7] text-noir/55">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-[6px]">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "border px-[9px] py-[3px] font-sans text-[0.62rem] uppercase tracking-[0.06em] transition-all duration-250",
                        isHover
                          ? "border-or/40 text-or"
                          : "border-noir/10 text-noir/45"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
