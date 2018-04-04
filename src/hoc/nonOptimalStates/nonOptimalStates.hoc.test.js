import Constants from '../../constants'

import nonOptimalStates from './nonOptimalStates.hoc.js'

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

describe('HOC nonOptimalStates', () => {
  test('should return a list of branched components', () => {
    const renderWhen = [
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
    const actual = nonOptimalStates(renderWhen)
    expect(actual).toEqual(['render-Error', 'render-NOTHING', 'render-origin'])
  })
})
