---
title: README
description: テスト全体戦略とは
# draft: false
# sidebar_label:
# unlisted: false
doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - implementation # 実装する人
  - verification # 正しさを検証する人
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

テスト全体の考え方と責務分担を固定することを目的とする。

どの観点をどのレベルで検証するかを明確にし、品質保証の方針を統一する。

※ 個別のテストケースは扱わない。

---

## 記載内容

- テストレベルの定義
- 各レベルの責務分担
- 自動化方針
- テスト範囲の整理

---

## 記載しないこと

- 個別テストケース
- 具体的なテストデータ
- 実装コード
- 詳細な業務仕様

---

## 位置づけ

requirements と usecase を品質観点から支える層に位置する。

- 上位：requirements
- 下位：各レイヤーのテスト実装
- 関連：CI/CD方針、platform

---

## 特徴やルール

- テストレベルを明確に分離する
- 責務が重複しないよう定義する
- 自動化可否の判断基準を明示する
- テストは仕様検証であり実装検証ではない

---
