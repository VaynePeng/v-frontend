import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,vue,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8726',
        background: '#F5F5F5'
      }
    }
  },
  plugins: []
} satisfies Config
