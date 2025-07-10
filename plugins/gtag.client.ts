// Google Analytics 4 Plugin for Nuxt 3
// Author: Claude AI Assistant
// Date: 2025-07-01
// Description: Google Analytics 4 integration with advanced event tracking and privacy controls

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  // Google Analytics Measurement ID from runtime config
  const GA_MEASUREMENT_ID = config.public.googleAnalyticsId
  
  // Only load in production or when explicitly enabled
  const isProduction = process.env.NODE_ENV === 'production'
  const enableInDev = process.env.GA_DEBUG === 'true'
  
  if (!isProduction && !enableInDev) {
    console.log('🔧 Google Analytics disabled in development mode')
    return
  }
  
  // Load Google Analytics script
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
        async: true
      }
    ]
  })
  
  // Initialize gtag
  if (process.client) {
    // @ts-ignore
    window.dataLayer = window.dataLayer || []
    // @ts-ignore
    function gtag(...args: any[]) {
      // @ts-ignore
      window.dataLayer.push(arguments)
    }
    
    // @ts-ignore
    window.gtag = gtag
    
    // Configure Google Analytics
    // @ts-ignore
    gtag('js', new Date())
    // @ts-ignore
    gtag('config', GA_MEASUREMENT_ID, {
      // Privacy settings
      anonymize_ip: true,
      cookie_flags: 'secure;samesite=strict',
      
      // Enhanced ecommerce and events
      send_page_view: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      
      // Custom dimensions for Japanese website
      custom_map: {
        'dimension1': 'page_language',
        'dimension2': 'user_type',
        'dimension3': 'content_category'
      },
      
      // Enhanced measurement
      enhanced_measurements: {
        scrolls: true,
        outbound_clicks: true,
        site_search: false,
        video_engagement: false,
        file_downloads: true
      }
    })
    
    // Track PWA installation events
    // @ts-ignore
    gtag('config', GA_MEASUREMENT_ID, {
      app_name: 'NO TRACE EXPLORER',
      app_version: '2.3.0'
    })
    
    console.log('📊 Google Analytics 4 initialized successfully')
  }
})