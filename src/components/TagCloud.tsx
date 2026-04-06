interface TagCloudProps {
  tags: { tag: string; count: number }[];
}

export function TagCloud({ tags }: TagCloudProps) {
  const max = Math.max(...tags.map((t) => t.count));

  return (
    <div className="border border-[#1a1a1a] p-5 bg-[#0a0a0a]">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4ff00] uppercase">
          Trending
        </span>
        <div className="flex-1 border-t border-[#1a1a1a]" />
      </div>

      <ul className="space-y-3">
        {tags.map(({ tag, count }) => {
          const ratio = count / max;
          return (
            <li key={tag} className="flex items-center gap-3 group cursor-pointer">
              {/* Bar */}
              <div className="h-px flex-1 bg-[#1a1a1a]">
                <div
                  className="h-full bg-[#2a2a2a] group-hover:bg-[#d4ff00] transition-colors duration-300"
                  style={{ width: `${ratio * 100}%` }}
                />
              </div>
              <span className="font-mono text-[10px] tracking-wider text-[#404040] group-hover:text-[#e8e8e8] transition-colors duration-200 w-24 text-right uppercase">
                {tag}
              </span>
              <span className="font-mono text-[10px] text-[#242424] w-4 text-right">
                {count}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
