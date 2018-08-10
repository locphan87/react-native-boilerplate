import { View } from 'react-native'
import glamorous from 'glamorous-native'

import { Wrapper, Text } from '../../components/Styled'

const Container = glamorous(Wrapper)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})
const Row = glamorous(View)({
  flexDirection: 'row',
  paddingHorizontal: 20,
  marginBottom: 10
})
const Label = glamorous(Text)({
  flex: 4,
  color: 'yellow',
  fontSize: 18,
  marginRight: 5
})
const Value = glamorous(Text)({
  flex: 6,
  fontSize: 16
})

export { Container, Row, Label, Value }
