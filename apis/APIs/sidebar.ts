import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "APIs/kidper-api",
    },
    {
      type: "category",
      label: "コンテンツ",
      link: {
        type: "doc",
        id: "APIs/コンテンツ",
      },
      items: [
        {
          type: "doc",
          id: "APIs/chunk-upload",
          label: "コンテンツチャンクアップロードAPI",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "APIs/upload",
          label: "コンテンツアップロードAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/chunk-upload-complete",
          label: "コンテンツチャンクアップロード結合API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/download",
          label: "コンテンツファイルダウンロードAPI",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "APIs/find-4",
          label: "コンテンツファイル取得API",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ポスト",
      link: {
        type: "doc",
        id: "APIs/ポスト",
      },
      items: [
        {
          type: "doc",
          id: "APIs/draft",
          label: "ポストドラフトAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/unpublish",
          label: "ポスト非公開API",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "APIs/publish",
          label: "ポスト公開API",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "APIs/find-1",
          label: "ポスト取得API",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "APIs/find-list",
          label: "ポスト取得一覧API",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ファミリー",
      items: [
        {
          type: "doc",
          id: "APIs/update",
          label: "ファミリー情報更新API",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "APIs/delete-1",
          label: "ファミリー削除API",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "APIs/register-3",
          label: "ファミリー登録API",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "招待",
      items: [
        {
          type: "doc",
          id: "APIs/register",
          label: "招待コードメンバー登録API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/issue",
          label: "招待コードメンバー登録API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/find-2",
          label: "ファミリー招待取得API",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "APIs/delete",
          label: "ファミリー招待削除API",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "ファミリーメンバー",
      items: [
        {
          type: "doc",
          id: "APIs/register-1",
          label: "ファミリーメンバー登録API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/find-3",
          label: "ファミリーメンバー取得API",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "子ども",
      items: [
        {
          type: "doc",
          id: "APIs/register-2",
          label: "子ども登録API",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "認証",
      items: [
        {
          type: "doc",
          id: "APIs/signup",
          label: "サインアップAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/refresh-token",
          label: "リフレッシュトークンAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/verify",
          label: "OTP検証API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/setup",
          label: "OTPセットアップAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/register-4",
          label: "OTP登録API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/logout",
          label: "ログアウトAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/login",
          label: "ログインAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/user",
          label: "ユーザーアクティベートAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/email",
          label: "メールアドレスアクティベートAPI",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "APIs/health-1",
          label: "ヘルスチェックAPI",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "開発用",
      items: [
        {
          type: "doc",
          id: "APIs/health",
          label: "health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "APIs/auth-token",
          label: "authToken",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ユーザー",
      items: [
        {
          type: "doc",
          id: "APIs/find",
          label: "ユーザー描画情報取得API",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "自分",
      items: [
        {
          type: "doc",
          id: "APIs/family",
          label: "ユーザー家族ビュー取得API",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
