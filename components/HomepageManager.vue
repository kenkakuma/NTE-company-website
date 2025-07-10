<!-- 首页管理组件 -->
<template>
  <div class="homepage-manager">
    <!-- 标签导航 -->
    <v-tabs v-model="activeTab" color="primary" class="mb-6">
      <v-tab value="background">
        <v-icon start>mdi-image</v-icon>
        背景图片管理
      </v-tab>
      <v-tab value="partners">
        <v-icon start>mdi-handshake</v-icon>
        合作伙伴管理
      </v-tab>
    </v-tabs>

    <!-- 标签内容 -->
    <v-window v-model="activeTab">
      <!-- 背景图片管理 -->
      <v-window-item value="background">
        <div class="tab-content">
          <div class="content-header">
            <h2 class="section-title">
              <v-icon start>mdi-image</v-icon>
              Hero背景图片管理
            </h2>
            <p class="section-description">
              管理首页Hero区域的背景图片和内容设置
            </p>
          </div>

          <v-row>
            <!-- 设置面板 -->
            <v-col cols="12" md="6">
              <v-card title="背景图片设置">
                <v-card-text>
                  <div class="current-background">
                    <div class="background-preview">
                      <img 
                        :src="currentBackground" 
                        alt="当前背景" 
                        class="preview-image"
                      >
                      <div class="preview-overlay">
                        <v-btn
                          icon="mdi-eye"
                          color="white"
                          @click="previewBackground"
                        />
                      </div>
                    </div>
                    <div class="background-info">
                      <h4>当前背景</h4>
                      <p>点击预设图片或上传自定义图片来更换背景</p>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <div class="preset-images">
                    <h4 class="mb-3">预设背景图片</h4>
                    <div class="preset-grid">
                      <div
                        v-for="(preset, index) in presetImages"
                        :key="index"
                        class="preset-item"
                        :class="{ active: currentBackground === preset.url }"
                        @click="selectPreset(preset)"
                      >
                        <img :src="preset.url" :alt="preset.name">
                        <div class="preset-overlay">
                          <v-icon color="white">mdi-check</v-icon>
                        </div>
                      </div>
                    </div>
                  </div>

                  <v-divider class="my-4" />

                  <div class="upload-section">
                    <h4 class="mb-3">上传自定义背景</h4>
                    <v-file-input
                      v-model="uploadedFile"
                      label="选择图片文件"
                      accept="image/*"
                      prepend-icon="mdi-upload"
                      variant="outlined"
                      @update:model-value="handleFileUpload"
                    />
                  </div>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- 内容设置 -->
            <v-col cols="12" md="6">
              <v-card title="Hero内容设置">
                <v-card-text>
                  <v-form>
                    <v-textarea
                      v-model="heroContent.title"
                      label="主标题"
                      variant="outlined"
                      rows="2"
                      class="mb-3"
                    />
                    
                    <v-textarea
                      v-model="heroContent.description"
                      label="描述文字"
                      variant="outlined"
                      rows="3"
                      class="mb-3"
                    />
                    
                    <div class="button-settings">
                      <h4 class="mb-3">按钮设置</h4>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="heroContent.button1Text"
                            label="按钮1文字"
                            variant="outlined"
                            density="compact"
                          />
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="heroContent.button1Link"
                            label="按钮1链接"
                            variant="outlined"
                            density="compact"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="heroContent.button2Text"
                            label="按钮2文字"
                            variant="outlined"
                            density="compact"
                          />
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="heroContent.button2Link"
                            label="按钮2链接"
                            variant="outlined"
                            density="compact"
                          />
                        </v-col>
                      </v-row>
                    </div>
                  </v-form>
                </v-card-text>
                
                <v-card-actions>
                  <v-spacer />
                  <v-btn 
                    color="primary" 
                    @click="saveHeroContent"
                    :loading="saving"
                  >
                    保存设置
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-window-item>

      <!-- 合作伙伴管理 -->
      <v-window-item value="partners">
        <div class="tab-content">
          <div class="content-header">
            <h2 class="section-title">
              <v-icon start>mdi-handshake</v-icon>
              合作伙伴管理
            </h2>
            <p class="section-description">
              管理首页合作伙伴Logo和链接
            </p>
          </div>

          <v-card>
            <v-card-title class="d-flex align-center">
              <span>合作伙伴列表</span>
              <v-spacer />
              <v-btn
                color="primary"
                @click="showAddPartner = true"
                prepend-icon="mdi-plus"
              >
                添加合作伙伴
              </v-btn>
            </v-card-title>

            <v-card-text>
              <div class="partners-grid">
                <div
                  v-for="(partner, index) in partners"
                  :key="index"
                  class="partner-item"
                >
                  <div class="partner-logo">
                    <img :src="partner.logo" :alt="partner.name">
                  </div>
                  <div class="partner-info">
                    <h4>{{ partner.name }}</h4>
                    <p>{{ partner.description }}</p>
                    <a :href="partner.link" target="_blank" class="partner-link">
                      {{ partner.link }}
                    </a>
                  </div>
                  <div class="partner-actions">
                    <v-btn
                      icon="mdi-pencil"
                      size="small"
                      variant="text"
                      @click="editPartner(partner, index)"
                    />
                    <v-btn
                      icon="mdi-delete"
                      size="small"
                      variant="text"
                      color="error"
                      @click="confirmDeletePartner(partner, index)"
                    />
                  </div>
                </div>
              </div>

              <div v-if="partners.length === 0" class="empty-state">
                <v-icon size="64" color="grey">mdi-handshake-outline</v-icon>
                <h3>还没有合作伙伴</h3>
                <p>点击"添加合作伙伴"开始添加</p>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-window-item>
    </v-window>

    <!-- 添加/编辑合作伙伴对话框 -->
    <v-dialog v-model="showAddPartner" max-width="600">
      <v-card>
        <v-card-title>
          {{ editingPartnerIndex !== null ? '编辑合作伙伴' : '添加合作伙伴' }}
        </v-card-title>
        <v-card-text>
          <v-form v-model="partnerFormValid">
            <v-text-field
              v-model="partnerForm.name"
              label="合作伙伴名称"
              :rules="[v => !!v || '请输入名称']"
              variant="outlined"
              required
            />
            
            <v-text-field
              v-model="partnerForm.description"
              label="描述"
              variant="outlined"
            />
            
            <v-text-field
              v-model="partnerForm.link"
              label="网站链接"
              :rules="[v => !!v || '请输入链接']"
              variant="outlined"
              required
            />
            
            <v-file-input
              v-model="partnerLogoFile"
              label="Logo图片"
              accept="image/*"
              prepend-icon="mdi-upload"
              variant="outlined"
              @update:model-value="handlePartnerLogoUpload"
            />
            
            <div v-if="partnerForm.logo" class="logo-preview">
              <img :src="partnerForm.logo" alt="Logo预览" class="preview-logo">
            </div>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="cancelPartnerEdit">取消</v-btn>
          <v-btn
            color="primary"
            :disabled="!partnerFormValid"
            @click="savePartner"
          >
            保存
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- 删除确认对话框 -->
    <v-dialog v-model="showDeleteConfirm" max-width="400">
      <v-card>
        <v-card-title>确认删除</v-card-title>
        <v-card-text>
          确定要删除合作伙伴"{{ deleteTarget?.name }}"吗？
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="showDeleteConfirm = false">取消</v-btn>
          <v-btn color="error" @click="deletePartner">删除</v-btn>
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
import { ref, onMounted } from 'vue'

// 响应式状态
const activeTab = ref('background')
const saving = ref(false)
const showAddPartner = ref(false)
const showDeleteConfirm = ref(false)
const partnerFormValid = ref(false)
const showMessage = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error' | 'warning'>('success')

// 背景图片相关
const currentBackground = ref('/images/default-hero-bg.svg')
const uploadedFile = ref<File[]>([])

// Hero内容
const heroContent = ref({
  title: '夢の家探しを<br>お手伝いします。',
  description: '商品の香りもとてもよく、お客様にも大変喜ばれております。ヴァルプデートツイス、<br>トチョコレートの利点もあります。悲しい湖の観えも、ウラムコーパー・ルトラム',
  button1Text: '私たちについて',
  button1Link: '/about',
  button2Text: 'サービス詳細',
  button2Link: '/services'
})

// 合作伙伴相关
const partners = ref<Array<{
  name: string
  description: string
  link: string
  logo: string
}>>([])

const partnerForm = ref({
  name: '',
  description: '',
  link: '',
  logo: ''
})

const partnerLogoFile = ref<File[]>([])
const editingPartnerIndex = ref<number | null>(null)
const deleteTarget = ref<any>(null)
const deleteTargetIndex = ref<number | null>(null)

// 预设背景图片
const presetImages = [
  {
    name: '珈琲事業',
    url: '/images/hero-bg-1.svg'
  },
  {
    name: '展示・イベント',
    url: '/images/hero-bg-2.svg'
  },
  {
    name: '技術研究開発',
    url: '/images/hero-bg-3.svg'
  },
  {
    name: 'コミュニティ運営',
    url: '/images/hero-bg-4.svg'
  },
  {
    name: 'イノベーション',
    url: '/images/hero-bg-5.svg'
  },
  {
    name: '未来ビジョン',
    url: '/images/hero-bg-6.svg'
  }
]

// 方法
const loadSettings = () => {
  try {
    const savedSettings = localStorage.getItem('notrace_homepage')
    if (savedSettings) {
      const settings = JSON.parse(savedSettings)
      if (settings.background) {
        currentBackground.value = settings.background
      }
      if (settings.heroContent) {
        heroContent.value = { ...heroContent.value, ...settings.heroContent }
      }
      if (settings.partners) {
        partners.value = settings.partners
      }
    }
  } catch (error) {
    console.error('Failed to load settings:', error)
  }
}

const saveSettings = () => {
  try {
    const settings = {
      background: currentBackground.value,
      heroContent: heroContent.value,
      partners: partners.value
    }
    localStorage.setItem('notrace_homepage', JSON.stringify(settings))
  } catch (error) {
    console.error('Failed to save settings:', error)
  }
}

const selectPreset = (preset: any) => {
  currentBackground.value = preset.url
  saveSettings()
  showMessage.value = true
  message.value = `已设置为: ${preset.name}`
  messageType.value = 'success'
}

const handleFileUpload = (files: File | File[]) => {
  const fileArray = Array.isArray(files) ? files : [files]
  if (fileArray && fileArray.length > 0) {
    const file = fileArray[0]
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        currentBackground.value = e.target?.result as string
        saveSettings()
        showMessage.value = true
        message.value = '背景图片已上传'
        messageType.value = 'success'
      }
      reader.readAsDataURL(file)
    } else {
      showMessage.value = true
      message.value = '请选择图片文件'
      messageType.value = 'error'
    }
  }
}

const previewBackground = () => {
  window.open(currentBackground.value, '_blank')
}

const saveHeroContent = () => {
  saving.value = true
  
  setTimeout(() => {
    saveSettings()
    saving.value = false
    showMessage.value = true
    message.value = 'Hero内容已保存'
    messageType.value = 'success'
  }, 500)
}

const handlePartnerLogoUpload = (files: File | File[]) => {
  const fileArray = Array.isArray(files) ? files : [files]
  if (fileArray && fileArray.length > 0) {
    const file = fileArray[0]
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        partnerForm.value.logo = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }
}

const editPartner = (partner: any, index: number) => {
  editingPartnerIndex.value = index
  partnerForm.value = { ...partner }
  showAddPartner.value = true
}

const confirmDeletePartner = (partner: any, index: number) => {
  deleteTarget.value = partner
  deleteTargetIndex.value = index
  showDeleteConfirm.value = true
}

const deletePartner = () => {
  if (deleteTargetIndex.value !== null) {
    partners.value.splice(deleteTargetIndex.value, 1)
    saveSettings()
    showMessage.value = true
    message.value = '合作伙伴已删除'
    messageType.value = 'success'
  }
  showDeleteConfirm.value = false
  deleteTarget.value = null
  deleteTargetIndex.value = null
}

const savePartner = () => {
  if (editingPartnerIndex.value !== null) {
    partners.value[editingPartnerIndex.value] = { ...partnerForm.value }
    showMessage.value = true
    message.value = '合作伙伴已更新'
    messageType.value = 'success'
  } else {
    partners.value.push({ ...partnerForm.value })
    showMessage.value = true
    message.value = '合作伙伴已添加'
    messageType.value = 'success'
  }
  
  saveSettings()
  cancelPartnerEdit()
}

const cancelPartnerEdit = () => {
  showAddPartner.value = false
  editingPartnerIndex.value = null
  partnerForm.value = {
    name: '',
    description: '',
    link: '',
    logo: ''
  }
  partnerLogoFile.value = []
}

// 生命周期
onMounted(() => {
  loadSettings()
})
</script>

<style scoped>
.homepage-manager {
  width: 100%;
}

.tab-content {
  padding: 0;
}

.content-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-description {
  color: #666666;
  margin: 0;
}

.current-background {
  margin-bottom: 1.5rem;
}

.background-preview {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.background-preview:hover .preview-overlay {
  opacity: 1;
}

.background-info h4 {
  color: #1A1A1A;
  margin-bottom: 0.5rem;
}

.background-info p {
  color: #666666;
  margin: 0;
}

.preset-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.preset-item {
  position: relative;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s;
}

.preset-item:hover {
  border-color: #667eea;
}

.preset-item.active {
  border-color: #667eea;
}

.preset-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preset-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.preset-item.active .preset-overlay {
  opacity: 1;
}

.button-settings h4 {
  color: #1A1A1A;
  font-weight: 500;
}

.partners-grid {
  display: grid;
  gap: 1rem;
}

.partner-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
}

.partner-logo {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.partner-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.partner-info {
  flex: 1;
}

.partner-info h4 {
  color: #1A1A1A;
  margin-bottom: 0.25rem;
}

.partner-info p {
  color: #666666;
  margin-bottom: 0.25rem;
}

.partner-link {
  color: #667eea;
  text-decoration: none;
  font-size: 0.875rem;
}

.partner-actions {
  display: flex;
  gap: 0.25rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #666666;
}

.empty-state h3 {
  margin: 1rem 0 0.5rem;
}

.logo-preview {
  margin-top: 1rem;
  text-align: center;
}

.preview-logo {
  max-width: 150px;
  max-height: 100px;
  border-radius: 8px;
  border: 1px solid #E0E0E0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .preset-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  .preset-item {
    height: 60px;
  }
  
  .partner-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .partner-logo {
    width: 80px;
    height: 80px;
  }
}
</style>