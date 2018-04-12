/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Tasks' /* title for your website */,
  tagline: 'Astrid To-Do List Clone',
  url: 'http://tasks.org' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'tasks',
  headerLinks: [
    {doc: 'notifications', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  // users,
  /* path to images for header/footer */
  headerIcon: 'img/white_checkmark.svg',
  // footerIcon: 'docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2196f3',
    secondaryColor: '#1976d2',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Alex Baker',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/tasks/tasks',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
  gaTrackingId: "UA-43015607-4",
};

module.exports = siteConfig;
