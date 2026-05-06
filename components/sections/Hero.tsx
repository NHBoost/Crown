"use client";

import Link from "next/link";
import { LaptopMockup } from "@/components/mockups/LaptopMockup";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { BrandStrip } from "@/components/ui/BrandStrip";

function Chevron({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      width="5"
      height="8"
      viewBox="0 0 5 8"
      aria-hidden
      className={`inline-block shrink-0 ${flip ? "scale-x-[-1]" : ""} ${className}`}
    >
      <path d="M0 0 L5 4 L0 8 Z" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-blanc px-6 pt-32 sm:px-14 sm:pt-[120px]">
      {/* ── Atmosphere: layered gradients + grid ── */}
      {/* Warm cream wash from nav */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[280px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(246,242,233,0.7), transparent 100%)",
        }}
      />
      {/* Gold mesh hotspots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 50% 60% at 18% 28%, rgba(201,168,76,0.13), transparent 65%)",
            "radial-gradient(ellipse 60% 70% at 78% 65%, rgba(201,168,76,0.10), transparent 70%)",
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(26,26,26,0.04), transparent 75%)",
          ].join(", "),
        }}
      />
      {/* Dot grid masked to center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,26,26,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 60% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 60% 40%, black 30%, transparent 80%)",
        }}
      />

      {/* ── Main grid ── */}
      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-10 [&>*]:min-w-0 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* LEFT — copy */}
        <div className="relative">
          {/* Location pill */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-or/35 bg-blanc/60 px-3 py-[6px] backdrop-blur-md"
            style={{ animation: "heroIn 0.6s ease both" }}
          >
            <span className="relative flex h-[6px] w-[6px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-or opacity-60" />
              <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-or" />
            </span>
            <span className="font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-or">
              Agence digitale à Bruxelles
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-7 max-w-[680px] font-serif text-[clamp(2.9rem,5.6vw,5rem)] font-normal leading-[1.05] text-noir"
            style={{ animation: "heroIn 0.7s ease 0.1s both" }}
          >
            Nous créons des expériences digitales qui{" "}
            <em className="italic text-or">propulsent votre croissance.</em>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10 max-w-[540px] font-sans text-[1.15rem] font-light leading-[1.7] text-noir/65"
            style={{ animation: "heroIn 0.7s ease 0.2s both" }}
          >
            Stratégie, design et technologie au service de la performance. Nous
            transformons vos idées en résultats mesurables.
          </p>

          {/* CTAs */}
          <div
            className="mb-10 flex flex-wrap items-center gap-3"
            style={{ animation: "heroIn 0.7s ease 0.3s both" }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-noir py-[14px] pl-5 pr-7 font-sans text-[0.78rem] font-medium uppercase tracking-[0.12em] text-blanc transition-[transform,background] duration-300 hover:-translate-y-[1px] hover:bg-noir/90"
              style={{
                boxShadow:
                  "0 14px 40px -16px rgba(26,26,26,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-[-130%] w-1/2 skew-x-[-22deg] bg-or/30 transition-transform duration-[900ms] ease-out group-hover:translate-x-[320%]"
              />
              <Chevron className="relative text-or transition-transform duration-300 group-hover:translate-x-[3px]" />
              <span className="relative">Démarrer un projet</span>
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-noir/15 bg-blanc/40 py-[14px] px-6 font-sans text-[0.78rem] font-medium uppercase tracking-[0.12em] text-noir/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-[1px] hover:border-noir/40 hover:text-noir"
            >
              <span>Voir nos services</span>
              <Chevron flip className="text-or rotate-180 transition-transform duration-300 group-hover:translate-x-[3px]" />
            </Link>
          </div>

        </div>

        {/* RIGHT — devices with floating tags */}
        <div
          className="relative hidden min-h-[460px] items-end justify-center lg:flex"
          style={{ animation: "slideInRight 0.9s ease 0.3s both" }}
        >
          {/* Soft gold spotlight behind */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(201,168,76,0.16) 0%, transparent 60%)",
            }}
          />

          {/* Floating tag — bottom-left, "performance" */}
          <div
            className="absolute -left-2 bottom-16 z-[3] flex flex-col gap-[2px] rounded-2xl border border-noir/10 bg-blanc/85 px-4 py-[10px] backdrop-blur-md"
            style={{
              boxShadow: "0 14px 36px -18px rgba(26,26,26,0.3)",
              animation: "floatY 5.5s ease-in-out 0.8s infinite",
            }}
          >
            <span className="font-mono text-[0.5rem] uppercase tracking-[0.16em] text-noir/45">
              ROAS · 30j
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-[1.1rem] text-noir">6.4×</span>
              <span className="font-sans text-[0.55rem] text-or">+21%</span>
            </div>
          </div>

          {/* Mockups */}
          <LaptopMockup />
          <PhoneMockup />
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div
        className="relative mx-auto mt-16 w-full max-w-[1320px] pb-14"
        style={{ animation: "heroIn 0.7s ease 0.6s both" }}
      >
        <BrandStrip />
      </div>

      {/* ── Scroll indicator with label ── */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-noir/35">
          Explorer
        </span>
        <span
          className="block h-9 w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)",
            animation: "scrollLine 2.4s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
