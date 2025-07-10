// 导出所有类型定义
export * from './article'

// 通用UI类型
export interface NavItem {
  title: string
  to: string
  icon?: string
}

export interface ServiceItem {
  id: string
  title: string
  category: string
  description: string
  features: string[]
  icon: string
  image: string
  status: string
  link: string
}

// 颜色主题类型
export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  error: string
  info: string
  success: string
  warning: string
}

// 响应式断点
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// 组件尺寸
export type ComponentSize = 'small' | 'medium' | 'large'

// 按钮变体
export type ButtonVariant = 'flat' | 'outlined' | 'text' | 'elevated'