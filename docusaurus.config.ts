import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Kidper Docs",
  tagline: "子どもの成長を記録して家族に公開するためのアプリ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://Shellpaca.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/kidper-docs/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kai-ota", // Usually your GitHub org/user name.
  projectName: "kidper-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Kidper Docs",
      logo: {
        alt: "Kidper Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "DocumentationSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          "aria-label": "GitHub Repository",
          className: "navbar--github-link",
          href: "https://github.com/Shellpaca/kidper",
          position: "right",
        },
      ],
    },
    footer: {
      // TODO("ロゴを挿入する")
      // logo: {
      //   alt: "Meta Open Source Logo",
      //   src: "img/meta_oss_logo.png",
      //   href: "https://opensource.fb.com",
      //   width: 160,
      //   height: 51,
      // },
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
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
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Shellpaca/kidper",
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
};

export default config;
