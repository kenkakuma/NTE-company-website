<template>
  <div class="pwa-manager">
    <!-- PWA安装提示 -->
    <v-snackbar
      v-model="showInstallPrompt"
      :timeout="-1"
      location="bottom"
      color="primary"
      class="pwa-install-prompt"
    >
      <div class="d-flex align-center">
        <v-icon icon="mdi-cellphone-arrow-down" class="mr-3" />
        <div>
          <div class="font-weight-medium">アプリをインストール</div>
          <div class="text-caption">ホーム画面に追加して素早くアクセス</div>
        </div>
      </div>
      
      <template #actions>
        <v-btn
          color="white"
          variant="text"
          size="small"
          @click="dismissInstall"
        >
          後で
        </v-btn>
        <v-btn
          color="white"
          variant="elevated"
          size="small"
          @click="installPWA"
        >
          インストール
        </v-btn>
      </template>
    </v-snackbar>

    <!-- PWA更新通知 -->
    <v-snackbar
      v-model="showUpdatePrompt"
      :timeout="-1"
      location="bottom"
      color="info"
      class="pwa-update-prompt"
    >
      <div class="d-flex align-center">
        <v-icon icon="mdi-update" class="mr-3" />
        <div>
          <div class="font-weight-medium">新しいバージョンが利用可能</div>
          <div class="text-caption">更新して最新機能をお試しください</div>
        </div>
      </div>
      
      <template #actions>
        <v-btn
          color="white"
          variant="text"
          size="small"
          @click="dismissUpdate"
        >
          後で
        </v-btn>
        <v-btn
          color="white"
          variant="elevated"
          size="small"
          @click="updatePWA"
        >
          更新
        </v-btn>
      </template>
    </v-snackbar>

    <!-- オフライン通知 -->
    <v-snackbar
      v-model="isOffline"
      :timeout="-1"
      location="top"
      color="warning"
      class="pwa-offline-indicator"
    >
      <div class="d-flex align-center">
        <v-icon icon="mdi-wifi-off" class="mr-3" />
        <div>
          <div class="font-weight-medium">オフラインモード</div>
          <div class="text-caption">インターネット接続を確認してください</div>
        </div>
      </div>
      
      <template #actions>
        <v-btn
          color="white"
          variant="text"
          size="small"
          @click="checkConnection"
        >
          再試行
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
// PWA管理コンポーネント
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

// 響应式状态
const showInstallPrompt = ref(false)
const showUpdatePrompt = ref(false)
const isOffline = ref(false)
const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)

// PWA状态检测
const isPWAInstalled = ref(false)
const isStandalone = ref(false)

// Service Worker实例
const swRegistration = ref<ServiceWorkerRegistration | null>(null)
const newWorker = ref<ServiceWorker | null>(null)

// 检查PWA安装状态
const checkPWAStatus = () => {
  // 检查是否以独立模式运行
  isStandalone.value = window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true

  // 检查是否已安装
  isPWAInstalled.value = isStandalone.value
}

// 网络连接状态监控
const updateOnlineStatus = () => {
  isOffline.value = !navigator.onLine
}

// PWA安装处理
const installPWA = async () => {
  if (!deferredPrompt.value) return

  try {
    await deferredPrompt.value.prompt()
    const choiceResult = await deferredPrompt.value.userChoice
    
    if (choiceResult.outcome === 'accepted') {
      console.log('PWA安装成功')
      showInstallPrompt.value = false
      isPWAInstalled.value = true
      
      // 保存安装状态到localStorage
      localStorage.setItem('pwa-installed', 'true')
    }
    
    deferredPrompt.value = null
  } catch (error) {
    console.error('PWA安装失败:', error)
  }
}

// 安装提示关闭
const dismissInstall = () => {
  showInstallPrompt.value = false
  // 7天后再次显示提示
  localStorage.setItem('pwa-install-dismissed', (Date.now() + 7 * 24 * 60 * 60 * 1000).toString())
}

// PWA更新处理
const updatePWA = async () => {
  if (!newWorker.value) return

  try {
    // 发送skipWaiting消息到新的Service Worker
    newWorker.value.postMessage({ type: 'SKIP_WAITING' })
    
    showUpdatePrompt.value = false
    
    // 重新加载页面应用更新
    window.location.reload()
  } catch (error) {
    console.error('PWA更新失败:', error)
  }
}

// 更新提示关闭
const dismissUpdate = () => {
  showUpdatePrompt.value = false
}

// 检查网络连接
const checkConnection = () => {
  updateOnlineStatus()
  if (navigator.onLine) {
    // 连接恢复，可以刷新页面获取最新内容
    window.location.reload()
  }
}

// 检查是否应该显示安装提示
const shouldShowInstallPrompt = () => {
  // 如果已安装或已关闭提示，不显示
  if (isPWAInstalled.value) return false
  
  const dismissedUntil = localStorage.getItem('pwa-install-dismissed')
  if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) return false
  
  return true
}

// Service Worker更新检测
const checkForUpdates = async () => {
  if (!swRegistration.value) return

  try {
    await swRegistration.value.update()
  } catch (error) {
    console.error('Service Worker更新检查失败:', error)
  }
}

// 初始化PWA功能
const initializePWA = () => {
  // PWA安装事件监听
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault()
    deferredPrompt.value = e as BeforeInstallPromptEvent
    
    if (shouldShowInstallPrompt()) {
      showInstallPrompt.value = true
    }
  })

  // PWA安装完成事件
  window.addEventListener('appinstalled', () => {
    console.log('PWA已成功安装')
    isPWAInstalled.value = true
    showInstallPrompt.value = false
    localStorage.setItem('pwa-installed', 'true')
  })

  // 网络状态监听
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)

  // Service Worker消息监听
  navigator.serviceWorker?.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_UPDATED') {
      console.log('缓存已更新')
    }
  })
}

// Service Worker注册和更新监听
const setupServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) return

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration) {
      swRegistration.value = registration

      // 监听Service Worker更新
      registration.addEventListener('updatefound', () => {
        const newSW = registration.installing
        if (newSW) {
          newWorker.value = newSW
          
          newSW.addEventListener('statechange', () => {
            if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
              // 新版本可用
              showUpdatePrompt.value = true
            }
          })
        }
      })

      // 定期检查更新（每30分钟）
      setInterval(checkForUpdates, 30 * 60 * 1000)
    }
  } catch (error) {
    console.error('Service Worker设置失败:', error)
  }
}

// 组件挂载时初始化
onMounted(() => {
  checkPWAStatus()
  updateOnlineStatus()
  initializePWA()
  
  // 延迟设置Service Worker以避免阻塞页面加载
  nextTick(() => {
    setupServiceWorker()
  })
})

// 组件卸载时清理事件监听器
onUnmounted(() => {
  window.removeEventListener('online', updateOnlineStatus)
  window.removeEventListener('offline', updateOnlineStatus)
})

// 暴露给父组件的方法
defineExpose({
  installPWA,
  updatePWA,
  checkForUpdates,
  isPWAInstalled: readonly(isPWAInstalled),
  isOffline: readonly(isOffline)
})
</script>

<style scoped>
.pwa-manager {
  position: relative;
  z-index: 9999;
}

/* PWA提示自定义样式 */
.pwa-install-prompt :deep(.v-snackbar__content) {
  padding: 16px 24px;
}

.pwa-update-prompt :deep(.v-snackbar__content) {
  padding: 16px 24px;
}

.pwa-offline-indicator :deep(.v-snackbar__content) {
  padding: 12px 16px;
}

/* 响应式设计 */
@media (max-width: 600px) {
  .pwa-install-prompt :deep(.v-snackbar__content),
  .pwa-update-prompt :deep(.v-snackbar__content) {
    padding: 12px 16px;
  }
  
  .pwa-install-prompt :deep(.v-snackbar__actions),
  .pwa-update-prompt :deep(.v-snackbar__actions) {
    margin-top: 8px;
  }
}
</style>