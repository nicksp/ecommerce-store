const OFF = 0
const ERROR = 2

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:@typescript-eslint/recommended',
    'wesbos/typescript.js',
    'prettier',
    'prettier/@typescript-eslint'
  ],

  rules: {
    '@typescript-eslint/no-unsafe-assignment': OFF,
    'prettier/prettier': [
      ERROR,
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        endOfLine: 'lf'
      }
    ]
  }
}
