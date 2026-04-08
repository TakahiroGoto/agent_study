import Link from "next/link";
import type { NewsItem } from "@/data/mockData";
import { CategoryBadge } from "./CategoryBadge";

const borderColors: Record<string, string> = {
  LLM: "border-l-[#7c6af5]",
  "Multi-Agent": "border-l-[#4f9cf5]",
  Tools: "border-l-[#4ff5a0]",
  Papers: "border-l-[#f5c24f]",
  Industry: "border-l-[#f54f7c]",
};

export function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <article
      className={`group border-b border-[#141414] border-l-2 ${borderColors[item.category]} pl-4 py-6 transition-colors duration-200 hover:bg-[#0c0c0c] md:pl-5 md:py-7`}
    >
      <div className="flex items-start gap-4">
        {/* Index number — hidden on very small screens */}
        <span className="hidden sm:block font-mono text-[11px] text-[#242424] mt-0.5 shrink-0 w-5 text-right">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          {/* Meta row */}
          <div className="mb-2 flex items-center gap-3 flex-wrap">
            <CategoryBadge category={item.category} />
            <span className="font-mono text-[10px] text-[#606060] tracking-wider">
              {item.source}
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-2 text-[15px] font-semibold leading-snug text-[#e8e8e8] group-hover:text-white transition-colors duration-200 tracking-tight">
            <Link href={`/news/${item.id}`}>{item.title}</Link>
          </h2>

          {/* Summary */}
          <p className="text-[13px] leading-relaxed text-[#888888] line-clamp-2">
            {item.summary}
          </p>

          {/* Tags + Detail link */}
          <div className="mt-3 flex items-center gap-3 flex-wrap">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-[#505050] tracking-wider"
              >
                #{tag}
              </span>
            ))}
            <Link
              href={`/news/${item.id}`}
              className="ml-auto font-mono text-[11px] text-[#d4ff00] hover:text-white transition-colors tracking-wider"
            >
              Detail →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
