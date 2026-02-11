---
title: README
description: リクアイアメントとは
# draft: false # true=未公開, false=公開
# sidebar_label:
# unlisted: false #true=サイドバー非表示、false=表示
doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - implementation # 実装する人
  - verification # 正しさを検証する人
  - operation # 運用・障害対応する人
  - security # セキュリティ責任者
  - documentation # ドキュメント整備者
review-cycle: every-release
tags:
  - readme
# related:
# - adr/ADR-0003
# - apis/content-upload
# future:
# - チャンクアップロード統合
# - 非同期完了通知
---

# README

## 目的

このシステムが満たすべき条件を合意事項として固定することを目的とする。

ここでは「何を満たすべきか」を定義する。
実装方法・構造・技術選定は扱わない。

設計・実装・テストの判断基準となる基盤を定義する。

---

## 記載内容

- 機能要件
- 非機能要件
- 前提条件・制約・除外事項
- 用語定義

本セクション配下に、上記観点ごとのドキュメントを配置する。

---

## 記載しないこと

- 実装方法
- アーキテクチャ設計
- API仕様の詳細
- DB設計
- UI設計
- 技術選定理由

本セクションは設計書ではなく、要求の定義である。

---

## 位置づけ

本セクションは設計ドキュメントの上位に位置する。

- 上位：プロダクト方針
- 下位：アーキテクチャ設計、API設計、UI設計、DB設計
- 関連：ADR

設計は本セクションの内容を満たすために存在する。

---

## 特徴やルール

- 要件は検証可能な形で記述する
- 機能要件と非機能要件を混在させない
- 前提条件と要件を明確に分離する
- 曖昧な表現を避ける
- 合意のない変更を行わない

本セクションは「議論の過程」ではなく「合意された基準」を記載する。
