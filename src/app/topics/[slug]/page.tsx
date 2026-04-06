import { NewsCard } from "@/components/NewsCard";
import { mockDigest } from "@/data/mockData";
import type { Category } from "@/data/mockData";

const slugToCategory: Record<string, Category> = {
  "llm": "LLM",
  "multi-agent": "Multi-Agent",
  "tools": "Tools",
  "papers": "Papers",
  "industry": "Industry",
};

export function generateStaticParams() {
  return Object.keys(slugToCategory).map((slug) => ({ slug }));
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = slugToCategory[slug];

  if (!category) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-gray-500">カテゴリが見つかりません。</p>
      </main>
    );
  }

  const items = mockDigest.items.filter((item) => item.category === category);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{category}</h1>
        <p className="mt-1 text-sm text-gray-500">{items.length} 件のニュース</p>
      </div>

      <div className="space-y-4">
        {items.length > 0 ? (
          items.map((item) => <NewsCard key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500">このカテゴリのニュースはまだありません。</p>
        )}
      </div>
    </main>
  );
}
