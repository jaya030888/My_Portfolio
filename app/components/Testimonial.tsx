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
    text: "I’ve worked with Riya for a couple months now and it’s been the best work I’ve seen from a editor is a long time, she’s helped me with all of my content which lead to thousands of views which then convert to money being made in my business, 100% one for her best woman in the game when it comes to editing, would highly recommend working with her",
    img: "./images/Danny.jpeg",
  },
  {
    name: "Deniz",
    text: "I’ve worked with Riya for a couple months now and it’s been the best work I’ve seen from a editor is a long time, she’s helped me with all of my content which lead to thousands of views which then convert to money being made in my business, 100% one for her best woman in the game when it comes to editing, would highly recommend working with her",
    img: "./images/Deniz.jpeg",
  },
  {
    name: "Efossa",
    text: "I’ve worked with Riya for a couple months now and it’s been the best work I’ve seen from a editor is a long time, she’s helped me with all of my content which lead to thousands of views which then convert to money being made in my business, 100% one for her best woman in the game when it comes to editing, would highly recommend working with her",
    img: "./images/Efossa.jpeg",
  },
  {
    name: "Emmanuel",
    text: "I’ve worked with Riya for a couple months now and it’s been the best work I’ve seen from a editor is a long time, she’s helped me with all of my content which lead to thousands of views which then convert to money being made in my business, 100% one for her best woman in the game when it comes to editing, would highly recommend working with her",
    img: "./images/Emmanuel.jpeg",
  },
  {
    name: "Nick",
    text: "I’ve worked with Riya for a couple months now and it’s been the best work I’ve seen from a editor is a long time, she’s helped me with all of my content which lead to thousands of views which then convert to money being made in my business, 100% one for her best woman in the game when it comes to editing, would highly recommend working with her",
    img: "./images/Nick.jpeg",
  },
  {
    name: "Brenden Stein",
    text: "I’ve worked with Riya for a couple months now and it’s been the best work I’ve seen from a editor is a long time, she’s helped me with all of my content which lead to thousands of views which then convert to money being made in my business, 100% one for her best woman in the game when it comes to editing, would highly recommend working with her",
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
      className="min-w-[260px] bg-white rounded-2xl shadow-xl p-6 text-center"
    >
      <img
        src={item.img}
        className="w-14 h-14 rounded-full mx-auto mb-3"
      />

      <h3 className="font-semibold">{item.name}</h3>

      <p className="text-sm text-gray-500 mt-2">
        {item.text}
      </p>
    </motion.div>
  );
}