// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { equals } from 'ramda'
import { compose, withProps, withState } from 'recompose'

import { COLORS } from '../../themes'
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
    backgroundColor: COLORS.base,
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
        const response = await props[key](...args)
        props[updateStateFn](false)

        return response
      } catch (err) {
        props[updateStateFn](false)
        // catch should only process errors that
        // it knows and `rethrow` all others.
        throw err
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
