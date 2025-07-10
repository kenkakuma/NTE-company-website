import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useSEO } from './useSEO-BevYkgtu.mjs';
import { x as defineStore } from './server.mjs';
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

const useArticleStore = defineStore("articles", {
  state: () => ({
    articles: [],
    selectedArticle: null,
    loading: false,
    error: null
  }),
  getters: {
    // Get articles by category
    getArticlesByCategory: (state) => {
      return (category) => state.articles.filter((article) => article.category === category);
    },
    // Get latest articles
    getLatestArticles: (state) => {
      return (limit = 5) => state.articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
    },
    // Get article by ID
    getArticleById: (state) => {
      return (id) => state.articles.find((article) => article.id === id);
    },
    // Get articles by tag
    getArticlesByTag: (state) => {
      return (tag) => state.articles.filter(
        (article) => article.tags && article.tags.includes(tag)
      );
    },
    // Get all unique tags
    getAllTags: (state) => {
      const tags = /* @__PURE__ */ new Set();
      state.articles.forEach((article) => {
        if (article.tags) {
          article.tags.forEach((tag) => tags.add(tag));
        }
      });
      return Array.from(tags).sort();
    },
    // Get category statistics
    getCategoryStats: (state) => {
      const stats = {};
      state.articles.forEach((article) => {
        stats[article.category] = (stats[article.category] || 0) + 1;
      });
      return stats;
    },
    // Get total article count
    getTotalCount: (state) => state.articles.length
  },
  actions: {
    // Initialize store with data from localStorage or default data
    async initialize() {
      this.loading = true;
      this.error = null;
      try {
        if (false) ;
        else {
          this.loadDefaultArticles();
        }
      } catch (error) {
        console.error("Failed to initialize articles:", error);
        this.error = "\u30C7\u30FC\u30BF\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
        this.loadDefaultArticles();
      } finally {
        this.loading = false;
      }
    },
    // Load default articles data
    loadDefaultArticles() {
      this.articles = [
        {
          id: 1,
          date: "2025.01.15",
          title: "\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u8A2D\u7ACB\u6E96\u5099\u958B\u59CB\u306E\u304A\u77E5\u3089\u305B",
          category: "\u4F01\u696D\u30CB\u30E5\u30FC\u30B9",
          excerpt: "\u65B0\u3057\u3044\u4FA1\u5024\u5275\u9020\u3092\u76EE\u6307\u3057\u3066\u3001\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u8A2D\u7ACB\u6E96\u5099\u3092\u958B\u59CB\u3044\u305F\u3057\u307E\u3059\u3002\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u3001\u304A\u5BA2\u69D8\u3068\u5171\u306B\u6210\u9577\u3057\u3066\u3044\u304F\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u307E\u3059\u3002",
          content: `
            <p>\u3053\u306E\u5EA6\u3001\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E\u306E\u8A2D\u7ACB\u6E96\u5099\u3092\u958B\u59CB\u3059\u308B\u3053\u3068\u3092\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u3002</p>
            <p>\u79C1\u305F\u3061\u306F\u3001\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3057\u3001\u304A\u5BA2\u69D8\u3068\u5171\u306B\u6210\u9577\u3057\u3066\u3044\u304F\u3053\u3068\u3092\u76EE\u6307\u3057\u3066\u3044\u307E\u3059\u3002</p>
            <h2>\u8A2D\u7ACB\u6E96\u5099\u306E\u80CC\u666F</h2>
            <p>\u6025\u901F\u306B\u5909\u5316\u3059\u308B\u30D3\u30B8\u30CD\u30B9\u74B0\u5883\u306B\u304A\u3044\u3066\u3001\u4F01\u696D\u306B\u306F\u5E38\u306B\u65B0\u3057\u3044\u4FA1\u5024\u5275\u9020\u304C\u6C42\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u79C1\u305F\u3061\u306F\u3001\u6280\u8853\u30FB\u30D3\u30B8\u30CD\u30B9\u30FB\u6587\u5316\u306E\u591A\u5206\u91CE\u306B\u308F\u305F\u308B\u5C02\u9580\u77E5\u8B58\u3092\u6D3B\u304B\u3057\u3001\u304A\u5BA2\u69D8\u306E\u8AB2\u984C\u89E3\u6C7A\u306B\u8CA2\u732E\u3057\u3066\u307E\u3044\u308A\u307E\u3059\u3002</p>
            <h2>\u4ECA\u5F8C\u306E\u5C55\u958B</h2>
            <ul>
              <li>\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u306E\u672C\u683C\u5C55\u958B</li>
              <li>\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u30B5\u30FC\u30D3\u30B9\u306E\u62E1\u5145</li>
              <li>\u7814\u7A76\u958B\u767A\u30E9\u30DC\u306E\u8A2D\u7ACB</li>
              <li>\u4F1A\u54E1\u5236\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u306E\u904B\u55B6\u958B\u59CB</li>
            </ul>
            <p>\u8A2D\u7ACB\u306B\u5411\u3051\u305F\u6E96\u5099\u304C\u6574\u3044\u6B21\u7B2C\u3001\u6539\u3081\u3066\u3054\u5831\u544A\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u4ECA\u5F8C\u3068\u3082\u3069\u3046\u305E\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002</p>
          `,
          readTime: "3\u5206",
          tags: ["\u8A2D\u7ACB", "\u4F01\u696D\u60C5\u5831", "\u30CB\u30E5\u30FC\u30B9", "\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0"]
        },
        {
          id: 2,
          date: "2025.01.10",
          title: "\u6771\u4EAC\u30EB\u30A2\u30FC\u30FB\u30D5\u30E9\u30A4\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u5B66\u9662 2025\u5E74\u6625\u5B63\u30B3\u30FC\u30B9\u52DF\u96C6\u958B\u59CB",
          category: "\u30B5\u30FC\u30D3\u30B9",
          excerpt: "\u521D\u5FC3\u8005\u304B\u3089\u4E0A\u7D1A\u8005\u307E\u3067\u3001\u672C\u683C\u7684\u306A\u30D5\u30E9\u30A4\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u6280\u8853\u3092\u5B66\u3079\u308B\u30B3\u30FC\u30B9\u3067\u3059\u3002\u7D4C\u9A13\u8C4A\u5BCC\u306A\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u306B\u3088\u308B\u5B9F\u8DF5\u7684\u306A\u6307\u5C0E\u3092\u884C\u3044\u307E\u3059\u3002",
          content: `
            <p>\u6771\u4EAC\u30EB\u30A2\u30FC\u30FB\u30D5\u30E9\u30A4\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u5B66\u9662\u3067\u306F\u30012025\u5E74\u6625\u5B63\u30B3\u30FC\u30B9\u306E\u52DF\u96C6\u3092\u958B\u59CB\u3044\u305F\u3057\u307E\u3059\u3002</p>
            <p>\u7D4C\u9A13\u8C4A\u5BCC\u306A\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u306B\u3088\u308B\u5B9F\u8DF5\u7684\u306A\u6307\u5C0E\u3067\u3001\u30D5\u30E9\u30A4\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u306E\u6280\u8853\u3092\u7FD2\u5F97\u3067\u304D\u307E\u3059\u3002</p>
            <h2>\u30B3\u30FC\u30B9\u5185\u5BB9</h2>
            <h3>\u521D\u5FC3\u8005\u30B3\u30FC\u30B9</h3>
            <ul>
              <li>\u30D5\u30E9\u30A4\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0\u306E\u57FA\u672C\u77E5\u8B58</li>
              <li>\u30AD\u30E3\u30B9\u30C6\u30A3\u30F3\u30B0\u6280\u8853\u306E\u7FD2\u5F97</li>
              <li>\u5B89\u5168\u306A\u91E3\u884C\u306E\u305F\u3081\u306E\u77E5\u8B58</li>
            </ul>
            <h3>\u4E2D\u7D1A\u30FB\u4E0A\u7D1A\u8005\u30B3\u30FC\u30B9</h3>
            <ul>
              <li>\u9AD8\u5EA6\u306A\u30AD\u30E3\u30B9\u30C6\u30A3\u30F3\u30B0\u6280\u8853</li>
              <li>\u30D5\u30E9\u30A4\u30BF\u30A4\u30A4\u30F3\u30B0\u5B9F\u7FD2</li>
              <li>\u6CB3\u5DDD\u3067\u306E\u5B9F\u8DF5\u7DF4\u7FD2</li>
            </ul>
            <h2>\u52DF\u96C6\u8981\u9805</h2>
            <p><strong>\u671F\u9593:</strong> 2025\u5E744\u6708\u301C6\u6708\uFF08\u516812\u56DE\uFF09</p>
            <p><strong>\u5834\u6240:</strong> \u6771\u4EAC\u90FD\u5185\u65BD\u8A2D + \u6CB3\u5DDD\u5B9F\u7FD2</p>
            <p><strong>\u5B9A\u54E1:</strong> \u5404\u30B3\u30FC\u30B920\u540D</p>
            <p><strong>\u7533\u8FBC\u7DE0\u5207:</strong> 2025\u5E743\u670831\u65E5</p>
          `,
          readTime: "4\u5206",
          tags: ["\u30D5\u30A3\u30C3\u30B7\u30F3\u30B0", "\u6559\u80B2", "\u30B3\u30FC\u30B9", "\u30B9\u30DD\u30FC\u30C4", "\u52DF\u96C6"]
        },
        {
          id: 3,
          date: "2025.01.08",
          title: "\u53B3\u9078\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7\u62E1\u5145\u306B\u3064\u3044\u3066",
          category: "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D",
          excerpt: "\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u8ABF\u9054\u306B\u3088\u308B\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u5546\u54C1\u306E\u65B0\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7\u3092\u767A\u8868\u3002\u751F\u7523\u8005\u3068\u306E\u76F4\u63A5\u53D6\u5F15\u306B\u3088\u308A\u3001\u6700\u9AD8\u54C1\u8CEA\u306E\u30B3\u30FC\u30D2\u30FC\u3092\u304A\u5C4A\u3051\u3057\u307E\u3059\u3002",
          content: `
            <p>\u53B3\u9078\u3055\u308C\u305F\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u4F7F\u7528\u3057\u305F\u65B0\u5546\u54C1\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7\u3092\u767A\u8868\u3044\u305F\u3057\u307E\u3059\u3002</p>
            <p>\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u8ABF\u9054\u306B\u3053\u3060\u308F\u308A\u3001\u751F\u7523\u8005\u3068\u306E\u76F4\u63A5\u53D6\u5F15\u306B\u3088\u308A\u9AD8\u54C1\u8CEA\u306A\u30B3\u30FC\u30D2\u30FC\u3092\u63D0\u4F9B\u3044\u305F\u3057\u307E\u3059\u3002</p>
            <h2>\u65B0\u5546\u54C1\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7</h2>
            <h3>\u30D7\u30EC\u30DF\u30A2\u30E0\u30B7\u30F3\u30B0\u30EB\u30AA\u30EA\u30B8\u30F3</h3>
            <ul>
              <li>\u30A8\u30C1\u30AA\u30D4\u30A2 \u30A4\u30EB\u30AC\u30C1\u30A7\u30D5\u30A7</li>
              <li>\u30B3\u30ED\u30F3\u30D3\u30A2 \u30A6\u30A4\u30E9\u770C</li>
              <li>\u30B1\u30CB\u30A2 AA</li>
            </ul>
            <h3>\u30D6\u30EC\u30F3\u30C9\u30B7\u30EA\u30FC\u30BA</h3>
            <ul>
              <li>\u30E2\u30FC\u30CB\u30F3\u30B0\u30D6\u30EC\u30F3\u30C9</li>
              <li>\u30A8\u30B9\u30D7\u30EC\u30C3\u30BD\u30D6\u30EC\u30F3\u30C9</li>
              <li>\u30C7\u30AB\u30D5\u30A7\u30D6\u30EC\u30F3\u30C9</li>
            </ul>
            <h2>\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u8ABF\u9054\u3078\u306E\u53D6\u308A\u7D44\u307F</h2>
            <p>\u79C1\u305F\u3061\u306F\u3001\u74B0\u5883\u306B\u914D\u616E\u3057\u305F\u6301\u7D9A\u53EF\u80FD\u306A\u30B3\u30FC\u30D2\u30FC\u751F\u7523\u3092\u652F\u63F4\u3057\u3066\u3044\u307E\u3059\u3002\u751F\u7523\u8005\u3068\u306E\u9577\u671F\u7684\u306A\u30D1\u30FC\u30C8\u30CA\u30FC\u30B7\u30C3\u30D7\u306B\u3088\u308A\u3001\u54C1\u8CEA\u5411\u4E0A\u3068\u74B0\u5883\u4FDD\u8B77\u306E\u4E21\u7ACB\u3092\u76EE\u6307\u3057\u3066\u3044\u307E\u3059\u3002</p>
            <blockquote>
              \u300C\u4E00\u676F\u306E\u30B3\u30FC\u30D2\u30FC\u304B\u3089\u59CB\u307E\u308B\u3001\u6301\u7D9A\u53EF\u80FD\u306A\u672A\u6765\u300D
            </blockquote>
            <p>\u65B0\u5546\u54C1\u306F2025\u5E742\u6708\u3088\u308A\u9806\u6B21\u767A\u58F2\u4E88\u5B9A\u3067\u3059\u3002\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u6539\u3081\u3066\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u3002</p>
          `,
          readTime: "3\u5206",
          tags: ["\u30B3\u30FC\u30D2\u30FC", "\u65B0\u5546\u54C1", "\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB", "\u54C1\u8CEA", "\u74B0\u5883"]
        },
        {
          id: 4,
          date: "2025.01.05",
          title: "\u4E2D\u56FD\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u5C55\u793A\u30B9\u30DA\u30FC\u30B9 \u4E2D\u76EE\u9ED2\u30AA\u30FC\u30D7\u30F3\u6E96\u5099\u4E2D",
          category: "\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8",
          excerpt: "\u73FE\u4EE3\u4E2D\u56FD\u30A2\u30FC\u30C8\u3092\u7D39\u4ECB\u3059\u308B\u5C55\u793A\u30B9\u30DA\u30FC\u30B9\u304C\u4E2D\u76EE\u9ED2\u306B\u30AA\u30FC\u30D7\u30F3\u4E88\u5B9A\u3002\u6587\u5316\u4EA4\u6D41\u3092\u901A\u3058\u3066\u65B0\u305F\u306A\u4FA1\u5024\u5275\u9020\u3092\u76EE\u6307\u3057\u307E\u3059\u3002",
          content: `
            <p>\u4E2D\u76EE\u9ED2\u306B\u73FE\u4EE3\u4E2D\u56FD\u30A2\u30FC\u30C8\u3092\u7D39\u4ECB\u3059\u308B\u5C55\u793A\u30B9\u30DA\u30FC\u30B9\u3092\u30AA\u30FC\u30D7\u30F3\u3059\u308B\u6E96\u5099\u3092\u9032\u3081\u3066\u3044\u307E\u3059\u3002</p>
            <p>\u6587\u5316\u4EA4\u6D41\u3092\u901A\u3058\u3066\u65B0\u305F\u306A\u4FA1\u5024\u5275\u9020\u3092\u76EE\u6307\u3057\u3001\u65E5\u4E2D\u9593\u306E\u76F8\u4E92\u7406\u89E3\u3092\u6DF1\u3081\u308B\u5834\u3092\u63D0\u4F9B\u3044\u305F\u3057\u307E\u3059\u3002</p>
            <h2>\u5C55\u793A\u30B9\u30DA\u30FC\u30B9\u306B\u3064\u3044\u3066</h2>
            <p><strong>\u6240\u5728\u5730:</strong> \u6771\u4EAC\u90FD\u76EE\u9ED2\u533A\u4E2D\u76EE\u9ED2</p>
            <p><strong>\u9762\u7A4D:</strong> \u7D04200\u5E73\u65B9\u30E1\u30FC\u30C8\u30EB</p>
            <p><strong>\u30AA\u30FC\u30D7\u30F3\u4E88\u5B9A:</strong> 2025\u5E743\u6708</p>
            <h2>\u5C55\u793A\u4E88\u5B9A\u4F5C\u54C1</h2>
            <ul>
              <li>\u73FE\u4EE3\u7D75\u753B\u4F5C\u54C1</li>
              <li>\u5F6B\u523B\u30FB\u30A4\u30F3\u30B9\u30BF\u30EC\u30FC\u30B7\u30E7\u30F3</li>
              <li>\u6620\u50CF\u30FB\u30C7\u30B8\u30BF\u30EB\u30A2\u30FC\u30C8</li>
              <li>\u66F8\u9053\u30FB\u4F1D\u7D71\u5DE5\u82B8</li>
            </ul>
            <h2>\u6587\u5316\u4EA4\u6D41\u30D7\u30ED\u30B0\u30E9\u30E0</h2>
            <p>\u5C55\u793A\u3060\u3051\u3067\u306A\u304F\u3001\u4EE5\u4E0B\u306E\u30D7\u30ED\u30B0\u30E9\u30E0\u3082\u4E88\u5B9A\u3057\u3066\u3044\u307E\u3059\uFF1A</p>
            <ul>
              <li>\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u30C8\u30FC\u30AF</li>
              <li>\u30EF\u30FC\u30AF\u30B7\u30E7\u30C3\u30D7</li>
              <li>\u6587\u5316\u8B1B\u5EA7</li>
              <li>\u4EA4\u6D41\u30A4\u30D9\u30F3\u30C8</li>
            </ul>
            <p>\u8A73\u7D30\u306A\u60C5\u5831\u306F\u3001\u6E96\u5099\u304C\u6574\u3044\u6B21\u7B2C\u304A\u77E5\u3089\u305B\u3044\u305F\u3057\u307E\u3059\u3002</p>
          `,
          readTime: "3\u5206",
          tags: ["\u5C55\u793A", "\u30A2\u30FC\u30C8", "\u6587\u5316\u4EA4\u6D41", "\u30A4\u30D9\u30F3\u30C8", "\u4E2D\u56FD", "\u4E2D\u76EE\u9ED2"]
        },
        {
          id: 5,
          date: "2025.01.03",
          title: "2025\u5E74\u9650\u5B9A\u91E3\u5177\u4E88\u7D04\u53D7\u4ED8\u958B\u59CB - Shimano\u30FBDaiwa\u6700\u65B0\u30E2\u30C7\u30EB",
          category: "\u91E3\u5177\u30FB\u5668\u5177",
          excerpt: "2025\u5E74\u306E\u9650\u5B9A\u91E3\u5177\u306E\u4E88\u7D04\u53D7\u4ED8\u3092\u958B\u59CB\u3002Shimano\u3001Daiw\u306E\u6700\u65B0\u30E2\u30C7\u30EB\u3092\u542B\u3080\u53B3\u9078\u3055\u308C\u305F\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7\u3092\u3054\u7528\u610F\u3057\u307E\u3057\u305F\u3002",
          content: `
            <p>2025\u5E74\u306E\u9650\u5B9A\u91E3\u5177\u306E\u4E88\u7D04\u53D7\u4ED8\u3092\u958B\u59CB\u3044\u305F\u3057\u307E\u3059\u3002</p>
            <p>Shimano\u3001Daiwa\u306E\u6700\u65B0\u30E2\u30C7\u30EB\u3092\u542B\u3080\u53B3\u9078\u3055\u308C\u305F\u30E9\u30A4\u30F3\u30CA\u30C3\u30D7\u3092\u3054\u7528\u610F\u3057\u307E\u3057\u305F\u3002</p>
            <h2>\u4E88\u7D04\u53EF\u80FD\u5546\u54C1</h2>
            <h3>Shimano 2025\u5E74\u65B0\u4F5C</h3>
            <ul>
              <li>\u30B9\u30C6\u30E9 SW 2025\u30E2\u30C7\u30EB</li>
              <li>\u30A8\u30AF\u30B9\u30BB\u30F3\u30B9 infinity 2025</li>
              <li>\u30AB\u30EB\u30AB\u30C3\u30BF\u30B3\u30F3\u30AF\u30A8\u30B9\u30C8 MD</li>
            </ul>
            <h3>Daiwa 2025\u5E74\u65B0\u4F5C</h3>
            <ul>
              <li>\u30A4\u30B0\u30B8\u30B9\u30C8 2025</li>
              <li>\u30BD\u30EB\u30C6\u30A3\u30AC BJ 2025</li>
              <li>\u6708\u4E0B\u7F8E\u4EBA AIR AGS 2025</li>
            </ul>
            <h2>\u4E88\u7D04\u7279\u5178</h2>
            <p>\u4E88\u7D04\u3044\u305F\u3060\u3044\u305F\u304A\u5BA2\u69D8\u306B\u306F\u4EE5\u4E0B\u306E\u7279\u5178\u3092\u3054\u7528\u610F\uFF1A</p>
            <ul>
              <li>\u767A\u58F2\u65E5\u524D\u512A\u5148\u304A\u6E21\u3057</li>
              <li>\u5C02\u7528\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u30B5\u30FC\u30D3\u30B9</li>
              <li>\u9650\u5B9A\u30AA\u30EA\u30B8\u30CA\u30EB\u30B1\u30FC\u30B9</li>
              <li>\u4F7F\u7528\u65B9\u6CD5\u30EC\u30AF\u30C1\u30E3\u30FC</li>
            </ul>
            <h2>\u4E88\u7D04\u65B9\u6CD5</h2>
            <p>\u304A\u96FB\u8A71\u307E\u305F\u306F\u30E1\u30FC\u30EB\u306B\u3066\u3054\u4E88\u7D04\u3092\u627F\u308A\u307E\u3059\u3002\u6570\u91CF\u9650\u5B9A\u306E\u305F\u3081\u3001\u304A\u65E9\u3081\u306B\u304A\u7533\u3057\u8FBC\u307F\u304F\u3060\u3055\u3044\u3002</p>
            <p><strong>\u4E88\u7D04\u671F\u9593:</strong> 2025\u5E741\u67083\u65E5\u301C1\u670831\u65E5</p>
            <p><strong>\u304A\u6E21\u3057\u4E88\u5B9A:</strong> 2025\u5E743\u6708\u4E0A\u65EC</p>
          `,
          readTime: "3\u5206",
          tags: ["\u91E3\u5177", "\u5668\u5177", "Shimano", "Daiwa", "\u9650\u5B9A", "\u4E88\u7D04", "\u65B0\u5546\u54C1"]
        }
      ];
    },
    // Add new article
    async addArticle(article) {
      this.loading = true;
      this.error = null;
      try {
        const newArticle = {
          ...article,
          id: Date.now()
          // Simple ID generation
        };
        this.articles.unshift(newArticle);
        this.saveToStorage();
        return newArticle;
      } catch (error) {
        console.error("Failed to add article:", error);
        this.error = "\u8A18\u4E8B\u306E\u8FFD\u52A0\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
        throw error;
      } finally {
        this.loading = false;
      }
    },
    // Update existing article
    async updateArticle(updatedArticle) {
      this.loading = true;
      this.error = null;
      try {
        const index = this.articles.findIndex((article) => article.id === updatedArticle.id);
        if (index !== -1) {
          this.articles[index] = updatedArticle;
          this.saveToStorage();
          if (this.selectedArticle && this.selectedArticle.id === updatedArticle.id) {
            this.selectedArticle = updatedArticle;
          }
        } else {
          throw new Error("Article not found");
        }
      } catch (error) {
        console.error("Failed to update article:", error);
        this.error = "\u8A18\u4E8B\u306E\u66F4\u65B0\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
        throw error;
      } finally {
        this.loading = false;
      }
    },
    // Delete article
    async deleteArticle(id) {
      this.loading = true;
      this.error = null;
      try {
        const index = this.articles.findIndex((article) => article.id === id);
        if (index !== -1) {
          this.articles.splice(index, 1);
          this.saveToStorage();
          if (this.selectedArticle && this.selectedArticle.id === id) {
            this.selectedArticle = null;
          }
        } else {
          throw new Error("Article not found");
        }
      } catch (error) {
        console.error("Failed to delete article:", error);
        this.error = "\u8A18\u4E8B\u306E\u524A\u9664\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
        throw error;
      } finally {
        this.loading = false;
      }
    },
    // Select article
    setSelectedArticle(article) {
      this.selectedArticle = article;
    },
    // Clear all articles
    async clearAllArticles() {
      this.loading = true;
      this.error = null;
      try {
        this.articles = [];
        this.selectedArticle = null;
        this.saveToStorage();
      } catch (error) {
        console.error("Failed to clear articles:", error);
        this.error = "\u8A18\u4E8B\u306E\u30AF\u30EA\u30A2\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
        throw error;
      } finally {
        this.loading = false;
      }
    },
    // Import articles from JSON
    async importArticles(articles) {
      this.loading = true;
      this.error = null;
      try {
        this.articles = articles;
        this.saveToStorage();
      } catch (error) {
        console.error("Failed to import articles:", error);
        this.error = "\u8A18\u4E8B\u306E\u30A4\u30F3\u30DD\u30FC\u30C8\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
        throw error;
      } finally {
        this.loading = false;
      }
    },
    // Export articles to JSON
    exportArticles() {
      return JSON.stringify(this.articles, null, 2);
    },
    // Save to localStorage (client-side only)
    saveToStorage() {
    },
    // Create backup
    createBackup() {
    },
    // List all backups
    listBackups() {
      return [];
    },
    // Restore from backup
    async restoreFromBackup(backupKey) {
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { setSEO } = useSEO();
    setSEO("about");
    const articleStore = useArticleStore();
    const selectedArticle = ref(null);
    const articles = computed(() => articleStore.articles);
    const formatMonth = (dateStr) => {
      const month = dateStr.split(".")[1];
      return month + "\u6708";
    };
    const formatDay = (dateStr) => {
      const day = dateStr.split(".")[2];
      return day;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "anthropic-theme about-page" }, _attrs))} data-v-a2b542a9><section class="about-hero-section" data-v-a2b542a9><div class="custom-container" data-v-a2b542a9><div class="hero-content" data-v-a2b542a9><h1 class="hero-title" data-v-a2b542a9>\u4F01\u696D\u60C5\u5831\u30FB\u30CB\u30E5\u30FC\u30B9</h1><p class="hero-description" data-v-a2b542a9> NO TRACE EXPLORER\u306E\u6700\u65B0\u30CB\u30E5\u30FC\u30B9\u3001\u304A\u77E5\u3089\u305B\u3001\u30B5\u30FC\u30D3\u30B9\u60C5\u5831\u3092\u3054\u89A7\u3044\u305F\u3060\u3051\u307E\u3059 </p></div></div></section><section class="articles-section" data-v-a2b542a9><div class="custom-container" data-v-a2b542a9>`);
      if (!unref(selectedArticle)) {
        _push(`<div data-v-a2b542a9><div class="articles-grid" data-v-a2b542a9><!--[-->`);
        ssrRenderList(unref(articles), (article) => {
          _push(`<div class="article-card" data-v-a2b542a9><div class="article-date-badge" data-v-a2b542a9><div class="month" data-v-a2b542a9>${ssrInterpolate(formatMonth(article.date))}</div><div class="day" data-v-a2b542a9>${ssrInterpolate(formatDay(article.date))}</div></div><div class="article-content" data-v-a2b542a9><div class="article-header" data-v-a2b542a9><h3 class="article-title" data-v-a2b542a9>${ssrInterpolate(article.title)}</h3><div class="article-arrow" data-v-a2b542a9>\u2192</div></div><div class="article-meta" data-v-a2b542a9><span class="article-category" data-v-a2b542a9>${ssrInterpolate(article.category)}</span><span class="article-info" data-v-a2b542a9>${ssrInterpolate(article.date)} | ${ssrInterpolate(article.readTime)}</span></div><p class="article-excerpt" data-v-a2b542a9>${ssrInterpolate(article.excerpt)}</p></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="article-detail" data-v-a2b542a9><button class="back-button" data-v-a2b542a9> \u2190 \u8A18\u4E8B\u4E00\u89A7\u306B\u623B\u308B </button><div class="article-detail-card" data-v-a2b542a9><div class="article-detail-header" data-v-a2b542a9><div class="article-detail-meta" data-v-a2b542a9><span class="detail-category" data-v-a2b542a9>${ssrInterpolate(unref(selectedArticle).category)}</span><span class="detail-info" data-v-a2b542a9>${ssrInterpolate(unref(selectedArticle).date)} | ${ssrInterpolate(unref(selectedArticle).readTime)}</span></div><h1 class="article-detail-title" data-v-a2b542a9>${ssrInterpolate(unref(selectedArticle).title)}</h1></div><div class="article-detail-content" data-v-a2b542a9>${(_a = unref(selectedArticle).content) != null ? _a : ""}</div><div class="article-tags" data-v-a2b542a9><span class="tags-label" data-v-a2b542a9>\u30BF\u30B0:</span><div class="tags-list" data-v-a2b542a9><!--[-->`);
        ssrRenderList(unref(selectedArticle).tags, (tag) => {
          _push(`<span class="tag-item" data-v-a2b542a9>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a2b542a9"]]);

export { about as default };
//# sourceMappingURL=about-CYhrnazL.mjs.map
