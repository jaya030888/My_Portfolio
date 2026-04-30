import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import MotionEffects from "./components/MotionEffects";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] text-[#1a1a1a]">
      <MotionEffects />
      <Header />

      <section
        data-horizontal
        className="relative overflow-hidden py-20 bg-[#f0f0f0]"
      >
        <div
          data-horizontal-track
          className="flex w-max gap-20 items-start"
        >
          <div className="shrink-0 px-10">
            <Hero />
          </div>

          <div className="shrink-0 px-10">
            <About />
          </div>

          <div className="shrink-0 px-10">
            <Work />
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}