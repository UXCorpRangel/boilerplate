import globals from 'globals'
import eslintPluginJs from '@eslint/js'
import {
  configs as eslintPluginAstro,
  environments as environmentsAstro
} from 'eslint-plugin-astro'
import parserAstro from 'astro-eslint-parser'
import parserTs from '@typescript-eslint/parser'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: [...resolveIgnoresFromGitignore()] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  eslintPluginJs.configs.recommended,
  ...neostandard({
    noJsx: true,
    noStyle: true,
    ts: true
  }),
  ...eslintPluginAstro['flat/recommended'],
  ...eslintPluginAstro['flat/jsx-a11y-recommended'],
  eslintConfigPrettier,
  {
    files: ['src/**/*.astro'],
    processor: 'astro/client-side-ts',
    languageOptions: {
      globals: environmentsAstro.astro.globals,
      parser: parserAstro,
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: parserTs
      }
    }
  },
  {
    files: ['src/**/*.astro/*.{js,ts}'],
    processor: 'astro/client-side-ts',
    languageOptions: {
      parser: parserTs
    }
  }
]
