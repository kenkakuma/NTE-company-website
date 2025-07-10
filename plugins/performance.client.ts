// 性能优化插件 - 客户端专用
import { preloadCriticalComponents, preloadPageComponents } from '~/utils/lazyComponents'

export default defineNuxtPlugin(() => {
  // 关键资源预加载
  const preloadCriticalResources = () => {
    // 预加载关键字体
    const fontPreloads = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap',
        as: 'style'
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap',
        as: 'style'
      }
    ]

    fontPreloads.forEach(font => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = font.href
      link.as = font.as
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // 预加载关键图片
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/service-coffee.jpg',
      '/images/service-exhibition.jpg'
    ]

    criticalImages.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }

  // 智能预取下一页内容
  const setupIntelligentPrefetch = () => {
    let prefetchTimeout: NodeJS.Timeout

    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement
      
      if (link && link.href) {
        const url = new URL(link.href)
        const pathname = url.pathname
        
        // 清除之前的预取定时器
        if (prefetchTimeout) {
          clearTimeout(prefetchTimeout)
        }
        
        // 延迟预取，避免过多的无效请求
        prefetchTimeout = setTimeout(() => {
          const routeName = pathname.replace('/', '') || 'home'
          preloadPageComponents(routeName)
        }, 100)
      }
    }

    const handleMouseLeave = () => {
      if (prefetchTimeout) {
        clearTimeout(prefetchTimeout)
      }
    }

    // 为所有导航链接添加智能预取
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    // 清理事件监听器
    onBeforeUnmount(() => {
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      if (prefetchTimeout) {
        clearTimeout(prefetchTimeout)
      }
    })
  }

  // 图片懒加载观察器
  const setupImageLazyLoading = () => {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const src = img.dataset.src
            
            if (src) {
              img.src = src
              img.removeAttribute('data-src')
              imageObserver.unobserve(img)
            }
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    )

    // 观察所有带有data-src属性的图片
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => imageObserver.observe(img))

    return imageObserver
  }

  // Service Worker注册（为PWA做准备）
  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        console.log('ServiceWorker registered successfully:', registration.scope)
        
        // 检查更新
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // 新版本可用，提示用户刷新
                console.log('New version available. Please refresh.')
              }
            })
          }
        })
      } catch (error) {
        console.warn('ServiceWorker registration failed:', error)
      }
    }
  }

  // 性能监控
  const setupPerformanceMonitoring = () => {
    // Web Vitals监控
    const reportWebVital = (metric: any) => {
      // 这里可以发送到分析服务
      console.log('Web Vital:', metric)
    }

    // 监控首次内容绘制 (FCP)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            reportWebVital({
              name: 'FCP',
              value: entry.startTime,
              timestamp: Date.now()
            })
          }
        }
      })
      
      observer.observe({ entryTypes: ['paint'] })
    }

    // 监控首次输入延迟 (FID)
    const handleFirstInput = (_event: Event) => {
      const timing = (performance as any).getEntriesByType('first-input')[0]
      if (timing) {
        reportWebVital({
          name: 'FID',
          value: timing.processingStart - timing.startTime,
          timestamp: Date.now()
        })
      }
      
      // 只需要监控第一次输入
      ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(type => {
        document.removeEventListener(type, handleFirstInput, true)
      })
    }

    ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(type => {
      document.addEventListener(type, handleFirstInput, true)
    })
  }

  // 内存清理
  const setupMemoryManagement = () => {
    // 定期清理未使用的组件实例
    const cleanupInterval = setInterval(() => {
      if (typeof window.gc === 'function') {
        // 在开发环境中手动触发垃圾回收
        window.gc()
      }
    }, 30000) // 每30秒检查一次

    onBeforeUnmount(() => {
      clearInterval(cleanupInterval)
    })
  }

  // 初始化所有性能优化
  onMounted(() => {
    // 延迟执行非关键操作
    nextTick(() => {
      preloadCriticalResources()
      preloadCriticalComponents()
      setupIntelligentPrefetch()
      setupImageLazyLoading()
      setupPerformanceMonitoring()
      setupMemoryManagement()
      
      // 在浏览器空闲时注册Service Worker
      requestIdleCallback(() => {
        registerServiceWorker()
      })
    })
  })

  return {
    provide: {
      preloadPageComponents
    }
  }
})