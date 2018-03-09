// @flow
import React from 'react'
import { ListItem } from 'react-native-elements'

import Progress from '../Progress/Progress.component'

import styles from './GoalItem.component.style'

type Props = GoalProp & {
  onPress: Function
}

const leftIcon = {
  name: 'target',
  type: 'foundation'
}

const GoalItem = (props: Props) => {
  const { id, title, onPress } = props
  return (
    <ListItem
      title={title}
      titleStyle={styles.title}
      subtitle={<Progress {...props} />}
      subtitleStyle={styles.subtitle}
      underlayColor={'blue'}
      onPress={onPress(id)}
      leftIcon={leftIcon}
    />
  )
}

export default GoalItem
