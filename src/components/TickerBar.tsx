interface TickerBarProps {
  tags: { tag: string; count: number }[];
}

export function TickerBar({ tags }: TickerBarProps) {
  const repeated = [...tags, ...tags, ...tags];

  return (
    <div className="overflow-hidden border-b border-[#1a1a1a] bg-[#080808] py-2.5">
      <div className="ticker-track flex gap-10 w-max">
        {repeated.map((t, i) => (
          <span
            key={i}
            className="font-mono text-[10px] tracking-[0.25em] text-[#2e2e2e] whitespace-nowrap uppercase"
          >
            {t.tag}
            <span className="ml-2 text-[#d4ff00] opacity-70">{t.count}</span>
            <span className="ml-10 text-[#1e1e1e]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
