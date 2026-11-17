/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F7F3',
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#16181D',
          muted: '#555B66',
          subtle: '#767D8A',
        },
        rule: '#DCDED8',
        accent: {
          DEFAULT: '#1D4ED8',
          hover: '#1E40AF',
        },
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
