<template>
  <div class="anthropic-theme exhibition-page">
    <!-- Hero Section - Anthropic Style -->
    <section class="exhibition-hero-section">
      <div class="custom-container">
        <div class="hero-content">
          <h1 class="hero-title">展覧 | EXHIBITION</h1>
          <p class="hero-subtitle">文化・技術・芸術事業</p>
          <p class="hero-description">
            革新的なアプローチで印象的な体験を創造します
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="custom-container">
        <div class="section-header">
          <h2 class="section-title">展示・イベントサービス</h2>
          <p class="section-description">
            文化・技術・芸術分野の専門的な展示企画と運営サービス
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
            <p class="service-description">{{ service.description }}</p>
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
            <h2 class="section-title">品質へのこだわり（2025年1月最新版）</h2>
            <div class="quality-features">
              <div class="quality-feature">
                <h3 class="feature-title">革新的な企画力</h3>
                <p class="feature-description">
                  独創的なアイデアと豊富な経験に基づいて、お客様の期待を超える展示企画を提供します。
                </p>
              </div>
              <div class="quality-feature">
                <h3 class="feature-title">最新技術の活用</h3>
                <p class="feature-description">
                  デジタル技術とインタラクティブメディアを駆使して、来場者に印象的な体験を創造します。
                </p>
              </div>
              <div class="quality-feature">
                <h3 class="feature-title">細部への配慮</h3>
                <p class="feature-description">
                  空間デザインから運営まで、すべての細部にわたって品質にこだわった展示を実現します。
                </p>
              </div>
            </div>
          </div>
          <div class="quality-image">
            <img 
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400" 
              alt="Exhibition Quality"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="custom-container">
        <div class="section-header">
          <h2 class="section-title">プロジェクト進行プロセス</h2>
          <p class="section-description">
            お客様のニーズに応える体系的なプロジェクト管理
          </p>
        </div>
        
        <div class="process-steps">
          <div 
            v-for="(step, index) in processSteps" 
            :key="step.id"
            class="process-step"
          >
            <div class="step-number-wrapper">
              <div class="step-number">{{ index + 1 }}</div>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO設定
const { setSEO } = useSEO()
setSEO('exhibition')

// Helper function for Material Design icons
const getServiceIcon = (serviceId: string) => {
  const iconMap: Record<string, string> = {
    planning: 'mdi-palette-outline',
    management: 'mdi-calendar-check',
    promotion: 'mdi-bullhorn'
  }
  return iconMap[serviceId] || 'mdi-presentation'
}

// 服务数据
const services = [
  {
    id: 'planning',
    title: '展示企画・デザイン',
    description: '文化・技術・芸術展示の企画からデザインまで',
    features: [
      'コンセプト企画・立案',
      '空間デザイン・設計',
      'インタラクティブ展示',
      'デジタル技術活用'
    ]
  },
  {
    id: 'management',
    title: 'イベント運営・管理',
    description: 'プロフェッショナルなイベント運営サービス',
    features: [
      'プロジェクト管理',
      '会場設営・運営',
      'スタッフィング',
      '安全管理・警備'
    ]
  },
  {
    id: 'promotion',
    title: '文化・芸術プロモーション',
    description: '効果的なプロモーション戦略の立案・実行',
    features: [
      'マーケティング戦略',
      'メディア対応',
      'SNS活用',
      'パートナーシップ構築'
    ]
  }
]


// プロセス段階
const processSteps = [
  {
    id: 1,
    title: '企画・提案',
    description: 'お客様のニーズを理解し、最適な企画を提案いたします'
  },
  {
    id: 2,
    title: '設計・デザイン',
    description: '詳細な設計とデザインで理想の空間を創造します'
  },
  {
    id: 3,
    title: '制作・準備',
    description: '高品質な制作と入念な準備で成功を確実にします'
  },
  {
    id: 4,
    title: '実施・運営',
    description: 'プロフェッショナルな運営で最高の体験を提供します'
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
.exhibition-hero-section {
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
.process-section {
  padding: 80px 0;
  background-color: #FAF9F7;
}

.quality-section {
  padding: 80px 0;
  background-color: #F0EDE8;
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
  margin-bottom: 1rem;
}

.service-description {
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
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

/* Process Steps */
.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.process-step {
  text-align: center;
}

.step-number-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #E17B47;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(225, 123, 71, 0.3);
}

.step-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.75rem;
}

.step-description {
  color: #666666;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .custom-container {
    padding: 0 16px;
  }
  
  .exhibition-hero-section,
  .services-section,
  .quality-section,
  .process-section {
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
  
  .process-steps {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
}
</style>