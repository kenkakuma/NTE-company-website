import { _ as __nuxt_component_0 } from './nuxt-link-B_QfFC2U.mjs';
import { shallowRef, ref, toRef, computed, watchEffect, createElementVNode, normalizeStyle, normalizeClass, createVNode, withDirectives, mergeProps, vShow, defineComponent, useSSRContext, withCtx, toDisplayString, createTextVNode, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList, nextTick, isRef, renderSlot, reactive, readonly } from 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderSlot } from 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue/server-renderer/index.mjs';
import { q as makeTransitionProps$1, K as makeLayoutItemProps, L as useLayoutItem, M as MaybeTransition, N as makeLayoutProps, O as createLayout, p as VSnackbar, k as VDialog, l as VCard, m as VCardTitle, n as VCardText, r as VChip, f as VDivider, V as VAppBar, b as VSpacer, t as VMenu, g as VList, h as VListItem, P as VListItemTitle, c as VAppBarNavIcon, d as VNavigationDrawer, j as VMain } from './VNavigationDrawer-DJMIQFcP.mjs';
import { b as useRender, c as makeComponentProps, m as makeTagProps, u as useBackgroundColor, V as VIcon } from './VIcon-BPJNs7N2.mjs';
import { d as makeLocationProps, o as makeVBtnProps, s as useResizeObserver, V as VBtn, m as makeRoundedProps, z as makeElevationProps, A as makeBorderProps, C as useBorder, v as useElevation, u as useRounded, a as VRow, b as VCol } from './VRow-DO-Unv4W.mjs';
import { p as propsFactory, V as omit, q as genericComponent, C as useProxiedModel, X as useToggleScope, v as makeThemeProps, A as provideTheme, y as useRtl, o as convertToUnit, a as useRouter } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { V as VContainer } from './VContainer-UkpXLacN.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/ufo/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/destr/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/hookable/dist/index.mjs';
import 'file:///Users/eric/WebstormProjects/notrace/node_modules/node-mock-http/dist/index.mjs';
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

function usePWATest() {
  const isOnline = ref(true);
  const isPWAInstalled = ref(false);
  const serviceWorkerStatus = ref("\u68C0\u67E5\u4E2D...");
  const cacheStats = ref({
    totalCaches: 0,
    totalEntries: 0,
    totalSize: 0
  });
  const testResults = ref([]);
  const isTestingInProgress = ref(false);
  const addTestResult = (message, type, category = "general") => {
    testResults.value.unshift({
      id: Date.now().toString(),
      message,
      type,
      category,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      displayTime: (/* @__PURE__ */ new Date()).toLocaleTimeString()
    });
    if (testResults.value.length > 50) {
      testResults.value = testResults.value.slice(0, 50);
    }
  };
  const refreshPWAStatus = async () => {
    try {
      const isStandalone = (void 0).matchMedia("(display-mode: standalone)").matches;
      const isIOSStandalone = (void 0).navigator.standalone === true;
      const hasStandaloneParam = (void 0).location.search.includes("standalone=true");
      isPWAInstalled.value = isStandalone || isIOSStandalone || hasStandaloneParam;
      if ("serviceWorker" in void 0) {
        const registration = await (void 0).serviceWorker.getRegistration();
        if (!registration) {
          serviceWorkerStatus.value = "\u672A\u6CE8\u518C";
        } else if (registration.installing) {
          serviceWorkerStatus.value = "\u5B89\u88C5\u4E2D";
        } else if (registration.waiting) {
          serviceWorkerStatus.value = "\u7B49\u5F85\u6FC0\u6D3B";
        } else if (registration.active) {
          serviceWorkerStatus.value = "\u6D3B\u8DC3";
        } else {
          serviceWorkerStatus.value = "\u672A\u77E5\u72B6\u6001";
        }
      } else {
        serviceWorkerStatus.value = "\u4E0D\u652F\u6301";
      }
      await updateCacheStats();
      addTestResult("PWA\u72B6\u6001\u68C0\u67E5\u5B8C\u6210", "success", "status");
    } catch (error) {
      addTestResult(`PWA\u72B6\u6001\u68C0\u67E5\u5931\u8D25: ${error.message}`, "error", "status");
    }
  };
  const updateCacheStats = async () => {
    if (!("caches" in void 0)) {
      addTestResult("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Cache API", "warning", "cache");
      return;
    }
    try {
      const cacheNames = await caches.keys();
      let totalEntries = 0;
      let totalSize = 0;
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        totalEntries += keys.length;
        for (const request of keys) {
          try {
            const response = await cache.match(request);
            if (response) {
              const clone = response.clone();
              const buffer = await clone.arrayBuffer();
              totalSize += buffer.byteLength;
            }
          } catch (e) {
          }
        }
      }
      cacheStats.value = {
        totalCaches: cacheNames.length,
        totalEntries,
        totalSize
      };
      addTestResult(
        `\u7F13\u5B58\u7EDF\u8BA1: ${cacheNames.length}\u4E2A\u7F13\u5B58, ${totalEntries}\u4E2A\u6761\u76EE, ${formatBytes(totalSize)}`,
        "info",
        "cache"
      );
    } catch (error) {
      addTestResult(`\u7F13\u5B58\u7EDF\u8BA1\u5931\u8D25: ${error.message}`, "error", "cache");
    }
  };
  const testCacheStrategy = async (strategy) => {
    try {
      const cacheNames = await caches.keys();
      let targetCache;
      switch (strategy) {
        case "fonts":
          targetCache = cacheNames.find((name) => name.includes("google-fonts") || name.includes("gstatic"));
          break;
        case "images":
          targetCache = cacheNames.find((name) => name.includes("images"));
          break;
        case "static":
          targetCache = cacheNames.find((name) => name.includes("static-resources"));
          break;
        case "pages":
          targetCache = cacheNames.find((name) => name.includes("pages"));
          break;
        default:
          throw new Error(`\u672A\u77E5\u7684\u7F13\u5B58\u7B56\u7565: ${strategy}`);
      }
      if (!targetCache) {
        return {
          success: false,
          message: `\u672A\u627E\u5230${strategy}\u7F13\u5B58`,
          details: { cacheNames }
        };
      }
      const cache = await caches.open(targetCache);
      const keys = await cache.keys();
      return {
        success: true,
        message: `${strategy}\u7F13\u5B58\u6B63\u5E38 (${keys.length}\u4E2A\u6761\u76EE)`,
        details: {
          cacheName: targetCache,
          entryCount: keys.length,
          sampleUrls: keys.slice(0, 3).map((req) => req.url)
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `${strategy}\u7F13\u5B58\u6D4B\u8BD5\u5931\u8D25: ${error.message}`,
        details: { error: error.message }
      };
    }
  };
  const testOfflineNavigation = async (path) => {
    try {
      const startTime = performance.now();
      const response = await fetch(path, { cache: "no-cache" });
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      return {
        success: response.ok,
        message: `\u9875\u9762 ${path}: ${response.ok ? "\u6210\u529F" : "\u5931\u8D25"} (${Math.round(responseTime)}ms)`,
        details: {
          status: response.status,
          statusText: response.statusText,
          responseTime,
          fromCache: response.headers.get("cache-control") !== null
        }
      };
    } catch (error) {
      return {
        success: false,
        message: `\u9875\u9762 ${path}: \u7F51\u7EDC\u9519\u8BEF - ${error.message}`,
        details: { error: error.message }
      };
    }
  };
  const runComprehensiveTest = async () => {
    if (isTestingInProgress.value) return;
    isTestingInProgress.value = true;
    addTestResult("\u5F00\u59CB\u7EFC\u5408PWA\u6D4B\u8BD5...", "info", "test");
    try {
      await refreshPWAStatus();
      const cacheStrategies = ["fonts", "images", "static", "pages"];
      for (const strategy of cacheStrategies) {
        const result = await testCacheStrategy(strategy);
        addTestResult(result.message, result.success ? "success" : "error", "cache");
      }
      const testPages = ["/", "/coffee", "/about", "/lab", "/contact"];
      for (const page of testPages) {
        const result = await testOfflineNavigation(page);
        addTestResult(result.message, result.success ? "success" : "error", "navigation");
      }
      if ("serviceWorker" in void 0) {
        try {
          const registration = await (void 0).serviceWorker.getRegistration();
          if (registration == null ? void 0 : registration.active) {
            const messageChannel = new MessageChannel();
            const responsePromise = new Promise((resolve, reject) => {
              messageChannel.port1.onmessage = (event) => {
                if (event.data.error) {
                  reject(new Error(event.data.error));
                } else {
                  resolve(event.data);
                }
              };
              setTimeout(() => reject(new Error("Service Worker\u901A\u4FE1\u8D85\u65F6")), 5e3);
            });
            registration.active.postMessage(
              { type: "GET_VERSION" },
              [messageChannel.port2]
            );
            await responsePromise;
            addTestResult("Service Worker\u901A\u4FE1\u6D4B\u8BD5\u6210\u529F", "success", "sw");
          } else {
            addTestResult("Service Worker\u672A\u6FC0\u6D3B\uFF0C\u8DF3\u8FC7\u901A\u4FE1\u6D4B\u8BD5", "warning", "sw");
          }
        } catch (error) {
          addTestResult(`Service Worker\u901A\u4FE1\u6D4B\u8BD5\u5931\u8D25: ${error.message}`, "error", "sw");
        }
      }
      addTestResult("\u7EFC\u5408PWA\u6D4B\u8BD5\u5B8C\u6210", "success", "test");
    } catch (error) {
      addTestResult(`\u7EFC\u5408\u6D4B\u8BD5\u5931\u8D25: ${error.message}`, "error", "test");
    } finally {
      isTestingInProgress.value = false;
    }
  };
  const clearTestResults = () => {
    testResults.value = [];
    addTestResult("\u6D4B\u8BD5\u7ED3\u679C\u5DF2\u6E05\u9664", "info", "system");
  };
  const exportTestReport = () => {
    const report = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      pwaDiagnosis: {
        isOnline: isOnline.value,
        isPWAInstalled: isPWAInstalled.value,
        serviceWorkerStatus: serviceWorkerStatus.value,
        cacheStats: cacheStats.value
      },
      testResults: testResults.value,
      browserInfo: {
        userAgent: (void 0).userAgent,
        platform: (void 0).platform,
        language: (void 0).language,
        cookieEnabled: (void 0).cookieEnabled,
        onLine: (void 0).onLine
      }
    };
    const blob = new Blob([JSON.stringify(report, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = (void 0).createElement("a");
    a.href = url;
    a.download = `pwa-test-report-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/:/g, "-")}.json`;
    (void 0).body.appendChild(a);
    a.click();
    (void 0).body.removeChild(a);
    URL.revokeObjectURL(url);
    addTestResult("\u6D4B\u8BD5\u62A5\u544A\u5DF2\u5BFC\u51FA", "success", "system");
  };
  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  return {
    // 状态
    isOnline,
    isPWAInstalled,
    serviceWorkerStatus,
    cacheStats,
    testResults,
    isTestingInProgress,
    // 方法
    refreshPWAStatus,
    testCacheStrategy,
    testOfflineNavigation,
    runComprehensiveTest,
    clearTestResults,
    exportTestReport,
    addTestResult,
    // 工具
    formatBytes
  };
}
const makeVFabProps = propsFactory({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: true
  },
  ...omit(makeVBtnProps({
    active: true
  }), ["location"]),
  ...makeLayoutItemProps(),
  ...makeLocationProps(),
  ...makeTransitionProps$1({
    transition: "fab-transition"
  })
}, "VFab");
const VFab = genericComponent()({
  name: "VFab",
  props: makeVFabProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const height = shallowRef(56);
    const layoutItemStyles = ref();
    const {
      resizeRef
    } = useResizeObserver();
    const hasPosition = toRef(() => props.app || props.absolute);
    const position = computed(() => {
      var _a2;
      var _a;
      if (!hasPosition.value) return false;
      return (_a2 = (_a = props.location) == null ? void 0 : _a.split(" ").shift()) != null ? _a2 : "bottom";
    });
    const orientation = computed(() => {
      var _a2;
      var _a;
      if (!hasPosition.value) return false;
      return (_a2 = (_a = props.location) == null ? void 0 : _a.split(" ")[1]) != null ? _a2 : "end";
    });
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position,
        layoutSize: computed(() => props.layout ? height.value + 24 : 0),
        elementSize: computed(() => height.value + 24),
        active: computed(() => props.app && model.value),
        absolute: toRef(() => props.absolute)
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    const vFabRef = ref();
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createElementVNode("div", {
        "ref": vFabRef,
        "class": normalizeClass(["v-fab", {
          "v-fab--absolute": props.absolute,
          "v-fab--app": !!props.app,
          "v-fab--extended": props.extended,
          "v-fab--offset": props.offset,
          [`v-fab--${position.value}`]: hasPosition.value,
          [`v-fab--${orientation.value}`]: hasPosition.value
        }, props.class]),
        "style": normalizeStyle([props.app ? {
          ...layoutItemStyles.value
        } : {
          height: props.absolute ? "100%" : "inherit"
        }, props.style])
      }, [createElementVNode("div", {
        "class": "v-fab__container"
      }, [createVNode(MaybeTransition, {
        "appear": props.appear,
        "transition": props.transition
      }, {
        default: () => [withDirectives(createVNode(VBtn, mergeProps({
          "ref": resizeRef
        }, btnProps, {
          "active": void 0,
          "location": void 0
        }), slots), [[vShow, props.active]])]
      })])]);
    });
    return {};
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PWAMonitor",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOnline,
      isPWAInstalled,
      serviceWorkerStatus,
      cacheStats,
      testResults,
      refreshPWAStatus,
      testCacheStrategy,
      addTestResult,
      formatBytes
    } = usePWATest();
    const showMonitor = ref(true);
    const showNetworkStatus = ref(false);
    const showUpdateNotification = ref(false);
    const showInstallPrompt = ref(false);
    const showDevInfo = ref(false);
    const refreshing = ref(false);
    const testing = ref(false);
    const installing = ref(false);
    const applyingUpdate = ref(false);
    const networkStatusTimeout = ref(4e3);
    const networkStatusMessage = ref("");
    const networkStatusColor = ref("success");
    const networkStatusIcon = ref("mdi-wifi");
    const showDevButton = computed(() => {
      return false;
    });
    const lastTestResults = computed(() => testResults.value.slice(0, 10));
    const installPWA = async () => {
      {
        addTestResult("\u65E0\u53EF\u7528\u7684\u5B89\u88C5\u63D0\u793A", "error", "install");
        return;
      }
    };
    const dismissInstallPrompt = () => {
      showInstallPrompt.value = false;
      recordInstallDismissal();
      addTestResult("\u7528\u6237\u5DF2\u5173\u95ED\u5B89\u88C5\u63D0\u793A", "info", "install");
    };
    const applyUpdate = async () => {
      applyingUpdate.value = true;
      try {
        if ("serviceWorker" in void 0) {
          const registration = await (void 0).serviceWorker.getRegistration();
          if (registration == null ? void 0 : registration.waiting) {
            registration.waiting.postMessage({ type: "SKIP_WAITING" });
            (void 0).serviceWorker.addEventListener("controllerchange", () => {
              if (false) ;
            });
            addTestResult("\u5E94\u7528\u66F4\u65B0\u5DF2\u5E94\u7528", "success", "update");
          }
        }
      } catch (error) {
        addTestResult(`\u5E94\u7528\u66F4\u65B0\u5931\u8D25: ${error.message}`, "error", "update");
      } finally {
        applyingUpdate.value = false;
        showUpdateNotification.value = false;
      }
    };
    const dismissUpdate = () => {
      showUpdateNotification.value = false;
      addTestResult("\u7528\u6237\u63A8\u8FDF\u4E86\u5E94\u7528\u66F4\u65B0", "info", "update");
    };
    const toggleDevInfo = () => {
      showDevInfo.value = !showDevInfo.value;
    };
    const refreshStatus = async () => {
      refreshing.value = true;
      await refreshPWAStatus();
      refreshing.value = false;
    };
    const runQuickTest = async () => {
      testing.value = true;
      try {
        const strategies = ["fonts", "images", "static"];
        for (const strategy of strategies) {
          const result = await testCacheStrategy(strategy);
          addTestResult(result.message, result.success ? "success" : "error", "cache");
        }
        addTestResult("\u5FEB\u901F\u6D4B\u8BD5\u5B8C\u6210", "success", "test");
      } catch (error) {
        addTestResult(`\u5FEB\u901F\u6D4B\u8BD5\u5931\u8D25: ${error.message}`, "error", "test");
      } finally {
        testing.value = false;
      }
    };
    const getServiceWorkerColor = (status) => {
      switch (status) {
        case "\u6D3B\u8DC3":
          return "success";
        case "\u5B89\u88C5\u4E2D":
          return "warning";
        case "\u7B49\u5F85\u6FC0\u6D3B":
          return "info";
        default:
          return "error";
      }
    };
    const getResultColor = (type) => {
      switch (type) {
        case "success":
          return "success";
        case "error":
          return "error";
        case "warning":
          return "warning";
        case "info":
          return "info";
        default:
          return "grey";
      }
    };
    const getResultIcon = (type) => {
      switch (type) {
        case "success":
          return "mdi-check-circle";
        case "error":
          return "mdi-alert-circle";
        case "warning":
          return "mdi-alert";
        case "info":
          return "mdi-information";
        default:
          return "mdi-circle-outline";
      }
    };
    const recordInstallDismissal = () => {
      localStorage.setItem("pwa-install-dismissed", (/* @__PURE__ */ new Date()).toISOString());
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (showMonitor.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pwa-monitor" }, _attrs))} data-v-3ac90970>`);
        _push(ssrRenderComponent(VSnackbar, {
          modelValue: showNetworkStatus.value,
          "onUpdate:modelValue": ($event) => showNetworkStatus.value = $event,
          timeout: networkStatusTimeout.value,
          color: networkStatusColor.value,
          location: "top",
          class: "network-status-snackbar"
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VBtn, {
                variant: "text",
                size: "small",
                onClick: ($event) => showNetworkStatus.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5173\u95ED `);
                  } else {
                    return [
                      createTextVNode(" \u5173\u95ED ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VBtn, {
                  variant: "text",
                  size: "small",
                  onClick: ($event) => showNetworkStatus.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u5173\u95ED ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="d-flex align-center" data-v-3ac90970${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: networkStatusIcon.value,
                class: "mr-2"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-3ac90970${_scopeId}>${ssrInterpolate(networkStatusMessage.value)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex align-center" }, [
                  createVNode(VIcon, {
                    icon: networkStatusIcon.value,
                    class: "mr-2"
                  }, null, 8, ["icon"]),
                  createVNode("span", null, toDisplayString(networkStatusMessage.value), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VSnackbar, {
          modelValue: showUpdateNotification.value,
          "onUpdate:modelValue": ($event) => showUpdateNotification.value = $event,
          timeout: -1,
          color: "info",
          location: "bottom",
          class: "update-notification-snackbar"
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VBtn, {
                variant: "text",
                size: "small",
                onClick: applyUpdate,
                loading: applyingUpdate.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u66F4\u65B0 `);
                  } else {
                    return [
                      createTextVNode(" \u66F4\u65B0 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                variant: "text",
                size: "small",
                onClick: dismissUpdate
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u7A0D\u540E `);
                  } else {
                    return [
                      createTextVNode(" \u7A0D\u540E ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VBtn, {
                  variant: "text",
                  size: "small",
                  onClick: applyUpdate,
                  loading: applyingUpdate.value
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u66F4\u65B0 ")
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(VBtn, {
                  variant: "text",
                  size: "small",
                  onClick: dismissUpdate
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u7A0D\u540E ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="d-flex align-center" data-v-3ac90970${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "mdi-download",
                class: "mr-2"
              }, null, _parent2, _scopeId));
              _push2(`<div data-v-3ac90970${_scopeId}><div class="font-weight-medium" data-v-3ac90970${_scopeId}>\u5E94\u7528\u66F4\u65B0\u53EF\u7528</div><div class="text-caption" data-v-3ac90970${_scopeId}>\u65B0\u7248\u672C\u5DF2\u51C6\u5907\u5C31\u7EEA</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex align-center" }, [
                  createVNode(VIcon, {
                    icon: "mdi-download",
                    class: "mr-2"
                  }),
                  createVNode("div", null, [
                    createVNode("div", { class: "font-weight-medium" }, "\u5E94\u7528\u66F4\u65B0\u53EF\u7528"),
                    createVNode("div", { class: "text-caption" }, "\u65B0\u7248\u672C\u5DF2\u51C6\u5907\u5C31\u7EEA")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(VSnackbar, {
          modelValue: showInstallPrompt.value,
          "onUpdate:modelValue": ($event) => showInstallPrompt.value = $event,
          timeout: -1,
          color: "primary",
          location: "bottom",
          class: "install-prompt-snackbar"
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VBtn, {
                variant: "text",
                size: "small",
                onClick: installPWA,
                loading: installing.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5B89\u88C5 `);
                  } else {
                    return [
                      createTextVNode(" \u5B89\u88C5 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(VBtn, {
                variant: "text",
                size: "small",
                onClick: dismissInstallPrompt
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u53D6\u6D88 `);
                  } else {
                    return [
                      createTextVNode(" \u53D6\u6D88 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VBtn, {
                  variant: "text",
                  size: "small",
                  onClick: installPWA,
                  loading: installing.value
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u5B89\u88C5 ")
                  ]),
                  _: 1
                }, 8, ["loading"]),
                createVNode(VBtn, {
                  variant: "text",
                  size: "small",
                  onClick: dismissInstallPrompt
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="d-flex align-center" data-v-3ac90970${_scopeId}>`);
              _push2(ssrRenderComponent(VIcon, {
                icon: "mdi-cellphone-arrow-down",
                class: "mr-2"
              }, null, _parent2, _scopeId));
              _push2(`<div data-v-3ac90970${_scopeId}><div class="font-weight-medium" data-v-3ac90970${_scopeId}>\u5B89\u88C5\u5E94\u7528</div><div class="text-caption" data-v-3ac90970${_scopeId}>\u6DFB\u52A0\u5230\u4E3B\u5C4F\u5E55\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u4F53\u9A8C</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex align-center" }, [
                  createVNode(VIcon, {
                    icon: "mdi-cellphone-arrow-down",
                    class: "mr-2"
                  }),
                  createVNode("div", null, [
                    createVNode("div", { class: "font-weight-medium" }, "\u5B89\u88C5\u5E94\u7528"),
                    createVNode("div", { class: "text-caption" }, "\u6DFB\u52A0\u5230\u4E3B\u5C4F\u5E55\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u4F53\u9A8C")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (showDevButton.value) {
          _push(ssrRenderComponent(VFab, {
            icon: "mdi-wifi-check",
            location: "bottom end",
            app: "",
            color: "secondary",
            size: "small",
            class: "pwa-dev-fab",
            onClick: toggleDevInfo
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VDialog, {
          modelValue: showDevInfo.value,
          "onUpdate:modelValue": ($event) => showDevInfo.value = $event,
          "max-width": "600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCard, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VCardTitle, { class: "bg-secondary text-white" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VIcon, { left: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`mdi-information`);
                              } else {
                                return [
                                  createTextVNode("mdi-information")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(` PWA \u5F00\u53D1\u4FE1\u606F `);
                        } else {
                          return [
                            createVNode(VIcon, { left: "" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-information")
                              ]),
                              _: 1
                            }),
                            createTextVNode(" PWA \u5F00\u53D1\u4FE1\u606F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(VCardText, { class: "pa-4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="mb-2" data-v-3ac90970${_scopeId5}><strong data-v-3ac90970${_scopeId5}>\u7F51\u7EDC\u72B6\u6001:</strong>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        color: unref(isOnline) ? "success" : "error",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(isOnline) ? "\u5728\u7EBF" : "\u79BB\u7EBF")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(isOnline) ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div><div class="mb-2" data-v-3ac90970${_scopeId5}><strong data-v-3ac90970${_scopeId5}>PWA\u5B89\u88C5:</strong>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        color: unref(isPWAInstalled) ? "success" : "warning",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(isPWAInstalled) ? "\u5DF2\u5B89\u88C5" : "\u672A\u5B89\u88C5")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(isPWAInstalled) ? "\u5DF2\u5B89\u88C5" : "\u672A\u5B89\u88C5"), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div><div class="mb-2" data-v-3ac90970${_scopeId5}><strong data-v-3ac90970${_scopeId5}>Service Worker:</strong>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        color: getServiceWorkerColor(unref(serviceWorkerStatus)),
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(serviceWorkerStatus))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(serviceWorkerStatus)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("strong", null, "\u7F51\u7EDC\u72B6\u6001:"),
                                          createVNode(VChip, {
                                            color: unref(isOnline) ? "success" : "error",
                                            size: "small",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(isOnline) ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
                                        ]),
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("strong", null, "PWA\u5B89\u88C5:"),
                                          createVNode(VChip, {
                                            color: unref(isPWAInstalled) ? "success" : "warning",
                                            size: "small",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(isPWAInstalled) ? "\u5DF2\u5B89\u88C5" : "\u672A\u5B89\u88C5"), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
                                        ]),
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("strong", null, "Service Worker:"),
                                          createVNode(VChip, {
                                            color: getServiceWorkerColor(unref(serviceWorkerStatus)),
                                            size: "small",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(serviceWorkerStatus)), 1)
                                            ]),
                                            _: 1
                                          }, 8, ["color"])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(VCol, { cols: "6" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="mb-2" data-v-3ac90970${_scopeId5}><strong data-v-3ac90970${_scopeId5}>\u7F13\u5B58\u6570\u91CF:</strong>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        color: "info",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(cacheStats).totalCaches)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(cacheStats).totalCaches), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div><div class="mb-2" data-v-3ac90970${_scopeId5}><strong data-v-3ac90970${_scopeId5}>\u7F13\u5B58\u6761\u76EE:</strong>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        color: "info",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(cacheStats).totalEntries)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(cacheStats).totalEntries), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div><div class="mb-2" data-v-3ac90970${_scopeId5}><strong data-v-3ac90970${_scopeId5}>\u7F13\u5B58\u5927\u5C0F:</strong>`);
                                      _push6(ssrRenderComponent(VChip, {
                                        color: "info",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(formatBytes)(unref(cacheStats).totalSize))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(formatBytes)(unref(cacheStats).totalSize)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("strong", null, "\u7F13\u5B58\u6570\u91CF:"),
                                          createVNode(VChip, {
                                            color: "info",
                                            size: "small",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(cacheStats).totalCaches), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("strong", null, "\u7F13\u5B58\u6761\u76EE:"),
                                          createVNode(VChip, {
                                            color: "info",
                                            size: "small",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(cacheStats).totalEntries), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("strong", null, "\u7F13\u5B58\u5927\u5C0F:"),
                                          createVNode(VChip, {
                                            color: "info",
                                            size: "small",
                                            class: "ml-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(formatBytes)(unref(cacheStats).totalSize)), 1)
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-2" }, [
                                        createVNode("strong", null, "\u7F51\u7EDC\u72B6\u6001:"),
                                        createVNode(VChip, {
                                          color: unref(isOnline) ? "success" : "error",
                                          size: "small",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(isOnline) ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["color"])
                                      ]),
                                      createVNode("div", { class: "mb-2" }, [
                                        createVNode("strong", null, "PWA\u5B89\u88C5:"),
                                        createVNode(VChip, {
                                          color: unref(isPWAInstalled) ? "success" : "warning",
                                          size: "small",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(isPWAInstalled) ? "\u5DF2\u5B89\u88C5" : "\u672A\u5B89\u88C5"), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["color"])
                                      ]),
                                      createVNode("div", { class: "mb-2" }, [
                                        createVNode("strong", null, "Service Worker:"),
                                        createVNode(VChip, {
                                          color: getServiceWorkerColor(unref(serviceWorkerStatus)),
                                          size: "small",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(serviceWorkerStatus)), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["color"])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-2" }, [
                                        createVNode("strong", null, "\u7F13\u5B58\u6570\u91CF:"),
                                        createVNode(VChip, {
                                          color: "info",
                                          size: "small",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(cacheStats).totalCaches), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "mb-2" }, [
                                        createVNode("strong", null, "\u7F13\u5B58\u6761\u76EE:"),
                                        createVNode(VChip, {
                                          color: "info",
                                          size: "small",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(cacheStats).totalEntries), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode("div", { class: "mb-2" }, [
                                        createVNode("strong", null, "\u7F13\u5B58\u5927\u5C0F:"),
                                        createVNode(VChip, {
                                          color: "info",
                                          size: "small",
                                          class: "ml-2"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(formatBytes)(unref(cacheStats).totalSize)), 1)
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VDivider, { class: "my-3" }, null, _parent4, _scopeId3));
                          _push4(`<div class="d-flex gap-2" data-v-3ac90970${_scopeId3}>`);
                          _push4(ssrRenderComponent(VBtn, {
                            size: "small",
                            variant: "outlined",
                            onClick: refreshStatus,
                            loading: refreshing.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u5237\u65B0\u72B6\u6001 `);
                              } else {
                                return [
                                  createTextVNode(" \u5237\u65B0\u72B6\u6001 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            size: "small",
                            variant: "outlined",
                            onClick: runQuickTest,
                            loading: testing.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u5FEB\u901F\u6D4B\u8BD5 `);
                              } else {
                                return [
                                  createTextVNode(" \u5FEB\u901F\u6D4B\u8BD5 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            size: "small",
                            variant: "outlined",
                            to: "/pwa-test"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u8BE6\u7EC6\u6D4B\u8BD5 `);
                              } else {
                                return [
                                  createTextVNode(" \u8BE6\u7EC6\u6D4B\u8BD5 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                          if (lastTestResults.value.length > 0) {
                            _push4(`<div class="mt-3" data-v-3ac90970${_scopeId3}><h4 class="mb-2" data-v-3ac90970${_scopeId3}>\u6700\u8FD1\u6D4B\u8BD5\u7ED3\u679C:</h4><div class="test-results-container" style="${ssrRenderStyle({ "max-height": "200px", "overflow-y": "auto" })}" data-v-3ac90970${_scopeId3}><!--[-->`);
                            ssrRenderList(lastTestResults.value.slice(0, 5), (result) => {
                              _push4(`<div class="d-flex align-center mb-1" data-v-3ac90970${_scopeId3}>`);
                              _push4(ssrRenderComponent(VIcon, {
                                color: getResultColor(result.type),
                                size: "small",
                                class: "mr-2"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(getResultIcon(result.type))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(getResultIcon(result.type)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`<span class="text-caption" data-v-3ac90970${_scopeId3}>${ssrInterpolate(result.message)}</span></div>`);
                            });
                            _push4(`<!--]--></div></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-2" }, [
                                      createVNode("strong", null, "\u7F51\u7EDC\u72B6\u6001:"),
                                      createVNode(VChip, {
                                        color: unref(isOnline) ? "success" : "error",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(isOnline) ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["color"])
                                    ]),
                                    createVNode("div", { class: "mb-2" }, [
                                      createVNode("strong", null, "PWA\u5B89\u88C5:"),
                                      createVNode(VChip, {
                                        color: unref(isPWAInstalled) ? "success" : "warning",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(isPWAInstalled) ? "\u5DF2\u5B89\u88C5" : "\u672A\u5B89\u88C5"), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["color"])
                                    ]),
                                    createVNode("div", { class: "mb-2" }, [
                                      createVNode("strong", null, "Service Worker:"),
                                      createVNode(VChip, {
                                        color: getServiceWorkerColor(unref(serviceWorkerStatus)),
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(serviceWorkerStatus)), 1)
                                        ]),
                                        _: 1
                                      }, 8, ["color"])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-2" }, [
                                      createVNode("strong", null, "\u7F13\u5B58\u6570\u91CF:"),
                                      createVNode(VChip, {
                                        color: "info",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(cacheStats).totalCaches), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "mb-2" }, [
                                      createVNode("strong", null, "\u7F13\u5B58\u6761\u76EE:"),
                                      createVNode(VChip, {
                                        color: "info",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(cacheStats).totalEntries), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", { class: "mb-2" }, [
                                      createVNode("strong", null, "\u7F13\u5B58\u5927\u5C0F:"),
                                      createVNode(VChip, {
                                        color: "info",
                                        size: "small",
                                        class: "ml-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(formatBytes)(unref(cacheStats).totalSize)), 1)
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VDivider, { class: "my-3" }),
                            createVNode("div", { class: "d-flex gap-2" }, [
                              createVNode(VBtn, {
                                size: "small",
                                variant: "outlined",
                                onClick: refreshStatus,
                                loading: refreshing.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5237\u65B0\u72B6\u6001 ")
                                ]),
                                _: 1
                              }, 8, ["loading"]),
                              createVNode(VBtn, {
                                size: "small",
                                variant: "outlined",
                                onClick: runQuickTest,
                                loading: testing.value
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5FEB\u901F\u6D4B\u8BD5 ")
                                ]),
                                _: 1
                              }, 8, ["loading"]),
                              createVNode(VBtn, {
                                size: "small",
                                variant: "outlined",
                                to: "/pwa-test"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u8BE6\u7EC6\u6D4B\u8BD5 ")
                                ]),
                                _: 1
                              })
                            ]),
                            lastTestResults.value.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-3"
                            }, [
                              createVNode("h4", { class: "mb-2" }, "\u6700\u8FD1\u6D4B\u8BD5\u7ED3\u679C:"),
                              createVNode("div", {
                                class: "test-results-container",
                                style: { "max-height": "200px", "overflow-y": "auto" }
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(lastTestResults.value.slice(0, 5), (result) => {
                                  return openBlock(), createBlock("div", {
                                    key: result.id,
                                    class: "d-flex align-center mb-1"
                                  }, [
                                    createVNode(VIcon, {
                                      color: getResultColor(result.type),
                                      size: "small",
                                      class: "mr-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(getResultIcon(result.type)), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["color"]),
                                    createVNode("span", { class: "text-caption" }, toDisplayString(result.message), 1)
                                  ]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VCardTitle, { class: "bg-secondary text-white" }, {
                        default: withCtx(() => [
                          createVNode(VIcon, { left: "" }, {
                            default: withCtx(() => [
                              createTextVNode("mdi-information")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" PWA \u5F00\u53D1\u4FE1\u606F ")
                        ]),
                        _: 1
                      }),
                      createVNode(VCardText, { class: "pa-4" }, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-2" }, [
                                    createVNode("strong", null, "\u7F51\u7EDC\u72B6\u6001:"),
                                    createVNode(VChip, {
                                      color: unref(isOnline) ? "success" : "error",
                                      size: "small",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(isOnline) ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ]),
                                  createVNode("div", { class: "mb-2" }, [
                                    createVNode("strong", null, "PWA\u5B89\u88C5:"),
                                    createVNode(VChip, {
                                      color: unref(isPWAInstalled) ? "success" : "warning",
                                      size: "small",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(isPWAInstalled) ? "\u5DF2\u5B89\u88C5" : "\u672A\u5B89\u88C5"), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ]),
                                  createVNode("div", { class: "mb-2" }, [
                                    createVNode("strong", null, "Service Worker:"),
                                    createVNode(VChip, {
                                      color: getServiceWorkerColor(unref(serviceWorkerStatus)),
                                      size: "small",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(serviceWorkerStatus)), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["color"])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "mb-2" }, [
                                    createVNode("strong", null, "\u7F13\u5B58\u6570\u91CF:"),
                                    createVNode(VChip, {
                                      color: "info",
                                      size: "small",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(cacheStats).totalCaches), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "mb-2" }, [
                                    createVNode("strong", null, "\u7F13\u5B58\u6761\u76EE:"),
                                    createVNode(VChip, {
                                      color: "info",
                                      size: "small",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(cacheStats).totalEntries), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "mb-2" }, [
                                    createVNode("strong", null, "\u7F13\u5B58\u5927\u5C0F:"),
                                    createVNode(VChip, {
                                      color: "info",
                                      size: "small",
                                      class: "ml-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(formatBytes)(unref(cacheStats).totalSize)), 1)
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, { class: "my-3" }),
                          createVNode("div", { class: "d-flex gap-2" }, [
                            createVNode(VBtn, {
                              size: "small",
                              variant: "outlined",
                              onClick: refreshStatus,
                              loading: refreshing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5237\u65B0\u72B6\u6001 ")
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode(VBtn, {
                              size: "small",
                              variant: "outlined",
                              onClick: runQuickTest,
                              loading: testing.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5FEB\u901F\u6D4B\u8BD5 ")
                              ]),
                              _: 1
                            }, 8, ["loading"]),
                            createVNode(VBtn, {
                              size: "small",
                              variant: "outlined",
                              to: "/pwa-test"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8BE6\u7EC6\u6D4B\u8BD5 ")
                              ]),
                              _: 1
                            })
                          ]),
                          lastTestResults.value.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-3"
                          }, [
                            createVNode("h4", { class: "mb-2" }, "\u6700\u8FD1\u6D4B\u8BD5\u7ED3\u679C:"),
                            createVNode("div", {
                              class: "test-results-container",
                              style: { "max-height": "200px", "overflow-y": "auto" }
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(lastTestResults.value.slice(0, 5), (result) => {
                                return openBlock(), createBlock("div", {
                                  key: result.id,
                                  class: "d-flex align-center mb-1"
                                }, [
                                  createVNode(VIcon, {
                                    color: getResultColor(result.type),
                                    size: "small",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(getResultIcon(result.type)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  createVNode("span", { class: "text-caption" }, toDisplayString(result.message), 1)
                                ]);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
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
                createVNode(VCard, null, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, { class: "bg-secondary text-white" }, {
                      default: withCtx(() => [
                        createVNode(VIcon, { left: "" }, {
                          default: withCtx(() => [
                            createTextVNode("mdi-information")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" PWA \u5F00\u53D1\u4FE1\u606F ")
                      ]),
                      _: 1
                    }),
                    createVNode(VCardText, { class: "pa-4" }, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-2" }, [
                                  createVNode("strong", null, "\u7F51\u7EDC\u72B6\u6001:"),
                                  createVNode(VChip, {
                                    color: unref(isOnline) ? "success" : "error",
                                    size: "small",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(isOnline) ? "\u5728\u7EBF" : "\u79BB\u7EBF"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ]),
                                createVNode("div", { class: "mb-2" }, [
                                  createVNode("strong", null, "PWA\u5B89\u88C5:"),
                                  createVNode(VChip, {
                                    color: unref(isPWAInstalled) ? "success" : "warning",
                                    size: "small",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(isPWAInstalled) ? "\u5DF2\u5B89\u88C5" : "\u672A\u5B89\u88C5"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ]),
                                createVNode("div", { class: "mb-2" }, [
                                  createVNode("strong", null, "Service Worker:"),
                                  createVNode(VChip, {
                                    color: getServiceWorkerColor(unref(serviceWorkerStatus)),
                                    size: "small",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(serviceWorkerStatus)), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "mb-2" }, [
                                  createVNode("strong", null, "\u7F13\u5B58\u6570\u91CF:"),
                                  createVNode(VChip, {
                                    color: "info",
                                    size: "small",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(cacheStats).totalCaches), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "mb-2" }, [
                                  createVNode("strong", null, "\u7F13\u5B58\u6761\u76EE:"),
                                  createVNode(VChip, {
                                    color: "info",
                                    size: "small",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(cacheStats).totalEntries), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "mb-2" }, [
                                  createVNode("strong", null, "\u7F13\u5B58\u5927\u5C0F:"),
                                  createVNode(VChip, {
                                    color: "info",
                                    size: "small",
                                    class: "ml-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(formatBytes)(unref(cacheStats).totalSize)), 1)
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, { class: "my-3" }),
                        createVNode("div", { class: "d-flex gap-2" }, [
                          createVNode(VBtn, {
                            size: "small",
                            variant: "outlined",
                            onClick: refreshStatus,
                            loading: refreshing.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5237\u65B0\u72B6\u6001 ")
                            ]),
                            _: 1
                          }, 8, ["loading"]),
                          createVNode(VBtn, {
                            size: "small",
                            variant: "outlined",
                            onClick: runQuickTest,
                            loading: testing.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5FEB\u901F\u6D4B\u8BD5 ")
                            ]),
                            _: 1
                          }, 8, ["loading"]),
                          createVNode(VBtn, {
                            size: "small",
                            variant: "outlined",
                            to: "/pwa-test"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8BE6\u7EC6\u6D4B\u8BD5 ")
                            ]),
                            _: 1
                          })
                        ]),
                        lastTestResults.value.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mt-3"
                        }, [
                          createVNode("h4", { class: "mb-2" }, "\u6700\u8FD1\u6D4B\u8BD5\u7ED3\u679C:"),
                          createVNode("div", {
                            class: "test-results-container",
                            style: { "max-height": "200px", "overflow-y": "auto" }
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(lastTestResults.value.slice(0, 5), (result) => {
                              return openBlock(), createBlock("div", {
                                key: result.id,
                                class: "d-flex align-center mb-1"
                              }, [
                                createVNode(VIcon, {
                                  color: getResultColor(result.type),
                                  size: "small",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(getResultIcon(result.type)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"]),
                                createVNode("span", { class: "text-caption" }, toDisplayString(result.message), 1)
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PWAMonitor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3ac90970"]]);
const useAnalytics = () => {
  const analyticsState = reactive({
    isInitialized: false,
    isEnabled: false,
    sessionId: "",
    userId: void 0,
    consentSettings: {
      analytics_storage: "denied",
      ad_storage: "denied",
      functionality_storage: "granted",
      personalization_storage: "denied",
      security_storage: "granted"
    },
    lastEventTimestamp: 0
  });
  const isAnalyticsAvailable = computed(() => {
    return false;
  });
  const grantConsent = (consentSettings) => {
    const newConsent = {
      ...analyticsState.consentSettings,
      analytics_storage: "granted",
      ...consentSettings
    };
    analyticsState.consentSettings = newConsent;
    analyticsState.isEnabled = true;
    console.log("\u{1F4CA} Analytics consent granted");
  };
  const denyConsent = () => {
    analyticsState.consentSettings.analytics_storage = "denied";
    analyticsState.isEnabled = false;
    console.log("\u{1F4CA} Analytics consent denied");
  };
  const gtag = (...args) => {
    if (!isAnalyticsAvailable.value) {
      return;
    }
    (void 0).gtag(...args);
    analyticsState.lastEventTimestamp = Date.now();
  };
  const trackPageView = (customData) => {
    const route = { path: "/" };
    const pageData = {
      page_title: "NO TRACE EXPLORER",
      page_location: "",
      page_path: route.path,
      content_group1: getBusinessCategory(route.path),
      content_group2: getPageType(),
      event_category: "Page View",
      custom_parameters: {
        session_id: analyticsState.sessionId,
        page_language: "ja",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      },
      ...customData
    };
    gtag("event", "page_view", pageData);
    gtag("event", "japanese_site_navigation", {
      event_category: "Navigation",
      event_label: route.path,
      custom_parameters: {
        business_category: pageData.content_group1,
        page_type: pageData.content_group2,
        session_id: analyticsState.sessionId
      }
    });
  };
  const trackBusinessInteraction = (category, action, label) => {
    gtag("event", "business_interaction", {
      event_category: category,
      event_label: label,
      custom_parameters: {
        interaction_type: action,
        business_domain: category.toLowerCase(),
        session_id: analyticsState.sessionId,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    });
  };
  const trackServiceShowcase = (serviceName, action) => {
    var _a;
    const serviceCategory = ((_a = serviceName.split("|")[0]) == null ? void 0 : _a.trim()) || "Unknown";
    gtag("event", "service_showcase_interaction", {
      event_category: "Service Showcase",
      event_label: serviceName,
      custom_parameters: {
        action_type: action,
        service_category: serviceCategory,
        service_full_name: serviceName,
        interaction_method: action,
        session_id: analyticsState.sessionId
      }
    });
  };
  const trackArticleEngagement = (articleId, action, progress) => {
    gtag("event", "article_engagement", {
      event_category: "Content",
      event_label: `Article ${articleId}`,
      custom_parameters: {
        content_id: articleId,
        engagement_type: action,
        content_type: "article",
        read_progress: progress || 0,
        session_id: analyticsState.sessionId
      }
    });
  };
  const trackPWAEvent = (eventType, details) => {
    gtag("event", "pwa_interaction", {
      event_category: "PWA",
      event_label: eventType,
      custom_parameters: {
        pwa_event_type: eventType,
        app_name: "NO TRACE EXPLORER",
        session_id: analyticsState.sessionId,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        ...details
      }
    });
  };
  const trackPerformance = (metricName, value, unit) => {
    gtag("event", "performance_metric", {
      event_category: "Performance",
      event_label: metricName,
      value: Math.round(value),
      custom_parameters: {
        metric_name: metricName,
        metric_value: value,
        metric_unit: unit,
        session_id: analyticsState.sessionId
      }
    });
  };
  const trackError = (errorType, errorMessage, errorLocation) => {
    gtag("event", "exception", {
      description: errorMessage,
      fatal: false,
      event_category: "Error",
      event_label: errorType,
      custom_parameters: {
        error_type: errorType,
        error_location: errorLocation || "unknown",
        error_timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        session_id: analyticsState.sessionId
      }
    });
  };
  const trackConversion = (conversionType, value) => {
    gtag("event", "conversion", {
      event_category: "Conversion",
      event_label: conversionType,
      value: value || 1,
      custom_parameters: {
        conversion_type: conversionType,
        conversion_value: value || 1,
        session_id: analyticsState.sessionId
      }
    });
  };
  const trackUserEngagement = (engagementTime) => {
    gtag("event", "user_engagement", {
      engagement_time_msec: engagementTime,
      event_category: "Engagement",
      custom_parameters: {
        session_duration: engagementTime,
        engagement_level: getEngagementLevel(engagementTime),
        session_id: analyticsState.sessionId
      }
    });
  };
  const trackContactForm = (action, formType) => {
    gtag("event", "contact_form_interaction", {
      event_category: "Contact",
      event_label: `${formType || "contact"}_form_${action}`,
      custom_parameters: {
        form_type: formType || "contact",
        action_type: action,
        session_id: analyticsState.sessionId
      }
    });
  };
  const setUserId = (userId) => {
    analyticsState.userId = userId;
    gtag("config", "GA_MEASUREMENT_ID", {
      user_id: userId
    });
  };
  const setUserProperties = (properties) => {
    gtag("set", "user_properties", {
      ...properties,
      session_id: analyticsState.sessionId
    });
  };
  const getBusinessCategory = (path) => {
    if (path.includes("coffee")) return "Coffee";
    if (path.includes("exhibition")) return "Exhibition";
    if (path.includes("lab")) return "Lab";
    if (path.includes("club")) return "Club";
    if (path.includes("about")) return "About";
    if (path.includes("contact")) return "Contact";
    return "Home";
  };
  const getPageType = (path) => {
    return "homepage";
  };
  const getEngagementLevel = (timeMs) => {
    if (timeMs < 1e4) return "low";
    if (timeMs < 3e4) return "medium";
    if (timeMs < 12e4) return "high";
    return "very_high";
  };
  return {
    // State
    analyticsState: readonly(analyticsState),
    isAnalyticsAvailable,
    // Consent management
    grantConsent,
    denyConsent,
    // Tracking methods
    trackPageView,
    trackBusinessInteraction,
    trackServiceShowcase,
    trackArticleEngagement,
    trackPWAEvent,
    trackPerformance,
    trackError,
    trackConversion,
    trackUserEngagement,
    trackContactForm,
    // User management
    setUserId,
    setUserProperties,
    // Utilities
    gtag
  };
};
const makeVAppProps = propsFactory({
  ...makeComponentProps(),
  ...makeLayoutProps({
    fullHeight: true
  }),
  ...makeThemeProps()
}, "VApp");
const VApp = genericComponent()({
  name: "VApp",
  props: makeVAppProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => {
      var _a;
      return createElementVNode("div", {
        "ref": layoutRef,
        "class": normalizeClass(["v-application", theme.themeClasses.value, layoutClasses.value, rtlClasses.value, props.class]),
        "style": normalizeStyle([props.style])
      }, [createElementVNode("div", {
        "class": "v-application__wrap"
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    });
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "footer"
  }),
  ...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
  name: "VFooter",
  props: makeVFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const layoutItemStyles = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.color);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    useToggleScope(() => props.app, () => {
      const layout = useLayoutItem({
        id: props.name,
        order: computed(() => parseInt(props.order, 10)),
        position: toRef(() => "bottom"),
        layoutSize: height,
        elementSize: computed(() => props.height === "auto" ? void 0 : height.value),
        active: toRef(() => props.app),
        absolute: toRef(() => props.absolute)
      });
      watchEffect(() => {
        layoutItemStyles.value = layout.layoutItemStyles.value;
      });
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": normalizeClass(["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class]),
      "style": normalizeStyle([backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style])
    }, slots));
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      analyticsState,
      grantConsent,
      denyConsent,
      trackPageView
    } = useAnalytics();
    const drawer = ref(false);
    const scrolled = ref(false);
    const showBackToTop = ref(false);
    const showConsentBanner = ref(false);
    const navItems = [
      { title: "\u30B3\u30FC\u30D2\u30FC", to: "/coffee", icon: "mdi-coffee" },
      { title: "\u30A8\u30AD\u30B7\u30D3\u30B7\u30E7\u30F3", to: "/exhibition", icon: "mdi-calendar-star" },
      { title: "\u30E9\u30DC", to: "/lab", icon: "mdi-flask" },
      { title: "\u30AF\u30E9\u30D6", to: "/club", icon: "mdi-account-group" },
      { title: "\u4F01\u696D\u60C5\u5831", to: "/about", icon: "mdi-information" },
      { title: "\u304A\u554F\u3044\u5408\u308F\u305B", to: "/contact", icon: "mdi-email" }
    ];
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const scrollToTop = () => {
      (void 0).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    const grantAnalyticsConsent = () => {
      grantConsent();
      showConsentBanner.value = false;
      nextTick(() => {
        trackPageView({});
      });
    };
    const denyAnalyticsConsent = () => {
      denyConsent();
      showConsentBanner.value = false;
    };
    const router = useRouter();
    router.afterEach((to) => {
      if (analyticsState.isEnabled) {
        nextTick(() => {
          trackPageView({
            page_path: to.path,
            page_title: (void 0).title
          });
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_PWAMonitor = __nuxt_component_1;
      _push(ssrRenderComponent(VApp, mergeProps({ class: "app-container" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VAppBar, {
              elevation: unref(scrolled) ? 4 : 0,
              color: unref(scrolled) ? "white" : "transparent",
              theme: unref(scrolled) ? "light" : "dark",
              app: "",
              height: "80",
              class: ["app-navigation", { "nav-scrolled": unref(scrolled) }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { class: "d-flex align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: "/",
                          class: "brand-link text-decoration-none"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="brand-container" data-v-c5bd86e6${_scopeId4}><h1 class="brand-title d-none d-md-block" data-v-c5bd86e6${_scopeId4}> NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E </h1><h1 class="brand-title-mobile d-block d-md-none" data-v-c5bd86e6${_scopeId4}> NTE </h1></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "brand-container" }, [
                                  createVNode("h1", { class: "brand-title d-none d-md-block" }, " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                                  createVNode("h1", { class: "brand-title-mobile d-block d-md-none" }, " NTE ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(`<div class="d-none d-lg-flex navigation-menu" data-v-c5bd86e6${_scopeId3}><!--[-->`);
                        ssrRenderList(navItems, (item, index) => {
                          _push4(ssrRenderComponent(VBtn, {
                            key: item.to,
                            to: item.to,
                            variant: "text",
                            class: ["nav-btn mx-1", {
                              "nav-btn-active": _ctx.$route.path === item.to,
                              "has-divider": index < navItems.length - 1
                            }]
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (item.icon) {
                                  _push5(ssrRenderComponent(VIcon, {
                                    icon: item.icon,
                                    start: "",
                                    size: "small"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(` ${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  item.icon ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    icon: item.icon,
                                    start: "",
                                    size: "small"
                                  }, null, 8, ["icon"])) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                        _push4(ssrRenderComponent(VMenu, null, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VBtn, mergeProps({
                                icon: "mdi-cog",
                                variant: "text",
                                size: "small",
                                class: "ml-2 admin-btn",
                                title: "\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0"
                              }, props), null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VBtn, mergeProps({
                                  icon: "mdi-cog",
                                  variant: "text",
                                  size: "small",
                                  class: "ml-2 admin-btn",
                                  title: "\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0"
                                }, props), null, 16)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VList, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VListItem, {
                                      to: "/admin",
                                      title: "\u7BA1\u7406\u4E2D\u5FC3"
                                    }, {
                                      prepend: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, { icon: "mdi-cog" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VIcon, { icon: "mdi-cog" })
                                          ];
                                        }
                                      }),
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VListItemTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u7BA1\u7406\u4E2D\u5FC3`);
                                              } else {
                                                return [
                                                  createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VListItemTitle, null, {
                                              default: withCtx(() => [
                                                createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VListItem, {
                                        to: "/admin",
                                        title: "\u7BA1\u7406\u4E2D\u5FC3"
                                      }, {
                                        prepend: withCtx(() => [
                                          createVNode(VIcon, { icon: "mdi-cog" })
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, null, {
                                            default: withCtx(() => [
                                              createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, {
                                      to: "/admin",
                                      title: "\u7BA1\u7406\u4E2D\u5FC3"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-cog" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                          ]),
                                          _: 1
                                        })
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
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VAppBarNavIcon, {
                          class: "d-lg-none",
                          onClick: ($event) => drawer.value = !unref(drawer)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_nuxt_link, {
                            to: "/",
                            class: "brand-link text-decoration-none"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "brand-container" }, [
                                createVNode("h1", { class: "brand-title d-none d-md-block" }, " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                                createVNode("h1", { class: "brand-title-mobile d-block d-md-none" }, " NTE ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode("div", { class: "d-none d-lg-flex navigation-menu" }, [
                            (openBlock(), createBlock(Fragment, null, renderList(navItems, (item, index) => {
                              return createVNode(VBtn, {
                                key: item.to,
                                to: item.to,
                                variant: "text",
                                class: ["nav-btn mx-1", {
                                  "nav-btn-active": _ctx.$route.path === item.to,
                                  "has-divider": index < navItems.length - 1
                                }]
                              }, {
                                default: withCtx(() => [
                                  item.icon ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    icon: item.icon,
                                    start: "",
                                    size: "small"
                                  }, null, 8, ["icon"])) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to", "class"]);
                            }), 64)),
                            createVNode(VMenu, null, {
                              activator: withCtx(({ props }) => [
                                createVNode(VBtn, mergeProps({
                                  icon: "mdi-cog",
                                  variant: "text",
                                  size: "small",
                                  class: "ml-2 admin-btn",
                                  title: "\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0"
                                }, props), null, 16)
                              ]),
                              default: withCtx(() => [
                                createVNode(VList, null, {
                                  default: withCtx(() => [
                                    createVNode(VListItem, {
                                      to: "/admin",
                                      title: "\u7BA1\u7406\u4E2D\u5FC3"
                                    }, {
                                      prepend: withCtx(() => [
                                        createVNode(VIcon, { icon: "mdi-cog" })
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(VAppBarNavIcon, {
                            class: "d-lg-none",
                            onClick: ($event) => drawer.value = !unref(drawer)
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, { class: "d-flex align-center" }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_link, {
                          to: "/",
                          class: "brand-link text-decoration-none"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "brand-container" }, [
                              createVNode("h1", { class: "brand-title d-none d-md-block" }, " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                              createVNode("h1", { class: "brand-title-mobile d-block d-md-none" }, " NTE ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(VSpacer),
                        createVNode("div", { class: "d-none d-lg-flex navigation-menu" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(navItems, (item, index) => {
                            return createVNode(VBtn, {
                              key: item.to,
                              to: item.to,
                              variant: "text",
                              class: ["nav-btn mx-1", {
                                "nav-btn-active": _ctx.$route.path === item.to,
                                "has-divider": index < navItems.length - 1
                              }]
                            }, {
                              default: withCtx(() => [
                                item.icon ? (openBlock(), createBlock(VIcon, {
                                  key: 0,
                                  icon: item.icon,
                                  start: "",
                                  size: "small"
                                }, null, 8, ["icon"])) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "class"]);
                          }), 64)),
                          createVNode(VMenu, null, {
                            activator: withCtx(({ props }) => [
                              createVNode(VBtn, mergeProps({
                                icon: "mdi-cog",
                                variant: "text",
                                size: "small",
                                class: "ml-2 admin-btn",
                                title: "\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0"
                              }, props), null, 16)
                            ]),
                            default: withCtx(() => [
                              createVNode(VList, null, {
                                default: withCtx(() => [
                                  createVNode(VListItem, {
                                    to: "/admin",
                                    title: "\u7BA1\u7406\u4E2D\u5FC3"
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(VIcon, { icon: "mdi-cog" })
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(VListItemTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(VAppBarNavIcon, {
                          class: "d-lg-none",
                          onClick: ($event) => drawer.value = !unref(drawer)
                        }, null, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: unref(drawer),
              "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
              temporary: "",
              location: "right",
              width: "300",
              class: "mobile-nav-drawer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, {
                    nav: "",
                    class: "py-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-icon": "mdi-close",
                          onClick: ($event) => drawer.value = false,
                          class: "mb-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, { class: "text-h6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u30E1\u30CB\u30E5\u30FC`);
                                  } else {
                                    return [
                                      createTextVNode("\u30E1\u30CB\u30E5\u30FC")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, { class: "text-h6" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u30E1\u30CB\u30E5\u30FC")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, { class: "mb-4" }, null, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(navItems, (item) => {
                          _push4(ssrRenderComponent(VListItem, {
                            key: item.to,
                            to: item.to,
                            onClick: ($event) => drawer.value = false,
                            class: "mobile-nav-item"
                          }, {
                            prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: item.icon
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VIcon, {
                                    icon: item.icon
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VListItemTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VListItemTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                        _push4(ssrRenderComponent(VDivider, { class: "my-2" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VListItem, {
                          to: "/admin",
                          onClick: ($event) => drawer.value = false,
                          class: "mobile-nav-item"
                        }, {
                          prepend: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, { icon: "mdi-cog" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, { icon: "mdi-cog" })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VListItemTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u7BA1\u7406\u4E2D\u5FC3`);
                                  } else {
                                    return [
                                      createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, {
                            "prepend-icon": "mdi-close",
                            onClick: ($event) => drawer.value = false,
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VListItemTitle, { class: "text-h6" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u30E1\u30CB\u30E5\u30FC")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VDivider, { class: "mb-4" }),
                          (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                            return createVNode(VListItem, {
                              key: item.to,
                              to: item.to,
                              onClick: ($event) => drawer.value = false,
                              class: "mobile-nav-item"
                            }, {
                              prepend: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: item.icon
                                }, null, 8, ["icon"])
                              ]),
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to", "onClick"]);
                          }), 64)),
                          createVNode(VDivider, { class: "my-2" }),
                          createVNode(VListItem, {
                            to: "/admin",
                            onClick: ($event) => drawer.value = false,
                            class: "mobile-nav-item"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, { icon: "mdi-cog" })
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, {
                      nav: "",
                      class: "py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          "prepend-icon": "mdi-close",
                          onClick: ($event) => drawer.value = false,
                          class: "mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItemTitle, { class: "text-h6" }, {
                              default: withCtx(() => [
                                createTextVNode("\u30E1\u30CB\u30E5\u30FC")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VDivider, { class: "mb-4" }),
                        (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                          return createVNode(VListItem, {
                            key: item.to,
                            to: item.to,
                            onClick: ($event) => drawer.value = false,
                            class: "mobile-nav-item"
                          }, {
                            prepend: withCtx(() => [
                              createVNode(VIcon, {
                                icon: item.icon
                              }, null, 8, ["icon"])
                            ]),
                            default: withCtx(() => [
                              createVNode(VListItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["to", "onClick"]);
                        }), 64)),
                        createVNode(VDivider, { class: "my-2" }),
                        createVNode(VListItem, {
                          to: "/admin",
                          onClick: ($event) => drawer.value = false,
                          class: "mobile-nav-item"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, { icon: "mdi-cog" })
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VFooter, { class: "app-footer" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "4",
                                class: "mb-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="text-h6 text-white mb-3" data-v-c5bd86e6${_scopeId5}> NO TRACE EXPLORER </h3><p class="text-body-2 text-grey-lighten-1 mb-3" data-v-c5bd86e6${_scopeId5}> \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E </p><p class="text-body-2 text-grey-lighten-2" data-v-c5bd86e6${_scopeId5}> \u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002 </p>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "text-h6 text-white mb-3" }, " NO TRACE EXPLORER "),
                                      createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-3" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                                      createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " \u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "4",
                                class: "mb-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="text-subtitle-1 text-white mb-3" data-v-c5bd86e6${_scopeId5}> \u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF </h4>`);
                                    _push6(ssrRenderComponent(VList, {
                                      class: "bg-transparent",
                                      density: "compact"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(navItems, (item) => {
                                            _push7(ssrRenderComponent(VListItem, {
                                              key: item.to,
                                              to: item.to,
                                              class: "text-grey-lighten-2 px-0"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VListItemTitle, { class: "text-body-2" }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item.title)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item.title), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                                              return createVNode(VListItem, {
                                                key: item.to,
                                                to: item.to,
                                                class: "text-grey-lighten-2 px-0"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF "),
                                      createVNode(VList, {
                                        class: "bg-transparent",
                                        density: "compact"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                                            return createVNode(VListItem, {
                                              key: item.to,
                                              to: item.to,
                                              class: "text-grey-lighten-2 px-0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                md: "4",
                                class: "mb-4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h4 class="text-subtitle-1 text-white mb-3" data-v-c5bd86e6${_scopeId5}> \u304A\u554F\u3044\u5408\u308F\u305B </h4><div class="text-body-2 text-grey-lighten-2" data-v-c5bd86e6${_scopeId5}><div class="d-flex align-center mb-2" data-v-c5bd86e6${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "mdi-email",
                                      size: "small",
                                      class: "mr-2"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` info@no-trace.jp </div><div class="d-flex align-center mb-2" data-v-c5bd86e6${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "mdi-web",
                                      size: "small",
                                      class: "mr-2"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` https://no-trace.jp </div><div class="d-flex align-center" data-v-c5bd86e6${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "mdi-map-marker",
                                      size: "small",
                                      class: "mr-2"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` \u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\uFF08\u8A2D\u7ACB\u6E96\u5099\u4E2D\uFF09 </div></div>`);
                                  } else {
                                    return [
                                      createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u304A\u554F\u3044\u5408\u308F\u305B "),
                                      createVNode("div", { class: "text-body-2 text-grey-lighten-2" }, [
                                        createVNode("div", { class: "d-flex align-center mb-2" }, [
                                          createVNode(VIcon, {
                                            icon: "mdi-email",
                                            size: "small",
                                            class: "mr-2"
                                          }),
                                          createTextVNode(" info@no-trace.jp ")
                                        ]),
                                        createVNode("div", { class: "d-flex align-center mb-2" }, [
                                          createVNode(VIcon, {
                                            icon: "mdi-web",
                                            size: "small",
                                            class: "mr-2"
                                          }),
                                          createTextVNode(" https://no-trace.jp ")
                                        ]),
                                        createVNode("div", { class: "d-flex align-center" }, [
                                          createVNode(VIcon, {
                                            icon: "mdi-map-marker",
                                            size: "small",
                                            class: "mr-2"
                                          }),
                                          createTextVNode(" \u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\uFF08\u8A2D\u7ACB\u6E96\u5099\u4E2D\uFF09 ")
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "text-h6 text-white mb-3" }, " NO TRACE EXPLORER "),
                                    createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-3" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                                    createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " \u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF "),
                                    createVNode(VList, {
                                      class: "bg-transparent",
                                      density: "compact"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                                          return createVNode(VListItem, {
                                            key: item.to,
                                            to: item.to,
                                            class: "text-grey-lighten-2 px-0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VListItemTitle, { class: "text-body-2" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.title), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  md: "4",
                                  class: "mb-4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u304A\u554F\u3044\u5408\u308F\u305B "),
                                    createVNode("div", { class: "text-body-2 text-grey-lighten-2" }, [
                                      createVNode("div", { class: "d-flex align-center mb-2" }, [
                                        createVNode(VIcon, {
                                          icon: "mdi-email",
                                          size: "small",
                                          class: "mr-2"
                                        }),
                                        createTextVNode(" info@no-trace.jp ")
                                      ]),
                                      createVNode("div", { class: "d-flex align-center mb-2" }, [
                                        createVNode(VIcon, {
                                          icon: "mdi-web",
                                          size: "small",
                                          class: "mr-2"
                                        }),
                                        createTextVNode(" https://no-trace.jp ")
                                      ]),
                                      createVNode("div", { class: "d-flex align-center" }, [
                                        createVNode(VIcon, {
                                          icon: "mdi-map-marker",
                                          size: "small",
                                          class: "mr-2"
                                        }),
                                        createTextVNode(" \u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\uFF08\u8A2D\u7ACB\u6E96\u5099\u4E2D\uFF09 ")
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VDivider, {
                          class: "my-4",
                          color: "grey-darken-2"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VRow, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p class="text-body-2 text-grey-lighten-1 mb-0" data-v-c5bd86e6${_scopeId5}> \xA9 ${ssrInterpolate(unref(currentYear))} NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E. All rights reserved. </p>`);
                                  } else {
                                    return [
                                      createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-0" }, " \xA9 " + toDisplayString(unref(currentYear)) + " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E. All rights reserved. ", 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-0" }, " \xA9 " + toDisplayString(unref(currentYear)) + " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E. All rights reserved. ", 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                md: "4",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-h6 text-white mb-3" }, " NO TRACE EXPLORER "),
                                  createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-3" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                                  createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " \u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "4",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF "),
                                  createVNode(VList, {
                                    class: "bg-transparent",
                                    density: "compact"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                                        return createVNode(VListItem, {
                                          key: item.to,
                                          to: item.to,
                                          class: "text-grey-lighten-2 px-0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VListItemTitle, { class: "text-body-2" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.title), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"]);
                                      }), 64))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                md: "4",
                                class: "mb-4"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u304A\u554F\u3044\u5408\u308F\u305B "),
                                  createVNode("div", { class: "text-body-2 text-grey-lighten-2" }, [
                                    createVNode("div", { class: "d-flex align-center mb-2" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-email",
                                        size: "small",
                                        class: "mr-2"
                                      }),
                                      createTextVNode(" info@no-trace.jp ")
                                    ]),
                                    createVNode("div", { class: "d-flex align-center mb-2" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-web",
                                        size: "small",
                                        class: "mr-2"
                                      }),
                                      createTextVNode(" https://no-trace.jp ")
                                    ]),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(VIcon, {
                                        icon: "mdi-map-marker",
                                        size: "small",
                                        class: "mr-2"
                                      }),
                                      createTextVNode(" \u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\uFF08\u8A2D\u7ACB\u6E96\u5099\u4E2D\uFF09 ")
                                    ])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VDivider, {
                            class: "my-4",
                            color: "grey-darken-2"
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-0" }, " \xA9 " + toDisplayString(unref(currentYear)) + " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E. All rights reserved. ", 1)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              md: "4",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "text-h6 text-white mb-3" }, " NO TRACE EXPLORER "),
                                createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-3" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                                createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " \u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "4",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF "),
                                createVNode(VList, {
                                  class: "bg-transparent",
                                  density: "compact"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                                      return createVNode(VListItem, {
                                        key: item.to,
                                        to: item.to,
                                        class: "text-grey-lighten-2 px-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VListItemTitle, { class: "text-body-2" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, {
                              cols: "12",
                              md: "4",
                              class: "mb-4"
                            }, {
                              default: withCtx(() => [
                                createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u304A\u554F\u3044\u5408\u308F\u305B "),
                                createVNode("div", { class: "text-body-2 text-grey-lighten-2" }, [
                                  createVNode("div", { class: "d-flex align-center mb-2" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-email",
                                      size: "small",
                                      class: "mr-2"
                                    }),
                                    createTextVNode(" info@no-trace.jp ")
                                  ]),
                                  createVNode("div", { class: "d-flex align-center mb-2" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-web",
                                      size: "small",
                                      class: "mr-2"
                                    }),
                                    createTextVNode(" https://no-trace.jp ")
                                  ]),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(VIcon, {
                                      icon: "mdi-map-marker",
                                      size: "small",
                                      class: "mr-2"
                                    }),
                                    createTextVNode(" \u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\uFF08\u8A2D\u7ACB\u6E96\u5099\u4E2D\uFF09 ")
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VDivider, {
                          class: "my-4",
                          color: "grey-darken-2"
                        }),
                        createVNode(VRow, null, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-0" }, " \xA9 " + toDisplayString(unref(currentYear)) + " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E. All rights reserved. ", 1)
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VBtn, {
              style: [
                unref(showBackToTop) ? null : { display: "none" },
                { "position": "fixed", "bottom": "2rem", "right": "2rem", "z-index": "1000" }
              ],
              icon: "mdi-chevron-up",
              color: "primary",
              size: "large",
              class: "back-to-top-btn",
              onClick: scrollToTop
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PWAMonitor, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VSnackbar, {
              modelValue: unref(showConsentBanner),
              "onUpdate:modelValue": ($event) => isRef(showConsentBanner) ? showConsentBanner.value = $event : null,
              timeout: -1,
              location: "bottom",
              color: "grey-darken-4",
              class: "consent-banner",
              "multi-line": ""
            }, {
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex gap-2 mt-2" data-v-c5bd86e6${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    size: "small",
                    variant: "outlined",
                    color: "grey-lighten-2",
                    onClick: denyAnalyticsConsent
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u62D2\u5426 `);
                      } else {
                        return [
                          createTextVNode(" \u62D2\u5426 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    size: "small",
                    color: "primary",
                    onClick: grantAnalyticsConsent
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u540C\u610F `);
                      } else {
                        return [
                          createTextVNode(" \u540C\u610F ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex gap-2 mt-2" }, [
                      createVNode(VBtn, {
                        size: "small",
                        variant: "outlined",
                        color: "grey-lighten-2",
                        onClick: denyAnalyticsConsent
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u62D2\u5426 ")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        size: "small",
                        color: "primary",
                        onClick: grantAnalyticsConsent
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u540C\u610F ")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center" data-v-c5bd86e6${_scopeId2}>`);
                  _push3(ssrRenderComponent(VIcon, {
                    icon: "mdi-chart-line",
                    class: "mr-3",
                    color: "primary"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex-grow-1" data-v-c5bd86e6${_scopeId2}><div class="font-weight-medium text-white mb-1" data-v-c5bd86e6${_scopeId2}> \u30B5\u30A4\u30C8\u6539\u5584\u306E\u305F\u3081\u306E\u30C7\u30FC\u30BF\u53CE\u96C6\u306B\u3064\u3044\u3066 </div><div class="text-caption text-grey-lighten-2" data-v-c5bd86e6${_scopeId2}> \u5F53\u30B5\u30A4\u30C8\u3067\u306F\u30B5\u30FC\u30D3\u30B9\u5411\u4E0A\u306E\u305F\u3081Google Analytics\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u533F\u540D\u5316\u3055\u308C\u305F\u30A2\u30AF\u30BB\u30B9\u60C5\u5831\u306E\u53CE\u96C6\u306B\u540C\u610F\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F </div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(VIcon, {
                        icon: "mdi-chart-line",
                        class: "mr-3",
                        color: "primary"
                      }),
                      createVNode("div", { class: "flex-grow-1" }, [
                        createVNode("div", { class: "font-weight-medium text-white mb-1" }, " \u30B5\u30A4\u30C8\u6539\u5584\u306E\u305F\u3081\u306E\u30C7\u30FC\u30BF\u53CE\u96C6\u306B\u3064\u3044\u3066 "),
                        createVNode("div", { class: "text-caption text-grey-lighten-2" }, " \u5F53\u30B5\u30A4\u30C8\u3067\u306F\u30B5\u30FC\u30D3\u30B9\u5411\u4E0A\u306E\u305F\u3081Google Analytics\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u533F\u540D\u5316\u3055\u308C\u305F\u30A2\u30AF\u30BB\u30B9\u60C5\u5831\u306E\u53CE\u96C6\u306B\u540C\u610F\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VAppBar, {
                elevation: unref(scrolled) ? 4 : 0,
                color: unref(scrolled) ? "white" : "transparent",
                theme: unref(scrolled) ? "light" : "dark",
                app: "",
                height: "80",
                class: ["app-navigation", { "nav-scrolled": unref(scrolled) }]
              }, {
                default: withCtx(() => [
                  createVNode(VContainer, { class: "d-flex align-center" }, {
                    default: withCtx(() => [
                      createVNode(_component_nuxt_link, {
                        to: "/",
                        class: "brand-link text-decoration-none"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "brand-container" }, [
                            createVNode("h1", { class: "brand-title d-none d-md-block" }, " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                            createVNode("h1", { class: "brand-title-mobile d-block d-md-none" }, " NTE ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(VSpacer),
                      createVNode("div", { class: "d-none d-lg-flex navigation-menu" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(navItems, (item, index) => {
                          return createVNode(VBtn, {
                            key: item.to,
                            to: item.to,
                            variant: "text",
                            class: ["nav-btn mx-1", {
                              "nav-btn-active": _ctx.$route.path === item.to,
                              "has-divider": index < navItems.length - 1
                            }]
                          }, {
                            default: withCtx(() => [
                              item.icon ? (openBlock(), createBlock(VIcon, {
                                key: 0,
                                icon: item.icon,
                                start: "",
                                size: "small"
                              }, null, 8, ["icon"])) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["to", "class"]);
                        }), 64)),
                        createVNode(VMenu, null, {
                          activator: withCtx(({ props }) => [
                            createVNode(VBtn, mergeProps({
                              icon: "mdi-cog",
                              variant: "text",
                              size: "small",
                              class: "ml-2 admin-btn",
                              title: "\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0"
                            }, props), null, 16)
                          ]),
                          default: withCtx(() => [
                            createVNode(VList, null, {
                              default: withCtx(() => [
                                createVNode(VListItem, {
                                  to: "/admin",
                                  title: "\u7BA1\u7406\u4E2D\u5FC3"
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(VIcon, { icon: "mdi-cog" })
                                  ]),
                                  default: withCtx(() => [
                                    createVNode(VListItemTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(VAppBarNavIcon, {
                        class: "d-lg-none",
                        onClick: ($event) => drawer.value = !unref(drawer)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["elevation", "color", "theme", "class"]),
              createVNode(VNavigationDrawer, {
                modelValue: unref(drawer),
                "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                temporary: "",
                location: "right",
                width: "300",
                class: "mobile-nav-drawer"
              }, {
                default: withCtx(() => [
                  createVNode(VList, {
                    nav: "",
                    class: "py-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(VListItem, {
                        "prepend-icon": "mdi-close",
                        onClick: ($event) => drawer.value = false,
                        class: "mb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItemTitle, { class: "text-h6" }, {
                            default: withCtx(() => [
                              createTextVNode("\u30E1\u30CB\u30E5\u30FC")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VDivider, { class: "mb-4" }),
                      (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                        return createVNode(VListItem, {
                          key: item.to,
                          to: item.to,
                          onClick: ($event) => drawer.value = false,
                          class: "mobile-nav-item"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(VIcon, {
                              icon: item.icon
                            }, null, 8, ["icon"])
                          ]),
                          default: withCtx(() => [
                            createVNode(VListItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["to", "onClick"]);
                      }), 64)),
                      createVNode(VDivider, { class: "my-2" }),
                      createVNode(VListItem, {
                        to: "/admin",
                        onClick: ($event) => drawer.value = false,
                        class: "mobile-nav-item"
                      }, {
                        prepend: withCtx(() => [
                          createVNode(VIcon, { icon: "mdi-cog" })
                        ]),
                        default: withCtx(() => [
                          createVNode(VListItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u7BA1\u7406\u4E2D\u5FC3")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
              }),
              createVNode(VFooter, { class: "app-footer" }, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            md: "4",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-h6 text-white mb-3" }, " NO TRACE EXPLORER "),
                              createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-3" }, " \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E "),
                              createVNode("p", { class: "text-body-2 text-grey-lighten-2" }, " \u9769\u65B0\u7684\u306A\u30BD\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u65B0\u305F\u306A\u30D3\u30B8\u30CD\u30B9\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002 ")
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u30AF\u30A4\u30C3\u30AF\u30EA\u30F3\u30AF "),
                              createVNode(VList, {
                                class: "bg-transparent",
                                density: "compact"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(navItems, (item) => {
                                    return createVNode(VListItem, {
                                      key: item.to,
                                      to: item.to,
                                      class: "text-grey-lighten-2 px-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VListItemTitle, { class: "text-body-2" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            md: "4",
                            class: "mb-4"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-subtitle-1 text-white mb-3" }, " \u304A\u554F\u3044\u5408\u308F\u305B "),
                              createVNode("div", { class: "text-body-2 text-grey-lighten-2" }, [
                                createVNode("div", { class: "d-flex align-center mb-2" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-email",
                                    size: "small",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" info@no-trace.jp ")
                                ]),
                                createVNode("div", { class: "d-flex align-center mb-2" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-web",
                                    size: "small",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" https://no-trace.jp ")
                                ]),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(VIcon, {
                                    icon: "mdi-map-marker",
                                    size: "small",
                                    class: "mr-2"
                                  }),
                                  createTextVNode(" \u6771\u4EAC\u90FD\u6E0B\u8C37\u533A\uFF08\u8A2D\u7ACB\u6E96\u5099\u4E2D\uFF09 ")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VDivider, {
                        class: "my-4",
                        color: "grey-darken-2"
                      }),
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", { class: "text-body-2 text-grey-lighten-1 mb-0" }, " \xA9 " + toDisplayString(unref(currentYear)) + " NO TRACE EXPLORER | \u7121\u8FF9\u63A2\u7D22\u682A\u5F0F\u4F1A\u793E. All rights reserved. ", 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              withDirectives(createVNode(VBtn, {
                icon: "mdi-chevron-up",
                color: "primary",
                size: "large",
                class: "back-to-top-btn",
                style: { "position": "fixed", "bottom": "2rem", "right": "2rem", "z-index": "1000" },
                onClick: scrollToTop
              }, null, 512), [
                [vShow, unref(showBackToTop)]
              ]),
              createVNode(_component_PWAMonitor),
              createVNode(VSnackbar, {
                modelValue: unref(showConsentBanner),
                "onUpdate:modelValue": ($event) => isRef(showConsentBanner) ? showConsentBanner.value = $event : null,
                timeout: -1,
                location: "bottom",
                color: "grey-darken-4",
                class: "consent-banner",
                "multi-line": ""
              }, {
                actions: withCtx(() => [
                  createVNode("div", { class: "d-flex gap-2 mt-2" }, [
                    createVNode(VBtn, {
                      size: "small",
                      variant: "outlined",
                      color: "grey-lighten-2",
                      onClick: denyAnalyticsConsent
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u62D2\u5426 ")
                      ]),
                      _: 1
                    }),
                    createVNode(VBtn, {
                      size: "small",
                      color: "primary",
                      onClick: grantAnalyticsConsent
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u540C\u610F ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(VIcon, {
                      icon: "mdi-chart-line",
                      class: "mr-3",
                      color: "primary"
                    }),
                    createVNode("div", { class: "flex-grow-1" }, [
                      createVNode("div", { class: "font-weight-medium text-white mb-1" }, " \u30B5\u30A4\u30C8\u6539\u5584\u306E\u305F\u3081\u306E\u30C7\u30FC\u30BF\u53CE\u96C6\u306B\u3064\u3044\u3066 "),
                      createVNode("div", { class: "text-caption text-grey-lighten-2" }, " \u5F53\u30B5\u30A4\u30C8\u3067\u306F\u30B5\u30FC\u30D3\u30B9\u5411\u4E0A\u306E\u305F\u3081Google Analytics\u3092\u4F7F\u7528\u3057\u3066\u3044\u307E\u3059\u3002 \u533F\u540D\u5316\u3055\u308C\u305F\u30A2\u30AF\u30BB\u30B9\u60C5\u5831\u306E\u53CE\u96C6\u306B\u540C\u610F\u3044\u305F\u3060\u3051\u307E\u3059\u304B\uFF1F ")
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5bd86e6"]]);

export { _default as default };
//# sourceMappingURL=default-CUGV0Zcj.mjs.map
