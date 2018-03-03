// @flow
import React from 'react'
import { Text } from 'react-native'

import { MSG } from '../../constants'
import { Wrapper } from '../../components/Styled'

import GoalCreationForm from './GoalCreation.form'

type Props = {
  update: Props => Object
}

const { ADD_NEW_GOAL } = MSG
const update = ({ addNewGoal }: Props) => ({
  [ADD_NEW_GOAL]: values => {
    alert(JSON.stringify(values))
    // addNewGoal({ ...goal, id: 3 })
  }
})

const GoalCreationView = ({ update }: Props) => (
  <Wrapper>
    <Text>Goal Creation Screen</Text>
    <GoalCreationForm onSubmit={update(ADD_NEW_GOAL)} />
  </Wrapper>
)

export { update }
export default GoalCreationView
