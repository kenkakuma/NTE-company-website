<template>
  <div class="anthropic-theme contact-page">
    <!-- Hero Section - Anthropic Style -->
    <section class="contact-hero-section">
      <div class="custom-container">
        <div class="hero-content">
          <h1 class="hero-title">お問い合わせ</h1>
          <p class="hero-description">
            NO TRACE EXPLORERへのお問い合わせ、ご相談はこちらから
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <div class="custom-container">
        <div class="form-wrapper">
          <div class="form-header">
            <h2 class="section-title">お気軽にお問い合わせください</h2>
            <p class="section-description">
              お客様のご要望をお聞かせください。専門スタッフが丁寧にご対応いたします。
            </p>
          </div>
          
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="firstName">姓 *</label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  class="form-input"
                  :class="{ 'form-input-error': errors.firstName }"
                  required
                />
                <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
              </div>
              <div class="form-group">
                <label class="form-label" for="lastName">名 *</label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  class="form-input"
                  :class="{ 'form-input-error': errors.lastName }"
                  required
                />
                <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="email">メールアドレス *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-input"
                :class="{ 'form-input-error': errors.email }"
                required
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="company">会社名・組織名</label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                class="form-input"
              />
            </div>
            
            <div class="form-group">
              <label class="form-label" for="category">お問い合わせ種別 *</label>
              <select
                id="category"
                v-model="form.category"
                class="form-select"
                :class="{ 'form-input-error': errors.category }"
                required
              >
                <option value="">選択してください</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
              <span v-if="errors.category" class="error-message">{{ errors.category }}</span>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="message">お問い合わせ内容 *</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-textarea"
                :class="{ 'form-input-error': errors.message }"
                rows="5"
                required
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>
            
            <div class="form-group">
              <label class="checkbox-label">
                <input
                  v-model="form.agreement"
                  type="checkbox"
                  class="form-checkbox"
                  required
                />
                <span class="checkbox-text">
                  <a href="#" class="privacy-link">プライバシーポリシー</a>に同意します
                </span>
              </label>
              <span v-if="errors.agreement" class="error-message">{{ errors.agreement }}</span>
            </div>
            
            <div class="form-submit">
              <button
                type="submit"
                class="submit-button"
                :disabled="loading"
              >
                <span v-if="loading">送信中...</span>
                <span v-else>送信する</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="contact-info-section">
      <div class="custom-container">
        <div class="section-header">
          <h2 class="section-title">お問い合わせ先</h2>
          <p class="section-description">
            その他のお問い合わせ方法
          </p>
        </div>
        
        <div class="contact-cards">
          <div 
            v-for="contact in contactInfo"
            :key="contact.title"
            class="contact-card"
          >
            <div class="contact-icon">
              <v-icon 
                :icon="getContactIcon(contact.type)"
                size="32"
                color="#E17B47"
                class="contact-icon-mdi"
              />
            </div>
            <h3 class="contact-title">{{ contact.title }}</h3>
            <div class="contact-details">
              <div v-for="item in contact.details" :key="item" class="contact-detail">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO設定
const { setSEO } = useSEO()
setSEO('contact')

// 响应式数据
const loading = ref(false)
const errors = ref({
  firstName: '',
  lastName: '',
  email: '',
  category: '',
  message: '',
  agreement: ''
})

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  category: '',
  message: '',
  agreement: false
})

// Helper function for contact icons
const getContactIcon = (type: string) => {
  const iconMap: Record<string, string> = {
    email: 'mdi-email',
    office: 'mdi-office-building',
    hours: 'mdi-clock-outline'
  }
  return iconMap[type] || 'mdi-phone'
}

// 問い合わせカテゴリ
const categories = [
  'サービスに関するお問い合わせ',
  'コーヒー事業について',
  '展示・イベント運営について',
  'LAB・研究開発について',
  'クラブ・コミュニティについて',
  '採用について',
  'その他'
]

// 連絡先情報
const contactInfo = [
  {
    title: 'Email',
    type: 'email',
    details: [
      'info@no-trace.jp',
      'support@no-trace.jp'
    ]
  },
  {
    title: 'Office',
    type: 'office',
    details: [
      '東京都渋谷区',
      '(設立準備中につき詳細は後日公開)'
    ]
  },
  {
    title: 'Business Hours',
    type: 'hours',
    details: [
      '平日 9:00-18:00',
      '土日祝日休業'
    ]
  }
]

// フォームバリデーション
const validateForm = () => {
  errors.value = {
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    message: '',
    agreement: ''
  }

  let isValid = true

  if (!form.value.firstName) {
    errors.value.firstName = '姓を入力してください'
    isValid = false
  } else if (form.value.firstName.length > 50) {
    errors.value.firstName = '50文字以内で入力してください'
    isValid = false
  }

  if (!form.value.lastName) {
    errors.value.lastName = '名を入力してください'
    isValid = false
  } else if (form.value.lastName.length > 50) {
    errors.value.lastName = '50文字以内で入力してください'
    isValid = false
  }

  if (!form.value.email) {
    errors.value.email = 'メールアドレスを入力してください'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = '正しいメールアドレスを入力してください'
    isValid = false
  }

  if (!form.value.category) {
    errors.value.category = 'お問い合わせ種別を選択してください'
    isValid = false
  }

  if (!form.value.message) {
    errors.value.message = 'お問い合わせ内容を入力してください'
    isValid = false
  } else if (form.value.message.length > 1000) {
    errors.value.message = '1000文字以内で入力してください'
    isValid = false
  }

  if (!form.value.agreement) {
    errors.value.agreement = 'プライバシーポリシーに同意してください'
    isValid = false
  }

  return isValid
}

// 表单提交
const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  loading.value = true
  
  try {
    // ここで実際のAPI呼び出しを行う
    await new Promise(resolve => setTimeout(resolve, 2000)) // 模拟API调用
    
    // 成功処理
    alert('お問い合わせを受け付けました。ありがとうございます。')
    
    // フォームリセット
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      category: '',
      message: '',
      agreement: false
    }
    
    // エラーメッセージクリア
    errors.value = {
      firstName: '',
      lastName: '',
      email: '',
      category: '',
      message: '',
      agreement: ''
    }
  } catch (error) {
    // エラー処理
    alert('送信に失敗しました。もう一度お試しください。')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Anthropic Theme Variables */
.anthropic-theme {
  background-color: #FAF9F7;
  min-height: 100vh;
}

/* Custom Container */
.custom-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.contact-hero-section {
  padding: 80px 0 60px 0;
  background-color: #FAF9F7;
  border-bottom: 1px solid #E5E5E5;
}

.hero-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

/* Contact Form Section */
.contact-form-section {
  padding: 80px 0;
  background-color: #FAF9F7;
}

.form-wrapper {
  max-width: 700px;
  margin: 0 auto;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.section-description {
  font-size: 1.125rem;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 0.25rem;
}

.form-input,
.form-select,
.form-textarea {
  padding: 0.875rem 1rem;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  font-size: 1rem;
  color: #1A1A1A;
  background: #FFFFFF;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #E17B47;
  box-shadow: 0 0 0 3px rgba(225, 123, 71, 0.1);
}

.form-input-error {
  border-color: #dc3545;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-select {
  cursor: pointer;
}

.error-message {
  font-size: 0.875rem;
  color: #dc3545;
  margin-top: 0.25rem;
}

/* Checkbox Styles */
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  margin-top: 0.5rem;
}

.form-checkbox {
  width: 18px;
  height: 18px;
  accent-color: #E17B47;
  margin-top: 2px;
  flex-shrink: 0;
}

.checkbox-text {
  font-size: 0.875rem;
  color: #333333;
  line-height: 1.5;
}

.privacy-link {
  color: #E17B47;
  text-decoration: none;
  font-weight: 500;
}

.privacy-link:hover {
  text-decoration: underline;
}

/* Submit Button */
.form-submit {
  margin-top: 1rem;
}

.submit-button {
  width: 100%;
  background: #E17B47;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: #1A1A1A;
  transform: translateY(-1px);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Contact Info Section */
.contact-info-section {
  padding: 80px 0;
  background-color: #F0EDE8;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E5E5E5;
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-color: #E17B47;
}

.contact-icon {
  margin-bottom: 1.5rem;
}

.icon-emoji {
  font-size: 3rem;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1A1A1A;
  margin-bottom: 1.5rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-detail {
  color: #333333;
  line-height: 1.5;
  font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .custom-container {
    padding: 0 16px;
  }
  
  .contact-hero-section,
  .contact-form-section,
  .contact-info-section {
    padding: 60px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .form-wrapper {
    padding: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .form-wrapper {
    padding: 1.5rem;
  }
}
</style>