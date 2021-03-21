module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-console': 'off',
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/state-in-constructor': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
