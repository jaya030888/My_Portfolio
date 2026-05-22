import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import MotionEffects from "./components/MotionEffects";
import About from "./components/About";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] text-[#1a1a1a]">
      <MotionEffects />
      <Header />

      <section
        data-horizontal
        className="relative overflow-hidden bg-[#f0f0f0] py-20 max-md:overflow-visible max-md:py-0"
      >
        <div
          data-horizontal-track
          className="flex w-max items-start gap-20 max-md:w-full max-md:flex-col max-md:gap-0"
        >
          <div className="shrink-0 px-10 max-md:w-full max-md:px-0">
            <Hero />
          </div>

          <div className="shrink-0 px-10 max-md:w-full max-md:px-0">
            <About />
          </div>

          <div className="shrink-0 px-10 max-md:w-full max-md:px-0">
            <Work />
          </div>
        </div>
      </section>

      <Testimonial />
      <Contact />

    </main>

  );
}
