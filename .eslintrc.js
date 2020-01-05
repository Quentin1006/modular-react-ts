module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node': true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:compat/recommended'
  ],
  parser: '@typescript-eslint/parser',
  // 'parser': 'babel-eslint',
  plugins: [
    'react',
    'jest',
    '@typescript-eslint'
  ],
  settings: {
    react: {
      'createClass': 'createReactClass',
      'pragma': 'React',
      'version': 'detect'
    },
    // https://github.com/amilajack/eslint-plugin-compat#adding-polyfills
    polyfills: [
      'Object.assign'
    ]
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { 'code': 120 }],
    'no-console': 2,
    'no-const-assign': 2,
    'no-global-assign': ['error', {'exceptions': ['global']}],
    'prefer-const': 2,
    'react/prop-types': 0,
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    "no-unused-vars": 'off'
  }
}
