// Article Management Store
// Author: Claude AI Assistant
// Date: 2025-07-02
// Description: Pinia store for managing articles with localStorage persistence

import { defineStore } from 'pinia'
import type { Article, ArticleCategory } from '~/types'

interface ArticleState {
  articles: Article[]
  selectedArticle: Article | null
  loading: boolean
  error: string | null
}

export const useArticleStore = defineStore('articles', {
  state: (): ArticleState => ({
    articles: [],
    selectedArticle: null,
    loading: false,
    error: null
  }),

  getters: {
    // Get articles by category
    getArticlesByCategory: (state) => {
      return (category: ArticleCategory) => 
        state.articles.filter(article => article.category === category)
    },

    // Get latest articles
    getLatestArticles: (state) => {
      return (limit: number = 5) => 
        state.articles
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, limit)
    },

    // Get article by ID
    getArticleById: (state) => {
      return (id: number) => 
        state.articles.find(article => article.id === id)
    },

    // Get articles by tag
    getArticlesByTag: (state) => {
      return (tag: string) =>
        state.articles.filter(article => 
          article.tags && article.tags.includes(tag)
        )
    },

    // Get all unique tags
    getAllTags: (state) => {
      const tags = new Set<string>()
      state.articles.forEach(article => {
        if (article.tags) {
          article.tags.forEach(tag => tags.add(tag))
        }
      })
      return Array.from(tags).sort()
    },

    // Get category statistics
    getCategoryStats: (state) => {
      const stats: Record<string, number> = {}
      state.articles.forEach(article => {
        stats[article.category] = (stats[article.category] || 0) + 1
      })
      return stats
    },

    // Get total article count
    getTotalCount: (state) => state.articles.length
  },

  actions: {
    // Initialize store with data from localStorage or default data
    async initialize() {
      this.loading = true
      this.error = null

      try {
        if (process.client) {
          const stored = localStorage.getItem('notrace_articles')
          if (stored) {
            this.articles = JSON.parse(stored)
          } else {
            this.loadDefaultArticles()
            this.saveToStorage()
          }
        } else {
          // On server side, load default articles
          this.loadDefaultArticles()
        }
      } catch (error) {
        console.error('Failed to initialize articles:', error)
        this.error = 'データの読み込みに失敗しました'
        this.loadDefaultArticles()
      } finally {
        this.loading = false
      }
    },

    // Load default articles data
    loadDefaultArticles() {
      this.articles = [
        {
          id: 1,
          date: '2025.01.15',
          title: '無迹探索株式会社設立準備開始のお知らせ',
          category: '企業ニュース',
          excerpt: '新しい価値創造を目指して、無迹探索株式会社の設立準備を開始いたします。革新的なソリューションで、お客様と共に成長していくことを目指しています。',
          content: `
            <p>この度、無迹探索株式会社の設立準備を開始することをお知らせいたします。</p>
            <p>私たちは、革新的なソリューションで新たなビジネス価値を創造し、お客様と共に成長していくことを目指しています。</p>
            <h2>設立準備の背景</h2>
            <p>急速に変化するビジネス環境において、企業には常に新しい価値創造が求められています。私たちは、技術・ビジネス・文化の多分野にわたる専門知識を活かし、お客様の課題解決に貢献してまいります。</p>
            <h2>今後の展開</h2>
            <ul>
              <li>コーヒー事業の本格展開</li>
              <li>展示・イベント運営サービスの拡充</li>
              <li>研究開発ラボの設立</li>
              <li>会員制コミュニティの運営開始</li>
            </ul>
            <p>設立に向けた準備が整い次第、改めてご報告させていただきます。今後ともどうぞよろしくお願いいたします。</p>
          `,
          readTime: '3分',
          tags: ['設立', '企業情報', 'ニュース', 'コンサルティング']
        },
        {
          id: 2,
          date: '2025.01.10',
          title: '東京ルアー・フライフィッシング学院 2025年春季コース募集開始',
          category: 'サービス',
          excerpt: '初心者から上級者まで、本格的なフライフィッシング技術を学べるコースです。経験豊富なインストラクターによる実践的な指導を行います。',
          content: `
            <p>東京ルアー・フライフィッシング学院では、2025年春季コースの募集を開始いたします。</p>
            <p>経験豊富なインストラクターによる実践的な指導で、フライフィッシングの技術を習得できます。</p>
            <h2>コース内容</h2>
            <h3>初心者コース</h3>
            <ul>
              <li>フライフィッシングの基本知識</li>
              <li>キャスティング技術の習得</li>
              <li>安全な釣行のための知識</li>
            </ul>
            <h3>中級・上級者コース</h3>
            <ul>
              <li>高度なキャスティング技術</li>
              <li>フライタイイング実習</li>
              <li>河川での実践練習</li>
            </ul>
            <h2>募集要項</h2>
            <p><strong>期間:</strong> 2025年4月〜6月（全12回）</p>
            <p><strong>場所:</strong> 東京都内施設 + 河川実習</p>
            <p><strong>定員:</strong> 各コース20名</p>
            <p><strong>申込締切:</strong> 2025年3月31日</p>
          `,
          readTime: '4分',
          tags: ['フィッシング', '教育', 'コース', 'スポーツ', '募集']
        },
        {
          id: 3,
          date: '2025.01.08',
          title: '厳選コーヒー商品ラインナップ拡充について',
          category: 'コーヒー事業',
          excerpt: 'サステナブル調達による高品質コーヒー商品の新ラインナップを発表。生産者との直接取引により、最高品質のコーヒーをお届けします。',
          content: `
            <p>厳選されたコーヒー豆を使用した新商品ラインナップを発表いたします。</p>
            <p>サステナブル調達にこだわり、生産者との直接取引により高品質なコーヒーを提供いたします。</p>
            <h2>新商品ラインナップ</h2>
            <h3>プレミアムシングルオリジン</h3>
            <ul>
              <li>エチオピア イルガチェフェ</li>
              <li>コロンビア ウイラ県</li>
              <li>ケニア AA</li>
            </ul>
            <h3>ブレンドシリーズ</h3>
            <ul>
              <li>モーニングブレンド</li>
              <li>エスプレッソブレンド</li>
              <li>デカフェブレンド</li>
            </ul>
            <h2>サステナブル調達への取り組み</h2>
            <p>私たちは、環境に配慮した持続可能なコーヒー生産を支援しています。生産者との長期的なパートナーシップにより、品質向上と環境保護の両立を目指しています。</p>
            <blockquote>
              「一杯のコーヒーから始まる、持続可能な未来」
            </blockquote>
            <p>新商品は2025年2月より順次発売予定です。詳細については改めてお知らせいたします。</p>
          `,
          readTime: '3分',
          tags: ['コーヒー', '新商品', 'サステナブル', '品質', '環境']
        },
        {
          id: 4,
          date: '2025.01.05',
          title: '中国アーティスト展示スペース 中目黒オープン準備中',
          category: '展示・イベント',
          excerpt: '現代中国アートを紹介する展示スペースが中目黒にオープン予定。文化交流を通じて新たな価値創造を目指します。',
          content: `
            <p>中目黒に現代中国アートを紹介する展示スペースをオープンする準備を進めています。</p>
            <p>文化交流を通じて新たな価値創造を目指し、日中間の相互理解を深める場を提供いたします。</p>
            <h2>展示スペースについて</h2>
            <p><strong>所在地:</strong> 東京都目黒区中目黒</p>
            <p><strong>面積:</strong> 約200平方メートル</p>
            <p><strong>オープン予定:</strong> 2025年3月</p>
            <h2>展示予定作品</h2>
            <ul>
              <li>現代絵画作品</li>
              <li>彫刻・インスタレーション</li>
              <li>映像・デジタルアート</li>
              <li>書道・伝統工芸</li>
            </ul>
            <h2>文化交流プログラム</h2>
            <p>展示だけでなく、以下のプログラムも予定しています：</p>
            <ul>
              <li>アーティストトーク</li>
              <li>ワークショップ</li>
              <li>文化講座</li>
              <li>交流イベント</li>
            </ul>
            <p>詳細な情報は、準備が整い次第お知らせいたします。</p>
          `,
          readTime: '3分',
          tags: ['展示', 'アート', '文化交流', 'イベント', '中国', '中目黒']
        },
        {
          id: 5,
          date: '2025.01.03',
          title: '2025年限定釣具予約受付開始 - Shimano・Daiwa最新モデル',
          category: '釣具・器具',
          excerpt: '2025年の限定釣具の予約受付を開始。Shimano、Daiwの最新モデルを含む厳選されたラインナップをご用意しました。',
          content: `
            <p>2025年の限定釣具の予約受付を開始いたします。</p>
            <p>Shimano、Daiwaの最新モデルを含む厳選されたラインナップをご用意しました。</p>
            <h2>予約可能商品</h2>
            <h3>Shimano 2025年新作</h3>
            <ul>
              <li>ステラ SW 2025モデル</li>
              <li>エクスセンス infinity 2025</li>
              <li>カルカッタコンクエスト MD</li>
            </ul>
            <h3>Daiwa 2025年新作</h3>
            <ul>
              <li>イグジスト 2025</li>
              <li>ソルティガ BJ 2025</li>
              <li>月下美人 AIR AGS 2025</li>
            </ul>
            <h2>予約特典</h2>
            <p>予約いただいたお客様には以下の特典をご用意：</p>
            <ul>
              <li>発売日前優先お渡し</li>
              <li>専用メンテナンスサービス</li>
              <li>限定オリジナルケース</li>
              <li>使用方法レクチャー</li>
            </ul>
            <h2>予約方法</h2>
            <p>お電話またはメールにてご予約を承ります。数量限定のため、お早めにお申し込みください。</p>
            <p><strong>予約期間:</strong> 2025年1月3日〜1月31日</p>
            <p><strong>お渡し予定:</strong> 2025年3月上旬</p>
          `,
          readTime: '3分',
          tags: ['釣具', '器具', 'Shimano', 'Daiwa', '限定', '予約', '新商品']
        }
      ]
    },

    // Add new article
    async addArticle(article: Omit<Article, 'id'>) {
      this.loading = true
      this.error = null

      try {
        const newArticle: Article = {
          ...article,
          id: Date.now() // Simple ID generation
        }
        
        this.articles.unshift(newArticle)
        this.saveToStorage()
        return newArticle
      } catch (error) {
        console.error('Failed to add article:', error)
        this.error = '記事の追加に失敗しました'
        throw error
      } finally {
        this.loading = false
      }
    },

    // Update existing article
    async updateArticle(updatedArticle: Article) {
      this.loading = true
      this.error = null

      try {
        const index = this.articles.findIndex(article => article.id === updatedArticle.id)
        if (index !== -1) {
          this.articles[index] = updatedArticle
          this.saveToStorage()
          
          // Update selectedArticle if it's the same article
          if (this.selectedArticle && this.selectedArticle.id === updatedArticle.id) {
            this.selectedArticle = updatedArticle
          }
        } else {
          throw new Error('Article not found')
        }
      } catch (error) {
        console.error('Failed to update article:', error)
        this.error = '記事の更新に失敗しました'
        throw error
      } finally {
        this.loading = false
      }
    },

    // Delete article
    async deleteArticle(id: number) {
      this.loading = true
      this.error = null

      try {
        const index = this.articles.findIndex(article => article.id === id)
        if (index !== -1) {
          this.articles.splice(index, 1)
          this.saveToStorage()
          
          // Clear selectedArticle if it's the deleted article
          if (this.selectedArticle && this.selectedArticle.id === id) {
            this.selectedArticle = null
          }
        } else {
          throw new Error('Article not found')
        }
      } catch (error) {
        console.error('Failed to delete article:', error)
        this.error = '記事の削除に失敗しました'
        throw error
      } finally {
        this.loading = false
      }
    },

    // Select article
    setSelectedArticle(article: Article | null) {
      this.selectedArticle = article
    },

    // Clear all articles
    async clearAllArticles() {
      this.loading = true
      this.error = null

      try {
        this.articles = []
        this.selectedArticle = null
        this.saveToStorage()
      } catch (error) {
        console.error('Failed to clear articles:', error)
        this.error = '記事のクリアに失敗しました'
        throw error
      } finally {
        this.loading = false
      }
    },

    // Import articles from JSON
    async importArticles(articles: Article[]) {
      this.loading = true
      this.error = null

      try {
        this.articles = articles
        this.saveToStorage()
      } catch (error) {
        console.error('Failed to import articles:', error)
        this.error = '記事のインポートに失敗しました'
        throw error
      } finally {
        this.loading = false
      }
    },

    // Export articles to JSON
    exportArticles() {
      return JSON.stringify(this.articles, null, 2)
    },

    // Save to localStorage (client-side only)
    saveToStorage() {
      if (process.client) {
        try {
          localStorage.setItem('notrace_articles', JSON.stringify(this.articles))
        } catch (error) {
          console.error('Failed to save to localStorage:', error)
          this.error = 'データの保存に失敗しました'
        }
      }
    },

    // Create backup
    createBackup() {
      if (process.client) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const backupKey = `notrace_articles_backup_${timestamp}`
        localStorage.setItem(backupKey, JSON.stringify(this.articles))
        return backupKey
      }
    },

    // List all backups
    listBackups() {
      if (process.client) {
        const backups: string[] = []
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key && key.startsWith('notrace_articles_backup_')) {
            backups.push(key)
          }
        }
        return backups.sort().reverse() // Most recent first
      }
      return []
    },

    // Restore from backup
    async restoreFromBackup(backupKey: string) {
      if (process.client) {
        const backupData = localStorage.getItem(backupKey)
        if (backupData) {
          try {
            const articles = JSON.parse(backupData)
            await this.importArticles(articles)
          } catch (error) {
            console.error('Failed to restore from backup:', error)
            this.error = 'バックアップからの復元に失敗しました'
            throw error
          }
        }
      }
    }
  }
})