<script setup>
import MaterialBadge from "../../../components/MaterialBadge.vue";

// 新闻数据
const newsItems = [
  {
    date: '2025.01.15',
    title: '無迹探索株式会社設立準備開始のお知らせ'
  },
  {
    date: '2025.01.10',
    title: '東京ルアー・フライフィッシング学院 2025年春季コース募集開始'
  },
  {
    date: '2025.01.08',
    title: '厳選コーヒー商品ラインナップ拡充について'
  },
  {
    date: '2025.01.05',
    title: '中国アーティスト展示スペース 中目黒オープン準備中'
  },
  {
    date: '2025.01.03',
    title: '2025年限定釣具予約受付開始 - Shimano・Daiwa最新モデル'
  }
];
</script>

<style scoped>
/* 现代化新闻卡片样式 */
.news-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 12px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(230, 230, 230, 0.8);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.news-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.12);
  border-color: rgba(102, 126, 234, 0.3);
}

.news-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.news-card:hover::before {
  transform: scaleY(1);
}

.news-card-body {
  padding: 1.2rem 1.8rem;
}

/* 日期徽章样式 */
.news-date-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  padding: 0.6rem 0.7rem;
  text-align: center;
  min-width: 55px;
  box-shadow: 0 3px 12px rgba(102, 126, 234, 0.25);
  position: relative;
  flex-shrink: 0;
}

.date-month {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  line-height: 1;
}

.date-day {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1;
  margin-top: 1px;
}

/* 新闻内容样式 */
.news-content {
  flex: 1;
}

.news-year {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.news-title {
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0;
  color: #2d3436;
  transition: all 0.3s ease;
}

.news-title a {
  color: inherit;
  text-decoration: none;
}

.news-card:hover .news-title {
  color: #667eea;
}

.news-meta {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0;
  flex-shrink: 0;
}

.news-meta .badge {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  white-space: nowrap;
}

.news-meta .text-muted {
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-weight: 500;
}

/* 箭头样式 */
.news-arrow {
  color: #b2bec3;
  font-size: 1rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.news-card:hover .news-arrow {
  color: #667eea;
  transform: translateX(3px);
}

/* 响应式设计 */
@media (max-width: 767px) {
  .news-card-body {
    padding: 1rem 1.2rem;
  }
  
  .news-content {
    margin-left: 0.8rem !important;
  }
  
  .news-date-badge {
    min-width: 45px;
    padding: 0.5rem 0.6rem;
  }
  
  .date-month {
    font-size: 0.65rem;
  }
  
  .date-day {
    font-size: 1rem;
  }
  
  .news-title {
    font-size: 1.1rem;
    line-height: 1.2;
  }
  
  .news-meta {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;
  }
  
  .news-meta .badge {
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
  }
  
  .news-meta .text-muted {
    font-size: 0.85rem;
  }
  
  .news-arrow {
    display: none;
  }
  
  .news-card:hover {
    transform: translateY(-2px);
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .news-card-body {
    padding: 1.1rem 1.5rem;
  }
  
  .news-title {
    font-size: 1.2rem;
  }
  
  .news-meta .text-muted {
    font-size: 0.9rem;
  }
}

/* 字体优化 */
.news-title,
.news-year,
.news-meta {
  font-family: 'Roboto', 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', sans-serif;
}

/* 渐变背景动画 */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

/* 移除年份显示 */
.news-year {
  display: none;
}
</style>

<template>
  <section class="py-2">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-2 mt-2">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="primary" class="mb-3"
              >企業情報</MaterialBadge
            >
            <h2 class="">企業最新情報</h2>
            <p class="lead">
              NO TRACE EXPLORERの最新ニュース、お知らせ、<br />
              サービス情報をご覧いただけます。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div 
              v-for="(news, index) in newsItems" 
              :key="index" 
              class="col-12 mb-3"
            >
              <div class="news-card">
                <div class="news-card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="news-date-badge">
                      <div class="date-month">{{ news.date.split('.')[1] }}</div>
                      <div class="date-day">{{ news.date.split('.')[2] }}</div>
                    </div>
                    <div class="news-content ms-4 flex-grow-1">
                      <h4 class="news-title mb-0">
                        <a href="#" class="text-decoration-none stretched-link">
                          {{ news.title }}
                        </a>
                      </h4>
                    </div>
                    <div class="news-meta d-flex align-items-center">
                      <span class="badge bg-gradient-primary me-3">企業情報</span>
                      <span class="text-muted me-3" style="font-size: 0.95rem;">
                        <i class="fas fa-calendar-alt me-2"></i>
                        {{ news.date }}
                      </span>
                      <div class="news-arrow">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
