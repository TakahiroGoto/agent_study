import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-[#080808]">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#484848] uppercase hidden sm:inline">
            Agent
          </span>
          <span className="text-base font-black tracking-tight text-[#e8e8e8] group-hover:text-[#d4ff00] transition-colors duration-300 md:text-lg">
            DAILY
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Today" },
            { href: "/archive", label: "Archive" },
            { href: "/topics/multi-agent", label: "Topics" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[11px] tracking-[0.25em] text-[#484848] uppercase underline-anim hover:text-[#e8e8e8] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <a
            href="#subscribe"
            className="font-mono text-[11px] tracking-[0.2em] text-[#080808] bg-[#d4ff00] px-4 py-2 uppercase hover:bg-white transition-colors duration-200"
          >
            Subscribe
          </a>
        </nav>

        {/* Mobile nav */}
        <div className="flex items-center gap-3 md:hidden">
          <Link href="/archive" className="font-mono text-[10px] tracking-[0.2em] text-[#484848] uppercase">
            Archive
          </Link>
          <a
            href="#subscribe"
            className="font-mono text-[10px] tracking-[0.15em] text-[#080808] bg-[#d4ff00] px-3 py-1.5 uppercase"
          >
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}
