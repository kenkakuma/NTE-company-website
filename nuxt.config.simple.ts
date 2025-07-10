// Simplified Nuxt configuration for AWS Amplify deployment
export default defineNuxtConfig({
  // 基础配置
  devtools: { enabled: false },
  
  // TypeScript配置
  typescript: {
    strict: false,
    typeCheck: false
  },
  
  // CSS配置
  css: [],
  
  // 模块配置 - 最小化
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'vuetify-nuxt-module'
  ],
  
  // Vuetify配置 - 简化
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light'
      },
      icons: {
        defaultSet: 'mdi'
      }
    }
  },
  
  // Google字体配置 - 简化
  googleFonts: {
    families: {
      Roboto: [400, 500],
      'Noto+Sans+JP': [400, 500]
    },
    display: 'swap',
    download: true,
    subsets: ['latin', 'japanese']
  },
  
  // 运行时配置
  runtimeConfig: {
    apiSecret: '123',
    public: {
      appName: 'NO TRACE EXPLORER',
      appVersion: '2.6.0',
      baseUrl: process.env.BASE_URL || 'https://no-trace.jp'
    }
  },
  
  // 应用配置
  app: {
    head: {
      title: 'NO TRACE EXPLORER | 無迹探索株式会社',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: '革新的なソリューションで新たなビジネス価値を創造する企業です。' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // 服务端渲染配置
  ssr: true,
  
  // Nitro配置 - 极简
  nitro: {
    prerender: {
      routes: [
        '/',
        '/coffee',
        '/exhibition', 
        '/lab',
        '/club',
        '/about',
        '/contact',
        '/admin'
      ]
    }
  },
  
  // 实验性功能
  experimental: {
    payloadExtraction: false
  }
})