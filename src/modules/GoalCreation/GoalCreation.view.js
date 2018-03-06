// @flow
import React from 'react'

import { Wrapper } from '../../components/Styled'

import GoalCreationForm from './GoalCreation.form'

type Props = {
  ADD_NEW_GOAL: Function
}

const GoalCreationView = ({ ADD_NEW_GOAL }: Props) => (
  <Wrapper>
    <GoalCreationForm onSubmit={ADD_NEW_GOAL} />
  </Wrapper>
)

export default GoalCreationView
