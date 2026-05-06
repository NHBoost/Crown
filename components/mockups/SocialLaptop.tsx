export function SocialLaptop() {
  const posts = [
    { eng: "18.4%", hot: true },
    { eng: "12.2%", hot: false },
    { eng: "9.1%", hot: false },
    { eng: "21.5%", hot: true },
    { eng: "14.8%", hot: false },
    { eng: "7.2%", hot: false },
  ];
  const line = [
    20, 28, 25, 38, 45, 40, 55, 62, 58, 70, 68, 78, 82, 88, 95,
  ];

  return (
    <div
      className="relative w-[480px] max-w-full"
      style={{
        animation: "floatY 6s ease-in-out infinite",
        filter: "drop-shadow(0 32px 64px rgba(26,26,26,0.14))",
      }}
    >
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
              app.crownagency.be/social
            </span>
          </div>
        </div>

        {/* Dashboard */}
        <div className="flex bg-blanc">
          {/* Sidebar */}
          <div className="flex w-[54px] flex-col items-center gap-[10px] border-r border-noir/5 bg-fond/60 py-3">
            {["in", "ig", "tt", "x"].map((s, i) => (
              <div
                key={s}
                className="flex h-[26px] w-[26px] items-center justify-center border border-noir/10 bg-blanc font-mono text-[0.46rem]"
                style={{ color: i === 1 ? "#C9A84C" : "#1A1A1A" }}
              >
                {s}
              </div>
            ))}
            <div className="mt-auto h-[12px] w-[2px] bg-or" />
          </div>

          {/* Main */}
          <div className="flex-1">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-noir/5 px-4 py-[8px]">
              <span className="font-sans text-[0.46rem] uppercase tracking-[0.2em] text-noir/60">
                @crown.agency · Instagram
              </span>
              <span className="inline-flex items-center gap-[4px] border border-or/35 bg-or/10 px-[6px] py-[2px] font-sans text-[0.4rem] uppercase tracking-[0.14em] text-or">
                <span className="h-[3px] w-[3px] rounded-full bg-or" />
                3 posts programmés
              </span>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-[1px] bg-noir/5">
              {[
                ["Followers", "42.1K", "+2.4K"],
                ["Reach", "184K", "+28%"],
                ["Engagement", "7.8%", "+1.1pt"],
              ].map(([l, v, d]) => (
                <div key={l} className="bg-blanc px-3 py-[8px]">
                  <div className="font-sans text-[0.36rem] uppercase tracking-[0.14em] text-noir/45">
                    {l}
                  </div>
                  <div className="mt-[2px] font-serif text-[0.85rem] leading-none text-noir">
                    {v}
                  </div>
                  <div className="mt-[2px] font-sans text-[0.38rem] text-or">
                    {d}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="border-b border-noir/5 px-4 py-3">
              <div className="mb-[4px] flex items-center justify-between">
                <span className="font-sans text-[0.36rem] uppercase tracking-[0.14em] text-noir/45">
                  Reach · 30 jours
                </span>
                <span className="font-sans text-[0.4rem] text-or">▲ +32%</span>
              </div>
              <svg
                viewBox="0 0 300 48"
                preserveAspectRatio="none"
                className="block w-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="socialArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`M0 ${48 - line[0] * 0.42} ${line
                    .map(
                      (v, i) =>
                        `L ${(i / (line.length - 1)) * 300} ${48 - v * 0.42}`
                    )
                    .join(" ")} L 300 48 L 0 48 Z`}
                  fill="url(#socialArea)"
                />
                <path
                  d={`M0 ${48 - line[0] * 0.42} ${line
                    .map(
                      (v, i) =>
                        `L ${(i / (line.length - 1)) * 300} ${48 - v * 0.42}`
                    )
                    .join(" ")}`}
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1.3"
                />
              </svg>
            </div>

            {/* Post grid */}
            <div className="px-4 py-3">
              <div className="mb-[4px] flex items-center justify-between">
                <span className="font-sans text-[0.36rem] uppercase tracking-[0.14em] text-noir/45">
                  Publications récentes
                </span>
                <span className="font-serif text-[0.42rem] text-noir/40">
                  Voir tout →
                </span>
              </div>
              <div className="grid grid-cols-6 gap-[3px]">
                {posts.map((p, i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden border border-noir/10"
                    style={{
                      background: p.hot
                        ? "linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 100%)"
                        : "#f5f0e3",
                    }}
                  >
                    {/* Mock content texture */}
                    <div
                      className="absolute inset-1 rounded-[1px]"
                      style={{
                        background: p.hot
                          ? "repeating-linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.2) 2px, transparent 2px, transparent 6px)"
                          : "repeating-linear-gradient(45deg, rgba(26,26,26,0.06), rgba(26,26,26,0.06) 1px, transparent 1px, transparent 5px)",
                      }}
                    />
                    {p.hot ? (
                      <span className="absolute left-[2px] top-[2px] rounded-[1px] bg-or px-[3px] py-[1px] font-mono text-[0.3rem] text-noir">
                        ★
                      </span>
                    ) : null}
                    <span
                      className="absolute bottom-[3px] right-[4px] font-sans text-[0.34rem] font-medium"
                      style={{ color: p.hot ? "#C9A84C" : "#1A1A1A" }}
                    >
                      {p.eng}
                    </span>
                  </div>
                ))}
              </div>
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
