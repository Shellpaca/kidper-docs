---
title: マスター
description: マスターのコード値一覧
# draft: false      # true=未公開, false=公開
# sidebar_label:
# unlisted: false    #true=サイドバー非表示、false=表示
doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - implementation # 実装する人
  - verification # 正しさを検証する人
  - documentation # ドキュメント整備者
review-cycle: every-release
tags:
  - db
  - master
related:
  - /storages/tables
# future:
---

## ユーザー権限マスターTBL

**user_role_type**

| user_role_type_id | user_role_type_name | explanation  |
| ----------------- | ------------------- | ------------ |
| 1                 | USER                | 一般ユーザー |
| 2                 | ADMIN               | 管理者       |
| 3                 | OWNER               | オーナー     |

## 仮ユーザーステータスマスターTBL

**temporarily_user_status**

| temporarily_user_status_id | temporarily_user_status_name | explanation        |
| -------------------------- | ---------------------------- | ------------------ |
| 1                          | TEMPORARILY_REGISTERED       | 仮登録             |
| 2                          | EMAIL_ACTIVATED              | メール認証済み     |
| 3                          | OTP_REGISTERED               | OTP登録済み        |
| 4                          | USER_ACTIVATED               | ユーザー有効化済み |

## ユーザーログインステータスマスターTBL

**user_access_status**

| user_access_status_id | user_access_status_name | explanation        |
| --------------------- | ----------------------- | ------------------ |
| 1                     | PASSWORD_VERIFIED       | パスワード認証済み |
| 2                     | OTP_VERIFIED            | OTP認証済み        |
| 3                     | LOGOUT                  | ログアウト         |

## デバイスステータスマスターTBL

**user_device_status**

| user_device_status_id | user_device_status_name | explanation |
| --------------------- | ----------------------- | ----------- |
| 1                     | REGISTERED              | 登録済み    |
| 2                     | TRUSTED                 | 信頼済み    |
| 3                     | DISTRUSTED              | 不信頼      |

## ファミリーメンバー権限マスターTBL

**family_member_role_type**

| family_member_role_type_id | family_member_role_type_name | label  | explanation        |
| -------------------------- | ---------------------------- | ------ | ------------------ |
| 1                          | ADMIN                        | 管理者 | ファミリーの管理者 |
| 2                          | VIEWER                       | 閲覧者 | ファミリーの閲覧者 |

## 性別マスターTBL

**sex**

| sex_id | sex_name | explanation |
| ------ | -------- | ----------- |
| 1      | MALE     | 男性        |
| 2      | FEMALE   | 女性        |

## コンテントタイプマスターTBL

**content_type**

| content_type_id | content_type_name | explanation |
| --------------- | ----------------- | ----------- |
| 1               | PHOTO             | 写真        |
| 2               | VIDEO             | 動画        |

## コンテントメディアタイプマスターTBL

**content_media_type**

| content_media_type_id | content_media_type_name | explanation     |
| --------------------- | ----------------------- | --------------- |
| 1                     | IMAGE_JPEG              | image/jpeg      |
| 2                     | IMAGE_PNG               | image/png       |
| 3                     | IMAGE_WEBP              | image/webp      |
| 4                     | VIDEO_MP4               | video/mp4       |
| 5                     | VIDEO_QUICKTIME         | video/quicktime |
| 6                     | VIDEO_WEBM              | video/webm      |

## コンテント公開範囲マスターTBL

**content_publish_scope**

| content_publish_scope_id | content_publish_scope_name | explanation |
| ------------------------ | -------------------------- | ----------- |
| 1                        | ADMIN                      | 管理者      |
| 2                        | ALL                        | 全員        |

## 公開ステータスマスターTBL

**publish_status**

| publish_status_id | publish_status_name | explanation |
| ----------------- | ------------------- | ----------- |
| 1                 | DRAFT               | 未公開      |
| 2                 | PUBLISHED           | 公開        |
| 3                 | UNPUBLISHED         | 非公開      |
