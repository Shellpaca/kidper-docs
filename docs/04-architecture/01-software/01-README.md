---
title: README
description: ソフトウェアアーキテクチャーの概要
# draft: false      # true=未公開, false=公開
# sidebar_label:
# unlisted: false    #true=サイドバー非表示、false=表示
doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - implementation # 実装する人
  - security # セキュリティ責任者
  - documentation # ドキュメント整備者
review-cycle: none
tags:
  - readme
# related:
# future:
---

## 目的

本ソフトウェアの全体像を示し、
設計思想・レイヤー構成・ドキュメントの読み順を明確にする。

---

## 記載内容

- ソフトウェアの概要
- アーキテクチャ方針（レイヤー構成）
- 各レイヤーの内容
- 主な概念
- ディレクトリ／ドキュメント構成の案内

---

## 記載しないこと

- API仕様の詳細
- クラス設計の詳細
- SQLや外部APIの具体的実装
- 個別ユースケースの振る舞い
- 実装コードの説明
- 基盤構成（ネットワークやサーバー構成など）

---

## 位置づけ

- ソフトウェアアーキテクチャーの内容に閉じる
- 基盤のアーキテクチャーは対象外
- 各詳細仕様書は対象外

---

## 特徴やルール

- 本プロジェクトはレイヤードアーキテクチャを採用する
- ドメイン中心設計（DDD）を前提とする
- 依存方向は内向き（DIP徹底）

---
