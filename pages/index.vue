<template>
  <div class="presentation-page anthropic-theme">
    <!-- 页面SEO元数据 -->
    <Head>
      <Title>NO TRACE EXPLORER | 無迹探索株式会社</Title>
      <Meta name="description" content="革新的なソリューションで新たなビジネス価値を創造する企業です。コーヒー事業、展示・イベント運営、技術研究開発など多岐にわたるサービスを提供。" />
    </Head>
    
    <!-- Hero Section - 全屏背景图片设计 -->
    <section class="anthropic-hero">
      <!-- 背景图片层 -->
      <div class="hero-background-image" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
      
      <!-- 遮罩层用于确保文字清晰可见 -->
      <div class="hero-overlay"></div>
      
      <!-- 内容容器 -->
      <v-container class="hero-container" fluid>
        <div class="hero-content-wrapper">
          <!-- 左下角内容区域 -->
          <div class="hero-bottom-left">
            <!-- 主标题 -->
            <h1 class="hero-main-title scroll-animate" v-html="heroContent.title">
            </h1>
            
            <!-- 描述文字 -->
            <p class="hero-description" v-html="heroContent.description">
            </p>
            
            <!-- 产品卡片组 - 横向排列 -->
            <div class="hero-product-cards scroll-animate animate-delay-200">
              <div class="cards-horizontal-layout">
                <!-- 珈琲事業 卡片 -->
                <div class="hero-product-card">
                  <div class="card-header">
                    <span class="card-label">珈琲事業</span>
                  </div>
                  <h3 class="card-title">プレミアムコーヒー商品</h3>
                  <p class="card-description">
                    世界各地から厳選した高品質コーヒー豆を使用し、独自の焙煎技術で最高品質を実現します。
                  </p>
                  <v-btn 
                    class="card-btn primary-btn"
                    color="black"
                    block
                    rounded="lg"
                    size="large"
                    to="/coffee"
                  >
                    コーヒー事業を見る
                  </v-btn>
                </div>
                
                <!-- 展示・イベント運営 卡片 -->
                <div class="hero-product-card">
                  <div class="card-header">
                    <span class="card-label">展示・イベント</span>
                  </div>
                  <h3 class="card-title">文化・芸術企画運営</h3>
                  <p class="card-description">
                    中国現代アートから文化交流まで、革新的な展示とイベントを企画・運営いたします。
                  </p>
                  <v-btn 
                    class="card-btn primary-btn"
                    color="black"
                    block
                    rounded="lg"
                    size="large"
                    to="/exhibition"
                  >
                    展示企画を見る
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- 合并区域 - 按照您的HTML代码设计 -->
    <section class="anthropic-mission-section">
      <div class="custom-container">
        <!-- 标题区域 - 修改为左右布局 -->
        <div class="header-section">
          <div class="header-left">
            <h1 class="main-title">
              NO TRACE EXPLORERでは、<br>
              未知の領域を探索し、<br>
              お客様の長期的な<br>
              価値創造を目指します。
            </h1>
          </div>
          <div class="header-right">
            <p class="description">
              多分野にわたる専門知識と革新的なアプローチにより、複雑な課題に対する総合的なソリューションを提供します。コーヒー事業から技術研究開発まで、4つの専門分野で実世界に測定可能な影響を与えることをお約束します。
            </p>
          </div>
        </div>

        <!-- 卡片区域 -->
        <div class="cards-container">
          <div class="card">
            <div class="card-icon">
              <v-icon size="32" color="#E17B47">mdi-compass-outline</v-icon>
            </div>
            <div>
              <h3 class="card-title">私たちの事業領域</h3>
              <p class="card-content">コーヒー商品開発、総合コンサルティング、展示・技術サービス、サスティナブル調達から文化芸術企画、専門的なアプローチで実現します。</p>
            </div>
          </div>

          <div class="card">
            <div class="card-icon">
              <v-icon size="32" color="#E17B47">mdi-lightbulb-variant-outline</v-icon>
            </div>
            <div>
              <h3 class="card-title">革新を推進する技術力</h3>
              <p class="card-content">最新テクノロジーと従来の手法を組み合わせ、お客様の課題に対して最適なソリューションを提案します。継続的な改善と品質向上に取り組んでいます。</p>
            </div>
          </div>

          <div class="card">
            <div class="card-icon">
              <v-icon size="32" color="#E17B47">mdi-earth</v-icon>
            </div>
            <div>
              <h3 class="card-title">業界変革への取り組み</h3>
              <p class="card-content">50+体験プログラム、15+パートナー企業との協力により、業界の未来を見据えた持続可能な成長モデルを構築し、社会的価値を創造します。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业理念区域 - Anthropic风格 -->
    <section class="anthropic-philosophy-section">
      <v-container class="philosophy-container" fluid>
        <v-row justify="center" align="center">
          <v-col cols="12" lg="6" class="philosophy-content scroll-animate">
            <div class="philosophy-text">
              <span class="philosophy-badge">企業理念</span>
              <h2 class="philosophy-title">
                未知の領域を探索し、革新を創造する
              </h2>
              <p class="philosophy-description">
                無迹探索株式会社では、未踏の分野への挑戦から最も画期的なイノベーションが生まれると信じています。
                倫理的基準を維持しながら境界を押し広げるという私たちのコミットメントが、すべての活動の原動力となっています。
              </p>
              <div class="philosophy-principles">
                <div class="principle-item">
                  <v-icon size="24" color="#f97316" class="principle-icon">mdi-lightbulb-outline</v-icon>
                  <div class="principle-content">
                    <h4 class="principle-title">継続的イノベーション</h4>
                    <p class="principle-desc">最先端技術を取り入れて複雑な課題を解決</p>
                  </div>
                </div>
                <div class="principle-item">
                  <v-icon size="24" color="#f97316" class="principle-icon">mdi-shield-check-outline</v-icon>
                  <div class="principle-content">
                    <h4 class="principle-title">倫理的卓越性</h4>
                    <p class="principle-desc">すべての取り組みにおいて最高水準の誠実性を維持</p>
                  </div>
                </div>
                <div class="principle-item">
                  <v-icon size="24" color="#f97316" class="principle-icon">mdi-account-group-outline</v-icon>
                  <div class="principle-content">
                    <h4 class="principle-title">協働的成長</h4>
                    <p class="principle-desc">相互価値を創造する持続的なパートナーシップの構築</p>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6" class="philosophy-visual scroll-animate animate-delay-200">
            <div class="philosophy-illustration">
              <div class="illustration-container">
                <div class="floating-elements">
                  <div class="element element-1"></div>
                  <div class="element element-2"></div>
                  <div class="element element-3"></div>
                  <div class="element element-4"></div>
                  <div class="element element-5"></div>
                </div>
                <div class="central-glow"></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>


    <!-- 第二区域 - 匹配Anthropic下方区域 -->
    <section class="secondary-hero-section">
      <v-container fluid>
        <div class="secondary-content-wrapper">
          <div class="secondary-hero-card">
            <div class="secondary-header">
              <h2 class="secondary-title">総合サービスリソース</h2>
              <p class="secondary-description">
                コーヒー事業から技術研究開発まで、5つの専門分野で総合的なサービスを展開し、
                お客様のビジネス成長を支える信頼できるパートナーとして価値創造に取り組みます。
              </p>
              <v-btn 
                class="secondary-btn-outline"
                variant="outlined"
                color="black"
                rounded="lg"
                size="large"
                to="/about"
              >
                企業情報を見る
              </v-btn>
            </div>
            
            <div class="model-cards-container">
              <div class="model-card" @click="navigateTo('/lab')">
                <div class="model-header">
                  <span class="model-label">技術研究開発</span>
                </div>
                <h3 class="model-name">ラボ | LAB</h3>
                <v-icon class="model-arrow" size="24">mdi-arrow-right</v-icon>
              </div>
              
              <div class="model-card" @click="navigateTo('/club')">
                <div class="model-header">
                  <span class="model-label">会員制コミュニティ</span>
                </div>
                <h3 class="model-name">クラブ | CLUB</h3>
                <v-icon class="model-arrow" size="24">mdi-arrow-right</v-icon>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- 企業情報 - 简洁表格式布局 -->
    <section class="featured-section">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8">
            <div class="featured-content">
              <!-- 左侧标题 -->
              <div class="featured-left">
                <h2 class="featured-title">企業情報</h2>
              </div>
              
              <!-- 右侧新闻列表 -->
              <div class="featured-right">
                <div class="featured-news-list">
                  <div 
                    v-for="article in latestArticles" 
                    :key="article.id"
                    class="featured-news-item"
                    @click="navigateToArticle(article.id)"
                  >
                    <div class="featured-news-content">
                      <h3 class="featured-news-title">{{ article.title }}</h3>
                      <div class="featured-news-meta">
                        <span class="featured-news-category">{{ article.category }}</span>
                        <span class="featured-news-date">{{ formatDate(article.date) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- 合作伙伴区域 - Anthropic风格 -->
    <section class="anthropic-partners-section">
      <v-container class="partners-container" fluid>
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="anthropic-section-title">
                業界リーダーからの信頼
              </h2>
              <p class="anthropic-section-description animate-delay-200">
                グローバルパートナーとの協働により卓越した成果を提供
              </p>
            </div>

            <div class="partners-logos">
              <!-- 滚动容器 -->
              <div class="partners-scroll-container">
                <!-- 左侧渐变遮罩 -->
                <div class="scroll-fade-left"></div>
                <!-- 右侧渐变遮罩 -->
                <div class="scroll-fade-right"></div>
                
                <!-- 滚动内容 -->
                <div class="partners-scroll-content">
                  <!-- 第一组logo -->
                  <div class="partners-scroll-track">
                    <div 
                      v-for="partner in partnersData" 
                      :key="`first-${partner.id}`"
                      class="partner-logo"
                    >
                      <div class="logo-container">
                        <img 
                          v-if="partner.logoUrl" 
                          :src="partner.logoUrl" 
                          :alt="partner.name"
                          class="partner-logo-image"
                          @error="handleImageError"
                        />
                        <div v-else class="logo-placeholder">
                          <span class="logo-text">{{ partner.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 第二组logo（用于无缝循环） -->
                  <div class="partners-scroll-track">
                    <div 
                      v-for="partner in partnersData" 
                      :key="`second-${partner.id}`"
                      class="partner-logo"
                    >
                      <div class="logo-container">
                        <img 
                          v-if="partner.logoUrl" 
                          :src="partner.logoUrl" 
                          :alt="partner.name"
                          class="partner-logo-image"
                          @error="handleImageError"
                        />
                        <div v-else class="logo-placeholder">
                          <span class="logo-text">{{ partner.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>


    <!-- FAQ常见问题区域 - Anthropic风格 -->
    <section class="anthropic-faq-section">
      <v-container class="faq-container" fluid>
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8">
            <div class="text-center mb-16 scroll-animate">
              <h2 class="anthropic-section-title">
                よくあるご質問
              </h2>
              <p class="anthropic-section-description animate-delay-200">
                無迹探索株式会社のサービスや事業に関するよくあるご質問にお答えします
              </p>
            </div>

            <div class="faq-list">
              <!-- FAQ 1 -->
              <div class="faq-item scroll-animate animate-delay-300" @click="toggleFAQ(1)">
                <div class="faq-question">
                  <h3 class="question-text">無迹探索株式会社の主な事業内容は何ですか？</h3>
                  <div class="question-icon" :class="{ expanded: expandedFAQ === 1 }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="faq-answer" v-show="expandedFAQ === 1">
                  <p>
                    当社は4つの核心事業を展開しています。珈琲事業では高品質コーヒー商品の企画開発・貿易・ブランド展開を、展示・イベント運営では文化・技術・芸術分野の展示企画とイベント運営を、技術研究開発では革新的な技術研究とイノベーション開発を、コミュニティ運営では会員制の専門家ネットワークと限定サービスを提供しています。
                  </p>
                </div>
              </div>

              <!-- FAQ 2 -->
              <div class="faq-item scroll-animate animate-delay-400" @click="toggleFAQ(2)">
                <div class="faq-question">
                  <h3 class="question-text">コーヒー事業の品質管理はどのように行っていますか？</h3>
                  <div class="question-icon" :class="{ expanded: expandedFAQ === 2 }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="faq-answer" v-show="expandedFAQ === 2">
                  <p>
                    当社のコーヒー事業では、豆の選定から最終パッケージングまで全工程で厳格な品質評価を実施しています。世界各地の優良農園と直接的な関係を築き、独自の焙煎技術を活用し、広範囲な味覚テストを行うことで、卓越した品質基準を確保しています。また、サステナブルな調達と品質保証も重視しています。
                  </p>
                </div>
              </div>

              <!-- FAQ 3 -->
              <div class="faq-item scroll-animate animate-delay-500" @click="toggleFAQ(3)">
                <div class="faq-question">
                  <h3 class="question-text">展示・イベント運営ではどのような分野を専門としていますか？</h3>
                  <div class="question-icon" :class="{ expanded: expandedFAQ === 3 }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="faq-answer" v-show="expandedFAQ === 3">
                  <p>
                    文化・芸術展示、技術デモンストレーション、企業イベント、没入型体験デザインを専門としています。美術館展示、技術発表会、製品発表、教育ワークショップなど、様々な業界で革新的な展示空間設計と専門的なイベント運営サービスを提供し、印象的な体験を創造します。
                  </p>
                </div>
              </div>

              <!-- FAQ 4 -->
              <div class="faq-item scroll-animate animate-delay-600" @click="toggleFAQ(4)">
                <div class="faq-question">
                  <h3 class="question-text">コミュニティプログラムへの参加方法や専門サービスの利用方法を教えてください</h3>
                  <div class="question-icon" :class="{ expanded: expandedFAQ === 4 }">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div class="faq-answer" v-show="expandedFAQ === 4">
                  <p>
                    当社ウェブサイトのお問い合わせフォームまたはクラブページから会員機会についてお問い合わせください。コーヒー愛好家クラブ、アウトドアスポーツグループ、文化芸術サークルなど多様なコミュニティプログラムを提供しており、初心者から上級者まで様々なレベルに対応しています。
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>


  </div>
</template>

<script setup lang="ts">
// 导入文章数据
import { getLatestArticles } from '~/data/articles'

// SEO設定
const { setSEO, generateStructuredData } = useSEO()
setSEO('home')

// FAQ交互功能
const expandedFAQ = ref<number | null>(null)

const toggleFAQ = (faqNumber: number) => {
  expandedFAQ.value = expandedFAQ.value === faqNumber ? null : faqNumber
}

// 新闻相关功能
const latestArticles = getLatestArticles(5)

// 合作伙伴数据管理
const partnersData = ref([
  { id: 1, name: 'Shimano', logoUrl: '' },
  { id: 2, name: 'Daiwa', logoUrl: '' },
  { id: 3, name: '東京珈琲', logoUrl: '' },
  { id: 4, name: '東京アートギャラリー', logoUrl: '' },
  { id: 5, name: 'スポーツテック株式会社', logoUrl: '' },
  { id: 6, name: 'イベントソリューション', logoUrl: '' },
  { id: 7, name: 'イノベーションラボ', logoUrl: '' },
  { id: 8, name: 'グローバル貿易', logoUrl: '' }
])

// 图片错误处理
const handleImageError = (event: Event) => {
  console.error('Partner logo failed to load:', event)
}

// 格式化日期函数
const formatDate = (dateString: string): string => {
  // 将 2025.01.15 格式转换为 January 15, 2025
  const [year, month, day] = dateString.split('.')
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  return `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${year}`
}

// 导航到文章详情
const navigateToArticle = (articleId: number) => {
  navigateTo(`/about?article=${articleId}`)
}

// 構造化データ
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateStructuredData())
    }
  ]
})

// 性能优化和滚动动画功能
onMounted(() => {
  // 性能优化：使用 requestAnimationFrame 来优化滚动性能
  let ticking = false
  
  // 创建 Intersection Observer 来检测元素进入视窗
  const observerOptions = {
    threshold: 0.1, // 当10%的元素进入视窗时触发
    rootMargin: '0px 0px -50px 0px' // 提前50px触发动画
  }

  const observer = new IntersectionObserver((entries) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            // 观察到后停止观察该元素，避免重复触发
            observer.unobserve(entry.target)
          }
        })
        ticking = false
      })
      ticking = true
    }
  }, observerOptions)

  // 性能优化：延迟查找动画元素，避免阻塞首屏渲染
  nextTick(() => {
    const animateElements = document.querySelectorAll('.scroll-animate')
    animateElements.forEach((element) => {
      observer.observe(element)
    })
  })

  // 性能优化：预加载关键资源
  const preloadCriticalResources = () => {
    // 预加载字体文件
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    fontLink.as = 'style'
    document.head.appendChild(fontLink)

    // 预加载Material Design Icons
    const iconLink = document.createElement('link')
    iconLink.rel = 'preload'
    iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
    iconLink.as = 'style'
    document.head.appendChild(iconLink)
  }

  // 性能优化：页面可见性API，暂停动画当页面不可见时
  const handleVisibilityChange = () => {
    if (document.hidden) {
      // 页面隐藏时暂停动画
      document.body.style.animationPlayState = 'paused'
    } else {
      // 页面显示时恢复动画
      document.body.style.animationPlayState = 'running'
    }
  }

  // 性能优化：减少重绘和回流
  const optimizeScrollPerformance = () => {
    let scrollTimer: NodeJS.Timeout | null = null
    
    const handleScroll = () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
      
      scrollTimer = setTimeout(() => {
        // 滚动结束后的优化操作
        document.body.classList.remove('scrolling')
      }, 150)
      
      document.body.classList.add('scrolling')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) {
        clearTimeout(scrollTimer)
      }
    }
  }

  // 执行性能优化
  preloadCriticalResources()
  document.addEventListener('visibilitychange', handleVisibilityChange)
  const cleanupScrollOptimization = optimizeScrollPerformance()

  // 清理函数
  onBeforeUnmount(() => {
    observer.disconnect()
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    cleanupScrollOptimization()
  })
})

// Hero section dynamic content
const backgroundImage = ref('https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80')

const heroContent = ref({
  title: '夢の家探しを<br>お手伝いします。',
  description: '商品の香りもとてもよく、お客様にも大変喜ばれております。ヴァルプデートツイス、<br>トチョコレートの利点もあります。悲しい湖の観えも、ウラムコーパー・ルトラム'
})

// 确保heroContent响应式更新
watch(heroContent, () => {
  if (process.client) {
    // 强制重新渲染Hero区域
    nextTick(() => {
      const heroSection = document.querySelector('.anthropic-hero')
      if (heroSection && heroSection instanceof HTMLElement) {
        heroSection.style.opacity = '0.99'
        setTimeout(() => {
          if (heroSection instanceof HTMLElement) {
            heroSection.style.opacity = '1'
          }
        }, 10)
      }
    })
  }
}, { deep: true })

// Load homepage settings
onMounted(() => {
  if (process.client) {
    const savedSettings = localStorage.getItem('homepage_settings')
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings)
        if (settings.backgroundImage) {
          backgroundImage.value = settings.backgroundImage
        }
        if (settings.heroContent) {
          heroContent.value = { ...heroContent.value, ...settings.heroContent }
        }
      } catch (error) {
        console.error('Failed to load homepage settings:', error)
      }
    }
    
    // 确保Hero区域和按钮正确渲染
    nextTick(() => {
      const heroSection = document.querySelector('.anthropic-hero')
      const buttons = document.querySelectorAll('.card-btn')
      
      if (heroSection && heroSection instanceof HTMLElement) {
        // 确保Hero区域显示正常
        heroSection.style.minHeight = '100vh'
        heroSection.style.position = 'relative'
      }
      
      // 强制应用按钮样式 - 统一为黑色实心按钮
      buttons.forEach(btn => {
        if (btn instanceof HTMLElement && btn.classList.contains('primary-btn')) {
          btn.style.setProperty('background', '#1A1A1A', 'important')
          btn.style.setProperty('color', '#FFFFFF', 'important')
          btn.style.setProperty('border', 'none', 'important')
        }
      })
      
      // 检查文字显示
      const heroTitle = document.querySelector('.hero-main-title')
      const heroDesc = document.querySelector('.hero-description')
      if (heroTitle instanceof HTMLElement && heroDesc instanceof HTMLElement) {
        // 确保文字可见
        heroTitle.style.color = 'white'
        heroTitle.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)'
        heroDesc.style.color = 'white'
        heroDesc.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.5)'
      }
    })
    
    // Load partners data
    const savedPartners = localStorage.getItem('partners_data')
    if (savedPartners) {
      try {
        const partners = JSON.parse(savedPartners)
        partnersData.value = partners
      } catch (error) {
        console.error('Failed to load partners data:', error)
      }
    }
  }
})
</script>

<!-- 全局CSS变量定义 -->
<style>
/* 统一配色系统变量 - 基于用户提供的方案 */
:root {
  /* 背景色系 */
  --bg-primary: #FAF9F7;
  --bg-card: #FFFFFF;
  --bg-section: #F0EDE8;
  
  /* 文字色系 */
  --text-primary: #1A1A1A;
  --text-secondary: #333333;
  --text-tertiary: #666666;
  
  /* 按钮色系 */
  --btn-primary: #1A1A1A;
  --btn-primary-text: #FFFFFF;
  --btn-secondary-border: #CCCCCC;
  --btn-secondary-text: #333333;
  
  /* 装饰色系 */
  --accent-orange: #E17B47;
  --line-black: #1A1A1A;
  
  /* 兼容原有变量 */
  --anthropic-bg-primary: var(--bg-primary);
  --anthropic-bg-secondary: var(--bg-section);
  --anthropic-bg-card: var(--bg-card);
  --anthropic-text-primary: var(--text-primary);
  --anthropic-text-secondary: var(--text-secondary);
  --anthropic-text-muted: var(--text-tertiary);
  --anthropic-accent: var(--accent-orange);
  --anthropic-border-light: #e5e7eb;
  --anthropic-border-medium: #d1d5db;
  --anthropic-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --anthropic-shadow-lg: 0 4px 20px rgba(0, 0, 0, 0.08);
  --anthropic-font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
</style>

<style scoped>

/* 基础页面样式 - 匹配原版 */
.presentation-page {
  background: #FAF9F7;
  font-family: var(--anthropic-font-primary);
}

/* ===== 全屏背景图片Hero区域样式 ===== */
.anthropic-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 4rem 0 2rem;
}

/* 背景图片层 - 动态加载 */
.hero-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

/* 遮罩层确保文字清晰可见 */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 2;
}

.hero-container {
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.hero-content-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.hero-bottom-left {
  max-width: 760px;
  padding: 0 0 3rem 1.5rem;
  text-align: left;
}

/* 主标题样式 - 适配全屏背景 */
.hero-main-title {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  color: white !important;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7) !important;
  z-index: 10;
  position: relative;
  margin-bottom: 1.5rem;
  font-family: var(--anthropic-font-primary);
  position: relative;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3);
  opacity: 0;
  animation: titleAppear 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
}

/* 描述文字样式 */
.hero-description {
  font-size: 1.1rem;
  color: white !important;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7) !important;
  z-index: 10;
  position: relative;
  opacity: 0;
  animation: titleAppear 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
}

@keyframes titleAppear {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.title-highlight {
  text-decoration: underline;
  text-decoration-color: #E17B47;
  text-decoration-thickness: 3px;
  text-underline-offset: 4px;
  color: #E17B47;
}

/* 产品卡片容器 */
.hero-product-cards {
  margin-top: 2rem;
  opacity: 0;
  animation: cardsAppear 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
}

@keyframes cardsAppear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.cards-row {
  gap: 1rem;
}

/* 横向卡片布局 */
.cards-horizontal-layout {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: stretch;
}

/* 产品卡片样式 - 适配全屏背景 */
.hero-product-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 260px;
  width: 300px;
  flex-shrink: 0;
}

.hero-product-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25), 0 6px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 1);
}

.card-header {
  margin-bottom: 1rem;
}

.card-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--anthropic-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--anthropic-text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.card-description {
  font-size: 1rem;
  color: var(--anthropic-text-secondary);
  line-height: 1.5;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.card-btn {
  margin-top: auto;
  font-weight: 600;
  font-size: 0.9rem;
  height: 48px;
}

.primary-btn {
  background: #1A1A1A !important;
  color: #FFFFFF !important;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none !important;
}

.primary-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.primary-btn:hover::before {
  left: 100%;
}

.primary-btn:hover {
  background: var(--text-secondary) !important;
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.secondary-btn {
  border: 2px solid rgba(255, 255, 255, 0.8) !important;
  color: white !important;
  background: rgba(255, 255, 255, 0.1) !important;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.secondary-btn:hover {
  background: white !important;
  border-color: white !important;
  color: var(--text-primary) !important;
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}

/* 移动端响应式设计 */
@media (max-width: 768px) {
  .hero-container {
    padding: 0 1rem;
  }
  
  .hero-bottom-left {
    padding: 0 0 2rem 1rem;
    max-width: 100%;
  }
  
  .anthropic-hero {
    min-height: 100dvh;
    padding: 3rem 0 1.5rem;
  }
  
  .hero-main-title {
    font-size: clamp(2rem, 8vw, 3rem);
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .cards-horizontal-layout {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-product-card {
    width: 100%;
    min-height: 200px;
    padding: 1.2rem;
  }
}

/* 平板端 (768px - 991px) 优化 */
@media (min-width: 768px) and (max-width: 991.98px) {
  .anthropic-hero {
    min-height: 75vh;
    padding: 5rem 0 3rem;
  }
  
  .hero-main-title {
    font-size: clamp(2.5rem, 5vw, 3rem);
  }
}

/* 小屏幕移动端 (<480px) */
@media (max-width: 479.98px) {
  .hero-bottom-left {
    padding: 0 0 1.5rem 0.5rem;
  }
  
  .hero-main-title {
    font-size: clamp(1.8rem, 7vw, 2.5rem);
  }
  
  .hero-description {
    font-size: 0.95rem;
  }
}

/* 节点浮动动画 */
@keyframes nodeFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* 连接线发光动画 */
@keyframes lineGlow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
}

/* 滚动触发动画 */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 动画类 */
.scroll-animate {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.in-view {
  opacity: 1;
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-delay-100.in-view {
  animation-delay: 0.1s;
}

.animate-delay-200.in-view {
  animation-delay: 0.2s;
}

.animate-delay-300.in-view {
  animation-delay: 0.3s;
}

.animate-delay-400.in-view {
  animation-delay: 0.4s;
}

.animate-delay-500.in-view {
  animation-delay: 0.5s;
}

/* ===== 第二区域样式 - 匹配Anthropic ===== */
.secondary-hero-section {
  background: #FAF9F7;
  padding: 3rem 0;
  position: relative;
}

.secondary-content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.secondary-hero-card {
  background: #F0EDE8;
  border-radius: 24px;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.secondary-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.secondary-title {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
  margin: 0;
}

.secondary-description {
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
}

.secondary-btn-outline {
  align-self: flex-start;
  border: 1px solid #d1d5db !important;
  color: #1a1a1a !important;
  background: transparent !important;
  font-weight: 600;
  min-width: 180px;
}

.secondary-btn-outline:hover {
  background: #f9fafb !important;
}

.model-cards-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.model-card {
  background: #f8f9fa;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e5e7eb;
}

.model-card:hover {
  background: #f1f3f4;
  transform: translateX(4px);
}

.model-header {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.model-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.model-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.model-arrow {
  color: #6b7280;
  transition: all 0.3s ease;
}

.model-card:hover .model-arrow {
  color: #1a1a1a;
  transform: translateX(4px);
}

/* 响应式设计 */
@media (max-width: 991px) {
  .secondary-hero-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }
  
  .secondary-description {
    max-width: none;
  }
  
  .secondary-btn-outline {
    align-self: center;
  }
  
  .model-cards-container {
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .secondary-hero-section {
    padding: 2.5rem 0;
  }
  
  .secondary-content-wrapper {
    padding: 0 1rem;
  }
  
  .secondary-hero-card {
    padding: 1.5rem;
  }
  
  .secondary-title {
    font-size: 1.5rem;
  }
  
  .secondary-description {
    font-size: 1rem;
  }
  
  .model-card {
    padding: 1.25rem 1.5rem;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .anthropic-hero {
    min-height: 70vh;
    padding: 3rem 0;
  }
  
  .hero-title {
    margin-bottom: 1.5rem;
  }
  
  .hero-subtitle {
    margin-bottom: 2rem;
  }
  
  .hero-cta-group {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-cta-primary,
  .hero-cta-secondary {
    width: 100%;
    max-width: 280px;
  }
}

/* ===== 按照用户HTML代码的样式 ===== */
.anthropic-mission-section {
  background: #FAF9F7;
  font-family: "Noto Sans JP", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.custom-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

/* 上部标题区域 - 修改为左右布局 */
.header-section {
  margin-bottom: 80px;
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.header-left {
  flex: 0 0 40%;
}

.header-right {
  flex: 0 0 60%;
  padding-left: 2rem;
}

.main-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0;
  color: #1a1a1a;
}

.description {
  font-size: 18px;
  line-height: 1.8;
  color: #666;
  margin: 0;
}

/* 卡片区域 */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.card:nth-child(1) {
  background: #F0EDE8;
}

.card:nth-child(2) {
  background: #F0EDE8;
}

.card:nth-child(3) {
  background: #F0EDE8;
}

.card-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.card-content {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .custom-container {
    padding: 40px 15px;
  }

  /* 移动端恢复为上下布局 */
  .header-section {
    flex-direction: column;
    gap: 2rem;
  }

  .header-left {
    flex: none;
  }

  .header-right {
    flex: none;
    padding-left: 0;
  }

  .main-title {
    font-size: 32px;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 16px;
  }

  .cards-container {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 40px;
  }

  .card {
    padding: 30px 25px;
    height: auto;
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 28px;
  }

  .card-title {
    font-size: 20px;
  }
}

.card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--anthropic-text-primary);
  opacity: 0.8;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--anthropic-text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.card-description {
  font-size: 1rem;
  color: var(--anthropic-text-secondary);
  line-height: 1.5;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 991px) {
  .mission-layout {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
  
  .mission-statement {
    padding-right: 0;
  }
  
  .core-values-grid {
    padding-left: 0;
  }
  
  .cards-horizontal-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .anthropic-mission-section {
    padding: 2.5rem 0;
  }
  
  .mission-container {
    padding: 0 1rem;
  }
  
  .mission-layout {
    gap: 3rem;
  }
  
  .value-card {
    padding: 1.5rem;
  }
  
  .mission-title {
    font-size: 2rem;
  }
  
  .values-description p {
    font-size: 1rem;
  }
  
  .cards-horizontal-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* ===== Anthropic风格服务区域样式 ===== */
.anthropic-services-section {
  padding: 8rem 0;
  background: #FAF9F7;
  position: relative;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.anthropic-section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--anthropic-text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  font-family: var(--anthropic-font-primary);
}

.anthropic-section-description {
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 400;
  line-height: 1.6;
  color: var(--anthropic-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.anthropic-services-grid {
  display: grid;
  gap: 1px;
  background: var(--anthropic-border-light);
  border-radius: 16px;
  overflow: hidden;
  margin-top: 4rem;
}

.anthropic-service-item {
  background: #FAF9F7;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-bottom: 1px solid var(--anthropic-border-light);
}

.anthropic-service-item:last-child {
  border-bottom: none;
}

.anthropic-service-item:hover {
  background: #FAF9F7;
  transform: translateX(4px);
}

.service-content {
  max-width: 100%;
}

.service-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--anthropic-text-primary);
  margin: 0;
  line-height: 1.3;
}

.service-arrow {
  color: var(--anthropic-text-muted);
  transition: all 0.3s ease;
  opacity: 0.6;
}

.anthropic-service-item:hover .service-arrow {
  color: var(--anthropic-text-primary);
  opacity: 1;
  transform: translateX(4px);
}

.service-description {
  font-size: 1rem;
  color: var(--anthropic-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.service-tag {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--anthropic-text-muted);
  background: #FAF9F7;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  border: 1px solid var(--anthropic-border-light);
  transition: all 0.3s ease;
}

.anthropic-service-item:hover .service-tag {
  background: #FAF9F7;
  border-color: var(--anthropic-border-medium);
}

/* ===== Anthropic风格统计数据区域样式 ===== */
.anthropic-stats-section {
  padding: 6rem 0;
  background: #FAF9F7;
  position: relative;
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.anthropic-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 1.5rem;
  background: #FAF9F7;
  border-radius: 16px;
  border: 1px solid var(--anthropic-border-light);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--anthropic-accent), #fbbf24);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--anthropic-shadow-lg);
  border-color: var(--anthropic-border-medium);
}

.stat-number {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: var(--anthropic-text-primary);
  line-height: 1;
  margin-bottom: 0.75rem;
  font-family: var(--anthropic-font-primary);
}

.stat-label {
  font-size: 1rem;
  font-weight: 500;
  color: var(--anthropic-text-secondary);
  line-height: 1.4;
  text-transform: capitalize;
}

@media (max-width: 768px) {
  .anthropic-stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1.5rem 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--anthropic-text-primary);
  letter-spacing: -0.02em;
}

.section-description {
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 400;
  line-height: 1.6;
  color: var(--anthropic-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.product-cards-grid {
  margin-top: 3rem;
}

.product-card {
  border: 1px solid var(--anthropic-border-light);
  border-radius: 16px;
  background: #FAF9F7;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  box-shadow: var(--anthropic-shadow-sm);
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--anthropic-shadow-lg);
  border-color: var(--anthropic-border-medium);
}

.product-card:hover::before {
  opacity: 1;
}

.product-card-content {
  padding: 2rem;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-icon-wrapper {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.product-card:hover .product-icon-wrapper {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  transform: scale(1.05);
}

.product-icon {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.product-card:hover .product-icon {
  opacity: 1;
  transform: scale(1.1);
}

.product-title {
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.3;
  color: #1a1a1a;
  letter-spacing: -0.01em;
}

.product-description {
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: #6b7280;
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.product-link {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  transition: all 0.3s ease;
  margin-top: auto;
}

.product-card:hover .product-link {
  color: rgb(var(--v-theme-primary));
  transform: translateX(4px);
}

.product-link .v-icon {
  transition: transform 0.3s ease;
}

.product-card:hover .product-link .v-icon {
  transform: translateX(4px);
}

/* 响应式设计 */
@media (max-width: 960px) {
  .product-cards-section {
    padding: 4rem 0;
  }
  
  .product-card-content {
    padding: 1.5rem;
  }
  
  .product-icon-wrapper {
    width: 64px;
    height: 64px;
    border-radius: 16px;
  }
  
  .product-icon {
    font-size: 36px !important;
  }
  
  .product-title {
    font-size: 1.25rem;
  }
  
  .product-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .product-cards-section {
    padding: 3rem 0;
  }
  
  .section-title {
    margin-bottom: 1rem;
  }
  
  .product-cards-grid {
    margin-top: 2rem;
  }
  
  .product-card-content {
    padding: 1.25rem;
  }
}

/* ===== 特色功能展示区域样式 - Anthropic风格设计 ===== */
.feature-highlight-section {
  padding: 5rem 0;
  background: #FAF9F7;
  position: relative;
}

.feature-highlight-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(102, 126, 234, 0.02) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.feature-cards-grid {
  position: relative;
  z-index: 2;
}

.feature-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.08);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.feature-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.2);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.feature-card:hover .feature-icon-wrapper {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}

.feature-icon {
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  color: #1a1a1a;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 2;
}

.feature-description {
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: #4a5568;
  position: relative;
  z-index: 2;
}

/* 统计数据横条样式 */
.stats-bar {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;
  z-index: 2;
}

.stat-item {
  padding: 1rem 0;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: 0.025em;
}

/* 响应式设计 */
@media (max-width: 960px) {
  .feature-highlight-section {
    padding: 4rem 0;
  }
  
  .feature-card {
    padding: 2rem 1.25rem;
    margin-bottom: 2rem;
  }
  
  .feature-icon-wrapper {
    width: 64px;
    height: 64px;
    border-radius: 20px;
  }
  
  .feature-icon {
    font-size: 32px !important;
  }
  
  .stats-bar {
    padding: 2rem 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .feature-highlight-section {
    padding: 3rem 0;
  }
  
  .feature-card {
    padding: 1.5rem 1rem;
  }
  
  .feature-icon-wrapper {
    width: 56px;
    height: 56px;
    border-radius: 16px;
  }
  
  .feature-icon {
    font-size: 28px !important;
  }
  
  .feature-title {
    font-size: 1.125rem;
  }
  
  .feature-description {
    font-size: 0.875rem;
  }
  
  .stats-bar {
    padding: 2rem 1rem;
  }
  
  .stat-number {
    font-size: 1.75rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
}

/* ===== 视觉内容展示区域样式 - Anthropic风格设计 ===== */
.visual-content-section {
  padding: 8rem 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

.visual-content-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.02) 0%,
    transparent 30%,
    transparent 70%,
    rgba(118, 75, 162, 0.02) 100%
  );
  pointer-events: none;
}

.visual-content-row {
  margin-bottom: 8rem;
  position: relative;
  z-index: 2;
}

.visual-content-row:last-child {
  margin-bottom: 0;
}

.visual-content-text {
  padding: 2rem;
  position: relative;
  z-index: 2;
}

.content-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 0.025em;
  backdrop-filter: blur(10px);
}

.content-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

.content-description {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.7;
  color: #4a5568;
  max-width: 500px;
}

.content-cta {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-primary)) !important;
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  font-weight: 600;
  min-width: 200px;
  height: 48px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-cta:hover {
  background: rgba(102, 126, 234, 0.05) !important;
  transform: translateX(4px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.15);
}

.content-cta .v-icon {
  transition: transform 0.3s ease;
}

.content-cta:hover .v-icon {
  transform: translateX(4px);
}

.visual-content-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.visual-content-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.visual-content-image:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}

.visual-content-image:hover::before {
  opacity: 1;
}

.content-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1.02) contrast(1.05);
}

.visual-content-image:hover .content-img {
  transform: scale(1.05);
  filter: brightness(1.05) contrast(1.1);
}

/* 响应式设计 */
@media (max-width: 960px) {
  .visual-content-section {
    padding: 5rem 0;
  }
  
  .visual-content-row {
    margin-bottom: 5rem;
  }
  
  .visual-content-text {
    padding: 1.5rem;
    text-align: center;
  }
  
  .content-title {
    margin-bottom: 1.5rem;
  }
  
  .content-description {
    margin: 0 auto 2rem;
  }
  
  .content-img {
    height: 300px;
  }
}

@media (max-width: 600px) {
  .visual-content-section {
    padding: 4rem 0;
  }
  
  .visual-content-row {
    margin-bottom: 4rem;
  }
  
  .visual-content-text {
    padding: 1rem;
  }
  
  .content-badge {
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
  }
  
  .content-title {
    margin-bottom: 1rem;
  }
  
  .content-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .content-cta {
    min-width: 100%;
    max-width: 280px;
  }
  
  .content-img {
    height: 250px;
  }
}

/* ===== Anthropic使命陈述区域样式 - 精确匹配版本 ===== */
.anthropic-mission-section {
  padding: 3rem 0;
  background: #FAF9F7;
  position: relative;
}

.mission-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.mission-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
  min-height: 60vh;
}

/* 左侧使命陈述样式 */
.mission-statement {
  padding-right: 2rem;
}

.mission-title {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--anthropic-text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
  font-family: var(--anthropic-font-primary);
}

.mission-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mission-description {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.7;
  color: var(--anthropic-text-secondary);
  margin: 0;
}

/* 右侧三个价值卡片网格 - 水平排列 */
.core-values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.value-card {
  background: #FAF9F7;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--anthropic-border-light);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 220px;
  display: flex;
  flex-direction: column;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--anthropic-shadow-lg);
  border-color: var(--anthropic-border-medium);
}

/* 三种颜色主题的卡片 */
.beige-card {
  background: #fef7ed;
  border-color: #fed7aa;
}

.beige-card:hover {
  background: #fef3e2;
  border-color: #f97316;
}

.mint-card {
  background: #f0fdfa;
  border-color: #a7f3d0;
}

.mint-card:hover {
  background: #ecfdf5;
  border-color: #10b981;
}

.purple-card {
  background: #faf5ff;
  border-color: #d8b4fe;
}

.purple-card:hover {
  background: #f3e8ff;
  border-color: #8b5cf6;
}

/* 卡片内容样式 */
.card-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 1.5rem;
  color: var(--anthropic-text-secondary);
  opacity: 0.7;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.value-card:hover .card-icon {
  opacity: 1;
  transform: scale(1.05);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--anthropic-text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
  flex-shrink: 0;
}

.card-description {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--anthropic-text-secondary);
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .mission-layout {
    gap: 4rem;
  }
}

@media (max-width: 991px) {
  .anthropic-mission-section {
    padding: 2.5rem 0;
  }
  
  .mission-layout {
    grid-template-columns: 1fr;
    gap: 4rem;
    text-align: center;
  }
  
  .mission-statement {
    padding-right: 0;
  }
  
  .core-values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .anthropic-mission-section {
    padding: 2.5rem 0;
  }
  
  .mission-container {
    padding: 0 1rem;
  }
  
  .mission-layout {
    gap: 3rem;
  }
  
  .core-values-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .value-card {
    padding: 1.5rem;
    min-height: 200px;
  }
  
  .card-icon {
    width: 40px;
    height: 40px;
  }
  
  .card-title {
    font-size: 1.125rem;
  }
  
  .card-description {
    font-size: 0.9rem;
  }
}

/* ===== 企业使命陈述区域样式 - Anthropic风格设计 ===== */
.company-mission-section {
  padding: 8rem 0;
  background: #FAF9F7;
  position: relative;
  overflow: hidden;
}

.company-mission-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(102, 126, 234, 0.03) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.mission-content {
  position: relative;
  z-index: 2;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 24px;
  border: 1px solid rgba(102, 126, 234, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
}

.mission-badge {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 0.05em;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.mission-title {
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.3;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  position: relative;
  margin: 0 auto;
  max-width: 800px;
}

.mission-description {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  font-weight: 400;
  line-height: 1.8;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
}

.mission-cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.mission-cta-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  border: none !important;
  font-weight: 600;
  min-width: 180px;
  height: 56px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mission-cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
}

.mission-cta-secondary {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-primary)) !important;
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  font-weight: 600;
  min-width: 180px;
  height: 56px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mission-cta-secondary:hover {
  background: rgba(102, 126, 234, 0.05) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
}

/* 装饰性引用标记 */
.mission-quote-marks {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
}

.quote-mark {
  position: absolute;
  font-size: 8rem;
  font-weight: 900;
  color: rgba(102, 126, 234, 0.08);
  font-family: Georgia, serif;
  line-height: 1;
  user-select: none;
}

.quote-left {
  top: 1rem;
  left: 1rem;
}

.quote-right {
  bottom: 1rem;
  right: 1rem;
  transform: rotate(180deg);
}

/* 响应式设计 */
@media (max-width: 960px) {
  .company-mission-section {
    padding: 5rem 0;
  }
  
  .mission-content {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
  
  .mission-badge {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
  }
  
  .mission-description {
    margin-bottom: 2rem;
  }
  
  .mission-cta-group {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .mission-cta-primary,
  .mission-cta-secondary {
    width: 100%;
    max-width: 300px;
  }
  
  .quote-mark {
    font-size: 6rem;
  }
}

@media (max-width: 600px) {
  .company-mission-section {
    padding: 4rem 0;
  }
  
  .mission-content {
    padding: 2rem 1rem;
    border-radius: 16px;
  }
  
  .mission-badge {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
  
  .mission-title {
    margin-bottom: 1.5rem;
  }
  
  .mission-description {
    margin-bottom: 1.5rem;
  }
  
  .quote-mark {
    font-size: 4rem;
  }
  
  .quote-left {
    top: 0.5rem;
    left: 0.5rem;
  }
  
  .quote-right {
    bottom: 0.5rem;
    right: 0.5rem;
  }
}

/* ===== 三大核心价值区域样式 - Anthropic风格设计 ===== */
.three-pillars-section {
  padding: 6rem 0;
  background: #FAF9F7;
  position: relative;
}

.three-pillars-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center bottom,
    rgba(102, 126, 234, 0.02) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.pillars-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 0.025em;
  backdrop-filter: blur(10px);
}

.pillars-grid {
  position: relative;
  z-index: 2;
}

.pillar-card {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  position: relative;
  overflow: hidden;
}

.pillar-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.pillar-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  border-color: rgba(102, 126, 234, 0.15);
}

.pillar-card:hover::before {
  opacity: 1;
}

.pillar-icon-container {
  position: relative;
  z-index: 2;
}

.pillar-icon-bg {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.pillar-icon-bg::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.pillar-card:hover .pillar-icon-bg {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.4);
}

.pillar-card:hover .pillar-icon-bg::before {
  opacity: 1;
}

.pillar-icon {
  transition: all 0.4s ease;
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2));
}

.pillar-card:hover .pillar-icon {
  transform: scale(1.1);
}

.pillar-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 2;
}

.pillar-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
}

.pillar-description {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

.pillar-features {
  text-align: left;
  position: relative;
  z-index: 2;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
}

.feature-item:last-child {
  margin-bottom: 0;
}

.feature-item span {
  line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 960px) {
  .three-pillars-section {
    padding: 4rem 0;
  }
  
  .pillar-card {
    padding: 2.5rem 1.5rem;
    margin-bottom: 2rem;
  }
  
  .pillar-icon-bg {
    width: 100px;
    height: 100px;
  }
  
  .pillar-icon {
    font-size: 48px !important;
  }
  
  .pillar-title {
    font-size: 1.5rem;
  }
  
  .pillar-subtitle {
    font-size: 0.9rem;
  }
  
  .pillar-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 600px) {
  .three-pillars-section {
    padding: 3rem 0;
  }
  
  .pillar-card {
    padding: 2rem 1.25rem;
  }
  
  .pillar-icon-bg {
    width: 80px;
    height: 80px;
  }
  
  .pillar-icon {
    font-size: 40px !important;
  }
  
  .pillar-title {
    font-size: 1.375rem;
    margin-bottom: 1rem;
  }
  
  .pillar-subtitle {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
  
  .pillar-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .feature-item {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
}

/* ===== 新闻列表区域样式 - Anthropic风格设计 ===== */
.news-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 0.025em;
  backdrop-filter: blur(10px);
}

.news-feed-container {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(10px);
  overflow: hidden;
}


/* ===== 底部行动召唤区域样式 - Anthropic风格设计 ===== */
.cta-bottom-section {
  padding: 6rem 0 4rem;
  background: #FAF9F7;
  position: relative;
  overflow: hidden;
}

.cta-content-wrapper {
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  border: 1px solid rgba(102, 126, 234, 0.1);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.cta-background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at top right,
    rgba(102, 126, 234, 0.03) 0%,
    transparent 50%
  ),
  radial-gradient(
    ellipse at bottom left,
    rgba(118, 75, 162, 0.03) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.cta-main-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
}

.cta-text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cta-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.cta-description {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 2rem;
  max-width: 500px;
}

.cta-buttons-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-primary-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  border: none !important;
  font-weight: 600;
  min-width: 180px;
  height: 56px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
}

.cta-secondary-btn {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
  color: rgb(var(--v-theme-primary)) !important;
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px);
  font-weight: 600;
  min-width: 180px;
  height: 56px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-secondary-btn:hover {
  background: rgba(102, 126, 234, 0.05) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
}

.cta-company-info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.company-info-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: rgba(248, 250, 252, 0.6);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.08);
  backdrop-filter: blur(10px);
}

.company-header {
  text-align: center;
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
  padding-bottom: 1rem;
}

.company-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.company-name-en {
  font-size: 0.9rem;
  font-weight: 500;
  color: #6b7280;
  margin: 0;
  letter-spacing: 0.025em;
}

.company-details {
  padding-top: 1rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 8px;
  margin-top: 0.125rem;
}

.detail-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.detail-value {
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
  line-height: 1.4;
}

.detail-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  transition: color 0.3s ease;
}

.detail-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 960px) {
  .cta-bottom-section {
    padding: 4rem 0 3rem;
  }
  
  .cta-main-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
  
  .cta-text-content {
    order: 1;
    text-align: center;
  }
  
  .cta-company-info {
    order: 2;
  }
  
  .cta-buttons-group {
    justify-content: center;
  }
  
  .company-info-card {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .cta-bottom-section {
    padding: 3rem 0 2rem;
  }
  
  .cta-main-content {
    padding: 1.5rem;
  }
  
  .cta-title {
    margin-bottom: 1rem;
  }
  
  .cta-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .cta-buttons-group {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .cta-primary-btn,
  .cta-secondary-btn {
    width: 100%;
    max-width: 280px;
  }
  
  .company-info-card {
    padding: 1.5rem;
  }
  
  .company-name {
    font-size: 1.125rem;
  }
  
  .detail-item {
    margin-bottom: 0.75rem;
  }
}

/* 统一分割线设计系统 - v1.6.0特性 */
.section-divider {
  position: relative;
  margin: 3rem 0;
  height: 1px;
}

.unified-divider .divider-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(102, 126, 234, 0.1) 15%,
    rgba(102, 126, 234, 0.4) 50%,
    rgba(118, 75, 162, 0.4) 50%,
    rgba(118, 75, 162, 0.1) 85%,
    transparent 100%
  );
}

.unified-divider .divider-pulse-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulseGlow 2.5s ease-in-out infinite;
  box-shadow: 
    0 0 10px rgba(102, 126, 234, 0.4),
    0 0 20px rgba(102, 126, 234, 0.2),
    0 0 30px rgba(102, 126, 234, 0.1);
}

@keyframes pulseGlow {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(1); 
    opacity: 0.8;
    box-shadow: 
      0 0 10px rgba(102, 126, 234, 0.4),
      0 0 20px rgba(102, 126, 234, 0.2),
      0 0 30px rgba(102, 126, 234, 0.1);
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.3); 
    opacity: 1;
    box-shadow: 
      0 0 15px rgba(102, 126, 234, 0.6),
      0 0 25px rgba(102, 126, 234, 0.4),
      0 0 35px rgba(102, 126, 234, 0.2);
  }
}

/* 柔和发光标题 - v1.7.0特性 */
.glow-title {
  font-size: 2.0rem;
  font-weight: 600;
  color: #344767;
  letter-spacing: -0.5px;
  text-shadow: 
    0 0 5px rgba(128, 128, 128, 0.15),
    0 0 10px rgba(128, 128, 128, 0.1),
    0 0 15px rgba(128, 128, 128, 0.05);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
}

.section-subtitle {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-surface));
  opacity: 0.7;
  letter-spacing: 0.1em;
  margin-bottom: 0;
}

/* 服务展示区域样式 */
.services-section {
  padding: 2rem 0;
  background: transparent;
}

/* ===== Anthropic风格交互动画系统 ===== */
/* 滚动触发动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 动画延迟类 */
.animate-on-scroll {
  opacity: 0;
  animation-fill-mode: forwards;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-up {
  animation-name: fadeInUp;
}

.animate-fade-left {
  animation-name: fadeInLeft;
}

.animate-fade-right {
  animation-name: fadeInRight;
}

.animate-scale-in {
  animation-name: scaleIn;
}

.animate-slide-up {
  animation-name: slideInFromBottom;
}

/* 动画延迟 */
.animation-delay-100 { animation-delay: 0.1s; }
.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-300 { animation-delay: 0.3s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-500 { animation-delay: 0.5s; }
.animation-delay-600 { animation-delay: 0.6s; }

/* 高级悬停效果 */
.advanced-hover {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.advanced-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease-in-out;
  pointer-events: none;
}

.advanced-hover:hover::before {
  left: 100%;
}

/* 3D变换效果 */
.transform-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.card-3d {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
}

.card-3d:hover {
  transform: translateY(-12px) rotateX(5deg) rotateY(5deg);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 磁性按钮效果 */
.magnetic-btn {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.magnetic-btn:hover {
  transform: translateY(-2px);
}

.magnetic-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  background: inherit;
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.magnetic-btn:hover::after {
  opacity: 0.3;
}

/* 脉动效果 */
.pulse-effect {
  position: relative;
}

.pulse-effect::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  transform: translate(-50%, -50%);
  animation: pulse 2s infinite;
  opacity: 0;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.3;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
}

/* 文字打字效果 */
.typewriter {
  overflow: hidden;
  border-right: 2px solid transparent;
  white-space: nowrap;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: var(--anthropic-brand-primary); }
}

/* 浮动动画 */
.float-animation {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 渐变背景动画 */
.gradient-animation {
  background: linear-gradient(-45deg, #667eea, #764ba2, #667eea, #764ba2);
  background-size: 400% 400%;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 视窗检测类 */
.in-viewport {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* 微交互反馈 */
.micro-interaction {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.micro-interaction:active {
  transform: scale(0.98);
}

.micro-interaction:focus {
  outline: 2px solid var(--anthropic-focus-ring);
  outline-offset: 2px;
}

/* ===== Anthropic风格配色系统 ===== */
/* 核心颜色变量 */
:root {
  /* 主要色彩 */
  --anthropic-text-primary: #1a1a1a;
  --anthropic-text-secondary: #4a5568;
  --anthropic-text-tertiary: #6b7280;
  --anthropic-text-muted: #9ca3af;
  
  /* 背景色彩 */
  --anthropic-bg-primary: #ffffff;
  --anthropic-bg-secondary: #f8fafc;
  --anthropic-bg-tertiary: #f1f5f9;
  --anthropic-bg-muted: #e2e8f0;
  
  /* 品牌色彩 */
  --anthropic-brand-primary: #667eea;
  --anthropic-brand-secondary: #764ba2;
  --anthropic-accent: #ff6b35;
  
  /* 边框色彩 */
  --anthropic-border-light: rgba(0, 0, 0, 0.06);
  --anthropic-border-medium: rgba(0, 0, 0, 0.12);
  --anthropic-border-dark: rgba(0, 0, 0, 0.2);
  
  /* 阴影色彩 */
  --anthropic-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --anthropic-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --anthropic-shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.08);
  --anthropic-shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.08);
  
  /* 交互状态 */
  --anthropic-hover-bg: rgba(102, 126, 234, 0.05);
  --anthropic-active-bg: rgba(102, 126, 234, 0.1);
  --anthropic-focus-ring: rgba(102, 126, 234, 0.3);
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  :root {
    --anthropic-text-primary: #f9fafb;
    --anthropic-text-secondary: #e5e7eb;
    --anthropic-text-tertiary: #d1d5db;
    --anthropic-text-muted: #9ca3af;
    
    --anthropic-bg-primary: #1a1a1a;
    --anthropic-bg-secondary: #2d3748;
    --anthropic-bg-tertiary: #374151;
    --anthropic-bg-muted: #4a5568;
    
    --anthropic-border-light: rgba(255, 255, 255, 0.1);
    --anthropic-border-medium: rgba(255, 255, 255, 0.2);
    --anthropic-border-dark: rgba(255, 255, 255, 0.3);
    
    --anthropic-hover-bg: rgba(102, 126, 234, 0.15);
    --anthropic-active-bg: rgba(102, 126, 234, 0.25);
  }
}

/* 配色主题类 */
.anthropic-theme {
  color: var(--anthropic-text-primary);
  background-color: var(--anthropic-bg-primary);
}

.anthropic-bg-white {
  background-color: var(--anthropic-bg-primary);
}

.anthropic-bg-gray {
  background-color: var(--anthropic-bg-secondary);
}

.anthropic-bg-light {
  background-color: var(--anthropic-bg-tertiary);
}

.anthropic-text-primary {
  color: var(--anthropic-text-primary);
}

.anthropic-text-secondary {
  color: var(--anthropic-text-secondary);
}

.anthropic-text-muted {
  color: var(--anthropic-text-muted);
}

.anthropic-text-brand {
  color: var(--anthropic-brand-primary);
}

.anthropic-border {
  border-color: var(--anthropic-border-light);
}

.anthropic-border-medium {
  border-color: var(--anthropic-border-medium);
}

.anthropic-shadow-sm {
  box-shadow: var(--anthropic-shadow-sm);
}

.anthropic-shadow-md {
  box-shadow: var(--anthropic-shadow-md);
}

.anthropic-shadow-lg {
  box-shadow: var(--anthropic-shadow-lg);
}

/* 交互状态类 */
.anthropic-hover:hover {
  background-color: var(--anthropic-hover-bg);
  transition: background-color 0.2s ease;
}

.anthropic-focus:focus {
  outline: 2px solid var(--anthropic-focus-ring);
  outline-offset: 2px;
}

/* 品牌渐变 */
.anthropic-gradient-bg {
  background: linear-gradient(135deg, var(--anthropic-brand-primary) 0%, var(--anthropic-brand-secondary) 100%);
}

.anthropic-gradient-subtle {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
}

/* ===== Anthropic风格字体系统 ===== */
/* 主要字体系列 */
:deep(.v-application) {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 标题层次系统 */
.anthropic-h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  color: #1a1a1a;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.anthropic-h2 {
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 600;
  line-height: 1.2;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
}

.anthropic-h3 {
  font-size: clamp(1.5rem, 3vw, 1.875rem);
  font-weight: 600;
  line-height: 1.3;
  color: #1a1a1a;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
}

.anthropic-h4 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 600;
  line-height: 1.3;
  color: #2d3748;
  letter-spacing: -0.005em;
  margin-bottom: 0.875rem;
}

.anthropic-h5 {
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
  color: #2d3748;
  letter-spacing: 0;
  margin-bottom: 0.75rem;
}

.anthropic-h6 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  color: #4a5568;
  letter-spacing: 0.01em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

/* 正文字体系统 */
.anthropic-body-large {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.anthropic-body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1rem;
}

.anthropic-body-small {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6b7280;
  margin-bottom: 0.75rem;
}

.anthropic-caption {
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  color: #9ca3af;
  margin-bottom: 0.5rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

/* 特殊字体样式 */
.anthropic-lead {
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  font-weight: 400;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 2rem;
  max-width: 65ch;
}

.anthropic-quote {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 500;
  line-height: 1.5;
  color: #2d3748;
  font-style: italic;
  margin: 2rem 0;
  position: relative;
}

.anthropic-accent {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
}

/* 链接样式 */
.anthropic-link {
  color: rgb(var(--v-theme-primary));
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  border-bottom: 1px solid transparent;
}

.anthropic-link:hover {
  color: #764ba2;
  border-bottom-color: currentColor;
}

/* 徽章和标签样式 */
.anthropic-badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
  letter-spacing: 0.025em;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
}

/* 按钮字体样式 */
.anthropic-btn-text {
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
}

/* 响应式字体调整 */
@media (max-width: 768px) {
  .anthropic-h1 {
    margin-bottom: 1rem;
  }
  
  .anthropic-h2 {
    margin-bottom: 1rem;
  }
  
  .anthropic-h3 {
    margin-bottom: 0.875rem;
  }
  
  .anthropic-lead {
    margin-bottom: 1.5rem;
  }
  
  .anthropic-body-large {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
}

/* 特殊文本效果 */
.anthropic-gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.anthropic-shadow-text {
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.05);
}

/* Hero Header样式 - 完全匹配原版 */
.page-header {
  min-height: 75vh;
  display: flex;
  align-items: center;
  position: relative;
}

/* 主卡片容器样式 - 完全匹配原版 */
.card {
  background: #ffffff;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
}

.card-body {
  padding: 1.5rem;
}

.blur {
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(255, 255, 255, 0.8);
}

.shadow-blur {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 20px 27px 0 rgba(0, 0, 0, 0.05);
}

.mx-3 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.mx-md-4 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.mt-n6 {
  margin-top: -6rem;
}

/* 底部CTA区域样式 - 匹配原版 */
.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.bg-gray-100 {
  background-color: #f8f9fa;
}

.p-5 {
  padding: 3rem;
}

.border-0 {
  border: 0;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.pe-lg-5 {
  padding-right: 3rem;
}

.ps-lg-5 {
  padding-left: 3rem;
}

.h-100 {
  height: 100%;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.justify-content-between {
  justify-content: space-between;
}

.text-center {
  text-align: center;
}

.text-dark {
  color: #344767;
}

.text-muted {
  color: #67748e;
}

.fw-bold {
  font-weight: 700;
}

.fw-medium {
  font-weight: 500;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mb-0 {
  margin-bottom: 0;
}

.mt-4 {
  margin-top: 1.5rem;
}

.mt-lg-0 {
  margin-top: 0;
}

.lh-lg {
  line-height: 1.625;
}

.small {
  font-size: 0.875em;
}

.px-4 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-3 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.bg-light {
  background-color: #f8f9fa;
}

.rounded-3 {
  border-radius: 0.375rem;
}

.align-items-center {
  align-items: center;
}

.justify-content-between {
  justify-content: space-between;
}

.me-2 {
  margin-right: 0.5rem;
}

.text-primary {
  color: #cb0c9f;
}

.text-decoration-none {
  text-decoration: none;
}

/* 响应式设计 */
@media (max-width: 991px) {
  .mx-md-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  
  .pe-lg-5 {
    padding-right: 1.5rem;
  }
  
  .ps-lg-5 {
    padding-left: 1.5rem;
  }
  
  .mt-lg-0 {
    margin-top: 1.5rem;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem !important;
    white-space: normal !important;
  }
  
  .page-header p {
    font-size: 1rem !important;
    white-space: normal !important;
  }
  
  .mx-3 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  
  .p-5 {
    padding: 2rem;
  }
}

/* ===== 高级动画系统 - Anthropic风格微妙交互 ===== */
/* 滚动触发动画关键帧 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 滚动动画类 */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.in-view {
  opacity: 1;
  transform: translateY(0);
}

.animate-delay-100 {
  transition-delay: 100ms;
}

.animate-delay-200 {
  transition-delay: 200ms;
}

.animate-delay-300 {
  transition-delay: 300ms;
}

.animate-delay-400 {
  transition-delay: 400ms;
}

.animate-delay-500 {
  transition-delay: 500ms;
}

.animate-delay-600 {
  transition-delay: 600ms;
}

/* 3D卡片悬停效果 */
.card-3d {
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-3d:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateZ(20px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 10px 20px rgba(102, 126, 234, 0.1);
}

/* 磁性按钮效果 */
.magnetic-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.magnetic-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.6s ease;
  pointer-events: none;
}

.magnetic-btn:hover::before {
  width: 200px;
  height: 200px;
}

.magnetic-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

/* 脉动效果 */
.pulse-glow {
  position: relative;
}

.pulse-glow::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  transform: translate(-50%, -50%);
  animation: pulse 2s ease-in-out infinite;
  pointer-events: none;
  z-index: -1;
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    opacity: 0.9;
  }
}

/* 文字打字机效果 */
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid rgb(var(--v-theme-primary));
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(var(--v-theme-primary));
  }
}

/* 浮动动画 */
.floating {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 渐变背景动画 */
.animated-gradient {
  background: linear-gradient(-45deg, #667eea, #764ba2, #667eea, #764ba2);
  background-size: 400% 400%;
  animation: gradientShift 6s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 微交互反馈 */
.micro-interaction {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.micro-interaction:hover {
  transform: scale(1.02);
}

.micro-interaction:active {
  transform: scale(0.98);
}

/* 视窗检测类 */
.in-viewport {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* 响应式动画优化 */
@media (max-width: 768px) {
  /* 横向布局在移动端改为垂直布局 */
  .cards-horizontal-layout {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hero-product-card {
    flex: none;
    min-height: 250px;
  }
  
  .card-3d:hover {
    transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(10px);
  }
  
  .scroll-animate {
    transform: translateY(20px);
  }
  
  .typewriter {
    white-space: normal;
    border-right: none;
    animation: none;
  }
}

/* 降低动画效果（为偏好设置考虑） */
@media (prefers-reduced-motion: reduce) {
  .scroll-animate,
  .card-3d,
  .magnetic-btn,
  .pulse-glow,
  .typewriter,
  .floating,
  .animated-gradient,
  .micro-interaction {
    animation: none;
    transition: none;
  }
  
  .scroll-animate {
    opacity: 1;
    transform: none;
  }
}

/* ===== 优化响应式设计 - 完美多设备支持 ===== */
/* 超大屏幕 (2000px+) */
@media (min-width: 2000px) {
  .anthropic-hero {
    min-height: 85vh;
  }
  
  .hero-container {
    max-width: 1400px;
  }
  
  .product-cards-section,
  .feature-highlight-section,
  .cta-bottom-section {
    padding: 8rem 0;
  }
  
  .section-title {
    max-width: 800px;
    margin: 0 auto;
  }
}

/* 大桌面 (1400px - 1999px) */
@media (min-width: 1400px) and (max-width: 1999px) {
  .anthropic-hero {
    min-height: 82vh;
  }
  
  .hero-container {
    max-width: 1200px;
  }
  
  .product-cards-section,
  .feature-highlight-section {
    padding: 6rem 0;
  }
}

/* 中型桌面 (1200px - 1399px) */
@media (min-width: 1200px) and (max-width: 1399px) {
  .hero-title {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
  }
  
  .product-card-content {
    padding: 1.75rem;
  }
  
  .feature-card {
    padding: 2rem 1.25rem;
  }
}

/* 大平板横屏 (992px - 1199px) */
@media (min-width: 992px) and (max-width: 1199px) {
  .anthropic-hero {
    min-height: 75vh;
    padding: 3rem 0;
  }
  
  .hero-title {
    font-size: clamp(2.25rem, 4vw, 3rem);
    line-height: 1.15;
  }
  
  .hero-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
  }
  
  .hero-cta-group {
    flex-direction: row;
    gap: 1rem;
  }
  
  .hero-cta-primary,
  .hero-cta-secondary {
    min-width: 160px;
    height: 48px;
    font-size: 0.9rem;
  }
  
  .product-cards-section {
    padding: 4rem 0;
  }
  
  .product-card-content {
    padding: 1.5rem;
  }
  
  .product-icon-wrapper {
    width: 70px;
    height: 70px;
  }
  
  .product-icon {
    font-size: 42px !important;
  }
  
  .feature-highlight-section {
    padding: 4rem 0;
  }
  
  .feature-card {
    padding: 1.75rem 1.25rem;
  }
  
  .cta-main-content {
    padding: 2.5rem;
    gap: 2rem;
  }
}

/* 平板竖屏 (768px - 991px) */
@media (min-width: 768px) and (max-width: 991px) {
  .anthropic-hero {
    min-height: 70vh;
    padding: 2.5rem 0;
  }
  
  .hero-title {
    font-size: clamp(2rem, 5vw, 2.75rem);
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin-bottom: 1.5rem;
  }
  
  .hero-cta-group {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .hero-cta-primary,
  .hero-cta-secondary {
    width: 100%;
    max-width: 280px;
    height: 48px;
  }
  
  .product-cards-section {
    padding: 3.5rem 0;
  }
  
  .section-title {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
  }
  
  .section-description {
    font-size: 1rem;
  }
  
  .product-cards-grid {
    margin-top: 2.5rem;
  }
  
  .product-card {
    margin-bottom: 1.5rem;
  }
  
  .product-card-content {
    padding: 1.25rem;
  }
  
  .product-icon-wrapper {
    width: 64px;
    height: 64px;
  }
  
  .product-icon {
    font-size: 36px !important;
  }
  
  .feature-highlight-section {
    padding: 3.5rem 0;
  }
  
  .feature-card {
    padding: 1.5rem 1rem;
    margin-bottom: 1.5rem;
  }
  
  .cta-bottom-section {
    padding: 4rem 0 3rem;
  }
  
  .cta-main-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    text-align: center;
  }
  
  .cta-buttons-group {
    justify-content: center;
  }
  
  .company-info-card {
    max-width: 100%;
  }
}

/* 大手机横屏 (576px - 767px) */
@media (min-width: 576px) and (max-width: 767px) {
  .anthropic-hero {
    min-height: 65vh;
    padding: 2rem 0;
  }
  
  .hero-title {
    font-size: clamp(1.75rem, 6vw, 2.25rem);
    line-height: 1.25;
  }
  
  .hero-subtitle {
    font-size: clamp(0.9rem, 4vw, 1.1rem);
    margin-bottom: 1.25rem;
  }
  
  .hero-cta-group {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .hero-cta-primary,
  .hero-cta-secondary {
    width: 100%;
    max-width: 250px;
    height: 44px;
    font-size: 0.9rem;
  }
  
  .product-cards-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 0.75rem;
  }
  
  .section-description {
    font-size: 0.95rem;
  }
  
  .product-cards-grid {
    margin-top: 2rem;
  }
  
  .product-card-content {
    padding: 1rem;
  }
  
  .product-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  
  .product-icon {
    font-size: 32px !important;
  }
  
  .product-title {
    font-size: 1.125rem;
  }
  
  .product-description {
    font-size: 0.875rem;
    line-height: 1.5;
  }
  
  .feature-highlight-section {
    padding: 3rem 0;
  }
  
  .feature-card {
    padding: 1.25rem 0.875rem;
  }
  
  .cta-bottom-section {
    padding: 3rem 0 2rem;
  }
  
  .cta-main-content {
    padding: 1.5rem;
  }
  
  .cta-title {
    font-size: clamp(1.5rem, 5vw, 1.875rem);
  }
  
  .cta-description {
    font-size: 1rem;
  }
  
  .cta-primary-btn,
  .cta-secondary-btn {
    min-width: 140px;
    height: 48px;
  }
}

/* 小手机 (320px - 575px) */
@media (max-width: 575px) {
  .anthropic-hero {
    min-height: 60vh;
    padding: 1.5rem 0;
  }
  
  .hero-title {
    font-size: clamp(1.5rem, 8vw, 2rem);
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }
  
  .hero-subtitle {
    font-size: clamp(0.85rem, 5vw, 1rem);
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .hero-cta-group {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .hero-cta-primary,
  .hero-cta-secondary {
    width: 100%;
    max-width: 220px;
    height: 42px;
    font-size: 0.85rem;
  }
  
  .product-cards-section {
    padding: 2.5rem 0;
  }
  
  .section-title {
    font-size: clamp(1.25rem, 6vw, 1.75rem);
    margin-bottom: 0.5rem;
  }
  
  .section-description {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .product-cards-grid {
    margin-top: 1.5rem;
  }
  
  .product-card {
    margin-bottom: 1rem;
  }
  
  .product-card-content {
    padding: 0.875rem;
  }
  
  .product-icon-wrapper {
    width: 48px;
    height: 48px;
    margin-bottom: 0.75rem;
  }
  
  .product-icon {
    font-size: 28px !important;
  }
  
  .product-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .product-description {
    font-size: 0.8rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  
  .product-link {
    font-size: 0.8rem;
  }
  
  .feature-highlight-section {
    padding: 2.5rem 0;
  }
  
  .feature-card {
    padding: 1rem 0.75rem;
    margin-bottom: 1rem;
  }
  
  .cta-bottom-section {
    padding: 2.5rem 0 1.5rem;
  }
  
  .cta-main-content {
    padding: 1.25rem;
    gap: 1.5rem;
  }
  
  .cta-title {
    font-size: clamp(1.25rem, 6vw, 1.625rem);
    margin-bottom: 1rem;
  }
  
  .cta-description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  
  .cta-buttons-group {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .cta-primary-btn,
  .cta-secondary-btn {
    width: 100%;
    min-width: unset;
    height: 44px;
    font-size: 0.9rem;
  }
  
  .company-info-card {
    padding: 1.5rem;
  }
  
  .company-name {
    font-size: 1.125rem;
  }
  
  .company-name-en {
    font-size: 0.8rem;
  }
  
  .detail-item {
    margin-bottom: 0.75rem;
  }
  
  .detail-icon {
    width: 28px;
    height: 28px;
  }
  
  .detail-label {
    font-size: 0.75rem;
  }
  
  .detail-value {
    font-size: 0.85rem;
  }
}

/* 超小屏幕 (280px - 319px) */
@media (max-width: 319px) {
  .anthropic-hero {
    min-height: 55vh;
    padding: 1rem 0;
  }
  
  .hero-title {
    font-size: 1.375rem;
    line-height: 1.35;
  }
  
  .hero-subtitle {
    font-size: 0.8rem;
  }
  
  .hero-cta-primary,
  .hero-cta-secondary {
    max-width: 200px;
    height: 40px;
    font-size: 0.8rem;
  }
  
  .product-card-content {
    padding: 0.75rem;
  }
  
  .product-icon-wrapper {
    width: 44px;
    height: 44px;
  }
  
  .product-icon {
    font-size: 24px !important;
  }
  
  .cta-main-content {
    padding: 1rem;
  }
  
  /* 客户评价和FAQ区域超小屏幕优化 */
  .anthropic-testimonials-section {
    padding: 3rem 0;
  }
  
  .testimonials-container {
    padding: 0 0.75rem;
  }
  
  .testimonials-grid {
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .testimonial-card {
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  .testimonial-quote {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }
  
  .author-avatar {
    width: 40px;
    height: 40px;
  }
  
  .author-initial {
    font-size: 1rem;
  }
  
  .author-name {
    font-size: 0.9rem;
  }
  
  .author-title {
    font-size: 0.8rem;
  }
  
  .anthropic-faq-section {
    padding: 3rem 0;
  }
  
  .faq-container {
    padding: 0 0.75rem;
  }
  
  .faq-list {
    margin-top: 2rem;
  }
  
  .faq-item {
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 10px;
  }
  
  .question-text {
    font-size: 0.95rem;
  }
  
  .question-icon {
    width: 20px;
    height: 20px;
  }
  
  .faq-answer {
    margin-top: 0.5rem;
    padding-top: 0.5rem;
  }
  
  .faq-answer p {
    font-size: 0.85rem;
  }
}

/* 打印样式优化 */
@media print {
  .scroll-animate,
  .card-3d,
  .magnetic-btn,
  .pulse-glow,
  .floating,
  .animated-gradient {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
  
  .anthropic-hero {
    min-height: auto;
    padding: 2rem 0;
  }
  
  .product-cards-section,
  .feature-highlight-section,
  .cta-bottom-section {
    padding: 1.5rem 0;
  }
  
  .hero-cta-group {
    display: none;
  }
}

/* ===== 性能优化CSS ===== */
/* GPU硬件加速优化 */
.product-card,
.feature-card,
.hero-cta-primary,
.hero-cta-secondary,
.cta-primary-btn,
.cta-secondary-btn {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* 减少重绘和回流 */
.product-icon,
.floating,
.pulse-glow,
.magnetic-btn::before {
  will-change: transform, opacity;
}

/* 滚动时暂停复杂动画以提升性能 */
.scrolling .floating,
.scrolling .pulse-glow::after,
.scrolling .animated-gradient {
  animation-play-state: paused;
}

/* 预加载关键字体 */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* 内容可见性优化 - 懒加载非关键内容 */
.feature-highlight-section,
.cta-bottom-section {
  content-visibility: auto;
  contain-intrinsic-size: 400px;
}

/* 关键渲染路径优化 */
.anthropic-hero {
  contain: layout style paint;
}

.product-cards-section {
  contain: layout;
}

/* 图片加载优化占位符 */
.image-placeholder {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* 减少CLS（累积布局偏移） */
.product-icon-wrapper,
.hero-title,
.section-title {
  min-height: fit-content;
}

/* 优化重复动画性能 */
@supports (animation-timeline: scroll()) {
  .scroll-animate {
    animation: fadeInUp linear;
    animation-timeline: scroll();
    animation-range: entry 0% entry 50%;
  }
}

/* 降低质量模式 - 在低性能设备上自动启用 */
@media (prefers-reduced-data: reduce) {
  .floating,
  .pulse-glow,
  .animated-gradient,
  .magnetic-btn::before {
    animation: none;
  }
  
  .card-3d:hover {
    transform: translateY(-4px);
  }
}

/* 高刷新率屏幕优化 */
@media (min-resolution: 120dpi) {
  .product-card,
  .feature-card {
    transition-duration: 0.2s;
  }
}

/* CPU节能模式适配 */
@media (prefers-reduced-motion: reduce) and (prefers-reduced-data: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 深色模式适配 */
.v-theme--dark .presentation-page {
  background: #121212;
}

.v-theme--dark .card {
  background: rgba(33, 33, 33, 0.8);
}

.v-theme--dark .blur {
  background-color: rgba(33, 33, 33, 0.8);
}

.v-theme--dark .bg-gray-100 {
  background-color: rgba(45, 45, 45, 0.8);
}

.v-theme--dark .bg-light {
  background-color: rgba(55, 55, 55, 0.8);
}

.v-theme--dark .text-dark {
  color: #f7fafc;
}

.v-theme--dark .text-muted {
  color: #e2e8f0;
}

/* ===== 技术能力展示区域样式 ===== */
.anthropic-capabilities-section {
  padding: 8rem 0;
  background: #FAF9F7;
  position: relative;
}

.capabilities-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.capability-card {
  background: #FAF9F7;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  border: 1px solid var(--anthropic-border-light);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.capability-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.03) 0%, rgba(251, 191, 36, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.capability-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--anthropic-shadow-lg);
  border-color: rgba(249, 115, 22, 0.2);
}

.capability-card:hover::before {
  opacity: 1;
}

.capability-icon-wrapper {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  background: rgba(249, 115, 22, 0.1);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.capability-card:hover .capability-icon-wrapper {
  background: rgba(249, 115, 22, 0.15);
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.2);
}

.capability-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--anthropic-text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
  position: relative;
  z-index: 2;
}

.capability-description {
  font-size: 1rem;
  color: var(--anthropic-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

.capability-features {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.feature-item {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--anthropic-accent);
  background: rgba(249, 115, 22, 0.1);
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  border: 1px solid rgba(249, 115, 22, 0.2);
  transition: all 0.3s ease;
}

.capability-card:hover .feature-item {
  background: rgba(249, 115, 22, 0.15);
  border-color: rgba(249, 115, 22, 0.3);
}


/* ===== 企业理念区域样式 ===== */
.anthropic-philosophy-section {
  padding: 3rem 0;
  background: #FAF9F7;
  position: relative;
}

.philosophy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.philosophy-content {
  padding-right: 2rem;
}

.philosophy-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%);
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--anthropic-accent);
  letter-spacing: 0.025em;
  margin-bottom: 1.5rem;
}

.philosophy-title {
  font-size: clamp(1.875rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--anthropic-text-primary);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.philosophy-description {
  font-size: 1.125rem;
  color: var(--anthropic-text-secondary);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 500px;
}

.philosophy-principles {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.principle-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.principle-icon {
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.principle-content {
  flex: 1;
}

.principle-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--anthropic-text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.principle-desc {
  font-size: 1rem;
  color: var(--anthropic-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.philosophy-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.philosophy-illustration {
  width: 400px;
  height: 400px;
  position: relative;
}

.illustration-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.floating-elements {
  position: relative;
  width: 100%;
  height: 100%;
}

.element {
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--anthropic-accent);
  border-radius: 50%;
  opacity: 0.8;
}

.element-1 {
  top: 20%;
  left: 30%;
  animation: elementFloat 6s ease-in-out infinite;
}

.element-2 {
  top: 60%;
  right: 20%;
  animation: elementFloat 6s ease-in-out infinite 1.2s;
}

.element-3 {
  bottom: 30%;
  left: 20%;
  animation: elementFloat 6s ease-in-out infinite 2.4s;
}

.element-4 {
  top: 40%;
  right: 40%;
  animation: elementFloat 6s ease-in-out infinite 3.6s;
}

.element-5 {
  bottom: 20%;
  right: 30%;
  animation: elementFloat 6s ease-in-out infinite 4.8s;
}

.central-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: centralPulse 4s ease-in-out infinite;
}

@keyframes elementFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(180deg);
  }
}

@keyframes centralPulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.6;
  }
}


/* ===== 合作伙伴区域样式 ===== */
.anthropic-partners-section {
  padding: 3rem 0;
  background: #FAF9F7;
  position: relative;
}

.partners-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.partners-logos {
  margin-top: 4rem;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

/* 滚动容器样式 - 优化版本 */
.partners-scroll-container {
  position: relative;
  width: 100%;
  max-width: 1800px;
  height: 140px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

/* 滚动内容 - 修复重叠问题 */
.partners-scroll-content {
  display: flex;
  animation: scrollPartners 35s linear infinite;
  will-change: transform;
  white-space: nowrap;
  flex-shrink: 0;
}

/* 鼠标悬停时暂停动画 */
.partners-scroll-container:hover .partners-scroll-content {
  animation-play-state: paused;
}

/* 滚动轨道 - 修复重叠 */
.partners-scroll-track {
  display: flex;
  gap: 4rem;
  padding-right: 4rem;
  flex-shrink: 0;
  align-items: center;
}

/* 滚动动画 - 优化的循环 */
@keyframes scrollPartners {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 4rem));
  }
}

/* 左侧渐变遮罩 - 减少宽度 */
.scroll-fade-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(to right, #FAF9F7 0%, #FAF9F7 20%, transparent 100%);
  z-index: 2;
  pointer-events: none;
}

/* 右侧渐变遮罩 - 减少宽度 */
.scroll-fade-right {
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 100%;
  background: linear-gradient(to left, #FAF9F7 0%, #FAF9F7 20%, transparent 100%);
  z-index: 2;
  pointer-events: none;
}

.partners-row-single {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1.5rem;
  margin-bottom: 0;
}

/* 保持原有的partners-row样式以防需要回滚 */
.partners-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.partners-row:last-child {
  margin-bottom: 0;
}

.partner-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  width: 280px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.logo-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo-image {
  max-width: 100%;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: grayscale(100%) opacity(0.7);
}

.partner-logo:hover .partner-logo-image {
  filter: grayscale(0%) opacity(1);
  transform: scale(1.05);
}

.logo-placeholder {
  width: 260px;
  height: 120px;
  background: #FAF9F7;
  border: 1px solid var(--anthropic-border-light);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  padding: 10px;
}

.logo-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(251, 191, 36, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.partner-logo:hover .logo-placeholder {
  transform: translateY(-4px);
  box-shadow: var(--anthropic-shadow-sm);
  border-color: var(--anthropic-border-medium);
}

.partner-logo:hover .logo-placeholder::before {
  opacity: 1;
}

.logo-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--anthropic-text-secondary);
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
  text-align: center;
  line-height: 1.3;
  word-break: keep-all;
  white-space: normal;
  max-width: 100%;
}

.partner-logo:hover .logo-text {
  color: var(--anthropic-text-primary);
}

/* ===== 响应式设计优化 ===== */
@media (max-width: 991px) {
  .philosophy-content {
    padding-right: 0;
    margin-bottom: 3rem;
  }
  
  .philosophy-illustration {
    width: 300px;
    height: 300px;
  }
  
  .news-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  
  .news-view-all-btn {
    margin-left: 0;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .news-item.featured {
    grid-row: auto;
  }
  
  .partners-row-single {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  
  /* 平板端滚动样式优化 */
  .partners-scroll-container {
    max-width: 1200px;
    height: 120px;
  }
  
  .partners-scroll-track {
    gap: 3rem;
    padding-right: 3rem;
  }
  
  .partner-logo {
    width: 240px;
    height: 120px;
  }
  
  .scroll-fade-left,
  .scroll-fade-right {
    width: 50px;
  }
  
  .partners-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .anthropic-capabilities-section,
  .anthropic-philosophy-section,
  .featured-news-section,
  .anthropic-partners-section {
    padding: 2.5rem 0;
  }
  
  .capabilities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .capability-card {
    padding: 2rem 1.5rem;
  }
  
  .philosophy-illustration {
    width: 250px;
    height: 250px;
  }
  
  .partners-row-single {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  /* 移动端滚动样式优化 */
  .partners-scroll-container {
    max-width: 100%;
    height: 100px;
  }
  
  .partners-scroll-track {
    gap: 2rem;
    padding-right: 2rem;
  }
  
  .partner-logo {
    width: 200px;
    height: 100px;
  }
  
  .scroll-fade-left,
  .scroll-fade-right {
    width: 40px;
  }
  
  /* 移动端减慢滚动速度 */
  .partners-scroll-content {
    animation-duration: 30s;
  }
  
  .partners-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .logo-placeholder {
    width: 180px;
    height: 80px;
  }
  
  /* 客户评价和FAQ区域移动端样式 */
  .anthropic-testimonials-section {
    padding: 4rem 0;
  }
  
  .testimonials-container {
    padding: 0 1rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  .testimonial-quote {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .anthropic-faq-section {
    padding: 2.5rem 0;
  }
  
  .faq-container {
    padding: 0 1rem;
  }
  
  .faq-list {
    margin-top: 2.5rem;
  }
  
  .faq-item {
    margin-bottom: 0.75rem;
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  .question-text {
    font-size: 1rem;
    line-height: 1.4;
  }
  
  .faq-answer {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
  }
  
  .faq-answer p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}

/* ===== 客户评价区域样式 ===== */
.anthropic-testimonials-section {
  padding: 8rem 0;
  background: #FAF9F7;
  position: relative;
}

.testimonials-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.testimonial-card {
  background: #FAF9F7;
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid var(--anthropic-border-light);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--anthropic-accent), #ff6b35);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--anthropic-shadow-lg);
  border-color: var(--anthropic-border-medium);
}

.testimonial-card:hover::before {
  transform: scaleX(1);
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.testimonial-quote {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--anthropic-text-primary);
  margin-bottom: 2rem;
  quotes: """ """ "'" "'";
  font-style: italic;
  flex-grow: 1;
}

.testimonial-quote::before {
  content: open-quote;
  font-size: 1.5em;
  color: var(--anthropic-accent);
  font-weight: bold;
  margin-right: 0.1em;
}

.testimonial-quote::after {
  content: close-quote;
  font-size: 1.5em;
  color: var(--anthropic-accent);
  font-weight: bold;
  margin-left: 0.1em;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--anthropic-accent), #ff6b35);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-initial {
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
}

.author-info {
  flex-grow: 1;
}

.author-name {
  font-weight: 600;
  color: var(--anthropic-text-primary);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.author-title {
  color: var(--anthropic-text-muted);
  font-size: 0.875rem;
}

/* ===== FAQ区域样式 ===== */
.anthropic-faq-section {
  padding: 3rem 0;
  background: #FAF9F7;
  position: relative;
}

.faq-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.faq-list {
  max-width: 800px;
  margin: 4rem auto 0;
}

.faq-item {
  background: #FAF9F7;
  border-radius: 16px;
  margin-bottom: 1rem;
  border: 1px solid var(--anthropic-border-light);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: 1.5rem 2rem;
  overflow: hidden;
}

.faq-item:hover {
  border-color: var(--anthropic-border-medium);
  box-shadow: var(--anthropic-shadow-sm);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.question-text {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--anthropic-text-primary);
  line-height: 1.5;
  margin: 0;
  flex-grow: 1;
}

.question-icon {
  width: 24px;
  height: 24px;
  color: var(--anthropic-text-muted);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.question-icon.expanded {
  transform: rotate(180deg);
  color: var(--anthropic-accent);
}

.faq-answer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--anthropic-border-light);
  animation: fadeInAnswer 0.3s ease-out;
}

.faq-answer p {
  color: var(--anthropic-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
}

@keyframes fadeInAnswer {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== 企業情報 - 简洁表格式布局 ===== */
.featured-section {
  padding: 3rem 0;
  background: #FAF9F7;
  border-top: 1px solid #E5E5E5;
}

.featured-content {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.featured-left {
  flex: 0 0 200px;
}

.featured-title {
  font-size: 2rem;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0;
  letter-spacing: -0.01em;
}

.featured-right {
  flex: 1;
}

.featured-news-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.featured-news-item {
  background: transparent;
  border-bottom: 1px solid #E5E5E5;
  padding: 1.5rem 0;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.featured-news-item:last-child {
  border-bottom: none;
}

.featured-news-item:hover {
  background: rgba(225, 123, 71, 0.02);
}

.featured-news-item:hover .featured-news-title {
  color: #E17B47;
}

.featured-news-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}

.featured-news-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: #1A1A1A;
  line-height: 1.4;
  margin: 0;
  flex: 1;
  transition: color 0.2s ease;
}

.featured-news-meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
}

.featured-news-category {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666666;
  text-transform: capitalize;
}

.featured-news-date {
  font-size: 0.875rem;
  color: #999999;
  font-weight: 400;
  white-space: nowrap;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .featured-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .featured-left {
    flex: none;
  }
}

@media (max-width: 768px) {
  .featured-section {
    padding: 3rem 0;
  }
  
  .featured-title {
    font-size: 1.75rem;
  }
  
  .featured-news-content {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
  
  .featured-news-title {
    font-size: 1rem;
  }
  
  .featured-news-meta {
    gap: 1rem;
  }
  
  .featured-news-category, 
  .featured-news-date {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .featured-title {
    font-size: 1.5rem;
  }
  
  .featured-news-item {
    padding: 1.25rem 0;
  }
  
  .featured-news-title {
    font-size: 0.95rem;
  }
}
</style>