import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import typescriptESLintParser from '@typescript-eslint/parser'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [
  // 只有 ignores 选项时将作为全局配置 只有全局的 ignores 模式才能匹配目录。属于特定配置的 ignores 模式只会匹配文件名
  {
    ignores: ['dist']
  },
  eslint.configs.recommended,
  ...compat.plugins('vue'),
  ...compat.extends('plugin:vue/vue3-recommended').map((config) => {
    return {
      ...config,
      files: ['**/*.vue'],
      languageOptions: {
        ...config.languageOptions,
        parserOptions: {
          ...config.languageOptions?.parserOptions,
          parser: typescriptESLintParser
        }
      }
    }
  }),
  {
    files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 3
          },
          multiline: {
            max: 1
          }
        }
      ],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'ignore',
          multiline: 'below'
        }
      ],
      'vue/multi-word-component-names': 'off'
    }
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    commaDangle: 'never'
  })
]
