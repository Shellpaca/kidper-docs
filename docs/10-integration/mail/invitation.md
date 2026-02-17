---
title: ファミリー招待メール
description: ファミリー招待メールの設定値や本文の情報
# draft: false      # true=未公開, false=公開
# sidebar_label:
# unlisted: false    #true=サイドバー非表示、false=表示
doc-kind: doc
maintenance: archived
audience:
  - design # 設計判断をする人
  - implementation # 実装する人
review-cycle: none
tags:
  - mail
  - invitation
# related:
# future:
---

```mermaid
sequenceDiagram
  participant user as User
  participant api as API
  participant gmail as Gmail

  api ->> gmail: SMTPで依頼
  gmail ->> user: メール送信

```

## アプリの設定

```yaml
mail:
  personal: Kidper
  address: kidper.info
  host: ${SMTP_HOST}
  port: ${SMTP_PORT}
  username: ${SMTP_USER_NAME}
  password: ${SMTP_PASSWORD}
  properties:
    mail:
      smtp:
        auth: true
        starttls.enable: true
```

## ファミリー招待

### ヘッダー

| キー         | 値                                            |
| ------------ | --------------------------------------------- |
| Content-Type | `multipart/mixed`                             |
| Date         | `Tue, 30 Dec 2025 12:59:58 +0900 (JST)`       |
| From         | `Kidper <kidper.info>`                        |
| Message-Id   | `<1775616176.5.1767067198835@localhost>`      |
| Mime-Version | `1.0`                                         |
| Received     | `from localhost (unknown [192.168.65.1]) xxx` |
| Return-Path  | `<kidper.info>`                               |
| Subject      | `=?UTF-8xxx`                                  |
| To           | `user01@example.com`                          |

### メール本文

※ 実際のメールとは文言などが異なります（サンプルです）。

![mail](./img/mail.png)
