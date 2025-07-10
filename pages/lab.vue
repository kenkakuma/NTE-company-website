<template>
  <div class="anthropic-theme lab-page">
    <!-- Hero Section - Anthropic Style -->
    <section class="lab-hero-section">
      <div class="custom-container">
        <div class="hero-content">
          <h1 class="hero-title">ラボ | LAB</h1>
          <p class="hero-subtitle">技術研究・イノベーション</p>
          <p class="hero-description">
            最先端技術とイノベーションで未来を創造
          </p>
        </div>
      </div>
    </section>

    <!-- Research Areas -->
    <section class="research-areas-section">
      <div class="custom-container">
        <div class="section-header">
          <h2 class="section-title">研究開発領域</h2>
          <p class="section-description">
            革新的な技術研究で社会課題の解決に取り組む専門分野
          </p>
        </div>
        
        <div class="research-grid">
          <div 
            v-for="area in researchAreas" 
            :key="area.id"
            class="research-card"
          >
            <div class="research-icon">
              <v-icon :icon="getResearchIcon(area.id)" size="48" color="#E17B47"></v-icon>
            </div>
            <h3 class="research-title">{{ area.title }}</h3>
            <p class="research-description">{{ area.description }}</p>
            <ul class="research-features">
              <li v-for="feature in area.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <!-- Innovation Process -->
    <section class="innovation-process-section">
      <div class="custom-container">
        <div class="process-content">
          <div class="process-text">
            <h2 class="section-title">イノベーション創出プロセス</h2>
            <div class="process-steps">
              <div class="process-step">
                <h3 class="step-title">1. 調査・分析</h3>
                <p class="step-description">
                  市場動向や技術トレンドを徹底的に調査・分析し、イノベーションの機会を特定します。
                </p>
              </div>
              
              <div class="process-step">
                <h3 class="step-title">2. 研究・開発</h3>
                <p class="step-description">
                  最新技術と創造的アイデアを組み合わせた革新的なソリューションを開発します。
                </p>
              </div>
              
              <div class="process-step">
                <h3 class="step-title">3. 実証・検証</h3>
                <p class="step-description">
                  プロトタイプの作成と実証実験により、技術の有効性を検証します。
                </p>
              </div>
              
              <div class="process-step">
                <h3 class="step-title">4. 実用化・展開</h3>
                <p class="step-description">
                  実証された技術の実用化と市場展開をサポートします。
                </p>
              </div>
            </div>
          </div>
          <div class="process-image">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400" 
              alt="Innovation Process"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership -->
    <section class="partnership-section">
      <div class="custom-container">
        <div class="section-header">
          <h2 class="section-title">パートナーシップ</h2>
          <p class="section-description">
            研究開発を支える信頼できるパートナーネットワーク
          </p>
        </div>
        
        <div class="partners-grid">
          <div 
            v-for="partner in partners"
            :key="partner.id"
            class="partner-card"
          >
            <div class="partner-icon">
              <v-icon :icon="getPartnerIcon(partner.id)" size="48" color="#E17B47"></v-icon>
            </div>
            <h3 class="partner-name">{{ partner.name }}</h3>
            <p class="partner-type">{{ partner.type }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO設定
const { setSEO } = useSEO()
setSEO('lab')

// Helper functions for Material Design icons
const getResearchIcon = (researchId: string) => {
  const iconMap: Record<string, string> = {
    'ai-iot': 'mdi-brain',
    'sustainable': 'mdi-leaf'
  }
  return iconMap[researchId] || 'mdi-microscope'
}

const getPartnerIcon = (partnerId: number) => {
  const iconMap: Record<number, string> = {
    1: 'mdi-school',
    2: 'mdi-laptop',
    3: 'mdi-trophy',
    4: 'mdi-currency-usd'
  }
  return iconMap[partnerId] || 'mdi-handshake'
}

// 研究領域データ
const researchAreas = [
  {
    id: 'ai-iot',
    title: 'AI・IoTテクノロジー',
    description: '人工知能とIoTの融合技術',
    features: [
      '機械学習・深層学習',
      'スマートデバイス開発',
      'データ分析・予測技術',
      'エッジコンピューティング'
    ]
  },
  {
    id: 'sustainable',
    title: 'サステナブル技術',
    description: '持続可能な社会実現のための技術',
    features: [
      '環境配慮型材料開発',
      'エネルギー効率化技術',
      'リサイクル技術革新',
      'カーボンニュートラル'
    ]
  }
]


// パートナー
const partners = [
  {
    id: 1,
    name: '大学研究機関',
    type: '学術パートナー'
  },
  {
    id: 2,
    name: 'テクノロジー企業',
    type: '技術パートナー'
  },
  {
    id: 3,
    name: 'スポーツ団体',
    type: '実証パートナー'
  },
  {
    id: 4,
    name: '投資機関',
    type: '資金パートナー'
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
.lab-hero-section {
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
.research-areas-section,
.innovation-process-section {
  padding: 80px 0;
  background-color: #FAF9F7;
}

.partnership-section {
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

/* Research Areas Grid */
.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.research-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
  transition: all 0.3s ease;
}

.research-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-color: #E17B47;
}

.research-icon {
  margin-bottom: 1.5rem;
}


.research-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 1rem;
}

.research-description {
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.research-features {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.research-features li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: #333333;
  line-height: 1.5;
}

.research-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #E17B47;
  font-weight: 600;
}


/* Innovation Process */
.process-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.process-steps {
  margin-top: 2rem;
}

.process-step {
  margin-bottom: 2.5rem;
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

.process-image {
  border-radius: 16px;
  overflow: hidden;
}

.process-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Partners Grid */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.partner-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
  transition: all 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-color: #E17B47;
}

.partner-icon {
  margin-bottom: 1.5rem;
}


.partner-name {
  font-size: 1.25rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.5rem;
}

.partner-type {
  color: #666666;
  font-size: 1rem;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .custom-container {
    padding: 0 16px;
  }
  
  .lab-hero-section,
  .research-areas-section,
  .innovation-process-section,
  .partnership-section {
    padding: 60px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .research-grid {
    grid-template-columns: 1fr;
  }
  
  
  .partners-grid {
    grid-template-columns: 1fr;
  }
  
  .process-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .process-image {
    order: -1;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .research-card,
  .partner-card {
    padding: 1.5rem;
  }
  
}
</style>