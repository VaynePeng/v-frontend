import stylistic from '@stylistic/eslint-plugin'
import esLintVue from 'eslint-plugin-vue'

export default [
  {
    plugins: {
      '@stylistic': stylistic,
      'plugin:vue/vue3-recommended': esLintVue
    },
    files: ['**/*.{js,ts,tsx,vue}'],
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      'comma-dangle': ['error', 'never']
    }
  }
]
