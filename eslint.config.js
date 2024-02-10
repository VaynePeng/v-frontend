import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import typescriptESLintParser from '@typescript-eslint/parser'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [
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
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptESLintParser
    }
  },
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
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      'vue/require-default-prop': 'off'
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
