// @flow
import { branch, renderComponent } from 'recompose'
import { propEq } from 'ramda'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'

const isLoading = propEq('loading', true)
const withLoading = branch(
  isLoading,
  renderComponent(LoadingMask)
)

export default withLoading
