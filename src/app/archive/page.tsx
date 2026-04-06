import Link from "next/link";
import { archiveDigests } from "@/data/mockData";

export default function ArchivePage() {
  return (
    <main className="bg-[#080808] min-h-screen">
      {/* Header */}
      <div className="border-b border-[#1a1a1a] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4ff00] uppercase">
              Archive
            </span>
            <div className="w-8 border-t border-dashed border-[#1a1a1a]" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-[#e8e8e8]">
            Past Digests
          </h1>
          <p className="mt-2 font-mono text-[11px] tracking-wider text-[#303030] uppercase">
            {archiveDigests.length} days logged
          </p>
        </div>
      </div>

      {/* List */}
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="border-t border-[#1a1a1a]">
          {archiveDigests.map((digest, i) => (
            <Link
              key={digest.date}
              href={`/archive/${digest.date}`}
              className="group flex items-start gap-8 border-b border-[#141414] py-8 hover:bg-[#0c0c0c] transition-colors duration-200 -mx-6 px-6"
            >
              {/* Index */}
              <span className="font-mono text-[11px] text-[#1e1e1e] mt-0.5 shrink-0 w-6 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Date */}
              <div className="shrink-0 w-24">
                <div className="font-mono text-[11px] text-[#404040] tracking-wider">
                  {digest.date}
                </div>
                <div className="mt-1 font-mono text-[10px] text-[#242424] tracking-wider">
                  {String(digest.itemCount).padStart(2, "0")} items
                </div>
              </div>

              {/* Takeaway */}
              <p className="flex-1 text-[14px] font-medium text-[#484848] group-hover:text-[#c8c8c8] transition-colors duration-200 leading-snug tracking-tight">
                {digest.keyTakeaway}
              </p>

              {/* Arrow */}
              <span className="font-mono text-[10px] text-[#1e1e1e] group-hover:text-[#d4ff00] transition-colors duration-200 mt-0.5 shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
