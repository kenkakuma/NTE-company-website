<template>
  <div class="anthropic-theme about-page">
    <!-- Hero Section - Anthropic Style -->
    <section class="about-hero-section">
      <div class="custom-container">
        <div class="hero-content">
          <h1 class="hero-title">企業情報・ニュース</h1>
          <p class="hero-description">
            NO TRACE EXPLORERの最新ニュース、お知らせ、サービス情報をご覧いただけます
          </p>
        </div>
      </div>
    </section>

    <!-- Article List -->
    <section class="articles-section">
      <div class="custom-container">
        <div v-if="!selectedArticle">
          <!-- Articles Grid -->
          <div class="articles-grid">
            <div 
              v-for="article in articles" 
              :key="article.id"
              class="article-card"
              @click="selectArticle(article)"
            >
              <!-- Date Badge -->
              <div class="article-date-badge">
                <div class="month">{{ formatMonth(article.date) }}</div>
                <div class="day">{{ formatDay(article.date) }}</div>
              </div>
              
              <!-- Article Content -->
              <div class="article-content">
                <div class="article-header">
                  <h3 class="article-title">{{ article.title }}</h3>
                  <div class="article-arrow">→</div>
                </div>
                
                <div class="article-meta">
                  <span class="article-category">{{ article.category }}</span>
                  <span class="article-info">{{ article.date }} | {{ article.readTime }}</span>
                </div>
                
                <p class="article-excerpt">{{ article.excerpt }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Article Detail -->
        <div v-else class="article-detail">
          <button 
            class="back-button"
            @click="goBackToList"
          >
            ← 記事一覧に戻る
          </button>
          
          <div class="article-detail-card">
            <div class="article-detail-header">
              <div class="article-detail-meta">
                <span class="detail-category">{{ selectedArticle.category }}</span>
                <span class="detail-info">{{ selectedArticle.date }} | {{ selectedArticle.readTime }}</span>
              </div>
              
              <h1 class="article-detail-title">{{ selectedArticle.title }}</h1>
            </div>
            
            <div 
              class="article-detail-content"
              v-html="selectedArticle.content"
            />
            
            <div class="article-tags">
              <span class="tags-label">タグ:</span>
              <div class="tags-list">
                <span
                  v-for="tag in selectedArticle.tags"
                  :key="tag"
                  class="tag-item"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/types'

// SEO設定
const { setSEO } = useSEO()
setSEO('about')

// Article store integration
const articleStore = useArticleStore()

// 响应式数据
const selectedArticle = ref<Article | null>(null)

// Initialize article store
onMounted(async () => {
  await articleStore.initialize()
  
  // Check for articleId in URL params
  const route = useRoute()
  const articleId = route.query.articleId
  
  if (articleId) {
    const article = articleStore.getArticleById(Number(articleId))
    if (article) {
      selectedArticle.value = article
    }
  }
})

// Get articles from store
const articles = computed(() => articleStore.articles)

// 方法
const selectArticle = (article: Article) => {
  selectedArticle.value = article
  
  // Update URL without page reload
  const router = useRouter()
  router.push({ query: { articleId: article.id } })
}

const goBackToList = () => {
  selectedArticle.value = null
  
  // Clear URL parameter
  const router = useRouter()
  router.push({ query: {} })
}

const formatMonth = (dateStr: string) => {
  const month = dateStr.split('.')[1]
  return month + '月'
}

const formatDay = (dateStr: string) => {
  const day = dateStr.split('.')[2]
  return day
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
.about-hero-section {
  padding: 80px 0 60px 0;
  background-color: #FAF9F7;
  border-bottom: 1px solid #E5E5E5;
}

.hero-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

/* Articles Section */
.articles-section {
  padding: 80px 0;
  background-color: #FAF9F7;
}

.articles-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Article Card */
.article-card {
  display: flex;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-color: #E17B47;
}

.article-date-badge {
  flex-shrink: 0;
  background: #1A1A1A;
  color: white;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  margin-right: 2rem;
  min-width: 80px;
  height: fit-content;
}

.month {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.day {
  font-size: 1.5rem;
  font-weight: 600;
}

.article-content {
  flex: 1;
}

.article-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.article-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1A1A1A;
  line-height: 1.4;
  margin: 0;
  flex: 1;
  margin-right: 1rem;
}

.article-arrow {
  color: #E17B47;
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.article-card:hover .article-arrow {
  opacity: 1;
  transform: translateX(4px);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.article-category {
  background: #E17B47;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.article-info {
  color: #666666;
  font-size: 0.875rem;
}

.article-excerpt {
  color: #333333;
  line-height: 1.6;
  margin: 0;
  font-size: 1rem;
}

/* Article Detail */
.article-detail {
  max-width: 800px;
  margin: 0 auto;
}

.back-button {
  background: none;
  border: none;
  color: #E17B47;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: #1A1A1A;
}

.article-detail-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
}

.article-detail-header {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #E5E5E5;
}

.article-detail-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.detail-category {
  background: #E17B47;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.detail-info {
  color: #666666;
  font-size: 0.875rem;
}

.article-detail-title {
  font-size: 2.5rem;
  font-weight: 500;
  color: #1A1A1A;
  line-height: 1.3;
  margin: 0;
}

.article-detail-content {
  line-height: 1.8;
  color: #333333;
  margin-bottom: 3rem;
  font-size: 1.125rem;
}

.article-detail-content :deep(h3) {
  margin: 2rem 0 1rem 0;
  color: #1A1A1A;
  font-weight: 500;
}

.article-detail-content :deep(ul) {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.article-detail-content :deep(li) {
  margin-bottom: 0.5rem;
}

.article-tags {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid #E5E5E5;
}

.tags-label {
  color: #666666;
  font-weight: 500;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-item {
  background: #F0EDE8;
  color: #333333;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid #E5E5E5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .custom-container {
    padding: 0 16px;
  }
  
  .about-hero-section {
    padding: 60px 0 40px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
  }
  
  .articles-section {
    padding: 60px 0;
  }
  
  .article-card {
    flex-direction: column;
    padding: 1.5rem;
  }
  
  .article-date-badge {
    margin-right: 0;
    margin-bottom: 1rem;
    align-self: flex-start;
  }
  
  .article-detail-card {
    padding: 2rem;
  }
  
  .article-detail-title {
    font-size: 2rem;
  }
  
  .article-detail-content {
    font-size: 1rem;
  }
  
  .article-tags {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>