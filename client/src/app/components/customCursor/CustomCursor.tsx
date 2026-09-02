"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const effectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const effects = effectsRef.current;

    if (!cursor || !effects) return;

    // -----------------------------
    // CURSOR MOVEMENT
    // -----------------------------

    const handleMouseMove = (event: MouseEvent) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.15,
        ease: "power2.out",
        overwrite: true,
      });
    };

    // -----------------------------
    // CLICK EFFECT
    // -----------------------------

    const handleClick = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      const container = document.createElement("div");

      Object.assign(container.style, {
        position: "fixed",
        left: `${clientX}px`,
        top: `${clientY}px`,
        width: "0px",
        height: "0px",
        pointerEvents: "none",
        zIndex: "9998",
      });

      // -----------------------------
      // CENTER POPUP
      // -----------------------------

      const popup = document.createElement("div");

      Object.assign(popup.style, {
        position: "absolute",
        left: "0",
        top: "0",
        width: "7px",
        height: "7px",
        borderRadius: "50%",
        backgroundColor: "var(--accent)",
        transform: "translate(-50%, -50%) scale(0)",
      });

      container.appendChild(popup);

      // -----------------------------
      // SPARKS
      // -----------------------------

      const sparkCount = 8;

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("div");

        const angle = (360 / sparkCount) * i;
        const distance = gsap.utils.random(16, 28);

        Object.assign(spark.style, {
          position: "absolute",
          left: "0",
          top: "0",
          width: "3px",
          height: "3px",
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          transform: "translate(-50%, -50%)",
        });

        container.appendChild(spark);

        gsap.to(spark, {
          x: Math.cos((angle * Math.PI) / 180) * distance,
          y: Math.sin((angle * Math.PI) / 180) * distance,
          scale: 0,
          opacity: 0,
          duration: 0.45,
          ease: "power3.out",
        });
      }

      effects.appendChild(container);

      // -----------------------------
      // POPUP ANIMATION
      // -----------------------------

      gsap.to(popup, {
        scale: 1.8,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
      });

      // -----------------------------
      // CLEANUP
      // -----------------------------

      gsap.delayedCall(0.5, () => {
        container.remove();
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);

      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <>
      {/* Custom Figma-style cursor */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          will-change-transform
        "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 2L20 12L13 14L11 21L4 2Z"
            fill="var(--text)"
            stroke="var(--background)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Click effects */}
      <div
        ref={effectsRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9998]"
      />
    </>
  );
}
