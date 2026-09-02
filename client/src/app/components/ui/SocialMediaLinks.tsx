import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FileText } from "lucide-react";

const socialMediaLinks = [
  {
    name: "GitHub",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/your-username",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    href: "https://x.com/your-username",
    icon: FaXTwitter,
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function SocialMediaLinks() {
  return (
    <div className="flex gap-5">
      {socialMediaLinks.map((link) => {
        const Icon = link.icon;

        return (
          <div key={link.name} className="group relative">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="
                flex
                items-center
                justify-center
                underline
                decoration-accent
                decoration-2
                underline-offset-4
              "
            >
              <Icon
                size={20}
                strokeWidth={1.8}
                className="
                  transition-all
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:scale-110
                  group-hover:text-accent
                "
              />
            </Link>

            {/* Hover mini card */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-full
                z-50
                mt-3
                -translate-x-1/2
                translate-y-1
                whitespace-nowrap
                rounded-md
                border
               border-(--border)
               bg-(--background)
                px-3
                py-1.5
                font-mono
                text-[10px]
                uppercase
                tracking-wider
                text-(--foreground)
                opacity-0
                shadow-sm
                transition-all
                duration-200
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              {link.name}

              {/* Tooltip arrow */}
              <span
                className="
                  absolute
                  -top-1
                  left-1/2
                  h-2
                  w-2
                  -translate-x-1/2
                  rotate-45
                  border-l
                  border-t
                  bg-(--background)
                 border-(--border)
                "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
