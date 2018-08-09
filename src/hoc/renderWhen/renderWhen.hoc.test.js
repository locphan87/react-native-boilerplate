import Constants from '../../constants'

import renderWhen from './renderWhen.hoc.js'

jest.mock('recompose', () => {
  const actual = require.requireActual('recompose')

  return {
    ...actual,
    renderNothing: 'NOTHING',
    renderComponent: component => component,
    branch: (predicate, component) => {
      const props = {
        errors: true,
        loading: false
      }
      if (predicate(props)) return `render-${component}`

      return 'render-origin'
    },
    compose: (...args) => args
  }
})

describe('HOC renderWhen', () => {
  test('should return a list of branched components', () => {
    const options = [
      {
        render: 'Error',
        when: props => props.errors
      },
      {
        render: Constants.NOTHING,
        when: props => props.errors
      },
      {
        render: 'Loading',
        when: props => props.loading
      }
    ]
    const actual = renderWhen(options)
    expect(actual).toEqual(['render-Error', 'render-NOTHING', 'render-origin'])
  })
})
