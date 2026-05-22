"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (

    <div className="w-full max-w-[1000px]">

    
    <section id="top" className="flex min-h-screen w-full flex-col justify-center bg-[#f0f0f0] px-5 pb-12 pt-28 text-black sm:px-10 md:block md:pl-28 md:pt-28 lg:pl-50">

      {/* Heading */}
      <h1 className="space-y-0.5">

        <span className="block overflow-hidden">
          <span
            data-hero-line
            className="block text-[clamp(44px,13vw,76px)] font-medium leading-[0.98] text-black/40"
          >
            You built
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            data-hero-line
            className="block text-[clamp(44px,13vw,76px)] font-medium leading-[0.98] text-black/40"
          >
            something good.
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            data-hero-line
            className="block text-[clamp(44px,13vw,76px)] font-medium leading-[0.98] text-black"
          >
            Don&apos;t let a weak
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            data-hero-line
            className="block text-[clamp(44px,13vw,76px)] font-medium leading-[0.98] text-black"
          >
            video kill it.
          </span>
        </span>

      </h1>

      {/* Paragraph */}
      <div
        data-hero-line
        className="mb-8 mt-6 max-w-[560px] text-[18px] font-medium leading-[1.5] text-black/60 sm:text-[20px]"
      >
        Animated videos that make people understand your
        <br className="hidden sm:block" />
        product in 5 seconds and actually want to buy it.
      </div>

      {/* Button */}
      <a
        data-pop
        href="#contact"
        rel="noopener noreferrer"
        className="flex w-fit items-center justify-between rounded-[15px] bg-black/90 px-2 py-2 transition hover:-translate-y-0.5"
      >
        <span className="pl-4 pr-6 text-[18px] font-medium leading-[24px] text-white sm:text-[20px]">
          Get Started
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white">
          <ArrowRight className="w-4 h-4 text-black" />
        </div>
      </a>

    </section>


    </div>
  );
}
