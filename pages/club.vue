<template>
  <div class="anthropic-theme club-page">
    <!-- Hero Section - Anthropic Style -->
    <section class="club-hero-section">
      <div class="custom-container">
        <div class="hero-content">
          <h1 class="hero-title">クラブ | CLUB</h1>
          <p class="hero-subtitle">会員制コミュニティ</p>
          <p class="hero-description">
            専門家ネットワークと限定サービスで特別な体験を
          </p>
        </div>
      </div>
    </section>

    <!-- Clubs Section -->
    <section class="clubs-section">
      <div class="custom-container">
        <div class="section-header">
          <h2 class="section-title">コミュニティ一覧</h2>
          <p class="section-description">
            興味と専門性を共有する3つの特別なコミュニティ
          </p>
        </div>
        
        <div class="clubs-grid">
          <div 
            v-for="club in clubs" 
            :key="club.id"
            class="club-card"
          >
            <div class="club-image">
              <img :src="club.image" :alt="club.name" />
            </div>
            <div class="club-content">
              <div class="club-header">
                <div class="club-icon">
                  <v-icon :icon="getClubIcon(club.id)" size="32" color="#E17B47"></v-icon>
                </div>
                <h3 class="club-title">{{ club.name }}</h3>
                <div class="club-category">{{ club.category }}</div>
              </div>
              <p class="club-description">{{ club.description }}</p>
              <div class="club-benefits">
                <strong class="benefits-title">会員特典:</strong>
                <ul class="benefits-list">
                  <li v-for="benefit in club.benefits" :key="benefit">
                    {{ benefit }}
                  </li>
                </ul>
              </div>
              <div class="club-stats">
                <span class="member-count">
                  <v-icon icon="mdi-account-group" size="16" color="#666666"></v-icon>
                  {{ club.memberCount }}名
                </span>
              </div>
              <button class="club-button">詳細・入会案内</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Membership Benefits -->
    <section class="membership-benefits-section">
      <div class="custom-container">
        <div class="section-header">
          <h2 class="section-title">会員制サービスの特徴</h2>
          <p class="section-description">
            会員だけが享受できる特別な価値とサービス
          </p>
        </div>
        
        <div class="features-grid">
          <div 
            v-for="feature in membershipFeatures" 
            :key="feature.id"
            class="feature-card"
          >
            <div class="feature-icon">
              <v-icon :icon="getFeatureIcon(feature.id)" size="40" color="white"></v-icon>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Events Calendar -->
    <section class="events-section">
      <div class="custom-container">
        <div class="section-header">
          <h2 class="section-title">今後のイベント</h2>
          <p class="section-description">
            会員限定の特別なイベントとワークショップ (準備中)
          </p>
        </div>
        
        <div class="events-grid events-upcoming">
          <div 
            v-for="event in upcomingEvents" 
            :key="event.id"
            class="event-card"
          >
            <div class="event-date">
              <div class="event-month">{{ formatMonth(event.date) }}</div>
              <div class="event-day">{{ formatDay(event.date) }}</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">{{ event.title }}</h3>
              <div class="event-meta">
                <div class="event-location">
                  <v-icon icon="mdi-map-marker" size="16" color="#666666"></v-icon>
                  {{ event.location }}
                </div>
                <div class="event-time">
                  <v-icon icon="mdi-clock" size="16" color="#666666"></v-icon>
                  {{ event.time }}
                </div>
              </div>
              <div class="event-club-tag">{{ event.club }}</div>
              <p class="event-description">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join CTA -->
    <section class="join-cta-section">
      <div class="custom-container">
        <div class="cta-content">
          <h2 class="cta-title">コミュニティに参加しませんか？</h2>
          <p class="cta-description">
            専門的な知識を共有し、新しいつながりを築きましょう
          </p>
          <div class="cta-buttons">
            <button class="cta-button primary">入会申し込み</button>
            <button class="cta-button secondary">詳細資料請求</button>
          </div>
        </div>
      </div>
    </section>
  </div>
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

// 今後のイベント (準備中)
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
    'outdoor-sports': 'mdi-run',
    'art-culture': 'mdi-palette'
  }
  return icons[clubId] || 'mdi-account-group'
}

const getFeatureIcon = (featureId: number) => {
  const icons: Record<number, string> = {
    1: 'mdi-account-tie',
    2: 'mdi-star',
    3: 'mdi-school',
    4: 'mdi-heart'
  }
  return icons[featureId] || 'mdi-star'
}

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
.club-hero-section {
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
.clubs-section,
.events-section {
  padding: 80px 0;
  background-color: #FAF9F7;
}

.membership-benefits-section {
  padding: 80px 0;
  background-color: #F0EDE8;
}

.join-cta-section {
  padding: 80px 0;
  background-color: #1A1A1A;
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

/* Clubs Grid */
.clubs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.club-card {
  background: #FFFFFF;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
  transition: all 0.3s ease;
}

.club-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-color: #E17B47;
}

.club-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.club-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.club-content {
  padding: 2rem;
}

.club-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.club-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #F0EDE8;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}


.club-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #1A1A1A;
  margin: 0;
  flex: 1;
}

.club-category {
  background: #E17B47;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.club-description {
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.club-benefits {
  margin-bottom: 1.5rem;
}

.benefits-title {
  color: #1A1A1A;
  font-size: 0.875rem;
  font-weight: 600;
  display: block;
  margin-bottom: 0.75rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333333;
  line-height: 1.5;
  font-size: 0.875rem;
}

.benefits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #E17B47;
  font-weight: 600;
}

.club-stats {
  margin-bottom: 1.5rem;
}

.member-count {
  color: #666666;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.club-button {
  width: 100%;
  background: #E17B47;
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.club-button:hover {
  background: #1A1A1A;
  transform: translateY(-1px);
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-color: #E17B47;
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #E17B47;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
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
  font-size: 1rem;
}

/* Events Grid */
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Events Upcoming - Blur Effect */
.events-upcoming {
  filter: blur(3px);
  opacity: 0.6;
  pointer-events: none;
  position: relative;
}

.events-upcoming::after {
  content: '準備中';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(26, 26, 26, 0.9);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.5rem;
  font-weight: 500;
  pointer-events: none;
  z-index: 10;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.event-card {
  background: #FFFFFF;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.event-date {
  background: #F0EDE8;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  text-align: center;
}

.event-month {
  color: #E17B47;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.event-day {
  color: #1A1A1A;
  font-size: 1.5rem;
  font-weight: 600;
}

.event-content {
  padding: 1.5rem;
  flex: 1;
}

.event-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.75rem;
}

.event-meta {
  margin-bottom: 0.75rem;
}

.event-location,
.event-time {
  color: #666666;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-club-tag {
  background: #E17B47;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.event-description {
  color: #666666;
  line-height: 1.6;
  margin: 0;
  font-size: 0.875rem;
}

/* Join CTA Section */
.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 500;
  color: #FFFFFF;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.cta-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: 2px solid transparent;
}

.cta-button.primary {
  background: #E17B47;
  color: white;
  border-color: #E17B47;
}

.cta-button.primary:hover {
  background: transparent;
  color: #E17B47;
  border-color: #E17B47;
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-button.secondary:hover {
  background: white;
  color: #1A1A1A;
}

/* Responsive Design */
@media (max-width: 768px) {
  .custom-container {
    padding: 0 16px;
  }
  
  .club-hero-section,
  .clubs-section,
  .membership-benefits-section,
  .events-section,
  .join-cta-section {
    padding: 60px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title,
  .cta-title {
    font-size: 2rem;
  }
  
  .clubs-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .events-grid {
    grid-template-columns: 1fr;
  }
  
  .event-card {
    flex-direction: column;
  }
  
  .event-date {
    flex-direction: row;
    padding: 1rem;
    min-width: auto;
    justify-content: flex-start;
    gap: 0.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title,
  .cta-title {
    font-size: 1.75rem;
  }
  
  .club-content {
    padding: 1.5rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .event-content {
    padding: 1.25rem;
  }
}
</style>