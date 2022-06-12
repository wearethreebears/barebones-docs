export default {
    title: 'Barebones Components',
    description: 'Customizable components designed built for Vue 3 and Nuxt 3.',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Changelog', link: 'https://github.com/wearethreebears/barebones' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'What is Barebones?', link: '/guide/' },
                        { text: 'Getting started', link: '/guide/getting-started' },
                        { text: 'Configuration', link: '/guide/configuration' }
                    ]
                },
                {
                    text: 'Components',
                    items: [
                        { text: 'Aside', link: '/guide/components/aside' },
                        { text: 'Button', link: '/guide/components/button' },
                        { text: 'Column', link: '/guide/components/column' },
                        { text: 'Grid', link: '/guide/components/grid' },
                        { text: 'Image', link: '/guide/components/image' },
                        { text: 'Main', link: '/guide/components/main' },
                        { text: 'Modal', link: '/guide/components/modal' },
                        { text: 'Overlay', link: '/guide/components/overlay' },
                        { text: 'Section', link: '/guide/components/section' },
                        { text: 'Tabs', link: '/guide/components/tabs' },
                        { text: 'Text', link: '/guide/components/text' },
                    ]
                },
                {
                    text: 'Themes',
                    items: [
                        { text: 'Themes', link: '/guide/themes' }
                    ]
                },
                {
                    text: 'Contribute',
                    items: [
                        { text: 'Contribute components', link: '/guide/contribute/components' },
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Liam Hall'
        }
    }
}