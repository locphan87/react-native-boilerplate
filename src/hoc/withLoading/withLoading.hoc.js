// @flow
import { branch, renderComponent } from 'recompose'
import { propEq } from 'ramda'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'
import type { RenderPredicate, GenericHOC } from '../../types'

const isLoading: RenderPredicate = propEq('loading', true)
const withLoading: GenericHOC = branch(isLoading, renderComponent(LoadingMask))

export default withLoading
