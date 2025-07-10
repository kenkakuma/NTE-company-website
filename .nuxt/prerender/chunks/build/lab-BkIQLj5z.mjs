import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue/server-renderer/index.mjs';
import { u as useSEO } from './useSEO-BevYkgtu.mjs';
import { V as VIcon } from './VIcon-BPJNs7N2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/destr/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/hookable/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/ufo/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/ohash/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/klona/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/defu/dist/defu.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/scule/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/unctx/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/pathe/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/unhead/dist/server.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/devalue/index.js';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lab",
  __ssrInlineRender: true,
  setup(__props) {
    const { setSEO } = useSEO();
    setSEO("lab");
    const getResearchIcon = (researchId) => {
      const iconMap = {
        "ai-iot": "mdi-brain",
        "sustainable": "mdi-leaf"
      };
      return iconMap[researchId] || "mdi-microscope";
    };
    const getPartnerIcon = (partnerId) => {
      const iconMap = {
        1: "mdi-school",
        2: "mdi-laptop",
        3: "mdi-trophy",
        4: "mdi-currency-usd"
      };
      return iconMap[partnerId] || "mdi-handshake";
    };
    const researchAreas = [
      {
        id: "ai-iot",
        title: "AI\u30FBIoT\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC",
        description: "\u4EBA\u5DE5\u77E5\u80FD\u3068IoT\u306E\u878D\u5408\u6280\u8853",
        features: [
          "\u6A5F\u68B0\u5B66\u7FD2\u30FB\u6DF1\u5C64\u5B66\u7FD2",
          "\u30B9\u30DE\u30FC\u30C8\u30C7\u30D0\u30A4\u30B9\u958B\u767A",
          "\u30C7\u30FC\u30BF\u5206\u6790\u30FB\u4E88\u6E2C\u6280\u8853",
          "\u30A8\u30C3\u30B8\u30B3\u30F3\u30D4\u30E5\u30FC\u30C6\u30A3\u30F3\u30B0"
        ]
      },
      {
        id: "sustainable",
        title: "\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u6280\u8853",
        description: "\u6301\u7D9A\u53EF\u80FD\u306A\u793E\u4F1A\u5B9F\u73FE\u306E\u305F\u3081\u306E\u6280\u8853",
        features: [
          "\u74B0\u5883\u914D\u616E\u578B\u6750\u6599\u958B\u767A",
          "\u30A8\u30CD\u30EB\u30AE\u30FC\u52B9\u7387\u5316\u6280\u8853",
          "\u30EA\u30B5\u30A4\u30AF\u30EB\u6280\u8853\u9769\u65B0",
          "\u30AB\u30FC\u30DC\u30F3\u30CB\u30E5\u30FC\u30C8\u30E9\u30EB"
        ]
      }
    ];
    const partners = [
      {
        id: 1,
        name: "\u5927\u5B66\u7814\u7A76\u6A5F\u95A2",
        type: "\u5B66\u8853\u30D1\u30FC\u30C8\u30CA\u30FC"
      },
      {
        id: 2,
        name: "\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u4F01\u696D",
        type: "\u6280\u8853\u30D1\u30FC\u30C8\u30CA\u30FC"
      },
      {
        id: 3,
        name: "\u30B9\u30DD\u30FC\u30C4\u56E3\u4F53",
        type: "\u5B9F\u8A3C\u30D1\u30FC\u30C8\u30CA\u30FC"
      },
      {
        id: 4,
        name: "\u6295\u8CC7\u6A5F\u95A2",
        type: "\u8CC7\u91D1\u30D1\u30FC\u30C8\u30CA\u30FC"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "anthropic-theme lab-page" }, _attrs))} data-v-d248c239><section class="lab-hero-section" data-v-d248c239><div class="custom-container" data-v-d248c239><div class="hero-content" data-v-d248c239><h1 class="hero-title" data-v-d248c239>\u30E9\u30DC | LAB</h1><p class="hero-subtitle" data-v-d248c239>\u6280\u8853\u7814\u7A76\u30FB\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3</p><p class="hero-description" data-v-d248c239> \u6700\u5148\u7AEF\u6280\u8853\u3068\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u3067\u672A\u6765\u3092\u5275\u9020 </p></div></div></section><section class="research-areas-section" data-v-d248c239><div class="custom-container" data-v-d248c239><div class="section-header" data-v-d248c239><h2 class="section-title" data-v-d248c239>\u7814\u7A76\u958B\u767A\u9818\u57DF</h2><p class="section-description" data-v-d248c239> \u9769\u65B0\u7684\u306A\u6280\u8853\u7814\u7A76\u3067\u793E\u4F1A\u8AB2\u984C\u306E\u89E3\u6C7A\u306B\u53D6\u308A\u7D44\u3080\u5C02\u9580\u5206\u91CE </p></div><div class="research-grid" data-v-d248c239><!--[-->`);
      ssrRenderList(researchAreas, (area) => {
        _push(`<div class="research-card" data-v-d248c239><div class="research-icon" data-v-d248c239>`);
        _push(ssrRenderComponent(VIcon, {
          icon: getResearchIcon(area.id),
          size: "48",
          color: "#E17B47"
        }, null, _parent));
        _push(`</div><h3 class="research-title" data-v-d248c239>${ssrInterpolate(area.title)}</h3><p class="research-description" data-v-d248c239>${ssrInterpolate(area.description)}</p><ul class="research-features" data-v-d248c239><!--[-->`);
        ssrRenderList(area.features, (feature) => {
          _push(`<li data-v-d248c239>${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></section><section class="innovation-process-section" data-v-d248c239><div class="custom-container" data-v-d248c239><div class="process-content" data-v-d248c239><div class="process-text" data-v-d248c239><h2 class="section-title" data-v-d248c239>\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u5275\u51FA\u30D7\u30ED\u30BB\u30B9</h2><div class="process-steps" data-v-d248c239><div class="process-step" data-v-d248c239><h3 class="step-title" data-v-d248c239>1. \u8ABF\u67FB\u30FB\u5206\u6790</h3><p class="step-description" data-v-d248c239> \u5E02\u5834\u52D5\u5411\u3084\u6280\u8853\u30C8\u30EC\u30F3\u30C9\u3092\u5FB9\u5E95\u7684\u306B\u8ABF\u67FB\u30FB\u5206\u6790\u3057\u3001\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u306E\u6A5F\u4F1A\u3092\u7279\u5B9A\u3057\u307E\u3059\u3002 </p></div><div class="process-step" data-v-d248c239><h3 class="step-title" data-v-d248c239>2. \u7814\u7A76\u30FB\u958B\u767A</h3><p class="step-description" data-v-d248c239> \u6700\u65B0\u6280\u8853\u3068\u5275\u9020\u7684\u30A2\u30A4\u30C7\u30A2\u3092\u7D44\u307F\u5408\u308F\u305B\u305F\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u767A\u3057\u307E\u3059\u3002 </p></div><div class="process-step" data-v-d248c239><h3 class="step-title" data-v-d248c239>3. \u5B9F\u8A3C\u30FB\u691C\u8A3C</h3><p class="step-description" data-v-d248c239> \u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\u306E\u4F5C\u6210\u3068\u5B9F\u8A3C\u5B9F\u9A13\u306B\u3088\u308A\u3001\u6280\u8853\u306E\u6709\u52B9\u6027\u3092\u691C\u8A3C\u3057\u307E\u3059\u3002 </p></div><div class="process-step" data-v-d248c239><h3 class="step-title" data-v-d248c239>4. \u5B9F\u7528\u5316\u30FB\u5C55\u958B</h3><p class="step-description" data-v-d248c239> \u5B9F\u8A3C\u3055\u308C\u305F\u6280\u8853\u306E\u5B9F\u7528\u5316\u3068\u5E02\u5834\u5C55\u958B\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u307E\u3059\u3002 </p></div></div></div><div class="process-image" data-v-d248c239><img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&amp;h=400" alt="Innovation Process" data-v-d248c239></div></div></div></section><section class="partnership-section" data-v-d248c239><div class="custom-container" data-v-d248c239><div class="section-header" data-v-d248c239><h2 class="section-title" data-v-d248c239>\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7</h2><p class="section-description" data-v-d248c239> \u7814\u7A76\u958B\u767A\u3092\u652F\u3048\u308B\u4FE1\u983C\u3067\u304D\u308B\u30D1\u30FC\u30C8\u30CA\u30FC\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF </p></div><div class="partners-grid" data-v-d248c239><!--[-->`);
      ssrRenderList(partners, (partner) => {
        _push(`<div class="partner-card" data-v-d248c239><div class="partner-icon" data-v-d248c239>`);
        _push(ssrRenderComponent(VIcon, {
          icon: getPartnerIcon(partner.id),
          size: "48",
          color: "#E17B47"
        }, null, _parent));
        _push(`</div><h3 class="partner-name" data-v-d248c239>${ssrInterpolate(partner.name)}</h3><p class="partner-type" data-v-d248c239>${ssrInterpolate(partner.type)}</p></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lab.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lab = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d248c239"]]);

export { lab as default };
//# sourceMappingURL=lab-BkIQLj5z.mjs.map
