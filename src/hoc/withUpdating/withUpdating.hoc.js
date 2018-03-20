// @flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { equals } from 'ramda'

import LoadingMask from '../../components/LoadingMask/LoadingMask.component'

const withUpdating = (
  WrappedComponent: GenericComponent
) => ({ updating, ...rest }: GenericProps) => {
  const isUpdating = equals(true, updating)
  return (
    <View style={styles.container}>
      <WrappedComponent {...rest} />
      {isUpdating && (
        <View style={styles.loading}>
          <LoadingMask />
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    position: 'absolute',
    opacity: 0.7,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default withUpdating
