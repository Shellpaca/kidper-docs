---
title: README
description: プラットフォームとは
# draft: false
# sidebar_label:
# unlisted: false

doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - verification # 正しさを検証する人
  - operation # 運用・障害対応する人
  - security # セキュリティ責任者
  - documentation # ドキュメント整備者
review-cycle: every-release
tags:
  - readme
related:
  - none
future:
  - none
---

## 目的

システムを安全かつ安定して運用するための前提と判断を整理することを目的とする。

業務仕様ではなく、運用・監視・セキュリティの観点を扱う。

---

## 記載内容

- 運用方針
- 障害対応方針
- セキュリティ方針
- 監視・アラート設計
- 手順書（runbooks）

---

## 記載しないこと

- 業務仕様
- ドメインルール
- UI仕様
- API契約の詳細
- 実装ロジック

platformは「運用基盤の前提」を扱う。

---

## 位置づけ

本セクションはシステムの継続的運用を支える層に位置する。

- 上位：requirements（非機能要件）
- 下位：インフラ構成・実運用
- 関連：security、monitoring、test-strategy

---

## 特徴やルール

- 運用判断を明文化する
- 障害時の責任範囲を明確にする
- セキュリティは原則を優先する
- 手順書は再現可能であること

---
