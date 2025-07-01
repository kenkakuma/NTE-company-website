<template>
  <div class="homepage">
    <!-- 页面SEO元数据 -->
    <Head>
      <Title>NO TRACE EXPLORER | 無迹探索株式会社</Title>
      <Meta name="description" content="革新的なソリューションで新たなビジネス価値を創造する企業です。コーヒー事業、展示・イベント運営、技術研究開発など多岐にわたるサービスを提供。" />
    </Head>
    <!-- Hero Section -->
    <v-container fluid class="hero-section">
      <v-container>
        <v-row align="center" justify="center" class="min-vh-100">
          <v-col cols="12" md="10" lg="8" class="text-center">
            <!-- 企业Logo/品牌 -->
            <div class="brand-container mb-8">
              <h1 class="hero-title mb-4">
                NO TRACE EXPLORER
              </h1>
              <h2 class="hero-subtitle mb-6">
                無迹探索株式会社
              </h2>
              <div class="hero-tagline mb-6">
                <p class="tagline-japanese">
                  未知の領域を探索し、輝く未来を築く
                </p>
                <p class="tagline-english">
                  Explore the unknown territories and build a bright future
                </p>
              </div>
            </div>
            
            <!-- CTA按钮 -->
            <div class="hero-actions">
              <v-btn
                color="primary"
                size="x-large"
                variant="elevated"
                class="ma-3 hero-btn"
                to="/about"
                rounded="lg"
              >
                <v-icon start icon="mdi-information" />
                企業情報
              </v-btn>
              <v-btn
                color="secondary"
                size="x-large"
                variant="outlined"
                class="ma-3 hero-btn"
                to="/contact"
                rounded="lg"
              >
                <v-icon start icon="mdi-email" />
                お問い合わせ
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- 分割线 -->
    <v-divider class="section-divider" />

    <!-- 统计数据区域 -->
    <PresentationCounter />

    <!-- 分割线 -->
    <v-divider class="section-divider" />

    <!-- 服务展示区域 -->
    <v-container fluid class="services-section">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="section-title mb-4">
              総合サービスリソース
            </h2>
            <p class="section-subtitle">
              COMPREHENSIVE SERVICE RESOURCES
            </p>
          </v-col>
        </v-row>
      </v-container>
      <ServiceShowcase />
    </v-container>

    <!-- 分割线 -->
    <v-divider class="section-divider" />

    <!-- 企业新闻区域 -->
    <PresentationPages />

    <!-- 分割线 -->
    <v-divider class="section-divider" />

    <!-- 行动呼吁区域 -->
    <v-container fluid class="cta-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="cta-title mb-4">
              一緒に未来を創造しませんか？
            </h2>
            <p class="cta-description mb-6">
              革新的なソリューションで新たなビジネス価値を創造。
              私たちと共に、輝く未来への第一歩を踏み出しましょう。
            </p>
            <div class="cta-buttons">
              <v-btn
                color="primary"
                size="large"
                variant="elevated"
                class="ma-2"
                to="/contact"
                rounded="lg"
              >
                <v-icon start icon="mdi-handshake" />
                パートナーシップ
              </v-btn>
              <v-btn
                color="success"
                size="large"
                variant="outlined"
                class="ma-2"
                to="/club"
                rounded="lg"
              >
                <v-icon start icon="mdi-account-group" />
                コミュニティ参加
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
// SEO設定
const { setSEO, generateStructuredData } = useSEO()
setSEO('home')

// 構造化データ
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateStructuredData())
    }
  ]
})
</script>

<style scoped>
.homepage {
  background: #fff;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(118, 75, 162, 0.1) 100%
  );
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="1" fill="rgba(102,126,234,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(118,75,162,0.1)"/></svg>');
  pointer-events: none;
}

.min-vh-100 {
  min-height: 100vh;
}

.brand-container {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 300;
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-secondary)) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.02em;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 400;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.8;
  letter-spacing: 0.01em;
}

.hero-tagline {
  max-width: 600px;
  margin: 0 auto;
}

.tagline-japanese {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
  line-height: 1.6;
}

.tagline-english {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 400;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.7;
  font-style: italic;
  letter-spacing: 0.01em;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.hero-btn {
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Section Styling */
.section-divider {
  margin: 0;
  border-color: rgba(102, 126, 234, 0.1);
  border-width: 1px;
}

.services-section {
  padding: 4rem 0;
  background: linear-gradient(
    180deg,
    rgba(248, 249, 250, 0.5) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600;
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-secondary)) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.section-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 400;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.7;
  letter-spacing: 0.1em;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.05) 0%,
    rgba(118, 75, 162, 0.05) 100%
  );
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.cta-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.3;
}

.cta-description {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.8;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/* 响应式设计 */
@media (max-width: 959px) {
  .hero-section {
    padding: 3rem 0;
  }
  
  .services-section {
    padding: 3rem 0;
  }
  
  .cta-section {
    padding: 3rem 0;
  }
}

@media (max-width: 599px) {
  .hero-section {
    padding: 2rem 0;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-btn {
    width: 100%;
    max-width: 280px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-buttons .v-btn {
    width: 100%;
    max-width: 280px;
  }
}

/* 深色模式适配 */
.v-theme--dark .hero-section {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.2) 0%,
    rgba(118, 75, 162, 0.2) 100%
  );
}

.v-theme--dark .services-section {
  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 0.5) 0%,
    rgba(18, 18, 18, 1) 100%
  );
}

.v-theme--dark .cta-section {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(118, 75, 162, 0.1) 100%
  );
}
</style>