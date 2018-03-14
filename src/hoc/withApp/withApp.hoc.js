// @flow
import { compose } from 'recompose'
import { isNonEmptyArray } from 'ramda-adjunct'
import Immutable from 'seamless-immutable'

import { insertIf } from '../../utils/common.util'
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

const withApp = ({
  loading = false,
  updating = false,
  renderWhen = []
}: Options) => (WrappedComponent: GenericComponent) => {
  const enhancers = Immutable([
    ...insertIf(loading, withLoading),
    ...insertIf(updating, withUpdating),
    ...insertIf(
      isNonEmptyArray(renderWhen),
      ...nonOptimalStates(renderWhen)
    )
  ])

  return compose(...enhancers)(WrappedComponent)
}

export default withApp
