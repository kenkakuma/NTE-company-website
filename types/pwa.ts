// PWA相关类型定义
export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

export interface PWAInstallPrompt {
  showPrompt: boolean
  deferredPrompt: BeforeInstallPromptEvent | null
}

export interface PWAUpdateInfo {
  updateAvailable: boolean
  skipWaiting: () => void
}

export interface CacheInfo {
  name: string
  size: number
  lastModified: Date
}

export interface PWAStats {
  isInstalled: boolean
  isStandalone: boolean
  isOnline: boolean
  caches: CacheInfo[]
  serviceWorkerStatus: 'installing' | 'waiting' | 'active' | 'redundant' | 'not-supported'
}

export interface NotificationPermission {
  permission: 'granted' | 'denied' | 'default'
  requestPermission: () => Promise<'granted' | 'denied' | 'default'>
}

export interface PWACapabilities {
  serviceWorker: boolean
  notification: boolean
  pushMessaging: boolean
  backgroundSync: boolean
  share: boolean
  clipboard: boolean
  geolocation: boolean
  camera: boolean
}

export interface ShareData {
  title?: string
  text?: string
  url?: string
  files?: File[]
}

// Service Worker消息类型
export interface ServiceWorkerMessage {
  type: 'CACHE_UPDATED' | 'SKIP_WAITING' | 'GET_VERSION' | 'CLEAR_CACHE'
  payload?: any
}

// PWA设置
export interface PWASettings {
  enableNotifications: boolean
  enableBackgroundSync: boolean
  enableOfflineMode: boolean
  cacheStrategy: 'cacheFirst' | 'networkFirst' | 'staleWhileRevalidate'
}

// PWA事件
export interface PWAEvents {
  onInstall: () => void
  onUpdate: () => void
  onOffline: () => void
  onOnline: () => void
}

// PWA测试相关类型
export interface PWATestResult {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  category: string
  timestamp: string
  displayTime: string
}

export interface CacheTestResult {
  success: boolean
  message: string
  details: Record<string, any>
}

export interface OfflineTestResult {
  success: boolean
  message: string
  details: Record<string, any>
}