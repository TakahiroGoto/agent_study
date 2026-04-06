import { TrendingUp } from "lucide-react";

interface TagCloudProps {
  tags: { tag: string; count: number }[];
}

export function TagCloud({ tags }: TagCloudProps) {
  const max = Math.max(...tags.map((t) => t.count));

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-blue-500" />
        <h3 className="text-sm font-semibold text-gray-700">今週のトレンドタグ</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ tag, count }) => {
          const ratio = count / max;
          const size =
            ratio > 0.8
              ? "text-base font-bold"
              : ratio > 0.5
              ? "text-sm font-semibold"
              : "text-xs font-medium";
          const opacity =
            ratio > 0.8
              ? "bg-blue-100 text-blue-700"
              : ratio > 0.5
              ? "bg-blue-50 text-blue-600"
              : "bg-gray-100 text-gray-500";
          return (
            <button
              key={tag}
              className={`rounded-full px-3 py-1 transition-opacity hover:opacity-80 ${size} ${opacity}`}
            >
              #{tag}
              <span className="ml-1 text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
