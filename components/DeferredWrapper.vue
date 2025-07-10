<template>
  <div ref="containerRef" class="lazy-wrapper">
    <template v-if="isVisible">
      <slot />
    </template>
    <template v-else>
      <!-- 加载占位符 -->
      <div class="lazy-placeholder">
        <v-skeleton-loader
          :type="skeletonType"
          :height="height"
          class="mx-auto"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  // 骨架屏类型
  skeletonType: string
  // 占位符高度
  height: string | number
  // 进入视窗的边距
  rootMargin?: string
  // 进入视窗的阈值
  threshold?: number
  // 是否一次性加载（默认true）
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  skeletonType: 'card',
  height: 200,
  rootMargin: '50px',
  threshold: 0.1,
  once: true
})

// 响应式引用
const containerRef = ref<HTMLElement>()
const isVisible = ref(false)

// 使用Intersection Observer进行懒加载
onMounted(() => {
  if (!containerRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          
          // 如果是一次性加载，观察完成后断开连接
          if (props.once) {
            observer.disconnect()
          }
        } else if (!props.once) {
          // 非一次性加载时，组件离开视窗后可以卸载
          isVisible.value = false
        }
      })
    },
    {
      rootMargin: props.rootMargin,
      threshold: props.threshold
    }
  )

  observer.observe(containerRef.value)

  // 组件卸载时清理观察器
  onUnmounted(() => {
    observer.disconnect()
  })
})

// 支持服务端渲染 - 在服务端直接显示内容
if (process.server) {
  isVisible.value = true
}
</script>

<style scoped>
.lazy-wrapper {
  min-height: 100px;
}

.lazy-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: inherit;
}

/* 骨架屏加载动画 */
.lazy-placeholder :deep(.v-skeleton-loader) {
  background: linear-gradient(
    90deg, 
    transparent 0%, 
    rgba(102, 126, 234, 0.1) 50%, 
    transparent 100%
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>