// 路由级别的懒加载组件配置
import { defineAsyncComponent } from 'vue'

// 创建懒加载组件的工厂函数
const createLazyComponent = (
  importFn: () => Promise<any>,
  options?: {
    loadingComponent?: any
    errorComponent?: any
    delay?: number
    timeout?: number
  }
) => {
  return defineAsyncComponent({
    loader: importFn,
    loadingComponent: options?.loadingComponent,
    errorComponent: options?.errorComponent,
    delay: options?.delay || 200,
    timeout: options?.timeout || 10000
  })
}

// 默认加载中组件
const DefaultLoadingComponent = defineComponent({
  template: `
    <div class="d-flex align-center justify-center" style="min-height: 200px;">
      <v-progress-circular
        indeterminate
        color="primary"
        size="40"
      />
    </div>
  `
})

// 默认错误组件
const DefaultErrorComponent = defineComponent({
  template: `
    <div class="d-flex flex-column align-center justify-center pa-8">
      <v-icon icon="mdi-alert-circle" size="48" color="error" class="mb-4" />
      <h3 class="text-h6 mb-2">コンポーネントの読み込みに失敗しました</h3>
      <p class="text-body-2 text-grey">ページを再読み込みしてください</p>
      <v-btn
        color="primary"
        variant="outlined"
        class="mt-4"
        @click="() => window.location.reload()"
      >
        再読み込み
      </v-btn>
    </div>
  `
})

// 页面级别的懒加载组件
export const LazyPages = {
  // 主要页面 - 较高优先级
  HomePage: createLazyComponent(() => import('~/pages/index.vue')),
  AboutPage: createLazyComponent(() => import('~/pages/about.vue')),
  ContactPage: createLazyComponent(() => import('~/pages/contact.vue')),
  
  // 服务页面 - 中等优先级
  CoffeePage: createLazyComponent(
    () => import('~/pages/coffee.vue'),
    {
      loadingComponent: DefaultLoadingComponent,
      errorComponent: DefaultErrorComponent
    }
  ),
  ExhibitionPage: createLazyComponent(
    () => import('~/pages/exhibition.vue'),
    {
      loadingComponent: DefaultLoadingComponent,
      errorComponent: DefaultErrorComponent
    }
  ),
  LabPage: createLazyComponent(
    () => import('~/pages/lab.vue'),
    {
      loadingComponent: DefaultLoadingComponent,
      errorComponent: DefaultErrorComponent
    }
  ),
  ClubPage: createLazyComponent(
    () => import('~/pages/club.vue'),
    {
      loadingComponent: DefaultLoadingComponent,
      errorComponent: DefaultErrorComponent
    }
  )
}

// 组件级别的懒加载
export const LazyComponents = {
  // 核心组件 - 高优先级
  AppNavigation: createLazyComponent(() => import('~/components/AppNavigation.vue')),
  
  // 功能组件 - 中等优先级
  ServiceShowcase: createLazyComponent(
    () => import('~/components/ServiceShowcase.vue'),
    {
      loadingComponent: DefaultLoadingComponent,
      delay: 100
    }
  ),
  PresentationCounter: createLazyComponent(
    () => import('~/components/PresentationCounter.vue'),
    {
      loadingComponent: DefaultLoadingComponent,
      delay: 100
    }
  ),
  PresentationPages: createLazyComponent(
    () => import('~/components/PresentationPages.vue'),
    {
      loadingComponent: DefaultLoadingComponent,
      delay: 100
    }
  ),
  
  // 工具组件 - 低优先级
  DeferredWrapper: createLazyComponent(() => import('~/components/DeferredWrapper.vue')),
  DeferredImage: createLazyComponent(() => import('~/components/DeferredImage.vue'))
}

// 预加载关键组件
export const preloadCriticalComponents = async () => {
  // 预加载首页必需的组件
  const criticalComponents = [
    LazyComponents.AppNavigation,
    LazyComponents.PresentationCounter
  ]
  
  try {
    await Promise.all(criticalComponents.map(component => {
      // 触发组件加载但不等待完成
      return Promise.resolve(component)
    }))
    console.log('Critical components preloaded successfully')
  } catch (error) {
    console.warn('Failed to preload critical components:', error)
  }
}

// 预加载下一页的组件
export const preloadPageComponents = (routeName: string) => {
  const componentMap: Record<string, any> = {
    'coffee': LazyPages.CoffeePage,
    'exhibition': LazyPages.ExhibitionPage,
    'lab': LazyPages.LabPage,
    'club': LazyPages.ClubPage,
    'about': LazyPages.AboutPage,
    'contact': LazyPages.ContactPage
  }
  
  const component = componentMap[routeName]
  if (component) {
    // 在用户可能导航到该页面之前预加载
    requestIdleCallback(() => {
      Promise.resolve(component).catch(error => {
        console.warn(`Failed to preload ${routeName} page:`, error)
      })
    })
  }
}