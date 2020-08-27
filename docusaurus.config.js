module.exports = {
  title: 'phpVMS Docs',
  url: 'https://phpvms.github.com',
  baseUrl: '/docs',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'phpvms',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'phpVMS Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [],
    },
    prism: {
      additionalLanguages: ['bash', 'http', 'php'],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} phpvms`,
    },
    googleAnalytics: {
      trackingID: 'UA-100567975-3',
      anonymizeIP: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'intro',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/phpvms/docs/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-google-analytics',
    [
      '@docusaurus/plugin-sitemap',
      {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ]
};
