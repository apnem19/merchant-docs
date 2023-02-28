module.exports = {
  title: 'NeBank Merchant',
  description: 'Документация',
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'API-документация',
        link: '/api/',
      },
      {
        text: 'Готовые модули',
        link: '/modules/'
      },
      {
        text: 'Сайт',
        link: 'https://nebank.co'
      }
    ],
    sidebar: {
      '/api/': [
        {
          title: 'API-документация',
          collapsable: false,
          children: [
            '',
            'sign.md',
            'callback.md',
            'create_payment.md',
            'delete_payment.md',
            'get_payment.md',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
