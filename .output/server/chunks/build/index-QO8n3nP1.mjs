import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, createVNode, unref, createBlock, openBlock, Fragment, renderList, toDisplayString, withDirectives, vShow, inject, reactive, provide, useSSRContext } from 'vue';
import { u as useHead, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { u as useSEO } from './useSEO-BevYkgtu.mjs';
import { V as VContainer } from './VContainer-UkpXLacN.mjs';
import { V as VBtn, a as VRow, b as VCol } from './VRow-DO-Unv4W.mjs';
import { V as VIcon } from './VIcon-BPJNs7N2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const HeadComponentCtxSymbol = Symbol("head-component");
const TagPositionProps = {
  /**
   * @deprecated Use tagPosition
   */
  body: { type: Boolean, default: void 0 },
  tagPosition: { type: String }
};
const normalizeProps = (_props) => {
  const props = Object.fromEntries(
    Object.entries(_props).filter(([_, value]) => value !== void 0)
  );
  if (typeof props.body !== "undefined") {
    props.tagPosition = props.body ? "bodyClose" : "head";
  }
  if (typeof props.renderPriority !== "undefined") {
    props.tagPriority = props.renderPriority;
  }
  return props;
};
function useHeadComponentCtx() {
  return inject(HeadComponentCtxSymbol, createHeadComponentCtx, true);
}
function createHeadComponentCtx() {
  const prev = inject(HeadComponentCtxSymbol, null);
  if (prev) {
    return prev;
  }
  const input = reactive({});
  const entry = useHead(input);
  const ctx = { input, entry };
  provide(HeadComponentCtxSymbol, ctx);
  return ctx;
}
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: { type: [String, Object, Array], default: void 0 },
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: { type: [String, Object, Array], default: void 0 },
  tabindex: String,
  title: String,
  translate: String,
  /**
   * @deprecated Use tagPriority
   */
  renderPriority: [String, Number],
  /**
   * Unhead prop to modify the priority of the tag.
   */
  tagPriority: { type: [String, Number] }
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    title: String
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.noscript || (input.noscript = []);
    const idx = input.noscript.push({}) - 1;
    return () => {
      var _a;
      const noscript = normalizeProps(props);
      const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
      if (textContent) {
        noscript.innerHTML = textContent;
      }
      input.noscript[idx] = noscript;
      return null;
    };
  }
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.link || (input.link = []);
    const idx = input.link.push({}) - 1;
    return () => {
      input.link[idx] = normalizeProps(props);
      return null;
    };
  }
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    return () => {
      input.base = normalizeProps(props);
      return null;
    };
  }
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup(_, { slots }) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b, _c;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      input.title = ((_b = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _b.children) ? String((_c = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _c.children) : void 0;
      return null;
    };
  }
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    property: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.meta || (input.meta = []);
    const idx = input.meta.push({}) - 1;
    return () => {
      const meta = { "http-equiv": props.httpEquiv, ...normalizeProps(props) };
      if ("httpEquiv" in meta) {
        delete meta.httpEquiv;
      }
      input.meta[idx] = meta;
      return null;
    };
  }
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.style || (input.style = []);
    const idx = input.style.push({}) - 1;
    return () => {
      var _a, _b, _c;
      const style = normalizeProps(props);
      const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (textContent) {
        input.style[idx] = style;
        style.textContent = textContent;
      }
      return null;
    };
  }
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => {
    createHeadComponentCtx();
    return () => {
      var _a, _b;
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.htmlAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.bodyAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
const articlesData = [
  {
    id: 1,
    date: "2025.01.15",
    title: "\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u8A2D\u7ACB\u6E96\u5099\u958B\u59CB\u306E\u304A\u77E5\u3089\u305B",
    category: "\u4F01\u696D\u30CB\u30E5\u30FC\u30B9",
    excerpt: "\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3068\u3057\u3066\u3001\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u8A2D\u7ACB\u6E96\u5099\u3092\u958B\u59CB\u3044\u305F\u3057\u307E\u3059\u3002",
    content: `
      <p>\u5E73\u7D20\u3088\u308A\u683C\u5225\u306E\u3054\u9AD8\u914D\u3092\u8CDC\u308A\u3001\u539A\u304F\u5FA1\u793C\u7533\u3057\u4E0A\u3052\u307E\u3059\u3002</p>
      <p>\u3053\u306E\u5EA6\u3001\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3068\u3057\u3066\u3001<strong>\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E</strong>\u306E\u8A2D\u7ACB\u6E96\u5099\u3092\u958B\u59CB\u3044\u305F\u3057\u307E\u3057\u305F\u3053\u3068\u3092\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u3002</p>
      
      <h3>\u8A2D\u7ACB\u306E\u80CC\u666F</h3>
      <p>\u6025\u901F\u306B\u5909\u5316\u3059\u308B\u73FE\u4EE3\u793E\u4F1A\u306B\u304A\u3044\u3066\u3001\u5F93\u6765\u306E\u67A0\u7D44\u307F\u3092\u8D85\u3048\u305F\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u304C\u6C42\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u79C1\u305F\u3061\u306F\u300C\u672A\u77E5\u306E\u9818\u57DF\u3092\u63A2\u7D22\u3057\u3001\u8F1D\u304F\u672A\u6765\u3092\u7BC9\u304F\u300D\u3068\u3044\u3046\u7406\u5FF5\u306E\u3082\u3068\u3001\u591A\u5C90\u306B\u308F\u305F\u308B\u4E8B\u696D\u5206\u91CE\u3067\u4FA1\u5024\u5275\u9020\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002</p>
      
      <h3>\u4E8B\u696D\u5185\u5BB9</h3>
      <ul>
        <li><strong>\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D</strong>\uFF1A\u9AD8\u54C1\u8CEA\u5546\u54C1\u306E\u4F01\u753B\u958B\u767A\u30FB\u8F38\u5165\u30FB\u30D6\u30E9\u30F3\u30C9\u5C55\u958B</li>
        <li><strong>\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6</strong>\uFF1A\u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u5206\u91CE\u306E\u4F01\u753B\u904B\u55B6</li>
        <li><strong>\u6280\u8853\u7814\u7A76\u958B\u767A</strong>\uFF1A\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u5275\u51FA\u30FB\u30B9\u30DD\u30FC\u30C4\u95A2\u9023\u7814\u7A76</li>
        <li><strong>\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u904B\u55B6</strong>\uFF1A\u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u30FB\u4F1A\u54E1\u5236\u30B5\u30FC\u30D3\u30B9</li>
      </ul>
      
      <h3>\u4ECA\u5F8C\u306E\u4E88\u5B9A</h3>
      <p>2025\u5E74\u6625\u306E\u6B63\u5F0F\u8A2D\u7ACB\u306B\u5411\u3051\u3066\u3001\u5404\u7A2E\u6E96\u5099\u3092\u9032\u3081\u3066\u304A\u308A\u307E\u3059\u3002\u8A2D\u7ACB\u5F8C\u306F\u3001\u3088\u308A\u591A\u304F\u306E\u7686\u69D8\u306B\u4FA1\u5024\u306E\u3042\u308B\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3067\u304D\u308B\u3088\u3046\u52AA\u3081\u3066\u307E\u3044\u308A\u307E\u3059\u3002</p>
      
      <p>\u4ECA\u5F8C\u3068\u3082\u4F55\u5352\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u7533\u3057\u4E0A\u3052\u307E\u3059\u3002</p>
    `,
    readTime: "3\u5206",
    tags: ["\u8A2D\u7ACB", "\u4F01\u696D\u60C5\u5831", "\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3", "\u4E8B\u696D\u5C55\u958B"]
  },
  {
    id: 2,
    date: "2025.01.10",
    title: "\u6771\u4EAC\u30EB\u30A2\u30FC\u30FB\u30D5\u30E9\u30A4\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u5B66\u9662 2025\u5E74\u6625\u5B63\u30B3\u30FC\u30B9\u52DF\u96C6\u958B\u59CB",
    category: "\u30B5\u30FC\u30D3\u30B9",
    excerpt: "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u306A\u6280\u8853\u6307\u5C0E\u3068\u6700\u65B0\u5668\u5177\u3092\u7528\u3044\u305F\u5B9F\u8DF5\u7684\u306A\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u6280\u8853\u7FD2\u5F97\u30D7\u30ED\u30B0\u30E9\u30E0\u306E\u53D7\u8B1B\u751F\u3092\u52DF\u96C6\u3044\u305F\u3057\u307E\u3059\u3002",
    content: `
      <p>\u6771\u4EAC\u30EB\u30A2\u30FC\u30FB\u30D5\u30E9\u30A4\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u5B66\u9662\u3067\u306F\u30012025\u5E74\u6625\u5B63\u30B3\u30FC\u30B9\u306E\u53D7\u8B1B\u751F\u52DF\u96C6\u3092\u958B\u59CB\u3044\u305F\u3057\u307E\u3059\u3002</p>
      
      <h3>\u30B3\u30FC\u30B9\u6982\u8981</h3>
      <p>\u521D\u5FC3\u8005\u304B\u3089\u4E0A\u7D1A\u8005\u307E\u3067\u3001\u30EC\u30D9\u30EB\u306B\u5FDC\u3058\u305F\u5C02\u9580\u6307\u5C0E\u3092\u63D0\u4F9B\u3044\u305F\u3057\u307E\u3059\u3002\u7D4C\u9A13\u8C4A\u5BCC\u306A\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u306B\u3088\u308B\u5C11\u4EBA\u6570\u5236\u30EC\u30C3\u30B9\u30F3\u3067\u3001\u78BA\u5B9F\u306A\u6280\u8853\u5411\u4E0A\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002</p>
      
      <h3>\u30B3\u30FC\u30B9\u5185\u5BB9</h3>
      <ul>
        <li><strong>\u57FA\u790E\u6280\u8853\u7FD2\u5F97\u30B3\u30FC\u30B9</strong>\uFF08\u521D\u5FC3\u8005\u5411\u3051\u30FB\u51686\u56DE\uFF09
          <ul>
            <li>\u57FA\u672C\u7684\u306A\u30AD\u30E3\u30B9\u30C6\u30A3\u30F3\u30B0\u6280\u8853</li>
            <li>\u9B5A\u7A2E\u5225\u30EB\u30A2\u30FC\u9078\u629E</li>
            <li>\u5B89\u5168\u306A\u91E3\u884C\u306E\u5FC3\u5F97</li>
          </ul>
        </li>
        <li><strong>\u5FDC\u7528\u6280\u8853\u5411\u4E0A\u30B3\u30FC\u30B9</strong>\uFF08\u4E2D\u7D1A\u8005\u5411\u3051\u30FB\u51688\u56DE\uFF09
          <ul>
            <li>\u9AD8\u5EA6\u306A\u30AD\u30E3\u30B9\u30C6\u30A3\u30F3\u30B0\u6280\u8853</li>
            <li>\u30DD\u30A4\u30F3\u30C8\u9078\u629E\u3068\u6226\u7565</li>
            <li>\u5929\u5019\u30FB\u5B63\u7BC0\u306B\u5FDC\u3058\u305F\u6280\u8853</li>
          </ul>
        </li>
        <li><strong>\u30A8\u30AD\u30B9\u30D1\u30FC\u30C8\u990A\u6210\u30B3\u30FC\u30B9</strong>\uFF08\u4E0A\u7D1A\u8005\u5411\u3051\u30FB\u516810\u56DE\uFF09
          <ul>
            <li>\u7AF6\u6280\u30EC\u30D9\u30EB\u306E\u6280\u8853\u7FD2\u5F97</li>
            <li>\u6307\u5C0E\u8005\u8CC7\u683C\u53D6\u5F97\u30B5\u30DD\u30FC\u30C8</li>
            <li>\u30D7\u30ED\u30AC\u30A4\u30C9\u3078\u306E\u9053\u7B4B</li>
          </ul>
        </li>
      </ul>
      
      <h3>\u7279\u5178</h3>
      <p>\u53D7\u8B1B\u751F\u306B\u306F\u4EE5\u4E0B\u306E\u7279\u5178\u3092\u3054\u7528\u610F\u3057\u3066\u304A\u308A\u307E\u3059\uFF1A</p>
      <ul>
        <li>\u6700\u65B0\u5668\u5177\u306E\u7121\u6599\u30EC\u30F3\u30BF\u30EB</li>
        <li>\u5C02\u7528\u30D5\u30A3\u30FC\u30EB\u30C9\u3067\u306E\u5B9F\u7FD2</li>
        <li>\u4FEE\u4E86\u8A3C\u66F8\u306E\u767A\u884C</li>
        <li>\u7D99\u7D9A\u53D7\u8B1B\u5272\u5F15</li>
      </ul>
      
      <h3>\u7533\u8FBC\u65B9\u6CD5</h3>
      <p>\u8A73\u7D30\u306A\u5185\u5BB9\u304A\u3088\u3073\u7533\u8FBC\u65B9\u6CD5\u306B\u3064\u3044\u3066\u306F\u3001\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0\u3088\u308A\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002\u304A\u7533\u3057\u8FBC\u307F\u3092\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\u3002</p>
    `,
    readTime: "4\u5206",
    tags: ["\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0", "\u30B9\u30AF\u30FC\u30EB", "\u52DF\u96C6", "\u6625\u5B63\u30B3\u30FC\u30B9", "\u6280\u8853\u7FD2\u5F97"]
  },
  {
    id: 3,
    date: "2025.01.08",
    title: "\u53B3\u9078\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7\u62E1\u5145\u306B\u3064\u3044\u3066",
    category: "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D",
    excerpt: "\u4E16\u754C\u5404\u5730\u304B\u3089\u53B3\u9078\u3057\u305F\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u4F7F\u7528\u3057\u305F\u65B0\u5546\u54C1\u3092\u9806\u6B21\u767A\u8868\u3002\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u8ABF\u9054\u3068\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u3067\u6700\u9AD8\u306E\u54C1\u8CEA\u3092\u5B9F\u73FE\u3002",
    content: `
      <p>\u3053\u306E\u5EA6\u3001\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u306E\u62E1\u5145\u306E\u4E00\u74B0\u3068\u3057\u3066\u3001\u65B0\u305F\u306A\u5546\u54C1\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7\u3092\u767A\u8868\u3044\u305F\u3057\u307E\u3059\u3002</p>
      
      <h3>\u65B0\u5546\u54C1\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7</h3>
      
      <h4>\u30D7\u30EC\u30DF\u30A2\u30E0\u30B7\u30F3\u30B0\u30EB\u30AA\u30EA\u30B8\u30F3</h4>
      <ul>
        <li><strong>\u30A8\u30C1\u30AA\u30D4\u30A2 \u30A4\u30EB\u30AC\u30C1\u30A7\u30D5\u30A7 G1</strong>
          <br>\u30D5\u30ED\u30FC\u30E9\u30EB\u306A\u9999\u308A\u3068\u30D5\u30EB\u30FC\u30C6\u30A3\u30FC\u306A\u9178\u5473\u304C\u7279\u5FB4\u7684\u306A\u5E0C\u5C11\u54C1\u7A2E</li>
        <li><strong>\u30B8\u30E3\u30DE\u30A4\u30AB \u30D6\u30EB\u30FC\u30DE\u30A6\u30F3\u30C6\u30F3 No.1</strong>
          <br>\u4E16\u754C\u6700\u9AD8\u7D1A\u306E\u30B3\u30FC\u30D2\u30FC\u3068\u3057\u3066\u77E5\u3089\u308C\u308B\u6ED1\u3089\u304B\u306A\u5473\u308F\u3044</li>
        <li><strong>\u30CF\u30EF\u30A4 \u30B3\u30CA \u30A8\u30AF\u30B9\u30C8\u30E9\u30D5\u30A1\u30F3\u30B7\u30FC</strong>
          <br>\u706B\u5C71\u6027\u571F\u58CC\u3067\u80B2\u307E\u308C\u305F\u82B3\u9187\u306A\u9999\u308A\u3068\u30DE\u30A4\u30EB\u30C9\u306A\u5473</li>
      </ul>
      
      <h4>\u30AA\u30EA\u30B8\u30CA\u30EB\u30D6\u30EC\u30F3\u30C9</h4>
      <ul>
        <li><strong>NO TRACE \u30E2\u30FC\u30CB\u30F3\u30B0\u30D6\u30EC\u30F3\u30C9</strong>
          <br>\u4E00\u65E5\u306E\u59CB\u307E\u308A\u306B\u3075\u3055\u308F\u3057\u3044\u723D\u3084\u304B\u306A\u9178\u5473\u3068\u8EFD\u3084\u304B\u306A\u30DC\u30C7\u30A3</li>
        <li><strong>EXPLORER \u30A8\u30B9\u30D7\u30EC\u30C3\u30BD\u30D6\u30EC\u30F3\u30C9</strong>
          <br>\u6DF1\u3044\u30B3\u30AF\u3068\u82B3\u9187\u306A\u30AF\u30EC\u30DE\u304C\u697D\u3057\u3081\u308B\u672C\u683C\u30A8\u30B9\u30D7\u30EC\u30C3\u30BD</li>
        <li><strong>\u7121\u8FF9 \u30C7\u30AB\u30D5\u30A7\u30D6\u30EC\u30F3\u30C9</strong>
          <br>\u598A\u5A20\u4E2D\u306E\u65B9\u3084\u591C\u3067\u3082\u5B89\u5FC3\u3057\u3066\u697D\u3057\u3081\u308B\u30AB\u30D5\u30A7\u30A4\u30F3\u30EC\u30B9\u30B3\u30FC\u30D2\u30FC</li>
      </ul>
      
      <h3>\u54C1\u8CEA\u3078\u306E\u3053\u3060\u308F\u308A</h3>
      
      <h4>\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u8ABF\u9054</h4>
      <p>\u79C1\u305F\u3061\u306F\u74B0\u5883\u3068\u751F\u7523\u8005\u306E\u4E21\u65B9\u306B\u914D\u616E\u3057\u305F\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u30B3\u30FC\u30D2\u30FC\u4F5C\u308A\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u307E\u3059\u3002\u30D5\u30A7\u30A2\u30C8\u30EC\u30FC\u30C9\u8A8D\u8A3C\u3084\u6709\u6A5F\u683D\u57F9\u8A8D\u8A3C\u3092\u53D6\u5F97\u3057\u305F\u8FB2\u5712\u3068\u306E\u76F4\u63A5\u53D6\u5F15\u3092\u901A\u3058\u3066\u3001\u54C1\u8CEA\u306E\u9AD8\u3044\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u9069\u6B63\u4FA1\u683C\u3067\u8ABF\u9054\u3057\u3066\u3044\u307E\u3059\u3002</p>
      
      <h4>\u72EC\u81EA\u7119\u714E\u6280\u8853</h4>
      <p>\u8C46\u306E\u7279\u6027\u3092\u6700\u5927\u9650\u306B\u5F15\u304D\u51FA\u3059\u305F\u3081\u3001\u72EC\u81EA\u306B\u958B\u767A\u3057\u305F\u7119\u714E\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3092\u4F7F\u7528\u3002\u6E29\u5EA6\u7BA1\u7406\u3001\u6642\u9593\u8ABF\u6574\u3001\u51B7\u5374\u30D7\u30ED\u30BB\u30B9\u307E\u3067\u3001\u3059\u3079\u3066\u306E\u5DE5\u7A0B\u3067\u7D30\u5FC3\u306E\u6CE8\u610F\u3092\u6255\u3063\u3066\u7119\u714E\u3057\u3066\u3044\u307E\u3059\u3002</p>
      
      <h3>\u8CA9\u58F2\u958B\u59CB\u4E88\u5B9A</h3>
      <p>2025\u5E742\u6708\u3088\u308A\u9806\u6B21\u8CA9\u58F2\u3092\u958B\u59CB\u4E88\u5B9A\u3067\u3059\u3002\u8A73\u7D30\u306A\u767A\u58F2\u65E5\u7A0B\u304A\u3088\u3073\u4FA1\u683C\u306B\u3064\u3044\u3066\u306F\u3001\u6539\u3081\u3066\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u3002</p>
    `,
    readTime: "5\u5206",
    tags: ["\u65B0\u5546\u54C1", "\u30B3\u30FC\u30D2\u30FC", "\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB", "\u54C1\u8CEA", "\u7119\u714E\u6280\u8853"]
  },
  {
    id: 4,
    date: "2025.01.05",
    title: "\u4E2D\u56FD\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u5C55\u793A\u30B9\u30DA\u30FC\u30B9 \u4E2D\u76EE\u9ED2\u30AA\u30FC\u30D7\u30F3\u6E96\u5099\u4E2D",
    category: "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8",
    excerpt: "\u4E2D\u76EE\u9ED2\u306B\u65B0\u8A2D\u3059\u308B\u5C55\u793A\u30B9\u30DA\u30FC\u30B9\u3067\u306F\u3001\u4E2D\u56FD\u73FE\u4EE3\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306E\u4F5C\u54C1\u3092\u4E2D\u5FC3\u3068\u3057\u305F\u9769\u65B0\u7684\u306A\u5C55\u793A\u3092\u4F01\u753B\u4E2D\u30022025\u5E74\u6625\u306E\u30B0\u30E9\u30F3\u30C9\u30AA\u30FC\u30D7\u30F3\u306B\u5411\u3051\u3066\u6E96\u5099\u3092\u9032\u3081\u3066\u3044\u307E\u3059\u3002",
    content: `
      <p>\u4E2D\u76EE\u9ED2\u306B\u65B0\u8A2D\u4E88\u5B9A\u306E\u5C55\u793A\u30B9\u30DA\u30FC\u30B9\u306B\u3064\u3044\u3066\u3001\u9032\u6357\u72B6\u6CC1\u3092\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u3002</p>
      
      <h3>\u30B3\u30F3\u30BB\u30D7\u30C8</h3>
      <p>\u300CEast meets Innovation\u300D\u3092\u30C6\u30FC\u30DE\u306B\u3001\u4E2D\u56FD\u73FE\u4EE3\u30A2\u30FC\u30C8\u3068\u65E5\u672C\u306E\u7F8E\u610F\u8B58\u3092\u878D\u5408\u3055\u305B\u305F\u65B0\u3057\u3044\u6587\u5316\u4F53\u9A13\u7A7A\u9593\u3092\u5275\u9020\u3057\u307E\u3059\u3002\u5F93\u6765\u306E\u30AE\u30E3\u30E9\u30EA\u30FC\u306E\u67A0\u3092\u8D85\u3048\u305F\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u3067\u6CA1\u5165\u611F\u306E\u3042\u308B\u5C55\u793A\u3092\u901A\u3058\u3066\u3001\u30A2\u30FC\u30C8\u3068\u6280\u8853\u306E\u65B0\u305F\u306A\u53EF\u80FD\u6027\u3092\u63A2\u6C42\u3057\u307E\u3059\u3002</p>
      
      <h3>\u65BD\u8A2D\u6982\u8981</h3>
      <ul>
        <li><strong>\u5834\u6240</strong>\uFF1A\u6771\u4EAC\u90FD\u76EE\u9ED2\u533A\u4E2D\u76EE\u9ED2\uFF08\u8A73\u7D30\u4F4F\u6240\u306F\u5F8C\u65E5\u767A\u8868\uFF09</li>
        <li><strong>\u9762\u7A4D</strong>\uFF1A\u7D04200\u5E73\u65B9\u30E1\u30FC\u30C8\u30EB</li>
        <li><strong>\u5C55\u793A\u5BA4</strong>\uFF1A\u30E1\u30A4\u30F3\u30AE\u30E3\u30E9\u30EA\u30FC\u3001\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6\u30B9\u30DA\u30FC\u30B9\u3001\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u30EB\u30FC\u30E0</li>
        <li><strong>\u8A2D\u5099</strong>\uFF1A\u6700\u65B0\u306E\u30C7\u30B8\u30BF\u30EB\u5C55\u793A\u6280\u8853\u3001VR/AR\u4F53\u9A13\u30B3\u30FC\u30CA\u30FC</li>
      </ul>
      
      <h3>\u30AA\u30FC\u30D7\u30CB\u30F3\u30B0\u5C55\u793A</h3>
      <h4>\u300C\u5883\u754C\u3092\u8D85\u3048\u3066 - Beyond Boundaries\u300D</h4>
      <p>2025\u5E74\u6625\u306E\u30B0\u30E9\u30F3\u30C9\u30AA\u30FC\u30D7\u30F3\u3067\u306F\u3001\u4EE5\u4E0B\u306E\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306B\u3088\u308B\u4F5C\u54C1\u3092\u5C55\u793A\u4E88\u5B9A\u3067\u3059\uFF1A</p>
      <ul>
        <li><strong>\u674E\u660E</strong>\uFF08Li Ming\uFF09- \u30C7\u30B8\u30BF\u30EB\u30A2\u30FC\u30C8\u3068\u4F1D\u7D71\u7684\u306A\u66F8\u9053\u306E\u878D\u5408</li>
        <li><strong>\u5F35\u96C5\u6587</strong>\uFF08Zhang Yawen\uFF09- \u30A4\u30F3\u30B9\u30BF\u30EC\u30FC\u30B7\u30E7\u30F3\u3068\u30D1\u30D5\u30A9\u30FC\u30DE\u30F3\u30B9</li>
        <li><strong>\u738B\u6D69\u7136</strong>\uFF08Wang Haoran\uFF09- AI\u6280\u8853\u3092\u6D3B\u7528\u3057\u305F\u73FE\u4EE3\u30A2\u30FC\u30C8</li>
      </ul>
      
      <h3>\u7279\u5225\u4F01\u753B</h3>
      
      <h4>\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30FB\u30A4\u30F3\u30FB\u30EC\u30B8\u30C7\u30F3\u30B9</h4>
      <p>\u5C55\u793A\u30B9\u30DA\u30FC\u30B9\u306E\u4E00\u90E8\u3092\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u306E\u5236\u4F5C\u30B9\u30BF\u30B8\u30AA\u3068\u3057\u3066\u958B\u653E\u3057\u3001\u5275\u4F5C\u30D7\u30ED\u30BB\u30B9\u3092\u9593\u8FD1\u3067\u898B\u5B66\u3067\u304D\u308B\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u5B9F\u65BD\u3057\u307E\u3059\u3002</p>
      
      <h4>\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u30FB\u30BB\u30DF\u30CA\u30FC</h4>
      <p>\u5B9A\u671F\u7684\u306B\u958B\u50AC\u3055\u308C\u308B\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u3067\u306F\u3001\u6765\u5834\u8005\u304C\u5B9F\u969B\u306B\u30A2\u30FC\u30C8\u5236\u4F5C\u3092\u4F53\u9A13\u3067\u304D\u307E\u3059\uFF1A</p>
      <ul>
        <li>\u30C7\u30B8\u30BF\u30EB\u30A2\u30FC\u30C8\u5236\u4F5C\u4F53\u9A13</li>
        <li>VR\u7A7A\u9593\u3067\u306E\u30A2\u30FC\u30C8\u9451\u8CDE</li>
        <li>\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3068\u306E\u5BFE\u8A71\u30BB\u30C3\u30B7\u30E7\u30F3</li>
        <li>\u6587\u5316\u4EA4\u6D41\u30A4\u30D9\u30F3\u30C8</li>
      </ul>
      
      <h3>\u4ECA\u5F8C\u306E\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB</h3>
      <ul>
        <li><strong>2025\u5E742\u6708</strong>\uFF1A\u5185\u88C5\u5DE5\u4E8B\u5B8C\u4E86</li>
        <li><strong>2025\u5E743\u6708</strong>\uFF1A\u5C55\u793A\u6E96\u5099\u30FB\u30EA\u30CF\u30FC\u30B5\u30EB</li>
        <li><strong>2025\u5E744\u6708</strong>\uFF1A\u30B0\u30E9\u30F3\u30C9\u30AA\u30FC\u30D7\u30F3\u4E88\u5B9A</li>
      </ul>
      
      <p>\u8A73\u7D30\u306A\u60C5\u5831\u306F\u9806\u6B21\u767A\u8868\u3044\u305F\u3057\u307E\u3059\u3002\u7686\u69D8\u306E\u3054\u6765\u5834\u3092\u5FC3\u3088\u308A\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\u3002</p>
    `,
    readTime: "6\u5206",
    tags: ["\u5C55\u793A\u7A7A\u9593", "\u4E2D\u56FD\u30A2\u30FC\u30C8", "\u4E2D\u76EE\u9ED2", "\u30AA\u30FC\u30D7\u30F3", "\u73FE\u4EE3\u30A2\u30FC\u30C8", "\u30A4\u30F3\u30BF\u30E9\u30AF\u30C6\u30A3\u30D6"]
  },
  {
    id: 5,
    date: "2025.01.03",
    title: "2025\u5E74\u9650\u5B9A\u91E3\u5177\u4E88\u7D04\u53D7\u4ED8\u958B\u59CB - Shimano\u30FBDaiwa\u6700\u65B0\u30E2\u30C7\u30EB",
    category: "\u91E3\u5177\u30FB\u5668\u5177",
    excerpt: "2025\u5E74\u6625\u767A\u58F2\u4E88\u5B9A\u306EShimano\u30FBDaiwa\u6700\u65B0\u91E3\u5177\u306E\u5148\u884C\u4E88\u7D04\u3092\u958B\u59CB\u3002\u4F1A\u54E1\u9650\u5B9A\u306E\u7279\u5225\u4FA1\u683C\u3068\u5C02\u9580\u5BB6\u306B\u3088\u308B\u9078\u5B9A\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3044\u305F\u3057\u307E\u3059\u3002",
    content: `
      <p>2025\u5E74\u306E\u65B0\u30B7\u30FC\u30BA\u30F3\u306B\u5411\u3051\u3066\u3001\u6700\u65B0\u91E3\u5177\u306E\u5148\u884C\u4E88\u7D04\u53D7\u4ED8\u3092\u958B\u59CB\u3044\u305F\u3057\u307E\u3059\u3002</p>
      
      <h3>\u4E88\u7D04\u5BFE\u8C61\u5546\u54C1</h3>
      
      <h4>Shimano 2025\u5E74\u30E2\u30C7\u30EB</h4>
      <ul>
        <li><strong>\u30B9\u30C6\u30E9 SW 2025</strong>
          <ul>
            <li>\u30B5\u30A4\u30BA\uFF1A4000XG, 5000XG, 6000HG</li>
            <li>\u7279\u5FB4\uFF1A\u65B0\u958B\u767A\u306E\u30B5\u30A4\u30EC\u30F3\u30C8\u30C9\u30E9\u30A4\u30D6\u30B7\u30B9\u30C6\u30E0\u642D\u8F09</li>
            <li>\u4E88\u7D04\u4FA1\u683C\uFF1A\u4F1A\u54E1\u7279\u4FA1 15%OFF</li>
          </ul>
        </li>
        <li><strong>\u30D0\u30F3\u30AD\u30C3\u30B7\u30E5 2025</strong>
          <ul>
            <li>\u30E2\u30C7\u30EB\uFF1AC3000SDH, C3000XG, 4000XG</li>
            <li>\u7279\u5FB4\uFF1A\u8EFD\u91CF\u5316\u3068\u30D1\u30EF\u30FC\u3092\u4E21\u7ACB\u3057\u305F\u65B0\u8A2D\u8A08</li>
            <li>\u4E88\u7D04\u4FA1\u683C\uFF1A\u4F1A\u54E1\u7279\u4FA1 12%OFF</li>
          </ul>
        </li>
        <li><strong>\u30DD\u30A4\u30BA\u30F3\u30A2\u30C9\u30EC\u30CA 2025</strong>
          <ul>
            <li>\u30E9\u30A4\u30F3\u5C55\u958B\uFF1A166ML-G, 168M-G, 1610MH-G</li>
            <li>\u7279\u5FB4\uFF1A\u611F\u5EA6\u3068\u64CD\u4F5C\u6027\u3092\u5411\u4E0A\u3055\u305B\u305F\u30B0\u30EA\u30C3\u30D7\u30C7\u30B6\u30A4\u30F3</li>
            <li>\u4E88\u7D04\u4FA1\u683C\uFF1A\u4F1A\u54E1\u7279\u4FA1 10%OFF</li>
          </ul>
        </li>
      </ul>
      
      <h4>Daiwa 2025\u5E74\u30E2\u30C7\u30EB</h4>
      <ul>
        <li><strong>\u30A4\u30B0\u30B8\u30B9\u30C8 2025</strong>
          <ul>
            <li>\u30B5\u30A4\u30BA\uFF1ALT2500S-XH, LT3000S-CXH, LT4000-CXH</li>
            <li>\u7279\u5FB4\uFF1A\u65B0\u30DE\u30B0\u30B7\u30FC\u30EB\u30C9\u30DC\u30FC\u30EB\u30D9\u30A2\u30EA\u30F3\u30B0\u63A1\u7528</li>
            <li>\u4E88\u7D04\u4FA1\u683C\uFF1A\u4F1A\u54E1\u7279\u4FA1 15%OFF</li>
          </ul>
        </li>
        <li><strong>\u30BB\u30EB\u30C6\u30FC\u30C8 SW 2025</strong>
          <ul>
            <li>\u30B5\u30A4\u30BA\uFF1ALT4000-CXH, LT5000D-CXH, LT6000D-H</li>
            <li>\u7279\u5FB4\uFF1A\u8010\u4E45\u6027\u3068\u30D1\u30EF\u30FC\u3092\u6975\u9650\u307E\u3067\u8FFD\u6C42</li>
            <li>\u4E88\u7D04\u4FA1\u683C\uFF1A\u4F1A\u54E1\u7279\u4FA1 12%OFF</li>
          </ul>
        </li>
        <li><strong>\u30D6\u30E9\u30C3\u30AF\u30EC\u30FC\u30D9\u30EB SG 2025</strong>
          <ul>
            <li>\u30E2\u30C7\u30EB\uFF1A661ML/MFB, 661M/MFB, 701MH/MFB</li>
            <li>\u7279\u5FB4\uFF1ASVF\u30CA\u30CE\u30D7\u30E9\u30B9\u30D6\u30E9\u30F3\u30AF\u30B9\u63A1\u7528</li>
            <li>\u4E88\u7D04\u4FA1\u683C\uFF1A\u4F1A\u54E1\u7279\u4FA1 10%OFF</li>
          </ul>
        </li>
      </ul>
      
      <h3>\u5C02\u9580\u5BB6\u9078\u5B9A\u30B5\u30FC\u30D3\u30B9</h3>
      <p>\u7D4C\u9A13\u8C4A\u5BCC\u306A\u91E3\u308A\u30AC\u30A4\u30C9\u3068\u30D7\u30ED\u30A2\u30F3\u30B0\u30E9\u30FC\u304C\u3001\u304A\u5BA2\u69D8\u306E\u91E3\u308A\u30B9\u30BF\u30A4\u30EB\u3084\u5BFE\u8C61\u9B5A\u7A2E\u306B\u5FDC\u3058\u3066\u6700\u9069\u306A\u5668\u5177\u3092\u9078\u5B9A\u3044\u305F\u3057\u307E\u3059\uFF1A</p>
      <ul>
        <li><strong>\u7121\u6599\u30B3\u30F3\u30B5\u30EB\u30C6\u30FC\u30B7\u30E7\u30F3</strong>\uFF1A30\u5206\u9593\u306E\u500B\u5225\u76F8\u8AC7</li>
        <li><strong>\u30D5\u30A3\u30FC\u30EB\u30C9\u30C6\u30B9\u30C8</strong>\uFF1A\u5B9F\u969B\u306E\u91E3\u308A\u5834\u3067\u306E\u8A66\u7528\u53EF\u80FD</li>
        <li><strong>\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u5BFE\u5FDC</strong>\uFF1A\u30B0\u30EA\u30C3\u30D7\u3084\u30EA\u30FC\u30EB\u8ABF\u6574</li>
        <li><strong>\u30A2\u30D5\u30BF\u30FC\u30B5\u30DD\u30FC\u30C8</strong>\uFF1A\u8CFC\u5165\u5F8C6\u30F6\u6708\u9593\u306E\u6280\u8853\u30B5\u30DD\u30FC\u30C8</li>
      </ul>
      
      <h3>\u4F1A\u54E1\u7279\u5178</h3>
      <ul>
        <li><strong>\u512A\u5148\u4E88\u7D04\u6A29</strong>\uFF1A\u4E00\u822C\u8CA9\u58F2\u524D\u306E\u5148\u884C\u4E88\u7D04</li>
        <li><strong>\u7279\u5225\u4FA1\u683C</strong>\uFF1A\u6700\u592715%\u306E\u4F1A\u54E1\u5272\u5F15</li>
        <li><strong>\u5206\u5272\u6255\u3044</strong>\uFF1A\u6700\u592712\u56DE\u307E\u3067\u91D1\u5229\u7121\u6599</li>
        <li><strong>\u7121\u6599\u914D\u9001</strong>\uFF1A\u5168\u56FD\u3069\u3053\u3067\u3082\u9001\u6599\u7121\u6599</li>
        <li><strong>\u8FD4\u54C1\u4FDD\u8A3C</strong>\uFF1A30\u65E5\u9593\u7121\u6761\u4EF6\u8FD4\u54C1\u53EF\u80FD</li>
      </ul>
      
      <h3>\u4E88\u7D04\u65B9\u6CD5</h3>
      <ol>
        <li>\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0\u304B\u3089\u300C\u91E3\u5177\u4E88\u7D04\u300D\u3092\u9078\u629E</li>
        <li>\u5E0C\u671B\u5546\u54C1\u3068\u500B\u4EBA\u60C5\u5831\u3092\u5165\u529B</li>
        <li>\u5C02\u9580\u30B9\u30BF\u30C3\u30D5\u304B\u3089\u306E\u3054\u9023\u7D61\u3092\u304A\u5F85\u3061\u304F\u3060\u3055\u3044</li>
        <li>\u8A73\u7D30\u6253\u3061\u5408\u308F\u305B\u5F8C\u3001\u6B63\u5F0F\u4E88\u7D04\u30FB\u6C7A\u6E08</li>
      </ol>
      
      <h3>\u4E88\u7D04\u53D7\u4ED8\u671F\u9593</h3>
      <p><strong>2025\u5E741\u67083\u65E5\u301C2\u670828\u65E5</strong></p>
      <p>\u203B\u6570\u91CF\u9650\u5B9A\u306E\u305F\u3081\u3001\u4E88\u7D04\u72B6\u6CC1\u306B\u3088\u308A\u65E9\u671F\u7D42\u4E86\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002</p>
      
      <p>\u7686\u69D8\u304B\u3089\u306E\u3054\u4E88\u7D04\u3092\u5FC3\u3088\u308A\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\u3002</p>
    `,
    readTime: "7\u5206",
    tags: ["\u91E3\u5177", "\u4E88\u7D04\u53D7\u4ED8", "Shimano", "Daiwa", "2025\u5E74\u30E2\u30C7\u30EB", "\u4F1A\u54E1\u7279\u5178", "\u9650\u5B9A"]
  }
];
const getLatestArticles = (count = 5) => {
  return articlesData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { setSEO, generateStructuredData } = useSEO();
    setSEO("home");
    const expandedFAQ = ref(null);
    const toggleFAQ = (faqNumber) => {
      expandedFAQ.value = expandedFAQ.value === faqNumber ? null : faqNumber;
    };
    const latestArticles = getLatestArticles(5);
    const partnersData = ref([
      { id: 1, name: "Shimano", logoUrl: "" },
      { id: 2, name: "Daiwa", logoUrl: "" },
      { id: 3, name: "\u6771\u4EAC\u73C8\u7432", logoUrl: "" },
      { id: 4, name: "\u6771\u4EAC\u30A2\u30FC\u30C8\u30AE\u30E3\u30E9\u30EA\u30FC", logoUrl: "" },
      { id: 5, name: "\u30B9\u30DD\u30FC\u30C4\u30C6\u30C3\u30AF\u682A\u5F0F\u4F1A\u793E", logoUrl: "" },
      { id: 6, name: "\u30A4\u30D9\u30F3\u30C8\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3", logoUrl: "" },
      { id: 7, name: "\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u30E9\u30DC", logoUrl: "" },
      { id: 8, name: "\u30B0\u30ED\u30FC\u30D0\u30EB\u8CBF\u6613", logoUrl: "" }
    ]);
    const handleImageError = (event) => {
      console.error("Partner logo failed to load:", event);
    };
    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split(".");
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
    };
    const navigateToArticle = (articleId) => {
      navigateTo(`/about?article=${articleId}`);
    };
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(generateStructuredData())
        }
      ]
    });
    const backgroundImage = ref("https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80");
    const heroContent = ref({
      title: "\u5922\u306E\u5BB6\u63A2\u3057\u3092<br>\u304A\u624B\u4F1D\u3044\u3057\u307E\u3059\u3002",
      description: "\u5546\u54C1\u306E\u9999\u308A\u3082\u3068\u3066\u3082\u3088\u304F\u3001\u304A\u5BA2\u69D8\u306B\u3082\u5927\u5909\u559C\u3070\u308C\u3066\u304A\u308A\u307E\u3059\u3002\u30F4\u30A1\u30EB\u30D7\u30C7\u30FC\u30C8\u30C4\u30A4\u30B9\u3001<br>\u30C8\u30C1\u30E7\u30B3\u30EC\u30FC\u30C8\u306E\u5229\u70B9\u3082\u3042\u308A\u307E\u3059\u3002\u60B2\u3057\u3044\u6E56\u306E\u89B3\u3048\u3082\u3001\u30A6\u30E9\u30E0\u30B3\u30FC\u30D1\u30FC\u30FB\u30EB\u30C8\u30E9\u30E0"
    });
    watch(heroContent, () => {
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "presentation-page anthropic-theme" }, _attrs))} data-v-f5851a56>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E`);
                } else {
                  return [
                    createTextVNode("NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: "\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3001\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3001\u6280\u8853\u7814\u7A76\u958B\u767A\u306A\u3069\u591A\u5C90\u306B\u308F\u305F\u308B\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3002"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E")
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: "\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3001\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3001\u6280\u8853\u7814\u7A76\u958B\u767A\u306A\u3069\u591A\u5C90\u306B\u308F\u305F\u308B\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3002"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="anthropic-hero" data-v-f5851a56><div class="hero-background-image" style="${ssrRenderStyle({ backgroundImage: `url(${unref(backgroundImage)})` })}" data-v-f5851a56></div><div class="hero-overlay" data-v-f5851a56></div>`);
      _push(ssrRenderComponent(VContainer, {
        class: "hero-container",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="hero-content-wrapper" data-v-f5851a56${_scopeId}><div class="hero-bottom-left" data-v-f5851a56${_scopeId}><h1 class="hero-main-title scroll-animate" data-v-f5851a56${_scopeId}>${(_a = unref(heroContent).title) != null ? _a : ""}</h1><p class="hero-description" data-v-f5851a56${_scopeId}>${(_b = unref(heroContent).description) != null ? _b : ""}</p><div class="hero-product-cards scroll-animate animate-delay-200" data-v-f5851a56${_scopeId}><div class="cards-horizontal-layout" data-v-f5851a56${_scopeId}><div class="hero-product-card" data-v-f5851a56${_scopeId}><div class="card-header" data-v-f5851a56${_scopeId}><span class="card-label" data-v-f5851a56${_scopeId}>\u73C8\u7432\u4E8B\u696D</span></div><h3 class="card-title" data-v-f5851a56${_scopeId}>\u30D7\u30EC\u30DF\u30A2\u30E0\u30B3\u30FC\u30D2\u30FC\u5546\u54C1</h3><p class="card-description" data-v-f5851a56${_scopeId}> \u4E16\u754C\u5404\u5730\u304B\u3089\u53B3\u9078\u3057\u305F\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u4F7F\u7528\u3057\u3001\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u3067\u6700\u9AD8\u54C1\u8CEA\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002 </p>`);
            _push2(ssrRenderComponent(VBtn, {
              class: "card-btn primary-btn",
              color: "black",
              block: "",
              rounded: "lg",
              size: "large",
              to: "/coffee"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3092\u898B\u308B `);
                } else {
                  return [
                    createTextVNode(" \u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3092\u898B\u308B ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hero-product-card" data-v-f5851a56${_scopeId}><div class="card-header" data-v-f5851a56${_scopeId}><span class="card-label" data-v-f5851a56${_scopeId}>\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8</span></div><h3 class="card-title" data-v-f5851a56${_scopeId}>\u6587\u5316\u30FB\u82B8\u8853\u4F01\u753B\u904B\u55B6</h3><p class="card-description" data-v-f5851a56${_scopeId}> \u4E2D\u56FD\u73FE\u4EE3\u30A2\u30FC\u30C8\u304B\u3089\u6587\u5316\u4EA4\u6D41\u307E\u3067\u3001\u9769\u65B0\u7684\u306A\u5C55\u793A\u3068\u30A4\u30D9\u30F3\u30C8\u3092\u4F01\u753B\u30FB\u904B\u55B6\u3044\u305F\u3057\u307E\u3059\u3002 </p>`);
            _push2(ssrRenderComponent(VBtn, {
              class: "card-btn primary-btn",
              color: "black",
              block: "",
              rounded: "lg",
              size: "large",
              to: "/exhibition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5C55\u793A\u4F01\u753B\u3092\u898B\u308B `);
                } else {
                  return [
                    createTextVNode(" \u5C55\u793A\u4F01\u753B\u3092\u898B\u308B ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "hero-content-wrapper" }, [
                createVNode("div", { class: "hero-bottom-left" }, [
                  createVNode("h1", {
                    class: "hero-main-title scroll-animate",
                    innerHTML: unref(heroContent).title
                  }, null, 8, ["innerHTML"]),
                  createVNode("p", {
                    class: "hero-description",
                    innerHTML: unref(heroContent).description
                  }, null, 8, ["innerHTML"]),
                  createVNode("div", { class: "hero-product-cards scroll-animate animate-delay-200" }, [
                    createVNode("div", { class: "cards-horizontal-layout" }, [
                      createVNode("div", { class: "hero-product-card" }, [
                        createVNode("div", { class: "card-header" }, [
                          createVNode("span", { class: "card-label" }, "\u73C8\u7432\u4E8B\u696D")
                        ]),
                        createVNode("h3", { class: "card-title" }, "\u30D7\u30EC\u30DF\u30A2\u30E0\u30B3\u30FC\u30D2\u30FC\u5546\u54C1"),
                        createVNode("p", { class: "card-description" }, " \u4E16\u754C\u5404\u5730\u304B\u3089\u53B3\u9078\u3057\u305F\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u4F7F\u7528\u3057\u3001\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u3067\u6700\u9AD8\u54C1\u8CEA\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002 "),
                        createVNode(VBtn, {
                          class: "card-btn primary-btn",
                          color: "black",
                          block: "",
                          rounded: "lg",
                          size: "large",
                          to: "/coffee"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3092\u898B\u308B ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "hero-product-card" }, [
                        createVNode("div", { class: "card-header" }, [
                          createVNode("span", { class: "card-label" }, "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8")
                        ]),
                        createVNode("h3", { class: "card-title" }, "\u6587\u5316\u30FB\u82B8\u8853\u4F01\u753B\u904B\u55B6"),
                        createVNode("p", { class: "card-description" }, " \u4E2D\u56FD\u73FE\u4EE3\u30A2\u30FC\u30C8\u304B\u3089\u6587\u5316\u4EA4\u6D41\u307E\u3067\u3001\u9769\u65B0\u7684\u306A\u5C55\u793A\u3068\u30A4\u30D9\u30F3\u30C8\u3092\u4F01\u753B\u30FB\u904B\u55B6\u3044\u305F\u3057\u307E\u3059\u3002 "),
                        createVNode(VBtn, {
                          class: "card-btn primary-btn",
                          color: "black",
                          block: "",
                          rounded: "lg",
                          size: "large",
                          to: "/exhibition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5C55\u793A\u4F01\u753B\u3092\u898B\u308B ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="anthropic-mission-section" data-v-f5851a56><div class="custom-container" data-v-f5851a56><div class="header-section" data-v-f5851a56><div class="header-left" data-v-f5851a56><h1 class="main-title" data-v-f5851a56> NO TRACE EXPLORER\u3067\u306F\u3001<br data-v-f5851a56> \u672A\u77E5\u306E\u9818\u57DF\u3092\u63A2\u7D22\u3057\u3001<br data-v-f5851a56> \u304A\u5BA2\u69D8\u306E\u9577\u671F\u7684\u306A<br data-v-f5851a56> \u4FA1\u5024\u5275\u9020\u3092\u76EE\u6307\u3057\u307E\u3059\u3002 </h1></div><div class="header-right" data-v-f5851a56><p class="description" data-v-f5851a56> \u591A\u5206\u91CE\u306B\u308F\u305F\u308B\u5C02\u9580\u77E5\u8B58\u3068\u9769\u65B0\u7684\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u306B\u3088\u308A\u3001\u8907\u96D1\u306A\u8AB2\u984C\u306B\u5BFE\u3059\u308B\u7DCF\u5408\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u304B\u3089\u6280\u8853\u7814\u7A76\u958B\u767A\u307E\u3067\u30014\u3064\u306E\u5C02\u9580\u5206\u91CE\u3067\u5B9F\u4E16\u754C\u306B\u6E2C\u5B9A\u53EF\u80FD\u306A\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u3053\u3068\u3092\u304A\u7D04\u675F\u3057\u307E\u3059\u3002 </p></div></div><div class="cards-container" data-v-f5851a56><div class="card" data-v-f5851a56><div class="card-icon" data-v-f5851a56>`);
      _push(ssrRenderComponent(VIcon, {
        size: "32",
        color: "#E17B47"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-compass-outline`);
          } else {
            return [
              createTextVNode("mdi-compass-outline")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-f5851a56><h3 class="card-title" data-v-f5851a56>\u79C1\u305F\u3061\u306E\u4E8B\u696D\u9818\u57DF</h3><p class="card-content" data-v-f5851a56>\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u958B\u767A\u3001\u7DCF\u5408\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u3001\u5C55\u793A\u30FB\u6280\u8853\u30B5\u30FC\u30D3\u30B9\u3001\u30B5\u30B9\u30C6\u30A3\u30CA\u30D6\u30EB\u8ABF\u9054\u304B\u3089\u6587\u5316\u82B8\u8853\u4F01\u753B\u3001\u5C02\u9580\u7684\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u5B9F\u73FE\u3057\u307E\u3059\u3002</p></div></div><div class="card" data-v-f5851a56><div class="card-icon" data-v-f5851a56>`);
      _push(ssrRenderComponent(VIcon, {
        size: "32",
        color: "#E17B47"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-lightbulb-variant-outline`);
          } else {
            return [
              createTextVNode("mdi-lightbulb-variant-outline")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-f5851a56><h3 class="card-title" data-v-f5851a56>\u9769\u65B0\u3092\u63A8\u9032\u3059\u308B\u6280\u8853\u529B</h3><p class="card-content" data-v-f5851a56>\u6700\u65B0\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC\u3068\u5F93\u6765\u306E\u624B\u6CD5\u3092\u7D44\u307F\u5408\u308F\u305B\u3001\u304A\u5BA2\u69D8\u306E\u8AB2\u984C\u306B\u5BFE\u3057\u3066\u6700\u9069\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u63D0\u6848\u3057\u307E\u3059\u3002\u7D99\u7D9A\u7684\u306A\u6539\u5584\u3068\u54C1\u8CEA\u5411\u4E0A\u306B\u53D6\u308A\u7D44\u3093\u3067\u3044\u307E\u3059\u3002</p></div></div><div class="card" data-v-f5851a56><div class="card-icon" data-v-f5851a56>`);
      _push(ssrRenderComponent(VIcon, {
        size: "32",
        color: "#E17B47"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-earth`);
          } else {
            return [
              createTextVNode("mdi-earth")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div data-v-f5851a56><h3 class="card-title" data-v-f5851a56>\u696D\u754C\u5909\u9769\u3078\u306E\u53D6\u308A\u7D44\u307F</h3><p class="card-content" data-v-f5851a56>50+\u4F53\u9A13\u30D7\u30ED\u30B0\u30E9\u30E0\u300115+\u30D1\u30FC\u30C8\u30CA\u30FC\u4F01\u696D\u3068\u306E\u5354\u529B\u306B\u3088\u308A\u3001\u696D\u754C\u306E\u672A\u6765\u3092\u898B\u636E\u3048\u305F\u6301\u7D9A\u53EF\u80FD\u306A\u6210\u9577\u30E2\u30C7\u30EB\u3092\u69CB\u7BC9\u3057\u3001\u793E\u4F1A\u7684\u4FA1\u5024\u3092\u5275\u9020\u3057\u307E\u3059\u3002</p></div></div></div></div></section><section class="anthropic-philosophy-section" data-v-f5851a56>`);
      _push(ssrRenderComponent(VContainer, {
        class: "philosophy-container",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              justify: "center",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "6",
                    class: "philosophy-content scroll-animate"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="philosophy-text" data-v-f5851a56${_scopeId3}><span class="philosophy-badge" data-v-f5851a56${_scopeId3}>\u4F01\u696D\u7406\u5FF5</span><h2 class="philosophy-title" data-v-f5851a56${_scopeId3}> \u672A\u77E5\u306E\u9818\u57DF\u3092\u63A2\u7D22\u3057\u3001\u9769\u65B0\u3092\u5275\u9020\u3059\u308B </h2><p class="philosophy-description" data-v-f5851a56${_scopeId3}> \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u3067\u306F\u3001\u672A\u8E0F\u306E\u5206\u91CE\u3078\u306E\u6311\u6226\u304B\u3089\u6700\u3082\u753B\u671F\u7684\u306A\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u304C\u751F\u307E\u308C\u308B\u3068\u4FE1\u3058\u3066\u3044\u307E\u3059\u3002 \u502B\u7406\u7684\u57FA\u6E96\u3092\u7DAD\u6301\u3057\u306A\u304C\u3089\u5883\u754C\u3092\u62BC\u3057\u5E83\u3052\u308B\u3068\u3044\u3046\u79C1\u305F\u3061\u306E\u30B3\u30DF\u30C3\u30C8\u30E1\u30F3\u30C8\u304C\u3001\u3059\u3079\u3066\u306E\u6D3B\u52D5\u306E\u539F\u52D5\u529B\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002 </p><div class="philosophy-principles" data-v-f5851a56${_scopeId3}><div class="principle-item" data-v-f5851a56${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          size: "24",
                          color: "#f97316",
                          class: "principle-icon"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-lightbulb-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-lightbulb-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="principle-content" data-v-f5851a56${_scopeId3}><h4 class="principle-title" data-v-f5851a56${_scopeId3}>\u7D99\u7D9A\u7684\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3</h4><p class="principle-desc" data-v-f5851a56${_scopeId3}>\u6700\u5148\u7AEF\u6280\u8853\u3092\u53D6\u308A\u5165\u308C\u3066\u8907\u96D1\u306A\u8AB2\u984C\u3092\u89E3\u6C7A</p></div></div><div class="principle-item" data-v-f5851a56${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          size: "24",
                          color: "#f97316",
                          class: "principle-icon"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-shield-check-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-shield-check-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="principle-content" data-v-f5851a56${_scopeId3}><h4 class="principle-title" data-v-f5851a56${_scopeId3}>\u502B\u7406\u7684\u5353\u8D8A\u6027</h4><p class="principle-desc" data-v-f5851a56${_scopeId3}>\u3059\u3079\u3066\u306E\u53D6\u308A\u7D44\u307F\u306B\u304A\u3044\u3066\u6700\u9AD8\u6C34\u6E96\u306E\u8AA0\u5B9F\u6027\u3092\u7DAD\u6301</p></div></div><div class="principle-item" data-v-f5851a56${_scopeId3}>`);
                        _push4(ssrRenderComponent(VIcon, {
                          size: "24",
                          color: "#f97316",
                          class: "principle-icon"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-account-group-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-account-group-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="principle-content" data-v-f5851a56${_scopeId3}><h4 class="principle-title" data-v-f5851a56${_scopeId3}>\u5354\u50CD\u7684\u6210\u9577</h4><p class="principle-desc" data-v-f5851a56${_scopeId3}>\u76F8\u4E92\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u6301\u7D9A\u7684\u306A\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u306E\u69CB\u7BC9</p></div></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "philosophy-text" }, [
                            createVNode("span", { class: "philosophy-badge" }, "\u4F01\u696D\u7406\u5FF5"),
                            createVNode("h2", { class: "philosophy-title" }, " \u672A\u77E5\u306E\u9818\u57DF\u3092\u63A2\u7D22\u3057\u3001\u9769\u65B0\u3092\u5275\u9020\u3059\u308B "),
                            createVNode("p", { class: "philosophy-description" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u3067\u306F\u3001\u672A\u8E0F\u306E\u5206\u91CE\u3078\u306E\u6311\u6226\u304B\u3089\u6700\u3082\u753B\u671F\u7684\u306A\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u304C\u751F\u307E\u308C\u308B\u3068\u4FE1\u3058\u3066\u3044\u307E\u3059\u3002 \u502B\u7406\u7684\u57FA\u6E96\u3092\u7DAD\u6301\u3057\u306A\u304C\u3089\u5883\u754C\u3092\u62BC\u3057\u5E83\u3052\u308B\u3068\u3044\u3046\u79C1\u305F\u3061\u306E\u30B3\u30DF\u30C3\u30C8\u30E1\u30F3\u30C8\u304C\u3001\u3059\u3079\u3066\u306E\u6D3B\u52D5\u306E\u539F\u52D5\u529B\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002 "),
                            createVNode("div", { class: "philosophy-principles" }, [
                              createVNode("div", { class: "principle-item" }, [
                                createVNode(VIcon, {
                                  size: "24",
                                  color: "#f97316",
                                  class: "principle-icon"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-lightbulb-outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "principle-content" }, [
                                  createVNode("h4", { class: "principle-title" }, "\u7D99\u7D9A\u7684\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3"),
                                  createVNode("p", { class: "principle-desc" }, "\u6700\u5148\u7AEF\u6280\u8853\u3092\u53D6\u308A\u5165\u308C\u3066\u8907\u96D1\u306A\u8AB2\u984C\u3092\u89E3\u6C7A")
                                ])
                              ]),
                              createVNode("div", { class: "principle-item" }, [
                                createVNode(VIcon, {
                                  size: "24",
                                  color: "#f97316",
                                  class: "principle-icon"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-shield-check-outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "principle-content" }, [
                                  createVNode("h4", { class: "principle-title" }, "\u502B\u7406\u7684\u5353\u8D8A\u6027"),
                                  createVNode("p", { class: "principle-desc" }, "\u3059\u3079\u3066\u306E\u53D6\u308A\u7D44\u307F\u306B\u304A\u3044\u3066\u6700\u9AD8\u6C34\u6E96\u306E\u8AA0\u5B9F\u6027\u3092\u7DAD\u6301")
                                ])
                              ]),
                              createVNode("div", { class: "principle-item" }, [
                                createVNode(VIcon, {
                                  size: "24",
                                  color: "#f97316",
                                  class: "principle-icon"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-group-outline")
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "principle-content" }, [
                                  createVNode("h4", { class: "principle-title" }, "\u5354\u50CD\u7684\u6210\u9577"),
                                  createVNode("p", { class: "principle-desc" }, "\u76F8\u4E92\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u6301\u7D9A\u7684\u306A\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u306E\u69CB\u7BC9")
                                ])
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "6",
                    class: "philosophy-visual scroll-animate animate-delay-200"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="philosophy-illustration" data-v-f5851a56${_scopeId3}><div class="illustration-container" data-v-f5851a56${_scopeId3}><div class="floating-elements" data-v-f5851a56${_scopeId3}><div class="element element-1" data-v-f5851a56${_scopeId3}></div><div class="element element-2" data-v-f5851a56${_scopeId3}></div><div class="element element-3" data-v-f5851a56${_scopeId3}></div><div class="element element-4" data-v-f5851a56${_scopeId3}></div><div class="element element-5" data-v-f5851a56${_scopeId3}></div></div><div class="central-glow" data-v-f5851a56${_scopeId3}></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "philosophy-illustration" }, [
                            createVNode("div", { class: "illustration-container" }, [
                              createVNode("div", { class: "floating-elements" }, [
                                createVNode("div", { class: "element element-1" }),
                                createVNode("div", { class: "element element-2" }),
                                createVNode("div", { class: "element element-3" }),
                                createVNode("div", { class: "element element-4" }),
                                createVNode("div", { class: "element element-5" })
                              ]),
                              createVNode("div", { class: "central-glow" })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "6",
                      class: "philosophy-content scroll-animate"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "philosophy-text" }, [
                          createVNode("span", { class: "philosophy-badge" }, "\u4F01\u696D\u7406\u5FF5"),
                          createVNode("h2", { class: "philosophy-title" }, " \u672A\u77E5\u306E\u9818\u57DF\u3092\u63A2\u7D22\u3057\u3001\u9769\u65B0\u3092\u5275\u9020\u3059\u308B "),
                          createVNode("p", { class: "philosophy-description" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u3067\u306F\u3001\u672A\u8E0F\u306E\u5206\u91CE\u3078\u306E\u6311\u6226\u304B\u3089\u6700\u3082\u753B\u671F\u7684\u306A\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u304C\u751F\u307E\u308C\u308B\u3068\u4FE1\u3058\u3066\u3044\u307E\u3059\u3002 \u502B\u7406\u7684\u57FA\u6E96\u3092\u7DAD\u6301\u3057\u306A\u304C\u3089\u5883\u754C\u3092\u62BC\u3057\u5E83\u3052\u308B\u3068\u3044\u3046\u79C1\u305F\u3061\u306E\u30B3\u30DF\u30C3\u30C8\u30E1\u30F3\u30C8\u304C\u3001\u3059\u3079\u3066\u306E\u6D3B\u52D5\u306E\u539F\u52D5\u529B\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002 "),
                          createVNode("div", { class: "philosophy-principles" }, [
                            createVNode("div", { class: "principle-item" }, [
                              createVNode(VIcon, {
                                size: "24",
                                color: "#f97316",
                                class: "principle-icon"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-lightbulb-outline")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "principle-content" }, [
                                createVNode("h4", { class: "principle-title" }, "\u7D99\u7D9A\u7684\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3"),
                                createVNode("p", { class: "principle-desc" }, "\u6700\u5148\u7AEF\u6280\u8853\u3092\u53D6\u308A\u5165\u308C\u3066\u8907\u96D1\u306A\u8AB2\u984C\u3092\u89E3\u6C7A")
                              ])
                            ]),
                            createVNode("div", { class: "principle-item" }, [
                              createVNode(VIcon, {
                                size: "24",
                                color: "#f97316",
                                class: "principle-icon"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-shield-check-outline")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "principle-content" }, [
                                createVNode("h4", { class: "principle-title" }, "\u502B\u7406\u7684\u5353\u8D8A\u6027"),
                                createVNode("p", { class: "principle-desc" }, "\u3059\u3079\u3066\u306E\u53D6\u308A\u7D44\u307F\u306B\u304A\u3044\u3066\u6700\u9AD8\u6C34\u6E96\u306E\u8AA0\u5B9F\u6027\u3092\u7DAD\u6301")
                              ])
                            ]),
                            createVNode("div", { class: "principle-item" }, [
                              createVNode(VIcon, {
                                size: "24",
                                color: "#f97316",
                                class: "principle-icon"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account-group-outline")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "principle-content" }, [
                                createVNode("h4", { class: "principle-title" }, "\u5354\u50CD\u7684\u6210\u9577"),
                                createVNode("p", { class: "principle-desc" }, "\u76F8\u4E92\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u6301\u7D9A\u7684\u306A\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u306E\u69CB\u7BC9")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      lg: "6",
                      class: "philosophy-visual scroll-animate animate-delay-200"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "philosophy-illustration" }, [
                          createVNode("div", { class: "illustration-container" }, [
                            createVNode("div", { class: "floating-elements" }, [
                              createVNode("div", { class: "element element-1" }),
                              createVNode("div", { class: "element element-2" }),
                              createVNode("div", { class: "element element-3" }),
                              createVNode("div", { class: "element element-4" }),
                              createVNode("div", { class: "element element-5" })
                            ]),
                            createVNode("div", { class: "central-glow" })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                justify: "center",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "6",
                    class: "philosophy-content scroll-animate"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "philosophy-text" }, [
                        createVNode("span", { class: "philosophy-badge" }, "\u4F01\u696D\u7406\u5FF5"),
                        createVNode("h2", { class: "philosophy-title" }, " \u672A\u77E5\u306E\u9818\u57DF\u3092\u63A2\u7D22\u3057\u3001\u9769\u65B0\u3092\u5275\u9020\u3059\u308B "),
                        createVNode("p", { class: "philosophy-description" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u3067\u306F\u3001\u672A\u8E0F\u306E\u5206\u91CE\u3078\u306E\u6311\u6226\u304B\u3089\u6700\u3082\u753B\u671F\u7684\u306A\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u304C\u751F\u307E\u308C\u308B\u3068\u4FE1\u3058\u3066\u3044\u307E\u3059\u3002 \u502B\u7406\u7684\u57FA\u6E96\u3092\u7DAD\u6301\u3057\u306A\u304C\u3089\u5883\u754C\u3092\u62BC\u3057\u5E83\u3052\u308B\u3068\u3044\u3046\u79C1\u305F\u3061\u306E\u30B3\u30DF\u30C3\u30C8\u30E1\u30F3\u30C8\u304C\u3001\u3059\u3079\u3066\u306E\u6D3B\u52D5\u306E\u539F\u52D5\u529B\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002 "),
                        createVNode("div", { class: "philosophy-principles" }, [
                          createVNode("div", { class: "principle-item" }, [
                            createVNode(VIcon, {
                              size: "24",
                              color: "#f97316",
                              class: "principle-icon"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-lightbulb-outline")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "principle-content" }, [
                              createVNode("h4", { class: "principle-title" }, "\u7D99\u7D9A\u7684\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3"),
                              createVNode("p", { class: "principle-desc" }, "\u6700\u5148\u7AEF\u6280\u8853\u3092\u53D6\u308A\u5165\u308C\u3066\u8907\u96D1\u306A\u8AB2\u984C\u3092\u89E3\u6C7A")
                            ])
                          ]),
                          createVNode("div", { class: "principle-item" }, [
                            createVNode(VIcon, {
                              size: "24",
                              color: "#f97316",
                              class: "principle-icon"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-shield-check-outline")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "principle-content" }, [
                              createVNode("h4", { class: "principle-title" }, "\u502B\u7406\u7684\u5353\u8D8A\u6027"),
                              createVNode("p", { class: "principle-desc" }, "\u3059\u3079\u3066\u306E\u53D6\u308A\u7D44\u307F\u306B\u304A\u3044\u3066\u6700\u9AD8\u6C34\u6E96\u306E\u8AA0\u5B9F\u6027\u3092\u7DAD\u6301")
                            ])
                          ]),
                          createVNode("div", { class: "principle-item" }, [
                            createVNode(VIcon, {
                              size: "24",
                              color: "#f97316",
                              class: "principle-icon"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account-group-outline")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "principle-content" }, [
                              createVNode("h4", { class: "principle-title" }, "\u5354\u50CD\u7684\u6210\u9577"),
                              createVNode("p", { class: "principle-desc" }, "\u76F8\u4E92\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u6301\u7D9A\u7684\u306A\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u306E\u69CB\u7BC9")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    lg: "6",
                    class: "philosophy-visual scroll-animate animate-delay-200"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "philosophy-illustration" }, [
                        createVNode("div", { class: "illustration-container" }, [
                          createVNode("div", { class: "floating-elements" }, [
                            createVNode("div", { class: "element element-1" }),
                            createVNode("div", { class: "element element-2" }),
                            createVNode("div", { class: "element element-3" }),
                            createVNode("div", { class: "element element-4" }),
                            createVNode("div", { class: "element element-5" })
                          ]),
                          createVNode("div", { class: "central-glow" })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="secondary-hero-section" data-v-f5851a56>`);
      _push(ssrRenderComponent(VContainer, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="secondary-content-wrapper" data-v-f5851a56${_scopeId}><div class="secondary-hero-card" data-v-f5851a56${_scopeId}><div class="secondary-header" data-v-f5851a56${_scopeId}><h2 class="secondary-title" data-v-f5851a56${_scopeId}>\u7DCF\u5408\u30B5\u30FC\u30D3\u30B9\u30EA\u30BD\u30FC\u30B9</h2><p class="secondary-description" data-v-f5851a56${_scopeId}> \u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u304B\u3089\u6280\u8853\u7814\u7A76\u958B\u767A\u307E\u3067\u30015\u3064\u306E\u5C02\u9580\u5206\u91CE\u3067\u7DCF\u5408\u7684\u306A\u30B5\u30FC\u30D3\u30B9\u3092\u5C55\u958B\u3057\u3001 \u304A\u5BA2\u69D8\u306E\u30D3\u30B8\u30CD\u30B9\u6210\u9577\u3092\u652F\u3048\u308B\u4FE1\u983C\u3067\u304D\u308B\u30D1\u30FC\u30C8\u30CA\u30FC\u3068\u3057\u3066\u4FA1\u5024\u5275\u9020\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002 </p>`);
            _push2(ssrRenderComponent(VBtn, {
              class: "secondary-btn-outline",
              variant: "outlined",
              color: "black",
              rounded: "lg",
              size: "large",
              to: "/about"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4F01\u696D\u60C5\u5831\u3092\u898B\u308B `);
                } else {
                  return [
                    createTextVNode(" \u4F01\u696D\u60C5\u5831\u3092\u898B\u308B ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="model-cards-container" data-v-f5851a56${_scopeId}><div class="model-card" data-v-f5851a56${_scopeId}><div class="model-header" data-v-f5851a56${_scopeId}><span class="model-label" data-v-f5851a56${_scopeId}>\u6280\u8853\u7814\u7A76\u958B\u767A</span></div><h3 class="model-name" data-v-f5851a56${_scopeId}>\u30E9\u30DC | LAB</h3>`);
            _push2(ssrRenderComponent(VIcon, {
              class: "model-arrow",
              size: "24"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-arrow-right`);
                } else {
                  return [
                    createTextVNode("mdi-arrow-right")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="model-card" data-v-f5851a56${_scopeId}><div class="model-header" data-v-f5851a56${_scopeId}><span class="model-label" data-v-f5851a56${_scopeId}>\u4F1A\u54E1\u5236\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3</span></div><h3 class="model-name" data-v-f5851a56${_scopeId}>\u30AF\u30E9\u30D6 | CLUB</h3>`);
            _push2(ssrRenderComponent(VIcon, {
              class: "model-arrow",
              size: "24"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-arrow-right`);
                } else {
                  return [
                    createTextVNode("mdi-arrow-right")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "secondary-content-wrapper" }, [
                createVNode("div", { class: "secondary-hero-card" }, [
                  createVNode("div", { class: "secondary-header" }, [
                    createVNode("h2", { class: "secondary-title" }, "\u7DCF\u5408\u30B5\u30FC\u30D3\u30B9\u30EA\u30BD\u30FC\u30B9"),
                    createVNode("p", { class: "secondary-description" }, " \u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u304B\u3089\u6280\u8853\u7814\u7A76\u958B\u767A\u307E\u3067\u30015\u3064\u306E\u5C02\u9580\u5206\u91CE\u3067\u7DCF\u5408\u7684\u306A\u30B5\u30FC\u30D3\u30B9\u3092\u5C55\u958B\u3057\u3001 \u304A\u5BA2\u69D8\u306E\u30D3\u30B8\u30CD\u30B9\u6210\u9577\u3092\u652F\u3048\u308B\u4FE1\u983C\u3067\u304D\u308B\u30D1\u30FC\u30C8\u30CA\u30FC\u3068\u3057\u3066\u4FA1\u5024\u5275\u9020\u306B\u53D6\u308A\u7D44\u307F\u307E\u3059\u3002 "),
                    createVNode(VBtn, {
                      class: "secondary-btn-outline",
                      variant: "outlined",
                      color: "black",
                      rounded: "lg",
                      size: "large",
                      to: "/about"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4F01\u696D\u60C5\u5831\u3092\u898B\u308B ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "model-cards-container" }, [
                    createVNode("div", {
                      class: "model-card",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/lab")
                    }, [
                      createVNode("div", { class: "model-header" }, [
                        createVNode("span", { class: "model-label" }, "\u6280\u8853\u7814\u7A76\u958B\u767A")
                      ]),
                      createVNode("h3", { class: "model-name" }, "\u30E9\u30DC | LAB"),
                      createVNode(VIcon, {
                        class: "model-arrow",
                        size: "24"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-arrow-right")
                        ]),
                        _: 1
                      })
                    ], 8, ["onClick"]),
                    createVNode("div", {
                      class: "model-card",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/club")
                    }, [
                      createVNode("div", { class: "model-header" }, [
                        createVNode("span", { class: "model-label" }, "\u4F1A\u54E1\u5236\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3")
                      ]),
                      createVNode("h3", { class: "model-name" }, "\u30AF\u30E9\u30D6 | CLUB"),
                      createVNode(VIcon, {
                        class: "model-arrow",
                        size: "24"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("mdi-arrow-right")
                        ]),
                        _: 1
                      })
                    ], 8, ["onClick"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="featured-section" data-v-f5851a56>`);
      _push(ssrRenderComponent(VContainer, { fluid: "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "10",
                    xl: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="featured-content" data-v-f5851a56${_scopeId3}><div class="featured-left" data-v-f5851a56${_scopeId3}><h2 class="featured-title" data-v-f5851a56${_scopeId3}>\u4F01\u696D\u60C5\u5831</h2></div><div class="featured-right" data-v-f5851a56${_scopeId3}><div class="featured-news-list" data-v-f5851a56${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(latestArticles), (article) => {
                          _push4(`<div class="featured-news-item" data-v-f5851a56${_scopeId3}><div class="featured-news-content" data-v-f5851a56${_scopeId3}><h3 class="featured-news-title" data-v-f5851a56${_scopeId3}>${ssrInterpolate(article.title)}</h3><div class="featured-news-meta" data-v-f5851a56${_scopeId3}><span class="featured-news-category" data-v-f5851a56${_scopeId3}>${ssrInterpolate(article.category)}</span><span class="featured-news-date" data-v-f5851a56${_scopeId3}>${ssrInterpolate(formatDate(article.date))}</span></div></div></div>`);
                        });
                        _push4(`<!--]--></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "featured-content" }, [
                            createVNode("div", { class: "featured-left" }, [
                              createVNode("h2", { class: "featured-title" }, "\u4F01\u696D\u60C5\u5831")
                            ]),
                            createVNode("div", { class: "featured-right" }, [
                              createVNode("div", { class: "featured-news-list" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(latestArticles), (article) => {
                                  return openBlock(), createBlock("div", {
                                    key: article.id,
                                    class: "featured-news-item",
                                    onClick: ($event) => navigateToArticle(article.id)
                                  }, [
                                    createVNode("div", { class: "featured-news-content" }, [
                                      createVNode("h3", { class: "featured-news-title" }, toDisplayString(article.title), 1),
                                      createVNode("div", { class: "featured-news-meta" }, [
                                        createVNode("span", { class: "featured-news-category" }, toDisplayString(article.category), 1),
                                        createVNode("span", { class: "featured-news-date" }, toDisplayString(formatDate(article.date)), 1)
                                      ])
                                    ])
                                  ], 8, ["onClick"]);
                                }), 128))
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "10",
                      xl: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "featured-content" }, [
                          createVNode("div", { class: "featured-left" }, [
                            createVNode("h2", { class: "featured-title" }, "\u4F01\u696D\u60C5\u5831")
                          ]),
                          createVNode("div", { class: "featured-right" }, [
                            createVNode("div", { class: "featured-news-list" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(latestArticles), (article) => {
                                return openBlock(), createBlock("div", {
                                  key: article.id,
                                  class: "featured-news-item",
                                  onClick: ($event) => navigateToArticle(article.id)
                                }, [
                                  createVNode("div", { class: "featured-news-content" }, [
                                    createVNode("h3", { class: "featured-news-title" }, toDisplayString(article.title), 1),
                                    createVNode("div", { class: "featured-news-meta" }, [
                                      createVNode("span", { class: "featured-news-category" }, toDisplayString(article.category), 1),
                                      createVNode("span", { class: "featured-news-date" }, toDisplayString(formatDate(article.date)), 1)
                                    ])
                                  ])
                                ], 8, ["onClick"]);
                              }), 128))
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "10",
                    xl: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "featured-content" }, [
                        createVNode("div", { class: "featured-left" }, [
                          createVNode("h2", { class: "featured-title" }, "\u4F01\u696D\u60C5\u5831")
                        ]),
                        createVNode("div", { class: "featured-right" }, [
                          createVNode("div", { class: "featured-news-list" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(latestArticles), (article) => {
                              return openBlock(), createBlock("div", {
                                key: article.id,
                                class: "featured-news-item",
                                onClick: ($event) => navigateToArticle(article.id)
                              }, [
                                createVNode("div", { class: "featured-news-content" }, [
                                  createVNode("h3", { class: "featured-news-title" }, toDisplayString(article.title), 1),
                                  createVNode("div", { class: "featured-news-meta" }, [
                                    createVNode("span", { class: "featured-news-category" }, toDisplayString(article.category), 1),
                                    createVNode("span", { class: "featured-news-date" }, toDisplayString(formatDate(article.date)), 1)
                                  ])
                                ])
                              ], 8, ["onClick"]);
                            }), 128))
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="anthropic-partners-section" data-v-f5851a56>`);
      _push(ssrRenderComponent(VContainer, {
        class: "partners-container",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "10",
                    xl: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-16 scroll-animate" data-v-f5851a56${_scopeId3}><h2 class="anthropic-section-title" data-v-f5851a56${_scopeId3}> \u696D\u754C\u30EA\u30FC\u30C0\u30FC\u304B\u3089\u306E\u4FE1\u983C </h2><p class="anthropic-section-description animate-delay-200" data-v-f5851a56${_scopeId3}> \u30B0\u30ED\u30FC\u30D0\u30EB\u30D1\u30FC\u30C8\u30CA\u30FC\u3068\u306E\u5354\u50CD\u306B\u3088\u308A\u5353\u8D8A\u3057\u305F\u6210\u679C\u3092\u63D0\u4F9B </p></div><div class="partners-logos" data-v-f5851a56${_scopeId3}><div class="partners-scroll-container" data-v-f5851a56${_scopeId3}><div class="scroll-fade-left" data-v-f5851a56${_scopeId3}></div><div class="scroll-fade-right" data-v-f5851a56${_scopeId3}></div><div class="partners-scroll-content" data-v-f5851a56${_scopeId3}><div class="partners-scroll-track" data-v-f5851a56${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(partnersData), (partner) => {
                          _push4(`<div class="partner-logo" data-v-f5851a56${_scopeId3}><div class="logo-container" data-v-f5851a56${_scopeId3}>`);
                          if (partner.logoUrl) {
                            _push4(`<img${ssrRenderAttr("src", partner.logoUrl)}${ssrRenderAttr("alt", partner.name)} class="partner-logo-image" data-v-f5851a56${_scopeId3}>`);
                          } else {
                            _push4(`<div class="logo-placeholder" data-v-f5851a56${_scopeId3}><span class="logo-text" data-v-f5851a56${_scopeId3}>${ssrInterpolate(partner.name)}</span></div>`);
                          }
                          _push4(`</div></div>`);
                        });
                        _push4(`<!--]--></div><div class="partners-scroll-track" data-v-f5851a56${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(partnersData), (partner) => {
                          _push4(`<div class="partner-logo" data-v-f5851a56${_scopeId3}><div class="logo-container" data-v-f5851a56${_scopeId3}>`);
                          if (partner.logoUrl) {
                            _push4(`<img${ssrRenderAttr("src", partner.logoUrl)}${ssrRenderAttr("alt", partner.name)} class="partner-logo-image" data-v-f5851a56${_scopeId3}>`);
                          } else {
                            _push4(`<div class="logo-placeholder" data-v-f5851a56${_scopeId3}><span class="logo-text" data-v-f5851a56${_scopeId3}>${ssrInterpolate(partner.name)}</span></div>`);
                          }
                          _push4(`</div></div>`);
                        });
                        _push4(`<!--]--></div></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-16 scroll-animate" }, [
                            createVNode("h2", { class: "anthropic-section-title" }, " \u696D\u754C\u30EA\u30FC\u30C0\u30FC\u304B\u3089\u306E\u4FE1\u983C "),
                            createVNode("p", { class: "anthropic-section-description animate-delay-200" }, " \u30B0\u30ED\u30FC\u30D0\u30EB\u30D1\u30FC\u30C8\u30CA\u30FC\u3068\u306E\u5354\u50CD\u306B\u3088\u308A\u5353\u8D8A\u3057\u305F\u6210\u679C\u3092\u63D0\u4F9B ")
                          ]),
                          createVNode("div", { class: "partners-logos" }, [
                            createVNode("div", { class: "partners-scroll-container" }, [
                              createVNode("div", { class: "scroll-fade-left" }),
                              createVNode("div", { class: "scroll-fade-right" }),
                              createVNode("div", { class: "partners-scroll-content" }, [
                                createVNode("div", { class: "partners-scroll-track" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(partnersData), (partner) => {
                                    return openBlock(), createBlock("div", {
                                      key: `first-${partner.id}`,
                                      class: "partner-logo"
                                    }, [
                                      createVNode("div", { class: "logo-container" }, [
                                        partner.logoUrl ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: partner.logoUrl,
                                          alt: partner.name,
                                          class: "partner-logo-image",
                                          onError: handleImageError
                                        }, null, 40, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "logo-placeholder"
                                        }, [
                                          createVNode("span", { class: "logo-text" }, toDisplayString(partner.name), 1)
                                        ]))
                                      ])
                                    ]);
                                  }), 128))
                                ]),
                                createVNode("div", { class: "partners-scroll-track" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(partnersData), (partner) => {
                                    return openBlock(), createBlock("div", {
                                      key: `second-${partner.id}`,
                                      class: "partner-logo"
                                    }, [
                                      createVNode("div", { class: "logo-container" }, [
                                        partner.logoUrl ? (openBlock(), createBlock("img", {
                                          key: 0,
                                          src: partner.logoUrl,
                                          alt: partner.name,
                                          class: "partner-logo-image",
                                          onError: handleImageError
                                        }, null, 40, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "logo-placeholder"
                                        }, [
                                          createVNode("span", { class: "logo-text" }, toDisplayString(partner.name), 1)
                                        ]))
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "10",
                      xl: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-16 scroll-animate" }, [
                          createVNode("h2", { class: "anthropic-section-title" }, " \u696D\u754C\u30EA\u30FC\u30C0\u30FC\u304B\u3089\u306E\u4FE1\u983C "),
                          createVNode("p", { class: "anthropic-section-description animate-delay-200" }, " \u30B0\u30ED\u30FC\u30D0\u30EB\u30D1\u30FC\u30C8\u30CA\u30FC\u3068\u306E\u5354\u50CD\u306B\u3088\u308A\u5353\u8D8A\u3057\u305F\u6210\u679C\u3092\u63D0\u4F9B ")
                        ]),
                        createVNode("div", { class: "partners-logos" }, [
                          createVNode("div", { class: "partners-scroll-container" }, [
                            createVNode("div", { class: "scroll-fade-left" }),
                            createVNode("div", { class: "scroll-fade-right" }),
                            createVNode("div", { class: "partners-scroll-content" }, [
                              createVNode("div", { class: "partners-scroll-track" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(partnersData), (partner) => {
                                  return openBlock(), createBlock("div", {
                                    key: `first-${partner.id}`,
                                    class: "partner-logo"
                                  }, [
                                    createVNode("div", { class: "logo-container" }, [
                                      partner.logoUrl ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: partner.logoUrl,
                                        alt: partner.name,
                                        class: "partner-logo-image",
                                        onError: handleImageError
                                      }, null, 40, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "logo-placeholder"
                                      }, [
                                        createVNode("span", { class: "logo-text" }, toDisplayString(partner.name), 1)
                                      ]))
                                    ])
                                  ]);
                                }), 128))
                              ]),
                              createVNode("div", { class: "partners-scroll-track" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(partnersData), (partner) => {
                                  return openBlock(), createBlock("div", {
                                    key: `second-${partner.id}`,
                                    class: "partner-logo"
                                  }, [
                                    createVNode("div", { class: "logo-container" }, [
                                      partner.logoUrl ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: partner.logoUrl,
                                        alt: partner.name,
                                        class: "partner-logo-image",
                                        onError: handleImageError
                                      }, null, 40, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "logo-placeholder"
                                      }, [
                                        createVNode("span", { class: "logo-text" }, toDisplayString(partner.name), 1)
                                      ]))
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "10",
                    xl: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-16 scroll-animate" }, [
                        createVNode("h2", { class: "anthropic-section-title" }, " \u696D\u754C\u30EA\u30FC\u30C0\u30FC\u304B\u3089\u306E\u4FE1\u983C "),
                        createVNode("p", { class: "anthropic-section-description animate-delay-200" }, " \u30B0\u30ED\u30FC\u30D0\u30EB\u30D1\u30FC\u30C8\u30CA\u30FC\u3068\u306E\u5354\u50CD\u306B\u3088\u308A\u5353\u8D8A\u3057\u305F\u6210\u679C\u3092\u63D0\u4F9B ")
                      ]),
                      createVNode("div", { class: "partners-logos" }, [
                        createVNode("div", { class: "partners-scroll-container" }, [
                          createVNode("div", { class: "scroll-fade-left" }),
                          createVNode("div", { class: "scroll-fade-right" }),
                          createVNode("div", { class: "partners-scroll-content" }, [
                            createVNode("div", { class: "partners-scroll-track" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(partnersData), (partner) => {
                                return openBlock(), createBlock("div", {
                                  key: `first-${partner.id}`,
                                  class: "partner-logo"
                                }, [
                                  createVNode("div", { class: "logo-container" }, [
                                    partner.logoUrl ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: partner.logoUrl,
                                      alt: partner.name,
                                      class: "partner-logo-image",
                                      onError: handleImageError
                                    }, null, 40, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "logo-placeholder"
                                    }, [
                                      createVNode("span", { class: "logo-text" }, toDisplayString(partner.name), 1)
                                    ]))
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "partners-scroll-track" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(partnersData), (partner) => {
                                return openBlock(), createBlock("div", {
                                  key: `second-${partner.id}`,
                                  class: "partner-logo"
                                }, [
                                  createVNode("div", { class: "logo-container" }, [
                                    partner.logoUrl ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: partner.logoUrl,
                                      alt: partner.name,
                                      class: "partner-logo-image",
                                      onError: handleImageError
                                    }, null, 40, ["src", "alt"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "logo-placeholder"
                                    }, [
                                      createVNode("span", { class: "logo-text" }, toDisplayString(partner.name), 1)
                                    ]))
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="anthropic-faq-section" data-v-f5851a56>`);
      _push(ssrRenderComponent(VContainer, {
        class: "faq-container",
        fluid: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    lg: "10",
                    xl: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center mb-16 scroll-animate" data-v-f5851a56${_scopeId3}><h2 class="anthropic-section-title" data-v-f5851a56${_scopeId3}> \u3088\u304F\u3042\u308B\u3054\u8CEA\u554F </h2><p class="anthropic-section-description animate-delay-200" data-v-f5851a56${_scopeId3}> \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u30B5\u30FC\u30D3\u30B9\u3084\u4E8B\u696D\u306B\u95A2\u3059\u308B\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F\u306B\u304A\u7B54\u3048\u3057\u307E\u3059 </p></div><div class="faq-list" data-v-f5851a56${_scopeId3}><div class="faq-item scroll-animate animate-delay-300" data-v-f5851a56${_scopeId3}><div class="faq-question" data-v-f5851a56${_scopeId3}><h3 class="question-text" data-v-f5851a56${_scopeId3}>\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u4E3B\u306A\u4E8B\u696D\u5185\u5BB9\u306F\u4F55\u3067\u3059\u304B\uFF1F</h3><div class="${ssrRenderClass([{ expanded: unref(expandedFAQ) === 1 }, "question-icon"])}" data-v-f5851a56${_scopeId3}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-f5851a56${_scopeId3}><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f5851a56${_scopeId3}></path></svg></div></div><div class="faq-answer" style="${ssrRenderStyle(unref(expandedFAQ) === 1 ? null : { display: "none" })}" data-v-f5851a56${_scopeId3}><p data-v-f5851a56${_scopeId3}> \u5F53\u793E\u306F4\u3064\u306E\u6838\u5FC3\u4E8B\u696D\u3092\u5C55\u958B\u3057\u3066\u3044\u307E\u3059\u3002\u73C8\u7432\u4E8B\u696D\u3067\u306F\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u306E\u4F01\u753B\u958B\u767A\u30FB\u8CBF\u6613\u30FB\u30D6\u30E9\u30F3\u30C9\u5C55\u958B\u3092\u3001\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3067\u306F\u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u5206\u91CE\u306E\u5C55\u793A\u4F01\u753B\u3068\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3092\u3001\u6280\u8853\u7814\u7A76\u958B\u767A\u3067\u306F\u9769\u65B0\u7684\u306A\u6280\u8853\u7814\u7A76\u3068\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u3092\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u904B\u55B6\u3067\u306F\u4F1A\u54E1\u5236\u306E\u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3068\u9650\u5B9A\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002 </p></div></div><div class="faq-item scroll-animate animate-delay-400" data-v-f5851a56${_scopeId3}><div class="faq-question" data-v-f5851a56${_scopeId3}><h3 class="question-text" data-v-f5851a56${_scopeId3}>\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u306E\u54C1\u8CEA\u7BA1\u7406\u306F\u3069\u306E\u3088\u3046\u306B\u884C\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F</h3><div class="${ssrRenderClass([{ expanded: unref(expandedFAQ) === 2 }, "question-icon"])}" data-v-f5851a56${_scopeId3}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-f5851a56${_scopeId3}><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f5851a56${_scopeId3}></path></svg></div></div><div class="faq-answer" style="${ssrRenderStyle(unref(expandedFAQ) === 2 ? null : { display: "none" })}" data-v-f5851a56${_scopeId3}><p data-v-f5851a56${_scopeId3}> \u5F53\u793E\u306E\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3067\u306F\u3001\u8C46\u306E\u9078\u5B9A\u304B\u3089\u6700\u7D42\u30D1\u30C3\u30B1\u30FC\u30B8\u30F3\u30B0\u307E\u3067\u5168\u5DE5\u7A0B\u3067\u53B3\u683C\u306A\u54C1\u8CEA\u8A55\u4FA1\u3092\u5B9F\u65BD\u3057\u3066\u3044\u307E\u3059\u3002\u4E16\u754C\u5404\u5730\u306E\u512A\u826F\u8FB2\u5712\u3068\u76F4\u63A5\u7684\u306A\u95A2\u4FC2\u3092\u7BC9\u304D\u3001\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u3092\u6D3B\u7528\u3057\u3001\u5E83\u7BC4\u56F2\u306A\u5473\u899A\u30C6\u30B9\u30C8\u3092\u884C\u3046\u3053\u3068\u3067\u3001\u5353\u8D8A\u3057\u305F\u54C1\u8CEA\u57FA\u6E96\u3092\u78BA\u4FDD\u3057\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3001\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u8ABF\u9054\u3068\u54C1\u8CEA\u4FDD\u8A3C\u3082\u91CD\u8996\u3057\u3066\u3044\u307E\u3059\u3002 </p></div></div><div class="faq-item scroll-animate animate-delay-500" data-v-f5851a56${_scopeId3}><div class="faq-question" data-v-f5851a56${_scopeId3}><h3 class="question-text" data-v-f5851a56${_scopeId3}>\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3067\u306F\u3069\u306E\u3088\u3046\u306A\u5206\u91CE\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F</h3><div class="${ssrRenderClass([{ expanded: unref(expandedFAQ) === 3 }, "question-icon"])}" data-v-f5851a56${_scopeId3}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-f5851a56${_scopeId3}><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f5851a56${_scopeId3}></path></svg></div></div><div class="faq-answer" style="${ssrRenderStyle(unref(expandedFAQ) === 3 ? null : { display: "none" })}" data-v-f5851a56${_scopeId3}><p data-v-f5851a56${_scopeId3}> \u6587\u5316\u30FB\u82B8\u8853\u5C55\u793A\u3001\u6280\u8853\u30C7\u30E2\u30F3\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u3001\u4F01\u696D\u30A4\u30D9\u30F3\u30C8\u3001\u6CA1\u5165\u578B\u4F53\u9A13\u30C7\u30B6\u30A4\u30F3\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u7F8E\u8853\u9928\u5C55\u793A\u3001\u6280\u8853\u767A\u8868\u4F1A\u3001\u88FD\u54C1\u767A\u8868\u3001\u6559\u80B2\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u306A\u3069\u3001\u69D8\u3005\u306A\u696D\u754C\u3067\u9769\u65B0\u7684\u306A\u5C55\u793A\u7A7A\u9593\u8A2D\u8A08\u3068\u5C02\u9580\u7684\u306A\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3001\u5370\u8C61\u7684\u306A\u4F53\u9A13\u3092\u5275\u9020\u3057\u307E\u3059\u3002 </p></div></div><div class="faq-item scroll-animate animate-delay-600" data-v-f5851a56${_scopeId3}><div class="faq-question" data-v-f5851a56${_scopeId3}><h3 class="question-text" data-v-f5851a56${_scopeId3}>\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D7\u30ED\u30B0\u30E9\u30E0\u3078\u306E\u53C2\u52A0\u65B9\u6CD5\u3084\u5C02\u9580\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u65B9\u6CD5\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044</h3><div class="${ssrRenderClass([{ expanded: unref(expandedFAQ) === 4 }, "question-icon"])}" data-v-f5851a56${_scopeId3}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-f5851a56${_scopeId3}><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f5851a56${_scopeId3}></path></svg></div></div><div class="faq-answer" style="${ssrRenderStyle(unref(expandedFAQ) === 4 ? null : { display: "none" })}" data-v-f5851a56${_scopeId3}><p data-v-f5851a56${_scopeId3}> \u5F53\u793E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30AF\u30E9\u30D6\u30DA\u30FC\u30B8\u304B\u3089\u4F1A\u54E1\u6A5F\u4F1A\u306B\u3064\u3044\u3066\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002\u30B3\u30FC\u30D2\u30FC\u611B\u597D\u5BB6\u30AF\u30E9\u30D6\u3001\u30A2\u30A6\u30C8\u30C9\u30A2\u30B9\u30DD\u30FC\u30C4\u30B0\u30EB\u30FC\u30D7\u3001\u6587\u5316\u82B8\u8853\u30B5\u30FC\u30AF\u30EB\u306A\u3069\u591A\u69D8\u306A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u63D0\u4F9B\u3057\u3066\u304A\u308A\u3001\u521D\u5FC3\u8005\u304B\u3089\u4E0A\u7D1A\u8005\u307E\u3067\u69D8\u3005\u306A\u30EC\u30D9\u30EB\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002 </p></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center mb-16 scroll-animate" }, [
                            createVNode("h2", { class: "anthropic-section-title" }, " \u3088\u304F\u3042\u308B\u3054\u8CEA\u554F "),
                            createVNode("p", { class: "anthropic-section-description animate-delay-200" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u30B5\u30FC\u30D3\u30B9\u3084\u4E8B\u696D\u306B\u95A2\u3059\u308B\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F\u306B\u304A\u7B54\u3048\u3057\u307E\u3059 ")
                          ]),
                          createVNode("div", { class: "faq-list" }, [
                            createVNode("div", {
                              class: "faq-item scroll-animate animate-delay-300",
                              onClick: ($event) => toggleFAQ(1)
                            }, [
                              createVNode("div", { class: "faq-question" }, [
                                createVNode("h3", { class: "question-text" }, "\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u4E3B\u306A\u4E8B\u696D\u5185\u5BB9\u306F\u4F55\u3067\u3059\u304B\uFF1F"),
                                createVNode("div", {
                                  class: ["question-icon", { expanded: unref(expandedFAQ) === 1 }]
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none"
                                  }, [
                                    createVNode("path", {
                                      d: "M6 9L12 15L18 9",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    })
                                  ]))
                                ], 2)
                              ]),
                              withDirectives(createVNode("div", { class: "faq-answer" }, [
                                createVNode("p", null, " \u5F53\u793E\u306F4\u3064\u306E\u6838\u5FC3\u4E8B\u696D\u3092\u5C55\u958B\u3057\u3066\u3044\u307E\u3059\u3002\u73C8\u7432\u4E8B\u696D\u3067\u306F\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u306E\u4F01\u753B\u958B\u767A\u30FB\u8CBF\u6613\u30FB\u30D6\u30E9\u30F3\u30C9\u5C55\u958B\u3092\u3001\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3067\u306F\u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u5206\u91CE\u306E\u5C55\u793A\u4F01\u753B\u3068\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3092\u3001\u6280\u8853\u7814\u7A76\u958B\u767A\u3067\u306F\u9769\u65B0\u7684\u306A\u6280\u8853\u7814\u7A76\u3068\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u3092\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u904B\u55B6\u3067\u306F\u4F1A\u54E1\u5236\u306E\u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3068\u9650\u5B9A\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002 ")
                              ], 512), [
                                [vShow, unref(expandedFAQ) === 1]
                              ])
                            ], 8, ["onClick"]),
                            createVNode("div", {
                              class: "faq-item scroll-animate animate-delay-400",
                              onClick: ($event) => toggleFAQ(2)
                            }, [
                              createVNode("div", { class: "faq-question" }, [
                                createVNode("h3", { class: "question-text" }, "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u306E\u54C1\u8CEA\u7BA1\u7406\u306F\u3069\u306E\u3088\u3046\u306B\u884C\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
                                createVNode("div", {
                                  class: ["question-icon", { expanded: unref(expandedFAQ) === 2 }]
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none"
                                  }, [
                                    createVNode("path", {
                                      d: "M6 9L12 15L18 9",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    })
                                  ]))
                                ], 2)
                              ]),
                              withDirectives(createVNode("div", { class: "faq-answer" }, [
                                createVNode("p", null, " \u5F53\u793E\u306E\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3067\u306F\u3001\u8C46\u306E\u9078\u5B9A\u304B\u3089\u6700\u7D42\u30D1\u30C3\u30B1\u30FC\u30B8\u30F3\u30B0\u307E\u3067\u5168\u5DE5\u7A0B\u3067\u53B3\u683C\u306A\u54C1\u8CEA\u8A55\u4FA1\u3092\u5B9F\u65BD\u3057\u3066\u3044\u307E\u3059\u3002\u4E16\u754C\u5404\u5730\u306E\u512A\u826F\u8FB2\u5712\u3068\u76F4\u63A5\u7684\u306A\u95A2\u4FC2\u3092\u7BC9\u304D\u3001\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u3092\u6D3B\u7528\u3057\u3001\u5E83\u7BC4\u56F2\u306A\u5473\u899A\u30C6\u30B9\u30C8\u3092\u884C\u3046\u3053\u3068\u3067\u3001\u5353\u8D8A\u3057\u305F\u54C1\u8CEA\u57FA\u6E96\u3092\u78BA\u4FDD\u3057\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3001\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u8ABF\u9054\u3068\u54C1\u8CEA\u4FDD\u8A3C\u3082\u91CD\u8996\u3057\u3066\u3044\u307E\u3059\u3002 ")
                              ], 512), [
                                [vShow, unref(expandedFAQ) === 2]
                              ])
                            ], 8, ["onClick"]),
                            createVNode("div", {
                              class: "faq-item scroll-animate animate-delay-500",
                              onClick: ($event) => toggleFAQ(3)
                            }, [
                              createVNode("div", { class: "faq-question" }, [
                                createVNode("h3", { class: "question-text" }, "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3067\u306F\u3069\u306E\u3088\u3046\u306A\u5206\u91CE\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F"),
                                createVNode("div", {
                                  class: ["question-icon", { expanded: unref(expandedFAQ) === 3 }]
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none"
                                  }, [
                                    createVNode("path", {
                                      d: "M6 9L12 15L18 9",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    })
                                  ]))
                                ], 2)
                              ]),
                              withDirectives(createVNode("div", { class: "faq-answer" }, [
                                createVNode("p", null, " \u6587\u5316\u30FB\u82B8\u8853\u5C55\u793A\u3001\u6280\u8853\u30C7\u30E2\u30F3\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u3001\u4F01\u696D\u30A4\u30D9\u30F3\u30C8\u3001\u6CA1\u5165\u578B\u4F53\u9A13\u30C7\u30B6\u30A4\u30F3\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u7F8E\u8853\u9928\u5C55\u793A\u3001\u6280\u8853\u767A\u8868\u4F1A\u3001\u88FD\u54C1\u767A\u8868\u3001\u6559\u80B2\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u306A\u3069\u3001\u69D8\u3005\u306A\u696D\u754C\u3067\u9769\u65B0\u7684\u306A\u5C55\u793A\u7A7A\u9593\u8A2D\u8A08\u3068\u5C02\u9580\u7684\u306A\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3001\u5370\u8C61\u7684\u306A\u4F53\u9A13\u3092\u5275\u9020\u3057\u307E\u3059\u3002 ")
                              ], 512), [
                                [vShow, unref(expandedFAQ) === 3]
                              ])
                            ], 8, ["onClick"]),
                            createVNode("div", {
                              class: "faq-item scroll-animate animate-delay-600",
                              onClick: ($event) => toggleFAQ(4)
                            }, [
                              createVNode("div", { class: "faq-question" }, [
                                createVNode("h3", { class: "question-text" }, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D7\u30ED\u30B0\u30E9\u30E0\u3078\u306E\u53C2\u52A0\u65B9\u6CD5\u3084\u5C02\u9580\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u65B9\u6CD5\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044"),
                                createVNode("div", {
                                  class: ["question-icon", { expanded: unref(expandedFAQ) === 4 }]
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none"
                                  }, [
                                    createVNode("path", {
                                      d: "M6 9L12 15L18 9",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    })
                                  ]))
                                ], 2)
                              ]),
                              withDirectives(createVNode("div", { class: "faq-answer" }, [
                                createVNode("p", null, " \u5F53\u793E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30AF\u30E9\u30D6\u30DA\u30FC\u30B8\u304B\u3089\u4F1A\u54E1\u6A5F\u4F1A\u306B\u3064\u3044\u3066\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002\u30B3\u30FC\u30D2\u30FC\u611B\u597D\u5BB6\u30AF\u30E9\u30D6\u3001\u30A2\u30A6\u30C8\u30C9\u30A2\u30B9\u30DD\u30FC\u30C4\u30B0\u30EB\u30FC\u30D7\u3001\u6587\u5316\u82B8\u8853\u30B5\u30FC\u30AF\u30EB\u306A\u3069\u591A\u69D8\u306A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u63D0\u4F9B\u3057\u3066\u304A\u308A\u3001\u521D\u5FC3\u8005\u304B\u3089\u4E0A\u7D1A\u8005\u307E\u3067\u69D8\u3005\u306A\u30EC\u30D9\u30EB\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002 ")
                              ], 512), [
                                [vShow, unref(expandedFAQ) === 4]
                              ])
                            ], 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      lg: "10",
                      xl: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center mb-16 scroll-animate" }, [
                          createVNode("h2", { class: "anthropic-section-title" }, " \u3088\u304F\u3042\u308B\u3054\u8CEA\u554F "),
                          createVNode("p", { class: "anthropic-section-description animate-delay-200" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u30B5\u30FC\u30D3\u30B9\u3084\u4E8B\u696D\u306B\u95A2\u3059\u308B\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F\u306B\u304A\u7B54\u3048\u3057\u307E\u3059 ")
                        ]),
                        createVNode("div", { class: "faq-list" }, [
                          createVNode("div", {
                            class: "faq-item scroll-animate animate-delay-300",
                            onClick: ($event) => toggleFAQ(1)
                          }, [
                            createVNode("div", { class: "faq-question" }, [
                              createVNode("h3", { class: "question-text" }, "\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u4E3B\u306A\u4E8B\u696D\u5185\u5BB9\u306F\u4F55\u3067\u3059\u304B\uFF1F"),
                              createVNode("div", {
                                class: ["question-icon", { expanded: unref(expandedFAQ) === 1 }]
                              }, [
                                (openBlock(), createBlock("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none"
                                }, [
                                  createVNode("path", {
                                    d: "M6 9L12 15L18 9",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  })
                                ]))
                              ], 2)
                            ]),
                            withDirectives(createVNode("div", { class: "faq-answer" }, [
                              createVNode("p", null, " \u5F53\u793E\u306F4\u3064\u306E\u6838\u5FC3\u4E8B\u696D\u3092\u5C55\u958B\u3057\u3066\u3044\u307E\u3059\u3002\u73C8\u7432\u4E8B\u696D\u3067\u306F\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u306E\u4F01\u753B\u958B\u767A\u30FB\u8CBF\u6613\u30FB\u30D6\u30E9\u30F3\u30C9\u5C55\u958B\u3092\u3001\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3067\u306F\u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u5206\u91CE\u306E\u5C55\u793A\u4F01\u753B\u3068\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3092\u3001\u6280\u8853\u7814\u7A76\u958B\u767A\u3067\u306F\u9769\u65B0\u7684\u306A\u6280\u8853\u7814\u7A76\u3068\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u3092\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u904B\u55B6\u3067\u306F\u4F1A\u54E1\u5236\u306E\u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3068\u9650\u5B9A\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002 ")
                            ], 512), [
                              [vShow, unref(expandedFAQ) === 1]
                            ])
                          ], 8, ["onClick"]),
                          createVNode("div", {
                            class: "faq-item scroll-animate animate-delay-400",
                            onClick: ($event) => toggleFAQ(2)
                          }, [
                            createVNode("div", { class: "faq-question" }, [
                              createVNode("h3", { class: "question-text" }, "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u306E\u54C1\u8CEA\u7BA1\u7406\u306F\u3069\u306E\u3088\u3046\u306B\u884C\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
                              createVNode("div", {
                                class: ["question-icon", { expanded: unref(expandedFAQ) === 2 }]
                              }, [
                                (openBlock(), createBlock("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none"
                                }, [
                                  createVNode("path", {
                                    d: "M6 9L12 15L18 9",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  })
                                ]))
                              ], 2)
                            ]),
                            withDirectives(createVNode("div", { class: "faq-answer" }, [
                              createVNode("p", null, " \u5F53\u793E\u306E\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3067\u306F\u3001\u8C46\u306E\u9078\u5B9A\u304B\u3089\u6700\u7D42\u30D1\u30C3\u30B1\u30FC\u30B8\u30F3\u30B0\u307E\u3067\u5168\u5DE5\u7A0B\u3067\u53B3\u683C\u306A\u54C1\u8CEA\u8A55\u4FA1\u3092\u5B9F\u65BD\u3057\u3066\u3044\u307E\u3059\u3002\u4E16\u754C\u5404\u5730\u306E\u512A\u826F\u8FB2\u5712\u3068\u76F4\u63A5\u7684\u306A\u95A2\u4FC2\u3092\u7BC9\u304D\u3001\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u3092\u6D3B\u7528\u3057\u3001\u5E83\u7BC4\u56F2\u306A\u5473\u899A\u30C6\u30B9\u30C8\u3092\u884C\u3046\u3053\u3068\u3067\u3001\u5353\u8D8A\u3057\u305F\u54C1\u8CEA\u57FA\u6E96\u3092\u78BA\u4FDD\u3057\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3001\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u8ABF\u9054\u3068\u54C1\u8CEA\u4FDD\u8A3C\u3082\u91CD\u8996\u3057\u3066\u3044\u307E\u3059\u3002 ")
                            ], 512), [
                              [vShow, unref(expandedFAQ) === 2]
                            ])
                          ], 8, ["onClick"]),
                          createVNode("div", {
                            class: "faq-item scroll-animate animate-delay-500",
                            onClick: ($event) => toggleFAQ(3)
                          }, [
                            createVNode("div", { class: "faq-question" }, [
                              createVNode("h3", { class: "question-text" }, "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3067\u306F\u3069\u306E\u3088\u3046\u306A\u5206\u91CE\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F"),
                              createVNode("div", {
                                class: ["question-icon", { expanded: unref(expandedFAQ) === 3 }]
                              }, [
                                (openBlock(), createBlock("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none"
                                }, [
                                  createVNode("path", {
                                    d: "M6 9L12 15L18 9",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  })
                                ]))
                              ], 2)
                            ]),
                            withDirectives(createVNode("div", { class: "faq-answer" }, [
                              createVNode("p", null, " \u6587\u5316\u30FB\u82B8\u8853\u5C55\u793A\u3001\u6280\u8853\u30C7\u30E2\u30F3\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u3001\u4F01\u696D\u30A4\u30D9\u30F3\u30C8\u3001\u6CA1\u5165\u578B\u4F53\u9A13\u30C7\u30B6\u30A4\u30F3\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u7F8E\u8853\u9928\u5C55\u793A\u3001\u6280\u8853\u767A\u8868\u4F1A\u3001\u88FD\u54C1\u767A\u8868\u3001\u6559\u80B2\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u306A\u3069\u3001\u69D8\u3005\u306A\u696D\u754C\u3067\u9769\u65B0\u7684\u306A\u5C55\u793A\u7A7A\u9593\u8A2D\u8A08\u3068\u5C02\u9580\u7684\u306A\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3001\u5370\u8C61\u7684\u306A\u4F53\u9A13\u3092\u5275\u9020\u3057\u307E\u3059\u3002 ")
                            ], 512), [
                              [vShow, unref(expandedFAQ) === 3]
                            ])
                          ], 8, ["onClick"]),
                          createVNode("div", {
                            class: "faq-item scroll-animate animate-delay-600",
                            onClick: ($event) => toggleFAQ(4)
                          }, [
                            createVNode("div", { class: "faq-question" }, [
                              createVNode("h3", { class: "question-text" }, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D7\u30ED\u30B0\u30E9\u30E0\u3078\u306E\u53C2\u52A0\u65B9\u6CD5\u3084\u5C02\u9580\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u65B9\u6CD5\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044"),
                              createVNode("div", {
                                class: ["question-icon", { expanded: unref(expandedFAQ) === 4 }]
                              }, [
                                (openBlock(), createBlock("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none"
                                }, [
                                  createVNode("path", {
                                    d: "M6 9L12 15L18 9",
                                    stroke: "currentColor",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                  })
                                ]))
                              ], 2)
                            ]),
                            withDirectives(createVNode("div", { class: "faq-answer" }, [
                              createVNode("p", null, " \u5F53\u793E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30AF\u30E9\u30D6\u30DA\u30FC\u30B8\u304B\u3089\u4F1A\u54E1\u6A5F\u4F1A\u306B\u3064\u3044\u3066\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002\u30B3\u30FC\u30D2\u30FC\u611B\u597D\u5BB6\u30AF\u30E9\u30D6\u3001\u30A2\u30A6\u30C8\u30C9\u30A2\u30B9\u30DD\u30FC\u30C4\u30B0\u30EB\u30FC\u30D7\u3001\u6587\u5316\u82B8\u8853\u30B5\u30FC\u30AF\u30EB\u306A\u3069\u591A\u69D8\u306A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u63D0\u4F9B\u3057\u3066\u304A\u308A\u3001\u521D\u5FC3\u8005\u304B\u3089\u4E0A\u7D1A\u8005\u307E\u3067\u69D8\u3005\u306A\u30EC\u30D9\u30EB\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002 ")
                            ], 512), [
                              [vShow, unref(expandedFAQ) === 4]
                            ])
                          ], 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    lg: "10",
                    xl: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center mb-16 scroll-animate" }, [
                        createVNode("h2", { class: "anthropic-section-title" }, " \u3088\u304F\u3042\u308B\u3054\u8CEA\u554F "),
                        createVNode("p", { class: "anthropic-section-description animate-delay-200" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u30B5\u30FC\u30D3\u30B9\u3084\u4E8B\u696D\u306B\u95A2\u3059\u308B\u3088\u304F\u3042\u308B\u3054\u8CEA\u554F\u306B\u304A\u7B54\u3048\u3057\u307E\u3059 ")
                      ]),
                      createVNode("div", { class: "faq-list" }, [
                        createVNode("div", {
                          class: "faq-item scroll-animate animate-delay-300",
                          onClick: ($event) => toggleFAQ(1)
                        }, [
                          createVNode("div", { class: "faq-question" }, [
                            createVNode("h3", { class: "question-text" }, "\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u4E3B\u306A\u4E8B\u696D\u5185\u5BB9\u306F\u4F55\u3067\u3059\u304B\uFF1F"),
                            createVNode("div", {
                              class: ["question-icon", { expanded: unref(expandedFAQ) === 1 }]
                            }, [
                              (openBlock(), createBlock("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none"
                              }, [
                                createVNode("path", {
                                  d: "M6 9L12 15L18 9",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                })
                              ]))
                            ], 2)
                          ]),
                          withDirectives(createVNode("div", { class: "faq-answer" }, [
                            createVNode("p", null, " \u5F53\u793E\u306F4\u3064\u306E\u6838\u5FC3\u4E8B\u696D\u3092\u5C55\u958B\u3057\u3066\u3044\u307E\u3059\u3002\u73C8\u7432\u4E8B\u696D\u3067\u306F\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u306E\u4F01\u753B\u958B\u767A\u30FB\u8CBF\u6613\u30FB\u30D6\u30E9\u30F3\u30C9\u5C55\u958B\u3092\u3001\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3067\u306F\u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u5206\u91CE\u306E\u5C55\u793A\u4F01\u753B\u3068\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3092\u3001\u6280\u8853\u7814\u7A76\u958B\u767A\u3067\u306F\u9769\u65B0\u7684\u306A\u6280\u8853\u7814\u7A76\u3068\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u3092\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u904B\u55B6\u3067\u306F\u4F1A\u54E1\u5236\u306E\u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u3068\u9650\u5B9A\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002 ")
                          ], 512), [
                            [vShow, unref(expandedFAQ) === 1]
                          ])
                        ], 8, ["onClick"]),
                        createVNode("div", {
                          class: "faq-item scroll-animate animate-delay-400",
                          onClick: ($event) => toggleFAQ(2)
                        }, [
                          createVNode("div", { class: "faq-question" }, [
                            createVNode("h3", { class: "question-text" }, "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u306E\u54C1\u8CEA\u7BA1\u7406\u306F\u3069\u306E\u3088\u3046\u306B\u884C\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"),
                            createVNode("div", {
                              class: ["question-icon", { expanded: unref(expandedFAQ) === 2 }]
                            }, [
                              (openBlock(), createBlock("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none"
                              }, [
                                createVNode("path", {
                                  d: "M6 9L12 15L18 9",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                })
                              ]))
                            ], 2)
                          ]),
                          withDirectives(createVNode("div", { class: "faq-answer" }, [
                            createVNode("p", null, " \u5F53\u793E\u306E\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3067\u306F\u3001\u8C46\u306E\u9078\u5B9A\u304B\u3089\u6700\u7D42\u30D1\u30C3\u30B1\u30FC\u30B8\u30F3\u30B0\u307E\u3067\u5168\u5DE5\u7A0B\u3067\u53B3\u683C\u306A\u54C1\u8CEA\u8A55\u4FA1\u3092\u5B9F\u65BD\u3057\u3066\u3044\u307E\u3059\u3002\u4E16\u754C\u5404\u5730\u306E\u512A\u826F\u8FB2\u5712\u3068\u76F4\u63A5\u7684\u306A\u95A2\u4FC2\u3092\u7BC9\u304D\u3001\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u3092\u6D3B\u7528\u3057\u3001\u5E83\u7BC4\u56F2\u306A\u5473\u899A\u30C6\u30B9\u30C8\u3092\u884C\u3046\u3053\u3068\u3067\u3001\u5353\u8D8A\u3057\u305F\u54C1\u8CEA\u57FA\u6E96\u3092\u78BA\u4FDD\u3057\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3001\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u8ABF\u9054\u3068\u54C1\u8CEA\u4FDD\u8A3C\u3082\u91CD\u8996\u3057\u3066\u3044\u307E\u3059\u3002 ")
                          ], 512), [
                            [vShow, unref(expandedFAQ) === 2]
                          ])
                        ], 8, ["onClick"]),
                        createVNode("div", {
                          class: "faq-item scroll-animate animate-delay-500",
                          onClick: ($event) => toggleFAQ(3)
                        }, [
                          createVNode("div", { class: "faq-question" }, [
                            createVNode("h3", { class: "question-text" }, "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3067\u306F\u3069\u306E\u3088\u3046\u306A\u5206\u91CE\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u304B\uFF1F"),
                            createVNode("div", {
                              class: ["question-icon", { expanded: unref(expandedFAQ) === 3 }]
                            }, [
                              (openBlock(), createBlock("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none"
                              }, [
                                createVNode("path", {
                                  d: "M6 9L12 15L18 9",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                })
                              ]))
                            ], 2)
                          ]),
                          withDirectives(createVNode("div", { class: "faq-answer" }, [
                            createVNode("p", null, " \u6587\u5316\u30FB\u82B8\u8853\u5C55\u793A\u3001\u6280\u8853\u30C7\u30E2\u30F3\u30B9\u30C8\u30EC\u30FC\u30B7\u30E7\u30F3\u3001\u4F01\u696D\u30A4\u30D9\u30F3\u30C8\u3001\u6CA1\u5165\u578B\u4F53\u9A13\u30C7\u30B6\u30A4\u30F3\u3092\u5C02\u9580\u3068\u3057\u3066\u3044\u307E\u3059\u3002\u7F8E\u8853\u9928\u5C55\u793A\u3001\u6280\u8853\u767A\u8868\u4F1A\u3001\u88FD\u54C1\u767A\u8868\u3001\u6559\u80B2\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7\u306A\u3069\u3001\u69D8\u3005\u306A\u696D\u754C\u3067\u9769\u65B0\u7684\u306A\u5C55\u793A\u7A7A\u9593\u8A2D\u8A08\u3068\u5C02\u9580\u7684\u306A\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3001\u5370\u8C61\u7684\u306A\u4F53\u9A13\u3092\u5275\u9020\u3057\u307E\u3059\u3002 ")
                          ], 512), [
                            [vShow, unref(expandedFAQ) === 3]
                          ])
                        ], 8, ["onClick"]),
                        createVNode("div", {
                          class: "faq-item scroll-animate animate-delay-600",
                          onClick: ($event) => toggleFAQ(4)
                        }, [
                          createVNode("div", { class: "faq-question" }, [
                            createVNode("h3", { class: "question-text" }, "\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D7\u30ED\u30B0\u30E9\u30E0\u3078\u306E\u53C2\u52A0\u65B9\u6CD5\u3084\u5C02\u9580\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u65B9\u6CD5\u3092\u6559\u3048\u3066\u304F\u3060\u3055\u3044"),
                            createVNode("div", {
                              class: ["question-icon", { expanded: unref(expandedFAQ) === 4 }]
                            }, [
                              (openBlock(), createBlock("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none"
                              }, [
                                createVNode("path", {
                                  d: "M6 9L12 15L18 9",
                                  stroke: "currentColor",
                                  "stroke-width": "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                })
                              ]))
                            ], 2)
                          ]),
                          withDirectives(createVNode("div", { class: "faq-answer" }, [
                            createVNode("p", null, " \u5F53\u793E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0\u307E\u305F\u306F\u30AF\u30E9\u30D6\u30DA\u30FC\u30B8\u304B\u3089\u4F1A\u54E1\u6A5F\u4F1A\u306B\u3064\u3044\u3066\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002\u30B3\u30FC\u30D2\u30FC\u611B\u597D\u5BB6\u30AF\u30E9\u30D6\u3001\u30A2\u30A6\u30C8\u30C9\u30A2\u30B9\u30DD\u30FC\u30C4\u30B0\u30EB\u30FC\u30D7\u3001\u6587\u5316\u82B8\u8853\u30B5\u30FC\u30AF\u30EB\u306A\u3069\u591A\u69D8\u306A\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u63D0\u4F9B\u3057\u3066\u304A\u308A\u3001\u521D\u5FC3\u8005\u304B\u3089\u4E0A\u7D1A\u8005\u307E\u3067\u69D8\u3005\u306A\u30EC\u30D9\u30EB\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002 ")
                          ], 512), [
                            [vShow, unref(expandedFAQ) === 4]
                          ])
                        ], 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5851a56"]]);

export { index as default };
//# sourceMappingURL=index-QO8n3nP1.mjs.map
