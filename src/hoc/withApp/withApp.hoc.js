// @flow
import * as Recompose from 'recompose'
import { connect } from 'react-redux'
import { isEmpty, keys } from 'ramda'

type Options = {
  connect: Object
}

const { compose } = Recompose
const insertIf = (condition, ...elements) => (condition ? elements : [])

const withApp = ({ connect: connectOpts = {}, ...rest }: Options) => (
  WrappedComponent: any
) => {
  const getConnectEnhancer = () => {
    const { mapStateToProps = null, mapDispatchToProps = null } = connectOpts
    return connect(mapStateToProps, mapDispatchToProps)
  }
  const getRecomposeEnhancers = () =>
    keys(rest).reduce((acc, key) => {
      if (!Recompose[key]) return acc
      const enhancer = Recompose[key](rest[key])
      return acc.concat(enhancer)
    }, [])
  const enhancers = [
    ...insertIf(!isEmpty(connectOpts), getConnectEnhancer()),
    ...insertIf(keys(rest), ...getRecomposeEnhancers())
  ]

  return compose(...enhancers)(WrappedComponent)
}

export default withApp
