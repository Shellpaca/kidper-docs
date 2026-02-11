---
title: README
description: APIの説明
# draft: false      # true=未公開, false=公開
# sidebar_label:
# unlisted: false    #true=サイドバー非表示、false=表示
doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - implementation # 実装する人
  - verification # 正しさを検証する人
  - security # セキュリティ責任者
  - documentation # ドキュメント整備者
review-cycle: every-release
tags:
  - readme
# related:
# - adr/ADR-0003
future:
  - usecase
---

# README

## 目的

本セクションは、システムが外部に公開する API 仕様を集約・整理することを目的とする。

API の契約（Contract）を明確にし、フロントエンドや外部連携との接続点を定義する。
本セクションは「実装の説明」ではなく「外部インターフェースの定義」を責務とする。

---

## 記載内容

- OpenAPI（Swagger）定義ファイル
- 自動生成された API ドキュメント
- API分類単位の README
- エンドポイント一覧とその契約情報
- 認証・認可要件の明示
- エラーレスポンス仕様
- バージョニング方針

---

## 記載しないこと

- ビジネスロジックの詳細説明
- DB設計の詳細
- 実装クラスや内部構造の説明
- UI仕様
- ユースケースの振る舞い詳細

API は外部契約のみを扱い、内部実装の説明は行わない。

---

## 位置づけ

本セクションは「外部公開インターフェース定義層」に位置する。

- 上位：システム全体設計
- 下位：個別 API 定義（OpenAPI YAML / JSON）
- 関連：認証設計、ユースケース設計、エラーハンドリング設計、ADR

バックエンド実装から生成された OpenAPI 定義を、ドキュメント基盤へ公開する役割を持つ。

---

## 特徴やルール

- API仕様は原則 OpenAPI で定義する
- 実装と仕様の乖離を防ぐため自動生成を基本とする
- バージョニング戦略（例：/api/v1）を明示する
- 破壊的変更は必ずバージョンを上げる
- エラーフォーマットは全APIで統一する
- 認証要件は各エンドポイントに明示する

本セクションは契約の一貫性と可視性を担保することを重視する。
