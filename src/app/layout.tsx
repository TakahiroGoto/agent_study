import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Agent Daily — AIエージェント最新動向",
  description: "AIエージェントの最新ニュース・論文・ツールを毎日キュレーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col bg-[#080808]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-[#1a1a1a] bg-[#080808] py-8 px-6">
          <div className="mx-auto max-w-6xl flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#222222] uppercase">
              Agent Daily © 2026
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#1e1e1e] uppercase">
              Daily · Curated · Free
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
