<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="info"
                title="イノベーションプロジェクト"
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
                title="サービス領域"
                description="ラボ、珈琲、クラブの3つのコアサービスで多様なニーズに対応"
                :count="3"
                suffix=""
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="dark"
                title="年間実績"
                description="設立準備中でありながら、既に多数のプロジェクトを手がけています"
                :count="2025"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DefaultCounterCard from '~/components/DefaultCounterCard.vue'
</script>

<style scoped>
/* Material Kit Pro 样式 */
.container {
  max-width: 1200px;
}

.border-radius-xl {
  border-radius: 1rem;
}

.z-index-2 {
  z-index: 2;
}

.position-relative {
  position: relative;
}

.col-md-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

@media (min-width: 768px) {
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
}

@media (max-width: 767px) {
  .col-md-4 {
    width: 100%;
    margin-bottom: 2rem;
  }
}

.pt-3 {
  padding-top: 1rem;
}

.pb-4 {
  padding-bottom: 1.5rem;
}

.py-3 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

.col-lg-9 {
  flex: 0 0 auto;
  width: 75%;
}

@media (min-width: 992px) {
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
}

@media (max-width: 991px) {
  .col-lg-9 {
    width: 100%;
  }
}
</style>