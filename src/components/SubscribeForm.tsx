"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="subscribe"
      className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center"
    >
      <Mail className="mx-auto mb-3 h-8 w-8 text-blue-500" />
      <h3 className="mb-2 text-xl font-bold text-gray-900">
        毎朝、AIエージェントの最新情報をお届け
      </h3>
      <p className="mb-6 text-sm text-gray-600">
        無料メールニュースレターで、厳選されたエージェント動向を受け取りましょう。
      </p>

      {submitted ? (
        <div className="flex items-center justify-center gap-2 text-green-600">
          <CheckCircle className="h-5 w-5" />
          <span className="font-medium">登録ありがとうございます！</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            購読
          </button>
        </form>
      )}
    </section>
  );
}
