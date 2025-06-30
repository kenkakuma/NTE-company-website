<template>
  <div class="service-showcase">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <div class="title-section mb-4">
            <h3 class="glow-title mb-2">総合サービスリソース</h3>
            <p class="glow-subtitle small mb-3">COMPREHENSIVE SERVICE RESOURCES</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
              <div class="px-md-4">
                <p class="text-muted mb-0 lh-lg text-center" style="font-size: 0.9rem; line-height: 1.7;">
                  お客様のニーズに応える<strong>幅広いサービス</strong>を提供し、<br class="d-none d-lg-block">
                  最適なソリューションで価値創造をサポートいたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 悬停展开卡片展示 -->
      <div class="services-container">
        <div class="services-grid">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card"
            :class="{ 'expanded': hoveredCard === index }"
            @mouseenter="hoveredCard = index"
            @mouseleave="hoveredCard = null"
          >
            <!-- 卡片主要内容 -->
            <div class="card-main">
              <div class="service-icon">
                <i class="material-icons">{{ service.icon }}</i>
              </div>
              
              <div class="service-info-left">
                <h4 class="service-title">{{ service.title }}</h4>
                <p class="service-category">{{ service.category }}</p>
              </div>
              
              <div class="service-info-right">
                <p class="service-summary">{{ service.summary }}</p>
              </div>
              
              <div class="expand-indicator">
                <i class="material-icons">expand_more</i>
              </div>
            </div>
            
            <!-- 展开的详细内容 -->
            <div class="card-details" :class="{ 'visible': hoveredCard === index }">
              <div class="details-content">
                <div class="description-section">
                  <h6 class="details-title">サービス詳細</h6>
                  <p class="service-description">{{ service.description }}</p>
                </div>
                
                <div class="features-section">
                  <h6 class="features-title">主要特色</h6>
                  <ul class="features-list">
                    <li v-for="feature in service.features" :key="feature">
                      <i class="material-icons">check_circle</i>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>
                
                <div class="actions-section">
                  <router-link
                    v-if="service.route && !service.route.startsWith('#')"
                    :to="service.route"
                    class="btn btn-primary"
                  >
                    詳細を見る
                  </router-link>
                  <a
                    v-else-if="service.route"
                    :href="service.route"
                    class="btn btn-primary"
                  >
                    詳細を見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hoveredCard = ref(null)

const services = [
  {
    title: "珈琲 | COFFEE",
    category: "飲料・文化事業",
    summary: "高品質コーヒー商品の企画開発・貿易・ブランド展開",
    description: "高品質なコーヒー商品の企画開発から、ドリップバッグ開発、コーヒー貿易、ブランド展開まで幅広く展開。専門的なコーヒー体験サービスとサプライチェーン構築を通じて、最高のコーヒー体験をお届けします。",
    icon: "local_cafe",
    route: "/coffee",
    features: [
      "高品質コーヒー商品の企画開発",
      "ドリップバッグ開発・製造",
      "コーヒー貿易・ブランド展開"
    ]
  },
  {
    title: "器具 | EQUIPMENT",
    category: "専門器具・技術支援",
    summary: "専門器具の設計・開発・販売・サポート",
    description: "専門器具の設計・開発から販売・アフターサポートまで一貫して提供。最新技術と職人の技術を融合し、お客様のニーズに最適化された高品質な器具をお届けします。",
    icon: "build",
    route: "#equipment",
    features: [
      "専門器具の設計・開発・販売",
      "技術サポート・メンテナンス",
      "カスタマイズ・特注対応"
    ]
  },
  {
    title: "展覧 | EXHIBITION",
    category: "文化・技術・芸術",
    summary: "文化・技術・芸術分野の展示企画・イベント運営",
    description: "文化・技術・芸術分野における展示企画、イベント運営、展示空間設計を提供。革新的なアイデアと専門的な運営技術により、印象深い展示体験を創造します。",
    icon: "museum",
    route: "#exhibition",
    features: [
      "文化・技術・芸術展示企画",
      "イベント運営・管理",
      "展示空間設計・デザイン"
    ]
  },
  {
    title: "ラボ | LAB",
    category: "技術研究・イノベーション",
    summary: "技術研究・イノベーション開発・スポーツ関連研究",
    description: "技術研究、市場分析、イノベーション開発を通じて新たなビジネス価値を創造。釣り、スキー、ゴルフなどのスポーツ関連技術開発と最先端研究により、ビジネス成長を支援します。",
    icon: "science",
    route: "/lab",
    features: [
      "スポーツ関連技術開発・ツアー企画",
      "エクスペリエンスデザイン・イノベーション",
      "プロフェッショナルコンサルティング"
    ]
  },
  {
    title: "クラブ | CLUB",
    category: "会員制コミュニティ",
    summary: "会員制コミュニティ・専門家ネットワーク運営",
    description: "各分野の専門家や愛好家が集まる会員制コミュニティを運営。コーヒー愛好家クラブ、アウトドアスポーツクラブ、文化芸術サークルなど、多様な交流と学習の場を提供します。",
    icon: "groups",
    route: "/club",
    features: [
      "コーヒー愛好家クラブ運営",
      "アウトドアスポーツクラブ活動",
      "文化芸術サークル運営"
    ]
  }
]

const contactUs = () => {
  window.location.href = '/pages/landing-pages/contact-us'
}
</script>

<style scoped>
.service-showcase {
  padding: 2rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

/* 柔和发光特效样式 */
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

.glow-subtitle {
  color: #6c757d;
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 0 0 3px rgba(128, 128, 128, 0.12);
}

/* 服务展示容器 */
.services-container {
  padding: 2rem 0;
}

.services-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
}

/* 服务卡片 - 日式清新风格 */
.service-card {
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: none;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-color: #e8e8e8;
}

.service-card.expanded {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border-color: #667eea;
}

/* 卡片主要内容 - 日式简约左右布局 */
.card-main {
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem;
  position: relative;
  background: #ffffff;
  gap: 1rem;
}

.service-icon {
  width: 48px;
  height: 48px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #f0f0f0;
}

.service-icon .material-icons {
  font-size: 24px;
  color: #667eea;
}

.service-info-left {
  min-width: 200px;
  flex-shrink: 0;
}

.service-info-right {
  flex: 1;
  min-width: 0;
}

.service-title {
  font-size: 1.0rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.3rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.service-category {
  font-size: 0.7rem;
  color: #718096;
  font-weight: 500;
  margin: 0;
  display: inline-block;
  background: #f7fafc;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}

.service-summary {
  font-size: 0.8rem;
  color: #4a5568;
  line-height: 1.4;
  margin: 0;
  font-weight: 400;
}

.expand-indicator {
  margin-left: 1rem;
  color: #a0aec0;
  transition: all 0.3s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
}

.service-card.expanded .expand-indicator {
  transform: rotate(180deg);
  background: #667eea;
  border-color: #667eea;
  color: white;
}

.expand-indicator .material-icons {
  font-size: 18px;
}

/* 详细内容区域 - 日式清新 */
.card-details {
  max-height: 0;
  overflow: hidden;
  background: #fafafa;
  transition: all 0.3s ease;
  border-top: none;
}

.card-details.visible {
  max-height: 350px;
  border-top: 1px solid #f0f0f0;
}

.details-content {
  padding: 1.5rem 2rem;
  opacity: 0;
  transition: opacity 0.2s ease 0.1s;
}

.card-details.visible .details-content {
  opacity: 1;
}

.description-section {
  margin-bottom: 1.2rem;
}

.details-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.6rem;
  letter-spacing: -0.01em;
}

.service-description {
  font-size: 0.8rem;
  line-height: 1.6;
  color: #4a5568;
  margin: 0;
  font-weight: 400;
}

.features-section {
  margin-bottom: 1.2rem;
}

.features-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.8rem;
  letter-spacing: -0.01em;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.features-list li {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #4a5568;
  background: #ffffff;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  font-weight: 400;
}

.features-list li .material-icons {
  font-size: 16px;
  margin-right: 0.6rem;
  color: #667eea;
}

.actions-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.01em;
}

.btn-primary {
  background: #667eea;
  color: white;
  border: 1px solid #667eea;
}

.btn-primary:hover {
  background: #5a67d8;
  border-color: #5a67d8;
  color: white;
  text-decoration: none;
}

.btn-outline {
  background: transparent;
  color: #4a5568;
  border: 1px solid #e2e8f0;
}

.btn-outline:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
  color: #2d3748;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .glow-title {
    font-size: 1.4rem;
  }
  
  .card-main {
    padding: 1.2rem 1.5rem;
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
  }
  
  .service-info-left {
    min-width: auto;
    width: 100%;
  }
  
  .service-info-right {
    width: 100%;
  }
  
  .expand-indicator {
    position: absolute;
    top: 1rem;
    right: 1rem;
    margin: 0;
  }
  
  .details-content {
    padding: 1.2rem 1.5rem;
  }
  
  .actions-section {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .glow-title {
    font-size: 1.2rem;
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
  }
  
  .service-icon .material-icons {
    font-size: 28px;
  }
  
  .service-title {
    font-size: 1.2rem;
  }
  
  .card-main {
    padding: 1.2rem;
  }
  
  .details-content {
    padding: 1.2rem;
  }
}

/* 加载动画 */
.service-card {
  animation: slideInUp 0.6s ease-out backwards;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }
.service-card:nth-child(5) { animation-delay: 0.5s; }

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>