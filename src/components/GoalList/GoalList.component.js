// @flow
import React from 'react'
import { List } from 'react-native-elements'

import GoalItem from '../GoalItem/GoalItem.component'

import styles from './GoalList.component.style'

type Props = {
  list: Goal[],
  onPress: any => void
}

const GoalList = ({ list, onPress }: Props) => (
  <List containerStyle={styles.base}>
    {list.map(item => <GoalItem key={item.id} {...item} onPress={onPress} />)}
  </List>
)

export default GoalList
