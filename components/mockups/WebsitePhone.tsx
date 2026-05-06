export function WebsitePhone() {
  return (
    <div
      className="absolute -right-5 bottom-10 z-[2] w-[160px]"
      style={{
        animation: "floatY 6s ease-in-out 1.5s infinite",
        filter: "drop-shadow(0 20px 40px rgba(26,26,26,0.18))",
      }}
    >
      <div className="rounded-[22px] border border-blanc/10 bg-noir px-[6px] py-2">
        {/* Notch */}
        <div className="relative mx-auto mb-[6px] h-[6px] w-10 rounded-[3px] bg-[#111]">
          <div className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#222]" />
        </div>

        {/* Screen */}
        <div className="min-h-[260px] overflow-hidden rounded-[14px] bg-blanc">
          {/* Mobile nav */}
          <div className="flex items-center justify-between bg-noir px-3 py-2">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[0.42rem] uppercase tracking-[0.4em] text-blanc">
                CROWN
              </span>
              <span className="mt-[1px] font-serif text-[0.3rem] uppercase tracking-[0.5em] text-or">
                AGENCY
              </span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="h-[1px] w-[10px] bg-blanc" />
              <span className="h-[1px] w-[10px] bg-blanc" />
            </div>
          </div>

          {/* Hero mobile */}
          <div className="bg-noir px-3 pb-4 pt-2">
            <span className="inline-flex items-center gap-[3px] border border-or/35 px-[5px] py-[2px]">
              <span className="h-[2px] w-[2px] rounded-full bg-or" />
              <span className="font-sans text-[0.3rem] uppercase tracking-[0.18em] text-or">
                Agence Premium
              </span>
            </span>
            <div className="mt-[6px] font-serif text-[0.78rem] leading-[1.1] text-blanc">
              Croissance{" "}
              <span className="italic text-or">mesurable.</span>
            </div>
            <div className="mt-[4px] font-sans text-[0.42rem] leading-[1.55] text-blanc/55">
              Stratégie &amp; conversion pour marques ambitieuses.
            </div>
            <div className="mt-2 bg-or px-2 py-[4px] text-center font-sans text-[0.42rem] font-medium uppercase tracking-[0.12em] text-blanc">
              Demander un audit
            </div>
          </div>

          {/* Service cards stacked */}
          <div className="flex flex-col gap-[4px] bg-blanc px-3 py-3">
            {[
              { n: "01", t: "Stratégie" },
              { n: "02", t: "Acquisition" },
            ].map((c) => (
              <div
                key={c.n}
                className="flex items-center justify-between border border-noir/10 bg-fond px-2 py-[6px]"
              >
                <div>
                  <div className="font-serif text-[0.36rem] tracking-[0.1em] text-or">
                    {c.n}
                  </div>
                  <div className="mt-[1px] font-serif text-[0.55rem] leading-tight text-noir">
                    {c.t}
                  </div>
                </div>
                <span className="font-sans text-[0.5rem] text-or">→</span>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around border-t border-noir/5 pb-[6px] pt-2">
            {["◈", "◎", "◉"].map((icon, i) => (
              <div
                key={i}
                className="text-[0.7rem]"
                style={{ color: i === 0 ? "#C9A84C" : "#ccc" }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Home indicator */}
        <div className="mx-auto mt-[6px] h-[3px] w-10 rounded-[2px] bg-blanc/20" />
      </div>
    </div>
  );
}
