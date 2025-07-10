<template>
  <section class="py-5 bg-gray-100">
    <div class="container">
      <div class="row align-items-center">
        <!-- 标题区域 -->
        <div class="col-12 text-center mb-5">
          <div class="divider-dot top"></div>
          <h2 class="text-h3 mb-2 text-gradient">総合サービスリソース</h2>
          <p class="text-h6 text-on-surface-variant mb-8">COMPREHENSIVE SERVICE RESOURCES</p>
          <div class="mx-auto" style="max-width: 600px;">
            <p class="text-body-1 text-on-surface-variant mb-2">お客様のニーズに応える幅広いサービスを提供し、</p>
            <p class="text-body-1 text-on-surface-variant">最適なソリューションで価値創造をサポートいたします。</p>
          </div>
        </div>
      </div>

      <div class="row equal-height-row">
        <!-- 左侧服务列表 60% -->
        <div class="col-lg-7 col-md-12 service-list-container">
          <div class="service-list">
            <div 
              v-for="(service, index) in services" 
              :key="service.id"
              class="service-card mb-3"
              :class="{ 'service-card--active': hoveredCard === index }"
              @mouseenter="hoverService(index)"
              @mouseleave="leaveService"
              @click="selectService(index)"
            >
              <div class="card-content" style="padding: 1.2rem 1.5rem;">
                <div class="d-flex align-items-center">
                  <!-- 服务图标 -->
                  <div class="service-icon-wrapper me-3">
                    <i class="material-icons">{{ service.icon }}</i>
                  </div>
                  
                  <!-- 服务信息 -->
                  <div class="service-info flex-grow-1">
                    <h4 class="service-title mb-1">{{ service.title }}</h4>
                    <p class="service-category mb-2 text-muted">{{ service.category }}</p>
                    <p class="service-description mb-0">{{ service.description }}</p>
                  </div>
                  
                  <!-- 右侧箭头 -->
                  <div class="service-arrow">
                    <i class="material-icons">chevron_right</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧图片展示区域 40% -->
        <div class="col-lg-5 col-md-12 image-display-container">
          <div class="service-image-card sticky-top">
            <div class="image-container">
              <!-- 图片显示 -->
              <transition name="fade" mode="out-in">
                <img
                  v-if="currentService && currentService.image"
                  :key="currentService.id"
                  :src="currentService.image"
                  :alt="currentService.title"
                  class="service-image"
                  loading="lazy"
                />
                <div 
                  v-else
                  class="image-placeholder d-flex flex-column align-items-center justify-content-center"
                >
                  <i class="material-icons mb-3" style="font-size: 4rem; opacity: 0.3;">camera_alt</i>
                  <p class="text-muted text-center">
                    サービスにマウスオーバーして<br>
                    関連画像をご覧ください
                  </p>
                </div>
              </transition>
              
              <!-- 图片覆盖信息 -->
              <div 
                v-if="currentService"
                class="image-overlay"
              >
                <div class="overlay-card">
                  <span class="service-badge">{{ currentService.category }}</span>
                  <h5 class="overlay-title mb-1">{{ currentService.title }}</h5>
                  <p class="overlay-description mb-0">{{ currentService.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 服务数据
const services = [
  {
    id: 'coffee',
    title: '珈琲 | COFFEE',
    category: '飲料・文化事業',
    description: '高品質コーヒー商品の企画開発・貿易・ブランド展開を通じて、コーヒー文化の探求と普及に取り組んでいます。',
    icon: 'local_cafe',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop&auto=format'
  },
  {
    id: 'equipment',
    title: '器具 | EQUIPMENT',
    category: '製品開発事業',
    description: '専門器具の設計・開発・販売から技術サポートまで、一貫したサービスを提供しています。',
    icon: 'build',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&auto=format'
  },
  {
    id: 'exhibition',
    title: '展覧 | EXHIBITION',
    category: '文化・芸術事業',
    description: '文化・技術・芸術分野の展示企画からイベント運営まで、革新的なアプローチで印象的な体験を創造します。',
    icon: 'museum',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop&auto=format'
  },
  {
    id: 'lab',
    title: 'ラボ | LAB',
    category: '技術研究・イノベーション',
    description: '最先端技術とイノベーション開発・スポーツ関連研究を通じて、未来の価値創造に挑戦しています。',
    icon: 'science',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&auto=format'
  },
  {
    id: 'club',
    title: 'クラブ | CLUB',
    category: '会員制コミュニティ',
    description: '会員制コミュニティ・専門家ネットワーク運営を通じて、特別な体験と深いつながりを提供します。',
    icon: 'people',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format'
  }
]

// 响应式状态
const hoveredCard = ref<number | null>(null)
const selectedCard = ref<number>(0)

// 计算属性
const currentService = computed(() => {
  const index = hoveredCard.value !== null ? hoveredCard.value : selectedCard.value
  return services[index] || null
})

// 方法
const hoverService = (index: number) => {
  hoveredCard.value = index
}

const leaveService = () => {
  hoveredCard.value = null
}

const selectService = (index: number) => {
  selectedCard.value = index
}

// 初始化
onMounted(() => {
  selectedCard.value = 0
})
</script>

<style scoped>
/* ===== 主容器样式 ===== */
.bg-gray-100 {
  background-color: #F0EDE8;
}

.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===== 标题样式 ===== */
.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.divider-dot {
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  animation: pulseGlow 2.5s ease-in-out infinite;
  box-shadow: 
    0 0 10px rgba(102, 126, 234, 0.6),
    0 0 20px rgba(102, 126, 234, 0.4);
}

@keyframes pulseGlow {
  0%, 100% { 
    transform: scale(1); 
    opacity: 0.8;
  }
  50% { 
    transform: scale(1.3); 
    opacity: 1;
  }
}

/* ===== 布局样式 ===== */
.equal-height-row {
  display: flex;
  align-items: stretch;
  min-height: 500px;
}

.service-list-container {
  flex: 0 0 62%;
  max-width: 62%;
  padding-right: 1.5rem;
}

.image-display-container {
  flex: 0 0 38%;
  max-width: 38%;
  padding-left: 1rem;
}

/* ===== 服务卡片样式 ===== */
.service-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.service-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 2px solid transparent;
  overflow: hidden;
  position: relative;
  margin-bottom: 0.8rem;
}

.service-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

.service-card:hover::before,
.service-card--active::before {
  transform: scaleY(1);
}

.service-card:hover,
.service-card--active {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.2);
}

.card-content {
  position: relative;
  z-index: 2;
}

/* ===== 服务信息样式 ===== */
.service-icon-wrapper {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.service-icon-wrapper .material-icons {
  color: white;
  font-size: 24px;
}

.service-card:hover .service-icon-wrapper,
.service-card--active .service-icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.service-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.3rem;
  transition: color 0.3s ease;
}

.service-card:hover .service-title,
.service-card--active .service-title {
  color: #667eea;
}

.service-category {
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.service-arrow {
  color: #667eea;
  transition: all 0.3s ease;
}

.service-card:hover .service-arrow,
.service-card--active .service-arrow {
  transform: translateX(5px);
  color: #764ba2;
}

/* ===== 图片展示区域样式 ===== */
.service-image-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 500px;
  position: relative;
}

.sticky-top {
  position: sticky;
  top: 2rem;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(0.95) saturate(1.1);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: #f8f9fa;
  color: #999;
}

/* ===== 图片覆盖信息样式 ===== */
.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 3rem 2rem 2rem;
  color: white;
}

.overlay-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
}

.service-badge {
  background: rgba(102, 126, 234, 0.9);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 0.8rem;
}

.overlay-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.overlay-description {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.5;
}

/* ===== 过渡动画 ===== */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* ===== 响应式设计 ===== */
/* 平板端 (768px - 991px) - 左右分栏 50%/50% */
@media (min-width: 768px) and (max-width: 991.98px) {
  .equal-height-row {
    gap: 1.5rem;
    min-height: 400px;
  }
  
  .service-list-container {
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 1rem;
  }
  
  .image-display-container {
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 0.5rem;
  }
  
  .service-image-card {
    height: 400px;
  }
}

/* 移动端 (<768px) - 垂直布局 */
@media (max-width: 767.98px) {
  .equal-height-row {
    flex-direction: column;
    min-height: auto;
    gap: 1.5rem;
  }
  
  .service-list-container,
  .image-display-container {
    flex: none;
    max-width: 100%;
    padding: 0;
  }
  
  .image-display-container {
    order: -1; /* 图片显示在顶部 */
  }
  
  .service-image-card {
    position: relative;
    height: 250px;
  }
  
  .sticky-top {
    position: relative;
    top: auto;
  }
}

@media (max-width: 767px) {
  .service-card {
    margin-bottom: 1rem;
  }
  
  .service-image-card {
    height: 250px;
  }
  
  .service-icon-wrapper {
    width: 40px;
    height: 40px;
  }
  
  .service-icon-wrapper .material-icons {
    font-size: 20px;
  }
  
  .service-title {
    font-size: 1rem;
  }
  
  .service-description {
    font-size: 0.85rem;
  }
  
  .overlay-card {
    padding: 1rem;
  }
}

/* ===== 工具类 ===== */
.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow-1 {
  flex-grow: 1;
}

.text-center {
  text-align: center;
}

.text-muted {
  color: #999 !important;
}

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-5 { margin-bottom: 3rem; }
.mb-8 { margin-bottom: 4rem; }

.me-3 { margin-right: 1rem; }

.p-4 { padding: 1.5rem; }

.text-h3 {
  font-size: 2rem;
  font-weight: 600;
}

.text-h6 {
  font-size: 1.25rem;
  font-weight: 500;
}

.text-body-1 {
  font-size: 1rem;
  line-height: 1.6;
}

.text-on-surface-variant {
  color: #666;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>