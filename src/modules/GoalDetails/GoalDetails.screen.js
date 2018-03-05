// @flow
import React from 'react'
import { Button } from 'react-native'

import { Wrapper, Text } from '../../components/Styled'
import { actions } from '../GoalList/GoalList.reducer'
import { getNavState } from '../Navigation/Navigation.util'
import withApp from '../../hoc/withApp/withApp.hoc'

const mapDispatchToProps = {
  removeGoal: actions.removeGoal
}
const handlers = ({ removeGoal, navigation }) => ({
  REMOVE_GOAL: async () => {
    const id = getNavState('id', navigation)
    await removeGoal(id)
    navigation.goBack()
  }
})

const GoalDetailsScreen = ({ REMOVE_GOAL }) => (
  <Wrapper>
    <Text>Details Screen</Text>
    <Button title={'Delete'} onPress={REMOVE_GOAL} />
  </Wrapper>
)

export default withApp({
  connect: { mapDispatchToProps },
  withProps: handlers
})(GoalDetailsScreen)
