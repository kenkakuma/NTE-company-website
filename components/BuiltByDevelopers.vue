<template>
  <section class="py-5 bg-gray-100">
    <div class="container">
      <!-- 标题区域 -->
      <div class="row">
        <div class="col-lg-8 mx-auto text-center mb-5">
          <div class="divider-dot"></div>
          <h2 class="text-gradient mb-2">革新的技術パートナーシップ</h2>
          <p class="text-h6 text-muted mb-4">INNOVATIVE TECHNOLOGY PARTNERSHIP</p>
          <div class="mx-auto" style="max-width: 600px;">
            <p class="text-body-1 text-muted mb-2">
              最先端技術と深い専門知識を融合し、お客様のビジネスを次のレベルへ。
            </p>
            <p class="text-body-1 text-muted">
              革新的なソリューションと総合的なサポートで、持続可能な成長を実現します。
            </p>
          </div>
        </div>
      </div>

      <!-- 技术栈展示 -->
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="tech-showcase-container">
            <!-- 左侧技术列表 -->
            <div class="row">
              <div class="col-lg-5 mb-4 mb-lg-0">
                <div class="tech-nav-container">
                  <div 
                    v-for="(tech, key) in technologies" 
                    :key="key"
                    class="tech-nav-item"
                    :class="{ active: activeTech === key }"
                    @mouseenter="setActiveTech(key)"
                    @click="setActiveTech(key)"
                  >
                    <div class="d-flex align-items-center">
                      <div class="tech-icon-wrapper me-3">
                        <i class="material-icons">{{ tech.icon }}</i>
                      </div>
                      <div class="tech-info">
                        <h5 class="tech-title mb-1">{{ tech.title }}</h5>
                        <p class="tech-subtitle mb-0">{{ tech.subtitle }}</p>
                      </div>
                      <div class="tech-arrow">
                        <i class="material-icons">chevron_right</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 右侧内容展示 -->
              <div class="col-lg-7">
                <div class="tech-content-display">
                  <transition name="fade" mode="out-in">
                    <div :key="activeTech" class="tech-content">
                      <!-- 技术图片 -->
                      <div class="tech-image-container mb-4">
                        <img 
                          :src="technologies[activeTech].image" 
                          :alt="technologies[activeTech].title"
                          class="tech-image"
                          loading="lazy"
                        />
                        <div class="image-overlay">
                          <div class="overlay-content">
                            <span class="tech-badge">{{ technologies[activeTech].category }}</span>
                            <h6 class="overlay-title">{{ technologies[activeTech].title }}</h6>
                          </div>
                        </div>
                      </div>
                      
                      <!-- 技术详情 -->
                      <div class="tech-details">
                        <h4 class="tech-main-title mb-3">{{ technologies[activeTech].title }}</h4>
                        <p class="tech-description mb-4">{{ technologies[activeTech].description }}</p>
                        
                        <!-- 特色功能标签 -->
                        <div class="features-container">
                          <div class="features-grid">
                            <div 
                              v-for="feature in technologies[activeTech].features" 
                              :key="feature"
                              class="feature-item"
                            >
                              <i class="material-icons me-2">check_circle</i>
                              <span>{{ feature }}</span>
                            </div>
                          </div>
                        </div>

                        <!-- 行动按钮 -->
                        <div class="action-buttons mt-4">
                          <button class="btn btn-primary me-3">
                            <i class="material-icons me-2">rocket_launch</i>
                            詳細を見る
                          </button>
                          <button class="btn btn-outline-primary">
                            <i class="material-icons me-2">contact_mail</i>
                            お問い合わせ
                          </button>
                        </div>
                      </div>
                    </div>
                  </transition>
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
// 活跃技术状态
const activeTech = ref('innovation')

// 技术数据定义
const technologies: Record<string, any> = {
  innovation: {
    title: 'イノベーション開発',
    subtitle: '研究開発・技術革新',
    category: '技術研究',
    description: '最新技術と市場分析を融合し、革新的なソリューションを開発。お客様のビジネス課題を解決する新しい価値を創造します。',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format',
    features: ['AI・機械学習技術', '市場分析・予測', 'プロダクト戦略立案', 'デジタル変革支援'],
    icon: 'science'
  },
  coffee: {
    title: '珈琲事業技術',
    subtitle: '品質・体験設計',
    category: '文化事業',
    description: '高品質コーヒーの企画開発から、コーヒー文化の探求まで。専門的な体験サービスを通じて豊かなライフスタイルを提案します。',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop&auto=format',
    features: ['商品企画・開発', 'サプライチェーン', '品質管理システム', 'ブランド体験設計'],
    icon: 'local_cafe'
  },
  digital: {
    title: 'デジタル変革',
    subtitle: 'DX・システム構築',
    category: 'デジタル',
    description: '企業のデジタル変革を総合的にサポート。システム構築からデータ活用まで、効率的なデジタル基盤の構築を実現します。',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format',
    features: ['システム開発', 'データ分析基盤', 'クラウド移行', 'セキュリティ強化'],
    icon: 'computer'
  },
  consulting: {
    title: '戦略コンサルティング',
    subtitle: 'ビジネス戦略・運営',
    category: 'コンサル',
    description: '多分野にわたる専門知識と豊富な経験を基に、戦略的なアドバイスとビジネス課題解決のソリューションを提供します。',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&auto=format',
    features: ['戦略立案・実行', '組織変革支援', '業務プロセス改善', '市場参入支援'],
    icon: 'trending_up'
  }
}

const setActiveTech = (techKey: string) => {
  activeTech.value = techKey
}

// 初始化
onMounted(() => {
  activeTech.value = 'innovation'
})
</script>

<style scoped>
/* ===== Material Kit样式 ===== */
.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.bg-gray-100 {
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* 标题样式 */
.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2rem;
  font-weight: 600;
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

/* 技术展示容器 */
.tech-showcase-container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 3rem;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

/* 左侧技术导航 */
.tech-nav-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-nav-item {
  padding: 1.5rem;
  border-radius: 15px;
  background: #f8f9fa;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.tech-nav-item::before {
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

.tech-nav-item:hover::before,
.tech-nav-item.active::before {
  transform: scaleY(1);
}

.tech-nav-item:hover,
.tech-nav-item.active {
  background: white;
  transform: translateX(8px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.2);
}

/* 技术图标 */
.tech-icon-wrapper {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tech-icon-wrapper .material-icons {
  color: white;
  font-size: 24px;
}

.tech-nav-item:hover .tech-icon-wrapper,
.tech-nav-item.active .tech-icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

/* 技术信息 */
.tech-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  transition: color 0.3s ease;
}

.tech-nav-item:hover .tech-title,
.tech-nav-item.active .tech-title {
  color: #667eea;
}

.tech-subtitle {
  font-size: 0.85rem;
  color: #999;
}

.tech-arrow {
  color: #667eea;
  transition: all 0.3s ease;
}

.tech-nav-item:hover .tech-arrow,
.tech-nav-item.active .tech-arrow {
  transform: translateX(5px);
  color: #764ba2;
}

/* 右侧内容展示 */
.tech-content-display {
  height: 100%;
  min-height: 500px;
}

.tech-content {
  height: 100%;
}

/* 技术图片 */
.tech-image-container {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 250px;
}

.tech-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  filter: brightness(0.9) saturate(1.1);
}

.tech-image:hover {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
}

.overlay-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 1rem;
}

.tech-badge {
  background: rgba(102, 126, 234, 0.9);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.overlay-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

/* 技术详情 */
.tech-main-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.tech-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* 特色功能 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #555;
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
}

.feature-item .material-icons {
  color: #28a745;
  font-size: 18px;
}

/* 按钮样式 */
.btn {
  border: 1px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 4px 7px -1px rgba(102, 126, 234, 0.5), 0 2px 4px -1px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(102, 126, 234, 0.4), 0 3px 6px rgba(102, 126, 234, 0.3);
}

.btn-outline-primary {
  background: transparent;
  border-color: #667eea;
  color: #667eea;
}

.btn-outline-primary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-1px);
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Bootstrap Grid System */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.col-lg-5,
.col-lg-7,
.col-lg-8,
.col-lg-10 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.col-lg-5 {
  flex: 0 0 auto;
  width: 41.666667%;
}

.col-lg-7 {
  flex: 0 0 auto;
  width: 58.333333%;
}

.col-lg-8 {
  flex: 0 0 auto;
  width: 66.666667%;
}

.col-lg-10 {
  flex: 0 0 auto;
  width: 83.333333%;
}

@media (max-width: 991px) {
  .col-lg-5,
  .col-lg-7,
  .col-lg-8,
  .col-lg-10 {
    width: 100%;
  }
}

/* 工具类 */
.text-center { text-align: center; }
.text-muted { color: #67748e !important; }
.text-h6 { font-size: 1.25rem; font-weight: 500; }
.text-body-1 { font-size: 1rem; line-height: 1.6; }

.mx-auto { margin-left: auto; margin-right: auto; }
.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-5 { margin-bottom: 3rem; }
.mt-4 { margin-top: 1.5rem; }
.me-2 { margin-right: 0.5rem; }
.me-3 { margin-right: 1rem; }

.d-flex { display: flex; }
.align-items-center { align-items: center; }

/* 响应式设计 */
@media (max-width: 991px) {
  .tech-showcase-container {
    padding: 2rem;
  }
  
  .tech-content-display {
    min-height: auto;
    margin-top: 2rem;
  }
  
  .tech-image-container {
    height: 200px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .text-gradient {
    font-size: 1.8rem;
  }
  
  .tech-showcase-container {
    padding: 1.5rem;
  }
  
  .tech-nav-item {
    padding: 1rem;
  }
  
  .tech-icon-wrapper {
    width: 40px;
    height: 40px;
  }
  
  .tech-icon-wrapper .material-icons {
    font-size: 20px;
  }
  
  .tech-title {
    font-size: 1rem;
  }
  
  .tech-subtitle {
    font-size: 0.8rem;
  }
  
  .tech-main-title {
    font-size: 1.3rem;
  }
  
  .tech-description {
    font-size: 0.9rem;
  }
  
  .action-buttons .btn {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
  
  .action-buttons .me-3 {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 575px) {
  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .action-buttons .me-3 {
    margin-right: 0;
  }
}
</style>