"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (

    <div className="max-w-[1000px]">

    
    <section className="bg-[#f0f0f0] w-full min-h-screen text-black pl-50 pt-10">

      {/* Heading */}
      <h1 className="space-y-0.5">

        <span className="block overflow-hidden">
          <span
            data-hero-line
            className="block text-[76px] font-medium text-black/40 leading-[76px]"
          >
            You built
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            data-hero-line
            className="block text-[76px] font-medium text-black/40 leading-[76px]"
          >
            something good.
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            data-hero-line
            className="block text-[76px] font-medium text-black leading-[76px]"
          >
            Don't let a weak
          </span>
        </span>

        <span className="block overflow-hidden">
          <span
            data-hero-line
            className="block text-[76px] font-medium text-black leading-[76px]"
          >
            video kill it.
          </span>
        </span>

      </h1>

      {/* Paragraph */}
      <div
        data-hero-line
        className="text-[20px] font-medium text-black/60 leading-[30px] mt-6 mb-8"
      >
        Animated videos that make people understand your
        <br />
        product in 5 seconds and actually want to buy it.
      </div>

      {/* Button */}
      <a
        data-pop
        href="#contact"
        rel="noopener noreferrer"
        className="flex items-center justify-between bg-black/90 rounded-[15px] px-2 py-2 w-fit transition hover:-translate-y-0.5"
      >
        <span className="text-[20px] leading-[24px] font-medium text-white pl-4 pr-6">
          Get Started
        </span>

        <div className="flex items-center justify-center bg-white rounded-[12px] w-10 h-10">
          <ArrowRight className="w-4 h-4 text-black" />
        </div>
      </a>

    </section>


    </div>
  );
}