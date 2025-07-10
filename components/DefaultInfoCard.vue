<template>
  <div class="col-md-6 info-card-wrapper">
    <div class="info-card d-flex flex-start">
      <!-- 图标区域 -->
      <div class="icon-wrapper">
        <div class="icon-container">
          <i class="material-icons">{{ icon }}</i>
        </div>
      </div>

      <!-- 内容区域 -->
      <div class="info-content ms-3">
        <h5 class="info-title">{{ title }}</h5>
        <p class="info-description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<style scoped>
.info-card-wrapper {
  margin-bottom: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.info-card {
  padding: 1.5rem 0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-2px);
}

.icon-wrapper {
  flex-shrink: 0;
}

.icon-container {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.icon-container .material-icons {
  color: #667eea;
  font-size: 24px;
  transition: all 0.3s ease;
}

.info-card:hover .icon-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scale(1.1);
}

.info-card:hover .icon-container .material-icons {
  color: white;
}

.info-content {
  flex: 1;
  margin-left: 1rem;
}

.info-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #344767;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.info-card:hover .info-title {
  color: #667eea;
}

.info-description {
  font-size: 0.9rem;
  color: #67748e;
  line-height: 1.6;
  margin-bottom: 0;
}

/* Bootstrap工具类 */
.d-flex {
  display: flex;
}

.flex-start {
  align-items: flex-start;
}

.ms-3 {
  margin-left: 1rem;
}

.col-md-6 {
  flex: 0 0 auto;
  width: 100%;
}

@media (min-width: 768px) {
  .col-md-6 {
    width: 50%;
  }
}

/* 响应式设计 */
@media (max-width: 767px) {
  .info-card-wrapper {
    margin-bottom: 1.5rem;
  }
  
  .info-card {
    padding: 1rem 0;
  }
  
  .icon-container {
    width: 40px;
    height: 40px;
  }
  
  .icon-container .material-icons {
    font-size: 20px;
  }
  
  .info-content {
    margin-left: 0.75rem;
  }
  
  .info-title {
    font-size: 1rem;
  }
  
  .info-description {
    font-size: 0.85rem;
  }
}

/* 深色模式适配 */
@media (prefers-color-scheme: dark) {
  .info-title {
    color: #ffffff;
  }
  
  .info-description {
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>