export type Category = "LLM" | "Multi-Agent" | "Tools" | "Papers" | "Industry";

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  category: Category;
  publishedAt: string;
  tags: string[];
}

export interface DailyDigest {
  date: string;
  keyTakeaway: string;
  items: NewsItem[];
}

export const mockDigest: DailyDigest = {
  date: "2026-04-06",
  keyTakeaway:
    "OpenAIがエージェントフレームワーク新版を発表。複数エージェントの協調動作が大幅に改善され、実用段階へ。",
  items: [
    {
      id: "1",
      title: "OpenAI、マルチエージェント協調フレームワーク「Swarm 2.0」を発表",
      summary:
        "OpenAIは複数のAIエージェントが協調してタスクを実行する新フレームワーク「Swarm 2.0」を公開した。前バージョンと比較してレイテンシが40%改善され、エージェント間のメッセージパッシングが標準化された。エンタープライズ向けAPIも同時提供開始。",
      source: "OpenAI Blog",
      url: "#",
      category: "Multi-Agent",
      publishedAt: "2026-04-06T08:00:00Z",
      tags: ["OpenAI", "Multi-Agent", "Framework"],
    },
    {
      id: "2",
      title: "Google DeepMind、長期記憶を持つエージェント「Gemini Agent Pro」を研究発表",
      summary:
        "DeepMindの研究チームが、数週間にわたるタスクを継続して実行できる長期記憶エージェントの論文を発表。外部メモリと内部状態の組み合わせにより、複雑なプロジェクト管理タスクで人間専門家に匹敵する性能を示した。",
      source: "DeepMind Research",
      url: "#",
      category: "Papers",
      publishedAt: "2026-04-06T06:30:00Z",
      tags: ["Google", "Memory", "LongContext"],
    },
    {
      id: "3",
      title: "Anthropic Claude、コンピュータ操作エージェント機能をGA公開",
      summary:
        "AnthropicはClaude APIでコンピュータ操作（Computer Use）機能を一般提供開始した。ブラウザ操作、ファイル管理、アプリ操作を自律的に実行可能。レート制限の緩和とコスト削減も同時発表され、企業導入の加速が期待される。",
      source: "Anthropic News",
      url: "#",
      category: "Tools",
      publishedAt: "2026-04-06T05:00:00Z",
      tags: ["Anthropic", "ComputerUse", "API"],
    },
    {
      id: "4",
      title: "LangChain、エージェントオーケストレーション新ツール「LangGraph 3」リリース",
      summary:
        "LangChainがグラフベースのエージェントワークフロー管理ツール「LangGraph 3」をリリース。UIダッシュボードでエージェントの実行フローをリアルタイム可視化でき、デバッグ効率が大幅に向上。本番環境向けのモニタリング機能も強化。",
      source: "LangChain Blog",
      url: "#",
      category: "Tools",
      publishedAt: "2026-04-05T22:00:00Z",
      tags: ["LangChain", "LangGraph", "Orchestration"],
    },
    {
      id: "5",
      title: "MITの研究：LLMエージェントのハルシネーション率を90%削減する新手法",
      summary:
        "MITのCSAIL研究チームが、ツール呼び出し時の検証ステップを自動挿入することでエージェントのハルシネーションを大幅に削減する手法を発表。GPT-4oとClaude 3.5で実験し、どちらのモデルでも一貫した改善が確認された。",
      source: "MIT CSAIL",
      url: "#",
      category: "Papers",
      publishedAt: "2026-04-05T18:00:00Z",
      tags: ["MIT", "Hallucination", "Research"],
    },
    {
      id: "6",
      title: "Microsoft、Azure AI Agentサービスをエンタープライズ向けに正式提供",
      summary:
        "MicrosoftはAzure上でAIエージェントをマネージドサービスとして運用できる「Azure AI Agent Service」を正式リリース。Active Directoryとの統合、コンプライアンス対応、SLAの保証が提供され、大企業での採用障壁が下がる見込み。",
      source: "Microsoft Azure Blog",
      url: "#",
      category: "Industry",
      publishedAt: "2026-04-05T15:00:00Z",
      tags: ["Microsoft", "Azure", "Enterprise"],
    },
  ],
};

export const trendingTags = [
  { tag: "Multi-Agent", count: 24 },
  { tag: "OpenAI", count: 18 },
  { tag: "RAG", count: 15 },
  { tag: "Memory", count: 13 },
  { tag: "ComputerUse", count: 11 },
  { tag: "Orchestration", count: 10 },
  { tag: "Anthropic", count: 9 },
  { tag: "LangChain", count: 8 },
  { tag: "Research", count: 7 },
  { tag: "Enterprise", count: 6 },
];

export const archiveDigests: { date: string; keyTakeaway: string; itemCount: number }[] = [
  { date: "2026-04-05", keyTakeaway: "LangGraph 3リリースとMITの新研究で業界が注目。エージェントの信頼性向上が今週の主要テーマ。", itemCount: 7 },
  { date: "2026-04-04", keyTakeaway: "Mistralが新しいオープンソースエージェントモデルを公開。ローカル実行の可能性が広がる。", itemCount: 5 },
  { date: "2026-04-03", keyTakeaway: "エージェントのセキュリティリスクに関する論文が相次ぎ発表。プロンプトインジェクション対策が急務に。", itemCount: 6 },
  { date: "2026-04-02", keyTakeaway: "AutoGPT後継の「AutoGPT 2」がリリース。UIの大幅改善で非エンジニアでも使いやすく。", itemCount: 8 },
  { date: "2026-04-01", keyTakeaway: "Hugging Faceがエージェント向けベンチマークを公開。モデル間の性能比較が容易に。", itemCount: 4 },
];
