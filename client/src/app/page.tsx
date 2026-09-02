// page.tsx

import SiteShell from "@/components/layout/SiteShell";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Ticker from "./components/ticker/Ticker";

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main className="min-h-screen mt-20.5 ">
        <section
          id="hero"
          className="mx-auto min-h-screen max-w-7xl  items-center py-[1vw] "
        >
          <Hero />
          {/** Ticker */}
          <div className="mt-7">
            <Ticker />
          </div>
        </section>

        <section id="work" className="mx-auto min-h-screen max-w-7xl">
          <h1 className="font-sans text-5xl font-bold">Work</h1>
        </section>

        <section id="lab" className="mx-auto min-h-screen max-w-7xl">
          <h1 className="font-sans text-5xl font-bold">Lab</h1>
        </section>

        <section id="contact" className="mx-auto min-h-screen max-w-7xl">
          <h1 className="font-sans text-5xl font-bold">Contact</h1>
        </section>
      </main>
    </SiteShell>
  );
}
