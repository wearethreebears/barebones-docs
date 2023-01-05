export default {
    lang: 'en-US',
    title: 'Barebones Components',
    description: 'Customizable components designed built for Vue 3 and Nuxt 3.',
    head: [
        ['meta', { name: 'twitter:site', content: '@barebonesjs' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        [
            'meta',
            {
                name: 'twitter:image',
                content: 'https://barebones.wearethreebears.co.uk/logo.png'
            }
        ],
        [
            'script',
            {
                src: 'https://cdn.usefathom.com/script.js',
                'data-site': 'MDBRZGEX',
                'data-spa': 'auto',
                defer: ''
            }
        ]
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Roadmap', link: '/roadmap/components' },
            { text: 'Changelog', link: 'https://github.com/wearethreebears/barebones/blob/main/CHANGELOG.md' }
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
                        { text: 'Accordion', link: '/guide/components/accordion' },
                        { text: 'Aside', link: '/guide/components/aside' },
                        { text: 'Button', link: '/guide/components/button' },
                        { text: 'Grid', link: '/guide/components/grid' },
                        { text: 'Column', link: '/guide/components/column' },
                        { text: 'Form', link: '/guide/components/form' },
                        { text: 'FormInput', link: '/guide/components/form-input' },
                        { text: 'FormSelect', link: '/guide/components/form-select' },
                        { text: 'FormGroup', link: '/guide/components/form-group' },
                        { text: 'FormFieldSet', link: '/guide/components/form-fieldset' },
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
            ],
            '/roadmap/': [
                {
                    text: 'Roadmap',
                    items: [
                        { text: 'Components', link: '/roadmap/components' },
                        { text: 'Themes', link: '/roadmap/themes' },
                        { text: 'CSS libraries', link: '/roadmap/libraries' },
                    ]
                },
            ]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/wearethreebears/barebones' },
            { icon: 'twitter', link: 'https://twitter.com/barebonesjs' },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Liam Hall'
        }
    }
}