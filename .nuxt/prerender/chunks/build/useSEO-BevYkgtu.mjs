import { e as useSeoMeta, u as useHead } from './server.mjs';

const useSEO = () => {
  const baseSEO = {
    titleTemplate: "%s | NO TRACE EXPLORER",
    defaultTitle: "NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E",
    description: "\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3001\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3001\u6280\u8853\u7814\u7A76\u958B\u767A\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u904B\u55B6\u306A\u3069\u591A\u5C90\u306B\u308F\u305F\u308B\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3002",
    keywords: "NO TRACE EXPLORER, \u7121\u8FF9\u63A2\u7D22, \u682A\u5F0F\u4F1A\u793E, \u30B3\u30FC\u30D2\u30FC, \u5C55\u793A, \u30A4\u30D9\u30F3\u30C8, \u6280\u8853\u7814\u7A76, \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3, \u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3",
    author: "NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E",
    siteUrl: "https://no-trace.jp"
  };
  const pageConfigs = {
    home: {
      title: "\u30DB\u30FC\u30E0",
      description: "\u672A\u77E5\u306E\u9818\u57DF\u3092\u63A2\u7D22\u3057\u3001\u8F1D\u304F\u672A\u6765\u3092\u7BC9\u304F\u3002\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D\u3001\u5C55\u793A\u30FB\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u3001\u6280\u8853\u7814\u7A76\u958B\u767A\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u904B\u55B6\u3067\u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3092\u63D0\u4F9B\u3002",
      keywords: "\u30DB\u30FC\u30E0, \u4F01\u696D\u7D39\u4ECB, \u30B5\u30FC\u30D3\u30B9\u4E00\u89A7, \u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3, \u9769\u65B0\u7684\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3",
      ogImage: "/images/og-home.jpg"
    },
    about: {
      title: "\u4F01\u696D\u60C5\u5831\u30FB\u30CB\u30E5\u30FC\u30B9",
      description: "NO TRACE EXPLORER\u306E\u6700\u65B0\u30CB\u30E5\u30FC\u30B9\u3001\u304A\u77E5\u3089\u305B\u3001\u30B5\u30FC\u30D3\u30B9\u60C5\u5831\u3092\u3054\u89A7\u3044\u305F\u3060\u3051\u307E\u3059\u3002\u4F01\u696D\u306E\u6210\u9577\u3068\u9769\u65B0\u7684\u306A\u53D6\u308A\u7D44\u307F\u3092\u968F\u6642\u66F4\u65B0\u3002",
      keywords: "\u4F01\u696D\u60C5\u5831, \u30CB\u30E5\u30FC\u30B9, \u304A\u77E5\u3089\u305B, \u30B5\u30FC\u30D3\u30B9\u60C5\u5831, \u4F01\u696D\u6210\u9577, \u9769\u65B0\u7684\u53D6\u308A\u7D44\u307F",
      ogImage: "/images/og-about.jpg"
    },
    coffee: {
      title: "\u30B3\u30FC\u30D2\u30FC\u4E8B\u696D",
      description: "\u4E16\u754C\u5404\u5730\u304B\u3089\u53B3\u9078\u3057\u305F\u9AD8\u54C1\u8CEA\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u4F7F\u7528\u3057\u305F\u5546\u54C1\u958B\u767A\u30FB\u8F38\u5165\u30FB\u30D6\u30E9\u30F3\u30C9\u5C55\u958B\u3002\u30B5\u30B9\u30C6\u30CA\u30D6\u30EB\u306A\u8ABF\u9054\u3068\u72EC\u81EA\u306E\u7119\u714E\u6280\u8853\u3067\u6700\u9AD8\u306E\u54C1\u8CEA\u3092\u5B9F\u73FE\u3002",
      keywords: "\u30B3\u30FC\u30D2\u30FC, \u9AD8\u54C1\u8CEA, \u53B3\u9078\u8C46, \u30B5\u30B9\u30C6\u30CA\u30D6\u30EB, \u7119\u714E\u6280\u8853, \u30D6\u30E9\u30F3\u30C9\u5C55\u958B",
      ogImage: "/images/og-coffee.jpg"
    },
    exhibition: {
      title: "\u30A8\u30AD\u30B7\u30D3\u30B7\u30E7\u30F3",
      description: "\u6587\u5316\u30FB\u6280\u8853\u30FB\u82B8\u8853\u5206\u91CE\u306E\u5C55\u793A\u4F01\u753B\u304B\u3089\u30A4\u30D9\u30F3\u30C8\u904B\u55B6\u307E\u3067\u3001\u9769\u65B0\u7684\u306A\u30A2\u30D7\u30ED\u30FC\u30C1\u3067\u5370\u8C61\u7684\u306A\u4F53\u9A13\u3092\u5275\u9020\u3057\u307E\u3059\u3002",
      keywords: "\u30A8\u30AD\u30B7\u30D3\u30B7\u30E7\u30F3, \u5C55\u793A\u4F01\u753B, \u30A4\u30D9\u30F3\u30C8\u904B\u55B6, \u6587\u5316, \u6280\u8853, \u82B8\u8853, \u9769\u65B0\u7684\u30A2\u30D7\u30ED\u30FC\u30C1",
      ogImage: "/images/og-exhibition.jpg"
    },
    lab: {
      title: "\u30E9\u30DC - \u6280\u8853\u7814\u7A76\u958B\u767A",
      description: "\u6700\u5148\u7AEF\u6280\u8853\u3068\u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u30FB\u30B9\u30DD\u30FC\u30C4\u95A2\u9023\u7814\u7A76\u3092\u901A\u3058\u3066\u3001\u672A\u6765\u306E\u4FA1\u5024\u5275\u9020\u306B\u6311\u6226\u3057\u3066\u3044\u307E\u3059\u3002",
      keywords: "\u30E9\u30DC, \u6280\u8853\u7814\u7A76, \u30A4\u30CE\u30D9\u30FC\u30B7\u30E7\u30F3, \u30B9\u30DD\u30FC\u30C4\u7814\u7A76, \u6700\u5148\u7AEF\u6280\u8853, \u4FA1\u5024\u5275\u9020",
      ogImage: "/images/og-lab.jpg"
    },
    club: {
      title: "\u30AF\u30E9\u30D6 - \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3",
      description: "\u4F1A\u54E1\u5236\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u30FB\u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u904B\u55B6\u3092\u901A\u3058\u3066\u3001\u7279\u5225\u306A\u4F53\u9A13\u3068\u6DF1\u3044\u3064\u306A\u304C\u308A\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002",
      keywords: "\u30AF\u30E9\u30D6, \u30B3\u30DF\u30E5\u30CB\u30C6\u30A3, \u4F1A\u54E1\u5236, \u5C02\u9580\u5BB6\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF, \u7279\u5225\u4F53\u9A13, \u3064\u306A\u304C\u308A",
      ogImage: "/images/og-club.jpg"
    },
    contact: {
      title: "\u304A\u554F\u3044\u5408\u308F\u305B",
      description: "NO TRACE EXPLORER\u3078\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u3002\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u3054\u8CEA\u554F\u3001\u3054\u76F8\u8AC7\u3001\u3054\u8981\u671B\u3092\u304A\u6C17\u8EFD\u306B\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002",
      keywords: "\u304A\u554F\u3044\u5408\u308F\u305B, \u9023\u7D61\u5148, \u3054\u8CEA\u554F, \u3054\u76F8\u8AC7, \u3054\u8981\u671B, \u30B5\u30DD\u30FC\u30C8",
      ogImage: "/images/og-contact.jpg"
    }
  };
  const setSEO = (pageKey, customConfig) => {
    const pageConfig = pageConfigs[pageKey];
    const config = { ...baseSEO, ...pageConfig, ...customConfig };
    useSeoMeta({
      title: config.title,
      titleTemplate: config.titleTemplate,
      description: config.description,
      keywords: config.keywords,
      author: config.author,
      // Open Graph
      ogTitle: `${config.title} | NO TRACE EXPLORER`,
      ogDescription: config.description,
      ogImage: config.ogImage || "/images/og-default.jpg",
      ogUrl: config.siteUrl,
      ogSiteName: "NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E",
      ogType: "website",
      // Twitter Card
      twitterCard: "summary_large_image",
      twitterSite: "@notrace_explorer",
      twitterTitle: `${config.title} | NO TRACE EXPLORER`,
      twitterDescription: config.description,
      twitterImage: config.ogImage || "/images/og-default.jpg"
    });
    useHead({
      meta: [
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "language", content: "ja" }
      ],
      link: [
        { rel: "canonical", href: config.siteUrl },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }
      ]
    });
  };
  const setArticleSEO = (article) => {
    useSeoMeta({
      title: article.title,
      titleTemplate: "%s | \u4F01\u696D\u30CB\u30E5\u30FC\u30B9 | NO TRACE EXPLORER",
      description: article.excerpt,
      keywords: [article.category, ...article.tags, "NO TRACE EXPLORER", "\u4F01\u696D\u30CB\u30E5\u30FC\u30B9"].join(", "),
      // Open Graph
      ogTitle: `${article.title} | NO TRACE EXPLORER`,
      ogDescription: article.excerpt,
      ogType: "article",
      ogUrl: baseSEO.siteUrl,
      // Twitter Card
      twitterCard: "summary_large_image",
      twitterTitle: `${article.title} | NO TRACE EXPLORER`,
      twitterDescription: article.excerpt
    });
  };
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E",
      "alternateName": "\u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E",
      "url": baseSEO.siteUrl,
      "logo": `${baseSEO.siteUrl}/images/logo.png`,
      "sameAs": [
        "https://twitter.com/notrace_explorer",
        "https://www.facebook.com/notrace.explorer",
        "https://www.linkedin.com/company/notrace-explorer"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@no-trace.jp",
        "availableLanguage": ["Japanese", "English", "Chinese"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "\u6771\u4EAC\u90FD\u6E0B\u8C37\u533A",
        "addressCountry": "JP"
      },
      "foundingDate": "2025",
      "description": baseSEO.description
    };
  };
  return {
    setSEO,
    setArticleSEO,
    generateStructuredData,
    baseSEO,
    pageConfigs
  };
};

export { useSEO as u };
//# sourceMappingURL=useSEO-BevYkgtu.mjs.map
