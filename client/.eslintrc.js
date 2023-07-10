module.exports = {
  'env': {
      'node': true,
      'browser': true,
      'commonjs': true,
      'jest': true,
      'amd': true
  },
  'extends': [
      'eslint:recommended',
  ],
  'globals': {
      'require': true,
      'jest/globals': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
      'sourceType': 'module',
      'allowImportExportEverywhere': true,
      'ecmaFeatures': {
        'globalReturn': false,
      },
      'ecmaVersion': 2022
  },
  'plugins': [
      '@typescript-eslint'
  ],
  'ignorePatterns': [
    '**/node_modules/*',
  ],
  'rules': {
      'strict': 0,
      'object-curly-spacing': [2, 'always'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'semi-style': ['error', 'last'],
      'no-unused-vars': 'warn',
      'object-shorthand': ['warn', 'always', { 'avoidExplicitReturnArrows': true }],
      'max-len': [
          'error',
          {
              'code': 120,
              'ignoreComments': true,
              'ignoreUrls': true,
              'ignoreStrings': true,
              'ignoreTemplateLiterals': true,
              'ignoreRegExpLiterals': true,
              'ignorePattern': 'd="([\\s\\S]*)"'
          }
      ],
  },
};
