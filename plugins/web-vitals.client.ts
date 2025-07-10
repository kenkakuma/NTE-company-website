// Web Vitals Performance Monitoring Plugin
// Author: Claude AI Assistant  
// Date: 2025-07-01
// Description: Comprehensive Web Vitals monitoring with Google Analytics 4 integration

export default defineNuxtPlugin(() => {
  // Only run in client-side
  if (!process.client) return

  // Web Vitals types
  interface WebVitalsMetric {
    name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB'
    value: number
    rating: 'good' | 'needs-improvement' | 'poor'
    delta: number
    id: string
    entries: PerformanceEntry[]
  }

  // Performance thresholds based on Web Vitals
  const THRESHOLDS = {
    CLS: { good: 0.1, poor: 0.25 },
    FID: { good: 100, poor: 300 },
    FCP: { good: 1800, poor: 3000 },
    LCP: { good: 2500, poor: 4000 },
    TTFB: { good: 800, poor: 1800 }
  }

  // Get performance rating
  const getPerformanceRating = (name: WebVitalsMetric['name'], value: number): WebVitalsMetric['rating'] => {
    const threshold = THRESHOLDS[name]
    if (value <= threshold.good) return 'good'
    if (value <= threshold.poor) return 'needs-improvement'
    return 'poor'
  }

  // Track metric to analytics
  const trackMetric = (metric: WebVitalsMetric) => {
    const { trackPerformance } = useAnalytics()
    
    // Track to Google Analytics
    trackPerformance(metric.name, metric.value, 'ms')
    
    // Also track rating
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metric.name,
        value: Math.round(metric.value),
        custom_parameters: {
          metric_name: metric.name,
          metric_value: metric.value,
          metric_rating: metric.rating,
          metric_id: metric.id,
          page_path: window.location.pathname,
          timestamp: new Date().toISOString()
        }
      })
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Web Vitals - ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        threshold: THRESHOLDS[metric.name]
      })
    }
  }

  // CLS (Cumulative Layout Shift) monitoring
  const monitorCLS = () => {
    let clsValue = 0
    let clsEntries: PerformanceEntry[] = []

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Only count layout shifts without recent user input
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
          clsEntries.push(entry)
        }
      }
    })

    observer.observe({ type: 'layout-shift', buffered: true })

    // Report CLS when page visibility changes or unloads
    const reportCLS = () => {
      if (clsValue > 0) {
        trackMetric({
          name: 'CLS',
          value: clsValue,
          rating: getPerformanceRating('CLS', clsValue),
          delta: clsValue,
          id: 'cls_' + Date.now(),
          entries: clsEntries
        })
      }
    }

    document.addEventListener('visibilitychange', reportCLS)
    window.addEventListener('beforeunload', reportCLS)
  }

  // FID (First Input Delay) monitoring
  const monitorFID = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime
        trackMetric({
          name: 'FID',
          value: fid,
          rating: getPerformanceRating('FID', fid),
          delta: fid,
          id: 'fid_' + Date.now(),
          entries: [entry]
        })
      }
    })

    observer.observe({ type: 'first-input', buffered: true })
  }

  // LCP (Largest Contentful Paint) monitoring
  const monitorLCP = () => {
    let lcpValue = 0
    let lcpEntries: PerformanceEntry[] = []

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      
      lcpValue = lastEntry.startTime
      lcpEntries = [lastEntry]
    })

    observer.observe({ type: 'largest-contentful-paint', buffered: true })

    // Report LCP when page becomes hidden
    const reportLCP = () => {
      if (lcpValue > 0) {
        trackMetric({
          name: 'LCP',
          value: lcpValue,
          rating: getPerformanceRating('LCP', lcpValue),
          delta: lcpValue,
          id: 'lcp_' + Date.now(),
          entries: lcpEntries
        })
      }
    }

    document.addEventListener('visibilitychange', reportLCP)
    window.addEventListener('beforeunload', reportLCP)
  }

  // FCP (First Contentful Paint) monitoring
  const monitorFCP = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          trackMetric({
            name: 'FCP',
            value: entry.startTime,
            rating: getPerformanceRating('FCP', entry.startTime),
            delta: entry.startTime,
            id: 'fcp_' + Date.now(),
            entries: [entry]
          })
        }
      }
    })

    observer.observe({ type: 'paint', buffered: true })
  }

  // TTFB (Time to First Byte) monitoring
  const monitorTTFB = () => {
    const navigationEntries = performance.getEntriesByType('navigation')
    if (navigationEntries.length > 0) {
      const navigation = navigationEntries[0] as PerformanceNavigationTiming
      const ttfb = navigation.responseStart - navigation.requestStart

      trackMetric({
        name: 'TTFB',
        value: ttfb,
        rating: getPerformanceRating('TTFB', ttfb),
        delta: ttfb,
        id: 'ttfb_' + Date.now(),
        entries: [navigation]
      })
    }
  }

  // Monitor custom metrics
  const monitorCustomMetrics = () => {
    // Page Load Time
    window.addEventListener('load', () => {
      const loadTime = performance.now()
      if (window.gtag) {
        // @ts-ignore
        window.gtag('event', 'page_load_time', {
          event_category: 'Performance',
          value: Math.round(loadTime),
          custom_parameters: {
            load_time: loadTime,
            page_path: window.location.pathname
          }
        })
      }
    })

    // DOM Content Loaded
    document.addEventListener('DOMContentLoaded', () => {
      const domTime = performance.now()
      if (window.gtag) {
        // @ts-ignore
        window.gtag('event', 'dom_content_loaded', {
          event_category: 'Performance',
          value: Math.round(domTime),
          custom_parameters: {
            dom_time: domTime,
            page_path: window.location.pathname
          }
        })
      }
    })

    // Resource Timing
    const trackResourceTiming = () => {
      const resources = performance.getEntriesByType('resource')
      let totalResourceSize = 0
      let slowResources = 0

      resources.forEach((resource) => {
        const resourceTiming = resource as PerformanceResourceTiming
        totalResourceSize += resourceTiming.transferSize || 0
        
        // Track slow resources (>1s)
        if (resourceTiming.duration > 1000) {
          slowResources++
        }
      })

      if (window.gtag) {
        // @ts-ignore
        window.gtag('event', 'resource_timing', {
          event_category: 'Performance',
          custom_parameters: {
            total_resources: resources.length,
            total_size: totalResourceSize,
            slow_resources: slowResources,
            page_path: window.location.pathname
          }
        })
      }
    }

    // Track resource timing after page load
    window.addEventListener('load', () => {
      setTimeout(trackResourceTiming, 1000)
    })
  }

  // Initialize all monitoring
  const initializeWebVitals = () => {
    try {
      // Core Web Vitals
      monitorCLS()
      monitorFID()
      monitorLCP()
      monitorFCP()
      monitorTTFB()
      
      // Custom metrics
      monitorCustomMetrics()
      
      console.log('📊 Web Vitals monitoring initialized')
    } catch (error) {
      console.error('Failed to initialize Web Vitals monitoring:', error)
    }
  }

  // Wait for page to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebVitals)
  } else {
    // Page is already loaded
    setTimeout(initializeWebVitals, 100)
  }
})