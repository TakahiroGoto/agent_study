import { HeroSection } from "@/components/HeroSection";
import { NewsCard } from "@/components/NewsCard";
import { TagCloud } from "@/components/TagCloud";
import { SubscribeForm } from "@/components/SubscribeForm";
import { mockDigest, trendingTags } from "@/data/mockData";
import type { Category } from "@/data/mockData";

const categories: Category[] = ["LLM", "Multi-Agent", "Tools", "Papers", "Industry"];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
      <HeroSection
        date={mockDigest.date}
        keyTakeaway={mockDigest.keyTakeaway}
        itemCount={mockDigest.items.length}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* News list */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-lg font-bold text-gray-900">今日のニュース</h2>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {mockDigest.items.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <TagCloud tags={trendingTags} />

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-gray-700">カテゴリ別件数（今日）</h3>
            <ul className="space-y-2">
              {categories.map((cat) => {
                const count = mockDigest.items.filter((i) => i.category === cat).length;
                return (
                  <li key={cat} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{cat}</span>
                    <span className="font-medium text-gray-900">{count}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <SubscribeForm />
    </main>
  );
}
