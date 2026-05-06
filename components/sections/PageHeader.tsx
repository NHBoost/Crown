interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="bg-blanc px-6 pb-6 pt-32 sm:px-14 sm:pt-40">
      <div className="mx-auto max-w-[900px]">
        <div
          className="mb-[14px] flex items-center gap-[10px]"
          style={{ animation: "heroIn 0.6s ease both" }}
        >
          <span className="h-px w-8 bg-or" />
          <span className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-or">
            {eyebrow}
          </span>
        </div>
        <h1
          className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.1] text-noir"
          style={{ animation: "heroIn 0.7s ease 0.1s both" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="mt-7 max-w-[560px] font-sans text-[1rem] font-light leading-[1.75] text-noir/55"
            style={{ animation: "heroIn 0.7s ease 0.2s both" }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
