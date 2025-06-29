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
      
      <!-- 事业领域标题 -->
      <div class="row mt-5">
        <div class="col-12 text-center">
          <h3 class="text-gradient text-dark mb-2">私たちの事業領域</h3>
          <p class="text-muted small mb-3">OUR CORE BUSINESS DOMAINS</p>
          <div class="row justify-content-center mt-4">
            <div class="col-lg-10 col-xl-8">
              <div class="px-md-4">
                <p class="text-muted mb-4 lh-lg text-center" style="font-size: 1.05rem; line-height: 1.8;">
                  無迹探索株式会社は、<strong>珈琲事業</strong>、<strong>コンサルティング</strong>、<strong>イベント運営</strong>、<strong>コミュニティ構築</strong>の<br class="d-none d-lg-block">
                  4つの専門領域で、お客様に価値あるソリューションをご提供いたします。
                </p>
                <p class="text-muted mb-0 lh-lg text-center" style="font-size: 1rem; line-height: 1.7;">
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
