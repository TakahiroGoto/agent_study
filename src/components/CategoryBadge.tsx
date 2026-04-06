import type { Category } from "@/data/mockData";

const categoryStyles: Record<Category, string> = {
  LLM: "bg-purple-100 text-purple-700 border-purple-200",
  "Multi-Agent": "bg-blue-100 text-blue-700 border-blue-200",
  Tools: "bg-green-100 text-green-700 border-green-200",
  Papers: "bg-amber-100 text-amber-700 border-amber-200",
  Industry: "bg-rose-100 text-rose-700 border-rose-200",
};

export function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryStyles[category]}`}
    >
      {category}
    </span>
  );
}
