<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
import logoVue from "@/assets/img/logos/vue.jpg";
import logoAngular from "@/assets/img/logos/angular.jpg";
import logoReact from "@/assets/img/logos/react.jpg";
import logoSketch from "@/assets/img/logos/sketch.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<style scoped>
.card-hover-effect {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.card-hover-effect:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.card-hover-effect .info-horizontal {
  transition: all 0.3s ease;
}

.card-hover-effect:hover .info-horizontal {
  background: linear-gradient(195deg, #42424a, #191919) !important;
}

.card-hover-effect:hover .info-horizontal * {
  color: white !important;
}

.card-hover-effect:hover .material-icons {
  color: #e0e0e0 !important;
}

/* 固定卡片大小和文字控制 */
.card-fixed-size {
  min-height: 196px !important;  /* 280px * 0.7 = 196px */
  max-height: 196px !important;
  overflow: hidden;
}

.card-fixed-size .info-horizontal {
  height: 100%;
  display: flex !important;
  align-items: flex-start;
  padding: 0 !important;
}

.card-fixed-size .info-horizontal .material-icons {
  margin-right: 1rem !important;
  margin-top: 0.2rem !important;
  flex-shrink: 0;
}

.card-fixed-size .info-horizontal .ps-0,
.card-fixed-size .info-horizontal .ps-md-3 {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 !important;
  margin: 0 !important;
}

.card-fixed-size .info-horizontal h5 {
  font-size: 1.1rem !important;
  line-height: 1.3 !important;
  margin-bottom: 0.5rem !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-fixed-size .info-horizontal p {
  font-size: 0.875rem !important;
  line-height: 1.3 !important;
  margin-bottom: 0.75rem !important;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-fixed-size .info-horizontal .icon-move-right {
  font-size: 0.875rem !important;
  margin-top: auto;
}
</style>

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
      :style="`background-image: url('https://jamaica-homes.com/wp-content/uploads/2024/12/vogelhorst_mistybliss-1-scaled.webp')`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              未知の領域を探索し、輝く未来を築く
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              お客様との信頼関係を大切にし、<br>
              共に新たな価値の創造に取り組んでまいります。
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationPages />
    <BuiltByDevelopers />

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <FilledInfoCard
            class="p-4 card-hover-effect card-fixed-size"
            :color="{ text: 'dark', background: 'bg-light' }"
            :icon="{ component: 'local_cafe', color: 'dark' }"
            title="珈琲 | COFFEE"
            description="コーヒー関連事業：高品質コーヒー商品の企画開発、コーヒー文化の探求と普及を行います。"
            :action="{
              route: '/coffee',
              label: { text: '詳細を見る', color: 'dark' }
            }"
          />
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <FilledInfoCard
            class="p-4 card-hover-effect card-fixed-size"
            :color="{ text: 'dark', background: 'bg-light' }"
            :icon="{ component: 'build', color: 'dark' }"
            title="器具 | EQUIPMENT"
            description="専門器具開発事業：高品質な専門器具の設計・開発・販売を通じて、品質向上をサポートします。"
            :action="{
              route: '#equipment',
              label: { text: '詳細を見る', color: 'dark' }
            }"
          />
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <FilledInfoCard
            class="p-4 card-hover-effect card-fixed-size"
            :color="{ text: 'dark', background: 'bg-light' }"
            :icon="{ component: 'museum', color: 'dark' }"
            title="展览 | EXHIBITION"
            description="展覧企画事業：文化・技術・芸術分野における展示企画、イベント運営、展示空間設計を提供。"
            :action="{
              route: '#exhibition',
              label: { text: '詳細を見る', color: 'dark' }
            }"
          />
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <FilledInfoCard
            class="p-4 card-hover-effect card-fixed-size"
            :color="{ text: 'dark', background: 'bg-light' }"
            :icon="{ component: 'sailing', color: 'dark' }"
            title="钓鱼 | FISHING"
            description="釣り関連事業：釣り体験サービス、釣り具開発、釣りツアー企画を通じて自然との触れ合いを提供。"
            :action="{
              route: '#fishing',
              label: { text: '詳細を見る', color: 'dark' }
            }"
          />
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <FilledInfoCard
            class="p-4 card-hover-effect card-fixed-size"
            :color="{ text: 'dark', background: 'bg-light' }"
            :icon="{ component: 'downhill_skiing', color: 'dark' }"
            title="滑雪 | SKIING"
            description="スキー関連事業：スキー教室運営、スキー用品販売、スキーツアー企画でウインタースポーツを支援。"
            :action="{
              route: '#skiing',
              label: { text: '詳細を見る', color: 'dark' }
            }"
          />
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <FilledInfoCard
            class="p-4 card-hover-effect card-fixed-size"
            :color="{ text: 'dark', background: 'bg-light' }"
            :icon="{ component: 'science', color: 'dark' }"
            title="LAB | ラボ"
            description="研究開発事業：技術研究、市場分析、イノベーション開発を通じて新たなビジネス価値を創造。"
            :action="{
              route: '/lab',
              label: { text: '詳細を見る', color: 'dark' }
            }"
          />
        </div>
      </div>
    </div>
    <PresentationTestimonials />


    <div class="py-5 bg-gray-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card card-body p-5 border-0 shadow-sm">
              <div class="row">
                <div class="col-lg-6 pe-lg-5">
                  <div class="h-100 d-flex flex-column justify-content-between">
                    <div>
                      <h4 class="text-dark mb-3 fw-bold">
                        未知の領域を探索し、輝く未来を築く
                      </h4>
                      <p class="text-muted mb-4 lh-lg">
                        お客様のビジネス成長を支える、信頼できるパートナーとして、共に新たな価値の創造に取り組んでまいります。
                      </p>
                    </div>
                    <div>
                      <a
                        href="/pages/landing-pages/contact-us"
                        class="btn btn-dark btn-lg px-4 py-2"
                      >
                        お問い合わせ
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 ps-lg-5 mt-4 mt-lg-0">
                  <div class="h-100 d-flex flex-column justify-content-between">
                    <div class="text-center mb-3">
                      <h5 class="mb-1 text-dark fw-bold">無迹探索株式会社</h5>
                      <p class="text-muted mb-0 small">NO TRACE EXPLORER Co., Ltd.</p>
                    </div>
                    
                    <div>
                      <div class="d-flex align-items-center justify-content-between py-3 px-3 bg-light rounded-3 mb-2">
                        <div class="d-flex align-items-center">
                          <i class="fas fa-map-marker-alt text-dark me-2" style="font-size: 0.9rem;"></i>
                          <span class="text-muted small fw-medium">東京</span>
                        </div>
                        <span class="text-dark small">港区南青山2-2-8 DFビル</span>
                      </div>
                      
                      <div class="d-flex align-items-center justify-content-between py-3 px-3 bg-light rounded-3">
                        <div class="d-flex align-items-center">
                          <i class="fas fa-envelope text-dark me-2" style="font-size: 0.9rem;"></i>
                          <span class="text-muted small fw-medium">EMAIL</span>
                        </div>
                        <a href="mailto:notracejp@gmail.com" class="text-dark text-decoration-none small fw-medium">
                          notracejp@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
