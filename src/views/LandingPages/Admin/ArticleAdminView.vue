<template>
  <NavbarDefault :sticky="true" />
  
  <!-- 头部区域 -->
  <Header>
    <div 
      class="page-header min-vh-75" 
      :style="{
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))',
        backgroundAttachment: 'fixed'
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="text-white pt-3 mt-n5 me-2" style="display: inline-block;">
              記事管理システム
            </h1>
            <p class="lead text-white px-5 mt-3" style="font-weight: 500;">
              企業ニュース・記事の投稿、編集、管理を簡単に行えます<br/>
              コードの知識は不要です
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <!-- 主要内容区域 -->  
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <section class="pt-3 pb-4">
      <div class="container">
        
        <!-- 操作按钮区域 -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center flex-wrap">
              <h2 class="mb-0">記事管理</h2>
              <div class="d-flex gap-2 mt-2 mt-md-0">
                <button 
                  v-if="!showEditor"
                  @click="startNewArticle" 
                  class="btn btn-primary"
                  style="background: linear-gradient(135deg, #667eea, #764ba2); border: none;"
                >
                  <i class="material-icons me-1">add</i>
                  新しい記事
                </button>
                <button 
                  v-if="showEditor" 
                  @click="cancelEdit" 
                  class="btn btn-outline-secondary"
                >
                  <i class="material-icons me-1">cancel</i>
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 编辑器界面 -->
        <div v-if="showEditor" class="row mb-5">
          <div class="col-12">
            <div class="card shadow-lg">
              <div class="card-header bg-gradient-primary text-white">
                <h4 class="mb-0 text-white">
                  <i class="material-icons me-2">edit</i>
                  {{ isEditMode ? '記事編集' : '新規記事作成' }}
                </h4>
              </div>
              <div class="card-body p-4">
                <form @submit.prevent="saveArticle">
                  <div class="row">
                    <!-- 左侧编辑表单 -->
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">記事タイトル <span class="text-danger">*</span></label>
                        <input 
                          v-model="editingArticle.title" 
                          type="text" 
                          class="form-control" 
                          placeholder="記事のタイトルを入力してください"
                          required
                        >
                      </div>
                      
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <label class="form-label">カテゴリ</label>
                          <select v-model="editingArticle.category" class="form-select">
                            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                          </select>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label class="form-label">読了時間</label>
                          <input 
                            v-model="editingArticle.readTime" 
                            type="text" 
                            class="form-control" 
                            placeholder="例: 3分"
                          >
                        </div>
                      </div>

                      <div class="mb-3">
                        <label class="form-label">記事概要 <span class="text-danger">*</span></label>
                        <textarea 
                          v-model="editingArticle.excerpt" 
                          class="form-control" 
                          rows="3"
                          placeholder="記事の簡潔な説明を入力してください"
                          required
                        ></textarea>
                      </div>

                      <div class="mb-3">
                        <label class="form-label">タグ</label>
                        <div class="row">
                          <div class="col-md-8">
                            <input 
                              v-model="newTag" 
                              type="text" 
                              class="form-control" 
                              placeholder="タグを入力してEnter"
                              @keyup.enter="addTag"
                            >
                          </div>
                          <div class="col-md-4">
                            <button type="button" @click="addTag" class="btn btn-outline-primary w-100">
                              追加
                            </button>
                          </div>
                        </div>
                        <div class="mt-2">
                          <span 
                            v-for="tag in editingArticle.tags" 
                            :key="tag"
                            class="badge bg-primary me-1 mb-1"
                            style="cursor: pointer;"
                            @click="removeTag(tag)"
                          >
                            {{ tag }} ×
                          </span>
                        </div>
                        <small class="text-muted">よく使用されるタグ:</small>
                        <div class="mt-1">
                          <span 
                            v-for="tag in commonTags.slice(0, 8)" 
                            :key="tag"
                            class="badge bg-light text-dark me-1 mb-1"
                            style="cursor: pointer;"
                            @click="addCommonTag(tag)"
                          >
                            + {{ tag }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- 右侧内容编辑 -->
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">記事内容 <span class="text-danger">*</span></label>
                        <div class="mb-2">
                          <small class="text-muted">
                            HTML形式で入力できます。段落は &lt;p&gt;&lt;/p&gt;、見出しは &lt;h4&gt;&lt;/h4&gt;、リストは &lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt; を使用してください。
                          </small>
                        </div>
                        <textarea 
                          v-model="editingArticle.content" 
                          class="form-control" 
                          rows="12"
                          placeholder="<p>記事の内容をここに入力してください...</p>"
                          required
                          style="font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; font-size: 13px;"
                        ></textarea>
                      </div>
                      
                      <!-- 预览按钮 -->
                      <div class="mb-3">
                        <button 
                          type="button" 
                          @click="showPreview = !showPreview" 
                          class="btn btn-outline-info"
                        >
                          <i class="material-icons me-1">{{ showPreview ? 'visibility_off' : 'visibility' }}</i>
                          {{ showPreview ? 'プレビューを隠す' : 'プレビュー表示' }}
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- 预览区域 -->
                  <div v-if="showPreview" class="row mt-4">
                    <div class="col-12">
                      <div class="card bg-light">
                        <div class="card-header">
                          <h5 class="mb-0">プレビュー</h5>
                        </div>
                        <div class="card-body">
                          <div class="article-preview">
                            <h3>{{ editingArticle.title || 'タイトルなし' }}</h3>
                            <div class="d-flex align-items-center mb-3 text-muted">
                              <span class="badge bg-primary me-2">{{ editingArticle.category }}</span>
                              <small>{{ editingArticle.readTime }}</small>
                            </div>
                            <p class="text-muted">{{ editingArticle.excerpt || '概要なし' }}</p>
                            <div class="content-preview" v-html="editingArticle.content"></div>
                            <div class="mt-3">
                              <span 
                                v-for="tag in editingArticle.tags" 
                                :key="tag"
                                class="badge bg-outline-primary me-1"
                              >
                                {{ tag }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 保存按钮 -->
                  <div class="row mt-4">
                    <div class="col-12 text-end">
                      <button type="submit" class="btn btn-success btn-lg">
                        <i class="material-icons me-1">save</i>
                        {{ isEditMode ? '変更を保存' : '記事を公開' }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <!-- 文章列表 -->
        <div v-if="!showEditor" class="row">
          <div class="col-12">
            <div class="card shadow-lg">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="mb-0">記事一覧 ({{ articles.length }}件)</h4>
                <small class="text-muted">最新記事から表示</small>
              </div>
              <div class="card-body p-0">
                <div v-if="articles.length === 0" class="text-center py-5">
                  <i class="material-icons" style="font-size: 4rem; color: #ccc;">article</i>
                  <p class="text-muted mt-2">まだ記事がありません</p>
                </div>
                <div v-else>
                  <div 
                    v-for="article in articles" 
                    :key="article.id"
                    class="border-bottom p-4 hover-effect"
                    style="transition: background-color 0.2s ease;"
                  >
                    <div class="row align-items-center">
                      <div class="col-md-8">
                        <div class="d-flex align-items-center mb-2">
                          <span class="badge bg-primary me-2">{{ article.category }}</span>
                          <small class="text-muted">{{ article.date }} • {{ article.readTime }}</small>
                        </div>
                        <h5 class="mb-2">{{ article.title }}</h5>
                        <p class="text-muted mb-2">{{ article.excerpt.substring(0, 120) }}...</p>
                        <div>
                          <span 
                            v-for="tag in article.tags.slice(0, 3)" 
                            :key="tag"
                            class="badge bg-light text-dark me-1"
                          >
                            {{ tag }}
                          </span>
                          <span v-if="article.tags.length > 3" class="text-muted">
                            +{{ article.tags.length - 3 }}
                          </span>
                        </div>
                      </div>
                      <div class="col-md-4 text-end">
                        <div class="btn-group">
                          <button 
                            @click="editArticle(article)" 
                            class="btn btn-outline-primary btn-sm"
                          >
                            <i class="material-icons">edit</i>
                            編集
                          </button>
                          <button 
                            @click="deleteArticle(article)" 
                            class="btn btn-outline-danger btn-sm"
                          >
                            <i class="material-icons">delete</i>
                            削除
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>

  <DefaultFooter />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import NavbarDefault from "@/examples/navbars/NavbarDefault.vue"
import DefaultFooter from "@/examples/footers/FooterDefault.vue"
import Header from "@/examples/Header.vue"
import { newsArticles, categories, commonTags } from "@/data/articles.js"

// 响应式数据
const articles = ref([])
const showEditor = ref(false)
const showPreview = ref(false)
const isEditMode = ref(false)
const newTag = ref('')

// 编辑中的文章数据
const editingArticle = reactive({
  id: null,
  title: '',
  category: '企業ニュース',
  excerpt: '',
  content: '',
  readTime: '3分',
  tags: [],
  date: ''
})

// 生成今天的日期
const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}`
}

// 加载文章数据
const loadArticles = () => {
  articles.value = [...newsArticles].sort((a, b) => new Date(b.date) - new Date(a.date))
}

// 开始新建文章
const startNewArticle = () => {
  isEditMode.value = false
  showEditor.value = true
  showPreview.value = false
  resetEditingArticle()
  editingArticle.date = getTodayDate()
}

// 编辑文章
const editArticle = (article) => {
  isEditMode.value = true
  showEditor.value = true
  showPreview.value = false
  Object.assign(editingArticle, { ...article })
}

// 重置编辑表单
const resetEditingArticle = () => {
  Object.assign(editingArticle, {
    id: null,
    title: '',
    category: '企業ニュース',
    excerpt: '',
    content: '<p></p>',
    readTime: '3分',
    tags: [],
    date: ''
  })
}

// 取消编辑
const cancelEdit = () => {
  if (confirm('編集中の内容が失われます。本当にキャンセルしますか？')) {
    showEditor.value = false
    resetEditingArticle()
  }
}

// 添加标签
const addTag = () => {
  const tag = newTag.value.trim()
  if (tag && !editingArticle.tags.includes(tag)) {
    editingArticle.tags.push(tag)
    newTag.value = ''
  }
}

// 添加常用标签
const addCommonTag = (tag) => {
  if (!editingArticle.tags.includes(tag)) {
    editingArticle.tags.push(tag)
  }
}

// 移除标签
const removeTag = (tag) => {
  const index = editingArticle.tags.indexOf(tag)
  if (index > -1) {
    editingArticle.tags.splice(index, 1)
  }
}

// 保存文章
const saveArticle = () => {
  try {
    const articleData = { ...editingArticle }
    
    if (isEditMode.value) {
      // 编辑现有文章
      const index = articles.value.findIndex(a => a.id === articleData.id)
      if (index > -1) {
        articles.value[index] = articleData
      }
    } else {
      // 新建文章
      const newId = Math.max(...articles.value.map(a => a.id), 0) + 1
      articleData.id = newId
      articles.value.unshift(articleData)
    }
    
    // 保存到本地存储
    saveArticlesToLocalStorage()
    
    // 显示成功消息
    alert(isEditMode.value ? '記事が正常に更新されました！' : '新しい記事が公開されました！')
    
    // 返回列表
    showEditor.value = false
    resetEditingArticle()
    
  } catch (error) {
    alert('保存中にエラーが発生しました: ' + error.message)
  }
}

// 删除文章
const deleteArticle = (article) => {
  if (confirm(`「${article.title}」を削除してもよろしいですか？\nこの操作は取り消せません。`)) {
    const index = articles.value.indexOf(article)
    if (index > -1) {
      articles.value.splice(index, 1)
      saveArticlesToLocalStorage()
      alert('記事が削除されました。')
    }
  }
}

// 保存到本地存储
const saveArticlesToLocalStorage = () => {
  try {
    localStorage.setItem('notrace_articles', JSON.stringify(articles.value))
  } catch (error) {
    console.error('Failed to save articles to localStorage:', error)
  }
}

// 从本地存储加载
const loadArticlesFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem('notrace_articles')
    if (saved) {
      const parsedArticles = JSON.parse(saved)
      if (Array.isArray(parsedArticles) && parsedArticles.length > 0) {
        articles.value = parsedArticles
        return true
      }
    }
  } catch (error) {
    console.error('Failed to load articles from localStorage:', error)
  }
  return false
}

// 组件挂载时加载数据
onMounted(() => {
  // 优先从本地存储加载，如果没有则使用默认数据
  if (!loadArticlesFromLocalStorage()) {
    loadArticles()
  }
})
</script>

<style scoped>
.hover-effect:hover {
  background-color: #f8f9fa;
}

.article-preview {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
}

.article-preview h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.content-preview {
  margin: 1rem 0;
}

.content-preview p {
  margin-bottom: 1rem;
}

.content-preview h4 {
  color: #4a5568;
  margin: 1.5rem 0 1rem 0;
  font-size: 1.2rem;
}

.content-preview ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.content-preview li {
  margin-bottom: 0.5rem;
}

.badge.bg-outline-primary {
  border: 1px solid #667eea;
  color: #667eea;
  background: transparent;
}

.form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #5a6fd8, #6a4190);
  transform: translateY(-1px);
}
</style>