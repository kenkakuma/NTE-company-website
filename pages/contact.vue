<template>
  <v-container fluid class="pa-0">
    <!-- Page Header -->
    <v-section class="bg-secondary">
      <v-container>
        <v-row align="center" class="py-16">
          <v-col cols="12" class="text-center">
            <h1 class="text-h2 text-white mb-4">
              お問い合わせ
            </h1>
            <p class="text-h6 text-white opacity-90">
              Contact Us
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Contact Form Section -->
    <v-section class="py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="pa-8" variant="outlined">
              <v-card-title class="text-h5 mb-6 text-center">
                お気軽にお問い合わせください
              </v-card-title>
              
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.firstName"
                      label="姓"
                      :rules="nameRules"
                      variant="outlined"
                      required
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.lastName"
                      label="名"
                      :rules="nameRules"
                      variant="outlined"
                      required
                    />
                  </v-col>
                </v-row>
                
                <v-text-field
                  v-model="form.email"
                  label="メールアドレス"
                  :rules="emailRules"
                  variant="outlined"
                  required
                />
                
                <v-text-field
                  v-model="form.company"
                  label="会社名・組織名"
                  variant="outlined"
                />
                
                <v-select
                  v-model="form.category"
                  label="お問い合わせ種別"
                  :items="categories"
                  :rules="requiredRules"
                  variant="outlined"
                  required
                />
                
                <v-textarea
                  v-model="form.message"
                  label="お問い合わせ内容"
                  :rules="messageRules"
                  variant="outlined"
                  rows="5"
                  required
                />
                
                <v-checkbox
                  v-model="form.agreement"
                  :rules="agreementRules"
                  required
                >
                  <template #label>
                    <div class="text-body-2">
                      <a href="#" class="text-primary">プライバシーポリシー</a>
                      に同意します
                    </div>
                  </template>
                </v-checkbox>
                
                <div class="text-center mt-6">
                  <v-btn
                    color="primary"
                    size="large"
                    variant="elevated"
                    :disabled="!valid"
                    :loading="loading"
                    @click="submitForm"
                  >
                    送信する
                  </v-btn>
                </div>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <!-- Contact Info Section -->
    <v-section class="py-16 bg-grey-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center mb-8">
            <h2 class="text-h4 mb-4">お問い合わせ先</h2>
          </v-col>
        </v-row>
        
        <v-row justify="center">
          <v-col 
            v-for="contact in contactInfo"
            :key="contact.title"
            cols="12" 
            md="4"
          >
            <v-card class="pa-6 text-center fill-height" variant="outlined">
              <v-icon 
                :icon="contact.icon" 
                size="x-large" 
                color="primary"
                class="mb-4"
              />
              <v-card-title class="justify-center mb-2">
                {{ contact.title }}
              </v-card-title>
              <v-card-text class="text-body-1">
                <div v-for="item in contact.details" :key="item">
                  {{ item }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-section>
  </v-container>
</template>

<script setup lang="ts">
// SEO設定
const { setSEO } = useSEO()
setSEO('contact')

// 响应式数据
const valid = ref(false)
const loading = ref(false)
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  category: '',
  message: '',
  agreement: false
})

// 表单验证规则
const nameRules = [
  (v: string) => !!v || '入力してください',
  (v: string) => (v && v.length <= 50) || '50文字以内で入力してください'
]

const emailRules = [
  (v: string) => !!v || 'メールアドレスを入力してください',
  (v: string) => /.+@.+\..+/.test(v) || '正しいメールアドレスを入力してください'
]

const requiredRules = [
  (v: string) => !!v || '選択してください'
]

const messageRules = [
  (v: string) => !!v || 'お問い合わせ内容を入力してください',
  (v: string) => (v && v.length <= 1000) || '1000文字以内で入力してください'
]

const agreementRules = [
  (v: boolean) => !!v || 'プライバシーポリシーに同意してください'
]

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
    icon: 'mdi-email',
    details: [
      'info@no-trace.jp',
      'support@no-trace.jp'
    ]
  },
  {
    title: 'Office',
    icon: 'mdi-map-marker',
    details: [
      '東京都渋谷区',
      '(設立準備中につき詳細は後日公開)'
    ]
  },
  {
    title: 'Business Hours',
    icon: 'mdi-clock',
    details: [
      '平日 9:00-18:00',
      '土日祝日休業'
    ]
  }
]

// 表单提交
const submitForm = async () => {
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
  } catch (error) {
    // エラー処理
    alert('送信に失敗しました。もう一度お試しください。')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.v-section {
  position: relative;
}
</style>