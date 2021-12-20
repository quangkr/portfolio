import { defineConfig } from 'vite-plugin-windicss'
import defaultTheme from 'windicss/defaultTheme'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

function range(size: number, startAt = 1): string[] {
  return Array.from(Array(size).keys()).map(i => String(i + startAt))
}
const colorRange = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
function colorGenerator(name: string, arr = colorRange): Record<string | number, any> {
  return arr.reduce((accu, item) => ({
    ...accu,
    [item]: `var(--color-${name}-${item})`,
  }), {})
}

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  attributify: {
    prefix: 'w-',
  },
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      serif: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        emerald: colorGenerator('emerald'),
        gray: colorGenerator('gray'),
        blue: colorGenerator('blue'),
        console: colorGenerator('console', range(16, 0)),
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'var(--color-emerald-600)',
              'textDecoration': 'none',
              'opacity': 0.75,
              'fontWeight': '500',
              '&:hover': {
                opacity: 1,
                textDecoration: 'underline',
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
