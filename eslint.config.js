import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended
})

export default [
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:vue/vue3-essential'),
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    commaDangle: 'never'
  })
]
