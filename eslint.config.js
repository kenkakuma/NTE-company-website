import { createConfigForNuxt } from '@nuxtjs/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    typescript: true,
    stylistic: {
      semi: false,
      quotes: 'single'
    }
  }
}).append(
  // 自定义规则
  {
    rules: {
      // Vue特定规则
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      
      // TypeScript规则
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      
      // 一般规则
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-unused-vars': 'off' // 使用TypeScript版本
    }
  }
)