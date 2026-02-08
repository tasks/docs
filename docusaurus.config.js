module.exports = {
  title: 'Tasks.org',
  tagline: 'Open-source To-Do Lists & Reminders',
  url: 'https://tasks.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'tasks', // Usually your GitHub org/user name.
  projectName: 'tasks', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tasks.org',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tasks/tasks',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Synchronization',
              to: 'docs/sync',
            },
            {
              label: 'Donate',
              to: 'docs/donate',
            },
            {
              label: 'Translations',
              to: 'docs/translations',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              html: `
              <a href="https://github.com/tasks/tasks">
                  <img src="https://img.shields.io/github/stars/tasks/tasks?label=GitHub&style=social"/>
              </a>
                `,
            },
            {
                html: `
                <a href="https://reddit.com/r/tasks">
                    <img src="https://img.shields.io/reddit/subreddit-subscribers/tasks?label=Reddit&style=social"/>
                </a>
                `
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'https://github.com/tasks/tasks/blob/main/CHANGELOG.md'
            },
            {
              label: 'Privacy policy',
              to: 'privacy',
            },
            {
              label: 'Terms of service',
              to: 'terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alex Baker`,
    },
  },
  plugins: [
    [
      'posthog-docusaurus',
      {
        apiKey: 'phc_8YsVTE0oWQLKPHaaW9KG7kYaRnAHOacV4A8LfQmuxB4',
        appUrl: 'https://us.i.posthog.com',
        enableInDevelopment: false,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tasks/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tasks/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
