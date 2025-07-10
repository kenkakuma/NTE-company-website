import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useSEO } from './useSEO-BevYkgtu.mjs';
import { V as VIcon } from './VIcon-BPJNs7N2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "club",
  __ssrInlineRender: true,
  setup(__props) {
    const { setSEO } = useSEO();
    setSEO("club");
    const clubs = [
      {
        id: "coffee-lovers",
        name: "\u30B3\u30FC\u30D2\u30FC\u611B\u597D\u5BB6\u30AF\u30E9\u30D6",
        category: "\u98F2\u6599\u6587\u5316",
        description: "\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u306E\u77E5\u8B58\u3092\u6DF1\u3081\u3001\u611B\u597D\u5BB6\u540C\u58EB\u306E\u4EA4\u6D41\u3092\u697D\u3057\u3080\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300",
        memberCount: "120+",
        benefits: [
          "\u9650\u5B9A\u30B3\u30FC\u30D2\u30FC\u8C46\u306E\u5148\u884C\u8CFC\u5165",
          "\u5C02\u9580\u5BB6\u306B\u3088\u308B\u30C6\u30A4\u30B9\u30C6\u30A3\u30F3\u30B0\u8B1B\u5EA7",
          "\u7523\u5730\u76F4\u9001\u30B3\u30FC\u30D2\u30FC\u30C4\u30A2\u30FC",
          "\u7119\u714E\u4F53\u9A13\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7"
        ]
      },
      {
        id: "outdoor-sports",
        name: "\u30A2\u30A6\u30C8\u30C9\u30A2\u30B9\u30DD\u30FC\u30C4\u30AF\u30E9\u30D6",
        category: "\u30B9\u30DD\u30FC\u30C4",
        description: "\u91E3\u308A\u30FB\u30B9\u30AD\u30FC\u30FB\u30B4\u30EB\u30D5\u306A\u3069\u591A\u5F69\u306A\u30A2\u30A6\u30C8\u30C9\u30A2\u30B9\u30DD\u30FC\u30C4\u3092\u697D\u3057\u3080\u30A2\u30AF\u30C6\u30A3\u30D6\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300",
        memberCount: "80+",
        benefits: [
          "\u5C02\u9580\u30AC\u30A4\u30C9\u4ED8\u304D\u30C4\u30A2\u30FC",
          "\u6700\u65B0\u5668\u5177\u306E\u8A66\u7528\u30FB\u5272\u5F15",
          "\u6280\u8853\u5411\u4E0A\u30BB\u30DF\u30CA\u30FC",
          "\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30EC\u30C3\u30B9\u30F3"
        ]
      },
      {
        id: "art-culture",
        name: "\u6587\u5316\u82B8\u8853\u30B5\u30FC\u30AF\u30EB",
        category: "\u6587\u5316\u82B8\u8853",
        description: "\u5C55\u793A\u9451\u8CDE\u30FB\u30A2\u30FC\u30C8\u5236\u4F5C\u30FB\u6587\u5316\u30A4\u30D9\u30F3\u30C8\u3092\u901A\u3058\u3066\u82B8\u8853\u3078\u306E\u7406\u89E3\u3092\u6DF1\u3081\u308B\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300",
        memberCount: "95+",
        benefits: [
          "\u5C55\u793A\u4F1A\u306E\u512A\u5148\u4E88\u7D04\u30FB\u5272\u5F15",
          "\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3068\u306E\u4EA4\u6D41\u4F1A",
          "\u5275\u4F5C\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7",
          "\u30AE\u30E3\u30E9\u30EA\u30FC\u30C4\u30A2\u30FC"
        ]
      }
    ];
    const membershipFeatures = [
      {
        id: 1,
        title: "\u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF",
        description: "\u5404\u5206\u91CE\u306E\u5C02\u9580\u5BB6\u3068\u306E\u76F4\u63A5\u7684\u306A\u3064\u306A\u304C\u308A",
        icon: "mdi-account-tie"
      },
      {
        id: 2,
        title: "\u9650\u5B9A\u30A4\u30D9\u30F3\u30C8",
        description: "\u4F1A\u54E1\u9650\u5B9A\u306E\u7279\u5225\u306A\u30A4\u30D9\u30F3\u30C8\u3084\u4F53\u9A13",
        icon: "mdi-star"
      },
      {
        id: 3,
        title: "\u5B66\u7FD2\u6A5F\u4F1A",
        description: "\u7D99\u7D9A\u7684\u306A\u30B9\u30AD\u30EB\u30A2\u30C3\u30D7\u3068\u30CA\u30EC\u30C3\u30B8\u30B7\u30A7\u30A2",
        icon: "mdi-school"
      },
      {
        id: 4,
        title: "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3",
        description: "\u540C\u3058\u8208\u5473\u3092\u6301\u3064\u4EF2\u9593\u3068\u306E\u6DF1\u3044\u3064\u306A\u304C\u308A",
        icon: "mdi-heart"
      }
    ];
    const upcomingEvents = [
      {
        id: 1,
        title: "\u30D7\u30EC\u30DF\u30A2\u30E0\u30B3\u30FC\u30D2\u30FC\u30C6\u30A4\u30B9\u30C6\u30A3\u30F3\u30B0",
        date: "2025.02.15",
        time: "14:00-16:00",
        location: "\u4E2D\u76EE\u9ED2\u30B9\u30DA\u30FC\u30B9",
        club: "\u30B3\u30FC\u30D2\u30FC\u611B\u597D\u5BB6",
        description: "\u4E16\u754C\u5404\u5730\u306E\u5E0C\u5C11\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u5C02\u9580\u5BB6\u3068\u4E00\u7DD2\u306B\u30C6\u30A4\u30B9\u30C6\u30A3\u30F3\u30B0"
      },
      {
        id: 2,
        title: "\u6625\u306E\u30D5\u30E9\u30A4\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u4F53\u9A13",
        date: "2025.03.20",
        time: "6:00-15:00",
        location: "\u4E39\u6CA2\u6E56",
        club: "\u30A2\u30A6\u30C8\u30C9\u30A2\u30B9\u30DD\u30FC\u30C4",
        description: "\u7D4C\u9A13\u8C4A\u5BCC\u306A\u30AC\u30A4\u30C9\u3068\u4E00\u7DD2\u306B\u6625\u306E\u91E3\u308A\u3092\u697D\u3057\u307F\u307E\u3057\u3087\u3046"
      },
      {
        id: 3,
        title: "\u73FE\u4EE3\u30A2\u30FC\u30C8\u9451\u8CDE\u30C4\u30A2\u30FC",
        date: "2025.03.25",
        time: "10:00-12:00",
        location: "\u516D\u672C\u6728\u30A2\u30FC\u30C8\u30DF\u30E5\u30FC\u30B8\u30A2\u30E0",
        club: "\u6587\u5316\u82B8\u8853",
        description: "\u30AD\u30E5\u30EC\u30FC\u30BF\u30FC\u306B\u3088\u308B\u89E3\u8AAC\u4ED8\u304D\u306E\u7279\u5225\u9451\u8CDE\u30C4\u30A2\u30FC"
      }
    ];
    const formatMonth = (dateStr) => {
      const month = dateStr.split(".")[1];
      return month + "\u6708";
    };
    const formatDay = (dateStr) => {
      const day = dateStr.split(".")[2];
      return day;
    };
    const getClubIcon = (clubId) => {
      const icons = {
        "coffee-lovers": "mdi-coffee",
        "outdoor-sports": "mdi-run",
        "art-culture": "mdi-palette"
      };
      return icons[clubId] || "mdi-account-group";
    };
    const getFeatureIcon = (featureId) => {
      const icons = {
        1: "mdi-account-tie",
        2: "mdi-star",
        3: "mdi-school",
        4: "mdi-heart"
      };
      return icons[featureId] || "mdi-star";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "anthropic-theme club-page" }, _attrs))} data-v-cab07f4a><section class="club-hero-section" data-v-cab07f4a><div class="custom-container" data-v-cab07f4a><div class="hero-content" data-v-cab07f4a><h1 class="hero-title" data-v-cab07f4a>\u30AF\u30E9\u30D6 | CLUB</h1><p class="hero-subtitle" data-v-cab07f4a>\u4F1A\u54E1\u5236\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3</p><p class="hero-description" data-v-cab07f4a> \u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3068\u9650\u5B9A\u30B5\u30FC\u30D3\u30B9\u3067\u7279\u5225\u306A\u4F53\u9A13\u3092 </p></div></div></section><section class="clubs-section" data-v-cab07f4a><div class="custom-container" data-v-cab07f4a><div class="section-header" data-v-cab07f4a><h2 class="section-title" data-v-cab07f4a>\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u4E00\u89A7</h2><p class="section-description" data-v-cab07f4a> \u8208\u5473\u3068\u5C02\u9580\u6027\u3092\u5171\u6709\u3059\u308B3\u3064\u306E\u7279\u5225\u306A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3 </p></div><div class="clubs-grid" data-v-cab07f4a><!--[-->`);
      ssrRenderList(clubs, (club2) => {
        _push(`<div class="club-card" data-v-cab07f4a><div class="club-image" data-v-cab07f4a><img${ssrRenderAttr("src", club2.image)}${ssrRenderAttr("alt", club2.name)} data-v-cab07f4a></div><div class="club-content" data-v-cab07f4a><div class="club-header" data-v-cab07f4a><div class="club-icon" data-v-cab07f4a>`);
        _push(ssrRenderComponent(VIcon, {
          icon: getClubIcon(club2.id),
          size: "32",
          color: "#E17B47"
        }, null, _parent));
        _push(`</div><h3 class="club-title" data-v-cab07f4a>${ssrInterpolate(club2.name)}</h3><div class="club-category" data-v-cab07f4a>${ssrInterpolate(club2.category)}</div></div><p class="club-description" data-v-cab07f4a>${ssrInterpolate(club2.description)}</p><div class="club-benefits" data-v-cab07f4a><strong class="benefits-title" data-v-cab07f4a>\u4F1A\u54E1\u7279\u5178:</strong><ul class="benefits-list" data-v-cab07f4a><!--[-->`);
        ssrRenderList(club2.benefits, (benefit) => {
          _push(`<li data-v-cab07f4a>${ssrInterpolate(benefit)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="club-stats" data-v-cab07f4a><span class="member-count" data-v-cab07f4a>`);
        _push(ssrRenderComponent(VIcon, {
          icon: "mdi-account-group",
          size: "16",
          color: "#666666"
        }, null, _parent));
        _push(` ${ssrInterpolate(club2.memberCount)}\u540D </span></div><button class="club-button" data-v-cab07f4a>\u8A73\u7D30\u30FB\u5165\u4F1A\u6848\u5185</button></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="membership-benefits-section" data-v-cab07f4a><div class="custom-container" data-v-cab07f4a><div class="section-header" data-v-cab07f4a><h2 class="section-title" data-v-cab07f4a>\u4F1A\u54E1\u5236\u30B5\u30FC\u30D3\u30B9\u306E\u7279\u5FB4</h2><p class="section-description" data-v-cab07f4a> \u4F1A\u54E1\u3060\u3051\u304C\u4EAB\u53D7\u3067\u304D\u308B\u7279\u5225\u306A\u4FA1\u5024\u3068\u30B5\u30FC\u30D3\u30B9 </p></div><div class="features-grid" data-v-cab07f4a><!--[-->`);
      ssrRenderList(membershipFeatures, (feature) => {
        _push(`<div class="feature-card" data-v-cab07f4a><div class="feature-icon" data-v-cab07f4a>`);
        _push(ssrRenderComponent(VIcon, {
          icon: getFeatureIcon(feature.id),
          size: "40",
          color: "white"
        }, null, _parent));
        _push(`</div><h3 class="feature-title" data-v-cab07f4a>${ssrInterpolate(feature.title)}</h3><p class="feature-description" data-v-cab07f4a>${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="events-section" data-v-cab07f4a><div class="custom-container" data-v-cab07f4a><div class="section-header" data-v-cab07f4a><h2 class="section-title" data-v-cab07f4a>\u4ECA\u5F8C\u306E\u30A4\u30D9\u30F3\u30C8</h2><p class="section-description" data-v-cab07f4a> \u4F1A\u54E1\u9650\u5B9A\u306E\u7279\u5225\u306A\u30A4\u30D9\u30F3\u30C8\u3068\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7 (\u6E96\u5099\u4E2D) </p></div><div class="events-grid events-upcoming" data-v-cab07f4a><!--[-->`);
      ssrRenderList(upcomingEvents, (event) => {
        _push(`<div class="event-card" data-v-cab07f4a><div class="event-date" data-v-cab07f4a><div class="event-month" data-v-cab07f4a>${ssrInterpolate(formatMonth(event.date))}</div><div class="event-day" data-v-cab07f4a>${ssrInterpolate(formatDay(event.date))}</div></div><div class="event-content" data-v-cab07f4a><h3 class="event-title" data-v-cab07f4a>${ssrInterpolate(event.title)}</h3><div class="event-meta" data-v-cab07f4a><div class="event-location" data-v-cab07f4a>`);
        _push(ssrRenderComponent(VIcon, {
          icon: "mdi-map-marker",
          size: "16",
          color: "#666666"
        }, null, _parent));
        _push(` ${ssrInterpolate(event.location)}</div><div class="event-time" data-v-cab07f4a>`);
        _push(ssrRenderComponent(VIcon, {
          icon: "mdi-clock",
          size: "16",
          color: "#666666"
        }, null, _parent));
        _push(` ${ssrInterpolate(event.time)}</div></div><div class="event-club-tag" data-v-cab07f4a>${ssrInterpolate(event.club)}</div><p class="event-description" data-v-cab07f4a>${ssrInterpolate(event.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="join-cta-section" data-v-cab07f4a><div class="custom-container" data-v-cab07f4a><div class="cta-content" data-v-cab07f4a><h2 class="cta-title" data-v-cab07f4a>\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u53C2\u52A0\u3057\u307E\u305B\u3093\u304B\uFF1F</h2><p class="cta-description" data-v-cab07f4a> \u5C02\u9580\u7684\u306A\u77E5\u8B58\u3092\u5171\u6709\u3057\u3001\u65B0\u3057\u3044\u3064\u306A\u304C\u308A\u3092\u7BC9\u304D\u307E\u3057\u3087\u3046 </p><div class="cta-buttons" data-v-cab07f4a><button class="cta-button primary" data-v-cab07f4a>\u5165\u4F1A\u7533\u3057\u8FBC\u307F</button><button class="cta-button secondary" data-v-cab07f4a>\u8A73\u7D30\u8CC7\u6599\u8ACB\u6C42</button></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/club.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const club = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cab07f4a"]]);

export { club as default };
//# sourceMappingURL=club-kk86PMqC.mjs.map
