// data/projects.ts
import Link from "next/link";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Formify",
    category: "API-first form infrastructure",
    description:
      "A full-stack form builder focused on creating forms, exposing APIs and handling submissions without building the backend from scratch.",
    technologies: ["NEXT.JS", "POSTGRES", "DRIZZLE"],
    href: "/work/formify",
  },
  {
    number: "02",
    name: "AuthForge",
    category: "Authentication & identity system",
    description:
      "An authentication system exploring OAuth, OIDC, JWTs, sessions and secure identity flows as an independent service.",
    technologies: ["NODE.JS", "POSTGRES", "OIDC"],
    href: "/work/authforge",
  },
  {
    number: "03",
    name: "Git Visualizer",
    category: "Interactive Git learning environment",
    description:
      "An interactive environment for understanding Git through visual representations of repositories, branches and operations.",
    technologies: ["REACT", "KONVA", "VITE"],
    href: "/work/git-visualizer",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10 mt-20">
      {/* Header */}
      <div className="mb-14 flex items-end justify-between border-b border-[var(--border)] pb-5">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            03 / Projects
          </p>

          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Things I&apos;ve built.
          </h2>
        </div>

        <span className="hidden font-mono text-xs text-[var(--muted)] md:block">
          SELECTED WORK
        </span>
      </div>

      {/* Projects */}
      <div>
        {projects.map((project) => (
          <Link
            key={project.number}
            href={project.href}
            className="
                group
                grid
                grid-cols-[40px_1fr]
                gap-5
                border-b
                border-[var(--border)]
                py-10
                transition-colors
                duration-300
                md:grid-cols-[70px_1fr_auto]
                md:gap-8
              "
          >
            {/* Number */}
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
              {project.number}
            </span>

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3
                  className="
                      text-2xl
                      font-medium
                      tracking-tight
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      md:text-3xl
                    "
                >
                  {project.name}
                </h3>

                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                  {project.category}
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                        font-mono
                        text-[10px]
                        tracking-[0.12em]
                        text-[var(--muted)]
                      "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <span
              className="
                  hidden
                  self-start
                  pt-1
                  font-mono
                  text-lg
                  text-[var(--muted)]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[var(--accent)]
                  md:block
                "
            >
              ↗
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
