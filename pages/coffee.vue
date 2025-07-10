<template>
  <div class="anthropic-theme coffee-page">
    <!-- Hero Section - Anthropic Style -->
    <section class="coffee-hero-section">
      <div class="custom-container">
        <div class="hero-content">
          <h1 class="hero-title">珈琲 | COFFEE</h1>
          <p class="hero-subtitle">飲料・文化事業</p>
          <p class="hero-description">
            高品質コーヒー商品の企画開発・貿易・ブランド展開
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="custom-container">
        <div class="section-header">
          <!-- Updated services section -->
          <h2 class="section-title">コーヒーサービス</h2>
          <p class="section-description">
            品質と伝統を融合させた総合的なコーヒーソリューション
          </p>
        </div>
        
        <div class="services-grid">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="service-card"
          >
            <div class="service-icon">
              <v-icon :icon="getServiceIcon(service.id)" size="48" color="#E17B47"></v-icon>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <!-- Quality Promise -->
    <section class="quality-section">
      <div class="custom-container">
        <div class="quality-content">
          <div class="quality-text">
            <h2 class="section-title">品質へのこだわり</h2>
            <div class="quality-features">
              <div class="quality-feature">
                <h3 class="feature-title">厳選された豆</h3>
                <p class="feature-description">
                  世界各地の優良農園から直接仕入れた高品質なコーヒー豆のみを使用しています。
                </p>
              </div>
              <div class="quality-feature">
                <h3 class="feature-title">独自の焙煎技術</h3>
                <p class="feature-description">
                  豆の特性を最大限に引き出す独自の焙煎技術により、最高の風味を実現しています。
                </p>
              </div>
              <div class="quality-feature">
                <h3 class="feature-title">サステナブルな取り組み</h3>
                <p class="feature-description">
                  環境と生産者に配慮したサステナブルなコーヒー作りに取り組んでいます。
                </p>
              </div>
            </div>
          </div>
          <div class="quality-image">
            <img 
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400" 
              alt="Coffee Quality"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO設定
const { setSEO } = useSEO()
setSEO('coffee')

// Helper function for service icons
const getServiceIcon = (serviceId: string) => {
  const iconMap: Record<string, string> = {
    development: 'mdi-lightbulb-variant',
    trade: 'mdi-earth',
    brand: 'mdi-trophy',
    international: 'mdi-airplane'
  }
  return iconMap[serviceId] || 'mdi-coffee'
}

// 服务数据
const services = [
  {
    id: 'development',
    title: '商品企画開発',
    icon: 'mdi-lightbulb-variant',
    features: [
      '高品質コーヒー商品の企画開発',
      'ドリップバッグ開発・製造',
      'オリジナルブレンド開発',
      'パッケージデザイン'
    ]
  },
  {
    id: 'trade',
    title: 'コーヒー貿易',
    icon: 'mdi-earth',
    features: [
      '世界各地からの優良豆輸入',
      '直接取引による品質保証',
      '適正価格での安定供給',
      'サステナブル調達'
    ]
  },
  {
    id: 'branding',
    title: 'ブランド展開',
    icon: 'mdi-trophy',
    features: [
      'オリジナルブランド展開',
      'マーケティング戦略立案',
      '販売チャネル開拓',
      'ブランド価値向上'
    ]
  },
  {
    id: 'international',
    title: '中国戦略展開',
    icon: 'mdi-airplane',
    features: [
      '中国市場向け商品開発',
      '海外販売戦略立案',
      '現地パートナーシップ構築',
      'クロスボーダーEC展開'
    ]
  }
]

</script>

<style scoped>
/* Anthropic Theme Variables */
.anthropic-theme {
  background-color: #FAF9F7;
  min-height: 100vh;
}

/* Custom Container */
.custom-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.coffee-hero-section {
  padding: 80px 0 60px 0;
  background-color: #FAF9F7;
  border-bottom: 1px solid #E5E5E5;
}

.hero-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #E17B47;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.125rem;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

/* Section Styles */
.services-section,
.quality-section {
  padding: 80px 0;
  background-color: #FAF9F7;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.section-description {
  font-size: 1.125rem;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.service-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-color: #E17B47;
}

.service-icon {
  margin-bottom: 1.5rem;
}


.service-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.service-features li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #333333;
  line-height: 1.5;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #E17B47;
  font-weight: 600;
}


/* Quality Section */
.quality-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.quality-features {
  margin-top: 2rem;
}

.quality-feature {
  margin-bottom: 2rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.75rem;
}

.feature-description {
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

.quality-image {
  border-radius: 16px;
  overflow: hidden;
}

.quality-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .custom-container {
    padding: 0 16px;
  }
  
  .coffee-hero-section,
  .services-section,
  .quality-section {
    padding: 60px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .quality-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .quality-image {
    order: -1;
  }
}
</style>