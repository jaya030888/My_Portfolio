'use client'
import { useState } from "react";
import { createPortal } from "react-dom";

const projects = [
  { title: "Danny", subtitle: "Educational Video", src: "/videos/first.mp4" },
  { title: "Jack", subtitle: "Trial Video", src: "/videos/second.mp4" },
  { title: "Deniz", subtitle: "Trial Video", src: "/videos/third.mp4" },
  { title: "AVA", subtitle: "Trial Video", src: "/videos/fourth.mp4" },
  { title: "Deniz", subtitle: "Content Video", src: "/videos/fifth.mp4" },
  { title: "Danny", subtitle: "Long Form Video", src: "/videos/sixth.mp4" }
];

export default function Work() {

  const [open, setOpen] = useState(false);
  const [vdo, setVdo] = useState('')

  const modal =
    open && typeof document !== "undefined"
      ? createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            aria-label="Close project video"
          />

          <div className="relative z-10 flex w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl bg-black shadow-2xl sm:rounded-3xl">
            <video
              controls
              autoPlay
              className="max-h-[86vh] w-full object-contain"
            >
              <source src={vdo} type="video/mp4" />
            </video>
          </div>
        </div>,
        document.body
      )
      : null;


  return (
    <section id="work" className="flex min-h-screen bg-[#f0f0f0] px-5 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1120px]">
        <div data-reveal className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="max-w-[640px] text-[36px] font-medium leading-[0.98] text-[#A8A8A8] sm:text-[54px]">
            Selected Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
            <article key={`${p.title}-${p.src}`}
             data-project-card
             onClick={() => {
                              setOpen(true);
                              setVdo(p.src);
                             }}
              className="group">
              <div className="relative aspect-video overflow-hidden rounded-[18px] bg-[#d9d9d9] sm:rounded-[22px]">
              <video
                autoPlay
                loop
                muted
                  playsInline
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              >
                <source src={p.src} type="video/mp4" />
              </video>
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </div>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="text-[18px] font-medium text-[#1a1a1a]">
                    {p.title}
                  </h3>
                  <p className="text-[15px] font-medium text-[#777]">{p.subtitle}</p>
                </div>
                <span className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#5f5f5f]">
                  0{i + 1}
                </span>
            </div>
            </article>
        ))}
        </div>
      </div>

      {modal}
      
    </section>
  );
}
