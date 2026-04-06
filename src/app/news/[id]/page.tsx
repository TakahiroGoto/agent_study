import Link from "next/link";
import { mockDigest } from "@/data/mockData";
import { CategoryBadge } from "@/components/CategoryBadge";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return mockDigest.items.map((item) => ({ id: item.id }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = mockDigest.items.find((i) => i.id === id);

  if (!item) notFound();

  const time = new Date(item.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className="bg-[#080808] min-h-screen">
      {/* Top bar */}
      <div className="border-b border-[#1a1a1a] px-4 py-4 md:px-6">
        <div className="mx-auto max-w-3xl flex items-center gap-3">
          <Link
            href="/"
            className="font-mono text-[10px] tracking-[0.3em] text-[#303030] uppercase hover:text-[#d4ff00] transition-colors"
          >
            ← Today
          </Link>
          <span className="text-[#1e1e1e]">/</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#242424] uppercase truncate">
            {item.id.padStart(3, "0")}
          </span>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">

        {/* Meta */}
        <div className="mb-6 flex items-center gap-4">
          <CategoryBadge category={item.category} />
          <span className="font-mono text-[10px] tracking-wider text-[#2e2e2e]">{item.source}</span>
          <span className="font-mono text-[10px] tracking-wider text-[#242424]">{time}</span>
        </div>

        {/* Title */}
        <h1 className="mb-8 text-[20px] font-bold leading-snug tracking-tight text-[#e8e8e8] md:text-[clamp(20px,3vw,30px)] md:mb-10">
          {item.title}
        </h1>

        {/* ── 01 Summary ── */}
        <Section index="01" label="Summary">
          <p className="text-[15px] leading-relaxed text-[#909090]">
            {item.summary}
          </p>
        </Section>

        {/* ── 02 Key Points ── */}
        <Section index="02" label="Key Points">
          <ul className="space-y-4">
            {item.keyPoints.map((point, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-[10px] text-[#d4ff00] mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] leading-relaxed text-[#888888]">{point}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* ── 03 Important Items ── */}
        <Section index="03" label="Important">
          <dl className="border border-[#1a1a1a]">
            {item.importantItems.map(({ label, value }, i) => (
              <div
                key={i}
                className={`flex items-start gap-6 px-5 py-3 ${i !== item.importantItems.length - 1 ? "border-b border-[#141414]" : ""}`}
              >
                <dt className="font-mono text-[10px] tracking-wider text-[#383838] uppercase shrink-0 w-28 mt-0.5">
                  {label}
                </dt>
                <dd className="font-mono text-[12px] text-[#686868]">{value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* ── 04 Detail ── */}
        <Section index="04" label="Detail">
          <p className="text-[14px] leading-[1.9] text-[#606060]">
            {item.detail}
          </p>
        </Section>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-4 border-t border-[#1a1a1a] pt-8">
          {item.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] tracking-wider text-[#303030]">
              #{tag}
            </span>
          ))}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto font-mono text-[10px] tracking-wider text-[#303030] hover:text-[#d4ff00] transition-colors"
          >
            Original Source →
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-16 border-t border-[#1a1a1a] pt-8 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.3em] text-[#303030] uppercase hover:text-[#e8e8e8] transition-colors"
          >
            ← Back to Today
          </Link>
          <Link
            href="/archive"
            className="font-mono text-[11px] tracking-[0.3em] text-[#303030] uppercase hover:text-[#e8e8e8] transition-colors"
          >
            Archive →
          </Link>
        </div>
      </article>
    </main>
  );
}

function Section({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4ff00]">{index}</span>
        <span className="font-mono text-[10px] tracking-[0.4em] text-[#303030] uppercase">{label}</span>
        <div className="flex-1 border-t border-dashed border-[#1a1a1a]" />
      </div>
      {children}
    </section>
  );
}
