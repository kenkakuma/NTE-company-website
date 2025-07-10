<template>
  <section class="py-5">
    <div class="container">
      <!-- 标题区域 -->
      <div class="row">
        <div class="col-lg-10 col-md-12 mx-auto text-center">
          <div class="divider-dot"></div>
          <h2 class="text-gradient mb-2">企業最新情報</h2>
          <p class="text-h6 text-muted mb-4">CORPORATE NEWS & UPDATES</p>
          <div class="mx-auto mb-6" style="max-width: 600px;">
            <p class="text-body-1 text-muted mb-2">
              NO TRACE EXPLORERの最新ニュース、お知らせ、サービス情報をご覧いただけます。
            </p>
            <p class="text-body-1 text-muted">
              企業の成長と革新的な取り組みを随時更新しています。
            </p>
          </div>
        </div>
      </div>

      <!-- 新闻列表 -->
      <div class="row">
        <div class="col-lg-10 col-md-12 mx-auto">
          <div 
            v-for="(article, index) in articles" 
            :key="article.id"
            class="news-card card mb-4"
            :style="{ animationDelay: `${index * 150}ms` }"
            @click="handleArticleClick(article)"
          >
            <div class="card-body">
              <div class="row align-items-center">
                <!-- 日期徽章 -->
                <div class="col-auto">
                  <div class="date-badge">
                    <div class="date-month">{{ formatMonth(article.date) }}</div>
                    <div class="date-day">{{ formatDay(article.date) }}</div>
                  </div>
                </div>

                <!-- 文章内容 -->
                <div class="col">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span 
                      class="badge category-badge"
                      :style="{ backgroundColor: getCategoryColor(article.category) }"
                    >
                      <i class="material-icons me-1" style="font-size: 14px;">
                        {{ getCategoryIcon(article.category) }}
                      </i>
                      {{ article.category }}
                    </span>
                    
                    <div class="d-flex align-items-center text-muted">
                      <i class="material-icons me-1" style="font-size: 16px;">schedule</i>
                      <span class="small">{{ article.readTime }}</span>
                    </div>
                  </div>

                  <h3 class="news-title mb-2">{{ article.title }}</h3>

                  <p class="news-excerpt text-muted mb-3">{{ article.excerpt }}</p>

                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex flex-wrap">
                      <span 
                        v-for="tag in article.tags.slice(0, 3)"
                        :key="tag"
                        class="tag-item badge badge-light me-1 mb-1"
                      >
                        {{ tag }}
                      </span>
                      <span 
                        v-if="article.tags.length > 3"
                        class="tag-item badge badge-light me-1 mb-1"
                      >
                        +{{ article.tags.length - 3 }}
                      </span>
                    </div>

                    <div class="news-arrow">
                      <i class="material-icons">chevron_right</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 查看更多按钮 -->
          <div class="text-center mt-5">
            <NuxtLink 
              to="/about"
              class="btn btn-primary btn-lg"
              @click="handleViewAllClick"
            >
              <i class="material-icons me-2">newspaper</i>
              すべてのニュースを見る
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getLatestArticles } from '~/data/articles'
import type { Article } from '~/types'

// 获取最新文章
const articles: Article[] = getLatestArticles(5)

// 分类颜色映射
const categoryColors: Record<string, string> = {
  '企業ニュース': '#667eea',
  'サービス': '#28a745',
  'コーヒー事業': '#8d4925',
  '展示・イベント': '#6f42c1',
  '釣具・器具': '#007bff',
  'LAB・研究開発': '#fd7e14',
  'クラブ活動': '#e91e63'
}

// 分类图标映射
const categoryIcons: Record<string, string> = {
  '企業ニュース': 'business',
  'サービス': 'settings',
  'コーヒー事業': 'local_cafe',
  '展示・イベント': 'event',
  '釣具・器具': 'build',
  'LAB・研究開発': 'science',
  'クラブ活動': 'group'
}

// 方法
const getCategoryColor = (category: string): string => {
  return categoryColors[category] || '#6c757d'
}

const getCategoryIcon = (category: string): string => {
  return categoryIcons[category] || 'info'
}

const handleArticleClick = (article: Article) => {
  navigateTo(`/about#article-${article.id}`)
}

const handleViewAllClick = () => {
  // 可以在这里添加分析代码
}

const formatMonth = (dateStr: string): string => {
  const month = dateStr.split('.')[1]
  return month + '月'
}

const formatDay = (dateStr: string): string => {
  return dateStr.split('.')[2]
}
</script>

<style scoped>
/* ===== Material Kit样式 ===== */
.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* 标题样式 */
.text-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.divider-dot {
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  animation: pulseGlow 2.5s ease-in-out infinite;
  box-shadow: 
    0 0 10px rgba(102, 126, 234, 0.6),
    0 0 20px rgba(102, 126, 234, 0.4);
}

@keyframes pulseGlow {
  0%, 100% { 
    transform: scale(1); 
    opacity: 0.8;
  }
  50% { 
    transform: scale(1.3); 
    opacity: 1;
  }
}

/* 新闻卡片样式 */
.news-card {
  background: white;
  border: 0;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  animation: slideInUp 0.6s ease forwards;
  overflow: hidden;
  position: relative;
}

.news-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

.news-card:hover::before {
  transform: scaleY(1);
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.15);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-body {
  padding: 1.8rem;
  position: relative;
  z-index: 2;
}

/* 日期徽章 */
.date-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 12px 16px;
  min-width: 80px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

.date-month {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.9;
  line-height: 1;
}

.date-day {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  margin-top: 2px;
}

/* 分类徽章 */
.category-badge {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  color: white;
  border: none;
}

/* 文章内容 */
.news-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.news-card:hover .news-title {
  color: #667eea;
}

.news-excerpt {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 标签 */
.tag-item {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background-color: #f8f9fa !important;
  color: #666 !important;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  text-decoration: none;
}

/* 箭头 */
.news-arrow {
  color: #667eea;
  transition: all 0.3s ease;
}

.news-card:hover .news-arrow {
  transform: translateX(5px);
  color: #764ba2;
}

/* 按钮样式 */
.btn {
  border: 1px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  padding: 0.625rem 1.25rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 4px 7px -1px rgba(102, 126, 234, 0.5), 0 2px 4px -1px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(102, 126, 234, 0.4), 0 3px 6px rgba(102, 126, 234, 0.3);
  text-decoration: none;
  color: #ffffff;
}

.btn-lg {
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.875rem 1.75rem;
}

/* Bootstrap Grid System */
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.col,
.col-auto,
.col-lg-10 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col {
  flex: 1 0 0%;
}

.col-lg-10 {
  flex: 0 0 auto;
  width: 83.333333%;
}

@media (max-width: 991px) {
  .col-lg-10 {
    width: 100%;
  }
}

/* 工具类 */
.text-center { text-align: center; }
.text-muted { color: #67748e !important; }
.text-h6 { font-size: 1.25rem; font-weight: 500; }
.text-body-1 { font-size: 1rem; line-height: 1.6; }

.mx-auto { margin-left: auto; margin-right: auto; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.mb-4 { margin-bottom: 1.5rem; }
.mb-5 { margin-bottom: 3rem; }
.mb-6 { margin-bottom: 4rem; }
.mt-5 { margin-top: 3rem; }
.me-1 { margin-right: 0.25rem; }
.me-2 { margin-right: 0.5rem; }

.d-flex { display: flex; }
.align-items-center { align-items: center; }
.justify-content-between { justify-content: space-between; }
.flex-wrap { flex-wrap: wrap; }

.small { font-size: 0.875rem; }

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.375rem;
}

.badge-light {
  background-color: #f8f9fa;
  color: #6c757d;
}

/* 响应式设计 */
@media (max-width: 767px) {
  .text-gradient {
    font-size: 1.8rem;
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .date-badge {
    min-width: 70px;
    padding: 10px 12px;
  }
  
  .date-day {
    font-size: 1.1rem;
  }
  
  .news-title {
    font-size: 1rem;
  }
  
  .news-excerpt {
    font-size: 0.85rem;
    -webkit-line-clamp: 3;
  }
  
  .row.align-items-center {
    flex-direction: column;
    align-items: flex-start !important;
  }
  
  .col-auto {
    margin-bottom: 1rem;
  }
  
  .btn-lg {
    font-size: 0.9rem;
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 575px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .news-card {
    margin-bottom: 1rem;
  }
}
</style>