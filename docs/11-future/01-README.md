---
title: README
description: Futureとは
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
  - security # セキュリティ責任者
  - documentation # ドキュメント整備者
review-cycle: none
tags:
  - readme
# related:
# future:
---

## 目的

本セクションは、未決定だが設計に影響する検討事項を一時的に保管することを目的とする。

正式な仕様ではなく、判断待ち事項を整理するための場所である。

---

## 記載内容

- 未確定の検討事項
- 保留中の設計判断
- 将来拡張の候補
- 合意待ちの論点

---

## 記載しないこと

- 既に確定した仕様
- 実装済み内容
- 要件として合意された事項

確定事項は該当セクションへ昇格させる。

---

## 位置づけ

本セクションは暫定保管領域に位置する。

- 上位：なし
- 下位：確定後に各設計セクションへ移動
- 関連：ADR、requirements、architecture

---

## 特徴やルール

- 必ず「未確定」であることを明示する
- 決定後は速やかに移動する
- 放置しない
- futureを仕様化の代替としない

---
