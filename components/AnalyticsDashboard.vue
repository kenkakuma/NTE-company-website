<!-- Analytics Dashboard Component -->
<!-- Author: Claude AI Assistant -->
<!-- Date: 2025-07-01 -->
<!-- Description: Comprehensive analytics dashboard for NO TRACE EXPLORER -->

<template>
  <v-container fluid class="analytics-dashboard">
    <!-- Dashboard Header -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card class="pa-6" elevation="2">
          <v-row align="center">
            <v-col cols="auto">
              <v-avatar color="primary" size="64">
                <v-icon icon="mdi-chart-line" size="32" color="white" />
              </v-avatar>
            </v-col>
            <v-col>
              <h2 class="text-h4 mb-2">Analytics Dashboard</h2>
              <p class="text-body-1 text-grey-darken-1 mb-2">
                NO TRACE EXPLORER Website Performance & User Behavior
              </p>
              <v-chip
                :color="analyticsState.isEnabled ? 'success' : 'warning'"
                size="small"
                variant="flat"
              >
                <v-icon 
                  :icon="analyticsState.isEnabled ? 'mdi-check-circle' : 'mdi-alert-circle'" 
                  start 
                  size="small" 
                />
                {{ analyticsState.isEnabled ? 'Analytics Active' : 'Analytics Disabled' }}
              </v-chip>
            </v-col>
            <v-col cols="auto">
              <v-btn
                v-if="!analyticsState.isEnabled"
                color="primary"
                @click="enableAnalytics"
              >
                Enable Analytics
              </v-btn>
              <v-btn
                v-else
                variant="outlined"
                @click="refreshDashboard"
              >
                <v-icon icon="mdi-refresh" start />
                Refresh
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Web Vitals Metrics -->
    <v-row class="mb-6">
      <v-col cols="12">
        <h3 class="text-h5 mb-4">Core Web Vitals</h3>
      </v-col>
      
      <v-col
        v-for="metric in webVitalsMetrics"
        :key="metric.name"
        cols="12"
        sm="6"
        lg="2.4"
      >
        <v-card class="text-center pa-4" elevation="1">
          <v-avatar
            :color="getMetricColor(metric.rating)"
            size="48"
            class="mb-3"
          >
            <v-icon :icon="metric.icon" color="white" />
          </v-avatar>
          
          <h4 class="text-h6 mb-1">{{ metric.name }}</h4>
          <p class="text-h4 mb-1" :class="getMetricColor(metric.rating) + '--text'">
            {{ formatMetricValue(metric.value, metric.unit) }}
          </p>
          <v-chip
            :color="getMetricColor(metric.rating)"
            size="x-small"
            variant="flat"
          >
            {{ metric.rating.replace('-', ' ') }}
          </v-chip>
          
          <p class="text-caption text-grey-darken-1 mt-2">
            {{ metric.description }}
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Business Metrics -->
    <v-row class="mb-6">
      <v-col cols="12">
        <h3 class="text-h5 mb-4">Business Performance</h3>
      </v-col>
      
      <v-col
        v-for="metric in businessMetrics"
        :key="metric.name"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card class="pa-4" elevation="1">
          <v-row align="center" no-gutters>
            <v-col cols="auto" class="mr-3">
              <v-avatar :color="metric.color" size="40">
                <v-icon :icon="metric.icon" color="white" size="20" />
              </v-avatar>
            </v-col>
            <v-col>
              <h4 class="text-subtitle-2 text-grey-darken-1">{{ metric.name }}</h4>
              <p class="text-h5 mb-0">{{ metric.value }}</p>
              <div class="d-flex align-center">
                <v-icon
                  :icon="metric.trend === 'up' ? 'mdi-trending-up' : 'mdi-trending-down'"
                  :color="metric.trend === 'up' ? 'success' : 'error'"
                  size="small"
                  class="mr-1"
                />
                <span class="text-caption" :class="metric.trend === 'up' ? 'text-success' : 'text-error'">
                  {{ metric.change }}
                </span>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- User Behavior Analytics -->
    <v-row class="mb-6">
      <v-col cols="12" md="8">
        <v-card class="pa-4" elevation="1">
          <h4 class="text-h6 mb-4">Page Performance Overview</h4>
          
          <v-data-table
            :headers="pageHeaders"
            :items="pagePerformance"
            class="elevation-0"
            density="compact"
          >
            <template #item.page="{ item }">
              <div class="d-flex align-center">
                <v-icon :icon="getPageIcon(item.page)" size="small" class="mr-2" />
                {{ item.page }}
              </div>
            </template>
            
            <template #item.loadTime="{ item }">
              <v-chip
                :color="getLoadTimeColor(item.loadTime)"
                size="x-small"
                variant="flat"
              >
                {{ item.loadTime }}ms
              </v-chip>
            </template>
            
            <template #item.visitors="{ item }">
              <div class="d-flex align-center">
                <v-progress-linear
                  :model-value="(item.visitors / Math.max(...pagePerformance.map(p => p.visitors))) * 100"
                  color="primary"
                  height="4"
                  class="mr-2"
                  style="min-width: 60px;"
                />
                {{ item.visitors }}
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      
      <v-col cols="12" md="4">
        <v-card class="pa-4" elevation="1">
          <h4 class="text-h6 mb-4">Real-Time Analytics</h4>
          
          <div class="text-center mb-4">
            <v-avatar color="success" size="80" class="mb-3">
              <span class="text-h4 text-white">{{ onlineUsers }}</span>
            </v-avatar>
            <p class="text-body-2 text-grey-darken-1">Active Users</p>
          </div>
          
          <v-divider class="my-4" />
          
          <div class="analytics-stats">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-body-2">Session Duration</span>
              <strong>{{ avgSessionDuration }}</strong>
            </div>
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-body-2">Bounce Rate</span>
              <strong class="text-error">{{ bounceRate }}%</strong>
            </div>
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-body-2">Page Views</span>
              <strong>{{ totalPageViews }}</strong>
            </div>
            <div class="d-flex justify-space-between align-center">
              <span class="text-body-2">Conversion Rate</span>
              <strong class="text-success">{{ conversionRate }}%</strong>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- PWA Analytics -->
    <v-row v-if="pwaMetrics.installPrompts > 0">
      <v-col cols="12">
        <v-card class="pa-4" elevation="1">
          <h4 class="text-h6 mb-4">PWA Performance</h4>
          
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <div class="text-center">
                <v-icon icon="mdi-cellphone-arrow-down" size="32" color="primary" class="mb-2" />
                <p class="text-h6 mb-1">{{ pwaMetrics.installPrompts }}</p>
                <p class="text-caption text-grey-darken-1">Install Prompts</p>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-center">
                <v-icon icon="mdi-check-circle" size="32" color="success" class="mb-2" />
                <p class="text-h6 mb-1">{{ pwaMetrics.installations }}</p>
                <p class="text-caption text-grey-darken-1">Installations</p>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-center">
                <v-icon icon="mdi-wifi-off" size="32" color="orange" class="mb-2" />
                <p class="text-h6 mb-1">{{ pwaMetrics.offlineUsage }}</p>
                <p class="text-caption text-grey-darken-1">Offline Sessions</p>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <div class="text-center">
                <v-icon icon="mdi-percent" size="32" color="info" class="mb-2" />
                <p class="text-h6 mb-1">{{ pwaMetrics.conversionRate }}%</p>
                <p class="text-caption text-grey-darken-1">Install Rate</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Analytics integration
const {
  analyticsState,
  grantConsent,
  trackBusinessInteraction
} = useAnalytics()

// Mock data for demonstration (in real app, this would come from Analytics API)
const webVitalsMetrics = ref([
  {
    name: 'LCP',
    value: 1.8,
    unit: 's',
    rating: 'good',
    icon: 'mdi-speedometer',
    description: 'Largest Contentful Paint'
  },
  {
    name: 'FID',
    value: 85,
    unit: 'ms',
    rating: 'good',
    icon: 'mdi-cursor-default-click',
    description: 'First Input Delay'
  },
  {
    name: 'CLS',
    value: 0.08,
    unit: '',
    rating: 'good',
    icon: 'mdi-page-layout-body',
    description: 'Cumulative Layout Shift'
  },
  {
    name: 'FCP',
    value: 1.2,
    unit: 's',
    rating: 'good',
    icon: 'mdi-eye',
    description: 'First Contentful Paint'
  },
  {
    name: 'TTFB',
    value: 650,
    unit: 'ms',
    rating: 'good',
    icon: 'mdi-flash',
    description: 'Time to First Byte'
  }
])

const businessMetrics = ref([
  {
    name: 'Page Views',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    color: 'primary',
    icon: 'mdi-eye'
  },
  {
    name: 'Unique Users',
    value: '1,256',
    change: '+8.3%',
    trend: 'up',
    color: 'success',
    icon: 'mdi-account'
  },
  {
    name: 'Avg. Session',
    value: '3m 42s',
    change: '+15.2%',
    trend: 'up',
    color: 'info',
    icon: 'mdi-clock'
  },
  {
    name: 'Bounce Rate',
    value: '34.2%',
    change: '-5.1%',
    trend: 'up',
    color: 'warning',
    icon: 'mdi-exit-to-app'
  }
])

const pagePerformance = ref([
  { page: 'Home', loadTime: 1200, visitors: 1250, score: 96 },
  { page: 'Coffee', loadTime: 980, visitors: 340, score: 98 },
  { page: 'Exhibition', loadTime: 1450, visitors: 180, score: 92 },
  { page: 'Lab', loadTime: 1100, visitors: 95, score: 94 },
  { page: 'Club', loadTime: 890, visitors: 75, score: 99 },
  { page: 'About', loadTime: 750, visitors: 420, score: 97 },
  { page: 'Contact', loadTime: 680, visitors: 145, score: 98 }
])

const pageHeaders = [
  { title: 'Page', value: 'page', sortable: true },
  { title: 'Load Time', value: 'loadTime', sortable: true },
  { title: 'Visitors', value: 'visitors', sortable: true },
  { title: 'Score', value: 'score', sortable: true }
]

// Real-time metrics
const onlineUsers = ref(7)
const avgSessionDuration = ref('3m 42s')
const bounceRate = ref(34.2)
const totalPageViews = ref(2847)
const conversionRate = ref(4.2)

// PWA metrics
const pwaMetrics = ref({
  installPrompts: 45,
  installations: 12,
  offlineUsage: 8,
  conversionRate: 26.7
})

// Methods
const enableAnalytics = () => {
  grantConsent()
  trackBusinessInteraction('Dashboard', 'enable_analytics', 'Analytics Dashboard')
}

const refreshDashboard = () => {
  trackBusinessInteraction('Dashboard', 'refresh_dashboard', 'Analytics Dashboard')
  // In real app, this would refresh data from analytics API
}

const getMetricColor = (rating: string): string => {
  switch (rating) {
    case 'good': return 'success'
    case 'needs-improvement': return 'warning'
    case 'poor': return 'error'
    default: return 'grey'
  }
}

const getLoadTimeColor = (loadTime: number): string => {
  if (loadTime < 1000) return 'success'
  if (loadTime < 1500) return 'warning'
  return 'error'
}

const getPageIcon = (page: string): string => {
  const icons: Record<string, string> = {
    'Home': 'mdi-home',
    'Coffee': 'mdi-coffee',
    'Exhibition': 'mdi-calendar-star',
    'Lab': 'mdi-flask',
    'Club': 'mdi-account-group',
    'About': 'mdi-information',
    'Contact': 'mdi-email'
  }
  return icons[page] || 'mdi-file'
}

const formatMetricValue = (value: number, unit: string): string => {
  if (unit === 's') return `${value.toFixed(1)}s`
  if (unit === 'ms') return `${Math.round(value)}ms`
  if (unit === '') return value.toFixed(2)
  return `${value}${unit}`
}

// Simulate real-time updates
onMounted(() => {
  trackBusinessInteraction('Dashboard', 'view_dashboard', 'Analytics Dashboard')
  
  // Simulate real-time data updates
  setInterval(() => {
    onlineUsers.value = Math.floor(Math.random() * 15) + 3
  }, 10000)
})
</script>

<style scoped>
.analytics-dashboard {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.analytics-stats .v-divider {
  margin: 1rem 0;
}

/* Smooth animations */
.v-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* Progress bars */
.v-progress-linear {
  border-radius: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .analytics-dashboard {
    padding: 1rem 0;
  }
}
</style>