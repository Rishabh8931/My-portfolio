"use client";

import Link from "next/link";
import { Mail, CircleUserRound, ArrowUpRight } from "lucide-react";

type FloatingButtonItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

const buttons: FloatingButtonItem[] = [
  {
    href: "#contact",
    label: "Contact",
    icon: <Mail size="clamp(20px, 2vw, 28px)" strokeWidth={1.8} />,
  },

  {
    href: "#about",
    label: "About",
    icon: <CircleUserRound size="clamp(20px, 2vw, 28px)" strokeWidth={1.8} />,
  },

  {
    href: "#work",
    label: "Explore work",
    icon: <ArrowUpRight size="clamp(24px, 2.5vw, 32px)" strokeWidth={1.8} />,
    active: true,
  },
];

export default function FloatingButtons() {
  return (
    <div
      className="
        absolute
        left-[5%]
        bottom-[-10%]
        z-50
        flex
        flex-col
        gap-[clamp(8px,1vw,16px)]
        md:bottom-[-6%]
      "
    >
      {buttons.map((button) => (
        <Link
          key={button.label}
          href={button.href}
          aria-label={button.label}
          className={`
            group
            flex
            aspect-square
            h-[clamp(48px,3vw,68px)]
            w-[clamp(48px,3vw,68px)]
            items-center
            justify-center
            rounded-full
            border
            shadow-md
            transition-all
            duration-300
            ease-out
            hover:scale-110

            ${
              button.active
                ? `
                  border-[#ff4b18]
                  bg-[#ff4b18]
                  text-white
                  hover:bg-[#ff5c2d]
                `
                : `
                 ! border-[var(--text)]
                  !bg-[var(--background)]
                 !text-[var(--text)]
                 !hover:bg-[var(--text)]/10

                  dark:border-white/80
                  dark:bg-[#292929]
                  dark:text-white
                  dark:hover:bg-[#3a3a3a]
                `
            }
          `}
        >
          <span
            className="
              inline-flex
              transition-transform
              duration-300
              ease-out
              group-hover:scale-110
            "
          >
            {button.icon}
          </span>
        </Link>
      ))}
    </div>
  );
}
