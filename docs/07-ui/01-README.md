---
title: README
description: UIとは
# draft: false      # true=未公開, false=公開
# sidebar_label:
# unlisted: false    #true=サイドバー非表示、false=表示
doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - implementation # 実装する人
  - verification # 正しさを検証する人
  - operation # 運用・障害対応する人
  - documentation # ドキュメント整備者
review-cycle: every-release
tags:
  - readme
# related:
#   - apis/content-upload
# future:
#   -
---

## 目的

ユーザーが操作する画面・操作・状態・遷移を定義することを目的とする。

ここでは「ユーザーから見える振る舞い」を明確にする。
実装方法・技術選定・UIフレームワークは扱わない。

設計・実装・テストが参照するUI仕様の基準を提供する。

---

## 記載内容

- 画面体系の全体像
- 画面一覧
- 個別画面仕様
- 画面間遷移・ユーザーフロー
- デザインガイドライン

本セクション配下に、上記観点ごとのドキュメントを配置する。

---

## 記載しないこと

- フロントエンド実装方式
- 使用技術・フレームワーク
- コンポーネント構造
- API内部仕様
- 業務ロジックの詳細

UIは「見える振る舞い」の定義のみを扱う。

---

## 位置づけ

本セクションはユースケース設計を具体的な画面に落とし込む層に位置する。

- 上位：requirements、usecase
- 下位：フロントエンド実装
- 関連：API仕様

---

## 特徴やルール

- 表示・操作・状態を分離して記述する
- 遷移を記載する
- 技術的判断を書かない
- 視覚表現ではなく振る舞いを定義する

---
