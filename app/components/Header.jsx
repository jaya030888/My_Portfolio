import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 pt-8 sm:px-8 lg:px-10">
      <a
        href="#top"
        className="flex items-center gap-3 rounded-[15px] bg-white px-2 py-2 pr-5 shadow-[0_12px_40px_rgba(26,26,26,0.08)]"
        aria-label="LaunchAnything home"
      >
        <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-white">
          <span className="relative h-4 w-4">
            <span className="absolute left-[5px] top-0 h-0 w-0 border-x-[4px] border-b-[8px] border-x-transparent border-b-black" />
            <span className="absolute bottom-0 left-[3px] h-[5px] w-[10px] rounded-[10px] bg-black" />
          </span>
        </span>
        <span className="text-[15px] font-medium text-[#1a1a1a]">LaunchAnything</span>
      </a>

      <a
        href="#contact"
        className="flex items-center gap-3 rounded-[15px] bg-white py-2 pl-5 pr-2 shadow-[0_12px_40px_rgba(26,26,26,0.08)] transition hover:-translate-y-0.5"
      >
        <span className="text-[15px] font-medium text-[#1a1a1a]">Get Started</span>
        <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#f0f0f0]">
          <ArrowRight size={17} strokeWidth={2.3} />
        </span>
      </a>
    </header>
  );
}
