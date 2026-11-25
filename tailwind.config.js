/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#050505',
        surface: '#0E0E10',
        ink: {
          DEFAULT: '#F4F4F5',
          muted: '#A1A1AA',
          subtle: '#6E6E77',
        },
        rule: {
          DEFAULT: '#222226',
          strong: '#3A3A44',
        },
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
