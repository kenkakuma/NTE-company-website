// Google Analytics 4 Type Definitions
// Author: Claude AI Assistant
// Date: 2025-07-01
// Description: TypeScript interfaces for Google Analytics 4 implementation

// Global gtag interface
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// GA4 Event types
export interface BaseEvent {
  event_category?: string
  event_label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

export interface PageViewEvent extends BaseEvent {
  page_title: string
  page_location: string
  page_path: string
  content_group1?: string // Business category
  content_group2?: string // Page type
  content_group3?: string // User segment
}

export interface BusinessInteractionEvent extends BaseEvent {
  interaction_type: string
  business_domain: string
  service_name?: string
  interaction_method?: 'hover' | 'click' | 'scroll' | 'view'
}

export interface ServiceShowcaseEvent extends BaseEvent {
  service_name: string
  service_category: string
  action_type: 'hover' | 'click' | 'view' | 'image_change'
  interaction_duration?: number
}

export interface ArticleEvent extends BaseEvent {
  article_id: string
  article_title: string
  article_category: string
  engagement_type: 'view' | 'read' | 'share' | 'comment'
  read_progress?: number // 0-100 percentage
}

export interface PWAEvent extends BaseEvent {
  pwa_event_type: 'install_prompt' | 'install_accepted' | 'install_dismissed' | 'update_available' | 'offline_usage' | 'app_launch'
  app_name: string
  installation_source?: 'banner' | 'menu' | 'shortcut'
}

export interface PerformanceEvent extends BaseEvent {
  metric_name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'custom'
  metric_value: number
  metric_unit: 'ms' | 'score' | 'bytes'
  performance_category?: 'core_web_vitals' | 'custom_metrics'
}

export interface ErrorEvent extends BaseEvent {
  error_type: 'javascript' | 'network' | 'pwa' | 'form' | 'api'
  error_message: string
  error_location: string
  error_stack?: string
  is_fatal: boolean
}

export interface ConversionEvent extends BaseEvent {
  conversion_type: 'contact_form' | 'newsletter_signup' | 'pwa_install' | 'service_inquiry' | 'article_share'
  conversion_value?: number
  currency?: string
}

export interface UserEngagementEvent extends BaseEvent {
  engagement_time_msec: number
  session_id?: string
  page_path: string
  engagement_level: 'low' | 'medium' | 'high' | 'very_high'
}

// Configuration interfaces
export interface AnalyticsConfig {
  measurement_id: string
  debug_mode: boolean
  anonymize_ip: boolean
  cookie_consent: boolean
  enhanced_measurements: {
    scrolls: boolean
    outbound_clicks: boolean
    site_search: boolean
    video_engagement: boolean
    file_downloads: boolean
  }
  custom_dimensions: Record<string, string>
}

export interface ConsentSettings {
  analytics_storage: 'granted' | 'denied'
  ad_storage: 'granted' | 'denied'
  functionality_storage: 'granted' | 'denied'
  personalization_storage: 'granted' | 'denied'
  security_storage: 'granted' | 'denied'
}

// Business-specific event types for NO TRACE EXPLORER
export interface CoffeeBusinessEvent extends BaseEvent {
  coffee_interaction_type: 'product_view' | 'brewing_guide' | 'origin_info' | 'purchase_intent'
  coffee_product?: string
  brewing_method?: string
}

export interface ExhibitionEvent extends BaseEvent {
  exhibition_type: 'art' | 'culture' | 'technology' | 'corporate'
  event_name?: string
  venue_info?: string
  participation_level: 'viewing' | 'participating' | 'organizing'
}

export interface LabEvent extends BaseEvent {
  research_category: 'fishing' | 'skiing' | 'golf' | 'general_sports' | 'innovation'
  experiment_type?: string
  technology_focus?: string
}

export interface ClubEvent extends BaseEvent {
  club_activity: 'coffee_tasting' | 'outdoor_sports' | 'cultural_events' | 'networking'
  membership_interest?: boolean
  event_participation?: boolean
}

// Analytics state management
export interface AnalyticsState {
  isInitialized: boolean
  isEnabled: boolean
  sessionId: string
  userId: string | undefined
  consentSettings: ConsentSettings
  lastEventTimestamp: number
}

// Event tracking methods interface
export interface AnalyticsTracker {
  // Core tracking methods
  trackPageView: (event: Partial<PageViewEvent>) => void
  trackEvent: (eventName: string, parameters?: BaseEvent) => void
  
  // Business-specific tracking
  trackBusinessInteraction: (category: string, action: string, label?: string) => void
  trackServiceShowcase: (serviceName: string, action: 'hover' | 'click' | 'view') => void
  trackArticleEngagement: (articleId: string, action: 'view' | 'read' | 'share') => void
  
  // Technical tracking
  trackPWAEvent: (eventType: PWAEvent['pwa_event_type']) => void
  trackPerformance: (metricName: string, value: number, unit: string) => void
  trackError: (errorType: string, errorMessage: string, errorLocation?: string) => void
  
  // Conversion tracking
  trackConversion: (conversionType: string, value?: number) => void
  trackUserEngagement: (engagementTime: number) => void
  
  // Utility methods
  setUserId: (userId: string) => void
  setUserProperties: (properties: Record<string, any>) => void
  updateConsent: (consentSettings: Partial<ConsentSettings>) => void
}

export default {}