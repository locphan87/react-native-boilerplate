// @flow
import React from 'react'
import { ListItem } from 'react-native-elements'

import Progress from '../Progress/Progress.component'
import type { Goal } from '../../types/goal.type'

import styles from './GoalItem.component.style'

type Props = Goal & {
  onPress: Function
}

const leftIcon = {
  name: 'target',
  type: 'foundation',
  color: 'white'
}

const GoalItem = (props: Props) => {
  const { id, title, onPress, ...rest } = props
  return (
    <ListItem
      title={title}
      containerStyle={styles.container}
      titleStyle={styles.title}
      subtitle={<Progress {...rest} type={'simple'} />}
      subtitleStyle={styles.subtitle}
      underlayColor={'blue'}
      onPress={onPress(id)}
      leftIcon={leftIcon}
      chevron
      bottomDivider
    />
  )
}
GoalItem.displayName = 'GoalItem'

export default GoalItem
