// page.tsx

import SiteShell from "@/components/layout/SiteShell";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Ticker from "@/components/ticker/Ticker";
import Experience from "@/components/experience/Experiences";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main className="min-h-screen mt-18 ">
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

        <section id="work" className="mx-auto min-h-screen  mt-10 max-w-7xl">
          <Experience />
        </section>

        <section id="projects" className="mx-auto min-h-screen  max-w-7xl">
          <Projects />
        </section>

        <section id="contact" className="mx-auto min-h-screen max-w-7xl">
          <h1 className="font-sans text-5xl font-bold">Contact</h1>
        </section>
      </main>
    </SiteShell>
  );
}
