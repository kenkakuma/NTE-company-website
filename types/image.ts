// 图片管理相关类型定义
export interface ImageAsset {
  id: string
  filename: string
  originalName: string
  category: string
  size: number
  type: string
  url: string // Object URL or Base64
  uploadDate: string
  tags: string[]
  usage: string[] // 记录在哪些地方使用了
  description?: string
}

export interface ImageCategory {
  id: string
  name: string
  description: string
  count: number
  createdAt: string
}

export interface ImageUploadOptions {
  category?: string
  tags?: string[]
  description?: string
  maxSize?: number // MB
  allowedTypes?: string[]
}

export interface ImageFilter {
  category?: string
  tags?: string[]
  search?: string
  dateRange?: {
    start: string
    end: string
  }
}

export interface ImageStats {
  totalImages: number
  totalSize: number
  categories: Record<string, number>
  recentUploads: number
  unusedImages: number
}

// 预设分类
export const DEFAULT_CATEGORIES: ImageCategory[] = [
  {
    id: 'hero-backgrounds',
    name: 'Hero背景图',
    description: '首页Hero区域的背景图片',
    count: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: 'service-images',
    name: '服务图片',
    description: '服务展示相关图片',
    count: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: 'logos',
    name: 'Logo图标',
    description: '企业Logo和品牌图标',
    count: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: 'partners',
    name: '合作伙伴',
    description: '合作伙伴Logo和图片',
    count: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: 'articles',
    name: '文章图片',
    description: '文章内容相关图片',
    count: 0,
    createdAt: new Date().toISOString()
  },
  {
    id: 'general',
    name: '通用图片',
    description: '其他通用图片素材',
    count: 0,
    createdAt: new Date().toISOString()
  }
]

// 支持的文件类型
export const SUPPORTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg', 
  'image/png',
  'image/webp',
  'image/svg+xml'
]

// 最大文件大小 (5MB)
export const MAX_FILE_SIZE = 5 * 1024 * 1024