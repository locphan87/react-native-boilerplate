import handlers from '../GoalList.handler'
import { Routes } from '../../Navigation/Navigation.constant'

describe('GoalList handlers', () => {
  const props = {
    navigation: {
      navigate: jest.fn()
    }
  }

  describe('OPEN_DETAILS', () => {
    test('should navigate to the detail page', () => {
      const handler = handlers.OPEN_DETAILS(props)(12)
      handler()
      expect(props.navigation.navigate).toBeCalledWith(
        Routes.Goal.GoalDetails,
        { id: 12 }
      )
    })
  })
})
