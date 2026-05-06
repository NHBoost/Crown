"use client";

import Link from "next/link";
import { BrandLaptop } from "@/components/mockups/BrandLaptop";
import { BrandPhone } from "@/components/mockups/BrandPhone";
import { BrandStrip } from "@/components/ui/BrandStrip";

export function ServicesHero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-blanc px-6 pt-28 sm:px-14 sm:pt-[100px]">
      {/* Dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,26,26,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 60% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 60% 40%, black 30%, transparent 80%)",
        }}
      />
      {/* Gold ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute h-[600px] w-[600px]"
        style={{
          top: "10%",
          right: "20%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Main grid */}
      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-10 [&>*]:min-w-0 lg:grid-cols-2 lg:gap-16">
        {/* LEFT */}
        <div className="relative">
          <div
            className="mb-10 inline-flex items-center gap-2 border border-or/35 px-4 py-[6px]"
            style={{ animation: "heroIn 0.6s ease both" }}
          >
            <span
              className="h-[5px] w-[5px] rounded-full bg-or"
              style={{ animation: "pulseDot 2s infinite" }}
            />
            <span className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-or">
              Services · 6 modules
            </span>
          </div>

          <h1
            className="mb-6 max-w-[580px] font-serif text-[clamp(2.4rem,4.2vw,4rem)] font-normal leading-[1.1] text-noir"
            style={{ animation: "heroIn 0.7s ease 0.1s both" }}
          >
            Une expertise{" "}
            <em className="not-italic italic text-or">taillée</em> pour chaque
            marque.
          </h1>

          <p
            className="mb-11 max-w-[480px] font-sans text-base font-light leading-[1.75] text-noir/65"
            style={{ animation: "heroIn 0.7s ease 0.2s both" }}
          >
            De l&apos;acquisition à la création de votre identité — six domaines
            complémentaires pour activer chaque levier de croissance avec
            méthode et constance.
          </p>

          <div
            className="flex flex-wrap gap-3"
            style={{ animation: "heroIn 0.7s ease 0.3s both" }}
          >
            <Link
              href="#services"
              className="inline-flex items-center justify-center bg-or px-9 py-4 font-sans text-[0.78rem] font-medium uppercase tracking-[0.1em] text-blanc transition-all duration-250 hover:bg-or-light"
              style={{ boxShadow: "0 8px 32px rgba(201,168,76,0.28)" }}
            >
              Voir les services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-noir/20 bg-transparent px-8 py-4 font-sans text-[0.78rem] font-light uppercase tracking-[0.1em] text-noir/65 transition-colors duration-250 hover:border-or hover:text-or"
            >
              Discuter d&apos;un projet
            </Link>
          </div>

        </div>

        {/* RIGHT — brand guidelines mockup */}
        <div
          className="relative hidden min-h-[460px] items-end justify-center lg:flex"
          style={{ animation: "slideInRight 0.9s ease 0.3s both" }}
        >
          <BrandLaptop />
          <BrandPhone />
        </div>
      </div>

      {/* Trust strip */}
      <div
        className="relative mx-auto mt-16 w-full max-w-[1280px] pb-14"
        style={{ animation: "heroIn 0.7s ease 0.6s both" }}
      >
        <BrandStrip />
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2">
        <div
          className="h-10 w-px"
          style={{
            background: "linear-gradient(to bottom, #C9A84C, transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
