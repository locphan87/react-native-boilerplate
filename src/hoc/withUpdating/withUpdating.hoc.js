// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { equals } from 'ramda'
import { compose, withProps, withState } from 'recompose'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'
import type { GenericHOC, GenericProps } from '../../types'

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

type SimulatePendingFn = (
  asyncFns: string[],
  updateStateFn?: string
) => GenericProps => GenericProps
const simulatePending: SimulatePendingFn = (
  asyncFns,
  updateStateFn = 'setUpdating'
) => props =>
  asyncFns.reduce((acc, key) => {
    acc[key] = async (...args) => {
      try {
        props[updateStateFn](true)
        await props[key](...args)
        props[updateStateFn](false)
      } catch (e) {
        props[updateStateFn](false)
      }
    }

    return acc
  }, {})

type WithUpdatingConfigFn = (string[]) => GenericHOC
const withUpdatingConfig: WithUpdatingConfigFn = updates =>
  compose(
    withState('updating', 'setUpdating', false),
    withProps(simulatePending(updates)),
    withUpdating
  )

export { withUpdating, simulatePending }
export default withUpdatingConfig
