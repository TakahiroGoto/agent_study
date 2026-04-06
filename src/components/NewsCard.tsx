import { ExternalLink } from "lucide-react";
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
      className={`group border-b border-[#141414] border-l-2 ${borderColors[item.category]} pl-5 py-7 transition-colors duration-200 hover:bg-[#0c0c0c]`}
    >
      <div className="flex items-start justify-between gap-6">
        {/* Index number */}
        <span className="font-mono text-[11px] text-[#242424] mt-0.5 shrink-0 w-6 text-right">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          {/* Meta row */}
          <div className="mb-3 flex items-center gap-4">
            <CategoryBadge category={item.category} />
            <span className="font-mono text-[10px] text-[#2e2e2e] tracking-wider">
              {item.source}
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-3 text-[15px] font-medium leading-snug text-[#d8d8d8] group-hover:text-white transition-colors duration-200 tracking-tight">
            <a href={item.url}>{item.title}</a>
          </h2>

          {/* Summary */}
          <p className="text-[13px] leading-relaxed text-[#404040] line-clamp-2">
            {item.summary}
          </p>

          {/* Tags */}
          <div className="mt-4 flex items-center gap-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-[#303030] tracking-wider"
              >
                #{tag}
              </span>
            ))}
            <a
              href={item.url}
              className="ml-auto font-mono text-[10px] text-[#303030] hover:text-[#d4ff00] transition-colors flex items-center gap-1.5 tracking-wider"
            >
              Read <ExternalLink className="h-2.5 w-2.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
