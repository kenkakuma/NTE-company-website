<!-- 图片管理组件 -->
<template>
  <div class="image-manager">
    <!-- 工具栏 -->
    <div class="toolbar">
      <div class="toolbar-section">
        <v-text-field
          v-model="searchQuery"
          label="搜索图片"
          prepend-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          class="search-field"
          clearable
        />
        
        <v-select
          v-model="selectedCategory"
          label="筛选分类"
          :items="categoryFilterOptions"
          item-value="value"
          item-title="title"
          variant="outlined"
          density="compact"
          class="category-filter"
          clearable
        />
      </div>
      
      <div class="toolbar-actions">
        <v-btn
          v-if="selectedImages.length > 0"
          color="error"
          variant="outlined"
          @click="confirmBatchDelete"
          class="mr-2"
        >
          <v-icon start>mdi-delete</v-icon>
          删除选中 ({{ selectedImages.length }})
        </v-btn>
        
        <v-btn
          color="primary"
          @click="showUploader = true"
        >
          <v-icon start>mdi-upload</v-icon>
          上传图片
        </v-btn>
      </div>
    </div>

    <!-- 统计信息 -->
    <div class="stats-bar">
      <div class="stat-item">
        <v-icon>mdi-image</v-icon>
        <span>{{ displayedImages.length }} / {{ totalImages }} 张图片</span>
      </div>
      <div class="stat-item">
        <v-icon>mdi-harddisk</v-icon>
        <span>{{ formatFileSize(totalSize) }}</span>
      </div>
      <div class="stat-item">
        <v-icon>mdi-folder</v-icon>
        <span>{{ categories.length }} 个分类</span>
      </div>
    </div>

    <!-- 图片网格 -->
    <div class="image-grid">
      <div
        v-for="image in displayedImages"
        :key="image.id"
        class="image-item"
        :class="{ 'selected': selectedImages.includes(image.id) }"
        @click="toggleSelection(image.id)"
      >
        <!-- 选择框 -->
        <div class="image-checkbox">
          <v-checkbox
            :model-value="selectedImages.includes(image.id)"
            @update:model-value="toggleSelection(image.id)"
            density="compact"
            hide-details
          />
        </div>

        <!-- 图片预览 -->
        <div class="image-preview" @click.stop="openPreview(image)">
          <img :src="image.url" :alt="image.originalName" />
          <div class="image-overlay">
            <v-btn
              icon="mdi-eye"
              size="small"
              variant="text"
              color="white"
            />
          </div>
        </div>

        <!-- 图片信息 -->
        <div class="image-info">
          <div class="image-name" :title="image.originalName">
            {{ image.originalName }}
          </div>
          <div class="image-meta">
            <span class="image-size">{{ formatFileSize(image.size) }}</span>
            <span class="image-category">{{ getCategoryName(image.category) }}</span>
          </div>
          <div class="image-tags" v-if="image.tags.length > 0">
            <v-chip
              v-for="tag in image.tags"
              :key="tag"
              size="x-small"
              variant="outlined"
              class="mr-1"
            >
              {{ tag }}
            </v-chip>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="image-actions">
          <v-btn
            icon="mdi-content-copy"
            size="small"
            variant="text"
            @click.stop="copyUrl(image.url)"
            title="复制链接"
          />
          <v-btn
            icon="mdi-pencil"
            size="small"
            variant="text"
            @click.stop="editImage(image)"
            title="编辑"
          />
          <v-btn
            icon="mdi-delete"
            size="small"
            variant="text"
            color="error"
            @click.stop="confirmDelete(image)"
            title="删除"
          />
        </div>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-if="displayedImages.length === 0 && !loading" class="empty-state">
      <v-icon size="64" color="grey">mdi-image-off</v-icon>
      <h3>{{ searchQuery || selectedCategory ? '未找到图片' : '还没有图片' }}</h3>
      <p>{{ searchQuery || selectedCategory ? '请尝试调整搜索条件' : '点击上传按钮开始添加图片' }}</p>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading" class="loading-state">
      <v-progress-circular indeterminate color="primary" />
      <p>加载中...</p>
    </div>

    <!-- 上传对话框 -->
    <v-dialog v-model="showUploader" max-width="800">
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon start>mdi-upload</v-icon>
          上传图片
        </v-card-title>
        <v-card-text>
          <ImageUploader
            :default-category="selectedCategory || 'general'"
            @upload="handleUpload"
            @error="handleUploadError"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showUploader = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 图片预览对话框 -->
    <v-dialog v-model="showPreview" max-width="1000">
      <v-card v-if="previewImage">
        <v-card-title class="d-flex align-center justify-space-between">
          <span>{{ previewImage.originalName }}</span>
          <v-btn icon="mdi-close" variant="text" @click="showPreview = false" />
        </v-card-title>
        <v-card-text>
          <div class="preview-content">
            <div class="preview-image">
              <img :src="previewImage.url" :alt="previewImage.originalName" />
            </div>
            <div class="preview-details">
              <div class="detail-item">
                <strong>文件名:</strong> {{ previewImage.filename }}
              </div>
              <div class="detail-item">
                <strong>大小:</strong> {{ formatFileSize(previewImage.size) }}
              </div>
              <div class="detail-item">
                <strong>类型:</strong> {{ previewImage.type }}
              </div>
              <div class="detail-item">
                <strong>分类:</strong> {{ getCategoryName(previewImage.category) }}
              </div>
              <div class="detail-item">
                <strong>上传时间:</strong> {{ formatDate(previewImage.uploadDate) }}
              </div>
              <div class="detail-item" v-if="previewImage.tags.length > 0">
                <strong>标签:</strong>
                <v-chip
                  v-for="tag in previewImage.tags"
                  :key="tag"
                  size="small"
                  class="ml-1"
                >
                  {{ tag }}
                </v-chip>
              </div>
              <div class="detail-item" v-if="previewImage.description">
                <strong>描述:</strong> {{ previewImage.description }}
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="copyUrl(previewImage.url)">复制链接</v-btn>
          <v-btn @click="editImage(previewImage)">编辑</v-btn>
          <v-spacer />
          <v-btn color="error" @click="confirmDelete(previewImage)">删除</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 编辑对话框 -->
    <v-dialog v-model="showEdit" max-width="600">
      <v-card v-if="editingImage">
        <v-card-title>编辑图片</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="editForm.filename"
            label="文件名"
            variant="outlined"
            class="mb-3"
          />
          <v-select
            v-model="editForm.category"
            label="分类"
            :items="categoryOptions"
            item-value="value"
            item-title="title"
            variant="outlined"
            class="mb-3"
          />
          <v-text-field
            v-model="editForm.tagsStr"
            label="标签 (用逗号分隔)"
            variant="outlined"
            class="mb-3"
          />
          <v-textarea
            v-model="editForm.description"
            label="描述"
            variant="outlined"
            rows="3"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showEdit = false">取消</v-btn>
          <v-btn color="primary" @click="saveEdit">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 删除确认对话框 -->
    <v-dialog v-model="showDeleteConfirm" max-width="400">
      <v-card>
        <v-card-title>确认删除</v-card-title>
        <v-card-text>
          {{ deleteConfirmText }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showDeleteConfirm = false">取消</v-btn>
          <v-btn color="error" @click="performDelete">删除</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
import type { ImageAsset } from '~/types/image'
import { useImageManager } from '~/composables/useImageManager'
import ImageUploader from './ImageUploader.vue'

// Composables
const { 
  categories, 
  loading, 
  deleteImage, 
  deleteImages, 
  updateImage,
  filterImages,
  categoryOptions,
  totalSize,
  imageCount
} = useImageManager()

// 响应式状态
const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)
const selectedImages = ref<string[]>([])
const showUploader = ref(false)
const showPreview = ref(false)
const showEdit = ref(false)
const showDeleteConfirm = ref(false)
const previewImage = ref<ImageAsset | null>(null)
const editingImage = ref<ImageAsset | null>(null)
const deleteTarget = ref<string | string[] | null>(null)

// 消息提示
const showMessage = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error' | 'warning'>('success')

// 编辑表单
const editForm = ref({
  filename: '',
  category: '',
  tagsStr: '',
  description: ''
})

// 计算属性
const totalImages = computed(() => imageCount.value)

const categoryFilterOptions = computed(() => [
  { value: null, title: '所有分类' },
  ...categoryOptions.value
])

const displayedImages = computed(() => {
  const filter: any = {}
  if (selectedCategory.value) filter.category = selectedCategory.value
  if (searchQuery.value) filter.search = searchQuery.value
  return filterImages(filter)
})

const deleteConfirmText = computed(() => {
  if (Array.isArray(deleteTarget.value)) {
    return `确定要删除选中的 ${deleteTarget.value.length} 张图片吗？此操作不可撤销。`
  }
  return '确定要删除这张图片吗？此操作不可撤销。'
})

// 方法
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getCategoryName = (categoryId: string): string => {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category?.name || '未知分类'
}

const toggleSelection = (id: string) => {
  const index = selectedImages.value.indexOf(id)
  if (index > -1) {
    selectedImages.value.splice(index, 1)
  } else {
    selectedImages.value.push(id)
  }
}

const openPreview = (image: ImageAsset) => {
  previewImage.value = image
  showPreview.value = true
}

const editImage = (image: ImageAsset) => {
  editingImage.value = image
  editForm.value = {
    filename: image.filename,
    category: image.category,
    tagsStr: image.tags.join(', '),
    description: image.description || ''
  }
  showEdit.value = true
}

const saveEdit = () => {
  if (!editingImage.value) return
  
  const tags = editForm.value.tagsStr
    .split(',')
    .map(tag => tag.trim())
    .filter(Boolean)
  
  const updateData: any = {
    filename: editForm.value.filename,
    category: editForm.value.category,
    tags
  }
  if (editForm.value.description) updateData.description = editForm.value.description
  
  const success = updateImage(editingImage.value.id, updateData)
  
  if (success) {
    showMessage.value = true
    message.value = '图片信息已更新'
    messageType.value = 'success'
    showEdit.value = false
  } else {
    showMessage.value = true
    message.value = '更新失败'
    messageType.value = 'error'
  }
}

const confirmDelete = (image: ImageAsset) => {
  deleteTarget.value = image.id
  showDeleteConfirm.value = true
}

const confirmBatchDelete = () => {
  deleteTarget.value = [...selectedImages.value]
  showDeleteConfirm.value = true
}

const performDelete = () => {
  if (Array.isArray(deleteTarget.value)) {
    const deletedCount = deleteImages(deleteTarget.value)
    selectedImages.value = []
    showMessage.value = true
    message.value = `已删除 ${deletedCount} 张图片`
    messageType.value = 'success'
  } else if (deleteTarget.value) {
    const success = deleteImage(deleteTarget.value)
    if (success) {
      showMessage.value = true
      message.value = '图片已删除'
      messageType.value = 'success'
    } else {
      showMessage.value = true
      message.value = '删除失败'
      messageType.value = 'error'
    }
  }
  
  showDeleteConfirm.value = false
  showPreview.value = false
  deleteTarget.value = null
}

const copyUrl = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url)
    showMessage.value = true
    message.value = '链接已复制到剪贴板'
    messageType.value = 'success'
  } catch (err) {
    showMessage.value = true
    message.value = '复制失败'
    messageType.value = 'error'
  }
}

const handleUpload = (uploadedImages: ImageAsset[]) => {
  showMessage.value = true
  message.value = `成功上传 ${uploadedImages.length} 张图片`
  messageType.value = 'success'
  selectedImages.value = []
}

const handleUploadError = (error: string) => {
  showMessage.value = true
  message.value = error
  messageType.value = 'error'
}

// 清空选择
watch([searchQuery, selectedCategory], () => {
  selectedImages.value = []
})
</script>

<style scoped>
.image-manager {
  width: 100%;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
}

.toolbar-section {
  display: flex;
  gap: 1rem;
  flex: 1;
}

.search-field {
  max-width: 300px;
}

.category-filter {
  max-width: 200px;
}

.toolbar-actions {
  display: flex;
  gap: 0.5rem;
}

.stats-bar {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background: #F8F9FA;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666666;
  font-size: 0.9rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.image-item {
  background: white;
  border-radius: 12px;
  border: 2px solid #E0E0E0;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.image-item:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.image-item.selected {
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
}

.image-checkbox {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
}

.image-preview {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-preview:hover .image-overlay {
  opacity: 1;
}

.image-info {
  padding: 1rem;
}

.image-name {
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.image-meta {
  display: flex;
  justify-content: space-between;
  color: #666666;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.image-tags {
  margin-top: 0.5rem;
}

.image-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  background: #F8F9FA;
  border-top: 1px solid #E0E0E0;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #666666;
}

.empty-state h3 {
  margin: 1rem 0 0.5rem;
  font-weight: 500;
}

.loading-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #666666;
}

.loading-state p {
  margin-top: 1rem;
}

.preview-content {
  display: flex;
  gap: 2rem;
}

.preview-image {
  flex: 1;
  text-align: center;
}

.preview-image img {
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
}

.preview-details {
  flex: 1;
}

.detail-item {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #E0E0E0;
}

.detail-item:last-child {
  border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }
  
  .toolbar-section {
    flex-direction: column;
  }
  
  .search-field,
  .category-filter {
    max-width: none;
  }
  
  .stats-bar {
    flex-direction: column;
    gap: 1rem;
  }
  
  .image-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .preview-content {
    flex-direction: column;
  }
}
</style>