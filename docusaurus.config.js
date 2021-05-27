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
            {
                html: `
                <a href="https://twitter.com/tasks_org">
                    <img src="https://img.shields.io/twitter/follow/tasks_org?label=Twitter&style=social"/>
                </a>
                `
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Chat on Freenode',
              to: 'https://webchat.freenode.net/?channels=tasks'
            },
            {
              label: 'Changelog',
              to: 'https://github.com/tasks/tasks/blob/main/CHANGELOG.md'
            },
            {
              label: 'Privacy policy',
              to: 'docs/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alex Baker`,
    },
  },
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
