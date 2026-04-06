import { ExternalLink } from "lucide-react";
import type { NewsItem } from "@/data/mockData";
import { CategoryBadge } from "./CategoryBadge";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3">
        <CategoryBadge category={item.category} />
        <span className="shrink-0 text-xs text-gray-400">{item.source}</span>
      </div>

      <h2 className="mb-2 text-base font-semibold leading-snug text-gray-900 group-hover:text-blue-600 transition-colors">
        <a href={item.url} className="hover:underline">
          {item.title}
        </a>
      </h2>

      <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
        {item.summary}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
            >
              #{tag}
            </span>
          ))}
        </div>
        <a
          href={item.url}
          className="ml-2 shrink-0 text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1"
        >
          詳細 <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
