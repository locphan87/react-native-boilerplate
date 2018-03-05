// @flow
import glamorous from 'glamorous-native'
import { View } from 'react-native'

const styles = (props, { colors }) => ({
  flex: 1,
  backgroundColor: colors.base,
  alignItems: 'center',
  justifyContent: 'center'
})

export default glamorous(View)(styles)
