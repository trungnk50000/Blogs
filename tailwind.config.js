/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: [
        'Monaco',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '2rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        slate: {
          850: 'hsl(222deg 47% 16%)',
        },
        primary: '#5fc3e7',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
