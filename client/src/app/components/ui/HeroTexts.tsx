import React from "react";

export default function HeroTexts() {
  return (
    <div>
      <p
        className=" eyebrow   font-mono
  text-[11px]
  font-bold
  tracking-[0.14em]
  mb-[22px]"
      >
        FULL-STACK ENGINEER
      </p>

      <h1
        className="
      tracking-[-0.065em]
      text-[clamp(4rem,9vw,9rem)]
      font-[700]
      leading-[0.80em]
      m-0
      "
      >
        I build <br></br>
        <span className="text-transparent [-webkit-text-stroke:2px_var(--text)]">
          systems,
        </span>
        <br />
        not just interfaces.
      </h1>

      <p
        className="hero-description
       max-w-130
       mt-7.5
       text-[17px]
       text-[var(--text)]
      "
      >
        I build full-stack products, backend systems, APIs and developer tools —
        while exploring what happens underneath the abstractions.
      </p>
    </div>
  );
}
