<template>
  <v-container fluid class="pa-0">
    <!-- Page Header -->
    <v-section class="hero-section">
      <v-container>
        <v-row align="center" class="py-16">
          <v-col cols="12" class="text-center">
            <h1 class="text-h2 text-white mb-4">
              クラブ | CLUB
            </h1>
            <p class="text-h6 text-white opacity-90 mb-6">
              会員制コミュニティ
            </p>
            <p class="text-body-1 text-white opacity-80">
              専門家ネットワークと限定サービスで特別な体験を
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Clubs Section -->
    <v-section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 mb-4">コミュニティ一覧</h2>
            <p class="text-h6 grey--text">
              Our Communities
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col 
            v-for="club in clubs" 
            :key="club.id"
            cols="12" 
            md="6" 
            lg="4"
          >
            <v-card 
              class="fill-height club-card"
              variant="outlined"
              hover
            >
              <v-img
                :src="club.image"
                height="200"
                cover
              />
              <v-card-title class="d-flex align-center">
                <v-icon 
                  :icon="getClubIcon(club.id)" 
                  color="primary"
                  class="mr-2"
                />
                {{ club.name }}
              </v-card-title>
              <v-card-subtitle>
                {{ club.category }}
              </v-card-subtitle>
              <v-card-text>
                <p class="mb-3">{{ club.description }}</p>
                <div class="mb-3">
                  <strong>会員特典:</strong>
                  <ul class="benefit-list mt-2">
                    <li v-for="benefit in club.benefits" :key="benefit">
                      {{ benefit }}
                    </li>
                  </ul>
                </div>
                <div class="d-flex align-center">
                  <v-icon icon="mdi-account-group" size="small" class="mr-1" />
                  <span class="text-body-2">{{ club.memberCount }}名</span>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn 
                  color="primary" 
                  variant="outlined"
                  block
                >
                  詳細・入会案内
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Membership Benefits -->
    <v-section class="py-16 bg-grey-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 mb-4">会員制サービスの特徴</h2>
            <p class="text-h6 grey--text">
              Membership Benefits
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col 
            v-for="feature in membershipFeatures" 
            :key="feature.id"
            cols="12" 
            md="6" 
            lg="3"
          >
            <div class="text-center">
              <div class="feature-icon mb-4">
                <v-icon 
                  :icon="feature.icon" 
                  size="x-large" 
                  color="white"
                />
              </div>
              <h3 class="text-h6 mb-2">{{ feature.title }}</h3>
              <p class="text-body-2 grey--text">{{ feature.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Events Calendar -->
    <v-section class="py-16">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="text-h3 mb-4">今後のイベント</h2>
            <p class="text-h6 grey--text">
              Upcoming Events
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col 
            v-for="event in upcomingEvents" 
            :key="event.id"
            cols="12" 
            md="6"
          >
            <v-card variant="outlined" class="event-card">
              <v-row no-gutters>
                <v-col cols="auto" class="d-flex align-center pa-4">
                  <div class="event-date text-center">
                    <div class="text-caption primary--text font-weight-bold">
                      {{ formatMonth(event.date) }}
                    </div>
                    <div class="text-h6 primary--text font-weight-bold">
                      {{ formatDay(event.date) }}
                    </div>
                  </div>
                </v-col>
                <v-col class="pa-4">
                  <h3 class="text-h6 mb-2">{{ event.title }}</h3>
                  <div class="d-flex align-center mb-2">
                    <v-icon icon="mdi-map-marker" size="small" class="mr-1" />
                    <span class="text-body-2">{{ event.location }}</span>
                  </div>
                  <div class="d-flex align-center mb-2">
                    <v-icon icon="mdi-clock" size="small" class="mr-1" />
                    <span class="text-body-2">{{ event.time }}</span>
                  </div>
                  <v-chip
                    :color="getClubColor(event.club)"
                    size="small"
                    class="mb-2"
                  >
                    {{ event.club }}
                  </v-chip>
                  <p class="text-body-2 mb-0">{{ event.description }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Join CTA -->
    <v-section class="py-16 bg-primary">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="text-h3 text-white mb-4">
              コミュニティに参加しませんか？
            </h2>
            <p class="text-h6 text-white opacity-90 mb-6">
              専門的な知識を共有し、新しいつながりを築きましょう
            </p>
            <v-btn
              color="white"
              size="large"
              variant="elevated"
              class="ma-2"
            >
              入会申し込み
            </v-btn>
            <v-btn
              color="white"
              size="large"
              variant="outlined"
              class="ma-2"
            >
              詳細資料請求
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-section>
  </v-container>
</template>

<script setup lang="ts">
// SEO設定
const { setSEO } = useSEO()
setSEO('club')

// クラブデータ
const clubs = [
  {
    id: 'coffee-lovers',
    name: 'コーヒー愛好家クラブ',
    category: '飲料文化',
    description: '高品質コーヒーの知識を深め、愛好家同士の交流を楽しむコミュニティ',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300',
    memberCount: '120+',
    benefits: [
      '限定コーヒー豆の先行購入',
      '専門家によるテイスティング講座',
      '産地直送コーヒーツアー',
      '焙煎体験ワークショップ'
    ]
  },
  {
    id: 'outdoor-sports',
    name: 'アウトドアスポーツクラブ',
    category: 'スポーツ',
    description: '釣り・スキー・ゴルフなど多彩なアウトドアスポーツを楽しむアクティブコミュニティ',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300',
    memberCount: '80+',
    benefits: [
      '専門ガイド付きツアー',
      '最新器具の試用・割引',
      '技術向上セミナー',
      'プライベートレッスン'
    ]
  },
  {
    id: 'art-culture',
    name: '文化芸術サークル',
    category: '文化芸術',
    description: '展示鑑賞・アート制作・文化イベントを通じて芸術への理解を深めるコミュニティ',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300',
    memberCount: '95+',
    benefits: [
      '展示会の優先予約・割引',
      'アーティストとの交流会',
      '創作ワークショップ',
      'ギャラリーツアー'
    ]
  }
]

// 会員制サービスの特徴
const membershipFeatures = [
  {
    id: 1,
    title: '専門家ネットワーク',
    description: '各分野の専門家との直接的なつながり',
    icon: 'mdi-account-tie'
  },
  {
    id: 2,
    title: '限定イベント',
    description: '会員限定の特別なイベントや体験',
    icon: 'mdi-star'
  },
  {
    id: 3,
    title: '学習機会',
    description: '継続的なスキルアップとナレッジシェア',
    icon: 'mdi-school'
  },
  {
    id: 4,
    title: 'コミュニティ',
    description: '同じ興味を持つ仲間との深いつながり',
    icon: 'mdi-heart'
  }
]

// 今後のイベント
const upcomingEvents = [
  {
    id: 1,
    title: 'プレミアムコーヒーテイスティング',
    date: '2025.02.15',
    time: '14:00-16:00',
    location: '中目黒スペース',
    club: 'コーヒー愛好家',
    description: '世界各地の希少コーヒー豆を専門家と一緒にテイスティング'
  },
  {
    id: 2,
    title: '春のフライフィッシング体験',
    date: '2025.03.20',
    time: '6:00-15:00',
    location: '丹沢湖',
    club: 'アウトドアスポーツ',
    description: '経験豊富なガイドと一緒に春の釣りを楽しみましょう'
  },
  {
    id: 3,
    title: '現代アート鑑賞ツアー',
    date: '2025.03.25',
    time: '10:00-12:00',
    location: '六本木アートミュージアム',
    club: '文化芸術',
    description: 'キュレーターによる解説付きの特別鑑賞ツアー'
  },
  {
    id: 4,
    title: 'ゴルフレッスン & 懇親会',
    date: '2025.04.10',
    time: '9:00-17:00',
    location: '都内ゴルフ場',
    club: 'アウトドアスポーツ',
    description: 'プロによる個別レッスンと会員同士の交流'
  }
]

// メソッド
const formatMonth = (dateStr: string) => {
  const month = dateStr.split('.')[1]
  return month + '月'
}

const formatDay = (dateStr: string) => {
  const day = dateStr.split('.')[2]
  return day
}

const getClubIcon = (clubId: string) => {
  const icons: Record<string, string> = {
    'coffee-lovers': 'mdi-coffee',
    'outdoor-sports': 'mdi-hiking',
    'art-culture': 'mdi-palette'
  }
  return icons[clubId] || 'mdi-account-group'
}

const getClubColor = (clubName: string) => {
  const colors: Record<string, string> = {
    'コーヒー愛好家': 'brown',
    'アウトドアスポーツ': 'green',
    '文化芸術': 'purple'
  }
  return colors[clubName] || 'primary'
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.club-card {
  transition: all 0.3s ease;
}

.club-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.benefit-list {
  list-style: none;
  padding: 0;
}

.benefit-list li {
  position: relative;
  padding-left: 16px;
  margin-bottom: 4px;
  font-size: 14px;
}

.benefit-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #1976d2;
  font-weight: bold;
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.event-card {
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.event-date {
  background: rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  padding: 12px 16px;
  min-width: 80px;
}

.v-section {
  position: relative;
}
</style>