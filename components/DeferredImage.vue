<template>
  <div ref="imageContainer" class="lazy-image-container">
    <transition name="fade" mode="out-in">
      <div v-if="!imageLoaded && !imageError" class="image-placeholder">
        <v-skeleton-loader
          type="image"
          :height="height"
          :width="width"
          class="mx-auto"
        />
      </div>
      <div v-else-if="imageError" class="image-error">
        <v-icon icon="mdi-image-broken" size="large" color="grey" />
        <p class="text-caption mt-2">画像を読み込めませんでした</p>
      </div>
      <img
        v-else
        :src="currentSrc"
        :alt="alt"
        :style="{ width: typeof width === 'string' ? width : `${width}px`, height: typeof height === 'string' ? height : `${height}px` }"
        class="lazy-image"
        @load="onImageLoad"
        @error="onImageError"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  // 图片源地址
  src: string
  // 替代文本
  alt: string
  // 宽度
  width?: string | number
  // 高度  
  height?: string | number
  // 占位符图片
  placeholder?: string
  // 进入视窗的边距
  rootMargin?: string
  // 进入视窗的阈值
  threshold?: number
  // 图片加载失败时的回调
  onError?: () => void
  // 图片加载成功时的回调
  onLoad?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Image',
  width: '100%',
  height: 'auto',
  placeholder: '',
  rootMargin: '50px',
  threshold: 0.1
})

const emit = defineEmits<{
  load: []
  error: []
}>()

// 响应式状态
const imageContainer = ref<HTMLElement>()
const isInView = ref(false)
const imageLoaded = ref(false)
const imageError = ref(false)
const currentSrc = ref('')

// 当图片进入视窗时开始加载
watch(isInView, (inView) => {
  if (inView && !imageLoaded.value && !imageError.value) {
    currentSrc.value = props.src
  }
})

// 图片加载成功处理
const onImageLoad = () => {
  imageLoaded.value = true
  emit('load')
  props.onLoad?.()
}

// 图片加载失败处理
const onImageError = () => {
  imageError.value = true
  emit('error')
  props.onError?.()
}

// 初始化Intersection Observer
onMounted(() => {
  if (!imageContainer.value) return

  // 如果有占位符，先显示占位符
  if (props.placeholder) {
    currentSrc.value = props.placeholder
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInView.value = true
          observer.disconnect() // 进入视窗后断开观察
        }
      })
    },
    {
      rootMargin: props.rootMargin,
      threshold: props.threshold
    }
  )

  observer.observe(imageContainer.value)

  onUnmounted(() => {
    observer.disconnect()
  })
})

// 服务端渲染支持
if (process.server) {
  isInView.value = true
  currentSrc.value = props.src
}
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.lazy-image {
  display: block;
  max-width: 100%;
  height: auto;
  transition: opacity 0.3s ease;
}

.image-placeholder,
.image-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 4px;
}

.image-error {
  color: #999;
}

/* 淡入淡出过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 骨架屏动画 */
.image-placeholder :deep(.v-skeleton-loader) {
  border-radius: 4px;
}
</style>