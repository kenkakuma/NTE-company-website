<!-- 图片上传组件 -->
<template>
  <div class="image-uploader">
    <!-- 拖拽上传区域 -->
    <div 
      class="upload-area"
      :class="{ 
        'drag-over': isDragOver,
        'uploading': loading 
      }"
      @drop.prevent="handleDrop"
      @dragover.prevent="isDragOver = true"
      @dragleave="isDragOver = false"
      @click="triggerFileInput"
    >
      <div class="upload-content">
        <v-icon 
          size="64" 
          color="primary"
          class="upload-icon"
        >
          {{ isDragOver ? 'mdi-cloud-upload' : 'mdi-image-plus' }}
        </v-icon>
        
        <h3 class="upload-title">
          {{ isDragOver ? '释放以上传图片' : '拖拽图片到此处' }}
        </h3>
        
        <p class="upload-description">
          或点击选择文件上传
        </p>
        
        <div class="upload-info">
          <p class="info-text">
            支持格式: JPG, PNG, WEBP, SVG
          </p>
          <p class="info-text">
            最大大小: 5MB
          </p>
        </div>
      </div>
      
      <!-- 进度条 -->
      <div v-if="loading" class="upload-progress">
        <v-progress-linear
          indeterminate
          color="primary"
          height="4"
        />
        <p class="progress-text">正在上传...</p>
      </div>
    </div>

    <!-- 文件输入 -->
    <input
      ref="fileInput"
      type="file"
      multiple
      accept="image/*"
      style="display: none"
      @change="handleFileSelect"
    >

    <!-- 上传选项 -->
    <div class="upload-options">
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="selectedCategory"
            label="选择分类"
            :items="categoryOptions"
            item-value="value"
            item-title="title"
            prepend-icon="mdi-folder"
            variant="outlined"
            density="compact"
          />
        </v-col>
        
        <v-col cols="12" md="6">
          <v-text-field
            v-model="tags"
            label="标签 (用逗号分隔)"
            prepend-icon="mdi-tag-multiple"
            variant="outlined"
            density="compact"
            placeholder="例如: logo, 首页, 背景"
          />
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="description"
            label="描述"
            prepend-icon="mdi-text"
            variant="outlined"
            density="compact"
            placeholder="简单描述这张图片..."
          />
        </v-col>
      </v-row>
    </div>

    <!-- 上传结果 -->
    <div v-if="uploadResults.length > 0" class="upload-results">
      <h4 class="results-title">
        <v-icon start>mdi-check-circle</v-icon>
        已上传 {{ uploadResults.length }} 个文件
      </h4>
      
      <div class="results-grid">
        <div 
          v-for="result in uploadResults" 
          :key="result.id"
          class="result-item"
        >
          <div class="result-image">
            <img :src="result.url" :alt="result.originalName">
          </div>
          <div class="result-info">
            <p class="result-name">{{ result.originalName }}</p>
            <p class="result-size">{{ formatFileSize(result.size) }}</p>
          </div>
          <v-btn
            icon="mdi-close"
            size="small"
            variant="text"
            @click="removeResult(result.id)"
          />
        </div>
      </div>
      
      <div class="results-actions">
        <v-btn
          color="primary"
          @click="clearResults"
        >
          清除列表
        </v-btn>
      </div>
    </div>

    <!-- 错误信息 -->
    <v-alert
      v-if="error"
      type="error"
      closable
      @click:close="error = ''"
      class="mt-4"
    >
      {{ error }}
    </v-alert>
  </div>
</template>

<script setup lang="ts">
import type { ImageAsset } from '~/types/image'
import { useImageManager } from '~/composables/useImageManager'

// Props
interface Props {
  defaultCategory?: string
  maxFiles?: number
  showOptions?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultCategory: 'general',
  maxFiles: 10,
  showOptions: true
})

// Emits
const emit = defineEmits<{
  upload: [images: ImageAsset[]]
  error: [message: string]
}>()

// Composables
const { uploadImages, categoryOptions, validateFile } = useImageManager()

// 响应式状态
const isDragOver = ref(false)
const loading = ref(false)
const error = ref('')
const uploadResults = ref<ImageAsset[]>([])

// 上传选项
const selectedCategory = ref(props.defaultCategory)
const tags = ref('')
const description = ref('')

// 文件输入引用
const fileInput = ref<HTMLInputElement>()

// 格式化文件大小
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`
}

// 处理文件选择
const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files) {
    handleFiles(Array.from(files))
  }
}

// 处理拖拽放置
const handleDrop = (event: DragEvent) => {
  isDragOver.value = false
  const files = event.dataTransfer?.files
  if (files) {
    handleFiles(Array.from(files))
  }
}

// 处理文件
const handleFiles = async (files: File[]) => {
  error.value = ''
  
  // 检查文件数量
  if (files.length > props.maxFiles) {
    error.value = `最多只能上传 ${props.maxFiles} 个文件`
    return
  }

  // 验证文件
  const validFiles: File[] = []
  for (const file of files) {
    const validationError = validateFile(file)
    if (validationError) {
      error.value = validationError
      return
    }
    validFiles.push(file)
  }

  if (validFiles.length === 0) return

  try {
    loading.value = true
    
    // 准备上传选项
    const uploadOptions: any = {
      category: selectedCategory.value,
      tags: tags.value.split(',').map(tag => tag.trim()).filter(Boolean)
    }
    if (description.value) uploadOptions.description = description.value

    // 上传文件
    const results = await uploadImages(validFiles, uploadOptions)
    
    // 更新结果
    uploadResults.value.push(...results)
    
    // 发出事件
    emit('upload', results)
    
    // 清空输入
    if (fileInput.value) {
      fileInput.value.value = ''
    }
    
  } catch (err) {
    const message = err instanceof Error ? err.message : '上传失败'
    error.value = message
    emit('error', message)
  } finally {
    loading.value = false
  }
}

// 触发文件输入
const triggerFileInput = () => {
  if (loading.value) return
  fileInput.value?.click()
}

// 移除结果
const removeResult = (id: string) => {
  const index = uploadResults.value.findIndex(r => r.id === id)
  if (index !== -1) {
    uploadResults.value.splice(index, 1)
  }
}

// 清除结果
const clearResults = () => {
  uploadResults.value = []
}

// 监听分类变化
watch(selectedCategory, (newValue) => {
  if (newValue !== props.defaultCategory) {
    selectedCategory.value = newValue
  }
})
</script>

<style scoped>
.image-uploader {
  width: 100%;
}

.upload-area {
  border: 2px dashed #E0E0E0;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #FAFAFA;
  position: relative;
}

.upload-area:hover {
  border-color: #667eea;
  background: #F5F7FF;
}

.upload-area.drag-over {
  border-color: #667eea;
  background: #F0F4FF;
  transform: scale(1.02);
}

.upload-area.uploading {
  pointer-events: none;
  opacity: 0.7;
}

.upload-content {
  position: relative;
  z-index: 1;
}

.upload-icon {
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.drag-over .upload-icon {
  transform: scale(1.2);
}

.upload-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.5rem;
}

.upload-description {
  color: #666666;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.upload-info {
  margin-top: 1rem;
}

.info-text {
  color: #888888;
  font-size: 0.875rem;
  margin: 0.25rem 0;
}

.upload-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 0 0 12px 12px;
}

.progress-text {
  margin-top: 0.5rem;
  color: #667eea;
  font-weight: 500;
}

.upload-options {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #F8F9FA;
  border-radius: 8px;
}

.upload-results {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #F0F8FF;
  border-radius: 8px;
  border: 1px solid #E3F2FD;
}

.results-title {
  color: #1976D2;
  font-weight: 500;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.results-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #E0E0E0;
}

.result-image {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}

.result-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.result-info {
  flex: 1;
}

.result-name {
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.25rem;
}

.result-size {
  color: #666666;
  font-size: 0.875rem;
  margin: 0;
}

.results-actions {
  text-align: right;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .upload-area {
    padding: 2rem 1rem;
  }
  
  .upload-title {
    font-size: 1.25rem;
  }
  
  .upload-options {
    padding: 1rem;
  }
  
  .upload-results {
    padding: 1rem;
  }
}
</style>