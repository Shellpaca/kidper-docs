---
title: Overview
description: ドキュメントの全体構成
# draft: false
sidebar_label: Overview
# unlisted: false
doc-kind: doc
maintenance: active
audience:
  - documentation
review-cycle: none
# tags:
related:
  - none
future:
  - none
---

# Documentation Structure Overview

- 人間が理解・議論・判断できること
- Swagger（OpenAPI）に依存しすぎないこと
- 実装・テスト・運用と役割を分離すること

## 全体構成

| 親ディレクトリ | 子ディレクトリ       | 主目的                       |
| -------------- | -------------------- | ---------------------------- |
| README.md      | （なし）             | ドキュメント全体の入口       |
| docs/          | documentation-guide/ | ドキュメント運用ルール       |
| docs/          | requirements/        | 要件定義（機能＋非機能）     |
| docs/          | decision-records/    | 設計判断の履歴（ADR）        |
| docs/          | architecture/        | システム全体アーキテクチャ   |
| docs/          | domain/              | ドメイン知識の定義           |
| docs/          | usecase/             | 業務ユースケース仕様         |
| docs/          | ui/                  | 画面・操作・状態・遷移の定義 |
| docs/          | test-strategy/       | テスト全体戦略               |
| docs/          | platform/            | 運用・セキュリティ・監視     |
| docs/          | integration/         | 外部連携                     |
| docs/          | future/              | 未決定・検討中の余白         |
| apis/          | （なし）             | API 契約仕様                 |
| storages/      | （なし）             | テーブル定義                 |

### 親ディレクトリ

| ディレクトリ | 主目的                         |
| ------------ | ------------------------------ |
| docs/        | 人間向けの読み物（合意・思想） |
| apis/        | 外部向けの合意・契約           |
| storages/    | 永続化の契約                   |

## documentation-guide

**目的**

> ドキュメントそのものの書き方・運用・状態管理を定義するルールブック
> ※ システム仕様は一切書かない

| ファイル          | 主目的                                   |
| ----------------- | ---------------------------------------- |
| README.md         | document-meta の役割と読み方             |
| overview.md       | 全体のドキュメント構成                   |
| document-rules.md | ドキュメント全体の原則・責務・配置ルール |
| writing-guide.md  | 具体的な書き方・テンプレート             |
| front-matter.md   | 各ドキュメントの状態一覧                 |
| history.md        | 構成・方針変更の履歴                     |

※ writing-guide.md と document-rules.md の役割を明確に分離（原則 vs 実践）

---

## requirements

**目的**

> このシステムが満たすべき条件を合意として固定する  
> ※ 実装方法・構造は記載しない

| ファイル          | 主目的                      |
| ----------------- | --------------------------- |
| README.md         | requirements のスコープ定義 |
| functional.md     | 機能要件                    |
| non-functional.md | 非機能要件                  |
| assumptions.md    | 前提条件・制約・除外事項    |
| glossary.md       | 要件における用語定義        |

## decision-records

**目的**

> なぜその設計判断を採用したのかを将来に残す

| ファイル         | 主目的                 |
| ---------------- | ---------------------- |
| README.md        | ADR の対象範囲と書き方 |
| ADR-\*\*-xxxx.md | 個別の設計判断         |

---

## architecture

**目的**

> システム全体の構造と責務分離を示す  
> ※ 判断理由は decision-records に委譲

| ファイル                 | 主目的                      |
| ------------------------ | --------------------------- |
| README.md                | architecture のスコープ定義 |
| system-overview.md       | システム全体構成概要        |
| component-diagram.drawio | コンポーネント構成図        |
| dataflow.md              | データフロー（概念レベル）  |

---

## domain

**目的**

> 業務ドメインの言葉・構造・制約を定義する  
> ※ 技術・ユースケースは書かない

| ファイル               | 主目的                   |
| ---------------------- | ------------------------ |
| README.md              | domain の読み方          |
| domain-model.drawio    | ドメインモデル図         |
| ubiquitous-language.md | ユビキタス言語（用語集） |
| invariants.md          | 不変条件・制約           |

---

## usecase

**目的**

> 業務ユースケース単位で仕様を定義する（主仕様）

```
usecase
└── [usecase-name] # <- ユースケース単位でディレクトリ作成
```

| ファイル     | 主目的               |
| ------------ | -------------------- |
| overview.md  | ユースケース概要     |
| sequence.md  | 操作・状態遷移の流れ |
| frontend.md  | フロントエンドの責務 |
| backend.md   | バックエンドの責務   |
| errors.md    | 想定エラーと対応     |
| testcases.md | 満たすべき振る舞い   |

---

## ui

**目的**

> ユーザーが操作する画面・操作・状態・遷移を定義する
> ※ 実装方法・技術選定・UI フレームワークは一切記載しない

| ファイル            | 主目的                                      |
| ------------------- | ------------------------------------------- |
| README.md           | ui の役割・スコープ・他ドキュメントとの関係 |
| ui-overview.md      | 画面体系の全体像・画面分類                  |
| screen-list.md      | 画面一覧（ID・名称・対応ユースケース）      |
| screen-xxx.md       | 個別画面の仕様（表示・操作・状態）          |
| interaction-flow.md | 画面間遷移・ユーザーフロー                  |

---

## test-strategy

**目的**

> テスト全体の考え方と責務分担を固定する  
> ※ テストケースは usecase に記載する

| ファイル             | 主目的               |
| -------------------- | -------------------- |
| README.md            | テスト戦略の位置づけ |
| test-levels.md       | テストレベル定義     |
| automation-policy.md | 自動化方針           |

---

## platform

**目的**

> システムを安全かつ安定して運用するための前提と判断を整理する  
> ※ 業務仕様・ドメインルールは書かない

| ファイル      | 主目的                               |
| ------------- | ------------------------------------ |
| operation.md  | 運用・障害対応                       |
| security.md   | セキュリティ方針                     |
| monitoring.md | 監視・アラート                       |
| runbooks/     | 手順書（障害対応・移行・デプロイ等） |

## integration

**目的**

> 自分たちが制御できない外部要素との関係を整理する

| ファイル             | 主目的               |
| -------------------- | -------------------- |
| README.md            | integration の読み方 |
| external-services.md | 外部サービス一覧     |
| data-contracts.md    | データ・API契約      |
| failure-impact.md    | 障害時影響範囲       |

---

## future

**目的**

> 未決定だが設計に影響する検討事項を一時的に保管する

| ファイル  | 主目的                      |
| --------- | --------------------------- |
| README.md | future の使い方・昇格ルール |
| xx.md     | 未確定の検討事項            |

## apis

**目的**

> API 契約仕様を集約する（補助資料）  
> ※ 主仕様は usecase

| ファイル     | 主目的              |
| ------------ | ------------------- |
| openapi.yaml | API 定義の正本      |
| [usecase].md | Swagger UI 埋め込み |

---

## storages

**目的**

> データベースの構造を「契約」として定義する  
> ※ ドメインモデルではない  
> ※ API仕様とは独立して管理する

| ファイル           | 主目的              |
| ------------------ | ------------------- |
| README.md          | storages の位置づけ |
| /tables            | テーブル一覧        |
| /codes             | コード値            |
| /tables/[table].md | 個別テーブル定義    |
