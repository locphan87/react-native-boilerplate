const experimentRules = {
  'react/jsx-key': 2
  // 'react/destructuring-assignment': [2, 'always']
}
const flowRules = {
  'flowtype/no-weak-types': [
    2,
    {
      any: false,
      Object: false,
      Function: false
    }
  ]
}
const importRules = {
  'import/order': [2, { 'newlines-between': 'always' }],
  'import/newline-after-import': 2
}
const complexityRules = {
  complexity: [2, 10],
  'max-statements': [2, 20],
  'max-depth': [2, 3],
  'max-params': [2, 3],
  'max-lines': [
    2,
    {
      max: 250,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  'import/max-dependencies': [2, { max: 15 }]
}
const reactRules = {
  'react/jsx-no-bind': 2,
  'react/prefer-stateless-function': ['warn']
}
const fpRules = {
  'fp/no-arguments': 2,
  'fp/no-delete': 2,
  'fp/no-events': 2,
  'fp/no-get-set': 2,
  'fp/no-let': 2,
  'fp/no-loops': 2,
  'fp/no-mutating-assign': 2,
  'fp/no-mutating-methods': 2,
  'fp/no-proxy': 2,
  'fp/no-throw': 2,
  'fp/no-valueof-field': 2,
  'no-var': 2,
  'prefer-spread': 2
}
const otherRules = {
  'arrow-body-style': [2, 'as-needed']
}

module.exports = {
  extends: ['universe/native'],
  plugins: ['fp'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    ...complexityRules,
    ...reactRules,
    ...fpRules,
    ...importRules,
    ...flowRules,
    ...experimentRules,
    ...otherRules
  }
}
