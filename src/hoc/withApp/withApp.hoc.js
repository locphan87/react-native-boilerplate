// @flow
import { compose } from 'recompose'
import { isNonEmptyArray } from 'ramda-adjunct'
import Immutable from 'seamless-immutable'
import { connect } from 'react-redux'

import { insertIf } from '../../utils/common.util'
import { actions } from '../../modules/Language/Language.reducer'
import withLoading from '../withLoading/withLoading.hoc'
import withUpdating from '../withUpdating/withUpdating.hoc'
import withErrorBoundary from '../withErrorBoundary/withErrorBoundary.hoc'
import renderWhen, { type NonOptimalState } from '../renderWhen/renderWhen.hoc'
import type { GenericHOC } from '../../types'

type Options = {
  loading?: boolean,
  updates?: string[],
  renderWhen?: NonOptimalState[],
  errorHandling?: boolean
}

const mapStateToProps = (state: Object) => ({
  language: state.language
})
const mapDispatchToProps = {
  setLanguage: actions.setLanguage
}

type WithApp = Options => GenericHOC
const withApp: WithApp = ({
  loading = false,
  updates = [],
  renderWhen: renderWhenOptions = [],
  errorHandling = false
} = {}) => WrappedComponent => {
  const enhancers = Immutable([
    connect(mapStateToProps, mapDispatchToProps),
    ...insertIf(loading, withLoading),
    ...insertIf(isNonEmptyArray(updates), withUpdating(updates)),
    ...insertIf(
      isNonEmptyArray(renderWhenOptions),
      renderWhen(renderWhenOptions)
    ),
    ...insertIf(errorHandling, withErrorBoundary)
  ])

  return compose(...enhancers)(WrappedComponent)
}

export { mapStateToProps }
export default withApp
