// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 基础配置
  devtools: { enabled: true },
  
  // TypeScript配置
  typescript: {
    strict: false,
    typeCheck: false
  },
  
  // CSS配置
  css: [],
  
  // 模块配置
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module'
  ],
  
  // Vuetify配置
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#667eea',
              secondary: '#764ba2',
              accent: '#82B1FF',
              error: '#FF5252',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107',
              surface: '#ffffff',
              background: '#f8f9fa',
              'on-primary': '#ffffff',
              'on-secondary': '#ffffff',
              'on-surface': '#1a1a1a',
              'on-background': '#1a1a1a'
            }
          },
          dark: {
            dark: true,
            colors: {
              primary: '#667eea',
              secondary: '#764ba2',
              accent: '#82B1FF',
              error: '#FF5252',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107',
              surface: '#1e1e1e',
              background: '#121212',
              'on-primary': '#ffffff',
              'on-secondary': '#ffffff',
              'on-surface': '#ffffff',
              'on-background': '#ffffff'
            }
          }
        }
      },
      icons: {
        defaultSet: 'mdi'
      },
      defaults: {
        VCard: {
          elevation: 2
        },
        VBtn: {
          style: 'font-weight: 500;'
        }
      }
    },
    moduleOptions: {
      /* module specific options */
    }
  },
  
  // Google字体配置 - Phase 5极致优化
  googleFonts: {
    families: {
      Roboto: [400, 500], // 仅加载必需字重
      'Noto+Sans+JP': [400, 500] // 仅加载必需字重，避免300/700导致496个文件
    },
    display: 'swap',
    download: true, // 启用字体下载
    subsets: ['latin', 'japanese'], // 限制字符集
    prefetch: false, // 禁用预获取以减少初始加载
    preconnect: false, // 禁用预连接
    preload: false, // 禁用预加载
    // Phase 5新增优化配置
    outputDir: 'assets/fonts',
    stylePath: 'css/fonts.css',
    fontsDir: 'fonts',
    overwriting: true
  },
  
  // 运行时配置
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: '123',
    
    // Public keys (exposed to client-side)
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || 'G-XXXXXXXXXX',
      appName: 'NO TRACE EXPLORER',
      appVersion: '2.3.0',
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
          content: '革新的なソリューションで新たなビジネス価値を創造する企業です。コーヒー事業、展示・イベント運営、技術研究開発など多岐にわたるサービスを提供。' 
        },
        { 
          name: 'keywords', 
          content: 'NO TRACE EXPLORER, イノベーション, コンサルティング, 技術開発, ビジネスソリューション, コーヒー, 展示, イベント' 
        },
        { property: 'og:title', content: 'NO TRACE EXPLORER | 無迹探索株式会社' },
        { property: 'og:description', content: '革新的なソリューションで新たなビジネス価値を創造' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://no-trace.jp' },
        { property: 'og:image', content: 'https://no-trace.jp/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'NO TRACE EXPLORER | 無迹探索株式会社' },
        { name: 'twitter:description', content: '革新的なソリューションで新たなビジネス価値を創造' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://no-trace.jp' }
      ]
    }
  },
  
  // 服务端渲染配置
  ssr: true,
  
  // Nitro配置
  nitro: {
    // 预渲染页面 - 恢复SSG功能
    prerender: {
      routes: [
        '/',
        '/coffee',
        '/exhibition', 
        '/lab',
        '/club',
        '/about',
        '/contact'
      ]
    },
    // 路由规则
    routeRules: {
      // 管理系统客户端渲染
      '/admin/**': { ssr: false },
      // API路由
      '/api/**': { cors: true },
      // CSP安全策略
      '/**': {
        headers: {
          'Content-Security-Policy': [
            "default-src 'self'",
            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' data: https://fonts.gstatic.com",
            "img-src 'self' data: https: blob:",
            "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
            "media-src 'self' data: blob:",
            "object-src 'none'",
            "frame-src 'none'",
            "worker-src 'self' blob:",
            "manifest-src 'self'",
            "base-uri 'self'"
          ].join('; '),
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
        }
      }
    },
    // 压缩配置
    compressPublicAssets: true
  },
  
  // 实验性功能
  experimental: {
    payloadExtraction: false,
    viewTransition: true
  },
  
  // Vite配置 - 简化配置
  vite: {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue', 'vuetify'],
            'utils': ['@vueuse/core']
          }
        }
      }
    }
  },
  
  // PWA配置
  pwa: {
    // PWA策略配置
    strategies: 'generateSW', // 使用Workbox生成Service Worker
    registerType: 'autoUpdate', // 自动更新
    
    // Service Worker配置
    workbox: {
      // 缓存策略
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1年
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // 1年
            }
          }
        },
        {
          urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'unsplash-images-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 60 * 60 * 24 * 30 // 30天
            }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 30 // 30天
            }
          }
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 60 * 60 * 24 * 7 // 7天
            }
          }
        },
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'pages-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 // 1天
            }
          }
        }
      ],
      // 全局缓存配置
      globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'],
      globIgnores: ['**/node_modules/**/*'],
      cleanupOutdatedCaches: true,
      skipWaiting: true,
      clientsClaim: true
    },
    
    // PWA Manifest配置
    manifest: {
      name: 'NO TRACE EXPLORER | 無迹探索株式会社',
      short_name: 'NO TRACE',
      description: '革新的なソリューションで新たなビジネス価値を創造する企業です。',
      lang: 'ja',
      theme_color: '#667eea',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/?standalone=true',
      
      // アイコン設定 - SVG图标支持现代浏览器
      icons: [
        {
          src: '/icons/icon-72x72.svg',
          sizes: '72x72',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icons/icon-96x96.svg',
          sizes: '96x96',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icons/icon-128x128.svg',
          sizes: '128x128',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icons/icon-144x144.svg',
          sizes: '144x144',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icons/icon-152x152.svg',
          sizes: '152x152',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icons/icon-192x192.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icons/icon-384x384.svg',
          sizes: '384x384',
          type: 'image/svg+xml',
          purpose: 'any'
        },
        {
          src: '/icons/icon-512x512.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
          purpose: 'any'
        }
      ],
      
      // カテゴリ
      categories: ['business', 'productivity', 'consulting'],
      
      // 関連アプリケーション
      related_applications: [],
      prefer_related_applications: false,
      
      // PWA機能
      shortcuts: [
        {
          name: 'コーヒー事業',
          short_name: 'Coffee',
          description: 'コーヒー商品・サービス',
          url: '/coffee',
          icons: [{ src: '/icons/coffee-96x96.svg', sizes: '96x96' }]
        },
        {
          name: 'お問い合わせ',
          short_name: 'Contact',
          description: 'お問い合わせフォーム',
          url: '/contact',
          icons: [{ src: '/icons/contact-96x96.svg', sizes: '96x96' }]
        }
      ]
    },
    
    // PWA 開発設定
    devOptions: {
      enabled: false, // 開発中は無効化
      type: 'module'
    },
    
    // ビルド設定
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg']
  }
})