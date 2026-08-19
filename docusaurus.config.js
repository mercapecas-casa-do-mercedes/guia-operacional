// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guia Mercapeças',
  tagline: 'Manual Operacional de Processos',
  favicon: 'img/favicon-48x48.png',

  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'Mercapeças',
  projectName: 'guia',

  onBrokenLinks: 'throw',
  markdown: {
    anchors: {
      maintainCase: true,
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['pt'],
        docsRouteBasePath: '/docs',
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Guia Mercapeças',
        logo: {
          alt: 'Mercapeças Logo',
          src: 'img/favicon-48x48.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'garantiaSidebar',
            label: 'Garantia',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devolucaoSidebar',
            label: 'Devolução',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'glossarioSidebar',
            label: 'Glossário',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'canaisSidebar',
            label: 'Canais de Contato',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Mercapeças - Casa do Mercedes. Guia Reservado.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
