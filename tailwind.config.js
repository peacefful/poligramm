/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    screens: {
      ng: '1400px',
      sm: '640px',
      md: '1024px'
    },
    extend: {
      colors: {
        default: '#242424'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('tailwindcss-animated')
  ]
}

