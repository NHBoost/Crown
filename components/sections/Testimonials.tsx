"use client";

import { useEffect, useState } from "react";
import { useVisible } from "@/lib/useVisible";
import { cn } from "@/lib/cn";

const testimonials = [
  {
    quote:
      "Crown Agency a multiplié par 3 notre taux de conversion en 4 mois. Une approche rigoureuse, des résultats concrets.",
    author: "Jean-Pierre Moreau",
    role: "CEO, TechScale SAS",
  },
  {
    quote:
      "Enfin une agence qui parle business avant de parler canaux. Notre coût d'acquisition a chuté de 40% dès le premier trimestre.",
    author: "Laure Fontaine",
    role: "CMO, Nexora Group",
  },
  {
    quote:
      "Le site qu'ils ont créé a transformé notre image. Nos prospects nous perçoivent désormais comme un acteur premium.",
    author: "Marc Dubois",
    role: "Fondateur, Lumina Conseil",
  },
  {
    quote:
      "Réactivité exemplaire, transparence totale et résultats au-delà de nos attentes. Je recommande sans réserve.",
    author: "Sophie Blanchard",
    role: "Directrice Marketing, Filio",
  },
  {
    quote:
      "L'audit a clarifié notre stack en deux semaines. Décisions prises, équipe alignée, on a gagné six mois de réflexion.",
    author: "Antoine Verrier",
    role: "COO, Hexagone Studio",
  },
  {
    quote:
      "Pilotage hebdomadaire, KPI suivis dans Slack, zéro flou. Premier prestataire qui ne fait pas de blabla — que des chiffres.",
    author: "Charlotte Lambert",
    role: "Head of Growth, Verso",
  },
  {
    quote:
      "Nos leads qualifiés ont doublé en six semaines. L'équipe a pris notre projet à bras-le-corps comme si c'était le leur.",
    author: "Romain Caillaud",
    role: "Fondateur, Atelier Maison",
  },
  {
    quote:
      "Branding refait, site refondu, acquisition relancée — tout en quatre mois. La cohérence stratégique a fait toute la différence.",
    author: "Élodie Reynaud",
    role: "Directrice Générale, Capsule",
  },
];

export function Testimonials() {
  const [ref, visible] = useVisible<HTMLElement>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, []);

  const t = testimonials[current];

  return (
    <section
      ref={ref}
      className="border-t border-noir/5 bg-fond px-6 py-[50px] sm:px-14"
    >
      <div className="mx-auto max-w-[900px] text-center">
        <div
          className={cn(
            "mb-14 flex items-center justify-center gap-[10px] transition-opacity duration-500",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="h-px flex-1 bg-noir/10" />
          <span className="whitespace-nowrap font-sans text-[0.68rem] uppercase tracking-[0.2em] text-or">
            Témoignages Clients
          </span>
          <span className="h-px flex-1 bg-noir/10" />
        </div>

        <div className="relative min-h-[200px] overflow-hidden">
          <div
            key={current}
            style={{ animation: "heroIn 0.5s ease both" }}
          >
            <div className="mb-6 font-serif text-5xl leading-none text-or opacity-50">
              &ldquo;
            </div>
            <p className="mb-10 font-serif text-[clamp(1.2rem,2.2vw,1.55rem)] font-normal italic leading-[1.55] text-noir">
              {t.quote}
            </p>
            <div className="mx-auto mb-5 h-px w-8 bg-or" />
            <div className="mb-1 font-sans text-[0.85rem] font-normal text-noir">
              {t.author}
            </div>
            <div className="font-sans text-[0.72rem] tracking-[0.05em] text-noir/45">
              {t.role}
            </div>
          </div>
        </div>

        <div className="mt-11 flex justify-center gap-[10px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Témoignage ${i + 1}`}
              onClick={() => setCurrent(i)}
              className="h-[6px] border-none p-0 transition-all duration-300"
              style={{
                width: i === current ? "28px" : "6px",
                background: i === current ? "#C9A84C" : "rgba(26,26,26,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
