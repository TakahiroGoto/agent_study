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
    <section className="relative overflow-hidden border-b border-[#1a1a1a] bg-[#080808] px-6 py-16 md:py-24">
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 opacity-60" />

      {/* Decorative large date — far right, very faded */}
      <div className="absolute right-0 top-0 select-none overflow-hidden pointer-events-none">
        <div className="display-num text-[clamp(120px,18vw,240px)] text-[#111111] leading-none">
          {month}.{day}
        </div>
        <div className="font-mono text-[10px] tracking-[0.5em] text-[#1e1e1e] text-right pr-2">
          {year}
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Signal label */}
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4ff00] uppercase">
            Signal
          </span>
          <div className="flex-1 border-t border-dashed border-[#1e1e1e] max-w-[200px]" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#2a2a2a] uppercase">
            {weekday}
          </span>
        </div>

        {/* Takeaway text — large, editorial */}
        <p className="max-w-2xl text-[clamp(18px,2.4vw,28px)] font-medium leading-[1.45] text-[#e8e8e8] tracking-tight">
          {keyTakeaway}
        </p>

        {/* Bottom stats row */}
        <div className="mt-10 flex items-center gap-8 border-t border-[#1a1a1a] pt-6">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-3xl font-black text-[#d4ff00] leading-none">
              {String(itemCount).padStart(2, "0")}
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#484848] uppercase">
              items
            </span>
          </div>
          <div className="h-4 w-px bg-[#1e1e1e]" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#484848] uppercase">
            Daily Update
          </span>
          <div className="h-4 w-px bg-[#1e1e1e]" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#484848] uppercase">
            {date}
          </span>
        </div>
      </div>
    </section>
  );
}
