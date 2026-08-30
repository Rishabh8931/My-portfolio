"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;

    const rect = button.getBoundingClientRect();

    // Button ke center ki position
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Button se screen ke sabse door corner tak distance
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // CSS variables
    document.documentElement.style.setProperty("--theme-x", `${x}px`);

    document.documentElement.style.setProperty("--theme-y", `${y}px`);

    document.documentElement.style.setProperty("--theme-radius", `${radius}px`);

    const newTheme = resolvedTheme === "light" ? "dark" : "light";

    // Browser View Transition API support
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        flex
        items-center
        rounded-full
        border
        border-border
        bg-background
        p-[3px]
      "
    >
      <span
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          hover:bg-black
          hover:text-white
          hover:font-extrabold
        "
      >
        {resolvedTheme === "light" ? "☾" : "☀"}
      </span>
    </button>
  );
}
