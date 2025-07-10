<template>
  <v-container class="presentation-example-section">
    <v-row>
      <!-- 珈琲 | COFFEE -->
      <v-col cols="12" lg="4" md="6" class="mb-4">
        <v-card
          class="service-card h-100"
          elevation="2"
          rounded="xl"
          :ripple="false"
        >
          <div class="service-card-content">
            <div class="service-icon-container">
              <v-icon size="32" color="primary" class="service-icon">
                mdi-coffee
              </v-icon>
            </div>
            <div class="service-text-content">
              <h5 class="service-title">珈琲 | COFFEE</h5>
              <p class="service-description">
                コーヒー関連事業：高品質コーヒー商品の企画開発、コーヒー文化の探求と普及を行います。
              </p>
              <NuxtLink to="/coffee" class="service-link">
                詳細を見る
                <v-icon size="small" class="ml-1">mdi-arrow-right</v-icon>
              </NuxtLink>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- 器具 | EQUIPMENT -->
      <v-col cols="12" lg="4" md="6" class="mb-4">
        <v-card
          class="service-card h-100"
          elevation="2"
          rounded="xl"
          :ripple="false"
        >
          <div class="service-card-content">
            <div class="service-icon-container">
              <v-icon size="32" color="primary" class="service-icon">
                mdi-tools
              </v-icon>
            </div>
            <div class="service-text-content">
              <h5 class="service-title">器具 | EQUIPMENT</h5>
              <p class="service-description">
                専門器具開発事業：高品質な専門器具の設計・開発・販売を通じて、品質向上をサポートします。
              </p>
              <NuxtLink to="#equipment" class="service-link">
                詳細を見る
                <v-icon size="small" class="ml-1">mdi-arrow-right</v-icon>
              </NuxtLink>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- 展览 | EXHIBITION -->
      <v-col cols="12" lg="4" md="6" class="mb-4">
        <v-card
          class="service-card h-100"
          elevation="2"
          rounded="xl"
          :ripple="false"
        >
          <div class="service-card-content">
            <div class="service-icon-container">
              <v-icon size="32" color="primary" class="service-icon">
                mdi-museum
              </v-icon>
            </div>
            <div class="service-text-content">
              <h5 class="service-title">展览 | EXHIBITION</h5>
              <p class="service-description">
                展覧企画事業：文化・技術・芸術分野における展示企画、イベント運営、展示空間設計を提供。
              </p>
              <NuxtLink to="/exhibition" class="service-link">
                詳細を見る
                <v-icon size="small" class="ml-1">mdi-arrow-right</v-icon>
              </NuxtLink>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- 钓鱼 | FISHING -->
      <v-col cols="12" lg="4" md="6" class="mb-4">
        <v-card
          class="service-card h-100"
          elevation="2"
          rounded="xl"
          :ripple="false"
        >
          <div class="service-card-content">
            <div class="service-icon-container">
              <v-icon size="32" color="primary" class="service-icon">
                mdi-fish
              </v-icon>
            </div>
            <div class="service-text-content">
              <h5 class="service-title">钓鱼 | FISHING</h5>
              <p class="service-description">
                釣り関連事業：釣り体験サービス、釣り具開発、釣りツアー企画を通じて自然との触れ合いを提供。
              </p>
              <NuxtLink to="#fishing" class="service-link">
                詳細を見る
                <v-icon size="small" class="ml-1">mdi-arrow-right</v-icon>
              </NuxtLink>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- 滑雪 | SKIING -->
      <v-col cols="12" lg="4" md="6" class="mb-4">
        <v-card
          class="service-card h-100"
          elevation="2"
          rounded="xl"
          :ripple="false"
        >
          <div class="service-card-content">
            <div class="service-icon-container">
              <v-icon size="32" color="primary" class="service-icon">
                mdi-ski
              </v-icon>
            </div>
            <div class="service-text-content">
              <h5 class="service-title">滑雪 | SKIING</h5>
              <p class="service-description">
                スキー関連事業：スキー教室運営、スキー用品販売、スキーツアー企画でウインタースポーツを支援。
              </p>
              <NuxtLink to="#skiing" class="service-link">
                詳細を見る
                <v-icon size="small" class="ml-1">mdi-arrow-right</v-icon>
              </NuxtLink>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- LAB | ラボ -->
      <v-col cols="12" lg="4" md="6" class="mb-4">
        <v-card
          class="service-card h-100"
          elevation="2"
          rounded="xl"
          :ripple="false"
        >
          <div class="service-card-content">
            <div class="service-icon-container">
              <v-icon size="32" color="primary" class="service-icon">
                mdi-flask
              </v-icon>
            </div>
            <div class="service-text-content">
              <h5 class="service-title">LAB | ラボ</h5>
              <p class="service-description">
                研究開発事業：技術研究、市場分析、イノベーション開発を通じて新たなビジネス価値を創造。
              </p>
              <NuxtLink to="/lab" class="service-link">
                詳細を見る
                <v-icon size="small" class="ml-1">mdi-arrow-right</v-icon>
              </NuxtLink>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// 组件设置
</script>

<style scoped>
.presentation-example-section {
  padding: 2rem 0;
}

/* 服务卡片样式 */
.service-card {
  transition: all 0.3s ease;
  transform: translateY(0);
  background: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.service-card-content {
  padding: 1.5rem;
  height: 196px; /* 固定高度 */
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.service-icon-container {
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.service-icon {
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  color: #e0e0e0 !important;
}

.service-text-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}

.service-title {
  font-size: 1.1rem !important;
  line-height: 1.3 !important;
  margin-bottom: 0.5rem !important;
  font-weight: 600;
  color: #2d3748;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.service-description {
  font-size: 0.875rem !important;
  line-height: 1.3 !important;
  margin-bottom: 0.75rem !important;
  color: #4a5568;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.service-link {
  font-size: 0.875rem !important;
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: rgb(var(--v-theme-secondary));
  transform: translateX(4px);
}

/* 悬停时的背景效果 */
.service-card:hover {
  background: linear-gradient(195deg, #42424a, #191919) !important;
}

.service-card:hover .service-title,
.service-card:hover .service-description,
.service-card:hover .service-link {
  color: white !important;
}

.service-card:hover .service-link:hover {
  color: #e0e0e0 !important;
}

/* 响应式设计 */
@media (max-width: 959px) {
  .presentation-example-section {
    padding: 1.5rem 0;
  }
  
  .service-card-content {
    height: auto;
    min-height: 180px;
  }
}

@media (max-width: 599px) {
  .presentation-example-section {
    padding: 1rem 0;
  }
  
  .service-card-content {
    padding: 1.25rem;
    min-height: 160px;
  }
  
  .service-title {
    font-size: 1rem !important;
  }
  
  .service-description {
    font-size: 0.8rem !important;
  }
}

/* 深色模式适配 */
.v-theme--dark .service-card {
  background: rgba(33, 33, 33, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
}

.v-theme--dark .service-title {
  color: #f7fafc;
}

.v-theme--dark .service-description {
  color: #e2e8f0;
}

.v-theme--dark .service-card:hover {
  background: linear-gradient(195deg, #42424a, #191919) !important;
}
</style>