<!-- Article Editor Component -->
<!-- Author: Claude AI Assistant -->
<!-- Date: 2025-07-02 -->
<!-- Description: Rich text editor for creating and editing articles -->

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-6">
          <div class="d-flex justify-space-between align-center mb-6">
            <div>
              <h2 class="text-h4 mb-2">
                {{ mode === 'create' ? '新しい記事を作成' : '記事を編集' }}
              </h2>
              <p class="text-body-1 text-grey-darken-1">
                {{ mode === 'create' ? '新しい記事の情報を入力してください' : '記事の内容を編集してください' }}
              </p>
            </div>
            <div class="d-flex gap-2">
              <v-btn
                variant="outlined"
                @click="$emit('cancel')"
                prepend-icon="mdi-arrow-left"
              >
                戻る
              </v-btn>
              <v-btn
                color="primary"
                @click="previewMode = !previewMode"
                :prepend-icon="previewMode ? 'mdi-pencil' : 'mdi-eye'"
                variant="outlined"
              >
                {{ previewMode ? '編集' : 'プレビュー' }}
              </v-btn>
              <v-btn
                color="success"
                @click="saveArticle"
                prepend-icon="mdi-content-save"
                :disabled="!isFormValid"
              >
                {{ mode === 'create' ? '公開' : '更新' }}
              </v-btn>
            </div>
          </div>

          <v-row>
            <!-- Editor Panel -->
            <v-col cols="12" :md="previewMode ? 6 : 12">
              <v-form ref="form" v-model="isFormValid" @submit.prevent="saveArticle">
                <!-- Basic Information -->
                <v-card variant="outlined" class="mb-6">
                  <v-card-title class="bg-grey-lighten-4">
                    <v-icon start>mdi-information</v-icon>
                    基本情報
                  </v-card-title>
                  <v-card-text class="pa-4">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="formData.title"
                          label="記事タイトル *"
                          variant="outlined"
                          :rules="titleRules"
                          counter="100"
                          required
                        />
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="formData.category"
                          :items="categories"
                          label="カテゴリ *"
                          variant="outlined"
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="formData.date"
                          label="公開日 *"
                          variant="outlined"
                          type="date"
                          :rules="requiredRules"
                          required
                        />
                      </v-col>
                      
                      <v-col cols="12">
                        <v-textarea
                          v-model="formData.excerpt"
                          label="記事概要 *"
                          variant="outlined"
                          :rules="excerptRules"
                          counter="200"
                          rows="3"
                          required
                        />
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="formData.readTime"
                          label="読了時間"
                          variant="outlined"
                          placeholder="例: 3分"
                        />
                      </v-col>
                      
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="formData.status"
                          :items="statusOptions"
                          label="ステータス"
                          variant="outlined"
                        />
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>

                <!-- Tags Management -->
                <v-card variant="outlined" class="mb-6">
                  <v-card-title class="bg-grey-lighten-4">
                    <v-icon start>mdi-tag-multiple</v-icon>
                    タグ管理
                  </v-card-title>
                  <v-card-text class="pa-4">
                    <v-combobox
                      v-model="formData.tags"
                      :items="availableTags"
                      label="タグを追加"
                      variant="outlined"
                      multiple
                      chips
                      clearable
                      hide-details
                    >
                      <template v-slot:chip="{ props, item }">
                        <v-chip
                          v-bind="props"
                          closable
                          @click:close="removeTag(item.raw)"
                        >
                          {{ item.raw }}
                        </v-chip>
                      </template>
                    </v-combobox>
                    <div class="mt-3">
                      <v-chip
                        v-for="tag in popularTags"
                        :key="tag"
                        size="small"
                        variant="outlined"
                        class="ma-1"
                        @click="addTag(tag)"
                      >
                        + {{ tag }}
                      </v-chip>
                    </div>
                  </v-card-text>
                </v-card>

                <!-- Content Editor -->
                <v-card variant="outlined" class="mb-6">
                  <v-card-title class="bg-grey-lighten-4 d-flex justify-space-between align-center">
                    <div>
                      <v-icon start>mdi-text-box</v-icon>
                      記事本文
                    </div>
                    <div class="d-flex gap-2">
                      <v-btn
                        size="small"
                        variant="text"
                        @click="insertTemplate('heading')"
                        prepend-icon="mdi-format-header-1"
                      >
                        見出し
                      </v-btn>
                      <v-btn
                        size="small"
                        variant="text"
                        @click="insertTemplate('paragraph')"
                        prepend-icon="mdi-format-paragraph"
                      >
                        段落
                      </v-btn>
                      <v-btn
                        size="small"
                        variant="text"
                        @click="insertTemplate('list')"
                        prepend-icon="mdi-format-list-bulleted"
                      >
                        リスト
                      </v-btn>
                    </div>
                  </v-card-title>
                  <v-card-text class="pa-4">
                    <v-textarea
                      v-model="formData.content"
                      label="HTMLコンテンツ"
                      variant="outlined"
                      rows="12"
                      no-resize
                      placeholder="<p>ここに記事の本文をHTMLで入力してください...</p>"
                    />
                    <v-alert type="info" class="mt-3">
                      <v-icon start>mdi-information</v-icon>
                      HTMLタグが使用できます。段落は&lt;p&gt;タグ、見出しは&lt;h2&gt;タグをご使用ください。
                    </v-alert>
                  </v-card-text>
                </v-card>

                <!-- Quick Actions -->
                <v-card variant="outlined">
                  <v-card-title class="bg-grey-lighten-4">
                    <v-icon start>mdi-lightning-bolt</v-icon>
                    クイックアクション
                  </v-card-title>
                  <v-card-text class="pa-4">
                    <div class="d-flex flex-wrap gap-2">
                      <v-btn
                        size="small"
                        variant="outlined"
                        @click="autoGenerateExcerpt"
                        prepend-icon="mdi-auto-fix"
                      >
                        概要自動生成
                      </v-btn>
                      <v-btn
                        size="small"
                        variant="outlined"
                        @click="estimateReadTime"
                        prepend-icon="mdi-clock-outline"
                      >
                        読了時間推定
                      </v-btn>
                      <v-btn
                        size="small"
                        variant="outlined"
                        @click="clearForm"
                        prepend-icon="mdi-refresh"
                      >
                        フォームクリア
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </v-form>
            </v-col>

            <!-- Preview Panel -->
            <v-col v-if="previewMode" cols="12" md="6">
              <v-card variant="outlined" class="sticky-preview">
                <v-card-title class="bg-primary text-white">
                  <v-icon start>mdi-eye</v-icon>
                  プレビュー
                </v-card-title>
                <v-card-text class="pa-0">
                  <div class="article-preview pa-6">
                    <div class="d-flex align-center mb-4">
                      <v-chip
                        size="small"
                        color="primary"
                        class="mr-2"
                      >
                        {{ formData.category || 'カテゴリなし' }}
                      </v-chip>
                      <v-chip
                        size="small"
                        variant="outlined"
                        class="mr-2"
                      >
                        {{ formData.date || '日付未設定' }}
                      </v-chip>
                      <v-chip
                        v-if="formData.readTime"
                        size="small"
                        variant="outlined"
                      >
                        {{ formData.readTime }}
                      </v-chip>
                    </div>

                    <h1 class="text-h4 mb-4">
                      {{ formData.title || 'タイトル未設定' }}
                    </h1>

                    <p class="text-body-1 mb-4 text-grey-darken-1">
                      {{ formData.excerpt || '概要未設定' }}
                    </p>

                    <div v-if="formData.tags && formData.tags.length" class="mb-4">
                      <v-chip
                        v-for="tag in formData.tags"
                        :key="tag"
                        size="small"
                        variant="outlined"
                        class="ma-1"
                      >
                        {{ tag }}
                      </v-chip>
                    </div>

                    <v-divider class="my-4" />

                    <div 
                      v-if="formData.content"
                      v-html="formData.content"
                      class="article-content"
                    />
                    <div v-else class="text-center text-grey-lighten-1 py-8">
                      <v-icon size="48" class="mb-2">mdi-text-box-outline</v-icon>
                      <p>記事本文をプレビューします</p>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { Article } from '~/types'

interface Props {
  mode: 'create' | 'edit'
  article?: Article
}

interface FormData {
  title: string
  category: string
  date: string
  excerpt: string
  content: string
  readTime: string
  status: string
  tags: string[]
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'create'
})

const emit = defineEmits<{
  save: [article: Article]
  cancel: []
}>()

// Component state
const form = ref()
const isFormValid = ref(false)
const previewMode = ref(false)

// Form data
const formData = ref<FormData>({
  title: '',
  category: '',
  date: new Date().toISOString().split('T')[0], // Today's date
  excerpt: '',
  content: '',
  readTime: '',
  status: '公開',
  tags: []
})

// Options
const categories = [
  '企業ニュース',
  'サービス',
  'コーヒー事業',
  '展示・イベント',
  '釣具・器具',
  'LAB・研究開発',
  'クラブ活動'
]

const statusOptions = ['公開', '下書き', '非公開']

const availableTags = [
  '設立', '企業情報', 'ニュース', '新商品', 'サービス',
  'コーヒー', 'サステナブル', 'フィッシング', '教育',
  'コース', '展示', 'アート', '文化交流', 'イベント',
  '研究開発', 'イノベーション', 'ラボ', 'クラブ', 'コミュニティ'
]

const popularTags = ['新商品', 'サービス', 'イベント', '企業情報', 'コーヒー']

// Validation rules
const titleRules = [
  (v: string) => !!v || 'タイトルは必須です',
  (v: string) => (v && v.length <= 100) || 'タイトルは100文字以内で入力してください'
]

const requiredRules = [
  (v: string) => !!v || 'この項目は必須です'
]

const excerptRules = [
  (v: string) => !!v || '概要は必須です',
  (v: string) => (v && v.length <= 200) || '概要は200文字以内で入力してください'
]

// Methods
const saveArticle = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return

  const article: Article = {
    id: props.article?.id || Date.now(),
    title: formData.value.title,
    category: formData.value.category,
    date: formData.value.date.replace(/-/g, '.'),
    excerpt: formData.value.excerpt,
    content: formData.value.content,
    readTime: formData.value.readTime || estimateReadTimeFromContent(),
    tags: formData.value.tags
  }

  emit('save', article)
}

const addTag = (tag: string) => {
  if (!formData.value.tags.includes(tag)) {
    formData.value.tags.push(tag)
  }
}

const removeTag = (tag: string) => {
  const index = formData.value.tags.indexOf(tag)
  if (index > -1) {
    formData.value.tags.splice(index, 1)
  }
}

const insertTemplate = (type: string) => {
  let template = ''
  switch (type) {
    case 'heading':
      template = '<h2>見出し</h2>\n'
      break
    case 'paragraph':
      template = '<p>段落の内容をここに記入してください。</p>\n'
      break
    case 'list':
      template = '<ul>\n  <li>項目1</li>\n  <li>項目2</li>\n  <li>項目3</li>\n</ul>\n'
      break
  }
  formData.value.content += template
}

const autoGenerateExcerpt = () => {
  if (!formData.value.content) {
    alert('記事本文を入力してから概要を生成してください。')
    return
  }
  
  // Extract text content from HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = formData.value.content
  const textContent = tempDiv.textContent || tempDiv.innerText || ''
  
  // Generate excerpt (first 180 characters)
  const excerpt = textContent.substring(0, 180).replace(/\s+$/, '')
  formData.value.excerpt = excerpt + (textContent.length > 180 ? '...' : '')
}

const estimateReadTime = () => {
  const readTime = estimateReadTimeFromContent()
  formData.value.readTime = readTime
}

const estimateReadTimeFromContent = () => {
  if (!formData.value.content) return '1分'
  
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = formData.value.content
  const textContent = tempDiv.textContent || tempDiv.innerText || ''
  const wordsPerMinute = 400 // Average reading speed for Japanese
  const minutes = Math.ceil(textContent.length / wordsPerMinute)
  return `${Math.max(1, minutes)}分`
}

const clearForm = () => {
  if (confirm('フォームの内容をクリアしますか？この操作は元に戻せません。')) {
    formData.value = {
      title: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      excerpt: '',
      content: '',
      readTime: '',
      status: '公開',
      tags: []
    }
  }
}

// Initialize form data when editing
watch(() => props.article, (article) => {
  if (article && props.mode === 'edit') {
    formData.value = {
      title: article.title,
      category: article.category,
      date: article.date.replace(/\./g, '-'),
      excerpt: article.excerpt,
      content: article.content || '',
      readTime: article.readTime || '',
      status: '公開',
      tags: article.tags || []
    }
  }
}, { immediate: true })

// Auto-save to localStorage every 30 seconds
let autoSaveInterval: NodeJS.Timeout
onMounted(() => {
  if (process.client) {
    autoSaveInterval = setInterval(() => {
      localStorage.setItem('article_draft', JSON.stringify(formData.value))
    }, 30000)
    
    // Load draft if creating new article
    if (props.mode === 'create') {
      const draft = localStorage.getItem('article_draft')
      if (draft) {
        try {
          const draftData = JSON.parse(draft)
          if (confirm('下書きが見つかりました。読み込みますか？')) {
            formData.value = draftData
          }
        } catch (error) {
          console.error('Failed to load draft:', error)
        }
      }
    }
  }
})

onUnmounted(() => {
  if (autoSaveInterval) {
    clearInterval(autoSaveInterval)
  }
  // Clear draft when component is destroyed
  if (process.client && props.mode === 'create') {
    localStorage.removeItem('article_draft')
  }
})
</script>

<style scoped>
.sticky-preview {
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

.article-preview {
  max-height: calc(100vh - 12rem);
  overflow-y: auto;
}

.article-content :deep(h1),
.article-content :deep(h2),
.article-content :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1976d2;
}

.article-content :deep(h1) {
  font-size: 1.8rem;
  font-weight: 700;
}

.article-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
}

.article-content :deep(h3) {
  font-size: 1.3rem;
  font-weight: 600;
}

.article-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-bottom: 1rem;
  margin-left: 1.5rem;
}

.article-content :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.article-content :deep(blockquote) {
  border-left: 4px solid #1976d2;
  padding-left: 1rem;
  margin: 1rem 0;
  font-style: italic;
  color: #666;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .sticky-preview {
    position: relative;
    max-height: none;
  }
}
</style>