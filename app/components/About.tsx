

export default function About() {
  return (
    <section data-video-pin className="flex h-screen justify-center bg-[#f0f0f0] px-5 pt-12 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-h-[400px] max-w-[800px]">
        <div data-main-video className="relative aspect-[16/9] overflow-hidden rounded-[22px] bg-[#1a1a1a] shadow-[0_30px_80px_rgba(26,26,26,0.16)]">
        <video
          autoPlay
          loop
          muted
          playsInline
            className="h-full w-full object-cover opacity-95"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>

          <div className="absolute bottom-4 right-4 rounded-[16px] bg-white/92 px-4 py-3 text-right shadow-[0_16px_50px_rgba(0,0,0,0.16)] backdrop-blur sm:bottom-6 sm:right-6">
            <p className="text-[13px] font-medium text-[#777]">@</p>
          </div>
        </div>
      </div>

    </section>
  );
}
