/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./projects/**/*.html",
    "./writing/**/*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#EAE2D7',
          300: '#DDD2C3',
          400: '#C5B5A0',
        },
        ink: {
          900: '#1A1816',
          800: '#2A2622',
          700: '#3D3833',
          600: '#5C554D',
          500: '#7B7268',
          400: '#A3998D',
        },
        accent: {
          DEFAULT: '#9A5B32',
          hover: '#7E4723',
          light: '#F8EFE9',
          subtle: '#EBDCD0',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.700'),
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.ink.900'),
              fontWeight: '500',
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.ink.900'),
              fontWeight: '500',
            },
            h3: {
              fontFamily: theme('fontFamily.serif').join(', '),
              color: theme('colors.ink.900'),
              fontWeight: '500',
            },
            strong: {
              color: theme('colors.ink.900'),
            },
            a: {
              color: theme('colors.accent.DEFAULT'),
              '&:hover': {
                color: theme('colors.accent.hover'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
