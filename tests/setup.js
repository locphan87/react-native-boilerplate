import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

jest
  .mock('react-native-elements', () => {
    const actual = require.requireActual('react-native-elements')
    return {
      ...actual,
      ListItem: 'ListItem'
    }
  })
  .mock('react-native-i18n', () => {
    const actual = require.requireActual('react-native-i18n')
    return {
      ...actual,
      t: term => term
    }
  })
