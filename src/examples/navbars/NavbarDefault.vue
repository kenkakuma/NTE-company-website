<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "#contact",
      color: "btn-outline-primary",
      label: "お問い合わせ"
    })
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3'
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="NO TRACE EXPLORER | 無迹探索株式会社"
        data-placement="bottom"
      >
        NO TRACE EXPLORER <span class="ms-2 fw-normal" style="font-size: 0.85em; opacity: 0.8;">| 無迹探索株式会社</span>
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="NO TRACE EXPLORER | 無迹探索株式会社"
        data-placement="bottom"
      >
        NTE
      </RouterLink>
      <a
        href="#contact"
        class="btn btn-sm btn-outline-primary mb-0 ms-auto d-lg-none d-block"
        >お問い合わせ</a
      >
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto modern-nav">
          <li class="nav-item mx-1">
            <RouterLink
              class="nav-link modern-nav-link d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              :to="{ name: 'coffee' }"
            >
              <span class="nav-text">コーヒー</span>
            </RouterLink>
          </li>
          <li class="nav-item mx-1">
            <RouterLink
              class="nav-link modern-nav-link d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              :to="{ name: 'exhibition' }"
            >
              <span class="nav-text">エキシビション</span>
            </RouterLink>
          </li>
          <li class="nav-item mx-1">
            <RouterLink
              class="nav-link modern-nav-link d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              :to="{ name: 'lab' }"
            >
              <span class="nav-text">ラボ</span>
            </RouterLink>
          </li>
          <li class="nav-item mx-1">
            <RouterLink
              class="nav-link modern-nav-link d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              :to="{ name: 'club' }"
            >
              <span class="nav-text">クラブ</span>
            </RouterLink>
          </li>
          <li class="nav-item mx-1">
            <RouterLink
              class="nav-link modern-nav-link d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              :to="{ name: 'about' }"
            >
              <span class="nav-text">企業情報</span>
            </RouterLink>
          </li>
          <li class="nav-item mx-1">
            <RouterLink
              class="nav-link modern-nav-link d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              :to="{ name: 'contactus' }"
            >
              <span class="nav-text">お問い合わせ</span>
            </RouterLink>
          </li>
          <li class="nav-item mx-1 admin-link">
            <RouterLink
              class="nav-link modern-nav-link d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              :to="{ name: 'admin' }"
              title="記事管理システム"
            >
              <i class="material-icons" style="font-size: 18px; opacity: 0.7;">settings</i>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* 简洁导航菜单样式 - 参考网站标题风格 */
.modern-nav {
  gap: 1.5rem;
  align-items: center;
}

/* 菜单项分割线 */
.modern-nav .nav-item {
  position: relative;
}

.modern-nav .nav-item:not(:last-child)::before {
  content: '';
  position: absolute;
  right: -0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 16px;
  background: #e0e0e0;
  pointer-events: none;
  z-index: 1;
}

/* 深色背景下的分割线 */
.navbar-light .modern-nav .nav-item:not(:last-child)::before {
  background: #999999;
}

.modern-nav-link {
  position: relative;
  padding: 0.5rem 0.8rem !important;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  text-decoration: none;
}

.modern-nav-link:hover {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

/* 动态下划线特效 */
.modern-nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
  border-radius: 1px;
}

.modern-nav-link:hover::after {
  width: 100%;
}

.nav-text {
  font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', sans-serif;
  line-height: 1.2;
}

/* 移动端优化 */
@media (max-width: 991px) {
  .modern-nav {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem 0;
  }
  
  .modern-nav-link {
    padding: 0.8rem 1rem !important;
    font-size: 1.05rem;
    width: auto;
    justify-content: center;
  }
  
  .modern-nav-link:hover {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  /* 移动端隐藏分割线 */
  .modern-nav .nav-item:not(:last-child)::before {
    display: none;
  }
}

/* 活跃状态 */
.modern-nav-link.router-link-active {
  color: #667eea !important;
  font-weight: 600;
}

.modern-nav-link.router-link-active:hover {
  text-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.modern-nav-link.router-link-active::after {
  width: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  box-shadow: 0 0 6px rgba(102, 126, 234, 0.4);
}

/* 管理链接特殊样式 */
.admin-link {
  margin-left: 1rem !important;
  opacity: 0.6;
}

.admin-link::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 1px;
  pointer-events: none;
  z-index: 1;
}

.admin-link:hover {
  opacity: 1;
}

.admin-link .modern-nav-link {
  padding: 0.4rem 0.6rem !important;
}

/* 隐藏管理链接前面菜单项的分割线 */
.modern-nav .nav-item:nth-last-child(2)::before {
  display: none;
}
</style>