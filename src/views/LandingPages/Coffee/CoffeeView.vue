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
              珈琲 | COFFEE
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              コーヒー関連事業
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
                <i class="material-icons text-gradient text-warning text-3xl">coffee</i>
                <h5 class="font-weight-bolder mt-3">高品質コーヒー商品の企画開発</h5>
                <p class="pe-5">
                  厳選された豆から最高品質のコーヒー商品を企画・開発
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-warning text-3xl">public</i>
                <h5 class="font-weight-bolder mt-3">コーヒー文化の探求と普及</h5>
                <p class="pe-5">
                  世界各地のコーヒー文化を探求し、日本での普及を促進
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-start">
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-warning text-3xl">star</i>
                <h5 class="font-weight-bolder mt-3">専門的なコーヒー体験サービス</h5>
                <p class="pe-5">
                  プロフェッショナルによる特別なコーヒー体験を提供
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-warning text-3xl">link</i>
                <h5 class="font-weight-bolder mt-3">サプライチェーン構築</h5>
                <p class="pe-5">
                  生産者から消費者まで、透明で持続可能なサプライチェーン
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="card bg-gradient-warning">
            <div class="card-body">
              <h5 class="text-white">LAB COFFEE CLUB</h5>
              <p class="text-white">
                コーヒーを通じた文化交流と品質追求により、<br>
                新たな価値体験をお客様にお届けいたします。
              </p>
              <div class="alert alert-light text-dark" role="alert">
                <strong>サービス準備中</strong><br>
                どうぞお楽しみに
              </div>
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