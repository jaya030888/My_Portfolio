"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(500, 33);

    const ctx = gsap.context(() => {
      const horizontalTrack = document.querySelector<HTMLElement>("[data-horizontal-track]");
      const horizontalSection = document.querySelector<HTMLElement>("[data-horizontal]");
      let horizontalTween: gsap.core.Tween | undefined;

      if (horizontalTrack && horizontalSection) {
        const getHorizontalDistance = () =>
          horizontalTrack.scrollWidth - window.innerWidth;

        gsap.set(horizontalTrack, {
          force3D: true,
          willChange: "transform",
        });

        horizontalTween = gsap.to(horizontalTrack, {
          x: () => -getHorizontalDistance(),
          ease: "none",
          overwrite: "auto",
          scrollTrigger: {
            trigger: horizontalSection,
            start: "top top",
            end: () => `+=${getHorizontalDistance() * 1.35}`,
            scrub: 1.25,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: false,
          },
        });
      }

      gsap.set("[data-reveal]", { opacity: 0, y: 56 });
      gsap.set("[data-hero-line]", { opacity: 0, yPercent: 100 });
      gsap.set("[data-pop]", { opacity: 0, scale: 0.94, y: 24 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to("[data-hero-line]", {
          opacity: 1,
          yPercent: 0,
          duration: 1.05,
          stagger: 0.12,
        })
        .to(
          "[data-hero-copy]",
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.45"
        )
        .to(
          "[data-pop]",
          { opacity: 1, scale: 1, y: 0, duration: 0.3, stagger: 0.05 },
          "-=0.25"
        );

      gsap.fromTo(
        "[data-main-video]",
        { borderRadius: 18, scale: 1, x: 0, y: 0 },
        {
          borderRadius: 10,
          scale: 1.34,
          x: -180,
          y: 4,
          ease: "power1.out",
          scrollTrigger: {
            trigger: "[data-video-pin]",
            containerAnimation: horizontalTween,
            start: "left 68%",
            end: "left 20%",
            scrub: 1.1,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
        const isHorizontalItem = Boolean(horizontalSection?.contains(item));

        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            containerAnimation: isHorizontalItem ? horizontalTween : undefined,
            start: isHorizontalItem ? "left 82%" : "top 82%",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            delay: i * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 86%",
            },
          }
        );
      });

      gsap.to("[data-marquee-track]", {
        xPercent: -50,
        duration: 18,
        ease: "none",
        repeat: -1,
      });

      gsap.fromTo(
        "[data-form-field]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-contact-form]",
            start: "top 80%",
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
