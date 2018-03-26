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
  type: 'foundation'
}

const GoalItem = (props: Props) => {
  const { id, title, onPress, ...rest } = props
  return (
    <ListItem
      title={title}
      titleStyle={styles.title}
      subtitle={<Progress {...rest} type={'simple'} />}
      subtitleStyle={styles.subtitle}
      underlayColor={'blue'}
      onPress={onPress(id)}
      leftIcon={leftIcon}
    />
  )
}
GoalItem.displayName = 'GoalItem'

export default GoalItem
