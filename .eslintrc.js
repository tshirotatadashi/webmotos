module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'standard'],
  plugins: ['react', 'prettier', 'react-hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }]
  }
}
