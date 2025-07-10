// Analytics Composable for Nuxt 3
// Author: Claude AI Assistant
// Date: 2025-07-01
// Description: Vue composable for Google Analytics 4 with NO TRACE EXPLORER specific tracking

import type { 
  PageViewEvent, 
  ConsentSettings,
  AnalyticsState 
} from '~/types/analytics'

export const useAnalytics = () => {
  // Reactive state for analytics
  const analyticsState = reactive<AnalyticsState>({
    isInitialized: false,
    isEnabled: false,
    sessionId: '',
    userId: undefined,
    consentSettings: {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted'
    },
    lastEventTimestamp: 0
  })

  // Check if analytics is available
  const isAnalyticsAvailable = computed(() => {
    return process.client && 
           typeof window !== 'undefined' && 
           'gtag' in window &&
           analyticsState.isEnabled
  })

  // Initialize analytics
  const initializeAnalytics = () => {
    if (!process.client) return

    // Generate session ID
    analyticsState.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    // Check for consent from localStorage
    const savedConsent = localStorage.getItem('analytics_consent')
    if (savedConsent) {
      try {
        const consent = JSON.parse(savedConsent)
        analyticsState.consentSettings = { ...analyticsState.consentSettings, ...consent }
        analyticsState.isEnabled = consent.analytics_storage === 'granted'
      } catch (error) {
        console.warn('Failed to parse saved consent settings')
      }
    }

    analyticsState.isInitialized = true
    
    if (analyticsState.isEnabled) {
      console.log('📊 Analytics initialized with consent')
    } else {
      console.log('📊 Analytics initialized but consent required')
    }
  }

  // Grant consent and enable analytics
  const grantConsent = (consentSettings?: Partial<ConsentSettings>) => {
    const newConsent = {
      ...analyticsState.consentSettings,
      analytics_storage: 'granted' as const,
      ...consentSettings
    }

    analyticsState.consentSettings = newConsent
    analyticsState.isEnabled = true

    // Save to localStorage
    if (process.client) {
      localStorage.setItem('analytics_consent', JSON.stringify(newConsent))
      
      // Update Google Analytics consent
      if ('gtag' in window) {
        // @ts-ignore
        window.gtag('consent', 'update', newConsent)
      }
    }

    console.log('📊 Analytics consent granted')
  }

  // Deny consent and disable analytics
  const denyConsent = () => {
    analyticsState.consentSettings.analytics_storage = 'denied'
    analyticsState.isEnabled = false

    if (process.client) {
      localStorage.setItem('analytics_consent', JSON.stringify(analyticsState.consentSettings))
      
      if ('gtag' in window) {
        // @ts-ignore
        window.gtag('consent', 'update', analyticsState.consentSettings)
      }
    }

    console.log('📊 Analytics consent denied')
  }

  // Core tracking function
  const gtag = (...args: any[]) => {
    if (!isAnalyticsAvailable.value) {
      // Log in development mode
      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Analytics (dev mode):', args)
      }
      return
    }

    // @ts-ignore
    window.gtag(...args)
    analyticsState.lastEventTimestamp = Date.now()
  }

  // Page view tracking
  const trackPageView = (customData?: Partial<PageViewEvent>) => {
    // SSR安全的路由获取
    const route = process.client ? useRoute() : { path: '/' }
    
    const pageData: PageViewEvent = {
      page_title: process.client ? (document?.title || 'NO TRACE EXPLORER') : 'NO TRACE EXPLORER',
      page_location: process.client ? (window?.location?.href || '') : '',
      page_path: route.path,
      content_group1: getBusinessCategory(route.path),
      content_group2: getPageType(route.path),
      event_category: 'Page View',
      custom_parameters: {
        session_id: analyticsState.sessionId,
        page_language: 'ja',
        timestamp: new Date().toISOString()
      },
      ...customData
    }

    gtag('event', 'page_view', pageData)

    // Custom Japanese website tracking
    gtag('event', 'japanese_site_navigation', {
      event_category: 'Navigation',
      event_label: route.path,
      custom_parameters: {
        business_category: pageData.content_group1,
        page_type: pageData.content_group2,
        session_id: analyticsState.sessionId
      }
    })
  }

  // Business interaction tracking
  const trackBusinessInteraction = (category: string, action: string, label?: string) => {
    gtag('event', 'business_interaction', {
      event_category: category,
      event_label: label,
      custom_parameters: {
        interaction_type: action,
        business_domain: category.toLowerCase(),
        session_id: analyticsState.sessionId,
        timestamp: new Date().toISOString()
      }
    })
  }

  // Service showcase specific tracking
  const trackServiceShowcase = (serviceName: string, action: 'hover' | 'click' | 'view') => {
    const serviceCategory = serviceName.split('|')[0]?.trim() || 'Unknown'
    
    gtag('event', 'service_showcase_interaction', {
      event_category: 'Service Showcase',
      event_label: serviceName,
      custom_parameters: {
        action_type: action,
        service_category: serviceCategory,
        service_full_name: serviceName,
        interaction_method: action,
        session_id: analyticsState.sessionId
      }
    })
  }

  // Article engagement tracking
  const trackArticleEngagement = (articleId: string, action: 'view' | 'read' | 'share', progress?: number) => {
    gtag('event', 'article_engagement', {
      event_category: 'Content',
      event_label: `Article ${articleId}`,
      custom_parameters: {
        content_id: articleId,
        engagement_type: action,
        content_type: 'article',
        read_progress: progress || 0,
        session_id: analyticsState.sessionId
      }
    })
  }

  // PWA event tracking
  const trackPWAEvent = (eventType: string, details?: Record<string, any>) => {
    gtag('event', 'pwa_interaction', {
      event_category: 'PWA',
      event_label: eventType,
      custom_parameters: {
        pwa_event_type: eventType,
        app_name: 'NO TRACE EXPLORER',
        session_id: analyticsState.sessionId,
        timestamp: new Date().toISOString(),
        ...details
      }
    })
  }

  // Performance tracking
  const trackPerformance = (metricName: string, value: number, unit: string) => {
    gtag('event', 'performance_metric', {
      event_category: 'Performance',
      event_label: metricName,
      value: Math.round(value),
      custom_parameters: {
        metric_name: metricName,
        metric_value: value,
        metric_unit: unit,
        session_id: analyticsState.sessionId
      }
    })
  }

  // Error tracking
  const trackError = (errorType: string, errorMessage: string, errorLocation?: string) => {
    gtag('event', 'exception', {
      description: errorMessage,
      fatal: false,
      event_category: 'Error',
      event_label: errorType,
      custom_parameters: {
        error_type: errorType,
        error_location: errorLocation || 'unknown',
        error_timestamp: new Date().toISOString(),
        session_id: analyticsState.sessionId
      }
    })
  }

  // Conversion tracking
  const trackConversion = (conversionType: string, value?: number) => {
    gtag('event', 'conversion', {
      event_category: 'Conversion',
      event_label: conversionType,
      value: value || 1,
      custom_parameters: {
        conversion_type: conversionType,
        conversion_value: value || 1,
        session_id: analyticsState.sessionId
      }
    })
  }

  // User engagement tracking
  const trackUserEngagement = (engagementTime: number) => {
    gtag('event', 'user_engagement', {
      engagement_time_msec: engagementTime,
      event_category: 'Engagement',
      custom_parameters: {
        session_duration: engagementTime,
        engagement_level: getEngagementLevel(engagementTime),
        session_id: analyticsState.sessionId
      }
    })
  }

  // Contact form tracking
  const trackContactForm = (action: 'start' | 'submit' | 'error', formType?: string) => {
    gtag('event', 'contact_form_interaction', {
      event_category: 'Contact',
      event_label: `${formType || 'contact'}_form_${action}`,
      custom_parameters: {
        form_type: formType || 'contact',
        action_type: action,
        session_id: analyticsState.sessionId
      }
    })
  }

  // Set user ID
  const setUserId = (userId: string) => {
    analyticsState.userId = userId
    gtag('config', 'GA_MEASUREMENT_ID', {
      user_id: userId
    })
  }

  // Set user properties
  const setUserProperties = (properties: Record<string, any>) => {
    gtag('set', 'user_properties', {
      ...properties,
      session_id: analyticsState.sessionId
    })
  }

  // Helper functions
  const getBusinessCategory = (path: string): string => {
    if (path.includes('coffee')) return 'Coffee'
    if (path.includes('exhibition')) return 'Exhibition'
    if (path.includes('lab')) return 'Lab'
    if (path.includes('club')) return 'Club'
    if (path.includes('about')) return 'About'
    if (path.includes('contact')) return 'Contact'
    if (path === '/') return 'Home'
    return 'Other'
  }

  const getPageType = (path: string): string => {
    if (path === '/') return 'homepage'
    if (path.includes('about')) return 'company_info'
    if (path.includes('contact')) return 'contact'
    if (path.includes('coffee') || path.includes('exhibition') || path.includes('lab') || path.includes('club')) {
      return 'service_page'
    }
    return 'other'
  }

  const getEngagementLevel = (timeMs: number): string => {
    if (timeMs < 10000) return 'low'       // < 10 seconds
    if (timeMs < 30000) return 'medium'    // < 30 seconds
    if (timeMs < 120000) return 'high'     // < 2 minutes
    return 'very_high'                     // > 2 minutes
  }

  // Auto-initialize when composable is used
  onMounted(() => {
    initializeAnalytics()
  })

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
  }
}