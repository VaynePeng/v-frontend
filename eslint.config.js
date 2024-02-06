// eslint.config.js
import stylistic from '@stylistic/eslint-plugin'

export default [
  stylistic.configs.customize({
    // the following options are the default values
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    commaDangle: 'never'
    // ...
  })
  // ...you other config items
]
