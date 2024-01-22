import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,vue,jsx,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
