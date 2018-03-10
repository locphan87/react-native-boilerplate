// @flow
import { branch, renderComponent } from 'recompose'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'

const isLoading = props => props.loading
const withLoading = branch(
  isLoading,
  renderComponent(LoadingMask)
)

export default withLoading
