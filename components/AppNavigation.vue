<template>
  <v-app-bar
    app
    :elevation="scrolled ? 4 : 0"
    :color="scrolled ? 'white' : 'transparent'"
    class="app-navigation"
    :class="{ 'nav-scrolled': scrolled }"
    height="80"
    scroll-behavior="fade-image"
  >
    <v-container class="d-flex align-center">
      <!-- 品牌Logo -->
      <nuxt-link to="/" class="brand-link text-decoration-none">
        <div class="brand-container">
          <h1 class="brand-title d-none d-md-block">
            NO TRACE EXPLORER
            <span class="brand-subtitle">| 無迹探索株式会社</span>
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
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          variant="text"
          class="nav-btn mx-1"
          :class="{ 'nav-btn-active': $route.path === item.to }"
        >
          <v-icon v-if="item.icon" :icon="item.icon" start size="small" />
          {{ item.title }}
        </v-btn>
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
        v-for="item in navigationItems"
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
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types'

// 响应式数据
const drawer = ref(false)
const scrolled = ref(false)

// 导航项目配置
const navigationItems: NavItem[] = [
  {
    title: 'コーヒー',
    to: '/coffee',
    icon: 'mdi-coffee'
  },
  {
    title: 'エキシビション',
    to: '/exhibition',
    icon: 'mdi-calendar-star'
  },
  {
    title: 'ラボ',
    to: '/lab',
    icon: 'mdi-flask'
  },
  {
    title: 'クラブ',
    to: '/club',
    icon: 'mdi-account-group'
  },
  {
    title: '企業情報',
    to: '/about',
    icon: 'mdi-information'
  },
  {
    title: 'お問い合わせ',
    to: '/contact',
    icon: 'mdi-email'
  }
]

// 滚动检测
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// 生命周期
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-navigation {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.nav-scrolled {
  box-shadow: 0 2px 16px rgba(102, 126, 234, 0.1);
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
}

.brand-link {
  text-decoration: none;
}

.brand-container {
  display: flex;
  align-items: center;
}

.brand-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 300;
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-secondary)) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.02em;
  line-height: 1.2;
  margin: 0;
}

.brand-subtitle {
  font-size: 0.7em;
  opacity: 0.8;
  font-weight: 400;
  margin-left: 0.5rem;
}

.brand-title-mobile {
  font-size: 1.8rem;
  font-weight: 600;
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-secondary)) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

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

/* 响应式设计 */
@media (max-width: 1279px) {
  .brand-title {
    font-size: 1.5rem;
  }
  
  .brand-subtitle {
    font-size: 0.6em;
  }
}

@media (max-width: 959px) {
  .app-navigation {
    height: 64px;
  }
  
  .brand-title-mobile {
    font-size: 1.5rem;
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
</style>