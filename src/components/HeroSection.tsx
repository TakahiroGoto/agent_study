interface HeroSectionProps {
  date: string;
  keyTakeaway: string;
  itemCount: number;
}

export function HeroSection({ date, keyTakeaway, itemCount }: HeroSectionProps) {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();

  return (
    <section className="relative overflow-hidden border-b border-[#1a1a1a] bg-[#080808] px-4 py-10 md:px-6 md:py-20">
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-60" />

      {/* Large decorative date — faded, top right, smaller on mobile */}
      <div className="absolute right-0 top-0 select-none overflow-hidden pointer-events-none">
        <div className="display-num text-[80px] leading-none text-[#111111] md:text-[clamp(120px,18vw,240px)]">
          {month}.{day}
        </div>
        <div className="font-mono text-[9px] tracking-[0.4em] text-[#1a1a1a] text-right pr-2">
          {year}
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Signal label */}
        <div className="mb-5 flex items-center gap-3 md:mb-8 md:gap-4">
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#d4ff00] uppercase">
            Signal
          </span>
          <div className="flex-1 border-t border-dashed border-[#1e1e1e] max-w-[100px] md:max-w-[200px]" />
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#2a2a2a] uppercase">
            {weekday}
          </span>
        </div>

        {/* Takeaway — bigger, readable on mobile */}
        <p className="max-w-xl text-[17px] font-medium leading-[1.6] text-[#e0e0e0] tracking-tight md:text-[clamp(18px,2.4vw,28px)]">
          {keyTakeaway}
        </p>

        {/* Stats row */}
        <div className="mt-8 flex items-center gap-5 border-t border-[#1a1a1a] pt-5 md:mt-10 md:gap-8 md:pt-6">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-2xl font-black text-[#d4ff00] leading-none md:text-3xl">
              {String(itemCount).padStart(2, "0")}
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#484848] uppercase">
              items
            </span>
          </div>
          <div className="h-3 w-px bg-[#1e1e1e]" />
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#484848] uppercase">
            Daily
          </span>
          <div className="h-3 w-px bg-[#1e1e1e]" />
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#484848] uppercase">
            {date}
          </span>
        </div>
      </div>
    </section>
  );
}
