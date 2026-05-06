"use client";

import Link from "next/link";
import { useVisible } from "@/lib/useVisible";
import { cn } from "@/lib/cn";

export function CtaBand() {
  const [ref, visible] = useVisible<HTMLElement>();

  return (
    <section ref={ref} className="bg-noir px-6 py-[50px] sm:px-14">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div
          className={cn(
            "transition-all duration-500",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          <h2 className="mb-3 font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-[1.2] text-blanc">
            Prêt à passer à la vitesse supérieure&nbsp;?
          </h2>
          <p className="max-w-[440px] font-sans text-[0.88rem] font-light text-blanc/45">
            Premier échange gratuit et sans engagement. Réponse sous 24h.
          </p>
        </div>
        <div
          className={cn(
            "flex flex-wrap gap-[14px] transition-all duration-500 delay-150",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap bg-or px-10 py-4 font-sans text-[0.78rem] font-medium uppercase tracking-[0.1em] text-noir transition-colors duration-250 hover:bg-or-light"
          >
            Démarrer maintenant
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center whitespace-nowrap border border-blanc/20 bg-transparent px-8 py-4 font-sans text-[0.78rem] font-light uppercase tracking-[0.1em] text-blanc/70 transition-colors duration-250 hover:border-or"
          >
            Voir nos services
          </Link>
        </div>
      </div>
    </section>
  );
}
