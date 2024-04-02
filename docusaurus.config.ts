import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Web工程师学习&面试指南',
  tagline: '前端&后端',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://interview.kefeiqian.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KefeiQian', // Usually your GitHub org/user name.
  projectName: 'web-engineer-interview-guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/KefeiQian/web-engineer-study-interview-guide/blob/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Web工程师学习&面试指南',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-round.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'algorithmSidebar',
          position: 'left',
          label: '算法',
        },
        {
          type: 'docSidebar',
          sidebarId: 'frontendSidebar',
          position: 'left',
          label: '前端',
        },
        {
          type: 'docSidebar',
          sidebarId: 'backendSidebar',
          position: 'left',
          label: '后端',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resumeSidebar',
          position: 'left',
          label: '简历',
        },
        {
          to: 'service-1v1',
          label: '咨询服务',
          position: 'left',
        },
        {
          href: 'https://github.com/KefeiQian/web-engineer-study-interview-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Kefei Qian. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
