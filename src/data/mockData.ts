export type Category = "LLM" | "Multi-Agent" | "Tools" | "Papers" | "Industry";

export interface RelatedSource {
  title: string;
  source: string;
  url: string;
}

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
  relatedSources: RelatedSource[];
}

export interface DailyDigest {
  date: string;
  keyTakeaway: string;
  items: NewsItem[];
}

export const mockDigest: DailyDigest = {
  date: "2026-04-08",
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
      publishedAt: "2026-04-08T08:00:00Z",
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
        "Swarm 2.0はOpenAIが2025年に公開した実験的マルチエージェントフレームワーク「Swarm」の後継版。前版はシンプルなAPI設計が好評だったが、本番利用にはパフォーマンスと観測性の面で課題があった。\n\n今回の2.0では、エージェント間通信に非同期メッセージキューを採用し、大規模並列実行時のボトルネックを解消した。具体的には、従来の同期的なハンドオフ方式を廃止し、各エージェントがメッセージブローカーを介して非同期にタスクを受け渡す設計に刷新。これにより、あるエージェントのレスポンス待ちで他のエージェントがブロックされる問題が根本的に解決された。\n\n観測性の面では、各エージェントの実行トレースをOpenTelemetry形式でエクスポートできるようになり、DatadogやGrafanaといった既存の監視基盤との統合が容易になった。スパン単位でのレイテンシ計測、ツール呼び出しの成否、エージェント間のメッセージフローをリアルタイムで追跡できる。\n\nエンタープライズAPIでは、月次レート制限の撤廃オプション、監査ログのS3/BigQuery連携、SOC2準拠のデータ処理契約が提供される。これにより24時間稼働のバックグラウンドエージェント運用が現実的になった。SREチームが既存のインフラ管理フローにエージェントを組み込むユースケースが想定されている。\n\nロードマップとして、今後3ヶ月以内にRAGとのネイティブ統合、ツール呼び出しのリトライ最適化、ヒューマン・イン・ザ・ループ承認フローの標準実装が予定されている。コミュニティ版はMITライセンスで引き続き提供され、カスタムツールやメモリバックエンドの拡張が可能。",
      relatedSources: [
        { title: "Swarm 2.0 公式アナウンス", source: "OpenAI Blog", url: "https://openai.com/blog" },
        { title: "Multi-Agent Systems with OpenAI", source: "OpenAI Cookbook", url: "https://cookbook.openai.com" },
        { title: "Building Production Multi-Agent Pipelines", source: "The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com" },
      ],
    },
    {
      id: "2",
      title: "Google DeepMind、長期記憶を持つエージェント「Gemini Agent Pro」を研究発表",
      summary:
        "DeepMindの研究チームが、数週間にわたるタスクを継続して実行できる長期記憶エージェントの論文を発表。外部メモリと内部状態の組み合わせにより、複雑なプロジェクト管理タスクで人間専門家に匹敵する性能を示した。",
      source: "DeepMind Research",
      url: "https://deepmind.google",
      category: "Papers",
      publishedAt: "2026-04-08T06:30:00Z",
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
        "本論文の核心は「階層的忘却スケジューラ（HFS: Hierarchical Forgetting Scheduler）」と呼ばれる新機構にある。HFSは重要度スコアと時間経過の二軸でメモリの保持・削除を動的に決定し、コンテキストウィンドウの枯渇を防ぐ。重要度スコアはタスク完遂への寄与度、参照頻度、情報の新鮮さの3要素を重み付けして算出される。\n\nアーキテクチャはワーキングメモリ・エピソードメモリ・セマンティックメモリの3層構造を採用。ワーキングメモリは現在のタスクコンテキストを保持し、コンテキストウィンドウ内で直接参照される。エピソードメモリは過去のアクションと結果をベクトルDBに保存し、類似状況で検索・参照される。セマンティックメモリはドメイン知識と学習済みパターンを長期保存する。\n\n実験では28日間連続稼働のベンチマークを実施。プロジェクト管理（Linear API操作）、コードレビュー（GitHub PR評価）、研究調査（論文要約・比較）の3タスクで評価した。GPT-4oの長コンテキスト手法（128k tokens）と比較して、28日目時点のタスク完遂率が87% vs 34%と大差をつけた。特にコードレビュータスクでは、過去のレビューコメントの傾向を学習し、同一開発者のコードに対してより的確なフィードバックを生成できるようになる現象が確認された。\n\nエージェントが判断ミスを「教訓エントリ」として構造化し、同様の状況で自動参照する自己改善ループも実装されている。これにより、同じ種類のエラーの反復率が実験期間中に83%低下した。",
      relatedSources: [
        { title: "Gemini Agent Pro 論文 (arXiv)", source: "arXiv", url: "https://arxiv.org/abs/2604.00123" },
        { title: "Long-term Memory in LLM Agents: A Survey", source: "DeepMind Research", url: "https://deepmind.google/research" },
        { title: "MemGPT: Towards LLMs as Operating Systems", source: "arXiv", url: "https://arxiv.org/abs/2310.08560" },
      ],
    },
    {
      id: "3",
      title: "Anthropic Claude、コンピュータ操作エージェント機能をGA公開",
      summary:
        "AnthropicはClaude APIでコンピュータ操作（Computer Use）機能を一般提供開始した。ブラウザ操作、ファイル管理、アプリ操作を自律的に実行可能。レート制限の緩和とコスト削減も同時発表された。",
      source: "Anthropic News",
      url: "https://anthropic.com",
      category: "Tools",
      publishedAt: "2026-04-08T05:00:00Z",
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
        "Computer UseのGA移行は、企業のRPA（ロボティック・プロセス・オートメーション）市場に大きなインパクトを与えると予想される。従来のRPAツール（UiPath、Automation Anywhere等）はセレクタベースでUI要素を特定するため、アプリのバージョンアップや画面レイアウト変更のたびにスクリプト修正が必要だった。Claude Computer Useは自然言語で「この請求書を承認ページに転記して」と指示するだけで、画面構成が変わっても目的を理解して操作を継続できる。\n\nGA移行で最も強化されたのはSafetyレイヤーだ。新設の「OperationPolicy API」により、エージェントが実行できる操作の範囲をJSON形式で宣言的に定義できる。例えば「/etc以下のファイル変更禁止」「外部ネットワークへの接続は許可リストのみ」「ファイル削除前に必ず確認を求める」といったポリシーをコードで記述し、エージェントが自律的に遵守する。ポリシー違反が検出された場合は操作を中断してヒューマンレビューキューに投入される。\n\nセッション録画機能では、スクリーンショットのシーケンス、クリック座標、キー入力、実行したツール呼び出しがすべてタイムスタンプ付きで記録される。監査証跡としてS3やGoogle Cloud Storageにエクスポートでき、コンプライアンス要件への対応が容易になった。\n\nコスト面では、スクリーンショットの自動解像度調整とPNG圧縮の最適化により、1スクリーンショットあたりの平均トークン消費が1,200から480に削減された。8時間の自動化タスクを実行した場合のAPIコストが従来比で約60%削減される計算になる。",
      relatedSources: [
        { title: "Computer Use GA公式ドキュメント", source: "Anthropic Docs", url: "https://docs.anthropic.com" },
        { title: "Claude Computer Use ベータ評価レポート", source: "Anthropic Research", url: "https://anthropic.com/research" },
        { title: "LLM-based RPA: Opportunity and Risk", source: "Gartner Research", url: "https://gartner.com/research" },
      ],
    },
    {
      id: "4",
      title: "LangChain、エージェントオーケストレーション新ツール「LangGraph 3」リリース",
      summary:
        "LangChainがグラフベースのエージェントワークフロー管理ツール「LangGraph 3」をリリース。UIダッシュボードでエージェントの実行フローをリアルタイム可視化でき、デバッグ効率が大幅に向上。",
      source: "LangChain Blog",
      url: "https://langchain.com",
      category: "Tools",
      publishedAt: "2026-04-08T02:00:00Z",
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
        "LangGraph 3の最大の変更点はステートグラフの実行エンジンを完全に書き直したことだ。従来はPythonのasyncioを部分的に利用する設計だったが、3.0では全ノードの実行が非同期ファーストに統一された。I/Oバウンドなツール呼び出し（Web検索、DB参照、API呼び出し）が多いワークフローでは、複数ノードが並列実行できるようになり、最大3倍のスループット向上が報告されている。\n\n新しいチェックポイント機構「StateSnapshot」では、グラフの任意ノードで実行状態をスナップショットとして保存できる。保存先はインメモリ・SQLite・PostgreSQL・Redisの4種類から選択可能で、本番環境ではPostgreSQLまたはRedisが推奨される。障害発生時は最後のチェックポイントから再開でき、冪等なノード設計と組み合わせることで数時間かかる長期タスクの信頼性が飛躍的に向上する。\n\nHuman-in-the-loopは実用面で大きく強化された。新しい「InterruptNode」を任意の位置に挿入することで、その時点でエージェントの実行を一時停止し、人間の判断を待つことができる。承認待ちのタスクはWebhookで外部システムに通知され、専用のSlackアプリ・メール・カスタムWebUIから承認・却下・修正指示を送れる。承認後はグラフ実行が自動的に再開される。\n\nv2からv3への移行では `StateGraph` のAPI署名とチェックポイント初期化方法に破壊的変更がある。公式が提供するコードmodツール `langgraph-migrate` を使うと大半の変更が自動適用される。LangSmithとの統合も深化し、グラフの各ノードの実行時間・コスト・エラー率がダッシュボードでリアルタイム確認できる。",
      relatedSources: [
        { title: "LangGraph 3.0 リリースノート", source: "LangChain Blog", url: "https://blog.langchain.dev" },
        { title: "LangGraph 公式ドキュメント", source: "LangChain Docs", url: "https://langchain-ai.github.io/langgraph" },
        { title: "Agent Orchestration Patterns in 2026", source: "Towards Data Science", url: "https://towardsdatascience.com" },
      ],
    },
    {
      id: "5",
      title: "MITの研究：LLMエージェントのハルシネーション率を90%削減する新手法",
      summary:
        "MITのCSAIL研究チームが、ツール呼び出し時の検証ステップを自動挿入することでエージェントのハルシネーションを大幅に削減する手法を発表。GPT-4oとClaude 3.5で実験し、どちらのモデルでも一貫した改善が確認された。",
      source: "MIT CSAIL",
      url: "https://csail.mit.edu",
      category: "Papers",
      publishedAt: "2026-04-07T18:00:00Z",
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
        "本研究のアプローチ「VerifyAgent」は、既存のエージェントパイプラインに変更を加えることなくプラグインとして動作する点が特徴だ。Pythonのデコレータ1行を追加するだけで任意のツール関数に検証レイヤーを注入できる。\n\n検証は3フェーズで構成される。第1フェーズの静的検証では、ツール引数の型・必須フィールドの存在・値の範囲をJSONスキーマに基づいてチェックする。第2フェーズの動的検証では、外部依存関係（参照するファイルの存在、API エンドポイントの疎通、DBテーブルの存在）をリアルタイムで確認する。第3フェーズのセマンティック検証では、引数の組み合わせが論理的に矛盾していないかをルールベースで判定する（例：開始日が終了日より後になっていないか）。\n\n実験では、ウェブ検索・Pythonコード実行・PostgreSQLクエリの3種のツールを用いた200タスクで評価した。コード実行エージェントでの改善が最も顕著で、存在しない変数参照・型不一致・インポートエラーによるランタイム失敗が91%削減された。ウェブ検索では、無効なURLや過度に長いクエリによる失敗が84%削減。DBクエリでは存在しないテーブル・カラム参照が92%削減された。\n\n計算オーバーヘッドは検証ステップの並列実行で最小化されており、平均追加レイテンシ340ms・p99で700ms以内に収まる。実装はPyPIパッケージ `verify-agent` として提供され、LangChain・LlamaIndex・カスタムパイプライン向けの統合アダプターが付属する。",
      relatedSources: [
        { title: "VerifyAgent 論文 (arXiv:2604.00456)", source: "arXiv", url: "https://arxiv.org/abs/2604.00456" },
        { title: "verify-agent PyPIパッケージ", source: "GitHub / MIT CSAIL", url: "https://github.com/mit-csail/verify-agent" },
        { title: "Reliable Tool Use in LLM Agents", source: "MIT CSAIL", url: "https://csail.mit.edu/research" },
      ],
    },
    {
      id: "6",
      title: "Microsoft、Azure AI Agentサービスをエンタープライズ向けに正式提供",
      summary:
        "MicrosoftはAzure上でAIエージェントをマネージドサービスとして運用できる「Azure AI Agent Service」を正式リリース。Active Directoryとの統合、コンプライアンス対応、SLAの保証が提供される。",
      source: "Microsoft Azure Blog",
      url: "https://azure.microsoft.com",
      category: "Industry",
      publishedAt: "2026-04-07T15:00:00Z",
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
        "Azure AI Agent Serviceは、Microsoftが2025年に買収したエージェントインフラスタートアップOrchestraの技術を基盤に構築されている。エージェントのライフサイクル管理（デプロイ・オートスケーリング・カナリアリリース・バージョンロールバック・廃止）をすべてAzureポータルまたはARM/BicepテンプレートのIaCで操作できる。\n\n「エージェントポリシー」機能は本サービスの核心だ。エージェントがアクセスできるデータソース（Azure Blob、Cosmos DB、SharePointなど）、実行できるAzure操作（読み取り専用か書き込みも許可か）、通信できる外部エンドポイントのホワイトリストをJSON/YAML形式で宣言的に定義する。このポリシーはAzure Policy Engineによって実行時に強制適用され、違反はAzure Monitorに即座にアラートとして記録される。セキュリティ審査チームがコードレビューの代わりにポリシーファイルのレビューのみで承認できるため、デプロイサイクルが大幅に短縮される。\n\nコンプライアンス面では、SOC2 Type II・ISO27001・HIPAAに加え、日本固有のFISC安全対策基準への対応も予告されている。Japan Eastリージョンでのデータ保管とGDPR/個人情報保護法対応のデータ処理契約が標準提供される。\n\nMicrosoft 365 Copilotとの統合では、TeamsやOutlookから直接エージェントにタスクを委任できるUI拡張が2026年Q3に予定されている。Graph APIを経由した社内データへのアクセスや、Power Automateフローとの双方向連携も計画されており、既存のMicrosoft製品スタックとのシナジーが期待される。",
      relatedSources: [
        { title: "Azure AI Agent Service 公式発表", source: "Microsoft Azure Blog", url: "https://azure.microsoft.com/blog" },
        { title: "Azure AI Agent Service ドキュメント", source: "Microsoft Docs", url: "https://learn.microsoft.com/azure/ai-agent" },
        { title: "Enterprise AI Agent Adoption Report 2026", source: "Forrester Research", url: "https://forrester.com/research" },
      ],
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
