// @flow
import * as Recompose from 'recompose'
import type { ComponentType } from 'react'
import { connect } from 'react-redux'
import { isEmpty, keys } from 'ramda'

import { insertIf } from '../../utils/common.util'
import withLoading from '../withLoading/withLoading.hoc'

type Props = Object
type State = Object
type Connect = {
  mapStateToProps?: (
    state: State,
    ownProps: Props
  ) => Object,
  mapDispatchToProps?: Object
}
type Options = {
  connect?: Connect,
  loading?: boolean
}

const { compose } = Recompose

const withApp = ({
  connect: connectOpts = {},
  loading: loadingOpts = true,
  ...rest
}: Options) => (WrappedComponent: ComponentType<Props>) => {
  const getConnectEnhancer = () => {
    const {
      mapStateToProps = null,
      mapDispatchToProps = null
    } = connectOpts
    return connect(mapStateToProps, mapDispatchToProps)
  }
  const getRecomposeEnhancers = () =>
    keys(rest).reduce((acc, key) => {
      if (!Recompose[key]) return acc
      const hoc = Recompose[key]
      const enhancer = Array.isArray(rest[key])
        ? hoc(...rest[key])
        : hoc(rest[key])
      return acc.concat(enhancer)
    }, [])
  const enhancers = [
    ...insertIf(
      !isEmpty(connectOpts),
      getConnectEnhancer()
    ),
    ...insertIf(
      !isEmpty(keys(rest)),
      ...getRecomposeEnhancers()
    ),
    ...insertIf(loadingOpts, withLoading)
  ]

  return compose(...enhancers)(WrappedComponent)
}

export default withApp
