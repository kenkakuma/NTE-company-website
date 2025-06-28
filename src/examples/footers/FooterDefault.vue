<script setup>
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "NO TRACE EXPLORER",
      route: "/"
    })
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [
      {
        icon: '<i class="fab fa-linkedin text-lg"></i>',
        link: "#"
      },
      {
        icon: '<i class="fab fa-twitter text-lg"></i>',
        link: "#"
      },
      {
        icon: '<i class="fab fa-github text-lg"></i>',
        link: "#"
      }
    ]
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        name: "サービス",
        items: [
          {
            name: "ラボ",
            href: "/lab"
          },
          {
            name: "珈琲",
            href: "/coffee"
          },
          {
            name: "クラブ",
            href: "/club"
          }
        ]
      },
      {
        name: "企業情報",
        items: [
          {
            name: "会社概要",
            href: "/pages/landing-pages/about-us"
          },
          {
            name: "お問い合わせ",
            href: "/pages/landing-pages/contact-us"
          }
        ]
      },
      {
        name: "法的情報",
        items: [
          {
            name: "プライバシーポリシー",
            href: "#"
          },
          {
            name: "利用規約",
            href: "#"
          }
        ]
      }
    ]
  }
});
</script>
<template>
  <footer class="footer pt-4 mt-4 bg-dark">
    <div class="container">
      <div class="row">
        <!-- 品牌区域 -->
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="mb-3">
            <h5 class="text-white mb-1 fw-bold">無迹探索株式会社</h5>
            <p class="text-white-50 mb-0" style="font-size: 0.8rem;">NO TRACE EXPLORER Co., Ltd.</p>
          </div>
          <p class="text-white-50 mb-3" style="font-size: 0.85rem; line-height: 1.4;">
            信頼できるパートナーとして、お客様と共に新たなビジネス価値を探求し続けます。
          </p>
          <div class="d-flex">
            <div
              class="me-2"
              v-for="{ icon, link } of socials"
              :key="link"
            >
              <a
                class="text-white-50"
                :href="link"
                target="_blank"
                v-html="icon"
              >
              </a>
            </div>
          </div>
        </div>

        <!-- 导航菜单 -->
        <div class="col-lg-8 col-md-6">
          <div class="row">
            <div
              class="col-lg-4 col-sm-6 mb-3"
              v-for="{ name, items } of menus"
              :key="name"
            >
              <h6 class="text-white mb-2 fw-medium" style="font-size: 0.9rem;">{{ name }}</h6>
              <ul class="list-unstyled">
                <li class="mb-1" v-for="item of items" :key="item.name">
                  <a 
                    class="text-white-50 text-decoration-none"
                    :href="item.href"
                    style="font-size: 0.8rem;"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 分隔线 -->
      <hr class="border-white-50 my-3">
      
      <!-- 版权信息 -->
      <div class="row align-items-center pb-3">
        <div class="col-lg-6">
          <p class="text-white-50 mb-0" style="font-size: 0.75rem;">
            東京都内オフィス | contact@no-trace.jp
          </p>
        </div>
        <div class="col-lg-6 text-lg-end">
          <p class="text-white-50 mb-0" style="font-size: 0.75rem;">
            © {{ new Date().getFullYear() }} 無迹探索株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
