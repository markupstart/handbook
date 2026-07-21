import type { Config } from '@docusaurus/types';

const config: Config = {
    title: 'Halls Kitchen Handbook',
    tagline: 'Handbook for Halls Kitchen',

    url: 'https://markupstart.github.io',
    baseUrl: '/handbook/',

    organizationName: 'markupstart',
    projectName: 'handbook',

    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/docs',
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/markupstart/handbook',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            },
        ],
    ],

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

    themeConfig: {
        navbar: {
            title: 'Halls Kitchen Handbook',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'Handbook',
                },
                {
                    href: 'https://github.com/markupstart/handbook',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Handbook',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/intro',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Halls Kitchen`,
        },
        prism: {
            theme: {
                plain: {
                    color: '#111827',
                    backgroundColor: '#f8fafc',
                },
                styles: [],
            },
            darkTheme: {
                plain: {
                    color: '#e5e7eb',
                    backgroundColor: '#111827',
                },
                styles: [],
            },
        },
    },
};

export default config;