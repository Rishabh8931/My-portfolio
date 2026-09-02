import Link from "next/link";

type Experience = {
  index: string;
  role: string;
  period: string;
  description: string;
  focus: string;
};

const experiences: Experience[] = [
  {
    index: "01",
    role: "Independent Engineer",
    period: "2025 — Present",
    description:
      "Building full-stack applications and backend systems with a focus on APIs, authentication, databases and scalable architecture.",
    focus: "FULL STACK / BACKEND",
  },
  {
    index: "02",
    role: "Independent Product Builder",
    period: "2025 — Present",
    description:
      "Taking ideas from architecture to implementation — designing interfaces, building APIs and turning technical concepts into working products.",
    focus: "PRODUCT ENGINEERING",
  },
  {
    index: "03",
    role: "Engineering Projects",
    period: "2024 — Present",
    description:
      "Hands-on exploration of web development, backend engineering, developer tooling and system design through self-directed projects.",
    focus: "SYSTEMS / TOOLS",
  },
];

export default function Experience() {
  const showAllButton = experiences.length >= 3;

  return (
    <>
      <div className="mx-auto w-full mt-20 max-w-7xl px-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between border-b border-[var(--border)] pb-5">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
              02 / Experience
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              How I&apos;ve been building.
            </h2>
          </div>

          <span className="hidden font-mono text-xs text-[var(--muted)] md:block">
            ENGINEERING JOURNEY
          </span>
        </div>

        {/* Experiences */}
        <div>
          {experiences.map((experience) => (
            <article
              key={experience.index}
              className="
                group
                grid
                grid-cols-[40px_1fr]
                gap-5
                border-b
                border-[var(--border)]
                py-8
                md:grid-cols-[70px_1fr_180px]
                md:gap-8
              "
            >
              {/* Index */}
              <span
                className="
                  pt-1
                  font-mono
                  text-xs
                  text-[var(--muted)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--accent)]
                "
              >
                {experience.index}
              </span>

              {/* Main */}
              <div>
                <h3
                  className="
                    text-xl
                    font-medium
                    tracking-tight
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    md:text-2xl
                  "
                >
                  {experience.role}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">
                  {experience.description}
                </p>

                <p className="mt-5 font-mono text-[10px] tracking-[0.14em] text-[var(--muted)]">
                  {experience.focus}
                </p>
              </div>

              {/* Period */}
              <div className="hidden pt-1 text-right md:block">
                <span className="font-mono text-xs text-[var(--muted)]">
                  {experience.period}
                </span>
              </div>

              {/* Mobile period */}
              <div className="col-start-2 md:hidden">
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  {experience.period}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Only appears when there are 3+ experiences */}
        {showAllButton && (
          <div className="mt-10 flex justify-end">
            <Link
              href="/work"
              className="
                group
                inline-flex
                items-center
                gap-3
                font-mono
                text-xs
                uppercase
                tracking-[0.12em]
                text-[var(--text)]
              "
            >
              <span className="border-b border-[var(--border)] pb-1 transition-colors duration-300 group-hover:border-[var(--accent)]">
                View all work
              </span>

              <span
                className="
                  text-[var(--accent)]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
