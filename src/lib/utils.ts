import type { NewsItem } from "@/data/mockData";

/**
 * 直近 N 時間以内の記事のみを返す（デフォルト 48 時間）
 * ビルド時刻を基準に静的フィルタリングする
 */
export function filterRecentItems(items: NewsItem[], hours = 48): NewsItem[] {
  const cutoff = Date.now() - hours * 60 * 60 * 1000;
  return items.filter((item) => new Date(item.publishedAt).getTime() > cutoff);
}

/**
 * 銀行・金融カテゴリのキーワードを含む記事を除外
 */
const EXCLUDED_KEYWORDS = [
  "銀行", "金融", "bank", "finance", "fintech", "trading", "investment",
  "株式", "証券", "保険", "融資", "ローン", "クレジット",
];

export function excludeFinancialItems(items: NewsItem[]): NewsItem[] {
  return items.filter((item) => {
    const text = `${item.title} ${item.summary} ${item.tags.join(" ")}`.toLowerCase();
    return !EXCLUDED_KEYWORDS.some((kw) => text.includes(kw.toLowerCase()));
  });
}

export function getCuratedItems(items: NewsItem[]): NewsItem[] {
  return excludeFinancialItems(filterRecentItems(items));
}
