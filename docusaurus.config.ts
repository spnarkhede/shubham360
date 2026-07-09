import type { Config, ThemeConfig } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import * as ciInfo from 'ci-info';

const config: Config = {
  title: 'Shubham Narkhede | Portfolio',
  tagline: 'Senior Full-Stack Developer — TypeScript, Node.js & React',
  favicon: 'img/favicon.ico',
  url: 'https://www.shubhamnarkhede.com',
  // baseUrl: ciInfo.GITHUB_ACTIONS ? '/portfolio/' : '/',
  baseUrl: '/',
  organizationName: 'spnarkhede',
  projectName: 'shubham360.github.io',
  deploymentBranch: 'gh-pages', // this is where the build will go
  trailingSlash: false,
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },
  onBrokenAnchors: 'warn',
  future: {
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      mdxCrossCompilerCache: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Security Headers - Added for CodeFlow Health Score improvement
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.emailjs.com https://www.googletagmanager.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https: http:",
          "font-src 'self' data:",
          "connect-src 'self' https://api.emailjs.com https://www.figma.com https://uxpilot.ai",
          "frame-src 'self' https://www.figma.com https://uxpilot.ai",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self' https://api.emailjs.com",
          "frame-ancestors 'self'",
        ].join('; ')
      }
    },
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'X-Frame-Options',
        content: 'SAMEORIGIN'
      }
    },
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'X-Content-Type-Options',
        content: 'nosniff'
      }
    },
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Referrer-Policy',
        content: 'strict-origin-when-cross-origin'
      }
    },
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Permissions-Policy',
        content: 'geolocation=(), microphone=(), camera=()'
      }
    }
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          // ToolsCollection is kept on disk but not published (moving to a separate personal site)
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'ToolsCollection/**',
          ],
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/spnarkhede/shubhamnarkhede',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',
          editUrl: 'https://github.com/spnarkhede/shubhamnarkhede/tree/main/blog',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
        },
        pages: {
          exclude: [
            '**/prompt-vault/prompt-vault-data/**',
            '**/prompt-vault/promptVaultData.js',
            '**/prompt-vault/_promptVaultData.js',
            '**/tech-enthusiast/tools-collection.js',
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: false,
        indexBlog: true,
        indexPages: true,
        language: ['en'],
        hashed: true,
        docsRouteBasePath: '/',
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
        explicitSearchResultPath: true,
        searchBarShortcut: true,
        searchBarShortcutKeymap: 's',
        searchBarPosition: 'right',
        hideSearchBarWithNoSearchContext: false,
        useAllContextsWithNoSearchContext: false,
        searchContextByPaths: ['/blog', '/Portfolio', '/articles', '/books'],
        // indexDocs:false has no effect when docs routeBasePath is '/' (it overlaps
        // with indexPages), so every docs page gets indexed as a "page" instead,
        // producing a search-index.json too large for Cloudflare Pages (25 MiB limit).
        // Explicitly ignore all docs routes so only blog/custom pages are indexed.
        ignoreFiles: [
          /^ComputerScience(\/|$)/,
          /^Design(\/|$)/,
          /^Languages(\/|$)/,
          /^LinkedIn(\/|$)/,
          /^MyLearnings(\/|$)/,
          /^Portfolio(\/|$)/,
          /^PromptVault(\/|$)/,
          /^ToolsCollection(\/|$)/,
          /^intro$/,
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/social-card.webp',
    metadata: [
      {name: 'keywords', content: 'senior full-stack developer, typescript, node.js, react, aws, kubernetes, stuttgart, portfolio'},
      {name: 'description', content: 'Shubham Narkhede — Senior Full Stack Engineer & Product Designer with 7+ years building real-time visualization platforms in React, Vue.js, Angular, TypeScript, and Python. Currently shipping EV-charging software at Robert Bosch GmbH.'},
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Shubham Narkhede',
      logo: { alt: 'Shubham Narkhede', src: 'img/profile.webp' },
      items: [
        { to: '/landing', label: 'Home', position: 'left' },
        { to: '/navigation-guide', label: 'Explore', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/contact', label: 'Contact', position: 'right' },
        { href: 'https://github.com/spnarkhede', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            { label: 'About Me', to: '/intro' },
            { label: 'Now', to: '/now' },
            { label: 'Resume', to: '/Portfolio/Resume' },
            { label: 'Books', to: '/books' },
            { label: 'Projects', to: '/Portfolio/Projects' },
            { label: 'Experience', to: '/Portfolio/Experience' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'LinkedIn', href: 'https://linkedin.com/in/spnarkhede' },
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/spnarkhede' },
            { label: 'Twitter', href: 'https://twitter.com/snarkhede1996' },
            { label: 'Email', to: '/contact' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'RSS Feed', href: 'pathname:///blog/rss.xml' },
            { label: 'GitHub', href: 'https://github.com/spnarkhede' },
            { label: 'Computer Science', to: '/ComputerScience' },
            { label: 'Contact', to: '/contact' },
          ],
        },
      ],
      copyright: `Copyright © 2018-${new Date().getFullYear()} Shubham Narkhede. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'kotlin', 'bash', 'typescript', 'scss'],
    },
  } as ThemeConfig,

};

export default config;

