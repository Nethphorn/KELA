import eslint from '@eslint/js'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import jestPlugin from 'eslint-plugin-jest'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import sonarjs from 'eslint-plugin-sonarjs'
import unicornPlugin from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginPrettierRecommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  sonarjs.configs?.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      globals: {
        browser: true,
        es2024: true,
        jest: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      jest: jestPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin,
      react: reactPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,

      'prettier/prettier': 'error',

      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['interface', 'typeAlias', 'class'],
          format: ['PascalCase'],
        },
      ],

      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
      'import/no-unresolved': 'off',

      'sonarjs/cognitive-complexity': ['error', 8],

      'max-lines': [
        'error',
        { max: 200, skipBlankLines: true, skipComments: true },
      ],
      'max-lines-per-function': [
        'error',
        { max: 30, skipBlankLines: true, skipComments: true },
      ],
      complexity: ['error', { max: 6 }],
      'max-depth': ['warn', 4],
      'max-nested-callbacks': ['warn', 3],
      'max-params': ['warn', 4],

      'no-nested-ternary': 'error',
      'no-negated-condition': 'error',
      'no-console': 'warn',

      'id-length': [
        'error',
        {
          min: 2,
          exceptions: ['_', 'id', 'i', 'j', 'ok', 'db', 'fn', 'cb', 'en', 'da'],
        },
      ],

      'unicorn/no-array-reduce': 'error',
      'unicorn/prefer-node-protocol': 'error',

      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    files: ['*.config.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  {
    ignores: [
      'node_modules/',
      'dist/',
      'package-lock.json',
      '*.min.js',
      'coverage/',
      'build/',
      'public/',
      'playwright-report/',
      'test-results/',
      '*.md',
      '.vscode/',
    ],
  },
]
