/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3f6354',
          50: '#f0f5f2',
          100: '#dbe8e1',
          200: '#b8d1c3',
          300: '#8fb5a2',
          400: '#6b9a85',
          500: '#557d6b',
          600: '#3f6354',
          700: '#345245',
          800: '#2b4238',
          900: '#24362e',
        },
        acento: {
          DEFAULT: '#d15f3d',
          50: '#fdf4f1',
          100: '#fbe4dc',
          200: '#f6c7b6',
          300: '#eea488',
          400: '#e37e5c',
          500: '#d15f3d',
          600: '#b84a2c',
          700: '#983a22',
          800: '#7a301f',
          900: '#642a1c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
