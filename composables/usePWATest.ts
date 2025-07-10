// PWA测试和监控的组合函数
import { ref, onMounted, onUnmounted } from 'vue'
import type { PWATestResult, CacheTestResult, OfflineTestResult } from '~/types/pwa'

export function usePWATest() {
  // 响应式状态 - SSR安全
  const isOnline = ref(process.client ? navigator.onLine : true)
  const isPWAInstalled = ref(false)
  const serviceWorkerStatus = ref('检查中...')
  const cacheStats = ref({
    totalCaches: 0,
    totalEntries: 0,
    totalSize: 0
  })
  
  // 测试结果
  const testResults = ref<PWATestResult[]>([])
  const isTestingInProgress = ref(false)
  
  // 网络状态监听
  const handleOnline = () => {
    isOnline.value = true
    addTestResult('网络连接已恢复', 'success', 'network')
  }
  
  const handleOffline = () => {
    isOnline.value = false
    addTestResult('网络连接已断开', 'warning', 'network')
  }
  
  onMounted(() => {
    if (process.client) {
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
      
      // 初始状态检查
      refreshPWAStatus()
    }
  })
  
  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  })
  
  // 添加测试结果
  const addTestResult = (
    message: string, 
    type: 'success' | 'error' | 'warning' | 'info',
    category: string = 'general'
  ) => {
    testResults.value.unshift({
      id: Date.now().toString(),
      message,
      type,
      category,
      timestamp: new Date().toISOString(),
      displayTime: new Date().toLocaleTimeString()
    })
    
    // 限制结果数量
    if (testResults.value.length > 50) {
      testResults.value = testResults.value.slice(0, 50)
    }
  }
  
  // 刷新PWA状态
  const refreshPWAStatus = async () => {
    try {
      // 检查PWA安装状态
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      const isIOSStandalone = (window.navigator as any).standalone === true
      const hasStandaloneParam = window.location.search.includes('standalone=true')
      isPWAInstalled.value = isStandalone || isIOSStandalone || hasStandaloneParam
      
      // 检查Service Worker状态
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration()
        if (!registration) {
          serviceWorkerStatus.value = '未注册'
        } else if (registration.installing) {
          serviceWorkerStatus.value = '安装中'
        } else if (registration.waiting) {
          serviceWorkerStatus.value = '等待激活'
        } else if (registration.active) {
          serviceWorkerStatus.value = '活跃'
        } else {
          serviceWorkerStatus.value = '未知状态'
        }
      } else {
        serviceWorkerStatus.value = '不支持'
      }
      
      // 获取缓存统计
      await updateCacheStats()
      
      addTestResult('PWA状态检查完成', 'success', 'status')
    } catch (error) {
      addTestResult(`PWA状态检查失败: ${(error as Error).message}`, 'error', 'status')
    }
  }
  
  // 更新缓存统计
  const updateCacheStats = async () => {
    if (!('caches' in window)) {
      addTestResult('浏览器不支持Cache API', 'warning', 'cache')
      return
    }
    
    try {
      const cacheNames = await caches.keys()
      let totalEntries = 0
      let totalSize = 0
      
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName)
        const keys = await cache.keys()
        totalEntries += keys.length
        
        // 估算缓存大小（简化版本）
        for (const request of keys) {
          try {
            const response = await cache.match(request)
            if (response) {
              const clone = response.clone()
              const buffer = await clone.arrayBuffer()
              totalSize += buffer.byteLength
            }
          } catch (e) {
            // 忽略个别文件的错误
          }
        }
      }
      
      cacheStats.value = {
        totalCaches: cacheNames.length,
        totalEntries,
        totalSize
      }
      
      addTestResult(
        `缓存统计: ${cacheNames.length}个缓存, ${totalEntries}个条目, ${formatBytes(totalSize)}`,
        'info',
        'cache'
      )
    } catch (error) {
      addTestResult(`缓存统计失败: ${(error as Error).message}`, 'error', 'cache')
    }
  }
  
  // 测试特定缓存策略
  const testCacheStrategy = async (strategy: string): Promise<CacheTestResult> => {
    try {
      const cacheNames = await caches.keys()
      let targetCache: string | undefined
      
      switch (strategy) {
        case 'fonts':
          targetCache = cacheNames.find(name => name.includes('google-fonts') || name.includes('gstatic'))
          break
        case 'images':
          targetCache = cacheNames.find(name => name.includes('images'))
          break
        case 'static':
          targetCache = cacheNames.find(name => name.includes('static-resources'))
          break
        case 'pages':
          targetCache = cacheNames.find(name => name.includes('pages'))
          break
        default:
          throw new Error(`未知的缓存策略: ${strategy}`)
      }
      
      if (!targetCache) {
        return {
          success: false,
          message: `未找到${strategy}缓存`,
          details: { cacheNames }
        }
      }
      
      const cache = await caches.open(targetCache)
      const keys = await cache.keys()
      
      return {
        success: true,
        message: `${strategy}缓存正常 (${keys.length}个条目)`,
        details: {
          cacheName: targetCache,
          entryCount: keys.length,
          sampleUrls: keys.slice(0, 3).map(req => req.url)
        }
      }
    } catch (error) {
      return {
        success: false,
        message: `${strategy}缓存测试失败: ${(error as Error).message}`,
        details: { error: (error as Error).message }
      }
    }
  }
  
  // 测试离线页面导航
  const testOfflineNavigation = async (path: string): Promise<OfflineTestResult> => {
    try {
      const startTime = performance.now()
      const response = await fetch(path, { cache: 'no-cache' })
      const endTime = performance.now()
      const responseTime = endTime - startTime
      
      return {
        success: response.ok,
        message: `页面 ${path}: ${response.ok ? '成功' : '失败'} (${Math.round(responseTime)}ms)`,
        details: {
          status: response.status,
          statusText: response.statusText,
          responseTime,
          fromCache: response.headers.get('cache-control') !== null
        }
      }
    } catch (error) {
      return {
        success: false,
        message: `页面 ${path}: 网络错误 - ${(error as Error).message}`,
        details: { error: (error as Error).message }
      }
    }
  }
  
  // 综合PWA测试
  const runComprehensiveTest = async () => {
    if (isTestingInProgress.value) return
    
    isTestingInProgress.value = true
    addTestResult('开始综合PWA测试...', 'info', 'test')
    
    try {
      // 1. 刷新PWA状态
      await refreshPWAStatus()
      
      // 2. 测试所有缓存策略
      const cacheStrategies = ['fonts', 'images', 'static', 'pages']
      for (const strategy of cacheStrategies) {
        const result = await testCacheStrategy(strategy)
        addTestResult(result.message, result.success ? 'success' : 'error', 'cache')
      }
      
      // 3. 测试页面导航
      const testPages = ['/', '/coffee', '/about', '/lab', '/contact']
      for (const page of testPages) {
        const result = await testOfflineNavigation(page)
        addTestResult(result.message, result.success ? 'success' : 'error', 'navigation')
      }
      
      // 4. 测试Service Worker通信
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration()
          if (registration?.active) {
            // 测试与Service Worker的通信
            const messageChannel = new MessageChannel()
            const responsePromise = new Promise((resolve, reject) => {
              messageChannel.port1.onmessage = (event) => {
                if (event.data.error) {
                  reject(new Error(event.data.error))
                } else {
                  resolve(event.data)
                }
              }
              
              // 设置超时
              setTimeout(() => reject(new Error('Service Worker通信超时')), 5000)
            })
            
            registration.active.postMessage(
              { type: 'GET_VERSION' },
              [messageChannel.port2]
            )
            
            await responsePromise
            addTestResult('Service Worker通信测试成功', 'success', 'sw')
          } else {
            addTestResult('Service Worker未激活，跳过通信测试', 'warning', 'sw')
          }
        } catch (error) {
          addTestResult(`Service Worker通信测试失败: ${(error as Error).message}`, 'error', 'sw')
        }
      }
      
      addTestResult('综合PWA测试完成', 'success', 'test')
    } catch (error) {
      addTestResult(`综合测试失败: ${(error as Error).message}`, 'error', 'test')
    } finally {
      isTestingInProgress.value = false
    }
  }
  
  // 清除测试结果
  const clearTestResults = () => {
    testResults.value = []
    addTestResult('测试结果已清除', 'info', 'system')
  }
  
  // 导出测试报告
  const exportTestReport = () => {
    const report = {
      timestamp: new Date().toISOString(),
      pwaDiagnosis: {
        isOnline: isOnline.value,
        isPWAInstalled: isPWAInstalled.value,
        serviceWorkerStatus: serviceWorkerStatus.value,
        cacheStats: cacheStats.value
      },
      testResults: testResults.value,
      browserInfo: {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine
      }
    }
    
    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: 'application/json'
    })
    
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `pwa-test-report-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    addTestResult('测试报告已导出', 'success', 'system')
  }
  
  // 工具函数
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  
  return {
    // 状态
    isOnline,
    isPWAInstalled,
    serviceWorkerStatus,
    cacheStats,
    testResults,
    isTestingInProgress,
    
    // 方法
    refreshPWAStatus,
    testCacheStrategy,
    testOfflineNavigation,
    runComprehensiveTest,
    clearTestResults,
    exportTestReport,
    addTestResult,
    
    // 工具
    formatBytes
  }
}