<template>
  <v-container fluid class="pa-0">
    <!-- Page Header -->
    <v-section class="hero-section">
      <v-container>
        <v-row align="center" class="py-16">
          <v-col cols="12" class="text-center">
            <h1 class="text-h2 text-white mb-4">
              展覧 | EXHIBITION
            </h1>
            <p class="text-h6 text-white opacity-90 mb-6">
              文化・技術・芸術事業
            </p>
            <p class="text-body-1 text-white opacity-80">
              革新的なアプローチで印象的な体験を創造します
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Services Section -->
    <v-section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 mb-4">展示・イベントサービス</h2>
            <p class="text-h6 grey--text">
              Exhibition & Event Services
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col 
            v-for="service in services" 
            :key="service.id"
            cols="12" 
            md="4"
          >
            <v-card 
              class="fill-height pa-6"
              variant="outlined"
              hover
            >
              <div class="text-center mb-4">
                <v-icon 
                  :icon="service.icon" 
                  size="x-large" 
                  color="primary"
                />
              </div>
              <v-card-title class="justify-center">
                {{ service.title }}
              </v-card-title>
              <v-card-text>
                <p class="text-body-2 mb-4">{{ service.description }}</p>
                <ul class="service-list">
                  <li v-for="feature in service.features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Case Studies -->
    <v-section class="py-16 bg-grey-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 mb-4">実績紹介</h2>
            <p class="text-h6 grey--text">
              Case Studies
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col 
            v-for="project in projects" 
            :key="project.id"
            cols="12" 
            md="6"
          >
            <v-card class="fill-height" variant="outlined">
              <v-img
                :src="project.image"
                height="250"
                cover
              />
              <v-card-title>
                {{ project.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ project.category }} | {{ project.date }}
              </v-card-subtitle>
              <v-card-text>
                {{ project.description }}
              </v-card-text>
              <v-card-actions>
                <v-btn variant="text" color="primary">
                  詳細を見る
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Process Section -->
    <v-section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 mb-4">プロジェクト進行プロセス</h2>
            <p class="text-h6 grey--text">
              Project Process
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col 
            v-for="(step, index) in processSteps" 
            :key="step.id"
            cols="12" 
            md="3"
          >
            <div class="text-center">
              <div class="process-step mb-4">
                <div class="step-number">
                  {{ index + 1 }}
                </div>
              </div>
              <h3 class="text-h6 mb-2">{{ step.title }}</h3>
              <p class="text-body-2 grey--text">{{ step.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-section>
  </v-container>
</template>

<script setup lang="ts">
// SEO設定
const { setSEO } = useSEO()
setSEO('exhibition')

// 服务数据
const services = [
  {
    id: 'planning',
    title: '展示企画・デザイン',
    icon: 'mdi-palette',
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
    icon: 'mdi-calendar-check',
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
    icon: 'mdi-bullhorn',
    description: '効果的なプロモーション戦略の立案・実行',
    features: [
      'マーケティング戦略',
      'メディア対応',
      'SNS活用',
      'パートナーシップ構築'
    ]
  }
]

// プロジェクト実績
const projects = [
  {
    id: 1,
    title: '中国現代アート展示',
    category: '文化芸術',
    date: '2024年12月',
    description: '中目黒アートスペースでの中国現代アーティスト作品展示。革新的な空間デザインで話題に。',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400'
  },
  {
    id: 2,
    title: 'テクノロジー・イノベーション展',
    category: '技術展示',
    date: '2024年11月',
    description: '最新技術とアートの融合をテーマにしたインタラクティブ展示。多くの来場者を魅了。',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400'
  },
  {
    id: 3,
    title: 'サステナブル・デザイン展',
    category: '環境・デザイン',
    date: '2024年10月',
    description: '持続可能なデザインをテーマにした展示会。環境への配慮とデザイン性を両立。',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400'
  },
  {
    id: 4,
    title: '和文化体験イベント',
    category: '文化体験',
    date: '2024年9月',
    description: '日本の伝統文化を現代的にアレンジした体験型イベント。多世代に親しまれる内容。',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=400'
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
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.service-list {
  list-style: none;
  padding: 0;
}

.service-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
}

.service-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #1976d2;
  font-weight: bold;
}

.process-step {
  display: flex;
  justify-content: center;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.v-section {
  position: relative;
}
</style>