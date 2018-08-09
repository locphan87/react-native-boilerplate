// @flow
import { Routes } from '../Navigation/Navigation.constant'
import type { ID } from '../../types'

type Props = {
  navigation: Object
}

const handlers = {
  OPEN_DETAILS: (props: Props) => (id: ID) => () => {
    const {
      navigation: { navigate }
    } = props
    navigate(Routes.Goal.GoalDetails, { id })
  }
}

export default handlers
