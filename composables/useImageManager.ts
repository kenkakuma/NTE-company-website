// 图片管理composable
import type { 
  ImageAsset, 
  ImageCategory, 
  ImageUploadOptions, 
  ImageFilter, 
  ImageStats 
} from '~/types/image'
import { 
  DEFAULT_CATEGORIES, 
  SUPPORTED_IMAGE_TYPES, 
  MAX_FILE_SIZE 
} from '~/types/image'

export const useImageManager = () => {
  // 存储键
  const STORAGE_KEYS = {
    IMAGES: 'notrace_images',
    CATEGORIES: 'notrace_image_categories'
  }

  // 响应式状态
  const images = ref<ImageAsset[]>([])
  const categories = ref<ImageCategory[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // 初始化
  const init = () => {
    loadImages()
    loadCategories()
  }

  // 加载图片
  const loadImages = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.IMAGES)
      if (stored) {
        images.value = JSON.parse(stored)
      }
    } catch (err) {
      console.error('Failed to load images:', err)
      error.value = '加载图片失败'
    }
  }

  // 加载分类
  const loadCategories = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CATEGORIES)
      if (stored) {
        categories.value = JSON.parse(stored)
      } else {
        // 使用默认分类
        categories.value = [...DEFAULT_CATEGORIES]
        saveCategories()
      }
      updateCategoryCounts()
    } catch (err) {
      console.error('Failed to load categories:', err)
      categories.value = [...DEFAULT_CATEGORIES]
    }
  }

  // 保存图片
  const saveImages = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.IMAGES, JSON.stringify(images.value))
    } catch (err) {
      console.error('Failed to save images:', err)
      error.value = '保存图片失败'
    }
  }

  // 保存分类
  const saveCategories = () => {
    try {
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories.value))
    } catch (err) {
      console.error('Failed to save categories:', err)
    }
  }

  // 更新分类计数
  const updateCategoryCounts = () => {
    categories.value.forEach(category => {
      category.count = images.value.filter(img => img.category === category.id).length
    })
    saveCategories()
  }

  // 文件验证
  const validateFile = (file: File): string | null => {
    if (!SUPPORTED_IMAGE_TYPES.includes(file.type)) {
      return `不支持的文件类型: ${file.type}`
    }
    if (file.size > MAX_FILE_SIZE) {
      return `文件大小超过限制 (最大5MB): ${(file.size / 1024 / 1024).toFixed(2)}MB`
    }
    return null
  }

  // 生成唯一ID
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
  }

  // 上传图片
  const uploadImage = async (
    file: File, 
    options: ImageUploadOptions = {}
  ): Promise<ImageAsset> => {
    loading.value = true
    error.value = null

    try {
      // 验证文件
      const validationError = validateFile(file)
      if (validationError) {
        throw new Error(validationError)
      }

      // 生成文件名
      const id = generateId()
      const extension = file.name.split('.').pop()
      const filename = `${id}.${extension}`

      // 创建Object URL
      const url = URL.createObjectURL(file)

      // 创建图片对象
      const imageAsset: ImageAsset = {
        id,
        filename,
        originalName: file.name,
        category: options.category || 'general',
        size: file.size,
        type: file.type,
        url,
        uploadDate: new Date().toISOString(),
        tags: options.tags || [],
        usage: []
      }
      
      if (options.description) {
        imageAsset.description = options.description
      }

      // 添加到数组
      images.value.unshift(imageAsset)
      saveImages()
      updateCategoryCounts()

      return imageAsset
    } catch (err) {
      error.value = err instanceof Error ? err.message : '上传失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 批量上传
  const uploadImages = async (
    files: File[], 
    options: ImageUploadOptions = {}
  ): Promise<ImageAsset[]> => {
    const results: ImageAsset[] = []
    
    for (const file of files) {
      try {
        const result = await uploadImage(file, options)
        results.push(result)
      } catch (err) {
        console.error(`Failed to upload ${file.name}:`, err)
      }
    }
    
    return results
  }

  // 删除图片
  const deleteImage = (id: string): boolean => {
    const index = images.value.findIndex(img => img.id === id)
    if (index === -1) return false

    const image = images.value[index]
    
    // 清理Object URL
    if (image.url.startsWith('blob:')) {
      URL.revokeObjectURL(image.url)
    }
    
    // 从数组中移除
    images.value.splice(index, 1)
    saveImages()
    updateCategoryCounts()
    
    return true
  }

  // 批量删除
  const deleteImages = (ids: string[]): number => {
    let deletedCount = 0
    ids.forEach(id => {
      if (deleteImage(id)) {
        deletedCount++
      }
    })
    return deletedCount
  }

  // 更新图片信息
  const updateImage = (id: string, updates: Partial<ImageAsset>): boolean => {
    const index = images.value.findIndex(img => img.id === id)
    if (index === -1) return false

    images.value[index] = { ...images.value[index], ...updates }
    saveImages()
    
    if (updates.category) {
      updateCategoryCounts()
    }
    
    return true
  }

  // 筛选图片
  const filterImages = (filter: ImageFilter): ImageAsset[] => {
    let filtered = [...images.value]

    if (filter.category) {
      filtered = filtered.filter(img => img.category === filter.category)
    }

    if (filter.tags && filter.tags.length > 0) {
      filtered = filtered.filter(img => 
        filter.tags!.some(tag => img.tags.includes(tag))
      )
    }

    if (filter.search) {
      const searchLower = filter.search.toLowerCase()
      filtered = filtered.filter(img => 
        img.filename.toLowerCase().includes(searchLower) ||
        img.originalName.toLowerCase().includes(searchLower) ||
        img.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        (img.description && img.description.toLowerCase().includes(searchLower))
      )
    }

    if (filter.dateRange) {
      const { start, end } = filter.dateRange
      filtered = filtered.filter(img => {
        const uploadDate = new Date(img.uploadDate)
        return uploadDate >= new Date(start) && uploadDate <= new Date(end)
      })
    }

    return filtered
  }

  // 获取统计信息
  const getStats = (): ImageStats => {
    const totalImages = images.value.length
    const totalSize = images.value.reduce((sum, img) => sum + img.size, 0)
    
    const categoryStats: Record<string, number> = {}
    categories.value.forEach(cat => {
      categoryStats[cat.name] = cat.count
    })

    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const recentUploads = images.value.filter(img => 
      new Date(img.uploadDate) > oneWeekAgo
    ).length

    const unusedImages = images.value.filter(img => 
      img.usage.length === 0
    ).length

    return {
      totalImages,
      totalSize,
      categories: categoryStats,
      recentUploads,
      unusedImages
    }
  }

  // 创建分类
  const createCategory = (name: string, description: string): ImageCategory => {
    const category: ImageCategory = {
      id: generateId(),
      name,
      description,
      count: 0,
      createdAt: new Date().toISOString()
    }
    
    categories.value.push(category)
    saveCategories()
    
    return category
  }

  // 删除分类
  const deleteCategory = (id: string): boolean => {
    const index = categories.value.findIndex(cat => cat.id === id)
    if (index === -1) return false

    // 不能删除有图片的分类
    if (categories.value[index].count > 0) {
      error.value = '不能删除包含图片的分类'
      return false
    }

    categories.value.splice(index, 1)
    saveCategories()
    return true
  }

  // 清理未使用的Object URLs
  const cleanup = () => {
    images.value.forEach(img => {
      if (img.url.startsWith('blob:')) {
        URL.revokeObjectURL(img.url)
      }
    })
  }

  // 生命周期
  onMounted(() => {
    init()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    // 状态
    images: readonly(images),
    categories: readonly(categories),
    loading: readonly(loading),
    error: readonly(error),
    
    // 方法
    init,
    uploadImage,
    uploadImages,
    deleteImage,
    deleteImages,
    updateImage,
    filterImages,
    getStats,
    createCategory,
    deleteCategory,
    validateFile,
    
    // 计算属性
    imageCount: computed(() => images.value.length),
    totalSize: computed(() => images.value.reduce((sum, img) => sum + img.size, 0)),
    categoryOptions: computed(() => 
      categories.value.map(cat => ({ value: cat.id, title: cat.name }))
    )
  }
}