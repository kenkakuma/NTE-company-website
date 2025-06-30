<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
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
/* === 日式精致Hero区域样式 === */
.hero-content-wrapper {
  position: relative;
  padding: 2rem 0;
  max-width: 600px;
  margin: 0 auto;
}

.hero-main-title {
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.6;
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 0 8px rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
  font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', sans-serif;
}

.hero-main-title .title-line {
  display: block;
  margin-bottom: 0.2rem;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.2s ease forwards;
}

.hero-main-title .title-line:nth-child(1) {
  animation-delay: 0.3s;
}

.hero-description-wrapper {
  margin-bottom: 2rem;
}

.hero-description {
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1.8;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  white-space: nowrap;
}

.hero-description .desc-line {
  display: block;
  margin-bottom: 0.3rem;
  opacity: 0;
  transform: translateY(15px);
  animation: fadeInUp 1s ease forwards;
}

.hero-description .desc-line:nth-child(1) {
  animation-delay: 0.6s;
}


/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content-wrapper {
    padding: 1.5rem 0;
    max-width: 100%;
  }
  
  .hero-main-title {
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }
  
  .hero-description {
    font-size: 0.85rem;
    line-height: 1.7;
    max-width: 100%;
    padding: 0 1rem;
    white-space: normal;
  }
  
}

@media (max-width: 480px) {
  .hero-main-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 0.8rem;
    line-height: 1.6;
    white-space: normal;
  }
  
}

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

/* 统一现代简约分割线样式 */
.section-divider {
  margin: 3rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1px;
}

/* 统一分割线设计: 细线 + 中央脉动光点 */
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
  .section-divider {
    margin: 2rem 0;
  }
  
  .divider-pulse-dot {
    width: 5px;
    height: 5px;
  }
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
          <div class="col-lg-8 text-center mx-auto position-relative">
            <div class="hero-content-wrapper">
              <!-- 主标题 -->
              <h1 class="hero-main-title text-white pt-3 mt-n5 mb-4">
                <span class="title-line">未知の領域を探索し、輝く未来を築く</span>
              </h1>
              
              <!-- 副标题描述 -->
              <div class="hero-description-wrapper">
                <p class="hero-description text-white mb-0">
                  <span class="desc-line">Explore the unknown territories and build a bright future</span>
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    
    <!-- 统一分割线 1 -->
    <div class="section-divider unified-divider">
      <div class="divider-line"></div>
      <div class="divider-pulse-dot"></div>
    </div>
    
    <PresentationInformation />
    
    <!-- 统一分割线 2 -->
    <div class="section-divider unified-divider">
      <div class="divider-line"></div>
      <div class="divider-pulse-dot"></div>
    </div>
    
    <PresentationExample :data="data" />
    
    <!-- 统一分割线 3 -->
    <div class="section-divider unified-divider">
      <div class="divider-line"></div>
      <div class="divider-pulse-dot"></div>
    </div>
    
    <PresentationPages />
    
    <!-- 统一分割线 4 -->
    <div class="section-divider unified-divider">
      <div class="divider-line"></div>
      <div class="divider-pulse-dot"></div>
    </div>
    
    <BuiltByDevelopers />



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
                        <a href="mailto:contact@no-trace.jp" class="text-dark text-decoration-none small fw-medium">
                          contact@no-trace.jp
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
