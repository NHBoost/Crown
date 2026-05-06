"use client";

import { useState, type FormEvent } from "react";
import { useVisible } from "@/lib/useVisible";
import { cn } from "@/lib/cn";

type Field = "name" | "email" | "company" | "message";
type FormState = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const projectTypes = [
  "Stratégie",
  "Site web",
  "Acquisition",
  "Social media",
  "Branding",
  "Audit",
];

const budgets = [
  { label: "< 5 k€", value: "lt5" },
  { label: "5 — 15 k€", value: "5-15" },
  { label: "15 — 50 k€", value: "15-50" },
  { label: "50 k€ +", value: "gt50" },
];

const process = [
  {
    n: "01",
    t: "Premier échange",
    d: "Trente minutes pour cadrer vos enjeux. Sans engagement.",
    time: "sous 24 h",
  },
  {
    n: "02",
    t: "Audit personnalisé",
    d: "Diagnostic complet de votre stack et de votre acquisition.",
    time: "sous 48 h",
  },
  {
    n: "03",
    t: "Proposition stratégique",
    d: "Roadmap chiffrée, KPIs et calendrier d'exécution.",
    time: "sous 5 j",
  },
];

const contactRows: [string, string, string][] = [
  ["Email", "contact@crownagency.be", "mailto:contact@crownagency.be"],
  ["Téléphone", "+32 2 123 45 67", "tel:+3221234567"],
  ["Adresse", "Avenue Louise 250, 1050 Bruxelles", "/contact"],
];

const MAX_MSG = 800;

export function Contact() {
  const [ref, visible] = useVisible<HTMLElement>();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [budget, setBudget] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState<Record<Field, boolean>>({
    name: false,
    email: false,
    company: false,
    message: false,
  });

  const toggleType = (t: string) =>
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Champ requis";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Adresse invalide";
    if (form.message.trim().length < 12)
      e.message = "Au moins 12 caractères";
    return e;
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setTouched({ name: true, email: true, company: true, message: true });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1600);
  };

  const handleField =
    (f: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [f]: e.target.value }));
      if (errors[f]) setErrors((er) => ({ ...er, [f]: undefined }));
    };

  const inputClass = (f: Field) =>
    cn(
      "w-full border-x-0 border-t-0 border-b bg-transparent py-3 px-0 font-sans text-[0.95rem] font-light text-noir outline-none transition-[border-color] duration-300 placeholder:text-noir/30 focus:border-or",
      errors[f]
        ? "border-[#c0392b]"
        : touched[f] && form[f]
          ? "border-noir/40"
          : "border-noir/15"
    );

  const msgLen = form.message.length;
  const msgRatio = msgLen / MAX_MSG;

  return (
    <section
      id="form"
      ref={ref}
      className="scroll-mt-24 relative overflow-hidden border-t border-noir/5 bg-blanc px-6 py-[50px] sm:px-14"
    >
      {/* Faint gold halo top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] opacity-[0.55]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.10), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* ── LEFT — narrative + process ── */}
          <div>
            {/* Status badge */}
            <div
              className={cn(
                "mb-8 inline-flex items-center gap-2 border border-noir/10 bg-blanc px-3 py-[6px] transition-opacity duration-500",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-or opacity-60" />
                <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-or" />
              </span>
              <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-noir/70">
                Disponible cette semaine
              </span>
            </div>

            {/* Eyebrow */}
            <div
              className={cn(
                "mb-[14px] flex items-center gap-[10px] transition-opacity duration-500 delay-100",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              <span className="h-px w-8 bg-or" />
              <span className="font-sans text-[0.66rem] uppercase tracking-[0.2em] text-or">
                Contact
              </span>
            </div>

            <h2
              className={cn(
                "mb-7 font-serif text-[clamp(1.9rem,3.5vw,2.9rem)] font-normal leading-[1.1] text-noir transition-all duration-500 delay-200",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
            >
              Démarrons{" "}
              <span className="italic text-or">quelque chose</span>
              <br />
              de mesurable.
            </h2>

            <p
              className={cn(
                "mb-12 max-w-[42ch] font-sans text-[0.95rem] font-light leading-[1.75] text-noir/65 transition-opacity duration-500 delay-300",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              Décrivez-nous votre projet en quelques lignes. Notre équipe revient
              avec une première lecture stratégique — sans engagement.
            </p>

            {/* Process timeline */}
            <ol className="relative space-y-7 pl-7">
              {/* Vertical connector */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-[10px] top-[10px] bottom-[10px] w-px bg-gradient-to-b from-or/60 via-or/20 to-transparent"
              />
              {process.map((p, i) => (
                <li
                  key={p.n}
                  className={cn(
                    "relative transition-all duration-500",
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-3"
                  )}
                  style={{ transitionDelay: `${380 + i * 90}ms` }}
                >
                  {/* Step marker */}
                  <span className="absolute -left-7 top-[2px] flex h-5 w-5 items-center justify-center rounded-full border border-or bg-blanc">
                    <span className="font-mono text-[0.5rem] tracking-[0.04em] text-or">
                      {p.n}
                    </span>
                  </span>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-[1.1rem] text-noir">
                      {p.t}
                    </h3>
                    <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-or/80">
                      {p.time}
                    </span>
                  </div>
                  <p className="mt-1 max-w-[34ch] font-sans text-[0.85rem] font-light leading-[1.6] text-noir/55">
                    {p.d}
                  </p>
                </li>
              ))}
            </ol>

            {/* Contact strip */}
            <dl
              className={cn(
                "mt-12 space-y-3 border-t border-noir/8 pt-6 transition-opacity duration-500 delay-[600ms]",
                visible ? "opacity-100" : "opacity-0"
              )}
            >
              {contactRows.map(([k, v, href]) => (
                <div
                  key={k}
                  className="grid grid-cols-[80px_1fr] items-baseline gap-4 font-sans"
                >
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-noir/40">
                    {k}
                  </dt>
                  <dd>
                    <a
                      href={href}
                      className="text-[0.9rem] text-noir/80 transition-colors duration-200 hover:text-or"
                    >
                      {v}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ── RIGHT — form ── */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {sent ? (
              <SuccessState
                onReset={() => {
                  setSent(false);
                  setForm({ name: "", email: "", company: "", message: "" });
                  setSelectedTypes(new Set());
                  setBudget(null);
                  setTouched({
                    name: false,
                    email: false,
                    company: false,
                    message: false,
                  });
                }}
              />
            ) : (
              <form
                onSubmit={onSubmit}
                className="border border-noir/8 bg-blanc p-8 sm:p-10"
              >
                {/* Form header */}
                <div className="mb-8 flex items-baseline justify-between border-b border-noir/8 pb-4">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-noir/45">
                    Brief · v1
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-or">
                    Réponse sous 24 h
                  </span>
                </div>

                {/* Project types */}
                <fieldset className="mb-8">
                  <legend className="mb-3 font-sans text-[0.66rem] uppercase tracking-[0.18em] text-noir/55">
                    01 · Type de projet
                    <span className="ml-2 font-mono lowercase tracking-normal text-noir/30">
                      (multi)
                    </span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((t) => {
                      const active = selectedTypes.has(t);
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggleType(t)}
                          aria-pressed={active}
                          className={cn(
                            "group relative px-4 py-[7px] font-sans text-[0.78rem] tracking-wide transition-all duration-250 ease-out",
                            active
                              ? "border border-or bg-or/[0.08] text-noir"
                              : "border border-noir/15 bg-blanc text-noir/65 hover:border-noir/40 hover:text-noir"
                          )}
                        >
                          <span className="relative flex items-center gap-2">
                            <span
                              aria-hidden
                              className={cn(
                                "block h-[5px] w-[5px] rounded-full transition-colors duration-200",
                                active ? "bg-or" : "bg-noir/15 group-hover:bg-noir/40"
                              )}
                            />
                            {t}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Identity fields */}
                <fieldset className="mb-8">
                  <legend className="mb-3 font-sans text-[0.66rem] uppercase tracking-[0.18em] text-noir/55">
                    02 · Vous
                  </legend>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                    {(
                      [
                        { f: "name", l: "Nom complet", req: true, type: "text" },
                        { f: "email", l: "Email professionnel", req: true, type: "email" },
                        { f: "company", l: "Entreprise", req: false, type: "text" },
                      ] as const
                    ).map(({ f, l, req, type }) => (
                      <div key={f} className={cn(f === "company" && "sm:col-span-2")}>
                        <div className="mb-1 flex items-baseline justify-between">
                          <label
                            htmlFor={`c-${f}`}
                            className="font-sans text-[0.62rem] uppercase tracking-[0.14em] text-noir/45"
                          >
                            {l}
                            {req && <span className="ml-1 text-or">*</span>}
                          </label>
                          {errors[f] ? (
                            <span className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[#c0392b]">
                              {errors[f]}
                            </span>
                          ) : null}
                        </div>
                        <input
                          id={`c-${f}`}
                          type={type}
                          value={form[f]}
                          onChange={handleField(f)}
                          onBlur={() =>
                            setTouched((p) => ({ ...p, [f]: true }))
                          }
                          className={inputClass(f)}
                          autoComplete={
                            f === "name"
                              ? "name"
                              : f === "email"
                                ? "email"
                                : "organization"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </fieldset>

                {/* Budget */}
                <fieldset className="mb-8">
                  <legend className="mb-3 font-sans text-[0.66rem] uppercase tracking-[0.18em] text-noir/55">
                    03 · Budget estimé
                    <span className="ml-2 font-mono lowercase tracking-normal text-noir/30">
                      (optionnel)
                    </span>
                  </legend>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {budgets.map((b) => {
                      const active = budget === b.value;
                      return (
                        <button
                          key={b.value}
                          type="button"
                          onClick={() => setBudget(active ? null : b.value)}
                          aria-pressed={active}
                          className={cn(
                            "border px-3 py-3 font-sans text-[0.82rem] transition-all duration-250 ease-out",
                            active
                              ? "border-or bg-or/[0.08] text-noir"
                              : "border-noir/15 bg-blanc text-noir/55 hover:border-noir/40 hover:text-noir"
                          )}
                        >
                          {b.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Message */}
                <fieldset className="mb-8">
                  <div className="mb-2 flex items-baseline justify-between">
                    <legend className="font-sans text-[0.66rem] uppercase tracking-[0.18em] text-noir/55">
                      04 · Votre projet
                      <span className="ml-1 text-or">*</span>
                    </legend>
                    <span
                      className={cn(
                        "font-mono text-[0.6rem] tracking-[0.08em] transition-colors",
                        msgRatio >= 1
                          ? "text-[#c0392b]"
                          : msgRatio > 0.85
                            ? "text-or"
                            : "text-noir/35"
                      )}
                    >
                      {msgLen} / {MAX_MSG}
                    </span>
                  </div>
                  <textarea
                    id="c-message"
                    rows={5}
                    value={form.message}
                    onChange={handleField("message")}
                    onBlur={() =>
                      setTouched((p) => ({ ...p, message: true }))
                    }
                    maxLength={MAX_MSG}
                    placeholder="Décrivez vos enjeux, vos objectifs, vos contraintes…"
                    className={cn(
                      inputClass("message"),
                      "resize-y leading-[1.7]"
                    )}
                  />
                  {errors.message ? (
                    <span className="mt-1 block font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[#c0392b]">
                      {errors.message}
                    </span>
                  ) : null}
                </fieldset>

                {/* Submit */}
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={sending}
                    className={cn(
                      "group relative inline-flex items-center gap-3 overflow-hidden bg-noir px-9 py-4 font-sans text-[0.78rem] font-medium uppercase tracking-[0.14em] text-blanc transition-[background,transform] duration-250 ease-out",
                      sending
                        ? "cursor-wait opacity-80"
                        : "cursor-pointer hover:-translate-y-[1px] hover:bg-or hover:text-noir"
                    )}
                  >
                    {/* Sheen */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-[-120%] w-1/2 skew-x-[-20deg] bg-blanc/15 transition-transform duration-700 ease-out group-hover:translate-x-[300%]"
                    />
                    <span className="relative">
                      {sending ? "Envoi en cours…" : "Envoyer le brief"}
                    </span>
                    {sending ? (
                      <span
                        aria-hidden
                        className="relative inline-block h-3 w-3 animate-spin rounded-full border border-blanc/40 border-t-blanc"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="relative inline-flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <span className="block h-px w-4 bg-current" />
                        <span className="block h-[5px] w-[5px] rotate-45 border-r border-t border-current" />
                      </span>
                    )}
                  </button>
                  <p className="font-sans text-[0.7rem] leading-snug text-noir/45">
                    En envoyant ce formulaire, vous acceptez d&apos;être recontacté.
                    <br className="hidden sm:inline" /> Aucune donnée ne sera revendue.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="border border-or/30 bg-blanc p-12 text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-or bg-or/[0.08]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="mb-3 font-serif text-[1.65rem] text-noir">
        Brief reçu.
      </h3>
      <p className="mx-auto max-w-sm font-sans text-[0.9rem] font-light leading-[1.7] text-noir/60">
        Nous revenons vers vous sous 24 h avec une première lecture stratégique
        — directement par email.
      </p>
      <div className="mx-auto my-7 h-px w-12 bg-or" />
      <button
        type="button"
        onClick={onReset}
        className="font-sans text-[0.7rem] uppercase tracking-[0.18em] text-noir/55 underline-offset-4 transition-colors hover:text-or hover:underline"
      >
        Envoyer un nouveau brief
      </button>
    </div>
  );
}
