import { HeroSection } from "@/components/HeroSection";
import { NewsCard } from "@/components/NewsCard";
import { TagCloud } from "@/components/TagCloud";
import { TickerBar } from "@/components/TickerBar";
import { SubscribeForm } from "@/components/SubscribeForm";
import { mockDigest, trendingTags } from "@/data/mockData";
import type { Category } from "@/data/mockData";
import { getCuratedItems } from "@/lib/utils";

const categories: Category[] = ["LLM", "Multi-Agent", "Tools", "Papers", "Industry"];

const categoryDotColors: Record<Category, string> = {
  LLM: "bg-[#7c6af5]",
  "Multi-Agent": "bg-[#4f9cf5]",
  Tools: "bg-[#4ff5a0]",
  Papers: "bg-[#f5c24f]",
  Industry: "bg-[#f54f7c]",
};

export default function Home() {
  const items = getCuratedItems(mockDigest.items);
  const categoryCounts = categories.map((cat) => ({
    cat,
    count: items.filter((i) => i.category === cat).length,
  }));

  return (
    <main className="bg-[#080808] min-h-screen">
      <HeroSection
        date={mockDigest.date}
        keyTakeaway={mockDigest.keyTakeaway}
        itemCount={items.length}
      />

      <TickerBar tags={trendingTags} />

      {/* Main layout */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]">

          {/* News list */}
          <div>
            {/* Section header */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4ff00] uppercase">
                  Today
                </span>
                <div className="w-6 border-t border-[#1a1a1a]" />
              </div>
              {/* Category filter — horizontally scrollable on mobile */}
              <div className="flex gap-4 overflow-x-auto scrollbar-none pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="font-mono text-[10px] tracking-wider text-[#2e2e2e] uppercase hover:text-[#e8e8e8] transition-colors duration-200 whitespace-nowrap shrink-0"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#1a1a1a] mb-0" />

            {/* Items */}
            {items.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <TagCloud tags={trendingTags} />

            {/* Category breakdown */}
            <div className="border border-[#1a1a1a] p-5 bg-[#0a0a0a]">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4ff00] uppercase">
                  Index
                </span>
                <div className="flex-1 border-t border-[#1a1a1a]" />
              </div>
              <ul className="space-y-3">
                {categoryCounts.map(({ cat, count }) => (
                  <li key={cat} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`h-1.5 w-1.5 rounded-full ${categoryDotColors[cat]}`} />
                      <span className="font-mono text-[10px] tracking-wider text-[#888888] uppercase">
                        {cat}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#686868]">
                      {String(count).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative element - large number */}
            <div className="border border-[#1a1a1a] p-5 bg-[#0a0a0a] overflow-hidden relative">
              <div className="absolute bottom-0 right-0 display-num text-[80px] text-[#111111] leading-none select-none pointer-events-none">
                AI
              </div>
              <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4ff00] uppercase block mb-3">
                Since
              </span>
              <span className="font-mono text-[11px] text-[#2e2e2e]">2026.04.01</span>
              <div className="mt-4 border-t border-[#141414] pt-4">
                <span className="font-mono text-[10px] text-[#242424] tracking-wider">
                  AGENT DAILY v1.0
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <SubscribeForm />
    </main>
  );
}
