// @flow
import React from 'react'
import { Button } from 'react-native'

import Progress from '../../components/Progress/Progress.component'
import { Wrapper, Text } from '../../components/Styled'
import I18n from '../../i18n'

type Props = {
  goalItem: GoalProp,
  REMOVE_GOAL: Function
}

// draw a progress bar
const GoalDetailsView = ({
  REMOVE_GOAL,
  goalItem
}: Props) => (
  <Wrapper>
    <Text>{goalItem.title}</Text>
    <Text>Start: {goalItem.start}</Text>
    <Text>Current: {goalItem.current}</Text>
    <Text>Target: {goalItem.end}</Text>
    <Progress {...goalItem} />
    <Button
      title={I18n.t('goalDetails.view.buttons.delete')}
      onPress={REMOVE_GOAL}
    />
  </Wrapper>
)

export default GoalDetailsView
