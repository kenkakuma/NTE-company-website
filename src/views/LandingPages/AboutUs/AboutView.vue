<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
import { newsArticles as defaultArticles } from "@/data/articles.js";

//image
import bg0 from "@/assets/img/bg9.jpg";

// 企業新闻文章数据 - 从管理系统和默认数据中加载
const newsArticles = ref([]);

// 从本地存储或默认数据加载文章
const loadArticles = () => {
  try {
    const saved = localStorage.getItem('notrace_articles')
    if (saved) {
      const parsedArticles = JSON.parse(saved)
      if (Array.isArray(parsedArticles) && parsedArticles.length > 0) {
        newsArticles.value = parsedArticles.sort((a, b) => new Date(b.date) - new Date(a.date))
        return
      }
    }
  } catch (error) {
    console.error('Failed to load articles from localStorage:', error)
  }
  
  // 如果没有保存的数据，使用默认数据
  newsArticles.value = [...defaultArticles].sort((a, b) => new Date(b.date) - new Date(a.date))
};

// 選択された記事
const selectedArticle = ref(null);

// 路由实例
const route = useRoute();

// 記事を選択する関数
const selectArticle = (article) => {
  selectedArticle.value = article;
};

// 記事リストに戻る関数
const backToList = () => {
  selectedArticle.value = null;
};

// 日付フォーマット関数
const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split('.');
  return {
    year: year,
    month: month.padStart(2, '0'),
    day: day.padStart(2, '0'),
    monthName: ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][parseInt(month)]
  };
};

// 根据URL参数选择文章
const selectArticleFromQuery = () => {
  const articleId = route.query.articleId;
  if (articleId && newsArticles.value.length > 0) {
    const article = newsArticles.value.find(a => a.id == articleId);
    if (article) {
      selectedArticle.value = article;
    }
  }
};

// 监听路由变化
watch(() => route.query.articleId, () => {
  selectArticleFromQuery();
}, { immediate: false });

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("corporate-news");
  body.classList.add("bg-gray-200");
  // 加载文章数据
  loadArticles();
  // 延迟检查URL参数，确保文章数据已加载
  setTimeout(() => {
    selectArticleFromQuery();
  }, 100);
});

onUnmounted(() => {
  body.classList.remove("corporate-news");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${bg0})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-8 text-center mx-auto position-relative">
            <h1 class="text-white pt-3 mt-n5 mb-4">企業情報・ニュース</h1>
            <p class="lead text-white px-5 mt-3" style="font-weight: 500;">
              NO TRACE EXPLORERの最新ニュース、<br />
              企業情報、サービス情報をお届けします。
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- 文章详情页面 -->
    <div v-if="selectedArticle" class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <!-- 返回按钮 -->
          <MaterialButton 
            @click="backToList" 
            variant="text" 
            color="primary" 
            class="mb-4"
          >
            <i class="fas fa-arrow-left me-2"></i>
            記事一覧に戻る
          </MaterialButton>
          
          <!-- 文章头部 -->
          <div class="article-header mb-4">
            <div class="article-meta mb-3">
              <span class="badge bg-gradient-primary me-3">{{ selectedArticle.category }}</span>
              <span class="text-muted me-3">
                <i class="fas fa-calendar-alt me-2"></i>
                {{ selectedArticle.date }}
              </span>
              <span class="text-muted">
                <i class="fas fa-clock me-2"></i>
                読了時間 {{ selectedArticle.readTime }}
              </span>
            </div>
            <h1 class="article-title mb-3">{{ selectedArticle.title }}</h1>
            <p class="article-excerpt text-muted mb-4">{{ selectedArticle.excerpt }}</p>
          </div>
          
          <!-- 文章内容 -->
          <div class="article-content" v-html="selectedArticle.content"></div>
          
          <!-- 标签 -->
          <div class="article-tags mt-5 pt-4 border-top">
            <h6 class="mb-3">タグ:</h6>
            <span 
              v-for="tag in selectedArticle.tags" 
              :key="tag" 
              class="badge bg-light text-dark me-2 mb-2"
            >
              {{ tag }}
            </span>
          </div>
          
          <!-- 返回按钮 -->
          <div class="text-center mt-5">
            <MaterialButton 
              @click="backToList" 
              variant="gradient" 
              color="primary"
            >
              記事一覧に戻る
            </MaterialButton>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 文章列表页面 -->
    <div v-else class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center mb-5">
          <h2 class="news-list-title mb-4">企業ニュース・お知らせ</h2>
          <p class="lead mb-0">
            NO TRACE EXPLORERの最新情報、サービス案内、<br>
            企業活動に関するニュースをお届けします。
          </p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div 
            v-for="article in newsArticles" 
            :key="article.id" 
            class="news-item-card mb-4"
            @click="selectArticle(article)"
          >
            <div class="news-item-body">
              <div class="d-flex align-items-start">
                <div class="news-date-badge">
                  <div class="date-month">{{ formatDate(article.date).monthName }}</div>
                  <div class="date-day">{{ formatDate(article.date).day }}</div>
                </div>
                <div class="news-content ms-4 flex-grow-1">
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <span class="badge bg-gradient-primary">{{ article.category }}</span>
                    <span class="text-muted small">
                      <i class="fas fa-clock me-1"></i>
                      {{ article.readTime }}
                    </span>
                  </div>
                  <h4 class="news-item-title mb-2">{{ article.title }}</h4>
                  <p class="news-item-excerpt mb-2">{{ article.excerpt }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="news-tags">
                      <span 
                        v-for="tag in article.tags.slice(0, 3)" 
                        :key="tag" 
                        class="badge bg-light text-dark me-1"
                      >
                        {{ tag }}
                      </span>
                    </div>
                    <span class="read-more text-primary">
                      続きを読む <i class="fas fa-chevron-right ms-1"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <DefaultFooter />
</template>

<style scoped>
/* 博客文章展示页面样式 */
.news-list-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: #344767;
  text-shadow: 
    0 0 5px rgba(128, 128, 128, 0.15),
    0 0 10px rgba(128, 128, 128, 0.1);
}

/* 文章卡片样式 */
.news-item-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 15px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(230, 230, 230, 0.8);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.news-item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
}

.news-item-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.news-item-card:hover::before {
  transform: scaleY(1);
}

.news-item-body {
  padding: 1.8rem 2rem;
}

/* 日期徽章样式 */
.news-date-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 1rem 0.8rem;
  text-align: center;
  min-width: 65px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  flex-shrink: 0;
}

.date-month {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1;
}

.date-day {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1;
  margin-top: 3px;
}

/* 新闻内容样式 */
.news-content {
  flex: 1;
}

.news-item-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: #2d3436;
  transition: all 0.3s ease;
}

.news-item-card:hover .news-item-title {
  color: #667eea;
}

.news-item-excerpt {
  color: #636e72;
  font-size: 0.95rem;
  line-height: 1.6;
}

.news-tags .badge {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
}

.read-more {
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.news-item-card:hover .read-more {
  transform: translateX(3px);
}

/* 文章详情页样式 */
.article-header {
  border-bottom: 1px solid #e0e6ed;
  padding-bottom: 2rem;
}

.article-meta .badge {
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #2d3436;
}

.article-excerpt {
  font-size: 1.1rem;
  line-height: 1.6;
}

.article-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #2d3436;
}

.article-content h4 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #344767;
  margin: 2rem 0 1rem 0;
  border-left: 4px solid #667eea;
  padding-left: 1rem;
}

.article-content ul {
  padding-left: 1.5rem;
  margin: 1.5rem 0;
}

.article-content li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

.article-content strong {
  color: #344767;
  font-weight: 600;
}

.article-tags .badge {
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #e0e6ed;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .news-item-body {
    padding: 1.2rem 1.5rem;
  }
  
  .news-date-badge {
    min-width: 55px;
    padding: 0.8rem 0.6rem;
  }
  
  .date-month {
    font-size: 0.65rem;
  }
  
  .date-day {
    font-size: 1.1rem;
  }
  
  .news-item-title {
    font-size: 1.1rem;
  }
  
  .news-item-excerpt {
    font-size: 0.9rem;
  }
  
  .news-content {
    margin-left: 1rem !important;
  }
  
  .article-title {
    font-size: 2rem;
  }
  
  .article-content {
    font-size: 1rem;
  }
  
  .article-content h4 {
    font-size: 1.3rem;
  }
}

@media (max-width: 576px) {
  .news-item-card:hover {
    transform: translateY(-3px);
  }
  
  .article-title {
    font-size: 1.7rem;
  }
  
  .news-list-title {
    font-size: 1.8rem;
  }
}

/* 字体优化 */
.news-item-title,
.news-item-excerpt,
.article-content,
.news-list-title {
  font-family: 'Roboto', 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', sans-serif;
}

/* 渐变样式 */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}
</style>