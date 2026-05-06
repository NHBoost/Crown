"use client";

import { useEffect, useState } from "react";
import { useVisible } from "@/lib/useVisible";
import { cn } from "@/lib/cn";
import { DigitalPulse } from "@/components/ui/DigitalPulse";

const values = [
  {
    n: "01",
    title: "Expertise",
    desc: "10 ans d'expérience cumulée en marketing digital et performance web. Stratégie d'acquisition, performance media, CRO et branding — quatre métiers maîtrisés en interne par des experts certifiés Google, Meta et HubSpot.",
    bullets: ["Audits & roadmaps", "Performance media multi-canal", "Stack analytics complète"],
    metric: "10 ans",
    accent: "rgba(201,168,76,0.55)",
  },
  {
    n: "02",
    title: "Réactivité",
    desc: "Suivi hebdomadaire, reporting Slack en temps réel, escalade sous 1h en cas d'alerte critique. Pas de tickets sans réponse, pas de roadmap noire — vous voyez ce qu'on fait, quand on le fait, et pourquoi.",
    bullets: ["Daily syncs disponibles", "Reporting GA4 + Mixpanel", "SLA réponse < 4h"],
    metric: "< 24h",
    accent: "rgba(201,168,76,0.45)",
  },
  {
    n: "03",
    title: "Résultats",
    desc: "Chaque action est mesurée et corrélée à votre P&L. ROAS, CAC, LTV, churn — chaque KPI suivi en continu, optimisé en sprints de 2 semaines, aligné sur vos objectifs commerciaux réels.",
    bullets: ["KPIs alignés revenue", "Sprints d'optimisation 2 sem.", "Attribution multi-touch"],
    metric: "+187% ROAS",
    accent: "rgba(201,168,76,0.65)",
  },
];

const capabilities: { label: string; value: number; tag: string }[] = [
  { label: "Stratégie d'acquisition", value: 96, tag: "core" },
  { label: "Performance media", value: 92, tag: "core" },
  { label: "Conversion & CRO", value: 94, tag: "core" },
  { label: "Branding & identité", value: 88, tag: "creative" },
];

type LogEntry = { ts: string; module: string; message: string; level: "ok" | "info" | "alert" };

const logFeed: LogEntry[] = [
  { ts: "14:32", module: "strategy.audit", message: "completed · client #421", level: "ok" },
  { ts: "14:34", module: "perf.media", message: "+2.4% ROAS · meta-ads", level: "ok" },
  { ts: "14:36", module: "cro.test", message: "variant B winning · #142", level: "info" },
  { ts: "14:38", module: "ga4.sync", message: "1.2M events ingested", level: "ok" },
  { ts: "14:41", module: "alerting", message: "CAC threshold reached · review", level: "alert" },
  { ts: "14:43", module: "deploy", message: "v2.4.1 → production · ok", level: "ok" },
];

export function About() {
  const [ref, visible] = useVisible<HTMLElement>();
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setLogIndex((i) => (i + 1) % logFeed.length);
    }, 2400);
    return () => clearInterval(id);
  }, [visible]);

  // Rolling 3 entries window
  const visibleLogs = [
    logFeed[logIndex],
    logFeed[(logIndex + 1) % logFeed.length],
    logFeed[(logIndex + 2) % logFeed.length],
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-noir/5 bg-blanc px-6 py-[50px] sm:px-14"
    >
      {/* ── Atmosphere: gradient mesh background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 60% 80% at 12% 10%, rgba(201,168,76,0.10), transparent 65%)",
            "radial-gradient(ellipse 50% 60% at 88% 75%, rgba(201,168,76,0.07), transparent 70%)",
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(26,26,26,0.04), transparent 75%)",
          ].join(", "),
        }}
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,26,26,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* ── Header ── */}
        <div className="mb-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-20">
          <div>
            <div
              className={cn(
                "mb-[14px] flex items-center gap-[10px] transition-opacity duration-500",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="h-px w-8 bg-or" />
              <span className="font-sans text-[0.66rem] uppercase tracking-[0.2em] text-or">
                À propos
              </span>
            </div>
            <h2
              className={cn(
                "font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal leading-[1.15] text-noir transition-all duration-500 delay-100",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
            >
              Une agence née pour{" "}
              <span className="italic text-or">performer.</span>
            </h2>
          </div>
          <div className="space-y-4">
            <p
              className={cn(
                "font-sans text-[0.95rem] font-light leading-[1.8] text-noir/65 transition-all duration-500 delay-200",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              Fondée en 2018, Crown Agency réunit des experts passionnés par la
              croissance digitale. Une approche qui combine rigueur analytique,
              créativité et exécution disciplinée.
            </p>
            <p
              className={cn(
                "font-sans text-[0.95rem] font-light leading-[1.8] text-noir/65 transition-all duration-500 delay-[250ms]",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              Pas de solutions génériques — une vision long terme, taillée sur
              mesure, alignée sur vos ambitions.
            </p>
          </div>
        </div>

        {/* ── Bento grid ── */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          {/* CONSOLE — dark SaaS panel (large) */}
          <div
            className={cn(
              "group/console relative overflow-hidden border border-noir/5 p-7 transition-all duration-700 delay-300 sm:p-10 lg:col-span-7 lg:row-span-2",
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}
            style={{
              background:
                "linear-gradient(140deg, #1a1a1a 0%, #1f1d1a 55%, #221d14 100%)",
              boxShadow:
                "0 30px 80px -40px rgba(26,26,26,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Animated conic gradient border (visible at top via pseudo) */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.6) 50%, transparent)",
              }}
            />
            {/* Gold ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.22), transparent 70%)",
              }}
            />
            {/* Faint dot grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Floating Lottie — top-right corner */}
            <div className="pointer-events-none absolute right-5 top-5 h-20 w-20 sm:h-24 sm:w-24">
              <DigitalPulse className="h-full w-full" />
            </div>

            {/* Console header */}
            <div className="relative mb-10 flex items-center justify-between border-b border-blanc/5 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-[6px]">
                  <span
                    className="h-[7px] w-[7px] rounded-full bg-or"
                    style={{ animation: "pulseDot 2s infinite" }}
                  />
                  <span className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-or">
                    Crown OS · v2.4
                  </span>
                </span>
              </div>
              <span className="hidden font-sans text-[0.55rem] uppercase tracking-[0.18em] text-blanc/40 sm:inline">
                Live · Bruxelles
              </span>
            </div>

            {/* Title */}
            <div className="relative mb-8 max-w-[80%]">
              <span className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-blanc/40">
                — Capacités
              </span>
              <h3 className="mt-3 font-serif text-2xl text-blanc sm:text-3xl">
                Une stack opérationnelle,{" "}
                <span className="italic text-or">mesurée en continu.</span>
              </h3>
            </div>

            {/* Capability bars with shimmer */}
            <div className="relative space-y-5">
              {capabilities.map((c, i) => (
                <div key={c.label}>
                  <div className="mb-[6px] flex items-baseline justify-between gap-3">
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-or/70">
                        {c.tag}
                      </span>
                      <span className="font-sans text-[0.85rem] text-blanc/85">
                        {c.label}
                      </span>
                    </span>
                    <span className="font-serif text-[0.95rem] text-or">
                      {c.value}
                      <span className="text-or/50">%</span>
                    </span>
                  </div>
                  <div className="relative h-[3px] w-full overflow-hidden bg-blanc/[0.08]">
                    <span
                      className="block h-full bg-or transition-[width] ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        width: visible ? `${c.value}%` : "0%",
                        transitionDuration: "1400ms",
                        transitionDelay: `${500 + i * 120}ms`,
                      }}
                    />
                    {/* Shimmer overlay */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0"
                      style={{
                        width: visible ? `${c.value}%` : "0%",
                        transition: `width 1400ms cubic-bezier(0.22,1,0.36,1) ${500 + i * 120}ms`,
                        backgroundImage:
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
                        backgroundSize: "60% 100%",
                        backgroundRepeat: "no-repeat",
                        animation: visible
                          ? `shimmer 3s ease-in-out ${1.6 + i * 0.12}s infinite`
                          : "none",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Live log feed (CLI-style) */}
            <div className="relative mt-10 border border-blanc/[0.06] bg-noir/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-blanc/[0.06] px-4 py-2">
                <div className="flex items-center gap-[5px]">
                  <span className="h-[5px] w-[5px] rounded-full bg-or/70" />
                  <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-blanc/40">
                    crown.events ~ live
                  </span>
                </div>
                <span className="font-mono text-[0.5rem] uppercase tracking-[0.14em] text-or/70">
                  rolling
                </span>
              </div>
              <ul className="space-y-[2px] p-2">
                {visibleLogs.map((log, i) => (
                  <li
                    key={`${log.ts}-${log.module}-${i}`}
                    className="flex items-baseline gap-2 px-2 py-[3px] font-mono text-[0.65rem] leading-tight transition-opacity duration-700"
                    style={{ opacity: 1 - i * 0.32 }}
                  >
                    <span className="text-blanc/30">[{log.ts}]</span>
                    <span
                      className={cn(
                        "shrink-0",
                        log.level === "ok"
                          ? "text-[#7bc97e]"
                          : log.level === "alert"
                            ? "text-[#e2a04a]"
                            : "text-or/80"
                      )}
                    >
                      {log.level === "ok" ? "✓" : log.level === "alert" ? "!" : "›"}
                    </span>
                    <span className="text-or/85">{log.module}</span>
                    <span className="text-blanc/60 truncate">
                      {log.message}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer chips */}
            <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-blanc/5 pt-5">
              {[
                ["Uptime", "99.97%"],
                ["Sync", "il y a 12s"],
                ["SLA", "< 4h"],
              ].map(([k, v]) => (
                <div
                  key={k as string}
                  className="flex items-center gap-2 border border-blanc/10 bg-blanc/[0.04] px-3 py-[5px] backdrop-blur-md"
                >
                  <span className="font-sans text-[0.5rem] uppercase tracking-[0.18em] text-blanc/40">
                    {k}
                  </span>
                  <span className="font-mono text-[0.6rem] text-or">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GLASS VALUE CARDS — 3 stacked on right */}
          {values.map((v, i) => (
            <article
              key={v.n}
              className={cn(
                "group relative overflow-hidden p-6 transition-all duration-500 lg:col-span-5",
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-6"
              )}
              style={{
                transitionDelay: `${350 + i * 100}ms`,
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(245,245,245,0.35) 100%)",
                backdropFilter: "blur(18px) saturate(140%)",
                WebkitBackdropFilter: "blur(18px) saturate(140%)",
                border: "1px solid rgba(26,26,26,0.06)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.6) inset, 0 12px 40px -28px rgba(26,26,26,0.18)",
              }}
            >
              {/* Animated gradient border on hover (rotating conic) */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${v.accent} 90deg, transparent 180deg, ${v.accent} 270deg, transparent 360deg)`,
                  filter: "blur(0.5px)",
                  animation: "spinSlow 8s linear infinite",
                  zIndex: 0,
                }}
              />
              {/* Inner mask to keep content above the rotating border */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-[1px] z-[1]"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.85) 0%, rgba(245,245,245,0.75) 100%)",
                }}
              />

              <div className="relative z-[2]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-or">
                    {v.n}
                  </span>
                  <span className="font-serif text-[0.78rem] text-noir/35 transition-colors group-hover:text-or">
                    {v.metric}
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-[1.45rem] leading-tight text-noir">
                  {v.title}
                </h3>
                <p className="mb-5 font-sans text-[0.88rem] font-light leading-[1.7] text-noir/60">
                  {v.desc}
                </p>
                <ul className="space-y-[6px]">
                  {v.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 font-sans text-[0.78rem] text-noir/70"
                    >
                      <span
                        aria-hidden
                        className="inline-block h-[1px] w-3 bg-or"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Animated underline on hover */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-or transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                {/* Ghost number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[6rem] leading-none text-or/[0.05] transition-colors duration-500 group-hover:text-or/[0.10]"
                >
                  {v.n}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ── Tech feature strip ── */}
        <div
          className={cn(
            "grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 transition-all duration-700 delay-[600ms]",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          {[
            { k: "MÉTHODE", v: "Sprints 2 sem.", icon: "◇" },
            { k: "STACK", v: "GA4 · Mixpanel", icon: "◈" },
            { k: "REPORTING", v: "Hebdo + Slack", icon: "◉" },
            { k: "SLA", v: "Réponse 4h", icon: "◆" },
          ].map((f, i) => (
            <div
              key={f.k}
              className="group relative overflow-hidden border border-noir/8 px-5 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:border-or/40"
              style={{
                background:
                  "linear-gradient(165deg, rgba(255,255,255,0.7) 0%, rgba(245,245,245,0.5) 100%)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* Hover gradient sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-[-150%] w-1/2 skew-x-[-20deg] transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)",
                }}
              />
              <div className="relative flex items-baseline justify-between gap-3">
                <div>
                  <div className="mb-1 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-noir/45">
                    {f.k}
                  </div>
                  <div className="font-serif text-[1rem] text-noir">
                    {f.v}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="text-[1.1rem] text-or/70 transition-transform duration-300 group-hover:rotate-45"
                >
                  {f.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: -120% 0; }
          60%  { background-position: 220% 0; }
          100% { background-position: 220% 0; }
        }
        @keyframes spinSlow {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
