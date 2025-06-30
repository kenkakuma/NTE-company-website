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
  body.classList.add("exhibition-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("exhibition-page");
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
          <div class="col-lg-8 text-center mx-auto position-relative">
            <h1 class="text-white pt-3 mt-n5 mb-4">エキシビション</h1>
            <p class="lead text-white px-5 mt-3" style="font-weight: 500;">
              文化・技術・芸術分野の展示企画からイベント運営まで、<br />
              革新的なアプローチで印象的な体験を創造します。
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="mb-4">展示・イベントサービス</h2>
            <p class="lead mb-5">
              文化交流イベントから企業展示会まで、企画から運営まで一貫してサポート。
              印象的な体験を通じて価値ある出会いを創出します。
            </p>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <h5>展示企画・デザイン</h5>
                <p>革新的な展示空間の設計と、来場者の心に残る体験デザインを提供いたします。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <h5>イベント運営・管理</h5>
                <p>企画段階から当日運営まで、専門スタッフによる総合的なイベント管理を行います。</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body text-center">
                <h5>文化・芸術プロモーション</h5>
                <p>アーティストや文化活動の魅力を最大限に引き出すプロモーション戦略を提案します。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <DefaultFooter />
</template>