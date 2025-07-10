<!-- 数据分析组件 -->
<template>
  <div class="analytics-manager">
    <!-- 概览卡片 -->
    <div class="overview-cards">
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-card class="stat-card">
            <v-card-text>
              <div class="stat-content">
                <div class="stat-icon">
                  <v-icon size="32" color="blue">mdi-newspaper</v-icon>
                </div>
                <div class="stat-info">
                  <div class="stat-number">{{ stats.totalArticles }}</div>
                  <div class="stat-label">总文章数</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" md="3">
          <v-card class="stat-card">
            <v-card-text>
              <div class="stat-content">
                <div class="stat-icon">
                  <v-icon size="32" color="green">mdi-image</v-icon>
                </div>
                <div class="stat-info">
                  <div class="stat-number">{{ stats.totalImages }}</div>
                  <div class="stat-label">图片总数</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" md="3">
          <v-card class="stat-card">
            <v-card-text>
              <div class="stat-content">
                <div class="stat-icon">
                  <v-icon size="32" color="orange">mdi-harddisk</v-icon>
                </div>
                <div class="stat-info">
                  <div class="stat-number">{{ formatSize(stats.totalStorage) }}</div>
                  <div class="stat-label">存储使用</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" sm="6" md="3">
          <v-card class="stat-card">
            <v-card-text>
              <div class="stat-content">
                <div class="stat-icon">
                  <v-icon size="32" color="purple">mdi-clock</v-icon>
                </div>
                <div class="stat-info">
                  <div class="stat-number">{{ stats.lastUpdate }}</div>
                  <div class="stat-label">最后更新</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- 分析图表 -->
    <div class="charts-section">
      <v-row>
        <v-col cols="12" md="6">
          <v-card title="文章分类分布">
            <v-card-text>
              <div class="chart-container">
                <canvas ref="categoryChart" width="400" height="300"></canvas>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card title="图片分类统计">
            <v-card-text>
              <div class="chart-container">
                <canvas ref="imageChart" width="400" height="300"></canvas>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- 详细统计表格 -->
    <div class="details-section">
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="d-flex align-center">
              <v-icon start>mdi-newspaper</v-icon>
              文章统计详情
            </v-card-title>
            <v-card-text>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th>分类</th>
                    <th>数量</th>
                    <th>占比</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in articleStats" :key="item.category">
                    <td>
                      <v-chip :color="getCategoryColor(item.category)" size="small">
                        {{ item.category }}
                      </v-chip>
                    </td>
                    <td>{{ item.count }}</td>
                    <td>{{ item.percentage }}%</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="d-flex align-center">
              <v-icon start>mdi-image</v-icon>
              图片统计详情
            </v-card-title>
            <v-card-text>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th>分类</th>
                    <th>数量</th>
                    <th>大小</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in imageStats" :key="item.category">
                    <td>{{ item.category }}</td>
                    <td>{{ item.count }}</td>
                    <td>{{ formatSize(item.size) }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- 系统信息 -->
    <div class="system-section">
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon start>mdi-information</v-icon>
          系统使用情况
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="4">
              <div class="system-info">
                <h4>存储详情</h4>
                <p><strong>LocalStorage使用:</strong> {{ formatSize(systemInfo.storageUsed) }}</p>
                <p><strong>可用空间:</strong> {{ formatSize(systemInfo.storageAvailable) }}</p>
                <p><strong>使用率:</strong> {{ systemInfo.storagePercentage }}%</p>
              </div>
            </v-col>
            
            <v-col cols="12" md="4">
              <div class="system-info">
                <h4>浏览器信息</h4>
                <p><strong>浏览器:</strong> {{ systemInfo.browser }}</p>
                <p><strong>版本:</strong> {{ systemInfo.version }}</p>
                <p><strong>平台:</strong> {{ systemInfo.platform }}</p>
              </div>
            </v-col>
            
            <v-col cols="12" md="4">
              <div class="system-info">
                <h4>性能监控</h4>
                <p><strong>页面加载时间:</strong> {{ systemInfo.loadTime }}ms</p>
                <p><strong>内存使用:</strong> {{ systemInfo.memoryUsage }}MB</p>
                <p><strong>连接状态:</strong> 
                  <v-chip 
                    :color="systemInfo.online ? 'success' : 'error'" 
                    size="small"
                  >
                    {{ systemInfo.online ? '在线' : '离线' }}
                  </v-chip>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>

    <!-- 操作按钮 -->
    <div class="actions-section">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>数据管理操作</v-card-title>
            <v-card-text>
              <div class="action-buttons">
                <v-btn
                  color="primary"
                  prepend-icon="mdi-refresh"
                  @click="refreshData"
                  :loading="refreshing"
                >
                  刷新数据
                </v-btn>
                
                <v-btn
                  color="success"
                  prepend-icon="mdi-download"
                  @click="exportData"
                >
                  导出数据
                </v-btn>
                
                <v-btn
                  color="warning"
                  prepend-icon="mdi-broom"
                  @click="cleanupData"
                >
                  清理数据
                </v-btn>
                
                <v-btn
                  color="info"
                  prepend-icon="mdi-chart-line"
                  @click="generateReport"
                >
                  生成报告
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- 消息提示 -->
    <v-snackbar
      v-model="showMessage"
      :color="messageType"
      :timeout="3000"
    >
      {{ message }}
      <template v-slot:actions>
        <v-btn variant="text" @click="showMessage = false">关闭</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import type { Article } from '~/types'
import type { ImageAsset } from '~/types/image'

// 响应式状态
const refreshing = ref(false)
const showMessage = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error' | 'warning'>('success')

// 图表引用
const categoryChart = ref<HTMLCanvasElement>()
const imageChart = ref<HTMLCanvasElement>()

// 统计数据
const stats = ref({
  totalArticles: 0,
  totalImages: 0,
  totalStorage: 0,
  lastUpdate: ''
})

const articleStats = ref<Array<{
  category: string
  count: number
  percentage: number
}>>([])

const imageStats = ref<Array<{
  category: string
  count: number
  size: number
}>>([])

const systemInfo = ref({
  storageUsed: 0,
  storageAvailable: 0,
  storagePercentage: 0,
  browser: '',
  version: '',
  platform: '',
  loadTime: 0,
  memoryUsage: 0,
  online: true
})

// 计算属性
const formatSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    '企業ニュース': 'blue',
    'サービス': 'green',
    'コーヒー事業': 'brown',
    '展示・イベント': 'purple',
    '釣具・器具': 'orange',
    'LAB・研究開発': 'red',
    'クラブ活動': 'pink'
  }
  return colors[category] || 'grey'
}

// 方法
const loadAnalyticsData = () => {
  try {
    // 加载文章数据
    const articlesData = localStorage.getItem('notrace_articles')
    const articles: Article[] = articlesData ? JSON.parse(articlesData) : []
    
    // 加载图片数据
    const imagesData = localStorage.getItem('notrace_images')
    const images: ImageAsset[] = imagesData ? JSON.parse(imagesData) : []
    
    // 计算基础统计
    stats.value.totalArticles = articles.length
    stats.value.totalImages = images.length
    stats.value.totalStorage = images.reduce((total, img) => total + img.size, 0)
    
    // 获取最后更新时间
    const lastArticle = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
    stats.value.lastUpdate = lastArticle ? formatRelativeTime(lastArticle.date) : '无数据'
    
    // 计算文章分类统计
    const articleCategoryMap = new Map<string, number>()
    articles.forEach(article => {
      const count = articleCategoryMap.get(article.category) || 0
      articleCategoryMap.set(article.category, count + 1)
    })
    
    articleStats.value = Array.from(articleCategoryMap.entries()).map(([category, count]) => ({
      category,
      count,
      percentage: Math.round((count / articles.length) * 100)
    }))
    
    // 计算图片分类统计
    const imageCategoryMap = new Map<string, { count: number, size: number }>()
    images.forEach(image => {
      const current = imageCategoryMap.get(image.category) || { count: 0, size: 0 }
      imageCategoryMap.set(image.category, {
        count: current.count + 1,
        size: current.size + image.size
      })
    })
    
    imageStats.value = Array.from(imageCategoryMap.entries()).map(([category, data]) => ({
      category,
      count: data.count,
      size: data.size
    }))
    
    // 系统信息
    updateSystemInfo()
    
  } catch (error) {
    console.error('Failed to load analytics data:', error)
  }
}

const updateSystemInfo = () => {
  // 计算localStorage使用量
  let totalSize = 0
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalSize += (localStorage.getItem(key)?.length || 0)
    }
  }
  
  systemInfo.value.storageUsed = totalSize
  systemInfo.value.storageAvailable = 5 * 1024 * 1024 // 5MB 估算
  systemInfo.value.storagePercentage = Math.round((totalSize / systemInfo.value.storageAvailable) * 100)
  
  // 浏览器信息
  const ua = navigator.userAgent
  systemInfo.value.browser = getBrowserName(ua)
  systemInfo.value.version = getBrowserVersion(ua)
  systemInfo.value.platform = navigator.platform
  
  // 性能信息
  systemInfo.value.loadTime = Math.round(performance.now())
  systemInfo.value.memoryUsage = (performance as any).memory ? 
    Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0
  systemInfo.value.online = navigator.onLine
}

const getBrowserName = (ua: string): string => {
  if (ua.includes('Chrome')) return 'Chrome'
  if (ua.includes('Firefox')) return 'Firefox'
  if (ua.includes('Safari')) return 'Safari'
  if (ua.includes('Edge')) return 'Edge'
  return 'Unknown'
}

const getBrowserVersion = (ua: string): string => {
  const match = ua.match(/(Chrome|Firefox|Safari|Edge)\/(\d+)/)
  return match ? match[2] : 'Unknown'
}

const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString.replace(/\./g, '-'))
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return '今天'
  if (diffDays === 1) return '昨天'
  if (diffDays < 7) return `${diffDays}天前`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}周前`
  return `${Math.floor(diffDays / 30)}月前`
}

const drawCharts = () => {
  // 简单的图表绘制（使用Canvas API）
  nextTick(() => {
    drawCategoryChart()
    drawImageChart()
  })
}

const drawCategoryChart = () => {
  const canvas = categoryChart.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  // 绘制饼图
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const radius = Math.min(centerX, centerY) - 20
  
  let currentAngle = 0
  const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b']
  
  articleStats.value.forEach((item, index) => {
    const sliceAngle = (item.percentage / 100) * 2 * Math.PI
    
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
    ctx.lineTo(centerX, centerY)
    ctx.fillStyle = colors[index % colors.length]
    ctx.fill()
    
    currentAngle += sliceAngle
  })
}

const drawImageChart = () => {
  const canvas = imageChart.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  // 绘制柱状图
  const padding = 40
  const chartWidth = canvas.width - padding * 2
  const chartHeight = canvas.height - padding * 2
  
  if (imageStats.value.length === 0) return
  
  const maxCount = Math.max(...imageStats.value.map(item => item.count))
  const barWidth = chartWidth / imageStats.value.length
  
  imageStats.value.forEach((item, index) => {
    const barHeight = (item.count / maxCount) * chartHeight
    const x = padding + index * barWidth
    const y = padding + chartHeight - barHeight
    
    ctx.fillStyle = '#667eea'
    ctx.fillRect(x + 5, y, barWidth - 10, barHeight)
    
    // 绘制标签
    ctx.fillStyle = '#333'
    ctx.font = '12px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(item.category, x + barWidth/2, canvas.height - 10)
    ctx.fillText(item.count.toString(), x + barWidth/2, y - 5)
  })
}

const refreshData = async () => {
  refreshing.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟加载
    loadAnalyticsData()
    drawCharts()
    showMessage.value = true
    message.value = '数据已刷新'
    messageType.value = 'success'
  } catch (error) {
    showMessage.value = true
    message.value = '刷新失败'
    messageType.value = 'error'
  } finally {
    refreshing.value = false
  }
}

const exportData = () => {
  try {
    const exportData = {
      statistics: stats.value,
      articleStats: articleStats.value,
      imageStats: imageStats.value,
      systemInfo: systemInfo.value,
      exportTime: new Date().toISOString()
    }
    
    const dataStr = JSON.stringify(exportData, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = `notrace-analytics-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    
    URL.revokeObjectURL(url)
    
    showMessage.value = true
    message.value = '数据导出完成'
    messageType.value = 'success'
  } catch (error) {
    showMessage.value = true
    message.value = '导出失败'
    messageType.value = 'error'
  }
}

const cleanupData = () => {
  try {
    // 清理过期的缓存数据（保留核心数据）
    const keysToKeep = [
      'notrace_articles',
      'notrace_images',
      'notrace_homepage',
      'notrace_image_categories'
    ]
    
    let cleanedCount = 0
    for (let key in localStorage) {
      if (key.startsWith('notrace_') && !keysToKeep.includes(key)) {
        localStorage.removeItem(key)
        cleanedCount++
      }
    }
    
    // 刷新数据
    loadAnalyticsData()
    
    showMessage.value = true
    message.value = `已清理 ${cleanedCount} 个缓存项`
    messageType.value = 'success'
  } catch (error) {
    showMessage.value = true
    message.value = '清理失败'
    messageType.value = 'error'
  }
}

const generateReport = () => {
  try {
    const reportData = {
      title: 'NO TRACE EXPLORER 数据分析报告',
      generateTime: new Date().toLocaleString('zh-CN'),
      summary: {
        totalArticles: stats.value.totalArticles,
        totalImages: stats.value.totalImages,
        storageUsage: formatSize(stats.value.totalStorage)
      },
      insights: [
        `共发布了 ${stats.value.totalArticles} 篇文章`,
        `上传了 ${stats.value.totalImages} 张图片`,
        `使用了 ${formatSize(stats.value.totalStorage)} 存储空间`,
        `最后更新时间: ${stats.value.lastUpdate}`
      ],
      recommendations: [
        '定期备份重要数据',
        '清理不必要的缓存文件',
        '优化图片大小以节省存储空间',
        '保持内容更新频率'
      ]
    }
    
    const reportHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${reportData.title}</title>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
          h1 { color: #667eea; }
          h2 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          .summary { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .insight, .recommendation { margin: 10px 0; padding: 10px; background: #fff; border-left: 4px solid #667eea; }
        </style>
      </head>
      <body>
        <h1>${reportData.title}</h1>
        <p><strong>生成时间:</strong> ${reportData.generateTime}</p>
        
        <h2>数据概览</h2>
        <div class="summary">
          <p><strong>文章总数:</strong> ${reportData.summary.totalArticles}</p>
          <p><strong>图片总数:</strong> ${reportData.summary.totalImages}</p>
          <p><strong>存储使用:</strong> ${reportData.summary.storageUsage}</p>
        </div>
        
        <h2>数据洞察</h2>
        ${reportData.insights.map(insight => `<div class="insight">${insight}</div>`).join('')}
        
        <h2>建议</h2>
        ${reportData.recommendations.map(rec => `<div class="recommendation">${rec}</div>`).join('')}
      </body>
      </html>
    `
    
    const blob = new Blob([reportHtml], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = `notrace-report-${new Date().toISOString().split('T')[0]}.html`
    a.click()
    
    URL.revokeObjectURL(url)
    
    showMessage.value = true
    message.value = '报告生成完成'
    messageType.value = 'success'
  } catch (error) {
    showMessage.value = true
    message.value = '报告生成失败'
    messageType.value = 'error'
  }
}

// 生命周期
onMounted(() => {
  loadAnalyticsData()
  drawCharts()
  
  // 监听在线状态变化
  window.addEventListener('online', () => {
    systemInfo.value.online = true
  })
  
  window.addEventListener('offline', () => {
    systemInfo.value.online = false
  })
})
</script>

<style scoped>
.analytics-manager {
  width: 100%;
}

.overview-cards {
  margin-bottom: 2rem;
}

.stat-card {
  height: 100%;
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1;
}

.stat-label {
  color: #666666;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.charts-section {
  margin-bottom: 2rem;
}

.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.details-section {
  margin-bottom: 2rem;
}

.system-section {
  margin-bottom: 2rem;
}

.system-info h4 {
  color: #1A1A1A;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.system-info p {
  margin: 0.5rem 0;
  color: #666666;
}

.actions-section {
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
  }
  
  .action-buttons .v-btn {
    width: 100%;
  }
  
  .stat-content {
    flex-direction: column;
    text-align: center;
  }
  
  .chart-container {
    min-height: 250px;
  }
}

/* 深色主题支持 */
.v-theme--dark .stat-number {
  color: #FFFFFF;
}

.v-theme--dark .system-info h4 {
  color: #FFFFFF;
}

.v-theme--dark .system-info p {
  color: #CCCCCC;
}
</style>