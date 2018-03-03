module.exports = {
  extends: ['universe/native'],
  rules: {
    // complexity
    complexity: ['error', 5],
    'max-statements': ['error', 10],
    'max-depth': ['error', 2],
    'max-params': ['error', 2],
    'max-lines': [
      'error',
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'import/max-dependencies': ['error', { max: 10 }],

    // react
    'react/jsx-no-bind': ['error'],

    // import
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/newline-after-import': 2,

    // others
    'arrow-body-style': ['error', 'as-needed']
  }
}
