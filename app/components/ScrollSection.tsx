"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const ScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    // total scrollable width
    const totalWidth = el.scrollWidth - window.innerWidth;

    gsap.to(el, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        pin: true,
        scrub: 1,
        end: () => "+=" + totalWidth,
      },
    });
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={containerRef} className="px-20">

        {/* HERO */}
        <div className="">
          <Hero />
        </div>

        {/* ABOUT */}
        <div className="">
          <About />
        </div>

        {/* WORK */}
        <div className="">
          <Work />
        </div>

        {/* CONTACT */}
        <div className="">
          <Contact />
        </div>

      </div>
    </section>
  );
};

export default ScrollSection;