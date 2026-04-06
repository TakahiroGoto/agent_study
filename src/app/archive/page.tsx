import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { archiveDigests } from "@/data/mockData";

export default function ArchivePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">過去のまとめ</h1>
        <p className="mt-1 text-sm text-gray-500">毎日のAIエージェント動向アーカイブ</p>
      </div>

      <div className="space-y-3">
        {archiveDigests.map((digest) => {
          const formatted = new Date(digest.date).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "short",
          });

          return (
            <Link
              key={digest.date}
              href={`/archive/${digest.date}`}
              className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex shrink-0 flex-col items-center text-blue-600">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-blue-600 mb-1">{formatted}</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
                  {digest.keyTakeaway}
                </p>
                <p className="mt-1 text-xs text-gray-400">{digest.itemCount} 件</p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-300 group-hover:text-blue-500 transition-colors" />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
