<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-2 py-3 presentation-info-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 ms-auto me-auto p-lg-3 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="explore"
              title="未知の領域を <br /> 探索する"
              description="NO TRACE EXPLORERは、革新的なアプローチで新しいビジネス価値を創造し、お客様と共に成長します。"
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="さらに詳しく"
              description="ラボ、珈琲、クラブの各サービスが連携し、トータルソリューションを提供。お客様のビジネスを次のレベルへ導きます。"
              :action="[
                {
                  route: '/lab',
                  label: 'サービス詳細へ',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-7">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="local_cafe"
              title="珈琲商品開発・輸出入"
              description="厳選された珈琲豆の輸入から商品企画開発まで。品質管理と流通ネットワークを活用し、最高品質の珈琲体験をお届けします。"
            />
            <DefaultInfoCard
              icon="business"
              title="総合コンサルティング"
              description="多分野にわたる専門知識と豊富な経験を基に、お客様のビジネス課題を解決。戦略的アドバイスで持続的な成長をサポートします。"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="event"
              title="展覧・イベント運営"
              description="文化交流イベントから企業展示会まで、企画から運営まで一貫してサポート。印象的な体験を通じて価値ある出会いを創出します。"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="people"
              title="会員制コミュニティ運営"
              description="専門的なネットワーキングと限定サービスを提供。会員様同士の交流促進と特別な体験を通じて、価値あるコミュニティを構築します。"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.presentation-info-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}
</style>