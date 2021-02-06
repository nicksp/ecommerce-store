const ERROR = 2

module.exports = {
  extends: ['wesbos'],

  rules: {
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
