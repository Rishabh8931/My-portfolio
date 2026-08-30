import Link from "next/link";

interface TextUnderlineProps {
  text: string;
  href: string;
}

export default function TextUnderline({ text, href }: TextUnderlineProps) {
  return (
    <Link
      href={href}
      className="
        relative
        inline-block
        after:absolute
        after:-bottom-1
        after:left-0
        after:h-0.5
        after:w-full
        after:origin-left
        after:scale-x-0
        after:bg-accent
        after:transition-transform
        after:duration-300
        after:ease-out
        hover:after:scale-x-100
      "
    >
      {text}
    </Link>
  );
}
