import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Agent Daily — AIエージェント最新動向",
  description: "AIエージェントの最新ニュース・論文・ツールを毎日キュレーションするニュースレター型サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-50 font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <footer className="mt-16 border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-400">
          © 2026 Agent Daily. AIエージェントの最新情報を毎日お届け。
        </footer>
      </body>
    </html>
  );
}
