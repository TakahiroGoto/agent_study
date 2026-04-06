import type { Category } from "@/data/mockData";

const categoryColors: Record<Category, string> = {
  LLM: "text-[#7c6af5]",
  "Multi-Agent": "text-[#4f9cf5]",
  Tools: "text-[#4ff5a0]",
  Papers: "text-[#f5c24f]",
  Industry: "text-[#f54f7c]",
};

export function CategoryBadge({ category }: { category: Category }) {
  return (
    <span className={`font-mono text-[10px] tracking-[0.3em] uppercase ${categoryColors[category]}`}>
      {category}
    </span>
  );
}
