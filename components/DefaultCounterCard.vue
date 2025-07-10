<template>
  <div class="counter-card h-100">
    <div class="counter-content text-center py-3">
      <!-- 数字显示区域 -->
      <div class="counter-number-display mb-3">
        <h2 
          class="counter-number font-weight-bolder mb-0" 
          :class="`text-${color}`"
        >
          <span ref="numberElement">{{ displayNumber }}</span>{{ suffix }}
        </h2>
      </div>

      <!-- 标题 -->
      <h5 class="counter-title font-weight-bolder mb-2">
        {{ title }}
      </h5>

      <!-- 描述 -->
      <p class="counter-description text-sm opacity-8 mb-0">
        {{ description }}
      </p>
    </div>

    <!-- 分割线 -->
    <div 
      v-if="divider === 'vertical'" 
      class="divider-vertical"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  color?: string
  title: string
  description: string
  count: number
  suffix?: string
  duration?: number
  divider?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'dark',
  suffix: '',
  duration: 2000,
  divider: ''
})

// 响应式数据
const numberElement = ref<HTMLElement>()
const displayNumber = ref(0)
const isAnimated = ref(false)

// 数字动画函数
const animateNumber = () => {
  if (isAnimated.value) return
  
  isAnimated.value = true
  const start = 0
  const end = props.count
  const duration = props.duration
  const increment = end / (duration / 16)
  let current = start

  const timer = setInterval(() => {
    current += increment
    if (current >= end) {
      current = end
      clearInterval(timer)
    }
    displayNumber.value = Math.floor(current)
  }, 16)
}

// 观察器设置
const setupIntersectionObserver = () => {
  if (!numberElement.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimated.value) {
          animateNumber()
        }
      })
    },
    { threshold: 0.5 }
  )

  observer.observe(numberElement.value)
}

// 生命周期
onMounted(() => {
  nextTick(() => {
    setupIntersectionObserver()
  })
})
</script>

<style scoped>
.counter-card {
  position: relative;
  background: transparent;
  border: none;
  padding: 1rem 1.5rem;
}

.counter-content {
  position: relative;
  z-index: 2;
}

.counter-number {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.counter-title {
  font-size: 1.1rem;
  color: #344767;
  font-weight: 600;
  line-height: 1.4;
}

.counter-description {
  font-size: 0.875rem;
  color: #67748e;
  line-height: 1.6;
  max-width: 280px;
  margin: 0 auto;
}

/* 分割线样式 */
.divider-vertical {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    #e9ecef 20%,
    #dee2e6 50%,
    #e9ecef 80%,
    transparent 100%
  );
}

/* Color classes matching Material Kit */
.text-info {
  color: #17a2b8 !important;
}

.text-primary {
  color: #e91e63 !important;
}

.text-dark {
  color: #344767 !important;
}

.text-success {
  color: #4caf50 !important;
}

.text-warning {
  color: #fb8c00 !important;
}

/* 工具类 */
.font-weight-bolder {
  font-weight: 700 !important;
}

.font-weight-bold {
  font-weight: 600 !important;
}

.text-center {
  text-align: center;
}

.text-sm {
  font-size: 0.875rem;
}

.opacity-8 {
  opacity: 0.8;
}

.mb-0 {
  margin-bottom: 0;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 1rem;
}

.py-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.h-100 {
  height: 100%;
}

/* 响应式设计 */
@media (max-width: 767px) {
  .counter-number {
    font-size: 2.5rem;
  }
  
  .counter-title {
    font-size: 1rem;
  }
  
  .counter-description {
    font-size: 0.8rem;
  }
  
  .divider-vertical {
    display: none;
  }
}

/* 动画效果 */
.counter-number-display {
  transition: all 0.3s ease;
}

.counter-card:hover .counter-number-display {
  transform: scale(1.05);
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .counter-title {
    color: #ffffff;
  }
  
  .counter-description {
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>