/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2B59C3', // Tang Blue
          50: '#2B59C3',
          100: '#2B59C3',
          200: '#2B59C3',
          300: '#2B59C3',
          400: '#2B59C3',
          500: '#2B59C3',
          600: '#2B59C3',
          700: '#2B59C3',
          800: '#2B59C3',
          900: '#2B59C3',
        },
        secondary: {
          DEFAULT: '#D36582', // Blush
          50: '#FBEFF2',
          100: '#F6DFE5',
          200: '#EDBFCC',
          300: '#E4A0B2',
          400: '#DB8098',
          500: '#D36582',
          600: '#CE5071',
          700: '#BF365A',
          800: '#8F2844',
          900: '#6F1635',
          950: '#40121E',
        },
        light: {
          DEFAULT: '#FFEECF', // Papaya Whip
          50: '#FFEECF',
          100: '#FFEECF',
          200: '#FFEECF',
          300: '#FFEECF',
          400: '#FFEECF',
          500: '#FFEECF',
          600: '#FFEECF',
          700: '#FFEECF',
          800: '#FFEECF',
          900: '#FFEECF',
          900: '#291B00',
        },
        contrast: {
          DEFAULT: '#C9A690', // Tan
          50: '#C9A690',
          100: '#C9A690',
          200: '#C9A690',
          300: '#C9A690',
          400: '#C9A690',
          500: '#C9A690',
          600: '#C9A690',
          700: '#C9A690',
          800: '#533828',
          900: '#C9A690',
          950: '#291C94',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}
