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

<style scoped>
.presentation-info-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}
</style>