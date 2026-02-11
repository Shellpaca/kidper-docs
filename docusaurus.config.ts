import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: 'Kidper Docs',
  tagline: '子どもの成長を記録して家族に公開するためのアプリ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Shellpaca.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kidper-docs/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kai-ota', // Usually your GitHub org/user name.
  projectName: 'kidper-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
    mermaid: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // ← 一旦 classic の docs を無効化
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: { customCss: './src/css/custom.css' },
      },
      // {
      //   docs: {
      //     sidebarPath: "./sidebars.ts",
      //     // Please change this to your repo.
      //     // Remove this to remove the "edit this page" links.
      //     editUrl:
      //       "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      //   },
      //   blog: {
      //     showReadingTime: true,
      //     // Please change this to your repo.
      //     // Remove this to remove the "edit this page" links.
      //     editUrl:
      //       "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      //   },
      //   theme: {
      //     customCss: "./src/css/custom.css",
      //   },
      // } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: './sidebars-docs.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'apis',
        path: 'apis',
        routeBasePath: 'apis',
        sidebarPath: './sidebars-apis.ts',
        docItemComponent: '@theme/ApiItem',
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'apis', // もし docs プラグインを併用するなら
        config: {
          kidperApi: {
            specPath: 'static/openapi.json', // OpenAPI JSON ファイルへのパス
            outputDir: 'apis/APIs', // 自動生成先
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'storages',
        path: 'storages',
        routeBasePath: 'storages',
        sidebarPath: './sidebars-storages.ts',
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kidper Docs',
      logo: {
        alt: 'Kidper Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'DocumentationSidebar',
          docsPluginId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ApisSidebar',
          docsPluginId: 'apis',
          position: 'left',
          label: 'Apis',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'SwaggerSidebar',
        //   docsPluginId: 'swagger',
        //   label: 'Swagger',
        //   position: 'left',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'StoragesSidebar',
          docsPluginId: 'storages',
          position: 'left',
          label: 'Storages',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          'aria-label': 'GitHub Repository',
          className: 'navbar--github-link',
          href: 'https://github.com/Shellpaca/kidper',
          position: 'right',
        },
      ],
    },
    // process.env
    // ALGOLIA_APP_ID
    // ALGOLIA_SEARCH_API_KEY
    //
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: "YOUR_APP_ID",

    //   // Public API key: it is safe to commit it
    //   apiKey: "YOUR_SEARCH_API_KEY",

    //   indexName: "YOUR_INDEX_NAME",

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: "external\\.com|domain\\.com",

    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: "/docs/", // or as RegExp: /\/docs\//
    //     to: "/",
    //   },

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: "search",

    //   // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
    //   insights: false,

    //   //... other Algolia params
    // },
    footer: {
      // TODO("ロゴを挿入する")
      // logo: {
      //   alt: "Meta Open Source Logo",
      //   src: "img/meta_oss_logo.png",
      //   href: "https://opensource.fb.com",
      //   width: 160,
      //   height: 51,
      // },
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Docs',
              to: '/docs/introduction',
            },
            {
              label: 'Apis',
              to: '/apis/READNE',
            },
            {
              label: 'Storages',
              to: '/storages/README',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        // TODO("ヘッダーのリンクは一旦、コメントアウト")
        // {
        //   title: "Community",
        //   items: [
        // {
        //   label: "Stack Overflow",
        //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
        // },
        // {
        //   label: "Discord",
        //   href: "https://discordapp.com/invite/docusaurus",
        // },
        // {
        //   label: "Twitter",
        //   href: "https://twitter.com/docusaurus",
        // },
        // ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Shellpaca/kidper',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kidper, kai-ota.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
