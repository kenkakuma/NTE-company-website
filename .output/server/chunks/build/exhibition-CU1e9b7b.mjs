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
  __name: "exhibition",
  __ssrInlineRender: true,
  setup(__props) {
    const { setSEO } = useSEO();
    setSEO("exhibition");
    const getServiceIcon = (serviceId) => {
      const iconMap = {
        planning: "mdi-palette-outline",
        management: "mdi-calendar-check",
        promotion: "mdi-bullhorn"
      };
      return iconMap[serviceId] || "mdi-presentation";
    };
    const services = [
      {
        id: "planning",
        title: "\u5C55\u793A\u4F01\u753B\u30FB\u30C7\u30B6\u30A4\u30F3",
        description: "\u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u5C55\u793A\u306E\u4F01\u753B\u304B\u3089\u30C7\u30B6\u30A4\u30F3\u307E\u3067",
        features: [
          "\u30B3\u30F3\u30BB\u30D7\u30C8\u4F01\u753B\u30FB\u7ACB\u6848",
          "\u7A7A\u9593\u30C7\u30B6\u30A4\u30F3\u30FB\u8A2D\u8A08",
          "\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u5C55\u793A",
          "\u30C7\u30B8\u30BF\u30EB\u6280\u8853\u6D3B\u7528"
        ]
      },
      {
        id: "management",
        title: "\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u30FB\u7BA1\u7406",
        description: "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u306A\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u30B5\u30FC\u30D3\u30B9",
        features: [
          "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406",
          "\u4F1A\u5834\u8A2D\u55B6\u30FB\u904B\u55B6",
          "\u30B9\u30BF\u30C3\u30D5\u30A3\u30F3\u30B0",
          "\u5B89\u5168\u7BA1\u7406\u30FB\u8B66\u5099"
        ]
      },
      {
        id: "promotion",
        title: "\u6587\u5316\u30FB\u82B8\u8853\u30D7\u30ED\u30E2\u30FC\u30B7\u30E7\u30F3",
        description: "\u52B9\u679C\u7684\u306A\u30D7\u30ED\u30E2\u30FC\u30B7\u30E7\u30F3\u6226\u7565\u306E\u7ACB\u6848\u30FB\u5B9F\u884C",
        features: [
          "\u30DE\u30FC\u30B1\u30C6\u30A3\u30F3\u30B0\u6226\u7565",
          "\u30E1\u30C7\u30A3\u30A2\u5BFE\u5FDC",
          "SNS\u6D3B\u7528",
          "\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u69CB\u7BC9"
        ]
      }
    ];
    const processSteps = [
      {
        id: 1,
        title: "\u4F01\u753B\u30FB\u63D0\u6848",
        description: "\u304A\u5BA2\u69D8\u306E\u30CB\u30FC\u30BA\u3092\u7406\u89E3\u3057\u3001\u6700\u9069\u306A\u4F01\u753B\u3092\u63D0\u6848\u3044\u305F\u3057\u307E\u3059"
      },
      {
        id: 2,
        title: "\u8A2D\u8A08\u30FB\u30C7\u30B6\u30A4\u30F3",
        description: "\u8A73\u7D30\u306A\u8A2D\u8A08\u3068\u30C7\u30B6\u30A4\u30F3\u3067\u7406\u60F3\u306E\u7A7A\u9593\u3092\u5275\u9020\u3057\u307E\u3059"
      },
      {
        id: 3,
        title: "\u5236\u4F5C\u30FB\u6E96\u5099",
        description: "\u9AD8\u54C1\u8CEA\u306A\u5236\u4F5C\u3068\u5165\u5FF5\u306A\u6E96\u5099\u3067\u6210\u529F\u3092\u78BA\u5B9F\u306B\u3057\u307E\u3059"
      },
      {
        id: 4,
        title: "\u5B9F\u65BD\u30FB\u904B\u55B6",
        description: "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u306A\u904B\u55B6\u3067\u6700\u9AD8\u306E\u4F53\u9A13\u3092\u63D0\u4F9B\u3057\u307E\u3059"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "anthropic-theme exhibition-page" }, _attrs))} data-v-e740bb3a><section class="exhibition-hero-section" data-v-e740bb3a><div class="custom-container" data-v-e740bb3a><div class="hero-content" data-v-e740bb3a><h1 class="hero-title" data-v-e740bb3a>\u5C55\u89A7 | EXHIBITION</h1><p class="hero-subtitle" data-v-e740bb3a>\u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u4E8B\u696D</p><p class="hero-description" data-v-e740bb3a> \u9769\u65B0\u7684\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u5370\u8C61\u7684\u306A\u4F53\u9A13\u3092\u5275\u9020\u3057\u307E\u3059 </p></div></div></section><section class="services-section" data-v-e740bb3a><div class="custom-container" data-v-e740bb3a><div class="section-header" data-v-e740bb3a><h2 class="section-title" data-v-e740bb3a>\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u30B5\u30FC\u30D3\u30B9</h2><p class="section-description" data-v-e740bb3a> \u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u5206\u91CE\u306E\u5C02\u9580\u7684\u306A\u5C55\u793A\u4F01\u753B\u3068\u904B\u55B6\u30B5\u30FC\u30D3\u30B9 </p></div><div class="services-grid" data-v-e740bb3a><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<div class="service-card" data-v-e740bb3a><div class="service-icon" data-v-e740bb3a>`);
        _push(ssrRenderComponent(VIcon, {
          icon: getServiceIcon(service.id),
          size: "48",
          color: "#E17B47"
        }, null, _parent));
        _push(`</div><h3 class="service-title" data-v-e740bb3a>${ssrInterpolate(service.title)}</h3><p class="service-description" data-v-e740bb3a>${ssrInterpolate(service.description)}</p><ul class="service-features" data-v-e740bb3a><!--[-->`);
        ssrRenderList(service.features, (feature) => {
          _push(`<li data-v-e740bb3a>${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></section><section class="quality-section" data-v-e740bb3a><div class="custom-container" data-v-e740bb3a><div class="quality-content" data-v-e740bb3a><div class="quality-text" data-v-e740bb3a><h2 class="section-title" data-v-e740bb3a>\u54C1\u8CEA\u3078\u306E\u3053\u3060\u308F\u308A\uFF082025\u5E741\u6708\u6700\u65B0\u7248\uFF09</h2><div class="quality-features" data-v-e740bb3a><div class="quality-feature" data-v-e740bb3a><h3 class="feature-title" data-v-e740bb3a>\u9769\u65B0\u7684\u306A\u4F01\u753B\u529B</h3><p class="feature-description" data-v-e740bb3a> \u72EC\u5275\u7684\u306A\u30A2\u30A4\u30C7\u30A2\u3068\u8C4A\u5BCC\u306A\u7D4C\u9A13\u306B\u57FA\u3065\u3044\u3066\u3001\u304A\u5BA2\u69D8\u306E\u671F\u5F85\u3092\u8D85\u3048\u308B\u5C55\u793A\u4F01\u753B\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002 </p></div><div class="quality-feature" data-v-e740bb3a><h3 class="feature-title" data-v-e740bb3a>\u6700\u65B0\u6280\u8853\u306E\u6D3B\u7528</h3><p class="feature-description" data-v-e740bb3a> \u30C7\u30B8\u30BF\u30EB\u6280\u8853\u3068\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u30E1\u30C7\u30A3\u30A2\u3092\u99C6\u4F7F\u3057\u3066\u3001\u6765\u5834\u8005\u306B\u5370\u8C61\u7684\u306A\u4F53\u9A13\u3092\u5275\u9020\u3057\u307E\u3059\u3002 </p></div><div class="quality-feature" data-v-e740bb3a><h3 class="feature-title" data-v-e740bb3a>\u7D30\u90E8\u3078\u306E\u914D\u616E</h3><p class="feature-description" data-v-e740bb3a> \u7A7A\u9593\u30C7\u30B6\u30A4\u30F3\u304B\u3089\u904B\u55B6\u307E\u3067\u3001\u3059\u3079\u3066\u306E\u7D30\u90E8\u306B\u308F\u305F\u3063\u3066\u54C1\u8CEA\u306B\u3053\u3060\u308F\u3063\u305F\u5C55\u793A\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002 </p></div></div></div><div class="quality-image" data-v-e740bb3a><img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&amp;h=400" alt="Exhibition Quality" data-v-e740bb3a></div></div></div></section><section class="process-section" data-v-e740bb3a><div class="custom-container" data-v-e740bb3a><div class="section-header" data-v-e740bb3a><h2 class="section-title" data-v-e740bb3a>\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9032\u884C\u30D7\u30ED\u30BB\u30B9</h2><p class="section-description" data-v-e740bb3a> \u304A\u5BA2\u69D8\u306E\u30CB\u30FC\u30BA\u306B\u5FDC\u3048\u308B\u4F53\u7CFB\u7684\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u7BA1\u7406 </p></div><div class="process-steps" data-v-e740bb3a><!--[-->`);
      ssrRenderList(processSteps, (step, index) => {
        _push(`<div class="process-step" data-v-e740bb3a><div class="step-number-wrapper" data-v-e740bb3a><div class="step-number" data-v-e740bb3a>${ssrInterpolate(index + 1)}</div></div><h3 class="step-title" data-v-e740bb3a>${ssrInterpolate(step.title)}</h3><p class="step-description" data-v-e740bb3a>${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/exhibition.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exhibition = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e740bb3a"]]);

export { exhibition as default };
//# sourceMappingURL=exhibition-CU1e9b7b.mjs.map
