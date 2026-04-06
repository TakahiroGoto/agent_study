import { Zap } from "lucide-react";

interface HeroSectionProps {
  date: string;
  keyTakeaway: string;
  itemCount: number;
}

export function HeroSection({ date, keyTakeaway, itemCount }: HeroSectionProps) {
  const formatted = new Date(date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-8 py-10 text-white shadow-lg">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative">
        <p className="mb-2 text-sm font-medium text-blue-200">{formatted}</p>
        <div className="mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-300" />
          <h1 className="text-lg font-bold text-yellow-300">Today&apos;s Key Takeaway</h1>
        </div>
        <p className="text-xl font-semibold leading-relaxed text-white max-w-2xl">
          {keyTakeaway}
        </p>
        <div className="mt-6 flex items-center gap-4">
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            {itemCount} 件のニュース
          </span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            毎日更新
          </span>
        </div>
      </div>
    </div>
  );
}
