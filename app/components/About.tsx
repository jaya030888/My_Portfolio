"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function About() {
  const [open, setOpen] = useState(false);

  const modal =
    open && typeof document !== "undefined"
      ? createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              aria-label="Close intro video"
            />

            <div className="relative z-10 flex w-full max-w-5xl items-center justify-center overflow-hidden rounded-2xl bg-black shadow-2xl sm:rounded-3xl">
              <video
                controls
                autoPlay
                className="max-h-[86vh] w-full object-contain"
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section data-video-pin className="flex items-center justify-center bg-[#f0f0f0] px-5 py-6 sm:min-h-screen sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[800px]">
        <button
          type="button"
          data-main-video
          onClick={() => setOpen(true)}
          className="relative block aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[18px] bg-[#1a1a1a] p-0 text-left shadow-[0_30px_80px_rgba(26,26,26,0.16)] sm:rounded-[22px]"
          aria-label="Open intro video"
        >
        <video
          autoPlay
          loop
          muted
          playsInline
            className="h-full w-full object-cover opacity-95"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>

          <div className="absolute bottom-3 right-3 rounded-[14px] bg-white/92 px-3 py-2 text-right shadow-[0_16px_50px_rgba(0,0,0,0.16)] backdrop-blur sm:bottom-6 sm:right-6 sm:px-4 sm:py-3">
            <p className="text-[13px] font-medium text-[#777]">@</p>
          </div>
        </button>
      </div>

      {modal}
    </section>
  );
}
