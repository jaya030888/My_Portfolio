"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Danny",
    text: "When I started working with Riya I had a picture of what I wanted my content to look like and she was able to take from what I had posted and transform that into my vision. She was prompt to send content back and quick to fix changes that I had required can’t recommend Riya enough affordable and reliable with premium edits.",
    img: "/images/Danny.jpeg",
  },
  {
    name: "Deniz",
    text: "Smooth edit and nice timing. Adding some sound effects or changing music slightly can make it feel more lively.",
    img: "/images/Deniz.jpeg",
  },
  {
    name: "Efossa",
    text: "I’ve been working with Riya for a few months, and her editing is honestly the best I’ve seen in a long time. She’s helped grow my content to millions of views that convert into real business revenue. Highly recommend working with her.",
    img: "/images/Efossa.jpeg",
  },
  {
    name: "Emmanuel",
    text: "You’ve done a good job with transitions and clips. Slightly faster pacing and some text on screen would make it even better.",
    img: "/images/Emmanuel.jpeg",
  },
  {
    name: "Nick",
    text: "Overall it’s a solid edit. Just focus a bit more on the starting hook and keeping the energy high throughout the video.",
    img: "/images/Nick.jpeg",
  },
  {
    name: "Brenden Stein",
    text: "You’ve done a good job with transitions and clips.",
    img: "/images/Brenden_stein.jpeg",
  }
];

const data = [...testimonials, ...testimonials];


export default function Testimonial() {
  const [halfWidth, setHalfWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(260);

  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState(0);

  useEffect(() => {
    const updateMetrics = () => {
      if (!containerRef.current) return;

      const nextCardWidth = window.innerWidth < 640 ? 240 : 260;
      const nextCenter = containerRef.current.offsetWidth / 2;
      const nextHalfWidth = testimonials.length * (nextCardWidth + 24);

      setCardWidth(nextCardWidth);
      setCenter(nextCenter);
      setHalfWidth(nextHalfWidth);
      x.set(nextCenter - nextCardWidth / 2);
    };

    updateMetrics();
    window.addEventListener("resize", updateMetrics);

    return () => window.removeEventListener("resize", updateMetrics);
  }, [x]);

  useAnimationFrame((_, delta) => {
    if (!halfWidth || !center) return;

    const startX = center - cardWidth / 2;
    x.set(x.get() - delta * 0.06);

    if (x.get() <= startX - halfWidth) {
      x.set(startX);
    }
  });

  return (
    <section className="w-full overflow-hidden bg-[#f0f0f0] pb-16 sm:pb-25">
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-6xl overflow-hidden bg-[#f0f0f0] px-5 py-8 backdrop-blur-xl sm:w-[90%] sm:rounded-3xl sm:p-10"
      >
        <h2 className="mb-10 text-center text-[36px] font-semibold leading-[1.05] sm:mb-15 sm:text-5xl">
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
              cardWidth={cardWidth}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

type TestimonialItem = {
  name: string;
  text: string;
  img: string;
};

type CardProps = {
  item: TestimonialItem;
  motionX: MotionValue<number>;
  index: number;
  center: number;
  cardWidth: number;
};

function Card({ item, motionX, index, center, cardWidth }: CardProps) {
  const gap = 24;
  const totalWidth = cardWidth + gap;

  const position = useTransform(motionX, (latest:number) => {
    return index * totalWidth + latest;
  });

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
      className="w-[240px] shrink-0 rounded-2xl bg-[#ffffff] p-5 text-center shadow-xl shadow-[0_10px_20px_rgba(26,26,26,0.3)] sm:w-[260px] sm:p-6"
    >
      <img
        src={item.img}
        alt={`${item.name} testimonial`}
        className="mx-auto mb-3 h-14 w-14 rounded-full object-cover"
      />

      <h3 className="font-semibold">{item.name}</h3>

      <p className="text-sm text-[#302929] mt-2">
        {item.text}
      </p>
    </motion.div>
  );
}
