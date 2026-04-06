"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      id="subscribe"
      className="border-t border-[#1a1a1a] bg-[#080808] px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.4em] text-[#d4ff00] uppercase">
            Subscribe
          </span>
          <div className="flex-1 border-t border-dashed border-[#1a1a1a] max-w-[120px]" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-2xl font-medium text-[#c8c8c8] tracking-tight max-w-sm leading-snug">
              毎朝、AIエージェントの<br />最新動向が届く。
            </p>
            <p className="mt-3 font-mono text-[11px] text-[#383838] tracking-wider">
              Free. No spam. Unsubscribe anytime.
            </p>
          </div>

          {submitted ? (
            <div className="font-mono text-[12px] tracking-[0.3em] text-[#d4ff00] uppercase">
              ✓ Subscribed
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-0 border border-[#1e1e1e]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-[#0f0f0f] px-5 py-3 font-mono text-[12px] text-[#e8e8e8] placeholder-[#2e2e2e] focus:outline-none w-64 border-r border-[#1e1e1e]"
              />
              <button
                type="submit"
                className="bg-[#0f0f0f] px-5 py-3 font-mono text-[11px] tracking-[0.3em] text-[#484848] uppercase hover:bg-[#d4ff00] hover:text-[#080808] transition-colors duration-200"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
