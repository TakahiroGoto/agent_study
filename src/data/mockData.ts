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
  keyPoints: string[];
  importantItems: { label: string; value: string }[];
  detail: string;
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
        "OpenAIは複数のAIエージェントが協調してタスクを実行する新フレームワーク「Swarm 2.0」を公開した。前バージョンと比較してレイテンシが40%改善され、エージェント間のメッセージパッシングが標準化された。",
      source: "OpenAI Blog",
      url: "https://openai.com",
      category: "Multi-Agent",
      publishedAt: "2026-04-06T08:00:00Z",
      tags: ["OpenAI", "Multi-Agent", "Framework"],
      keyPoints: [
        "レイテンシが前バージョン比40%改善。実用ユースケースへの展開が加速する",
        "エージェント間のメッセージパッシングプロトコルが標準化され、異なるモデル間の協調が可能に",
        "エンタープライズAPIが同時提供開始。SLAと監査ログが付属",
        "オープンソース版も提供予定で、コミュニティ主導の拡張が期待される",
      ],
      importantItems: [
        { label: "公開日", value: "2026-04-06" },
        { label: "ライセンス", value: "MIT（コアライブラリ）" },
        { label: "対応モデル", value: "GPT-4o, GPT-4o-mini" },
        { label: "エンタープライズAPI", value: "即日提供開始" },
      ],
      detail:
        "Swarm 2.0はOpenAIが2025年に公開した実験的マルチエージェントフレームワーク「Swarm」の後継版。前版はシンプルなAPI設計が好評だったが、本番利用にはパフォーマンスと観測性の面で課題があった。今回の2.0では、エージェント間通信に非同期メッセージキューを採用し、大規模並列実行時のボトルネックを解消。また、各エージェントの実行トレースをOpenTelemetry形式でエクスポートできるようになり、既存の監視基盤との統合が容易になった。エンタープライズプランでは月次のレート制限撤廃オプションも用意されており、24時間稼働するバックグラウンドエージェントの運用が現実的になった。開発チームはRAG統合、ツール呼び出し最適化、ヒューマン・イン・ザ・ループ対応を今後3ヶ月のロードマップとして公表している。",
    },
    {
      id: "2",
      title: "Google DeepMind、長期記憶を持つエージェント「Gemini Agent Pro」を研究発表",
      summary:
        "DeepMindの研究チームが、数週間にわたるタスクを継続して実行できる長期記憶エージェントの論文を発表。外部メモリと内部状態の組み合わせにより、複雑なプロジェクト管理タスクで人間専門家に匹敵する性能を示した。",
      source: "DeepMind Research",
      url: "https://deepmind.google",
      category: "Papers",
      publishedAt: "2026-04-06T06:30:00Z",
      tags: ["Google", "Memory", "LongContext"],
      keyPoints: [
        "外部ベクトルDBと内部KVキャッシュを組み合わせたハイブリッドメモリアーキテクチャを提案",
        "28日間連続稼働のベンチマークでタスク完遂率87%を達成（従来手法は34%）",
        "プロジェクト管理・コードレビュー・研究調査の3タスクで人間専門家と同水準",
        "メモリの「忘却」スケジューリングにより、古い不要情報が性能を劣化させる問題を解決",
      ],
      importantItems: [
        { label: "論文公開", value: "arXiv:2604.00123" },
        { label: "ベンチマーク期間", value: "28日間連続" },
        { label: "タスク完遂率", value: "87%（従来34%）" },
        { label: "コードベース公開", value: "未定（査読後予定）" },
      ],
      detail:
        "本論文の核心は「階層的忘却スケジューラ（HFS）」と呼ばれる新機構にある。HFSは重要度スコアと時間経過を組み合わせてメモリの保持・削除を動的に決定し、コンテキストウィンドウの枯渇を防ぐ。実験では、GPT-4oベースの長コンテキスト手法と比較して、28日目時点でのタスク精度が2.5倍高かった。特筆すべきは、エージェントが過去の判断ミスを「教訓」として構造化し、同様の状況で参照できる自己改善ループを実装している点だ。研究チームは現在、リアルタイムコラボレーションツール（Notion、Linear）との統合プラグインを開発中で、エンタープライズパイロットへの参加企業を募集している。",
    },
    {
      id: "3",
      title: "Anthropic Claude、コンピュータ操作エージェント機能をGA公開",
      summary:
        "AnthropicはClaude APIでコンピュータ操作（Computer Use）機能を一般提供開始した。ブラウザ操作、ファイル管理、アプリ操作を自律的に実行可能。レート制限の緩和とコスト削減も同時発表された。",
      source: "Anthropic News",
      url: "https://anthropic.com",
      category: "Tools",
      publishedAt: "2026-04-06T05:00:00Z",
      tags: ["Anthropic", "ComputerUse", "API"],
      keyPoints: [
        "Computer Use APIがGA（一般提供）に移行。ベータ期間中の不安定さが大幅に改善",
        "入力コストが従来比60%削減。スクリーンショット圧縮の最適化によるもの",
        "新しいSafetyフィルターにより、意図しないシステム操作をブロックする仕組みを追加",
        "Windows・macOS・Linux・Webブラウザの4環境で正式サポート",
      ],
      importantItems: [
        { label: "提供開始", value: "2026-04-06（即日）" },
        { label: "コスト削減", value: "入力トークン60%減" },
        { label: "対応OS", value: "Windows / macOS / Linux" },
        { label: "レート制限", value: "Tier2以上で撤廃" },
      ],
      detail:
        "Computer UseのGA移行は、企業のRPA（ロボティック・プロセス・オートメーション）市場に大きなインパクトを与えると予想される。従来のRPAツールはUI変更に脆弱でメンテナンスコストが高かったが、Claude Computer Useは自然言語で目標を指示するだけで画面の変化に適応できる。今回のGA移行で特に注目されるのはSafetyレイヤーの強化だ。ユーザーが定義した「禁止操作リスト」をエージェントが事前確認し、誤ってシステム設定を変更するような事故を防ぐ。またセッション録画機能が追加され、エージェントの操作履歴を後から監査できるようになった。料金体系も見直され、スクリーンショット1枚あたりのトークン消費が従来の40%まで圧縮。長時間タスクのコストが現実的な範囲に収まるようになった。",
    },
    {
      id: "4",
      title: "LangChain、エージェントオーケストレーション新ツール「LangGraph 3」リリース",
      summary:
        "LangChainがグラフベースのエージェントワークフロー管理ツール「LangGraph 3」をリリース。UIダッシュボードでエージェントの実行フローをリアルタイム可視化でき、デバッグ効率が大幅に向上。",
      source: "LangChain Blog",
      url: "https://langchain.com",
      category: "Tools",
      publishedAt: "2026-04-05T22:00:00Z",
      tags: ["LangChain", "LangGraph", "Orchestration"],
      keyPoints: [
        "グラフUIでエージェントの実行フローをリアルタイム可視化。デバッグ時間が平均60%短縮",
        "ステート管理APIが刷新され、チェックポイントと巻き戻し機能が標準搭載",
        "Human-in-the-loopのサポートが大幅強化。承認ゲートを任意ノードに挿入可能",
        "LangSmithとのネイティブ統合により、本番トレースが即座に可視化",
      ],
      importantItems: [
        { label: "バージョン", value: "LangGraph 3.0.0" },
        { label: "ライセンス", value: "Apache 2.0" },
        { label: "Python対応", value: "3.10以上" },
        { label: "破壊的変更", value: "StateGraph APIに非互換あり" },
      ],
      detail:
        "LangGraph 3の最大の変更点はステートグラフの実行エンジンを完全に書き直したことだ。従来の同期実行から非同期ファーストの設計に移行し、I/Oバウンドなツール呼び出しが多いワークフローで最大3倍のスループット向上が報告されている。新しいチェックポイント機構では、グラフの任意ノードで実行状態をスナップショットとして保存でき、障害発生時に途中から再開できる。これにより、数時間かかる長期エージェントタスクの信頼性が飛躍的に向上した。Human-in-the-loopの強化も実用上重要で、承認待ちのタスクをWebhookで外部システムに通知し、Slackやメールから承認・却下できるインテグレーションが公式提供される。v2からの移行は破壊的変更があるため、公式マイグレーションガイドの確認が必須。",
    },
    {
      id: "5",
      title: "MITの研究：LLMエージェントのハルシネーション率を90%削減する新手法",
      summary:
        "MITのCSAIL研究チームが、ツール呼び出し時の検証ステップを自動挿入することでエージェントのハルシネーションを大幅に削減する手法を発表。GPT-4oとClaude 3.5で実験し、どちらのモデルでも一貫した改善が確認された。",
      source: "MIT CSAIL",
      url: "https://csail.mit.edu",
      category: "Papers",
      publishedAt: "2026-04-05T18:00:00Z",
      tags: ["MIT", "Hallucination", "Research"],
      keyPoints: [
        "ツール呼び出し直前に「検証エージェント」を自動挿入し、引数の妥当性をチェック",
        "GPT-4oでハルシネーション率を91%削減、Claude 3.5で88%削減を確認",
        "追加レイテンシは平均340ms。実用上許容できる範囲に抑えられている",
        "コードとベンチマークデータセットはGitHubで即日公開",
      ],
      importantItems: [
        { label: "論文", value: "arXiv:2604.00456" },
        { label: "削減率", value: "GPT-4o: 91% / Claude: 88%" },
        { label: "追加レイテンシ", value: "平均340ms" },
        { label: "コード公開", value: "github.com/mit-csail/verify-agent" },
      ],
      detail:
        "本研究のアプローチ「VerifyAgent」は、既存のエージェントパイプラインに変更を加えることなくプラグインとして動作する点が特徴だ。ツール呼び出しのインターセプト層を設け、引数の型チェック・値の範囲検証・外部依存関係の存在確認を並列実行する。検証に失敗した場合、エラーメッセージとともにLLMに再試行を促すフィードバックループが動作する。実験では、ウェブ検索・コード実行・データベースクエリの3種のツールを用いた200タスクで評価。特にコード実行エージェントでの改善が顕著で、存在しない変数参照や型不一致によるランタイムエラーをほぼ完全に排除できた。計算オーバーヘッドは検証ステップの並列化により最小化されており、p99レイテンシでも700ms以内に収まっている。実装はPythonパッケージとして提供され、LangChain・LlamaIndex・カスタムパイプラインへの統合ガイドも付属している。",
    },
    {
      id: "6",
      title: "Microsoft、Azure AI Agentサービスをエンタープライズ向けに正式提供",
      summary:
        "MicrosoftはAzure上でAIエージェントをマネージドサービスとして運用できる「Azure AI Agent Service」を正式リリース。Active Directoryとの統合、コンプライアンス対応、SLAの保証が提供される。",
      source: "Microsoft Azure Blog",
      url: "https://azure.microsoft.com",
      category: "Industry",
      publishedAt: "2026-04-05T15:00:00Z",
      tags: ["Microsoft", "Azure", "Enterprise"],
      keyPoints: [
        "Azure Active Directoryとのネイティブ統合により、既存の権限管理をそのまま適用可能",
        "SOC2 Type II・ISO27001・HIPAAに対応。金融・医療業界での採用障壁が低下",
        "99.9% SLAを保証。ダウンタイム時の自動フェイルオーバー機能付き",
        "従量課金に加え、月額固定プランも用意。予算予測が立てやすい料金体系",
      ],
      importantItems: [
        { label: "SLA", value: "99.9%稼働保証" },
        { label: "コンプライアンス", value: "SOC2 / ISO27001 / HIPAA" },
        { label: "対応リージョン", value: "East US / West Europe / Japan East" },
        { label: "料金", value: "従量課金 or 月額固定" },
      ],
      detail:
        "Azure AI Agent Serviceは、Microsoftが2025年に買収したエージェントインフラスタートアップのOrchestraの技術を基盤としている。エンタープライズ向けに設計された本サービスは、エージェントのライフサイクル管理（デプロイ・スケーリング・バージョン管理・廃止）をすべてAzureポータルから操作できる。特筆すべきは「エージェントポリシー」機能で、エージェントがアクセスできるデータソース・実行できる操作・通信できる外部エンドポイントをコードではなくポリシーとして宣言的に定義できる。これにより、セキュリティ審査の自動化が可能になり、コンプライアンス対応の工数が大幅に削減される。Japan Eastリージョンでの提供開始により、データレジデンシー要件がある日本企業でも採用しやすくなった。Microsoft 365 Copilotとのシームレスな統合も予告されており、社内エージェントとCopilotが連携するシナリオが現実的になってきた。",
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
