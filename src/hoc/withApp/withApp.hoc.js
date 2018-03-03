// @flow
import * as Recompose from 'recompose'
import updateCreator from 'update-creator'
import { connect } from 'react-redux'
import { isEmpty, keys } from 'ramda'

type Options = {
  update: Object => Object,
  connect: Object
}

const { compose, withProps } = Recompose
const insertIf = (condition, ...elements) => (condition ? elements : [])

const withApp = ({ update, connect: connectOpts = {}, ...rest }: Options) => (
  WrappedComponent: any
) => {
  const getConnectEnhancer = () => {
    const { mapStateToProps = null, mapDispatchToProps = null } = connectOpts
    return connect(mapStateToProps, mapDispatchToProps)
  }
  const getUpdateEnhancer = () =>
    withProps(_props => {
      const updater = update(_props)
      return { update: updateCreator(updater) }
    })
  const getRecomposeEnhancers = () =>
    keys(rest).reduce((acc, key) => {
      if (!Recompose[key]) return acc
      const enhancer = Recompose[key](rest[key])
      return acc.concat(enhancer)
    }, [])
  const enhancers = [
    ...insertIf(!isEmpty(connectOpts), getConnectEnhancer()),
    ...insertIf(update, getUpdateEnhancer()),
    ...insertIf(keys(rest), ...getRecomposeEnhancers())
  ]

  return compose(...enhancers)(WrappedComponent)
}

export default withApp
