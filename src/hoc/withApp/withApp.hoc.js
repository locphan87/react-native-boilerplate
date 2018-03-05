// @flow
import * as Recompose from 'recompose'
import type { ComponentType } from 'react'
import { connect } from 'react-redux'
import { isEmpty, keys } from 'ramda'

import { insertIf } from '../../utils/common.util'

type Props = any
type State = any
type Connect = {
  mapStateToProps?: State => Object,
  mapDispatchToProps?: Object
}
type Options = {
  connect?: Connect
}

const { compose } = Recompose

const withApp = ({
  connect: connectOpts = {},
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
      const enhancer = Recompose[key](rest[key])
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
    )
  ]

  return compose(...enhancers)(WrappedComponent)
}

export default withApp
