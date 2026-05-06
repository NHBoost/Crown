"use client";

import { useVisible } from "@/lib/useVisible";
import { cn } from "@/lib/cn";

type Service = {
  n: string;
  tag: string;
  title: string;
  intro: string;
  body: string;
  metric: { label: string; value: string; period: string };
  deliverables: [string, string][];
  cta: string;
  image: { src: string; alt: string };
};

const services: Service[] = [
  {
    n: "01",
    tag: "Acquisition",
    title: "Stratégie d'acquisition",
    intro:
      "Trouver, valider, scaler les canaux qui ramènent vos meilleurs clients.",
    body:
      "Nous auditons votre funnel actuel, identifions vos goulets d'étranglement et construisons une stratégie multi-canale alignée sur votre P&L. SEO, SEA, paid social, email et partnerships — chaque canal est testé en sprints courts, mesuré sur le revenu généré, et scalé une fois la rentabilité prouvée.",
    metric: { label: "ROAS moyen", value: "+187%", period: "sur 12 mois" },
    deliverables: [
      ["Audit complet", "5 jours"],
      ["Roadmap 90 j", "1 sem."],
      ["Dashboard KPI", "Continu"],
    ],
    cta: "Discuter ce module",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=80",
      alt: "Tableau de bord d'analytics montrant la croissance",
    },
  },
  {
    n: "02",
    tag: "Web",
    title: "Création de sites web premium",
    intro:
      "Des expériences digitales rapides, mesurables, conçues pour convertir.",
    body:
      "Nous concevons et développons des sites vitrine, landing pages et e-commerces sur Next.js — performance Lighthouse 95+, Core Web Vitals A+, SEO embarqué dès le premier sprint. Approche component-driven, design system documenté, livraison en 4 à 8 semaines selon la complexité.",
    metric: { label: "Lighthouse", value: "97", period: "perf moyenne" },
    deliverables: [
      ["Wireframes & UI", "2–3 sem."],
      ["Développement", "4–6 sem."],
      ["Mise en prod", "1 sem."],
    ],
    cta: "Voir la méthode",
    image: {
      src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1100&q=80",
      alt: "Code éditeur affichant un projet web",
    },
  },
  {
    n: "03",
    tag: "Social",
    title: "Gestion des réseaux sociaux",
    intro:
      "Du contenu qui sert votre stratégie, pas l'algorithme du jour.",
    body:
      "Création éditoriale, community management et campagnes paid sur LinkedIn, Instagram, TikTok et Meta. Nous bâtissons une ligne éditoriale claire, une grille de publication tenue, et un reporting hebdomadaire qui relie chaque publication à un objectif business — notoriété, lead, conversion.",
    metric: { label: "Engagement", value: "+62%", period: "premier trimestre" },
    deliverables: [
      ["Ligne éditoriale", "1 sem."],
      ["Calendrier mensuel", "Récurrent"],
      ["Reporting GA4", "Hebdo"],
    ],
    cta: "Demander un plan",
    image: {
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1100&q=80",
      alt: "Smartphone affichant des contenus de réseaux sociaux",
    },
  },
  {
    n: "04",
    tag: "CRO",
    title: "Optimisation de conversion",
    intro:
      "Augmenter le revenu sans augmenter le trafic — méthode A/B et données.",
    body:
      "Nous diagnostiquons votre tunnel via heatmaps, session recordings et analyse comportementale, puis nous priorisons les tests à plus fort impact. Chaque hypothèse est validée statistiquement, documentée et industrialisée. ROAS, CVR, AOV — chaque métrique progresse mois après mois.",
    metric: { label: "CVR moyen", value: "×2.8", period: "en 6 mois" },
    deliverables: [
      ["Audit CRO", "2 sem."],
      ["Tests A/B", "Bi-mensuel"],
      ["Documentation", "Récurrent"],
    ],
    cta: "Lancer un audit CRO",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=80",
      alt: "Tableau de bord d'analyse de conversion",
    },
  },
  {
    n: "05",
    tag: "Brand",
    title: "Branding & identité visuelle",
    intro:
      "Une identité distinctive, cohérente, capable de tenir dix ans.",
    body:
      "De la stratégie de marque au système visuel complet : naming, logo, typographie, palette, ton de voix, gabarits print et digital. Nous livrons une charte vivante — pas un PDF qu'on oublie — accompagnée des composants Figma et Tailwind prêts à déployer dans vos produits.",
    metric: { label: "Charte vivante", value: "100+", period: "composants livrés" },
    deliverables: [
      ["Atelier strat.", "1 jour"],
      ["Système visuel", "3–4 sem."],
      ["Charte + UI kit", "2 sem."],
    ],
    cta: "Définir une marque",
    image: {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1100&q=80",
      alt: "Palette de couleurs et échantillons typographiques",
    },
  },
  {
    n: "06",
    tag: "Audit",
    title: "Conseil & audit digital",
    intro:
      "Un diagnostic clair, des recommandations actionnables, sans jargon.",
    body:
      "Pour les équipes qui veulent un regard externe avant un investissement majeur. Nous auditons votre stack, votre acquisition, votre conversion et votre branding ; nous livrons un rapport priorisé en quick-wins et chantiers structurants, avec budget estimé pour chaque ligne.",
    metric: { label: "Délai rapport", value: "10 j", period: "ouvrés max" },
    deliverables: [
      ["Diagnostic 360", "5 jours"],
      ["Rapport & présentation", "3 jours"],
      ["Roadmap chiffrée", "2 jours"],
    ],
    cta: "Demander l'audit",
    image: {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=80",
      alt: "Équipe en réunion stratégique",
    },
  },
];

function ServiceRow({
  service,
  index,
  total,
}: {
  service: Service;
  index: number;
  total: number;
}) {
  const [ref, visible] = useVisible<HTMLElement>(0.15);
  const reverse = index % 2 === 1;

  return (
    <article
      ref={ref}
      className="relative grid grid-cols-1 gap-y-8"
      data-row-reverse={reverse}
    >
      {/* ── Top strip: counter + tag + dividing rule ── */}
      <header
        className={cn(
          "relative flex items-center gap-4 transition-opacity duration-700",
          visible ? "opacity-100" : "opacity-0"
        )}
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-noir/55">
          {service.n}
          <span className="text-noir/25"> / {String(total).padStart(2, "0")}</span>
        </span>
        <span className="relative h-px flex-1 overflow-hidden bg-noir/8">
          <span
            className="absolute inset-y-0 left-0 origin-left bg-or transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: `${((index + 1) / total) * 100}%`,
              transform: visible ? "scaleX(1)" : "scaleX(0)",
            }}
          />
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-or">
          <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-or" />
          {service.tag}
        </span>
      </header>

      {/* ── Main grid: image + copy ── */}
      <div
        className={cn(
          "grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16",
          reverse && "lg:[&>figure]:order-2"
        )}
      >
        {/* Image */}
        <figure
          className={cn(
            "group/img relative overflow-hidden lg:col-span-7 transition-all duration-700 delay-100",
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image.src}
            alt={service.image.alt}
            loading="lazy"
            className="aspect-[5/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover/img:scale-[1.04]"
            style={{ filter: "saturate(0.9) contrast(1.02)" }}
          />
          {/* Editorial duotone wash */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,26,26,0.22) 0%, rgba(26,26,26,0) 38%, rgba(201,168,76,0.16) 100%)",
            }}
          />
          {/* Vignette */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow: "inset 0 0 100px 0 rgba(26,26,26,0.18)",
            }}
          />
          {/* Gold corner brackets — drawn on view */}
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-0 h-px origin-left bg-or transition-transform duration-700 delay-300",
              visible ? "scale-x-100" : "scale-x-0"
            )}
            style={{ width: 56 }}
          />
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-0 w-px origin-top bg-or transition-transform duration-700 delay-300",
              visible ? "scale-y-100" : "scale-y-0"
            )}
            style={{ height: 56 }}
          />
          <span
            aria-hidden
            className={cn(
              "absolute bottom-0 right-0 h-px origin-right bg-or transition-transform duration-700 delay-500",
              visible ? "scale-x-100" : "scale-x-0"
            )}
            style={{ width: 56 }}
          />
          <span
            aria-hidden
            className={cn(
              "absolute bottom-0 right-0 w-px origin-bottom bg-or transition-transform duration-700 delay-500",
              visible ? "scale-y-100" : "scale-y-0"
            )}
            style={{ height: 56 }}
          />

          {/* Floating metric — top-right */}
          <div
            className={cn(
              "absolute right-5 top-5 flex items-baseline gap-2 border border-blanc/40 bg-noir/55 px-4 py-3 backdrop-blur-md transition-all duration-700 delay-500",
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            )}
          >
            <span className="font-serif text-[1.45rem] leading-none text-blanc">
              {service.metric.value}
            </span>
            <div className="ml-1 flex flex-col gap-[2px]">
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-or">
                {service.metric.label}
              </span>
              <span className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-blanc/55">
                {service.metric.period}
              </span>
            </div>
          </div>

          {/* Caption bottom-left */}
          <figcaption className="absolute bottom-4 left-5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-blanc/90 drop-shadow-md">
            {service.n} · {service.tag}
          </figcaption>
        </figure>

        {/* Copy */}
        <div
          className={cn(
            "relative flex flex-col justify-center lg:col-span-5 transition-all duration-700 delay-200",
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          {/* Oversized outline number — sits behind */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 right-0 select-none font-serif text-[8rem] leading-none text-or/[0.06]"
          >
            {service.n}
          </span>

          <h3 className="relative mb-5 font-serif text-[clamp(1.85rem,3.2vw,2.6rem)] font-normal leading-[1.1] text-noir">
            {service.title}
          </h3>
          <p className="relative mb-5 max-w-[44ch] font-serif text-[1.15rem] italic leading-[1.4] text-or">
            {service.intro}
          </p>
          <p className="relative mb-8 max-w-[60ch] font-sans text-[0.95rem] font-light leading-[1.75] text-noir/65">
            {service.body}
          </p>

          {/* Deliverables grid */}
          <div className="relative mb-8 border-y border-noir/8">
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-3">
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-noir/40">
                Livrables
              </span>
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-noir/40">
                Délai
              </span>
            </div>
            <ul className="divide-y divide-noir/[0.06] border-t border-noir/[0.06]">
              {service.deliverables.map(([k, v]) => (
                <li
                  key={k}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-3 font-sans text-[0.85rem]"
                >
                  <span className="text-noir/85">{k}</span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-or">
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA link */}
          <a
            href="/contact"
            className="group/cta relative inline-flex w-fit items-center gap-3 font-sans text-[0.78rem] font-medium uppercase tracking-[0.14em] text-noir transition-colors duration-200 hover:text-or"
          >
            <span>{service.cta}</span>
            <span
              aria-hidden
              className="relative flex h-px w-7 items-center bg-current transition-[width] duration-300 group-hover/cta:w-10"
            >
              <span className="absolute right-0 -top-[3px] h-[5px] w-[5px] rotate-45 border-r border-t border-current" />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function ServicesDetailed() {
  const [headerRef, headerVisible] = useVisible<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden border-t border-noir/5 bg-blanc px-6 py-[50px] sm:px-14">
      {/* Atmosphere: subtle gold mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 50% 60% at 100% 0%, rgba(201,168,76,0.07), transparent 65%)",
            "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(201,168,76,0.06), transparent 70%)",
          ].join(", "),
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className="mb-20 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16"
        >
          <div>
            <div
              className={cn(
                "mb-4 flex items-center gap-3 transition-opacity duration-500",
                headerVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-or">
                Services en détail
              </span>
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-noir/30">
                · 06 modules
              </span>
            </div>
            <h2
              className={cn(
                "max-w-[640px] font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.05] text-noir transition-all duration-500 delay-100",
                headerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              )}
            >
              Six métiers,
              <br />
              une seule{" "}
              <span className="italic text-or">discipline.</span>
            </h2>
          </div>
          <div
            className={cn(
              "flex flex-col gap-6 transition-opacity duration-500 delay-200",
              headerVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <p className="max-w-[44ch] font-sans text-[1rem] font-light leading-[1.7] text-noir/60">
              Chaque module est livré avec un livrable clair, un calendrier
              engagé, et des KPIs corrélés à votre revenu. Pas d&apos;effets de
              seuil, pas d&apos;abonnement opaque — un scope défini, un prix
              fixe, des résultats mesurés.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-noir/8 pt-4 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-noir/45">
              <span>Scope défini</span>
              <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-or/60" />
              <span>Prix fixe</span>
              <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-or/60" />
              <span>KPIs corrélés revenue</span>
            </div>
          </div>
        </div>

        {/* ── Service rows ── */}
        <div className="space-y-28 lg:space-y-36">
          {services.map((s, i) => (
            <ServiceRow
              key={s.n}
              service={s}
              index={i}
              total={services.length}
            />
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="mt-24 flex flex-col items-center gap-3 border-t border-noir/8 pt-10 text-center">
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-or">
            06 / 06
          </span>
          <p className="max-w-[40ch] font-serif text-[1.2rem] italic leading-[1.4] text-noir/85">
            Un seul projet, plusieurs modules — c&apos;est la même équipe qui
            pilote tout.
          </p>
          <p className="mt-3 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-noir/30">
            Photographies — Unsplash · licence libre commerciale
          </p>
        </div>
      </div>
    </section>
  );
}
