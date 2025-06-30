<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="info"
                title="体験プログラム"
                description="先進的な技術と創造的なアイデアで、新しい価値を創造しています"
                :count="50"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="primary"
                title="コア事業領域"
                description="珈琲、コンサル、イベント、コミュニティの4つの専門分野で総合的なサービスを展開"
                :count="4"
                suffix=""
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="dark"
                title="設立準備中"
                description="設立準備中でありながら、既に多数のプロジェクトを手がけています"
                :count="2025"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
      
      <!-- 统一分割线 - 事业领域标题上方 -->
      <div class="section-divider unified-divider mt-5">
        <div class="divider-line"></div>
        <div class="divider-pulse-dot"></div>
      </div>
      
      <!-- 事业领域标题 - 应用柔和发光特效 -->
      <div class="row mt-4">
        <div class="col-12 text-center">
          <div class="title-section mb-4">
            <h3 class="glow-title mb-2">私たちの事業領域</h3>
            <p class="glow-subtitle small mb-3">OUR CORE BUSINESS DOMAINS</p>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-lg-10 col-xl-8">
              <div class="px-md-4">
                <p class="text-muted mb-4 lh-lg text-center" style="font-size: 0.9rem; line-height: 1.7;">
                  無迹探索株式会社は、<strong>珈琲事業</strong>、<strong>コンサルティング</strong>、<strong>イベント運営</strong>、<strong>コミュニティ構築</strong>の<br class="d-none d-lg-block">
                  4つの専門領域で、お客様に価値あるソリューションをご提供いたします。
                </p>
                <p class="text-muted mb-0 lh-lg text-center" style="font-size: 0.85rem; line-height: 1.6;">
                  グローバルな視点と専門的な知識を活かし、お客様の多様なニーズにお応えできるよう、<br class="d-none d-lg-block">
                  常に革新的なアプローチで取り組んでおります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 柔和发光特效样式 */
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

.glow-subtitle {
  color: #6c757d;
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 0 0 3px rgba(128, 128, 128, 0.12);
}

/* 统一分割线样式 */
.section-divider {
  margin: 3rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1px;
}

.unified-divider {
  width: 100%;
  position: relative;
}

.divider-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(230, 230, 230, 0.3) 20%, 
    rgba(102, 126, 234, 0.4) 45%, 
    rgba(118, 75, 162, 0.5) 50%, 
    rgba(102, 126, 234, 0.4) 55%, 
    rgba(230, 230, 230, 0.3) 80%, 
    transparent 100%
  );
  position: relative;
}

.divider-pulse-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  box-shadow: 
    0 0 10px rgba(102, 126, 234, 0.4),
    0 0 20px rgba(102, 126, 234, 0.2),
    0 0 30px rgba(102, 126, 234, 0.1);
  animation: pulseGlow 2.5s ease-in-out infinite;
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
      0 0 30px rgba(102, 126, 234, 0.4),
      0 0 45px rgba(102, 126, 234, 0.2);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .glow-title {
    font-size: 1.4rem;
  }
  
  .section-divider {
    margin: 2.5rem 0;
  }
  
  .divider-pulse-dot {
    width: 6px;
    height: 6px;
    box-shadow: 
      0 0 8px rgba(102, 126, 234, 0.4),
      0 0 16px rgba(102, 126, 234, 0.2);
  }
  
  @keyframes pulseGlow {
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1); 
      opacity: 0.8;
      box-shadow: 
        0 0 8px rgba(102, 126, 234, 0.4),
        0 0 16px rgba(102, 126, 234, 0.2);
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.2); 
      opacity: 1;
      box-shadow: 
        0 0 12px rgba(102, 126, 234, 0.6),
        0 0 24px rgba(102, 126, 234, 0.3);
    }
  }
}

@media (max-width: 480px) {
  .glow-title {
    font-size: 1.2rem;
  }
  
  .section-divider {
    margin: 2rem 0;
  }
  
  .divider-pulse-dot {
    width: 5px;
    height: 5px;
  }
}
</style>

