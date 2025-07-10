<template>
  <div class="pwa-monitor" v-if="showMonitor">
    <!-- 网络状态指示器 -->
    <v-snackbar
      v-model="showNetworkStatus"
      :timeout="networkStatusTimeout"
      :color="networkStatusColor"
      location="top"
      class="network-status-snackbar"
    >
      <div class="d-flex align-center">
        <v-icon :icon="networkStatusIcon" class="mr-2" />
        <span>{{ networkStatusMessage }}</span>
      </div>
      <template #actions>
        <v-btn
          variant="text"
          size="small"
          @click="showNetworkStatus = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>

    <!-- PWA更新通知 -->
    <v-snackbar
      v-model="showUpdateNotification"
      :timeout="-1"
      color="info"
      location="bottom"
      class="update-notification-snackbar"
    >
      <div class="d-flex align-center">
        <v-icon icon="mdi-download" class="mr-2" />
        <div>
          <div class="font-weight-medium">应用更新可用</div>
          <div class="text-caption">新版本已准备就绪</div>
        </div>
      </div>
      <template #actions>
        <v-btn
          variant="text"
          size="small"
          @click="applyUpdate"
          :loading="applyingUpdate"
        >
          更新
        </v-btn>
        <v-btn
          variant="text"
          size="small"
          @click="dismissUpdate"
        >
          稍后
        </v-btn>
      </template>
    </v-snackbar>

    <!-- PWA安装提示 -->
    <v-snackbar
      v-model="showInstallPrompt"
      :timeout="-1"
      color="primary"
      location="bottom"
      class="install-prompt-snackbar"
    >
      <div class="d-flex align-center">
        <v-icon icon="mdi-cellphone-arrow-down" class="mr-2" />
        <div>
          <div class="font-weight-medium">安装应用</div>
          <div class="text-caption">添加到主屏幕以获得更好的体验</div>
        </div>
      </div>
      <template #actions>
        <v-btn
          variant="text"
          size="small"
          @click="installPWA"
          :loading="installing"
        >
          安装
        </v-btn>
        <v-btn
          variant="text"
          size="small"
          @click="dismissInstallPrompt"
        >
          取消
        </v-btn>
      </template>
    </v-snackbar>

    <!-- 开发环境PWA状态浮动按钮 -->
    <v-fab
      v-if="showDevButton"
      icon="mdi-wifi-check"
      location="bottom end"
      app
      color="secondary"
      size="small"
      class="pwa-dev-fab"
      @click="toggleDevInfo"
    />

    <!-- 开发环境PWA信息弹窗 -->
    <v-dialog v-model="showDevInfo" max-width="600">
      <v-card>
        <v-card-title class="bg-secondary text-white">
          <v-icon left>mdi-information</v-icon>
          PWA 开发信息
        </v-card-title>
        <v-card-text class="pa-4">
          <v-row>
            <v-col cols="6">
              <div class="mb-2">
                <strong>网络状态:</strong>
                <v-chip 
                  :color="isOnline ? 'success' : 'error'" 
                  size="small" 
                  class="ml-2"
                >
                  {{ isOnline ? '在线' : '离线' }}
                </v-chip>
              </div>
              <div class="mb-2">
                <strong>PWA安装:</strong>
                <v-chip 
                  :color="isPWAInstalled ? 'success' : 'warning'" 
                  size="small" 
                  class="ml-2"
                >
                  {{ isPWAInstalled ? '已安装' : '未安装' }}
                </v-chip>
              </div>
              <div class="mb-2">
                <strong>Service Worker:</strong>
                <v-chip 
                  :color="getServiceWorkerColor(serviceWorkerStatus)" 
                  size="small" 
                  class="ml-2"
                >
                  {{ serviceWorkerStatus }}
                </v-chip>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="mb-2">
                <strong>缓存数量:</strong>
                <v-chip color="info" size="small" class="ml-2">
                  {{ cacheStats.totalCaches }}
                </v-chip>
              </div>
              <div class="mb-2">
                <strong>缓存条目:</strong>
                <v-chip color="info" size="small" class="ml-2">
                  {{ cacheStats.totalEntries }}
                </v-chip>
              </div>
              <div class="mb-2">
                <strong>缓存大小:</strong>
                <v-chip color="info" size="small" class="ml-2">
                  {{ formatBytes(cacheStats.totalSize) }}
                </v-chip>
              </div>
            </v-col>
          </v-row>

          <v-divider class="my-3" />

          <div class="d-flex gap-2">
            <v-btn 
              size="small" 
              variant="outlined" 
              @click="refreshStatus"
              :loading="refreshing"
            >
              刷新状态
            </v-btn>
            <v-btn 
              size="small" 
              variant="outlined" 
              @click="runQuickTest"
              :loading="testing"
            >
              快速测试
            </v-btn>
            <v-btn 
              size="small" 
              variant="outlined" 
              to="/pwa-test"
            >
              详细测试
            </v-btn>
          </div>

          <div v-if="lastTestResults.length > 0" class="mt-3">
            <h4 class="mb-2">最近测试结果:</h4>
            <div class="test-results-container" style="max-height: 200px; overflow-y: auto;">
              <div 
                v-for="result in lastTestResults.slice(0, 5)" 
                :key="result.id"
                class="d-flex align-center mb-1"
              >
                <v-icon 
                  :color="getResultColor(result.type)" 
                  size="small" 
                  class="mr-2"
                >
                  {{ getResultIcon(result.type) }}
                </v-icon>
                <span class="text-caption">{{ result.message }}</span>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { usePWATest } from '~/composables/usePWATest'

// 组合函数
const {
  isOnline,
  isPWAInstalled,
  serviceWorkerStatus,
  cacheStats,
  testResults,
  refreshPWAStatus,
  testCacheStrategy,
  addTestResult,
  formatBytes
} = usePWATest()

// 组件状态
const showMonitor = ref(true)
const showNetworkStatus = ref(false)
const showUpdateNotification = ref(false)
const showInstallPrompt = ref(false)
const showDevInfo = ref(false)
const refreshing = ref(false)
const testing = ref(false)
const installing = ref(false)
const applyingUpdate = ref(false)

// 网络状态
const networkStatusTimeout = ref(4000)
const networkStatusMessage = ref('')
const networkStatusColor = ref('success')
const networkStatusIcon = ref('mdi-wifi')

// 开发环境按钮显示控制
const showDevButton = computed(() => {
  return process.dev || (process.client && window.location.hostname === 'localhost')
})

// 最近测试结果
const lastTestResults = computed(() => testResults.value.slice(0, 10))

// BeforeInstallPrompt事件
let deferredPrompt: any = null

// 生命周期
onMounted(() => {
  // 监听PWA安装提示事件
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  
  // 监听网络状态变化
  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)
  
  // 监听Service Worker更新
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', handleServiceWorkerUpdate)
  }
  
  // 初始化状态
  refreshPWAStatus()
  
  // 检查PWA安装提示显示条件
  setTimeout(() => {
    checkInstallPromptConditions()
  }, 3000)
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.removeEventListener('online', handleOnline)
  window.removeEventListener('offline', handleOffline)
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.removeEventListener('controllerchange', handleServiceWorkerUpdate)
  }
})

// 事件处理
const handleBeforeInstallPrompt = (e: Event) => {
  e.preventDefault()
  deferredPrompt = e
  
  // 延迟显示安装提示，避免打扰用户
  setTimeout(() => {
    if (!isPWAInstalled.value && !hasRecentlyDismissedInstall()) {
      showInstallPrompt.value = true
    }
  }, 5000)
}

const handleOnline = () => {
  networkStatusMessage.value = '网络连接已恢复'
  networkStatusColor.value = 'success'
  networkStatusIcon.value = 'mdi-wifi'
  showNetworkStatus.value = true
  networkStatusTimeout.value = 4000
  
  addTestResult('网络连接已恢复', 'success', 'network')
}

const handleOffline = () => {
  networkStatusMessage.value = '网络连接已断开，应用将使用缓存继续工作'
  networkStatusColor.value = 'warning'
  networkStatusIcon.value = 'mdi-wifi-off'
  showNetworkStatus.value = true
  networkStatusTimeout.value = 8000
  
  addTestResult('网络连接已断开', 'warning', 'network')
}

const handleServiceWorkerUpdate = () => {
  showUpdateNotification.value = true
  addTestResult('检测到应用更新', 'info', 'update')
}

// PWA功能方法
const installPWA = async () => {
  if (!deferredPrompt) {
    addTestResult('无可用的安装提示', 'error', 'install')
    return
  }
  
  installing.value = true
  
  try {
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      addTestResult('PWA安装成功', 'success', 'install')
      showInstallPrompt.value = false
      deferredPrompt = null
    } else {
      addTestResult('用户取消了PWA安装', 'info', 'install')
      recordInstallDismissal()
    }
  } catch (error) {
    addTestResult(`PWA安装失败: ${(error as Error).message}`, 'error', 'install')
  } finally {
    installing.value = false
  }
}

const dismissInstallPrompt = () => {
  showInstallPrompt.value = false
  recordInstallDismissal()
  addTestResult('用户已关闭安装提示', 'info', 'install')
}

const applyUpdate = async () => {
  applyingUpdate.value = true
  
  try {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration()
      if (registration?.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' })
        
        // 等待Service Worker激活后刷新页面
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (process.client) {
            window.location.reload()
          }
        })
        
        addTestResult('应用更新已应用', 'success', 'update')
      }
    }
  } catch (error) {
    addTestResult(`应用更新失败: ${(error as Error).message}`, 'error', 'update')
  } finally {
    applyingUpdate.value = false
    showUpdateNotification.value = false
  }
}

const dismissUpdate = () => {
  showUpdateNotification.value = false
  addTestResult('用户推迟了应用更新', 'info', 'update')
}

// 开发功能方法
const toggleDevInfo = () => {
  showDevInfo.value = !showDevInfo.value
}

const refreshStatus = async () => {
  refreshing.value = true
  await refreshPWAStatus()
  refreshing.value = false
}

const runQuickTest = async () => {
  testing.value = true
  
  try {
    // 快速测试主要缓存策略
    const strategies = ['fonts', 'images', 'static']
    for (const strategy of strategies) {
      const result = await testCacheStrategy(strategy)
      addTestResult(result.message, result.success ? 'success' : 'error', 'cache')
    }
    
    addTestResult('快速测试完成', 'success', 'test')
  } catch (error) {
    addTestResult(`快速测试失败: ${(error as Error).message}`, 'error', 'test')
  } finally {
    testing.value = false
  }
}

// 工具方法
const getServiceWorkerColor = (status: string) => {
  switch (status) {
    case '活跃': return 'success'
    case '安装中': return 'warning'
    case '等待激活': return 'info'
    default: return 'error'
  }
}

const getResultColor = (type: string) => {
  switch (type) {
    case 'success': return 'success'
    case 'error': return 'error'
    case 'warning': return 'warning'
    case 'info': return 'info'
    default: return 'grey'
  }
}

const getResultIcon = (type: string) => {
  switch (type) {
    case 'success': return 'mdi-check-circle'
    case 'error': return 'mdi-alert-circle'
    case 'warning': return 'mdi-alert'
    case 'info': return 'mdi-information'
    default: return 'mdi-circle-outline'
  }
}

const checkInstallPromptConditions = () => {
  // 检查是否应该显示安装提示
  if (!isPWAInstalled.value && deferredPrompt && !hasRecentlyDismissedInstall()) {
    // 在用户进行了一些交互后显示
    let interactionCount = 0
    const countInteraction = () => {
      interactionCount++
      if (interactionCount >= 3) {
        showInstallPrompt.value = true
        document.removeEventListener('click', countInteraction)
        document.removeEventListener('scroll', countInteraction)
      }
    }
    
    document.addEventListener('click', countInteraction)
    document.addEventListener('scroll', countInteraction)
  }
}

const hasRecentlyDismissedInstall = (): boolean => {
  const dismissed = localStorage.getItem('pwa-install-dismissed')
  if (!dismissed) return false
  
  const dismissedTime = new Date(dismissed)
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  return dismissedTime > weekAgo
}

const recordInstallDismissal = () => {
  localStorage.setItem('pwa-install-dismissed', new Date().toISOString())
}
</script>

<style scoped>
.pwa-monitor {
  position: relative;
  z-index: 2000;
}

.network-status-snackbar {
  z-index: 2001;
}

.update-notification-snackbar {
  z-index: 2002;
}

.install-prompt-snackbar {
  z-index: 2003;
}

.pwa-dev-fab {
  z-index: 1500;
}

.test-results-container {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 8px;
}

.gap-2 {
  gap: 0.5rem;
}
</style>