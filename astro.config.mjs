// @ts-check

import { defineConfig } from 'astro/config'
import { URL } from './src/data/constants'

import icon from 'astro-icon'
import playformInline from '@playform/inline'
import sitemap from 'astro-sitemap'
import playformCompress from '@playform/compress'
import compressor from 'astro-compressor'

// Standard unit size in pixels to convert to rem
const STANDARD_UNIT_SIZE = 16

// https://astro.build/config
export default defineConfig({
  site: URL,
  trailingSlash: 'never',
  server: {
    host: true
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  compressHTML: false,
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        visitor: {
          // Convert px to rem
          Length({ unit, value }) {
            if (unit === 'px') {
              return { unit: 'rem', value: value / STANDARD_UNIT_SIZE }
            }
          }
        }
      }
    }
  },
  integrations: [
    icon(),
    playformInline(),
    sitemap({
      canonicalURL: URL,
      lastmod: new Date(),
      createLinkInHead: false,
      xmlns: {
        news: false,
        video: false,
        image: false,
        xhtml: true
      },
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es'
        }
      },
      // Remove trailing slash
      serialize(item) {
        item.url = item.url.replace(/\/$/g, '')
        return item
      }
    }),
    playformCompress({
      HTML: {
        'html-minifier-terser': {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          maxLineLength: 0,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          noNewlinesBeforeTagClose: true,
          removeAttributeQuotes: false,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          sortAttributes: true,
          sortClassName: true,
          useShortDoctype: true
        }
      },
      JavaScript: {
        terser: {
          compress: {
            arguments: true,
            drop_console: true
          },
          format: {
            comments: false,
            indent_level: 2
          },
          ecma: 2020
        }
      },
      Cache: true,
      CSS: false,
      Image: false,
      SVG: false
    }),
    compressor()
  ]
})
