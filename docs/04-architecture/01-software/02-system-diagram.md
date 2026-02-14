---
title: システム構成
description: ソフトウェアの構成を示す
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
review-cycle: quarterly
tags:
  - system
# related:
# future:
#   -
---

ソフトウェアアーキテクチャ図を C4モデル の コンテキストとコンテナレベルを記載を示す。

※ コンポーネントレベルは、記載しない。代わりにarchitectureを参照すること
※ コードレベルは記載しない。代わりにドメインを参照すること

## C4 図

> C4モデルとは、異なる抽象レベルでソフトウェアアーキテクチャを視覚化する方法を提供する。以下の4つのレベルの図で構成されている。

- コンテキスト(Context)
- コンテナ(Container)
- コンポーネント(Component)
- コード(Code)

## システムコンテキスト図

> 自身のソフトウェアシステム と それを使用する人 や 関連する他システム との 相互作用を描くレベル。

**目的**

- システムの責務範囲を明確にする
- 利用者（User / Admin / Operator）の関与を整理する
- 外部システムとの依存関係を把握する

**注意**

- 内部構造や技術スタックは記載しない
- 実装やデプロイ構成の詳細は後続のコンテナ図で扱う

**Diagram**

```mermaid
C4Context
title System Context Diagram

Person(user, "User", "一般ユーザー")
Person(admin, "Admin", "管理者")
Person(operator, "Operator", "開発者/運照射")

System(kidper, "Kidper", "コンテンツ管理システム")
System_Ext(mail, "メールシステム", "Google")


Rel(user, kidper, "使用")
Rel(admin, kidper, "管理")
Rel(operator, kidper, "監視")
Rel(kidper, mail, "メール送信依頼")


Rel(mail, user, "メール送信")

UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

---

## コンテナ図

> システムを構成する「コンテナ」（アプリケーションの実行単位）の関係を描くレベル。
> 「どのプロセス・サービスが何を担当するか」を示す。

**目的**

- システムの 内部構造を理解 する
- どのコンテナが何を担当しているかを明確化
- 通信経路と 依存関係 を可視化

**注意**

- インフラの構成図にしたくなるが、インフラ構成ではなく、「役割」（責務）で境界を分けること
- 各コンテナの内部実装は記載しない
- コンテナはdockerのコンテナとは異なる

**Diagram**

```mermaid
C4Container
title Container Diagram

Person(user, "一般ユーザー")
Person(admin, "管理ユーザー")

System_Boundary(kidper, "Kidper") {

    System_Boundary(front, "フロントエンド") {
        Container(userFront, "ユーザー向けフロント", "Next.js", "Public / Vercel")
        Container(adminFront, "管理者向けCMS", "Payload CMS", "Internal / On-Prem")
    }

    System_Boundary(gateway, "ゲートウェイ") {
        Container(proxy, "Reverse Proxy", "Nginx / OpenResty")
    }

    System_Boundary(backend, "バックエンド") {
        Container(api, "API", "Spring Boot")
        Container(clamav, "Clamav", "アンチウイルスソフトウェア")

        ContainerDb(db, "Database", "RDBMS")
        ContainerDb(valkey, "Valkey", "NoSQL")
    }

    System_Boundary(observability, "観測基盤（Observability Platform）") {
        Container(alloy, "Grafana Alloy", "収集・ルーティング")

        ContainerDb(tempo, "Tempo", "トレース保存")
        ContainerDb(prometheus, "Prometheus", "メトリクス保存")
        ContainerDb(loki, "Loki", "ログ保存")

        Container(grafana, "Grafana", "システム観測UI")
    }
}
System_Boundary(mailSystem, "メールシステム") {
    System_Ext(mail, "メールシステム", "Google")
}

Boundary(operator, "Operator", "Layout") {
    Person(operator, "Operator", "開発者 / 運用担当者")
}




Rel(user, userFront, "操作")
Rel(admin, adminFront, "管理")

Rel(userFront, proxy, "HTTPS")
Rel(adminFront, proxy, "HTTPS")

Rel(proxy, api, "Forward request")
Rel(api, clamav, "ファイルのウイルススキャン")

Rel(api, db, "Reads/Writes")
Rel(api, valkey, "一時的なキャッシュ")

Rel(api, alloy, "push/pull")

Rel(alloy, tempo, "traces")
Rel(alloy, prometheus, "metrics")
Rel(alloy, loki, "logs")

Rel(grafana, tempo, "追跡")
Rel(grafana, prometheus, "集計")
Rel(grafana, loki, "検索")

Rel(operator, grafana, "観測")

Rel(api, mail, "依頼")
Rel(mail, user, "メール送信")


UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="2")
```
