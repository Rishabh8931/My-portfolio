"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import TextUnderline from "../ui/Textunderline";
import ThemeToggle from "./Themtoggle";

export default function NavbarClient() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    // Initial state
    gsap.set(nav, {
      width: "100%",
      maxWidth: "100%",
      marginTop: "0px",
      height: "80px",

      borderTopWidth: "0px",
      borderRightWidth: "0px",
      borderBottomWidth: "1px",
      borderLeftWidth: "0px",

      borderStyle: "solid",
      borderColor: "var(--border)",

      borderRadius: "0px",

      paddingLeft: "24px",
      paddingRight: "24px",
      paddingTop: "16px",
      paddingBottom: "16px",

      boxShadow: "none",
    });

    const handleScroll = () => {
      const scrolled = window.scrollY > 12;

      gsap.to(nav, {
        width: "100%",
        maxWidth: scrolled ? "64rem" : "100%",
        marginTop: scrolled ? "16px" : "0px",

        // Border
        borderTopWidth: scrolled ? "1px" : "0px",
        borderRightWidth: scrolled ? "1px" : "0px",
        borderBottomWidth: "1px",
        borderLeftWidth: scrolled ? "1px" : "0px",

        height: scrolled ? "64px" : "80px",

        borderStyle: "solid",
        borderColor: "var(--border)",

        borderRadius: scrolled ? "16px" : "0px",

        paddingLeft: scrolled ? "20px" : "24px",
        paddingRight: scrolled ? "20px" : "24px",
        paddingTop: scrolled ? "12px" : "16px",
        paddingBottom: scrolled ? "12px" : "16px",

        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.08)" : "none",

        duration: 0.6,
        ease: "power3.out",
      });
    };

    // Initial scroll check
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { text: "About", href: "#about", label: "About" },
    { text: "Work", href: "#work", label: "Work" },
    { text: "Lab", href: "#lab", label: "Lab" },
    { text: "Contact", href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <nav
        ref={navRef}
        className="
          mx-auto
          flex
          w-full
          items-center
          justify-between
          bg-background/90
          px-6
          py-4
          backdrop-blur-2xs

        "
      >
        {/* Logo */}
        <Link href="/" className="font-sans text-xl font-bold tracking-tight">
          RP<span className="text-accent">_.</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <TextUnderline key={link.label} text={link.text} href={link.href} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
