module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    '@typescript-eslint/strict-boolean-expressions': 0,
    'react/react-in-jsx-scope': 0,
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    // REMOVE THIS RULE
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/ban-ts-comment': 0
  }
}
