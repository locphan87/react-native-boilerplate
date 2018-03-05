// @flow
import { Text } from 'react-native'
import glamorous from 'glamorous-native'

const styles = (props, { colors }) => ({
  color: colors.white,
  fontSize: 14
})

export default glamorous(Text)(styles)
