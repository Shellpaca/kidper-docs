---
title: README
description: 外部連携とは
# draft: false
# sidebar_label:
# unlisted: false

doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - verification # 正しさを検証する人
  - documentation # ドキュメント整備者
review-cycle: every-release
tags:
  - readme
# related:
#   - none
# future:
#   - none
---

## 目的

本セクションは、自分たちが制御できない外部要素との関係を整理することを目的とする。

外部サービスやデータ契約との境界を明確にし、
依存関係と影響範囲を可視化する。

---

## 記載内容

- 外部サービス一覧
- データ・API契約
- 障害時の影響範囲
- 外部依存の整理

---

## 記載しないこと

- 内部実装ロジック
- 業務詳細仕様
- UI仕様
- プラットフォーム内部構成

integrationは「外部との境界」を扱う。

---

## 位置づけ

本セクションは内部設計と外部環境の間に位置する。

- 上位：requirements
- 下位：API実装、接続実装
- 関連：platform、security、failure設計

---

## 特徴やルール

- 自分たちが制御できないものを明示する
- 契約は変更前提で管理する
- 障害影響を常に記録する
- 依存関係を曖昧にしない

---
