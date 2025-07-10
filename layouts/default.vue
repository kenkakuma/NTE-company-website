<template>
  <v-app class="app-container">
    <!-- 现代化导航栏 -->
    <v-app-bar
      :elevation="scrolled ? 4 : 0"
      :color="scrolled ? 'white' : 'transparent'"
      :theme="scrolled ? 'light' : 'dark'"
      app
      height="80"
      class="app-navigation"
      :class="{ 'nav-scrolled': scrolled }"
    >
      <v-container class="d-flex align-center">
        <!-- 品牌Logo -->
        <nuxt-link to="/" class="brand-link text-decoration-none">
          <div class="brand-container">
            <h1 class="brand-title d-none d-md-block">
              NO TRACE EXPLORER | 無迹探索株式会社
            </h1>
            <h1 class="brand-title-mobile d-block d-md-none">
              NTE
            </h1>
          </div>
        </nuxt-link>

        <v-spacer />

        <!-- 桌面端导航菜单 -->
        <div class="d-none d-lg-flex navigation-menu">
          <v-btn
            v-for="(item, index) in navItems"
            :key="item.to"
            :to="item.to"
            variant="text"
            class="nav-btn mx-1"
            :class="{ 
              'nav-btn-active': $route.path === item.to,
              'has-divider': index < navItems.length - 1
            }"
          >
            <v-icon v-if="item.icon" :icon="item.icon" start size="small" />
            {{ item.title }}
          </v-btn>
          
          <!-- Admin Settings Menu -->
          <v-menu>
            <template #activator="{ props }">
              <v-btn
                icon="mdi-cog"
                variant="text"
                size="small"
                class="ml-2 admin-btn"
                title="管理システム"
                v-bind="props"
              />
            </template>
            <v-list>
              <v-list-item to="/admin" title="管理中心">
                <template #prepend>
                  <v-icon icon="mdi-cog" />
                </template>
                <v-list-item-title>管理中心</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <!-- 移动端菜单按钮 -->
        <v-app-bar-nav-icon
          class="d-lg-none"
          @click="drawer = !drawer"
        />
      </v-container>
    </v-app-bar>

    <!-- 移动端抽屉导航 -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="300"
      class="mobile-nav-drawer"
    >
      <v-list nav class="py-4">
        <v-list-item
          prepend-icon="mdi-close"
          @click="drawer = false"
          class="mb-4"
        >
          <v-list-item-title class="text-h6">メニュー</v-list-item-title>
        </v-list-item>

        <v-divider class="mb-4" />

        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          @click="drawer = false"
          class="mobile-nav-item"
        >
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        
        <v-divider class="my-2" />
        
        <!-- Admin Link -->
        <v-list-item
          to="/admin"
          @click="drawer = false"
          class="mobile-nav-item"
        >
          <template #prepend>
            <v-icon icon="mdi-cog" />
          </template>
          <v-list-item-title>管理中心</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <slot />
    </v-main>

    <!-- 现代化页脚 -->
    <v-footer class="app-footer">
      <v-container>
        <v-row>
          <!-- Company Info -->
          <v-col cols="12" md="4" class="mb-4">
            <h3 class="text-h6 text-white mb-3">
              NO TRACE EXPLORER
            </h3>
            <p class="text-body-2 text-grey-lighten-1 mb-3">
              無迹探索株式会社
            </p>
            <p class="text-body-2 text-grey-lighten-2">
              革新的なソリューションで新たなビジネス価値を創造する企業です。
            </p>
          </v-col>

          <!-- Quick Links -->
          <v-col cols="12" md="4" class="mb-4">
            <h4 class="text-subtitle-1 text-white mb-3">
              クイックリンク
            </h4>
            <v-list class="bg-transparent" density="compact">
              <v-list-item
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                class="text-grey-lighten-2 px-0"
              >
                <v-list-item-title class="text-body-2">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>

          <!-- Contact Info -->
          <v-col cols="12" md="4" class="mb-4">
            <h4 class="text-subtitle-1 text-white mb-3">
              お問い合わせ
            </h4>
            <div class="text-body-2 text-grey-lighten-2">
              <div class="d-flex align-center mb-2">
                <v-icon icon="mdi-email" size="small" class="mr-2" />
                info@no-trace.jp
              </div>
              <div class="d-flex align-center mb-2">
                <v-icon icon="mdi-web" size="small" class="mr-2" />
                https://no-trace.jp
              </div>
              <div class="d-flex align-center">
                <v-icon icon="mdi-map-marker" size="small" class="mr-2" />
                東京都渋谷区（設立準備中）
              </div>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-4" color="grey-darken-2" />

        <!-- Copyright -->
        <v-row>
          <v-col cols="12" class="text-center">
            <p class="text-body-2 text-grey-lighten-1 mb-0">
              © {{ currentYear }} NO TRACE EXPLORER | 無迹探索株式会社. All rights reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <!-- 返回顶部按钮 -->
    <v-btn
      v-show="showBackToTop"
      icon="mdi-chevron-up"
      color="primary"
      size="large"
      class="back-to-top-btn"
      style="position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;"
      @click="scrollToTop"
    />

    <!-- PWA监控器 - 智能化PWA状态管理 -->
    <PWAMonitor />

    <!-- Analytics同意横幅 -->
    <v-snackbar
      v-model="showConsentBanner"
      :timeout="-1"
      location="bottom"
      color="grey-darken-4"
      class="consent-banner"
      multi-line
    >
      <div class="d-flex align-center">
        <v-icon icon="mdi-chart-line" class="mr-3" color="primary" />
        <div class="flex-grow-1">
          <div class="font-weight-medium text-white mb-1">
            サイト改善のためのデータ収集について
          </div>
          <div class="text-caption text-grey-lighten-2">
            当サイトではサービス向上のためGoogle Analyticsを使用しています。
            匿名化されたアクセス情報の収集に同意いただけますか？
          </div>
        </div>
      </div>
      
      <template #actions>
        <div class="d-flex gap-2 mt-2">
          <v-btn
            size="small"
            variant="outlined"
            color="grey-lighten-2"
            @click="denyAnalyticsConsent"
          >
            拒否
          </v-btn>
          <v-btn
            size="small"
            color="primary"
            @click="grantAnalyticsConsent"
          >
            同意
          </v-btn>
        </div>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types'

// Analytics集成
const {
  analyticsState,
  grantConsent,
  denyConsent,
  trackPageView
} = useAnalytics()

// 响应式数据
const drawer = ref(false)
const scrolled = ref(false)
const showBackToTop = ref(false)
const showConsentBanner = ref(false)

// 导航项目
const navItems: NavItem[] = [
  { title: 'コーヒー', to: '/coffee', icon: 'mdi-coffee' },
  { title: 'エキシビション', to: '/exhibition', icon: 'mdi-calendar-star' },
  { title: 'ラボ', to: '/lab', icon: 'mdi-flask' },
  { title: 'クラブ', to: '/club', icon: 'mdi-account-group' },
  { title: '企業情報', to: '/about', icon: 'mdi-information' },
  { title: 'お問い合わせ', to: '/contact', icon: 'mdi-email' }
]

// 当前年份
const currentYear = new Date().getFullYear()

// 返回顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Analytics同意处理
const grantAnalyticsConsent = () => {
  grantConsent()
  showConsentBanner.value = false
  
  // 立即跟踪当前页面
  nextTick(() => {
    trackPageView({})
  })
}

const denyAnalyticsConsent = () => {
  denyConsent()
  showConsentBanner.value = false
}

// 滚动监听和Analytics初始化
onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
    showBackToTop.value = window.scrollY > 300
  }
  
  window.addEventListener('scroll', handleScroll)
  
  // 检查是否需要显示同意横幅
  setTimeout(() => {
    if (!analyticsState.isEnabled && analyticsState.consentSettings.analytics_storage === 'denied') {
      const hasShownBanner = localStorage.getItem('analytics_banner_shown')
      if (!hasShownBanner) {
        showConsentBanner.value = true
        localStorage.setItem('analytics_banner_shown', 'true')
      }
    }
  }, 2000) // 2秒后显示，避免打扰用户
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// 路由变化时跟踪页面视图
const router = useRouter()
router.afterEach((to) => {
  if (analyticsState.isEnabled) {
    nextTick(() => {
      trackPageView({
        page_path: to.path,
        page_title: document.title
      })
    })
  }
})
</script>

<style scoped>
/* 全局应用容器样式 */
.app-container {
  background-color: #FAF9F7 !important;
}

/* 主内容区域背景色 */
.app-container :deep(.v-main) {
  background-color: #FAF9F7 !important;
}

/* 导航栏样式 */
.app-navigation {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.nav-scrolled {
  box-shadow: 0 2px 16px rgba(102, 126, 234, 0.1);
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
}

/* 品牌样式 */
.brand-link {
  text-decoration: none;
}

.brand-container {
  display: flex;
  align-items: center;
}

.brand-title {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 600;
  color: #1A1A1A;
  letter-spacing: 0.02em;
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.brand-title-mobile {
  font-size: 1.0rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 导航菜单样式 */
.navigation-menu {
  gap: 0.5rem;
  align-items: center;
}

.nav-btn {
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: none;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0 16px;
  height: 40px;
}

/* 菜单项分割线 */
.nav-btn.has-divider::before {
  content: '';
  position: absolute;
  right: -0.25rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  z-index: 1;
}

/* 浅色主题下的分割线 */
.v-app-bar.v-theme--light .nav-btn.has-divider::before {
  background: rgba(0, 0, 0, 0.2);
}

/* 动态下划线特效 */
.nav-btn::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
  border-radius: 1px;
}

.nav-btn:hover::after,
.nav-btn-active::after {
  width: 80%;
}

.nav-btn:hover {
  background: rgba(102, 126, 234, 0.08);
  transform: translateY(-1px);
}

.nav-btn-active {
  color: rgb(var(--v-theme-primary));
  background: rgba(102, 126, 234, 0.1);
}

/* 移动端抽屉样式 */
.mobile-nav-drawer :deep(.v-navigation-drawer__content) {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.05) 0%,
    rgba(118, 75, 162, 0.05) 100%
  );
}

.mobile-nav-item {
  margin: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.mobile-nav-item:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateX(4px);
}

/* 页脚样式 */
.app-footer {
  background: linear-gradient(
    135deg,
    rgba(38, 38, 38, 1) 0%,
    rgba(58, 58, 58, 1) 100%
  );
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
}

/* 页脚响应式设计 */
@media (max-width: 991.98px) {
  .app-footer {
    padding: 2.5rem 0 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .app-footer {
    padding: 2rem 0 1rem;
  }
  
  .app-footer .v-col {
    margin-bottom: 1.5rem;
  }
}

/* 响应式设计 - 统一断点标准 */
/* 大桌面端 (≥1200px) */
@media (min-width: 1200px) {
  .brand-title {
    font-size: 1.1rem;
  }
}

/* 桌面端 (992px - 1199px) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .brand-title {
    font-size: 1.0rem;
  }
}

/* 平板端 (768px - 991px) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .app-navigation {
    height: 72px;
  }
  
  .brand-title {
    font-size: 0.95rem;
  }
}

/* 移动端 (<768px) */
@media (max-width: 767.98px) {
  .app-navigation {
    height: 64px;
  }
  
  .brand-title-mobile {
    font-size: 0.9rem;
  }
}

/* 深色模式适配 */
.v-theme--dark .nav-scrolled {
  background: rgba(33, 33, 33, 0.95) !important;
  border-bottom-color: rgba(102, 126, 234, 0.2);
}

.v-theme--dark .nav-btn:hover {
  background: rgba(102, 126, 234, 0.15);
}

.v-theme--dark .nav-btn-active {
  background: rgba(102, 126, 234, 0.2);
}

/* 返回顶部按钮样式 */
.back-to-top-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

.back-to-top-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

/* Analytics同意横幅样式 */
.consent-banner :deep(.v-snackbar__wrapper) {
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.consent-banner :deep(.v-snackbar__content) {
  padding: 1.5rem;
}

@media (max-width: 768px) {
  .consent-banner :deep(.v-snackbar__wrapper) {
    max-width: 95%;
    margin: 0 2.5%;
  }
  
  .consent-banner :deep(.v-snackbar__content) {
    padding: 1rem;
  }
}
</style>