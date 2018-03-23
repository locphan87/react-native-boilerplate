// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { equals } from 'ramda'
import { compose, withProps, withState } from 'recompose'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'

const withUpdating: GenericHOC = WrappedComponent => ({
  updating,
  ...rest
}) => {
  const isUpdating = equals(true, updating)
  return (
    <View style={styles.container}>
      <WrappedComponent {...rest} />
      {isUpdating && <LoadingMask style={styles.updating} />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  updating: {
    opacity: 0.8
  }
})

type SimulatePending = (
  asyncFns: string[],
  updateState?: string
) => GenericProps => GenericProps
const simulatePending: SimulatePending = (
  asyncFns,
  updateState = 'setUpdating'
) => props =>
  asyncFns.reduce((acc, key) => {
    acc[key] = async (...args) => {
      try {
        props[updateState](true)
        await props[key](...args)
        props[updateState](false)
      } catch (e) {
        props[updateState](false)
      }
    }
    return acc
  }, {})

type WithUpdatingConfig = (string[]) => GenericHOC
const withUpdatingConfig: WithUpdatingConfig = updates =>
  compose(
    withState('updating', 'setUpdating', false),
    withProps(simulatePending(updates)),
    withUpdating
  )

export { withUpdating, simulatePending }
export default withUpdatingConfig
