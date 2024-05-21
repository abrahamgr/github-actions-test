export default [
  {
    root: true,
    env: { browser: true, es2020: true },
    files: ['**/*.{ts,tsx}'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignores: [
      'public/**/*',
      'dist/**/*',
      // 'vite-env.d.ts',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      quotes: ['error', 'single'],
      'no-trailing-spaces': ['error'],
    },
  },
]