const technologies = [
  "BACKEND SYSTEMS",
  "API DESIGN",
  "AUTHENTICATION",
  "DATABASES",
  "ASYNC PROCESSING",
  "SYSTEM DESIGN",
  "DEVELOPER TOOLS",
];

export default function TechTicker() {
  return (
    <section className="w-full overflow-hidden border-y border-[var(--border)]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="overflow-hidden">
          <div className="flex w-max animate-ticker">
            {[...technologies, ...technologies].map((technology, index) => (
              <div
                key={`${technology}-${index}`}
                aria-hidden={index >= technologies.length}
                className="flex shrink-0 items-center gap-8 pr-8"
              >
                <span className="whitespace-nowrap font-mono text-xs font-medium tracking-[0.12em] text-[var(--text)]">
                  {technology}
                </span>

                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-[var(--accent)]"
                >
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
