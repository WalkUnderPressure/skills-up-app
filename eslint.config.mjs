import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintI18nextPlugin from 'eslint-plugin-i18next';
import eslintStorybookPlugin from 'eslint-plugin-storybook';
import { fixupPluginRules } from '@eslint/compat';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintFsd from 'eslint-plugin-wup-fsd';

/** @type {Array<import('eslint').Linter.Config>} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
      i18next: eslintI18nextPlugin,
      storybook: eslintStorybookPlugin,
      'wup-fsd': eslintFsd,
      'unused-imports': unusedImports,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'build',
      'storybook-static',
      'node_modules',
      'coverage',
      'eslint.config.mjs',
      '.fttemplates',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'wup-fsd/relative-path-checker': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'react-refresh/only-export-components': 'off',
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
        },
      ],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'max-lines': ['warn', { max: 250 }],
      'max-params': ['error', 4],
      'eol-last': ['error', 'always'],
      'i18next/no-literal-string': 'error',
      ...eslintPluginReactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: [
      '**/*/createAppAsyncThunk.ts',
      '**/*/useAppDispatch.ts',
      '**/*/useAppSelector.ts',
      '**/*/useAppStore.ts',
    ],
    rules: {
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          name: 'react-redux',
          importNames: ['useDispatch', 'useSelector', 'useStore'],
          message:
            'Use typed hooks `useAppDispatch` and `useAppSelector` and `useAppStore` instead.',
        },
        {
          name: '@reduxjs/toolkit',
          importNames: ['createAsyncThunk'],
          message: 'Use typed hooks `createAppAsyncThunk` instead.',
        },
      ],
    },
  },
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'max-lines': 'off',
    },
  },
);
