<template>
  <v-footer class="app-footer" color="primary">
    <v-container>
      <v-row>
        <!-- 品牌信息 -->
        <v-col cols="12" md="4" class="mb-4">
          <div class="footer-brand">
            <h3 class="footer-title">NO TRACE EXPLORER</h3>
            <p class="footer-subtitle">無迹探索株式会社</p>
            <p class="footer-description">
              革新的なソリューションで新たなビジネス価値を創造し、お客様と共に成長する企業です。
            </p>
          </div>
        </v-col>

        <!-- サービス一覧 -->
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <h4 class="footer-section-title">サービス</h4>
          <v-list class="footer-links" color="transparent">
            <v-list-item
              v-for="service in services"
              :key="service.to"
              :to="service.to"
              class="footer-link-item"
            >
              <v-list-item-title class="footer-link">
                {{ service.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- 企業情報 -->
        <v-col cols="12" sm="6" md="3" class="mb-4">
          <h4 class="footer-section-title">企業情報</h4>
          <v-list class="footer-links" color="transparent">
            <v-list-item
              v-for="info in companyInfo"
              :key="info.to"
              :to="info.to"
              class="footer-link-item"
            >
              <v-list-item-title class="footer-link">
                {{ info.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- お問い合わせ -->
        <v-col cols="12" md="2" class="mb-4">
          <h4 class="footer-section-title">お問い合わせ</h4>
          <v-btn
            color="white"
            variant="outlined"
            to="/contact"
            block
            rounded="pill"
            class="contact-btn"
          >
            <v-icon start>mdi-email</v-icon>
            お問い合わせ
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="footer-divider" />

      <!-- 版权信息 -->
      <v-row align="center" class="footer-bottom">
        <v-col cols="12" sm="6">
          <p class="footer-copyright">
            © {{ currentYear }} NO TRACE EXPLORER | 無迹探索株式会社. All rights reserved.
          </p>
        </v-col>
        <v-col cols="12" sm="6" class="text-sm-end">
          <div class="footer-links-bottom">
            <NuxtLink to="/privacy" class="footer-legal-link">
              プライバシーポリシー
            </NuxtLink>
            <span class="footer-separator">|</span>
            <NuxtLink to="/terms" class="footer-legal-link">
              利用規約
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// 当前年份
const currentYear = new Date().getFullYear()

// サービス一覧
const services = [
  { title: 'コーヒー事業', to: '/coffee' },
  { title: 'エキシビション', to: '/exhibition' },
  { title: 'ラボ・研究開発', to: '/lab' },
  { title: 'クラブ・コミュニティ', to: '/club' }
]

// 企業情報
const companyInfo = [
  { title: '企業概要', to: '/about' },
  { title: '企業ニュース', to: '/about#news' },
  { title: 'プライバシーポリシー', to: '/privacy' },
  { title: '利用規約', to: '/terms' }
]
</script>

<style scoped>
.app-footer {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-secondary)) 100%
  ) !important;
  color: white;
  padding: 3rem 0 1rem 0;
  margin-top: 4rem;
}

/* 品牌区域样式 */
.footer-brand {
  color: white;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.footer-subtitle {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.footer-description {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 0;
}

/* 区域标题样式 */
.footer-section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

/* 链接列表样式 */
.footer-links {
  background: transparent !important;
}

.footer-link-item {
  padding: 0.25rem 0;
  min-height: auto;
}

.footer-link {
  font-size: 0.9rem;
  color: white;
  opacity: 0.8;
  transition: all 0.3s ease;
  text-decoration: none;
}

.footer-link:hover {
  opacity: 1;
  transform: translateX(4px);
}

/* 联系按钮样式 */
.contact-btn {
  color: white !important;
  border-color: white !important;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.02em;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: white !important;
  color: rgb(var(--v-theme-primary)) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.3);
}

/* 分割线样式 */
.footer-divider {
  margin: 2rem 0 1.5rem 0;
  border-color: rgba(255, 255, 255, 0.2);
}

/* 底部区域样式 */
.footer-bottom {
  margin-top: 1rem;
}

.footer-copyright {
  font-size: 0.85rem;
  opacity: 0.8;
  margin-bottom: 0;
  color: white;
}

.footer-links-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}

.footer-legal-link {
  font-size: 0.85rem;
  color: white;
  opacity: 0.8;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-legal-link:hover {
  opacity: 1;
}

.footer-separator {
  color: white;
  opacity: 0.6;
  font-size: 0.8rem;
}

/* 响应式设计 */
@media (max-width: 959px) {
  .app-footer {
    padding: 2rem 0 1rem 0;
    margin-top: 3rem;
  }
  
  .footer-title {
    font-size: 1.3rem;
  }
  
  .footer-section-title {
    font-size: 1rem;
  }
}

@media (max-width: 599px) {
  .app-footer {
    padding: 1.5rem 0 1rem 0;
    margin-top: 2rem;
  }
  
  .footer-title {
    font-size: 1.2rem;
  }
  
  .footer-links-bottom {
    justify-content: center;
    margin-top: 1rem;
  }
  
  .footer-copyright {
    text-align: center;
  }
}

/* 深色模式适配 */
.v-theme--dark .app-footer {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.9) 0%,
    rgba(118, 75, 162, 0.9) 100%
  ) !important;
}

.v-theme--dark .footer-divider {
  border-color: rgba(255, 255, 255, 0.15);
}
</style>