export function WebsiteLaptop() {
  return (
    <div
      className="relative w-[480px] max-w-full"
      style={{
        animation: "floatY 6s ease-in-out infinite",
        filter: "drop-shadow(0 32px 64px rgba(26,26,26,0.14))",
      }}
    >
      {/* Screen */}
      <div
        className="overflow-hidden rounded-t-lg border-[1.5px] border-noir/10 bg-blanc"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.5)" }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-[5px] border-b border-noir/5 bg-[#f0f0f0] px-3 py-[7px]">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span
              key={c}
              className="h-[9px] w-[9px] rounded-full"
              style={{ background: c }}
            />
          ))}
          <div className="ml-2 flex h-[14px] flex-1 items-center rounded-[3px] bg-[#e4e4e4] pl-2">
            <span className="font-sans text-[0.55rem] tracking-[0.03em] text-[#888]">
              crownagency.be
            </span>
          </div>
        </div>

        {/* ── Site content ── */}
        <div className="bg-blanc">
          {/* Dark hero block */}
          <div className="relative overflow-hidden bg-noir px-5 pt-5 pb-8">
            {/* Mini nav */}
            <div className="mb-9 flex items-center justify-between">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[0.5rem] uppercase tracking-[0.4em] text-blanc">
                  CROWN
                </span>
                <span className="mt-[1px] font-serif text-[0.32rem] uppercase tracking-[0.5em] text-or">
                  AGENCY
                </span>
              </div>
              <div className="flex items-center gap-3">
                {["Services", "Travaux", "Contact"].map((l) => (
                  <span
                    key={l}
                    className="font-sans text-[0.4rem] uppercase tracking-[0.12em] text-blanc/55"
                  >
                    {l}
                  </span>
                ))}
                <span className="bg-or px-2 py-[3px] font-sans text-[0.4rem] font-medium uppercase tracking-[0.12em] text-noir">
                  Contact
                </span>
              </div>
            </div>

            {/* Hero copy */}
            <div className="relative z-10">
              <span className="mb-[6px] inline-flex items-center gap-[4px] border border-or/35 px-[6px] py-[2px]">
                <span className="h-[2px] w-[2px] rounded-full bg-or" />
                <span className="font-sans text-[0.35rem] uppercase tracking-[0.2em] text-or">
                  Agence Premium
                </span>
              </span>
              <div className="mt-2 font-serif text-[0.98rem] leading-[1.1] text-blanc">
                Croissance mesurable,
                <br />
                <span className="italic text-or">infrastructure première.</span>
              </div>
              <div className="mt-2 max-w-[180px] font-sans text-[0.46rem] leading-[1.55] text-blanc/55">
                Stratégie, acquisition, conversion — une équipe pour orchestrer
                vos prochains paliers.
              </div>
              <div className="mt-3 flex gap-[5px]">
                <span className="bg-or px-[8px] py-[4px] font-sans text-[0.42rem] font-medium uppercase tracking-[0.12em] text-blanc">
                  Demander un audit
                </span>
                <span className="border border-blanc/25 px-[8px] py-[4px] font-sans text-[0.42rem] font-light uppercase tracking-[0.12em] text-blanc/70">
                  Nos services
                </span>
              </div>
            </div>

            {/* Gold glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.25), transparent 65%)",
              }}
            />
          </div>

          {/* Services row on white bg */}
          <div className="bg-blanc px-5 py-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-sans text-[0.42rem] uppercase tracking-[0.18em] text-or">
                — La plateforme
              </span>
              <span className="font-serif text-[0.42rem] tracking-[0.1em] text-noir/50">
                Voir tout →
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { n: "01", t: "Stratégie" },
                { n: "02", t: "Acquisition" },
                { n: "03", t: "Conversion" },
              ].map((c) => (
                <div
                  key={c.n}
                  className="border border-noir/10 bg-fond p-2"
                >
                  <div className="font-serif text-[0.42rem] tracking-[0.1em] text-or">
                    {c.n}
                  </div>
                  <div className="mt-1 font-serif text-[0.6rem] leading-tight text-noir">
                    {c.t}
                  </div>
                  <div className="mt-1 h-[2px] w-5 bg-noir/10" />
                </div>
              ))}
            </div>
          </div>

          {/* Mini stats footer */}
          <div className="flex items-stretch justify-between gap-3 border-t border-noir/5 bg-fond/60 px-5 py-3">
            {[
              ["+150", "Projets"],
              ["+98%", "Satisfaits"],
              ["+320%", "Croissance"],
            ].map(([k, l]) => (
              <div key={l}>
                <div className="font-serif text-[0.65rem] leading-none text-noir">
                  {k}
                </div>
                <div className="mt-[2px] font-sans text-[0.36rem] uppercase tracking-[0.14em] text-noir/45">
                  {l}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-[3px] self-end">
              <span className="h-1 w-1 rounded-full bg-or" />
              <span className="font-sans text-[0.34rem] uppercase tracking-[0.14em] text-noir/35">
                Live
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hinge */}
      <div
        className="relative h-[6px] rounded-b-[2px]"
        style={{ background: "linear-gradient(to bottom, #d0d0d0, #b8b8b8)" }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[3px] w-8 -translate-x-1/2 -translate-y-1/2 rounded-[2px]"
          style={{ background: "#c0c0c0" }}
        />
      </div>
      {/* Base */}
      <div
        className="relative -ml-[5%] h-[10px] w-[110%] rounded-b-md"
        style={{ background: "linear-gradient(to bottom, #c8c8c8, #b0b0b0)" }}
      >
        <div className="absolute inset-x-[5%] bottom-0 h-[3px] rounded-b-[4px] bg-noir/10" />
      </div>
    </div>
  );
}
