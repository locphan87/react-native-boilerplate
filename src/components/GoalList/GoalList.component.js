// @flow
import React from 'react'
import { FlatList } from 'react-native'
import { List } from 'react-native-elements'
import { prop } from 'ramda'

import GoalItem from '../GoalItem/GoalItem.component'

import styles from './GoalList.component.style'

type Props = {
  list: GoalProp[],
  onPress: Function
}

const GoalList = ({ list, onPress }: Props) => (
  <List containerStyle={styles.base}>
    <FlatList
      data={list}
      keyExtractor={prop('id')}
      renderItem={({ item }) => (
        <GoalItem {...item} onPress={onPress} />
      )}
    />
  </List>
)

export default GoalList
