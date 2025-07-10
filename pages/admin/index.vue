<!-- 统一管理中心 -->
<!-- Author: Claude AI Assistant -->
<!-- Date: 2025-07-09 -->
<!-- Description: Unified admin dashboard with all management features -->

<template>
  <div class="admin-dashboard">
    <!-- App Bar -->
    <v-app-bar 
      color="primary" 
      density="comfortable"
      elevation="2"
      app
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
      
      <v-toolbar-title class="toolbar-title">
        <v-icon start>mdi-cog</v-icon>
        NO TRACE EXPLORER 管理中心
      </v-toolbar-title>
      
      <v-spacer />
      
      <v-btn 
        icon="mdi-home"
        @click="goHome"
        title="返回首页"
      />
      
      <v-btn 
        icon="mdi-refresh"
        @click="refreshData"
        title="刷新数据"
      />
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      width="280"
      color="grey-lighten-5"
    >
      <div class="drawer-header">
        <div class="user-info">
          <v-avatar color="primary" size="48">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
          <div class="user-details">
            <div class="user-name">管理员</div>
            <div class="user-role">系统管理员</div>
          </div>
        </div>
      </div>
      
      <v-divider />
      
      <v-list nav density="compact">
        <v-list-item
          v-for="item in navigationItems"
          :key="item.value"
          :prepend-icon="item.icon"
          :title="item.title"
          :subtitle="item.subtitle"
          :active="activeTab === item.value"
          @click="activeTab = item.value"
          class="nav-item"
        >
          <template v-slot:append v-if="item.badge">
            <v-badge 
              :content="item.badge"
              color="error"
              inline
            />
          </template>
        </v-list-item>
      </v-list>
      
      <v-divider class="my-3" />
      
      <v-list nav density="compact">
        <v-list-subheader>系统设置</v-list-subheader>
        <v-list-item
          prepend-icon="mdi-backup-restore"
          title="数据备份"
          @click="backupData"
        />
        <v-list-item
          prepend-icon="mdi-delete-sweep"
          title="清理缓存"
          @click="clearCache"
        />
        <v-list-item
          prepend-icon="mdi-information"
          title="系统信息"
          @click="showSystemInfo"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <div class="main-content">
        <!-- Tab Headers -->
        <div class="tab-headers">
          <div class="tab-header-content">
            <h1 class="page-title">
              <v-icon start>{{ currentTabIcon }}</v-icon>
              {{ currentTabTitle }}
            </h1>
            <p class="page-subtitle">{{ currentTabSubtitle }}</p>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="tab-content">
          <!-- 文章管理 -->
          <div v-show="activeTab === 'articles'" class="tab-panel">
            <ArticleManager />
          </div>

          <!-- 图片管理 -->
          <div v-show="activeTab === 'images'" class="tab-panel">
            <ImageManager />
          </div>

          <!-- 首页管理 -->
          <div v-show="activeTab === 'homepage'" class="tab-panel">
            <HomepageManager />
          </div>

          <!-- 数据分析 -->
          <div v-show="activeTab === 'analytics'" class="tab-panel">
            <AnalyticsManager />
          </div>
        </div>
      </div>
    </v-main>

    <!-- 系统信息对话框 -->
    <v-dialog v-model="showSystemDialog" max-width="600">
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon start>mdi-information</v-icon>
          系统信息
        </v-card-title>
        <v-card-text>
          <div class="system-info">
            <div class="info-item">
              <strong>系统版本:</strong> NO TRACE EXPLORER v2.5.1
            </div>
            <div class="info-item">
              <strong>构建时间:</strong> {{ buildTime }}
            </div>
            <div class="info-item">
              <strong>技术栈:</strong> Nuxt 3.17.6 + Vuetify 3.4.0 + TypeScript
            </div>
            <div class="info-item">
              <strong>存储使用:</strong> {{ storageUsage }}
            </div>
            <div class="info-item">
              <strong>浏览器:</strong> {{ userAgent }}
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showSystemDialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 消息提示 -->
    <v-snackbar
      v-model="showMessage"
      :color="messageType"
      :timeout="3000"
      location="top"
    >
      {{ message }}
      <template v-slot:actions>
        <v-btn variant="text" @click="showMessage = false">关闭</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import ArticleManager from '~/components/ArticleManager.vue'
import ImageManager from '~/components/ImageManager.vue'
import HomepageManager from '~/components/HomepageManager.vue'
import AnalyticsManager from '~/components/AnalyticsManager.vue'

// 路由
const router = useRouter()

// 响应式状态
const drawer = ref(true)
const activeTab = ref('articles')
const showSystemDialog = ref(false)
const showMessage = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error' | 'warning'>('success')

// 导航项目
const navigationItems = [
  {
    value: 'articles',
    title: '文章管理',
    subtitle: '管理企业新闻和文章',
    icon: 'mdi-newspaper',
    badge: null
  },
  {
    value: 'images',
    title: '图片管理',
    subtitle: '上传和管理图片素材',
    icon: 'mdi-image-multiple',
    badge: null
  },
  {
    value: 'homepage',
    title: '首页管理',
    subtitle: '管理首页内容和背景',
    icon: 'mdi-home-variant',
    badge: null
  },
  {
    value: 'analytics',
    title: '数据分析',
    subtitle: '查看网站统计数据',
    icon: 'mdi-chart-line',
    badge: null
  }
]

// 计算属性
const currentTabIcon = computed(() => {
  const item = navigationItems.find(nav => nav.value === activeTab.value)
  return item?.icon || 'mdi-cog'
})

const currentTabTitle = computed(() => {
  const item = navigationItems.find(nav => nav.value === activeTab.value)
  return item?.title || '管理中心'
})

const currentTabSubtitle = computed(() => {
  const item = navigationItems.find(nav => nav.value === activeTab.value)
  return item?.subtitle || ''
})

const buildTime = computed(() => {
  return new Date().toLocaleString('zh-CN')
})

const storageUsage = computed(() => {
  try {
    let totalSize = 0
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        totalSize += localStorage.getItem(key)?.length || 0
      }
    }
    return `${(totalSize / 1024).toFixed(2)} KB`
  } catch (error) {
    return '无法获取'
  }
})

const userAgent = computed(() => {
  return navigator.userAgent.split(' ').slice(0, 3).join(' ')
})

// 方法
const goHome = () => {
  router.push('/')
}

const refreshData = () => {
  // 刷新当前页面数据
  window.location.reload()
}

const backupData = () => {
  try {
    const data = {
      articles: localStorage.getItem('notrace_articles'),
      images: localStorage.getItem('notrace_images'),
      homepage: localStorage.getItem('notrace_homepage'),
      analytics: localStorage.getItem('notrace_analytics'),
      timestamp: new Date().toISOString()
    }
    
    const dataStr = JSON.stringify(data, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = `notrace-backup-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    
    URL.revokeObjectURL(url)
    
    showMessage.value = true
    message.value = '数据备份已下载'
    messageType.value = 'success'
  } catch (error) {
    showMessage.value = true
    message.value = '备份失败'
    messageType.value = 'error'
  }
}

const clearCache = () => {
  try {
    // 清理缓存但保留重要数据
    const keysToKeep = [
      'notrace_articles',
      'notrace_images', 
      'notrace_homepage',
      'notrace_image_categories'
    ]
    
    const keysToRemove = []
    for (let key in localStorage) {
      if (key.startsWith('notrace_') && !keysToKeep.includes(key)) {
        keysToRemove.push(key)
      }
    }
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key)
    })
    
    showMessage.value = true
    message.value = `已清理 ${keysToRemove.length} 个缓存项`
    messageType.value = 'success'
  } catch (error) {
    showMessage.value = true
    message.value = '清理缓存失败'
    messageType.value = 'error'
  }
}

const showSystemInfo = () => {
  showSystemDialog.value = true
}

// 生命周期
onMounted(() => {
  // 检查URL参数以确定初始tab
  const urlParams = new URLSearchParams(window.location.search)
  const tab = urlParams.get('tab')
  if (tab && navigationItems.some(item => item.value === tab)) {
    activeTab.value = tab
  }
})

// 监听tab变化，更新URL
watch(activeTab, (newTab) => {
  const url = new URL(window.location.href)
  url.searchParams.set('tab', newTab)
  window.history.replaceState({}, '', url.toString())
})

// SEO配置
useHead({
  title: 'NO TRACE EXPLORER 管理中心',
  meta: [
    { name: 'description', content: 'NO TRACE EXPLORER 企业网站管理中心' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background: #F5F5F5;
}

.toolbar-title {
  font-weight: 500;
  font-size: 1.1rem;
}

.drawer-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-details {
  flex: 1;
}

.user-name {
  font-weight: 500;
  color: #1A1A1A;
}

.user-role {
  font-size: 0.875rem;
  color: #666666;
}

.nav-item {
  margin: 0.25rem 0;
  border-radius: 8px;
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;
}

.tab-headers {
  background: white;
  border-bottom: 1px solid #E0E0E0;
  position: sticky;
  top: 64px;
  z-index: 5;
}

.tab-header-content {
  padding: 2rem 2rem 1.5rem;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-subtitle {
  color: #666666;
  font-size: 1rem;
  margin: 0;
}

.tab-content {
  background: white;
  min-height: calc(100vh - 120px);
}

.tab-panel {
  padding: 2rem;
}

.system-info {
  padding: 1rem 0;
}

.info-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid #F0F0F0;
}

.info-item:last-child {
  border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .tab-header-content {
    padding: 1.5rem 1rem 1rem;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .tab-panel {
    padding: 1rem;
  }
}

/* 深色主题支持 */
.v-theme--dark .admin-dashboard {
  background: #121212;
}

.v-theme--dark .tab-headers {
  background: #1E1E1E;
  border-bottom-color: #333333;
}

.v-theme--dark .tab-content {
  background: #1E1E1E;
}

.v-theme--dark .page-title {
  color: #FFFFFF;
}

.v-theme--dark .page-subtitle {
  color: #CCCCCC;
}

.v-theme--dark .info-item {
  border-bottom-color: #333333;
}
</style>