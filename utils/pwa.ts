// PWA相关工具函数
import type { 
  PWACapabilities, 
  PWAStats, 
  ShareData,
  ServiceWorkerMessage 
} from '~/types/pwa'

// 检测PWA功能支持
export const detectPWACapabilities = (): PWACapabilities => {
  if (process.server) {
    return {
      serviceWorker: false,
      notification: false,
      pushMessaging: false,
      backgroundSync: false,
      share: false,
      clipboard: false,
      geolocation: false,
      camera: false
    }
  }

  return {
    serviceWorker: 'serviceWorker' in navigator,
    notification: 'Notification' in window,
    pushMessaging: 'PushManager' in window,
    backgroundSync: 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
    share: 'share' in navigator,
    clipboard: 'clipboard' in navigator,
    geolocation: 'geolocation' in navigator,
    camera: 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices
  }
}

// 检查PWA安装状态
export const checkPWAInstallStatus = (): boolean => {
  if (process.server) return false

  // 检查显示模式
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
  
  // 检查iOS Safari独立模式
  const isIOSStandalone = (window.navigator as any).standalone === true
  
  // 检查启动参数
  const hasStandaloneParam = window.location.search.includes('standalone=true')
  
  return isStandalone || isIOSStandalone || hasStandaloneParam
}

// 获取Service Worker状态
export const getServiceWorkerStatus = async (): Promise<string> => {
  if (!('serviceWorker' in navigator)) {
    return 'not-supported'
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (!registration) return 'not-registered'
    
    if (registration.installing) return 'installing'
    if (registration.waiting) return 'waiting'
    if (registration.active) return 'active'
    
    return 'unknown'
  } catch (error) {
    console.error('Service Worker状态检查失败:', error)
    return 'error'
  }
}

// 获取缓存信息
export const getCacheInfo = async () => {
  if (!('caches' in window)) return []

  try {
    const cacheNames = await caches.keys()
    const cacheInfos = await Promise.all(
      cacheNames.map(async (name) => {
        const cache = await caches.open(name)
        const keys = await cache.keys()
        return {
          name,
          size: keys.length,
          lastModified: new Date() // 简化版本，实际应该检查缓存条目的时间戳
        }
      })
    )
    return cacheInfos
  } catch (error) {
    console.error('缓存信息获取失败:', error)
    return []
  }
}

// 清理过期缓存
export const clearExpiredCaches = async (keepCaches: string[] = []) => {
  if (!('caches' in window)) return

  try {
    const cacheNames = await caches.keys()
    const deletePromises = cacheNames
      .filter(name => !keepCaches.includes(name))
      .map(name => caches.delete(name))
    
    await Promise.all(deletePromises)
    console.log('过期缓存清理完成')
  } catch (error) {
    console.error('缓存清理失败:', error)
  }
}

// PWA分享功能
export const shareContent = async (data: ShareData): Promise<boolean> => {
  if (!('share' in navigator)) {
    // 降级到剪贴板复制
    try {
      const shareText = `${data.title || ''}\n${data.text || ''}\n${data.url || ''}`
      if ('clipboard' in navigator) {
        await (navigator as any).clipboard.writeText(shareText)
      }
      return true
    } catch {
      return false
    }
  }

  try {
    await navigator.share(data)
    return true
  } catch (error) {
    console.error('分享失败:', error)
    return false
  }
}

// 向Service Worker发送消息
export const sendServiceWorkerMessage = async (message: ServiceWorkerMessage): Promise<any> => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('Service Worker不支持')
  }

  const registration = await navigator.serviceWorker.getRegistration()
  if (!registration?.active) {
    throw new Error('Service Worker未激活')
  }

  return new Promise((resolve, reject) => {
    const messageChannel = new MessageChannel()
    
    messageChannel.port1.onmessage = (event) => {
      if (event.data.error) {
        reject(new Error(event.data.error))
      } else {
        resolve(event.data)
      }
    }

    registration.active!.postMessage(message, [messageChannel.port2])
  })
}

// 获取PWA统计信息
export const getPWAStats = async (): Promise<PWAStats> => {
  const caches = await getCacheInfo()
  const serviceWorkerStatus = await getServiceWorkerStatus()

  return {
    isInstalled: checkPWAInstallStatus(),
    isStandalone: checkPWAInstallStatus(),
    isOnline: navigator.onLine,
    caches,
    serviceWorkerStatus: serviceWorkerStatus as any
  }
}

// 检查网络连接质量
export const getNetworkInfo = () => {
  if (!('connection' in navigator)) {
    return {
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0,
      saveData: false
    }
  }

  const connection = (navigator as any).connection
  return {
    effectiveType: connection.effectiveType || 'unknown',
    downlink: connection.downlink || 0,
    rtt: connection.rtt || 0,
    saveData: connection.saveData || false
  }
}

// PWA性能监控
export const monitorPWAPerformance = () => {
  if (!('performance' in window)) return

  // 监控关键性能指标
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(`PWA性能指标 ${entry.name}:`, (entry as any).value || entry.duration)
    }
  })

  observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] })
}

// 本地存储PWA设置
export const savePWASettings = (settings: Record<string, any>) => {
  try {
    localStorage.setItem('pwa-settings', JSON.stringify(settings))
  } catch (error) {
    console.error('PWA设置保存失败:', error)
  }
}

export const loadPWASettings = (): Record<string, any> => {
  try {
    const settings = localStorage.getItem('pwa-settings')
    return settings ? JSON.parse(settings) : {}
  } catch (error) {
    console.error('PWA设置加载失败:', error)
    return {}
  }
}

// 检查PWA更新
export const checkForPWAUpdate = async (): Promise<boolean> => {
  if (!('serviceWorker' in navigator)) return false

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (!registration) return false

    await registration.update()
    return !!registration.waiting
  } catch (error) {
    console.error('PWA更新检查失败:', error)
    return false
  }
}

// PWA调试信息
export const getPWADebugInfo = async () => {
  const capabilities = detectPWACapabilities()
  const stats = await getPWAStats()
  const networkInfo = getNetworkInfo()

  return {
    capabilities,
    stats,
    networkInfo,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine,
    timestamp: new Date().toISOString()
  }
}