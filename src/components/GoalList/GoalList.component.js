// @flow
import React from 'react'
import { View, FlatList } from 'react-native'
import { compose, prop } from 'ramda'

import GoalItem from '../GoalItem/GoalItem.component'
import type { Goal } from '../../types'

import styles from './GoalList.component.style'

type Props = {
  list: Goal[],
  onPress: Function
}

const keyExtractor = compose(
  String,
  prop('id')
)

const GoalList = ({ list, onPress }: Props) => (
  <View style={styles.container}>
    <FlatList
      data={list}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => <GoalItem {...item} onPress={onPress} />}
    />
  </View>
)
GoalList.displayName = 'GoalList'

export default GoalList
