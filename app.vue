<template>
  <div id="app">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// 应用级配置
useSeoMeta({
  titleTemplate: '%s | NO TRACE EXPLORER',
  ogSiteName: 'NO TRACE EXPLORER'
})
</script>

<style>
/* 全局样式 */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', 'Noto Sans JP', sans-serif;
}

/* Vuetify主题样式覆盖 */
.v-application {
  font-family: 'Roboto', 'Noto Sans JP', sans-serif !important;
}

/* 保持现有的特殊效果 */
.glow-title {
  font-size: 2.0rem;
  font-weight: 600;
  color: #344767;
  letter-spacing: -0.5px;
  text-shadow: 
    0 0 5px rgba(128, 128, 128, 0.15),
    0 0 10px rgba(128, 128, 128, 0.1),
    0 0 15px rgba(128, 128, 128, 0.05);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
}

/* 渐变样式 */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .glow-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .glow-title {
    font-size: 1.2rem;
  }
}
</style>