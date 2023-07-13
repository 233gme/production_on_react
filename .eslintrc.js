module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    project: ['./tsconfig.json']
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 0,
    'react/react-in-jsx-scope': 0,
    'i18next/no-literal-string': [2, {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to', 'fallback']
    }],
    'max-len': [2, {
      code: 120,
      ignoreComments: true
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // REMOVE THIS RULE
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/ban-ts-comment': 0
  },
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off'
    }
  }]
}
