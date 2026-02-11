---
title: README
description: 永続化の仕様を示す
# draft: false      # true=未公開, false=公開
# sidebar_label:
# unlisted: false    #true=サイドバー非表示、false=表示
doc-kind: doc
maintenance: active
audience:
  - design
  - implementation
  - verification
review-cycle: every-release
tags:
  - readme
# related:
#     -
# future:
#     -
---

# README

## 目的

ストレージ（データベースの構造）を「契約」として定義する

※ ドメインモデルではない  
※ API仕様とは独立して管理する

---

## 記載内容

本セクションには、以下の内容を含む。

- テーブル定義
- マスターのコード値（固定値）
- ストレージ仕様（ファイルシステム）

---

## 記載しないこと

本セクションでは、以下の内容は扱わない。

- ドメインモデル（domain を参照）
- アプリケーションで保持するデータ
- アプリケーションで利用するViewModel
- API仕様

---

## 位置づけ

- テーブル定義 としての前提
- 実装・設計に記載・参照されることを想定する
- 外部向けのドキュメントとして機能する

詳細な設計判断の背景は、ADR を参照する。

---

## 特徴やルール

- ドメインモデルではない
- API仕様とは独立して管理する
- マスター変更時に更新すること
