import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "镜缘教育科研网 AS151673",
  description: "MirrorEdge Education and Research Network",
  // 添加 link
  head:[
    ['link', { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Looking Glass', link: 'https://lg.as151673.mcserverx.com' },
      { text: 'PeeringDB', link: 'https://www.peeringdb.com/net/33991' }
    ],

    sidebar: [
      {
        text: '详细信息',
        items: [
          { text: '了解更多', link: '/getting-started' },
          { text: '联系我们', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AS151673/' }
    ]
  }
})
