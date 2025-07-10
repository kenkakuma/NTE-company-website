import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderComponent } from 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue/server-renderer/index.mjs';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { setSEO } = useSEO();
    setSEO("contact");
    const loading = ref(false);
    const errors = ref({
      firstName: "",
      lastName: "",
      email: "",
      category: "",
      message: "",
      agreement: ""
    });
    const form = ref({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      category: "",
      message: "",
      agreement: false
    });
    const getContactIcon = (type) => {
      const iconMap = {
        email: "mdi-email",
        office: "mdi-office-building",
        hours: "mdi-clock-outline"
      };
      return iconMap[type] || "mdi-phone";
    };
    const categories = [
      "\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u304A\u554F\u3044\u5408\u308F\u305B",
      "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u306B\u3064\u3044\u3066",
      "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u306B\u3064\u3044\u3066",
      "LAB\u30FB\u7814\u7A76\u958B\u767A\u306B\u3064\u3044\u3066",
      "\u30AF\u30E9\u30D6\u30FB\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306B\u3064\u3044\u3066",
      "\u63A1\u7528\u306B\u3064\u3044\u3066",
      "\u305D\u306E\u4ED6"
    ];
    const contactInfo = [
      {
        title: "Email",
        type: "email",
        details: [
          "info@no-trace.jp",
          "support@no-trace.jp"
        ]
      },
      {
        title: "Office",
        type: "office",
        details: [
          "\u6771\u4EAC\u90FD\u6E0B\u8C37\u533A",
          "(\u8A2D\u7ACB\u6E96\u5099\u4E2D\u306B\u3064\u304D\u8A73\u7D30\u306F\u5F8C\u65E5\u516C\u958B)"
        ]
      },
      {
        title: "Business Hours",
        type: "hours",
        details: [
          "\u5E73\u65E5 9:00-18:00",
          "\u571F\u65E5\u795D\u65E5\u4F11\u696D"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "anthropic-theme contact-page" }, _attrs))} data-v-7d385cbc><section class="contact-hero-section" data-v-7d385cbc><div class="custom-container" data-v-7d385cbc><div class="hero-content" data-v-7d385cbc><h1 class="hero-title" data-v-7d385cbc>\u304A\u554F\u3044\u5408\u308F\u305B</h1><p class="hero-description" data-v-7d385cbc> NO TRACE EXPLORER\u3078\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u3001\u3054\u76F8\u8AC7\u306F\u3053\u3061\u3089\u304B\u3089 </p></div></div></section><section class="contact-form-section" data-v-7d385cbc><div class="custom-container" data-v-7d385cbc><div class="form-wrapper" data-v-7d385cbc><div class="form-header" data-v-7d385cbc><h2 class="section-title" data-v-7d385cbc>\u304A\u6C17\u8EFD\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044</h2><p class="section-description" data-v-7d385cbc> \u304A\u5BA2\u69D8\u306E\u3054\u8981\u671B\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002\u5C02\u9580\u30B9\u30BF\u30C3\u30D5\u304C\u4E01\u5BE7\u306B\u3054\u5BFE\u5FDC\u3044\u305F\u3057\u307E\u3059\u3002 </p></div><form class="contact-form" data-v-7d385cbc><div class="form-row" data-v-7d385cbc><div class="form-group" data-v-7d385cbc><label class="form-label" for="firstName" data-v-7d385cbc>\u59D3 *</label><input id="firstName"${ssrRenderAttr("value", unref(form).firstName)} type="text" class="${ssrRenderClass([{ "form-input-error": unref(errors).firstName }, "form-input"])}" required data-v-7d385cbc>`);
      if (unref(errors).firstName) {
        _push(`<span class="error-message" data-v-7d385cbc>${ssrInterpolate(unref(errors).firstName)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7d385cbc><label class="form-label" for="lastName" data-v-7d385cbc>\u540D *</label><input id="lastName"${ssrRenderAttr("value", unref(form).lastName)} type="text" class="${ssrRenderClass([{ "form-input-error": unref(errors).lastName }, "form-input"])}" required data-v-7d385cbc>`);
      if (unref(errors).lastName) {
        _push(`<span class="error-message" data-v-7d385cbc>${ssrInterpolate(unref(errors).lastName)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="form-group" data-v-7d385cbc><label class="form-label" for="email" data-v-7d385cbc>\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 *</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="${ssrRenderClass([{ "form-input-error": unref(errors).email }, "form-input"])}" required data-v-7d385cbc>`);
      if (unref(errors).email) {
        _push(`<span class="error-message" data-v-7d385cbc>${ssrInterpolate(unref(errors).email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7d385cbc><label class="form-label" for="company" data-v-7d385cbc>\u4F1A\u793E\u540D\u30FB\u7D44\u7E54\u540D</label><input id="company"${ssrRenderAttr("value", unref(form).company)} type="text" class="form-input" data-v-7d385cbc></div><div class="form-group" data-v-7d385cbc><label class="form-label" for="category" data-v-7d385cbc>\u304A\u554F\u3044\u5408\u308F\u305B\u7A2E\u5225 *</label><select id="category" class="${ssrRenderClass([{ "form-input-error": unref(errors).category }, "form-select"])}" required data-v-7d385cbc><option value="" data-v-7d385cbc${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, "") : ssrLooseEqual(unref(form).category, "")) ? " selected" : ""}>\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<option${ssrRenderAttr("value", category)} data-v-7d385cbc${ssrIncludeBooleanAttr(Array.isArray(unref(form).category) ? ssrLooseContain(unref(form).category, category) : ssrLooseEqual(unref(form).category, category)) ? " selected" : ""}>${ssrInterpolate(category)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(errors).category) {
        _push(`<span class="error-message" data-v-7d385cbc>${ssrInterpolate(unref(errors).category)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7d385cbc><label class="form-label" for="message" data-v-7d385cbc>\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9 *</label><textarea id="message" class="${ssrRenderClass([{ "form-input-error": unref(errors).message }, "form-textarea"])}" rows="5" required data-v-7d385cbc>${ssrInterpolate(unref(form).message)}</textarea>`);
      if (unref(errors).message) {
        _push(`<span class="error-message" data-v-7d385cbc>${ssrInterpolate(unref(errors).message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-7d385cbc><label class="checkbox-label" data-v-7d385cbc><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).agreement) ? ssrLooseContain(unref(form).agreement, null) : unref(form).agreement) ? " checked" : ""} type="checkbox" class="form-checkbox" required data-v-7d385cbc><span class="checkbox-text" data-v-7d385cbc><a href="#" class="privacy-link" data-v-7d385cbc>\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC</a>\u306B\u540C\u610F\u3057\u307E\u3059 </span></label>`);
      if (unref(errors).agreement) {
        _push(`<span class="error-message" data-v-7d385cbc>${ssrInterpolate(unref(errors).agreement)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-submit" data-v-7d385cbc><button type="submit" class="submit-button"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} data-v-7d385cbc>`);
      if (unref(loading)) {
        _push(`<span data-v-7d385cbc>\u9001\u4FE1\u4E2D...</span>`);
      } else {
        _push(`<span data-v-7d385cbc>\u9001\u4FE1\u3059\u308B</span>`);
      }
      _push(`</button></div></form></div></div></section><section class="contact-info-section" data-v-7d385cbc><div class="custom-container" data-v-7d385cbc><div class="section-header" data-v-7d385cbc><h2 class="section-title" data-v-7d385cbc>\u304A\u554F\u3044\u5408\u308F\u305B\u5148</h2><p class="section-description" data-v-7d385cbc> \u305D\u306E\u4ED6\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u65B9\u6CD5 </p></div><div class="contact-cards" data-v-7d385cbc><!--[-->`);
      ssrRenderList(contactInfo, (contact2) => {
        _push(`<div class="contact-card" data-v-7d385cbc><div class="contact-icon" data-v-7d385cbc>`);
        _push(ssrRenderComponent(VIcon, {
          icon: getContactIcon(contact2.type),
          size: "32",
          color: "#E17B47",
          class: "contact-icon-mdi"
        }, null, _parent));
        _push(`</div><h3 class="contact-title" data-v-7d385cbc>${ssrInterpolate(contact2.title)}</h3><div class="contact-details" data-v-7d385cbc><!--[-->`);
        ssrRenderList(contact2.details, (item) => {
          _push(`<div class="contact-detail" data-v-7d385cbc>${ssrInterpolate(item)}</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d385cbc"]]);

export { contact as default };
//# sourceMappingURL=contact-DM7rNHrz.mjs.map
