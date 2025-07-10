// 文章相关类型定义
export interface Article {
  id: number
  date: string
  title: string
  category: string
  excerpt: string
  content: string
  readTime: string
  tags: string[]
  status?: '公開' | '下書き' | '非公開' // 可选的状态字段
}

export interface ArticleFormData {
  title: string
  category: string
  excerpt: string
  content: string
  readTime: string
  tags: string[]
}

export interface ArticleStore {
  articles: Article[]
  selectedArticle: Article | null
  loading: boolean
}

// 文章分类
export type ArticleCategory = 
  | '企業ニュース'
  | 'サービス'
  | 'コーヒー事業'
  | '展示・イベント'
  | '釣具・器具'
  | 'LAB・研究開発'
  | 'クラブ活動'

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  '企業ニュース',
  'サービス',
  'コーヒー事業',
  '展示・イベント',
  '釣具・器具',
  'LAB・研究開発',
  'クラブ活動'
]