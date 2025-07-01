<template>
  <v-container fluid class="pa-0">
    <!-- Page Header -->
    <v-section class="hero-section">
      <v-container>
        <v-row align="center" class="py-16">
          <v-col cols="12" class="text-center">
            <h1 class="text-h2 text-white mb-4">
              ラボ | LAB
            </h1>
            <p class="text-h6 text-white opacity-90 mb-6">
              技術研究・イノベーション
            </p>
            <p class="text-body-1 text-white opacity-80">
              最先端技術とイノベーションで未来を創造
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Research Areas -->
    <v-section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 mb-4">研究開発領域</h2>
            <p class="text-h6 grey--text">
              Research & Development Areas
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col 
            v-for="area in researchAreas" 
            :key="area.id"
            cols="12" 
            md="6" 
            lg="4"
          >
            <v-card 
              class="fill-height pa-6"
              variant="outlined"
              hover
            >
              <div class="text-center mb-4">
                <v-icon 
                  :icon="area.icon" 
                  size="x-large" 
                  color="primary"
                />
              </div>
              <v-card-title class="justify-center">
                {{ area.title }}
              </v-card-title>
              <v-card-text>
                <p class="text-body-2 mb-4">{{ area.description }}</p>
                <ul class="feature-list">
                  <li v-for="feature in area.features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Sports Technology -->
    <v-section class="py-16 bg-grey-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 mb-4">スポーツテクノロジー</h2>
            <p class="text-h6 grey--text">
              Sports Technology Innovation
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col 
            v-for="sport in sportsProjects" 
            :key="sport.id"
            cols="12" 
            md="6"
          >
            <v-card class="fill-height" variant="outlined">
              <v-img
                :src="sport.image"
                height="200"
                cover
              />
              <v-card-title>
                {{ sport.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ sport.category }}
              </v-card-subtitle>
              <v-card-text>
                <p class="mb-3">{{ sport.description }}</p>
                <div class="d-flex flex-wrap">
                  <v-chip
                    v-for="tech in sport.technologies"
                    :key="tech"
                    size="small"
                    variant="outlined"
                    class="mr-1 mb-1"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
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

    <!-- Innovation Process -->
    <v-section class="py-16">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="text-h3 mb-6">イノベーション創出プロセス</h2>
            <div class="mb-6">
              <h3 class="text-h6 mb-2">1. 調査・分析</h3>
              <p class="text-body-1 grey--text text--darken-1 mb-4">
                市場動向や技術トレンドを徹底的に調査・分析し、イノベーションの機会を特定します。
              </p>
              
              <h3 class="text-h6 mb-2">2. 研究・開発</h3>
              <p class="text-body-1 grey--text text--darken-1 mb-4">
                最新技術と創造的アイデアを組み合わせた革新的なソリューションを開発します。
              </p>
              
              <h3 class="text-h6 mb-2">3. 実証・検証</h3>
              <p class="text-body-1 grey--text text--darken-1 mb-4">
                プロトタイプの作成と実証実験により、技術の有効性を検証します。
              </p>
              
              <h3 class="text-h6 mb-2">4. 実用化・展開</h3>
              <p class="text-body-1 grey--text text--darken-1">
                実証された技術の実用化と市場展開をサポートします。
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400"
              height="400"
              cover
              class="rounded-lg"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Partnership -->
    <v-section class="py-16 bg-grey-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 mb-6">パートナーシップ</h2>
            <p class="text-h6 grey--text mb-8">
              Research Partnerships
            </p>
            <div class="partnership-grid">
              <v-card
                v-for="partner in partners"
                :key="partner.id"
                class="pa-4 ma-2"
                variant="outlined"
              >
                <div class="text-center">
                  <v-icon 
                    :icon="partner.icon" 
                    size="large" 
                    color="primary"
                    class="mb-2"
                  />
                  <div class="text-h6">{{ partner.name }}</div>
                  <div class="text-body-2 grey--text">{{ partner.type }}</div>
                </div>
              </v-card>
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
setSEO('lab')

// 研究領域データ
const researchAreas = [
  {
    id: 'sports-tech',
    title: 'スポーツテクノロジー',
    icon: 'mdi-run',
    description: 'フィッシング・スキー・ゴルフ技術の革新',
    features: [
      '釣具・スキー用品の技術開発',
      'パフォーマンス分析システム',
      'トレーニング効率化技術',
      'スポーツ体験の向上'
    ]
  },
  {
    id: 'ai-iot',
    title: 'AI・IoTテクノロジー',
    icon: 'mdi-brain',
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
    icon: 'mdi-leaf',
    description: '持続可能な社会実現のための技術',
    features: [
      '環境配慮型材料開発',
      'エネルギー効率化技術',
      'リサイクル技術革新',
      'カーボンニュートラル'
    ]
  }
]

// スポーツプロジェクト
const sportsProjects = [
  {
    id: 1,
    title: 'AI釣具選択システム',
    category: 'フィッシング技術',
    description: 'AIが水域・気象条件・魚種に基づいて最適な釣具を提案するシステム',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400',
    technologies: ['AI', 'ビッグデータ', 'モバイルアプリ']
  },
  {
    id: 2,
    title: 'スマートスキー解析',
    category: 'スキー技術',
    description: 'センサー技術によるスキー技術の可視化・分析システム',
    image: 'https://images.unsplash.com/photo-1551524164-6cf2ac40fcb4?w=600&h=400',
    technologies: ['IoTセンサー', '3D解析', 'リアルタイム']
  },
  {
    id: 3,
    title: 'ゴルフスイング最適化',
    category: 'ゴルフ技術',
    description: '高精度センサーによるスイング解析と個人最適化技術',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034d?w=600&h=400',
    technologies: ['モーション解析', 'AR', 'パーソナライズ']
  },
  {
    id: 4,
    title: 'エクスペリエンスデザイン',
    category: '体験設計',
    description: 'デジタル技術を活用した革新的なスポーツ体験の設計',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400',
    technologies: ['VR/AR', 'UX設計', 'デジタルツイン']
  }
]

// パートナー
const partners = [
  {
    id: 1,
    name: '大学研究機関',
    type: '学術パートナー',
    icon: 'mdi-school'
  },
  {
    id: 2,
    name: 'テクノロジー企業',
    type: '技術パートナー',
    icon: 'mdi-chip'
  },
  {
    id: 3,
    name: 'スポーツ団体',
    type: '実証パートナー',
    icon: 'mdi-trophy'
  },
  {
    id: 4,
    name: '投資機関',
    type: '資金パートナー',
    icon: 'mdi-currency-usd'
  }
]
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
}

.feature-list li::before {
  content: '⚡';
  position: absolute;
  left: 0;
  color: #1976d2;
}

.partnership-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.v-section {
  position: relative;
}
</style>