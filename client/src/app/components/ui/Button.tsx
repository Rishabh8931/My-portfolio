import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  arrow?: "right" | "external";
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  arrow,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm font-bold transition-all duration-300 rounded-[8px]";

  const variants = {
    primary: "!text-[var(--background)] !bg-[var(--text)] hover:opacity-80",

    secondary:
      "!text-[var(--text)] !bg-[var(--background)] border-2 border-[var(--text)] hover:opacity-80",
  };

  const arrows = {
    right: "→",
    external: "↗",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>

      {arrow && (
        <span
          aria-hidden="true"
          className="
            inline-block
            transition-transform
            duration-300
            ease-out
            group-hover:translate-x-1
            group-hover:-translate-y-0.5
          "
        >
          {arrows[arrow]}
        </span>
      )}
    </Link>
  );
}
