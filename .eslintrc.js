module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
