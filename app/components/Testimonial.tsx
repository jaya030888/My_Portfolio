"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Danny",
    text: "hello",
    img: "./images/Danny.jpeg",
  },
  {
    name: "Deniz",
    text: "Smooth edit and nice timing. Adding some sound effects or changing music slightly can make it feel more lively.",
    img: "./images/Deniz.jpeg",
  },
  {
    name: "Efossa",
    text: "I’ve been working with Riya for a few months, and her editing is honestly the best I’ve seen in a long time. She’s helped grow my content to millions of views that convert into real business revenue. Highly recommend working with her.",
    img: "./images/Efossa.jpeg",
  },
  {
    name: "Emmanuel",
    text: "You’ve done a good job with transitions and clips. Slightly faster pacing and some text on screen would make it even better.",
    img: "./images/Emmanuel.jpeg",
  },
  {
    name: "Nick",
    text: "Overall it’s a solid edit. Just focus a bit more on the starting hook and keeping the energy high throughout the video.",
    img: "./images/Nick.jpeg",
  },
  {
    name: "Brenden Stein",
    text: "hello",
    img: "./images/Brenden_stein.jpeg",
  }
];

const data = [...testimonials, ...testimonials];

export default function Testimonial() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setCenter(containerRef.current.offsetWidth / 2);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    x.set(x.get() - delta * 0.06);

    if (x.get() <= -1200) {
      x.set(0);
    }
  });

  return (
    <section className="w-full pb-25 bg-[#f0f0f0] overflow-hidden">
      <div
        ref={containerRef}
        className="w-[90%] max-w-6xl mx-auto bg-[#f0f0f0] backdrop-blur-xl rounded-3xl p-10 overflow-hidden"
      >
        <h2 className="text-center text-5xl font-semibold mb-15">
          What my Clients say!
        </h2>

        <motion.div style={{ x }} className="flex gap-6">
          {data.map((item, i) => (
            <Card
              key={i}
              item={item}
              motionX={x}
              index={i}
              center={center}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ item, motionX, index, center }: any) {
  const cardWidth = 260;
  const gap = 24;
  const totalWidth = cardWidth + gap;

  const position = useTransform(motionX, (latest:number) => {
    return index * totalWidth + latest;
  });

  // ✅ FIX: add half width to get actual center of card
  const cardCenter = useTransform(position, (pos) => {
    return pos + cardWidth / 2;
  });

  const distance = useTransform(cardCenter, (c) =>
    Math.abs(center - c)
  );

  const scale = useTransform(distance, [0, 300], [1.15, 0.8]);
  const opacity = useTransform(distance, [0, 300], [1, 0.4]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="min-w-[260px] bg-[#ffffff] shadow-[0_10px_20px_rgba(26,26,26,0.3)] rounded-2xl shadow-xl p-6 text-center"
    >
      <img
        src={item.img}
        className="w-14 h-14 rounded-full mx-auto mb-3"
      />

      <h3 className="font-semibold">{item.name}</h3>

      <p className="text-sm text-[#302929] mt-2">
        {item.text}
      </p>
    </motion.div>
  );
}