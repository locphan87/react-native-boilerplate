import { View } from 'react-native'

import withApp, { mapStateToProps } from './withApp.hoc'

jest
  .mock('recompose', () => {
    const origin = require.requireActual('recompose')
    return {
      ...origin,
      compose: (...args) => component => args
    }
  })
  .mock('react-redux', () => ({
    connect: () => 'connect'
  }))
  .mock('../withLoading/withLoading.hoc', () => 'withLoading')
  .mock('../withUpdating/withUpdating.hoc', () => updates => 'withUpdating')
  .mock('../nonOptimalStates/nonOptimalStates.hoc', () => configs =>
    'nonOptimalStates'
  )
  .mock('../withErrorBoundary/withErrorBoundary.hoc', () => 'withErrorBoundary')

describe('HOC withApp', () => {
  test('should return at least connect by default', () => {
    const actual = withApp()(View)
    expect(actual).toEqual(['connect'])
  })
  test('should return a list of HOCs', () => {
    const actual = withApp({
      loading: true,
      errorHandling: true
    })(View)
    expect(actual).toEqual(['connect', 'withLoading', 'withErrorBoundary'])
  })
  test('should return a diff list of HOCs', () => {
    const actual = withApp({
      updates: ['getGoalList'],
      renderWhen: [{ render: 'NOTHING', when: props => props.errors }]
    })(View)
    expect(actual).toEqual(['connect', 'withUpdating', 'nonOptimalStates'])
  })
  test('should select correct state', () => {
    const actual = mapStateToProps({ language: 'en' })
    expect(actual).toEqual({ language: 'en' })
  })
})
