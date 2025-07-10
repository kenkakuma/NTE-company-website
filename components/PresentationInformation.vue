<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- 左侧旋转卡片 -->
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <div class="rotating-card-placeholder">
            <div class="placeholder-card">
              <div class="placeholder-image">
                <i class="material-icons" style="font-size: 3rem; color: #667eea;">explore</i>
              </div>
              <div class="placeholder-content">
                <h3 class="placeholder-title">未知の領域を探索する</h3>
                <p class="placeholder-description">
                  NO TRACE EXPLORERは、革新的なアプローチで新しいビジネス価値を創造し、お客様と共に成長します。
                </p>
                <button class="placeholder-btn">詳細を見る</button>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧信息卡片 -->
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="science"
              title="研究開発・イノベーション"
              description="最新技術と市場分析を基に、革新的なソリューションを開発。お客様のビジネス課題を解決する新しい価値を創造します。"
            />
            <DefaultInfoCard
              icon="local_cafe"
              title="珈琲文化・体験設計"
              description="高品質なコーヒー商品の企画開発から、コーヒー文化の探求まで。専門的な体験サービスを通じて豊かなライフスタイルを提案します。"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="people"
              title="会員制コミュニティ"
              description="クラブサービスでは、会員限定イベントや専門的なネットワーキングを提供。文化交流とVIPサービスで特別な体験を創出します。"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="business"
              title="総合コンサルティング"
              description="技術・ビジネス・文化など多分野での専門コンサルティングサービス。深い業界理解に基づいた戦略的なアドバイスを提供します。"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DefaultInfoCard from '~/components/DefaultInfoCard.vue'
</script>

<style scoped>
/* Material Kit样式 */
.my-5 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.75rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.col-lg-4,
.col-lg-6 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.col-lg-4 {
  flex: 0 0 auto;
  width: 33.333333%;
}

.col-lg-6 {
  flex: 0 0 auto;
  width: 50%;
}

@media (max-width: 991px) {
  .col-lg-4,
  .col-lg-6 {
    width: 100%;
  }
}

.align-items-center {
  align-items: center;
}

.justify-content-start {
  justify-content: flex-start;
}

.ms-auto {
  margin-left: auto;
}

.me-auto {
  margin-right: auto;
}

.p-lg-4 {
  padding: 1.5rem;
}

.mt-lg-0 {
  margin-top: 0;
}

.mt-4 {
  margin-top: 1.5rem;
}

.mt-3 {
  margin-top: 1rem;
}

.mt-5 {
  margin-top: 3rem;
}

/* 旋转卡片占位符样式 */
.rotating-card-placeholder {
  perspective: 1000px;
  height: 360px;
}

.placeholder-card {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.placeholder-card:hover {
  transform: rotateY(5deg) translateY(-5px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
}

.placeholder-image {
  margin-bottom: 1.5rem;
}

.placeholder-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.placeholder-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.placeholder-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.placeholder-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

@media (max-width: 991px) {
  .p-lg-4 {
    padding: 1rem;
  }
  
  .mt-lg-0 {
    margin-top: 2rem;
  }
  
  .rotating-card-placeholder {
    height: 300px;
  }
  
  .placeholder-card {
    padding: 1.5rem;
  }
}

@media (max-width: 767px) {
  .mt-4 {
    margin-top: 1rem;
  }
  
  .mt-5 {
    margin-top: 2rem;
  }
  
  .placeholder-title {
    font-size: 1.3rem;
  }
  
  .placeholder-description {
    font-size: 0.9rem;
  }
}
</style>