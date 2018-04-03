// @flow
import glamorous from 'glamorous-native'
import { View } from 'react-native'

const styles = (props, { colors }) => ({
  flex: 1,
  backgroundColor: props.bgColor || colors.base,
  alignItems: 'center',
  justifyContent: 'center'
})

const Wrapper = glamorous(View)(styles)
Wrapper.displayName = 'StyledWrapper'

export default Wrapper
