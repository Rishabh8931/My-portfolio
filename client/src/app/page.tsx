// page.tsx

import SiteShell from "@/components/layout/SiteShell";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main className="min-h-screen pt-[80px]">
        <section id="about" className="mx-auto min-h-screen max-w-7xl">
          <h1 className="font-sans text-5xl font-bold">About</h1>
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
