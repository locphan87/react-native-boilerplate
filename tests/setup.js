import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

// fix wrong display name of view
// ref: https://github.com/facebook/react-native/pull/18813
jest.mock('View', () => 'View')
