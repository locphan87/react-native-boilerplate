// @flow
import React from 'react'
import { Button, View } from 'react-native'

import Progress from '../../components/Progress/Progress.component'
import { Wrapper, Text } from '../../components/Styled'
import I18n from '../../i18n'
import type { Goal } from '../../types'

type Props = {
  goalItem: Goal,
  REMOVE_GOAL: Function
}

const GoalDetailsView = ({ REMOVE_GOAL, goalItem }: Props) => (
  <Wrapper>
    <Text h1>{goalItem.title}</Text>
    <View style={{ width: 200 }}>
      <Progress {...goalItem} disabled />
    </View>
    <Button
      title={I18n.t('goalDetails.view.buttons.delete')}
      onPress={REMOVE_GOAL}
    />
  </Wrapper>
)
GoalDetailsView.displayName = 'GoalDetailsView'

export default GoalDetailsView
