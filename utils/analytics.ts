// Google Analytics 4 Utilities
// Author: Claude AI Assistant
// Date: 2025-07-01
// Description: Comprehensive analytics tracking utilities for NO TRACE EXPLORER

// Analytics event interfaces
export interface GAEvent {
  event_name: string
  event_category?: string
  event_label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

export interface PageViewEvent {
  page_title: string
  page_location: string
  page_path: string
  content_group1?: string // Business category (coffee, exhibition, lab, etc.)
  content_group2?: string // Page type (home, about, contact, etc.)
}

export interface UserEngagementEvent {
  engagement_time_msec: number
  session_id?: string
  user_id?: string
}

export interface PWAEvent {
  event_category: 'PWA'
  event_label: string
  value?: number
}

// Main analytics class
export class Analytics {
  private static isEnabled(): boolean {
    return process.client && typeof window !== 'undefined' && 'gtag' in window
  }

  private static gtag(...args: any[]): void {
    if (this.isEnabled()) {
      // @ts-ignore
      window.gtag(...args)
    } else {
      console.log('📊 Analytics (dev mode):', args)
    }
  }

  // Page tracking
  static trackPageView(data: Partial<PageViewEvent>): void {
    const route = useRoute()
    
    const pageData: PageViewEvent = {
      page_title: document.title || 'NO TRACE EXPLORER',
      page_location: window.location.href,
      page_path: route.path,
      content_group1: this.getBusinessCategory(route.path),
      content_group2: this.getPageType(route.path),
      ...data
    }

    this.gtag('event', 'page_view', pageData)
    
    // Custom event for Japanese website analytics
    this.gtag('event', 'japanese_page_view', {
      event_category: 'Navigation',
      event_label: route.path,
      page_language: 'ja',
      custom_parameters: {
        business_category: pageData.content_group1,
        page_type: pageData.content_group2
      }
    })
  }

  // Business-specific tracking
  static trackBusinessInteraction(category: string, action: string, label?: string): void {
    this.gtag('event', 'business_interaction', {
      event_category: category,
      event_label: label,
      custom_parameters: {
        interaction_type: action,
        business_domain: category.toLowerCase(),
        timestamp: new Date().toISOString()
      }
    })
  }

  // Service showcase interactions
  static trackServiceShowcase(serviceName: string, action: 'hover' | 'click' | 'view'): void {
    this.gtag('event', 'service_showcase_interaction', {
      event_category: 'Service Showcase',
      event_label: serviceName,
      custom_parameters: {
        action_type: action,
        service_category: serviceName.split('|')[0].trim(),
        interaction_method: action
      }
    })
  }

  // Article and content tracking
  static trackArticleEngagement(articleId: string, action: 'view' | 'read' | 'share'): void {
    this.gtag('event', 'article_engagement', {
      event_category: 'Content',
      event_label: `Article ${articleId}`,
      custom_parameters: {
        content_id: articleId,
        engagement_type: action,
        content_type: 'article'
      }
    })
  }

  // PWA specific tracking
  static trackPWAEvent(eventType: 'install_prompt' | 'install_accepted' | 'install_dismissed' | 'update_available' | 'offline_usage'): void {
    this.gtag('event', 'pwa_interaction', {
      event_category: 'PWA',
      event_label: eventType,
      custom_parameters: {
        pwa_event_type: eventType,
        app_name: 'NO TRACE EXPLORER',
        timestamp: new Date().toISOString()
      }
    })
  }

  // Contact form tracking
  static trackContactForm(action: 'start' | 'submit' | 'error', formType?: string): void {
    this.gtag('event', 'contact_form_interaction', {
      event_category: 'Contact',
      event_label: `${formType || 'contact'}_form_${action}`,
      custom_parameters: {
        form_type: formType || 'contact',
        action_type: action
      }
    })
  }

  // Search tracking (for future implementation)
  static trackSiteSearch(searchTerm: string, resultsCount?: number): void {
    this.gtag('event', 'search', {
      search_term: searchTerm,
      event_category: 'Site Search',
      custom_parameters: {
        search_results_count: resultsCount || 0,
        search_language: 'ja'
      }
    })
  }

  // Performance tracking
  static trackPerformance(metricName: string, value: number, unit: string): void {
    this.gtag('event', 'performance_metric', {
      event_category: 'Performance',
      event_label: metricName,
      value: Math.round(value),
      custom_parameters: {
        metric_name: metricName,
        metric_value: value,
        metric_unit: unit
      }
    })
  }

  // User engagement tracking
  static trackUserEngagement(engagementTime: number): void {
    this.gtag('event', 'user_engagement', {
      engagement_time_msec: engagementTime,
      event_category: 'Engagement',
      custom_parameters: {
        session_duration: engagementTime,
        engagement_level: this.getEngagementLevel(engagementTime)
      }
    })
  }

  // Error tracking
  static trackError(errorType: string, errorMessage: string, errorLocation?: string): void {
    this.gtag('event', 'exception', {
      description: errorMessage,
      fatal: false,
      event_category: 'Error',
      event_label: errorType,
      custom_parameters: {
        error_type: errorType,
        error_location: errorLocation || 'unknown',
        error_timestamp: new Date().toISOString()
      }
    })
  }

  // Conversion tracking
  static trackConversion(conversionType: string, value?: number): void {
    this.gtag('event', 'conversion', {
      event_category: 'Conversion',
      event_label: conversionType,
      value: value || 1,
      custom_parameters: {
        conversion_type: conversionType,
        conversion_value: value || 1
      }
    })
  }

  // Helper methods
  private static getBusinessCategory(path: string): string {
    if (path.includes('coffee')) return 'Coffee'
    if (path.includes('exhibition')) return 'Exhibition'
    if (path.includes('lab')) return 'Lab'
    if (path.includes('club')) return 'Club'
    if (path.includes('about')) return 'About'
    if (path.includes('contact')) return 'Contact'
    if (path === '/') return 'Home'
    return 'Other'
  }

  private static getPageType(path: string): string {
    if (path === '/') return 'homepage'
    if (path.includes('about')) return 'company_info'
    if (path.includes('contact')) return 'contact'
    if (path.includes('coffee') || path.includes('exhibition') || path.includes('lab') || path.includes('club')) {
      return 'service_page'
    }
    return 'other'
  }

  private static getEngagementLevel(timeMs: number): string {
    if (timeMs < 10000) return 'low'       // < 10 seconds
    if (timeMs < 30000) return 'medium'    // < 30 seconds
    if (timeMs < 120000) return 'high'     // < 2 minutes
    return 'very_high'                     // > 2 minutes
  }
}

// Helper methods for direct usage (when not using composable)
export const analyticsHelpers = {
  trackPageView: Analytics.trackPageView,
  trackBusinessInteraction: Analytics.trackBusinessInteraction,
  trackServiceShowcase: Analytics.trackServiceShowcase,
  trackArticleEngagement: Analytics.trackArticleEngagement,
  trackPWAEvent: Analytics.trackPWAEvent,
  trackContactForm: Analytics.trackContactForm,
  trackSiteSearch: Analytics.trackSiteSearch,
  trackPerformance: Analytics.trackPerformance,
  trackUserEngagement: Analytics.trackUserEngagement,
  trackError: Analytics.trackError,
  trackConversion: Analytics.trackConversion
}

// Auto-track router navigation
export const setupAutoTracking = () => {
  const router = useRouter()
  
  router.afterEach((to) => {
    // Track page view on route change
    nextTick(() => {
      Analytics.trackPageView({
        page_path: to.path,
        page_title: document.title
      })
    })
  })
}

// Export for global access
export default Analytics