import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-3 px-4 pt-5 sm:px-8 sm:pt-8 lg:px-10">
      <a
        href="#top"
        className="flex min-w-0 items-center gap-2 rounded-[15px] bg-white px-2 py-2 pr-3 shadow-[0_12px_40px_rgba(26,26,26,0.08)] sm:gap-3 sm:pr-5"
        aria-label="LaunchAnything home"
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-white sm:h-9 sm:w-9">
          <span className="relative h-4 w-4">
            <span className="absolute left-[5px] top-0 h-0 w-0 border-x-[4px] border-b-[8px] border-x-transparent border-b-black" />
            <span className="absolute bottom-0 left-[3px] h-[5px] w-[10px] rounded-[10px] bg-black" />
          </span>
        </span>
        <span className="truncate text-[13px] font-medium text-[#1a1a1a] sm:text-[15px]">LaunchAnything</span>
      </a>

      <a
        href="#contact"
        className="flex shrink-0 items-center gap-2 rounded-[15px] bg-white py-2 pl-3 pr-2 shadow-[0_12px_40px_rgba(26,26,26,0.08)] transition hover:-translate-y-0.5 sm:gap-3 sm:pl-5"
      >
        <span className="text-[13px] font-medium text-[#1a1a1a] sm:text-[15px]">Get Started</span>
        <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#f0f0f0] sm:h-9 sm:w-9">
          <ArrowRight size={17} strokeWidth={2.3} />
        </span>
      </a>
    </header>
  );
}
