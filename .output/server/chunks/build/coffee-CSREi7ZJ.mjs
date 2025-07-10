import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "coffee",
  __ssrInlineRender: true,
  setup(__props) {
    const { setSEO } = useSEO();
    setSEO("coffee");
    const getServiceIcon = (serviceId) => {
      const iconMap = {
        development: "mdi-lightbulb-variant",
        trade: "mdi-earth",
        brand: "mdi-trophy",
        international: "mdi-airplane"
      };
      return iconMap[serviceId] || "mdi-coffee";
    };
    const services = [
      {
        id: "development",
        title: "\u5546\u54C1\u4F01\u753B\u958B\u767A",
        icon: "mdi-lightbulb-variant",
        features: [
          "\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u306E\u4F01\u753B\u958B\u767A",
          "\u30C9\u30EA\u30C3\u30D7\u30D0\u30C3\u30B0\u958B\u767A\u30FB\u88FD\u9020",
          "\u30AA\u30EA\u30B8\u30CA\u30EB\u30D6\u30EC\u30F3\u30C9\u958B\u767A",
          "\u30D1\u30C3\u30B1\u30FC\u30B8\u30C7\u30B6\u30A4\u30F3"
        ]
      },
      {
        id: "trade",
        title: "\u30B3\u30FC\u30D2\u30FC\u8CBF\u6613",
        icon: "mdi-earth",
        features: [
          "\u4E16\u754C\u5404\u5730\u304B\u3089\u306E\u512A\u826F\u8C46\u8F38\u5165",
          "\u76F4\u63A5\u53D6\u5F15\u306B\u3088\u308B\u54C1\u8CEA\u4FDD\u8A3C",
          "\u9069\u6B63\u4FA1\u683C\u3067\u306E\u5B89\u5B9A\u4F9B\u7D66",
          "\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u8ABF\u9054"
        ]
      },
      {
        id: "branding",
        title: "\u30D6\u30E9\u30F3\u30C9\u5C55\u958B",
        icon: "mdi-trophy",
        features: [
          "\u30AA\u30EA\u30B8\u30CA\u30EB\u30D6\u30E9\u30F3\u30C9\u5C55\u958B",
          "\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u6226\u7565\u7ACB\u6848",
          "\u8CA9\u58F2\u30C1\u30E3\u30CD\u30EB\u958B\u62D3",
          "\u30D6\u30E9\u30F3\u30C9\u4FA1\u5024\u5411\u4E0A"
        ]
      },
      {
        id: "international",
        title: "\u4E2D\u56FD\u6226\u7565\u5C55\u958B",
        icon: "mdi-airplane",
        features: [
          "\u4E2D\u56FD\u5E02\u5834\u5411\u3051\u5546\u54C1\u958B\u767A",
          "\u6D77\u5916\u8CA9\u58F2\u6226\u7565\u7ACB\u6848",
          "\u73FE\u5730\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u69CB\u7BC9",
          "\u30AF\u30ED\u30B9\u30DC\u30FC\u30C0\u30FCEC\u5C55\u958B"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "anthropic-theme coffee-page" }, _attrs))} data-v-b9afb4b5><section class="coffee-hero-section" data-v-b9afb4b5><div class="custom-container" data-v-b9afb4b5><div class="hero-content" data-v-b9afb4b5><h1 class="hero-title" data-v-b9afb4b5>\u73C8\u7432 | COFFEE</h1><p class="hero-subtitle" data-v-b9afb4b5>\u98F2\u6599\u30FB\u6587\u5316\u4E8B\u696D</p><p class="hero-description" data-v-b9afb4b5> \u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u306E\u4F01\u753B\u958B\u767A\u30FB\u8CBF\u6613\u30FB\u30D6\u30E9\u30F3\u30C9\u5C55\u958B </p></div></div></section><section class="services-section" data-v-b9afb4b5><div class="custom-container" data-v-b9afb4b5><div class="section-header" data-v-b9afb4b5><h2 class="section-title" data-v-b9afb4b5>\u30B3\u30FC\u30D2\u30FC\u30B5\u30FC\u30D3\u30B9</h2><p class="section-description" data-v-b9afb4b5> \u54C1\u8CEA\u3068\u4F1D\u7D71\u3092\u878D\u5408\u3055\u305B\u305F\u7DCF\u5408\u7684\u306A\u30B3\u30FC\u30D2\u30FC\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3 </p></div><div class="services-grid" data-v-b9afb4b5><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<div class="service-card" data-v-b9afb4b5><div class="service-icon" data-v-b9afb4b5>`);
        _push(ssrRenderComponent(VIcon, {
          icon: getServiceIcon(service.id),
          size: "48",
          color: "#E17B47"
        }, null, _parent));
        _push(`</div><h3 class="service-title" data-v-b9afb4b5>${ssrInterpolate(service.title)}</h3><ul class="service-features" data-v-b9afb4b5><!--[-->`);
        ssrRenderList(service.features, (feature) => {
          _push(`<li data-v-b9afb4b5>${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></section><section class="quality-section" data-v-b9afb4b5><div class="custom-container" data-v-b9afb4b5><div class="quality-content" data-v-b9afb4b5><div class="quality-text" data-v-b9afb4b5><h2 class="section-title" data-v-b9afb4b5>\u54C1\u8CEA\u3078\u306E\u3053\u3060\u308F\u308A</h2><div class="quality-features" data-v-b9afb4b5><div class="quality-feature" data-v-b9afb4b5><h3 class="feature-title" data-v-b9afb4b5>\u53B3\u9078\u3055\u308C\u305F\u8C46</h3><p class="feature-description" data-v-b9afb4b5> \u4E16\u754C\u5404\u5730\u306E\u512A\u826F\u8FB2\u5712\u304B\u3089\u76F4\u63A5\u4ED5\u5165\u308C\u305F\u9AD8\u54C1\u8CEA\u306A\u30B3\u30FC\u30D2\u30FC\u8C46\u306E\u307F\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 </p></div><div class="quality-feature" data-v-b9afb4b5><h3 class="feature-title" data-v-b9afb4b5>\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853</h3><p class="feature-description" data-v-b9afb4b5> \u8C46\u306E\u7279\u6027\u3092\u6700\u5927\u9650\u306B\u5F15\u304D\u51FA\u3059\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u306B\u3088\u308A\u3001\u6700\u9AD8\u306E\u98A8\u5473\u3092\u5B9F\u73FE\u3057\u3066\u3044\u307E\u3059\u3002 </p></div><div class="quality-feature" data-v-b9afb4b5><h3 class="feature-title" data-v-b9afb4b5>\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u53D6\u308A\u7D44\u307F</h3><p class="feature-description" data-v-b9afb4b5> \u74B0\u5883\u3068\u751F\u7523\u8005\u306B\u914D\u616E\u3057\u305F\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u30B3\u30FC\u30D2\u30FC\u4F5C\u308A\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u307E\u3059\u3002 </p></div></div></div><div class="quality-image" data-v-b9afb4b5><img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&amp;h=400" alt="Coffee Quality" data-v-b9afb4b5></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/coffee.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const coffee = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b9afb4b5"]]);

export { coffee as default };
//# sourceMappingURL=coffee-CSREi7ZJ.mjs.map
