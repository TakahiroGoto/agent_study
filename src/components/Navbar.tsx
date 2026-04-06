import Link from "next/link";
import { Bot } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors">
          <Bot className="h-5 w-5 text-blue-600" />
          <span>Agent Daily</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Today
          </Link>
          <Link href="/archive" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Archive
          </Link>
          <Link href="/topics/multi-agent" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Topics
          </Link>
          <a
            href="#subscribe"
            className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            購読する
          </a>
        </nav>
      </div>
    </header>
  );
}
