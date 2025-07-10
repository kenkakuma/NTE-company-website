
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AnalyticsDashboard': typeof import("../components/AnalyticsDashboard.vue")['default']
    'AnalyticsManager': typeof import("../components/AnalyticsManager.vue")['default']
    'AppFooter': typeof import("../components/AppFooter.vue")['default']
    'AppNavigation': typeof import("../components/AppNavigation.vue")['default']
    'ArticleEditor': typeof import("../components/ArticleEditor.vue")['default']
    'ArticleManager': typeof import("../components/ArticleManager.vue")['default']
    'BuiltByDevelopers': typeof import("../components/BuiltByDevelopers.vue")['default']
    'DefaultCounterCard': typeof import("../components/DefaultCounterCard.vue")['default']
    'DefaultInfoCard': typeof import("../components/DefaultInfoCard.vue")['default']
    'DeferredImage': typeof import("../components/DeferredImage.vue")['default']
    'DeferredWrapper': typeof import("../components/DeferredWrapper.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'HomepageManager': typeof import("../components/HomepageManager.vue")['default']
    'ImageManager': typeof import("../components/ImageManager.vue")['default']
    'ImageUploader': typeof import("../components/ImageUploader.vue")['default']
    'PWAManager': typeof import("../components/PWAManager.vue")['default']
    'PWAMonitor': typeof import("../components/PWAMonitor.vue")['default']
    'PresentationCounter': typeof import("../components/PresentationCounter.vue")['default']
    'PresentationExample': typeof import("../components/PresentationExample.vue")['default']
    'PresentationInformation': typeof import("../components/PresentationInformation.vue")['default']
    'PresentationPages': typeof import("../components/PresentationPages.vue")['default']
    'ServiceShowcase': typeof import("../components/ServiceShowcase.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAnalyticsDashboard': LazyComponent<typeof import("../components/AnalyticsDashboard.vue")['default']>
    'LazyAnalyticsManager': LazyComponent<typeof import("../components/AnalyticsManager.vue")['default']>
    'LazyAppFooter': LazyComponent<typeof import("../components/AppFooter.vue")['default']>
    'LazyAppNavigation': LazyComponent<typeof import("../components/AppNavigation.vue")['default']>
    'LazyArticleEditor': LazyComponent<typeof import("../components/ArticleEditor.vue")['default']>
    'LazyArticleManager': LazyComponent<typeof import("../components/ArticleManager.vue")['default']>
    'LazyBuiltByDevelopers': LazyComponent<typeof import("../components/BuiltByDevelopers.vue")['default']>
    'LazyDefaultCounterCard': LazyComponent<typeof import("../components/DefaultCounterCard.vue")['default']>
    'LazyDefaultInfoCard': LazyComponent<typeof import("../components/DefaultInfoCard.vue")['default']>
    'LazyDeferredImage': LazyComponent<typeof import("../components/DeferredImage.vue")['default']>
    'LazyDeferredWrapper': LazyComponent<typeof import("../components/DeferredWrapper.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header.vue")['default']>
    'LazyHomepageManager': LazyComponent<typeof import("../components/HomepageManager.vue")['default']>
    'LazyImageManager': LazyComponent<typeof import("../components/ImageManager.vue")['default']>
    'LazyImageUploader': LazyComponent<typeof import("../components/ImageUploader.vue")['default']>
    'LazyPWAManager': LazyComponent<typeof import("../components/PWAManager.vue")['default']>
    'LazyPWAMonitor': LazyComponent<typeof import("../components/PWAMonitor.vue")['default']>
    'LazyPresentationCounter': LazyComponent<typeof import("../components/PresentationCounter.vue")['default']>
    'LazyPresentationExample': LazyComponent<typeof import("../components/PresentationExample.vue")['default']>
    'LazyPresentationInformation': LazyComponent<typeof import("../components/PresentationInformation.vue")['default']>
    'LazyPresentationPages': LazyComponent<typeof import("../components/PresentationPages.vue")['default']>
    'LazyServiceShowcase': LazyComponent<typeof import("../components/ServiceShowcase.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AnalyticsDashboard: typeof import("../components/AnalyticsDashboard.vue")['default']
export const AnalyticsManager: typeof import("../components/AnalyticsManager.vue")['default']
export const AppFooter: typeof import("../components/AppFooter.vue")['default']
export const AppNavigation: typeof import("../components/AppNavigation.vue")['default']
export const ArticleEditor: typeof import("../components/ArticleEditor.vue")['default']
export const ArticleManager: typeof import("../components/ArticleManager.vue")['default']
export const BuiltByDevelopers: typeof import("../components/BuiltByDevelopers.vue")['default']
export const DefaultCounterCard: typeof import("../components/DefaultCounterCard.vue")['default']
export const DefaultInfoCard: typeof import("../components/DefaultInfoCard.vue")['default']
export const DeferredImage: typeof import("../components/DeferredImage.vue")['default']
export const DeferredWrapper: typeof import("../components/DeferredWrapper.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const HomepageManager: typeof import("../components/HomepageManager.vue")['default']
export const ImageManager: typeof import("../components/ImageManager.vue")['default']
export const ImageUploader: typeof import("../components/ImageUploader.vue")['default']
export const PWAManager: typeof import("../components/PWAManager.vue")['default']
export const PWAMonitor: typeof import("../components/PWAMonitor.vue")['default']
export const PresentationCounter: typeof import("../components/PresentationCounter.vue")['default']
export const PresentationExample: typeof import("../components/PresentationExample.vue")['default']
export const PresentationInformation: typeof import("../components/PresentationInformation.vue")['default']
export const PresentationPages: typeof import("../components/PresentationPages.vue")['default']
export const ServiceShowcase: typeof import("../components/ServiceShowcase.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAnalyticsDashboard: LazyComponent<typeof import("../components/AnalyticsDashboard.vue")['default']>
export const LazyAnalyticsManager: LazyComponent<typeof import("../components/AnalyticsManager.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../components/AppFooter.vue")['default']>
export const LazyAppNavigation: LazyComponent<typeof import("../components/AppNavigation.vue")['default']>
export const LazyArticleEditor: LazyComponent<typeof import("../components/ArticleEditor.vue")['default']>
export const LazyArticleManager: LazyComponent<typeof import("../components/ArticleManager.vue")['default']>
export const LazyBuiltByDevelopers: LazyComponent<typeof import("../components/BuiltByDevelopers.vue")['default']>
export const LazyDefaultCounterCard: LazyComponent<typeof import("../components/DefaultCounterCard.vue")['default']>
export const LazyDefaultInfoCard: LazyComponent<typeof import("../components/DefaultInfoCard.vue")['default']>
export const LazyDeferredImage: LazyComponent<typeof import("../components/DeferredImage.vue")['default']>
export const LazyDeferredWrapper: LazyComponent<typeof import("../components/DeferredWrapper.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyHomepageManager: LazyComponent<typeof import("../components/HomepageManager.vue")['default']>
export const LazyImageManager: LazyComponent<typeof import("../components/ImageManager.vue")['default']>
export const LazyImageUploader: LazyComponent<typeof import("../components/ImageUploader.vue")['default']>
export const LazyPWAManager: LazyComponent<typeof import("../components/PWAManager.vue")['default']>
export const LazyPWAMonitor: LazyComponent<typeof import("../components/PWAMonitor.vue")['default']>
export const LazyPresentationCounter: LazyComponent<typeof import("../components/PresentationCounter.vue")['default']>
export const LazyPresentationExample: LazyComponent<typeof import("../components/PresentationExample.vue")['default']>
export const LazyPresentationInformation: LazyComponent<typeof import("../components/PresentationInformation.vue")['default']>
export const LazyPresentationPages: LazyComponent<typeof import("../components/PresentationPages.vue")['default']>
export const LazyServiceShowcase: LazyComponent<typeof import("../components/ServiceShowcase.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
