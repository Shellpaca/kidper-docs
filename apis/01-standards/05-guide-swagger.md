---
title: Swagerガイドライン
description: Swager作成のガイドライン
# draft: false      # true=未公開, false=公開
# sidebar_label:
# unlisted: false    #true=サイドバー非表示、false=表示
doc-kind: doc
maintenance: active
audience:
  - design # 設計判断をする人
  - documentation # ドキュメント整備者
review-cycle: quarterly
tags:
  - guide
# related:
# - /apis/design
# - /apis/api-apis
# - /apis/swagger-ui
# future:
---

## 方法

swaggerはアノテーションを直接付与すること。（MUST）
手書きでopenapi.yaml（.json）を編集してはいけない。（MUST）

## コントローラー

- `@Tag`で分類を示すこと（MUST）
  - `name`: 分類名
  - `description`:
- `@Operation`（MUST）
  - `summary`: API名称（MUST）
  - `description`: APIの説明を記載する（MUST）
    - 目的（なぜ必要か）（MUST）
    - 動作（何ができるか、副作用含む）（MUST）
    - 前提条件（実行に必要な条件、強く関連のある前提を書く）（MUST）
    - 制限（冪等性・状態依存など）
    - 注意事項（利用時に誤解しやすい点や副作用）

```kotlin
@Tag(
  name = "分類名"
  description = """
    分類の説明
  """
)
@RequestMapping
@RestController
class XxxController(
    private val XxxUseCase: XxxUseCase,
) {

    @Operation(
        summary = "API名",
        description = """
            APIの説明を記載する
              目的（なぜ必要か）
              動作（何ができるか、副作用含む）
              前提条件（実行に必要な条件、強く関連のある前提を書く）
              制限（冪等性・状態依存など）
              注意事項（利用時に誤解しやすい点や副作用）
        """
    )
    @PostMapping(ApiUrl.XXX)
    @ResponseStatus(HttpStatus.OK)
    fun create(
        // ヘッダー
        @Schema(
            description = "冪等性キー",
            example = "9b274b0a-c7fe-e61b-ece4-25a1d688ef49",
            required = true,
            minLength = 36,
            maxLength = 36,
            pattern = "UUID"
        )
        @RequestHeader("Idempotency-Key") idempotencyKey: String,

        // パスパラメーター
        @Schema(
            description = "ブックID",
            example = "4e17a057-0896-8a84-af21-05eebd0c272d",
            required = true,
            minLength = 36,
            maxLength = 36,
            pattern = "UUID"
        )
        @PathVariable bookId: String,

        // クエリパラメーター
        @Schema(
            description = "開始時刻",
            example = "1770036978",
            required = true,
            minLength = 10,
            maxLength = 10,
            pattern = "エポック秒"
        )
        @RequestParam("issuedAt") issuedAt: Long,

        // リクエストボディ
        @RequestBody request: XxxRequest,
    ) {
        val param = XxxParameter(request.xxx)
        xxxUseCase.execute(param)
    }
```

## データ

### スキーマ

- クラスの`@Schema`
  - `title`: レスポンス名称（MUST）
  - `description`: 説明（MUST）

- フィールドの`@Schema`
  - `description`: 値名称（MUST）
  - `example`: サンプル値（MUST）
  - `required`: 必須、任意（MUST）
  - `minLength`: 最小桁数（MUST）
  - `maxLength`: 最大桁数（MUST）
  - `minimum`: 最小値（MUST）
  - `maximum`: 最大値（MUST）
  - `pattern`: フォーマット（MUST）

- 文字列型の場合は最小桁数・最大桁数を指定すること（MUST）
- 数値型の場合は最小値と最大値を指定すること（MUST）
- 文字列や数値で最大・最小が存在しないのは禁止（MUST）
- 最大値・最大桁数が型の最大値・最大桁数と一致は許容できない（MUST）

### リクエスト

```kotlin
@Schema(
    title = "xxxリクエスト",
    description = "説明を記載",
)
data class XxxRequest(
    @Schema(
        description = "値の名称",
        example = "値のサンプル値",
        required = true,
        minLength = 1,
        maxLength = 20,
        pattern = "半角英数字",
    )
    val xxx: String
)
```

### レスポンス

```kotlin
@Schema(
    title = "xxxレスポンス",
    description = "説明を記載",
)
data class XxxResponse(
    @Schema(
        description = "値名称",
        example = "値のサンプル値",
        required = true,
        minLength = 1,
        maxLength = 20,
        pattern = "半角英数字",
    )
    val xxx: String
)
```

- 必要に応じてレスポンスコードを追加する（MAY）

```
@ApiResponses(
        value = [
            ApiResponse(responseCode = "200", description = "OK", content = [Content(mediaType = "application/json")]),
            ApiResponse(responseCode = "400", description = "不正リクエスト", content = [Content(mediaType = "application/json")]),
        ]
    )
fun create() {}
```
