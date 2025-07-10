<!-- 文章管理组件 -->
<template>
  <div class="article-manager">
    <!-- 顶部操作栏 -->
    <div class="toolbar">
      <div class="toolbar-left">
        <v-text-field
          v-model="searchQuery"
          label="搜索文章"
          prepend-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          class="search-field"
          clearable
        />
        
        <v-select
          v-model="selectedCategory"
          label="筛选分类"
          :items="categoryOptions"
          variant="outlined"
          density="compact"
          class="category-filter"
          clearable
        />
      </div>
      
      <div class="toolbar-right">
        <v-btn
          color="primary"
          @click="showCreateDialog = true"
          prepend-icon="mdi-plus"
        >
          新建文章
        </v-btn>
      </div>
    </div>

    <!-- 文章列表 -->
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon start>mdi-newspaper</v-icon>
        文章列表
        <v-spacer />
        <v-chip color="primary" size="small">
          {{ filteredArticles.length }} 篇文章
        </v-chip>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="filteredArticles"
        :loading="loading"
        item-key="id"
        class="article-table"
        no-data-text="暂无文章"
        loading-text="加载中..."
      >
        <template v-slot:item.title="{ item }">
          <div class="article-title">
            <div class="title-text">{{ item.title }}</div>
            <div class="excerpt">{{ item.excerpt }}</div>
          </div>
        </template>

        <template v-slot:item.category="{ item }">
          <v-chip
            :color="getCategoryColor(item.category)"
            size="small"
            variant="tonal"
          >
            {{ item.category }}
          </v-chip>
        </template>

        <template v-slot:item.date="{ item }">
          {{ formatDate(item.date) }}
        </template>

        <template v-slot:item.readTime="{ item }">
          <v-chip size="small" variant="outlined">
            {{ item.readTime }}
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <div class="action-buttons">
            <v-btn
              icon="mdi-eye"
              size="small"
              variant="text"
              @click="viewArticle(item)"
              title="查看"
            />
            <v-btn
              icon="mdi-pencil"
              size="small"
              variant="text"
              @click="editArticle(item)"
              title="编辑"
            />
            <v-btn
              icon="mdi-delete"
              size="small"
              variant="text"
              color="error"
              @click="confirmDelete(item)"
              title="删除"
            />
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- 创建/编辑文章对话框 -->
    <v-dialog v-model="showCreateDialog" max-width="1000" persistent>
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon start>{{ editingArticle ? 'mdi-pencil' : 'mdi-plus' }}</v-icon>
          {{ editingArticle ? '编辑文章' : '新建文章' }}
        </v-card-title>

        <v-card-text>
          <v-form ref="articleForm" v-model="formValid">
            <v-row>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model="articleForm.title"
                  label="文章标题"
                  :rules="[rules.required]"
                  variant="outlined"
                  required
                />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="articleForm.date"
                  label="发布日期"
                  type="date"
                  :rules="[rules.required]"
                  variant="outlined"
                  required
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  v-model="articleForm.category"
                  label="文章分类"
                  :items="categoryOptions"
                  :rules="[rules.required]"
                  variant="outlined"
                  required
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="articleForm.readTime"
                  label="阅读时间"
                  placeholder="例如: 3分钟"
                  variant="outlined"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="articleForm.tags"
                  label="标签 (用逗号分隔)"
                  placeholder="例如: 企业新闻, 产品更新"
                  variant="outlined"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="articleForm.excerpt"
                  label="文章摘要"
                  :rules="[rules.required]"
                  variant="outlined"
                  rows="3"
                  counter="200"
                  required
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="articleForm.content"
                  label="文章内容 (支持HTML)"
                  :rules="[rules.required]"
                  variant="outlined"
                  rows="10"
                  required
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn @click="cancelEdit">取消</v-btn>
          <v-btn
            color="primary"
            :disabled="!formValid"
            @click="saveArticle"
          >
            {{ editingArticle ? '保存' : '创建' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 文章预览对话框 -->
    <v-dialog v-model="showPreviewDialog" max-width="800">
      <v-card v-if="previewArticle">
        <v-card-title>{{ previewArticle.title }}</v-card-title>
        <v-card-text>
          <div class="article-meta">
            <v-chip color="primary" size="small">{{ previewArticle.category }}</v-chip>
            <span class="mx-2">{{ formatDate(previewArticle.date) }}</span>
            <span>{{ previewArticle.readTime }}</span>
          </div>
          <p class="article-excerpt">{{ previewArticle.excerpt }}</p>
          <div class="article-content" v-html="previewArticle.content"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showPreviewDialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 删除确认对话框 -->
    <v-dialog v-model="showDeleteDialog" max-width="400">
      <v-card>
        <v-card-title>确认删除</v-card-title>
        <v-card-text>
          确定要删除文章"{{ deleteTarget?.title }}"吗？此操作不可撤销。
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showDeleteDialog = false">取消</v-btn>
          <v-btn color="error" @click="deleteArticle">删除</v-btn>
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
import { ref, computed, onMounted } from 'vue'
import type { Article } from '~/types'
import { articlesData } from '~/data/articles'

// 响应式状态
const loading = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('')
const showCreateDialog = ref(false)
const showPreviewDialog = ref(false)
const showDeleteDialog = ref(false)
const formValid = ref(false)
const showMessage = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error' | 'warning'>('success')

// 文章数据
const articles = ref<Article[]>([])
const editingArticle = ref<Article | null>(null)
const previewArticle = ref<Article | null>(null)
const deleteTarget = ref<Article | null>(null)

// 表单数据
const articleForm = ref({
  title: '',
  date: '',
  category: '',
  excerpt: '',
  content: '',
  readTime: '',
  tags: ''
})

// 表格列定义
const headers = [
  { title: '标题', key: 'title', sortable: true },
  { title: '分类', key: 'category', sortable: true },
  { title: '发布日期', key: 'date', sortable: true },
  { title: '阅读时间', key: 'readTime', sortable: false },
  { title: '操作', key: 'actions', sortable: false, width: '120' }
]

// 分类选项
const categoryOptions = [
  '企業ニュース',
  'サービス',
  'コーヒー事業',
  '展示・イベント',
  '釣具・器具',
  'LAB・研究開発',
  'クラブ活動'
]

// 表单验证规则
const rules = {
  required: (value: string) => !!value || '此字段为必填项'
}

// 计算属性
const filteredArticles = computed(() => {
  let filtered = articles.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    )
  }

  if (selectedCategory.value) {
    filtered = filtered.filter(article => 
      article.category === selectedCategory.value
    )
  }

  return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

// 方法
const loadArticles = () => {
  try {
    const stored = localStorage.getItem('notrace_articles')
    if (stored) {
      articles.value = JSON.parse(stored)
    } else {
      articles.value = [...articlesData]
      saveArticles()
    }
  } catch (error) {
    console.error('Failed to load articles:', error)
    articles.value = [...articlesData]
  }
}

const saveArticles = () => {
  try {
    localStorage.setItem('notrace_articles', JSON.stringify(articles.value))
  } catch (error) {
    console.error('Failed to save articles:', error)
    showMessage.value = true
    message.value = '保存失败'
    messageType.value = 'error'
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString.replace(/\./g, '-'))
  return date.toLocaleDateString('zh-CN')
}

const getCategoryColor = (category: string) => {
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

const viewArticle = (article: Article) => {
  previewArticle.value = article
  showPreviewDialog.value = true
}

const editArticle = (article: Article) => {
  editingArticle.value = article
  articleForm.value = {
    title: article.title,
    date: article.date.replace(/\./g, '-'),
    category: article.category,
    excerpt: article.excerpt,
    content: article.content,
    readTime: article.readTime,
    tags: article.tags.join(', ')
  }
  showCreateDialog.value = true
}

const confirmDelete = (article: Article) => {
  deleteTarget.value = article
  showDeleteDialog.value = true
}

const deleteArticle = () => {
  if (deleteTarget.value) {
    const index = articles.value.findIndex(a => a.id === deleteTarget.value!.id)
    if (index !== -1) {
      articles.value.splice(index, 1)
      saveArticles()
      showMessage.value = true
      message.value = '文章已删除'
      messageType.value = 'success'
    }
  }
  showDeleteDialog.value = false
  deleteTarget.value = null
}

const saveArticle = () => {
  if (!formValid.value) return

  const articleData = {
    id: editingArticle.value?.id || Date.now(),
    title: articleForm.value.title,
    date: articleForm.value.date.replace(/-/g, '.'),
    category: articleForm.value.category,
    excerpt: articleForm.value.excerpt,
    content: articleForm.value.content,
    readTime: articleForm.value.readTime || '阅读时间未设置',
    tags: articleForm.value.tags.split(',').map(tag => tag.trim()).filter(Boolean)
  }

  if (editingArticle.value) {
    // 更新文章
    const index = articles.value.findIndex(a => a.id === editingArticle.value!.id)
    if (index !== -1) {
      articles.value[index] = articleData
      showMessage.value = true
      message.value = '文章已更新'
      messageType.value = 'success'
    }
  } else {
    // 新建文章
    articles.value.unshift(articleData)
    showMessage.value = true
    message.value = '文章已创建'
    messageType.value = 'success'
  }

  saveArticles()
  cancelEdit()
}

const cancelEdit = () => {
  showCreateDialog.value = false
  editingArticle.value = null
  articleForm.value = {
    title: '',
    date: '',
    category: '',
    excerpt: '',
    content: '',
    readTime: '',
    tags: ''
  }
}

// 生命周期
onMounted(() => {
  loadArticles()
})
</script>

<style scoped>
.article-manager {
  width: 100%;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.toolbar-left {
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

.article-table {
  background: white;
}

.article-title {
  max-width: 400px;
}

.title-text {
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.25rem;
}

.excerpt {
  font-size: 0.875rem;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.action-buttons {
  display: flex;
  gap: 0.25rem;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E0E0E0;
}

.article-excerpt {
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.article-content {
  line-height: 1.8;
}

.article-content h3 {
  color: #1A1A1A;
  margin: 1.5rem 0 1rem;
}

.article-content p {
  margin-bottom: 1rem;
}

.article-content ul, .article-content ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }
  
  .toolbar-left {
    flex-direction: column;
  }
  
  .search-field,
  .category-filter {
    max-width: none;
  }
  
  .article-title {
    max-width: 250px;
  }
}
</style>