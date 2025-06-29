<template>
  <div class="service-showcase">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h3 class="text-gradient text-dark mb-0">総合サービスリソース</h3>
          <p class="lead">お客様のニーズに応える幅広いサービスを提供しています</p>
        </div>
      </div>
      
      <div class="row equal-height-row">
        <!-- 左侧服务列表 -->
        <div class="col-lg-6 col-md-12 mb-4">
          <div class="service-list">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="service-item"
              :class="{ 'active': activeService === index }"
              @mouseenter="setActiveService(index)"
              @click="setActiveService(index)"
            >
              <div class="service-item-content">
                <div class="service-icon">
                  <i class="material-icons">{{ service.icon }}</i>
                </div>
                <div class="service-info">
                  <h5 class="service-title">{{ service.title }}</h5>
                  <p class="service-summary">{{ service.summary }}</p>
                </div>
                <div class="service-arrow">
                  <i class="material-icons">chevron_right</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 右侧详细内容 -->
        <div class="col-lg-6 col-md-12">
          <div class="service-detail-container">
            <transition name="fade" mode="out-in">
              <div
                :key="activeService"
                class="service-detail"
              >
                <div class="detail-header">
                  <div class="detail-icon">
                    <i class="material-icons">{{ services[activeService].icon }}</i>
                  </div>
                  <div class="detail-title-section">
                    <h4 class="detail-title">{{ services[activeService].title }}</h4>
                    <span class="detail-badge">{{ services[activeService].category }}</span>
                  </div>
                </div>
                
                <div class="detail-content">
                  <p class="detail-description">{{ services[activeService].description }}</p>
                  
                  <div class="detail-features">
                    <h6 class="features-title">主要特色</h6>
                    <ul class="features-list">
                      <li v-for="feature in services[activeService].features" :key="feature">
                        <i class="material-icons text-success">check_circle</i>
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                  
                  <div class="detail-action">
                    <router-link
                      v-if="services[activeService].route && !services[activeService].route.startsWith('#')"
                      :to="services[activeService].route"
                      class="btn btn-gradient btn-dark me-2"
                    >
                      詳細を見る
                    </router-link>
                    <a
                      v-else-if="services[activeService].route"
                      :href="services[activeService].route"
                      class="btn btn-gradient btn-dark me-2"
                    >
                      詳細を見る
                    </a>
                    <button
                      class="btn btn-outline-dark"
                      @click="contactUs"
                    >
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
</template>

<script setup>
import { ref } from 'vue'

const activeService = ref(0)

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

const setActiveService = (index) => {
  activeService.value = index
}

const contactUs = () => {
  // 联系我们的逻辑
  window.location.href = '/pages/landing-pages/contact-us'
}
</script>

<style scoped>
.service-showcase {
  padding: 2rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}


.service-item {
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.service-item:last-child {
  border-bottom: none;
}

.service-item:hover,
.service-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateX(5px);
}

.service-item:hover .service-item-content,
.service-item.active .service-item-content {
  color: white;
}

.service-item-content {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.service-icon {
  width: 50px;
  height: 50px;
  background: #f8f9fa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  transition: all 0.3s ease;
}

.service-item:hover .service-icon,
.service-item.active .service-icon {
  background: rgba(255, 255, 255, 0.2);
}

.service-icon .material-icons {
  font-size: 24px;
  color: #344767;
  transition: all 0.3s ease;
}

.service-item:hover .service-icon .material-icons,
.service-item.active .service-icon .material-icons {
  color: white;
}

.service-info {
  flex: 1;
}

.service-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #344767;
  transition: all 0.3s ease;
}

.service-summary {
  font-size: 0.875rem;
  color: #7b809a;
  margin-bottom: 0;
  transition: all 0.3s ease;
}

.service-item:hover .service-title,
.service-item.active .service-title,
.service-item:hover .service-summary,
.service-item.active .service-summary {
  color: white;
}

.service-arrow {
  margin-left: 1rem;
  transition: all 0.3s ease;
}

.service-arrow .material-icons {
  color: #7b809a;
  transition: all 0.3s ease;
}

.service-item:hover .service-arrow .material-icons,
.service-item.active .service-arrow .material-icons {
  color: white;
  transform: translateX(5px);
}

.service-list {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.service-detail-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.service-detail {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.detail-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.detail-features {
  flex: 1;
}

.detail-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.detail-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.detail-icon .material-icons {
  font-size: 28px;
  color: white;
}

.detail-title-section {
  flex: 1;
}

.detail-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #344767;
  margin-bottom: 0.5rem;
}

.detail-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.detail-content {
  margin-top: 1.5rem;
}

.detail-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #7b809a;
  margin-bottom: 1.5rem;
}

.features-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #344767;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.features-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: #7b809a;
}

.features-list li .material-icons {
  font-size: 18px;
  margin-right: 0.5rem;
}

.detail-action {
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
}

.btn {
  display: inline-block;
  font-weight: 600;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in-out;
  margin-right: 0.5rem;
}

.btn-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.btn-gradient:hover {
  transform: translateY(-1px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  color: white;
  text-decoration: none;
}

.btn-dark {
  background-color: #344767;
  border-color: #344767;
  color: white;
}

.btn-outline-dark {
  color: #344767;
  border-color: #344767;
  background-color: transparent;
}

.btn-outline-dark:hover {
  color: white;
  background-color: #344767;
  border-color: #344767;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 等高布局 - 使用JavaScript计算高度 */
.equal-height-row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.equal-height-row > [class*="col-"] {
  display: flex;
  flex-direction: column;
}

.service-list,
.service-detail-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 响应式设计 */
@media (max-width: 991px) {
  .service-showcase {
    padding: 4rem 0;
  }
  
  .equal-height-row {
    display: block;
  }
  
  .equal-height-row > [class*="col-"] {
    display: block;
  }
  
  .service-detail-container {
    margin-top: 2rem;
  }
  
  .service-item:hover,
  .service-item.active {
    transform: none;
  }
}

@media (max-width: 767px) {
  .detail-header {
    flex-direction: column;
    text-align: center;
  }
  
  .detail-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .service-item-content {
    padding: 1rem;
  }
  
  .service-detail-container {
    padding: 1.5rem;
  }
}
</style>