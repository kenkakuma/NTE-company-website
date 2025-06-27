<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import Header from "../../../examples/Header.vue";

//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";

//images
import bgImage from "@/assets/img/bg9.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${bgImage})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              ラボ | LAB
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              研究開発・イノベーションサービス
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-primary text-3xl">science</i>
                <h5 class="font-weight-bolder mt-3">エクスペリエンスデザイン</h5>
                <p class="pe-5">
                  専門指導とシステム化された研修により、高品質な体験設計サービスを提供
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-primary text-3xl">lightbulb</i>
                <h5 class="font-weight-bolder mt-3">イノベーション開発</h5>
                <p class="pe-5">
                  市場インサイトと戦略企画を統合し、コンセプトから実現まで総合的なソリューション
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-start">
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-primary text-3xl">business_center</i>
                <h5 class="font-weight-bolder mt-3">プロフェッショナルコンサルティング</h5>
                <p class="pe-5">
                  深い業界理解に基づき、技術・ビジネス・文化等多分野での専門コンサルティング
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-primary text-3xl">analytics</i>
                <h5 class="font-weight-bolder mt-3">技術研究・市場分析</h5>
                <p class="pe-5">
                  最新技術トレンドの研究と市場動向の深層分析
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="card bg-gradient-dark">
            <div class="card-body">
              <h5 class="text-white">詳細説明</h5>
              <p class="text-white">
                深い専門知識と革新的なアプローチを通じて、<br>
                お客様のビジネス課題解決と価値創造をサポートいたします。
              </p>
              <MaterialButton 
                variant="gradient" 
                color="light" 
                class="w-auto me-2"
              >
                お問い合わせ
              </MaterialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>