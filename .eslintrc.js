module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  globals: {
    module: true,
    jest: true,
    test: true,
    describe: true,
    it: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {},
};
