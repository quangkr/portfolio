import { defineConfig } from 'vite-plugin-windicss'
import defaultTheme from 'windicss/defaultTheme'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  attributify: true,
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      serif: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        console: {
          0: 'var(--color-console-0)',
          1: 'var(--color-console-1)',
          2: 'var(--color-console-2)',
          3: 'var(--color-console-3)',
          4: 'var(--color-console-4)',
          5: 'var(--color-console-5)',
          6: 'var(--color-console-6)',
          7: 'var(--color-console-7)',
          8: 'var(--color-console-8)',
          9: 'var(--color-console-9)',
          10: 'var(--color-console-10)',
          11: 'var(--color-console-11)',
          12: 'var(--color-console-12)',
          13: 'var(--color-console-13)',
          14: 'var(--color-console-14)',
          15: 'var(--color-console-15)',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
})
