// @flow
import { compose } from 'recompose'
import { isNonEmptyArray } from 'ramda-adjunct'
import Immutable from 'seamless-immutable'
import { connect } from 'react-redux'

import { insertIf } from '../../utils/common.util'
import { actions } from '../../modules/Language/Language.reducer'
import withLoading from '../withLoading/withLoading.hoc'
import withUpdating from '../withUpdating/withUpdating.hoc'
import nonOptimalStates, {
  type NonOptimalState
} from '../nonOptimalStates/nonOptimalStates.hoc'

type Options = {
  loading?: boolean,
  updating?: boolean,
  renderWhen?: NonOptimalState[]
}

const mapStateToProps = state => ({
  language: state.language
})
const mapDispatchToProps = {
  setLanguage: actions.setLanguage
}
const withApp = ({
  loading = false,
  updating = false,
  renderWhen = []
}: Options = {}) => (
  WrappedComponent: GenericComponent
) => {
  const enhancers = Immutable([
    connect(mapStateToProps, mapDispatchToProps),
    ...insertIf(loading, withLoading),
    ...insertIf(updating, withUpdating),
    ...insertIf(
      isNonEmptyArray(renderWhen),
      nonOptimalStates(renderWhen)
    )
  ])

  return compose(...enhancers)(WrappedComponent)
}

export default withApp
