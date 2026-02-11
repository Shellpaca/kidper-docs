# family_invitations

## 概要

ファミリー招待TBL

<details>
<summary><strong>テーブル定義</strong></summary>

```sql
CREATE TABLE `family_invitations` (
  `family_invitation_id` varchar(36) NOT NULL COMMENT 'ファミリー招待ID',
  `family_member_role_type_id` int NOT NULL COMMENT 'ファミリーメンバー権限ID',
  `invitation_code` varchar(255) NOT NULL COMMENT '招待コード',
  `host_user_id` varchar(36) NOT NULL COMMENT '差出ユーザーID',
  `family_id` varchar(36) NOT NULL COMMENT 'ファミリーID',
  `expiration_date` datetime(6) NOT NULL COMMENT '有効期限',
  `created_at` datetime(6) NOT NULL COMMENT '作成日時',
  PRIMARY KEY (`family_invitation_id`),
  UNIQUE KEY `invitation_code` (`invitation_code`),
  KEY `family_member_role_type_id` (`family_member_role_type_id`),
  KEY `host_user_id` (`host_user_id`),
  KEY `family_id` (`family_id`),
  CONSTRAINT `family_invitations_ibfk_1` FOREIGN KEY (`family_member_role_type_id`) REFERENCES `family_member_role_type` (`family_member_role_type_id`),
  CONSTRAINT `family_invitations_ibfk_2` FOREIGN KEY (`host_user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `family_invitations_ibfk_3` FOREIGN KEY (`family_id`) REFERENCES `families` (`family_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='ファミリー招待TBL'
```

</details>

## カラム一覧

| 名前                       | タイプ       | デフォルト値 | Nullable | 子テーブル | 親テーブル                                            | コメント                 |
| -------------------------- | ------------ | ------------ | -------- | ---------- | ----------------------------------------------------- | ------------------------ |
| family_invitation_id       | varchar(36)  |              | false    |            |                                                       | ファミリー招待ID         |
| family_member_role_type_id | int          |              | false    |            | [family_member_role_type](family_member_role_type.md) | ファミリーメンバー権限ID |
| invitation_code            | varchar(255) |              | false    |            |                                                       | 招待コード               |
| host_user_id               | varchar(36)  |              | false    |            | [users](users.md)                                     | 差出ユーザーID           |
| family_id                  | varchar(36)  |              | false    |            | [families](families.md)                               | ファミリーID             |
| expiration_date            | datetime(6)  |              | false    |            |                                                       | 有効期限                 |
| created_at                 | datetime(6)  |              | false    |            |                                                       | 作成日時                 |

## 制約一覧

| 名前                      | タイプ      | 定義                                                                                                     |
| ------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| family_invitations_ibfk_1 | FOREIGN KEY | FOREIGN KEY (family_member_role_type_id) REFERENCES family_member_role_type (family_member_role_type_id) |
| family_invitations_ibfk_2 | FOREIGN KEY | FOREIGN KEY (host_user_id) REFERENCES users (user_id)                                                    |
| family_invitations_ibfk_3 | FOREIGN KEY | FOREIGN KEY (family_id) REFERENCES families (family_id)                                                  |
| invitation_code           | UNIQUE      | UNIQUE KEY invitation_code (invitation_code)                                                             |
| PRIMARY                   | PRIMARY KEY | PRIMARY KEY (family_invitation_id)                                                                       |

## INDEX一覧

| 名前                       | 定義                                                                    |
| -------------------------- | ----------------------------------------------------------------------- |
| family_id                  | KEY family_id (family_id) USING BTREE                                   |
| family_member_role_type_id | KEY family_member_role_type_id (family_member_role_type_id) USING BTREE |
| host_user_id               | KEY host_user_id (host_user_id) USING BTREE                             |
| PRIMARY                    | PRIMARY KEY (family_invitation_id) USING BTREE                          |
| invitation_code            | UNIQUE KEY invitation_code (invitation_code) USING BTREE                |

## ER図

```mermaid
erDiagram

"family_invitations" }o--|| "family_member_role_type" : "FOREIGN KEY (family_member_role_type_id) REFERENCES family_member_role_type (family_member_role_type_id)"
"family_invitations" }o--|| "users" : "FOREIGN KEY (host_user_id) REFERENCES users (user_id)"
"family_invitations" }o--|| "families" : "FOREIGN KEY (family_id) REFERENCES families (family_id)"

"family_invitations" {
  varchar_36_ family_invitation_id PK "ファミリー招待ID"
  int family_member_role_type_id FK "ファミリーメンバー権限ID"
  varchar_36_ host_user_id FK "差出ユーザーID"
  varchar_36_ family_id FK "ファミリーID"
}
"family_member_role_type" {
  int family_member_role_type_id PK "ファミリーメンバー権限ID"
}
"users" {
  varchar_36_ user_id PK "ユーザーID"
}
"families" {
  varchar_36_ family_id PK "ファミリーID"
  varchar_36_ create_user_id FK "作成ユーザーID"
}
```

---

> Generated by [tbls](https://github.com/k1LoW/tbls)
