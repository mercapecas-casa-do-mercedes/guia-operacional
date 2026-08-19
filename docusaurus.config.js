// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mercapeças — Central de Documentação Interna',
  tagline: 'Manual Operacional de Processos, Garantia e Devolução',
  favicon: 'img/logo.svg',

  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'Mercapeças',
  projectName: 'documentacao-interna',

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
        title: 'MERCAPEÇAS | Documentação Interna',
        logo: {
          alt: 'Mercapeças Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Navegar na Documentação',
          },
          {
            to: '/docs/garantia',
            label: 'Garantia',
            position: 'left',
          },
          {
            to: '/docs/devolucao',
            label: 'Devolução',
            position: 'left',
          },
          {
            to: '/docs/glossario',
            label: 'Glossário',
            position: 'left',
          },
          {
            to: '/docs/canais-de-comunicacao',
            label: 'Canais de Contato',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Mercapeças - Casa do Mercedes. Documentação Interna Reservada.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
