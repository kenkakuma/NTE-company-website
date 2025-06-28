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
              クラブ | CLUB
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              会員制コミュニティサービス
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
                <i class="material-icons text-gradient text-success text-3xl">event</i>
                <h5 class="font-weight-bolder mt-3">会員限定体験イベント</h5>
                <p class="pe-5">
                  メンバー専用の特別な体験イベントを定期開催
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-success text-3xl">people</i>
                <h5 class="font-weight-bolder mt-3">専門的なネットワーキング</h5>
                <p class="pe-5">
                  各分野の専門家とのつながりを構築するプラットフォーム
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-start">
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-success text-3xl">language</i>
                <h5 class="font-weight-bolder mt-3">文化交流プラットフォーム</h5>
                <p class="pe-5">
                  多様な文化背景を持つメンバー間の交流を促進
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info">
                <i class="material-icons text-gradient text-success text-3xl">diamond</i>
                <h5 class="font-weight-bolder mt-3">VIPサービス・特典</h5>
                <p class="pe-5">
                  メンバー限定の特別サービスと特典をご提供
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="card bg-gradient-success">
            <div class="card-body">
              <h5 class="text-white">詳細説明</h5>
              <p class="text-white">
                特別な体験と深いつながりを通じて、<br>
                価値あるコミュニティの構築をお手伝いいたします。
              </p>
              <MaterialButton 
                variant="gradient" 
                color="light" 
                class="w-auto me-2"
              >
                メンバーシップについて
              </MaterialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>