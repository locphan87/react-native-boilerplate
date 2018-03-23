// @flow
import { Text } from 'react-native'
import glamorous from 'glamorous-native'
import { keys, find } from 'ramda'

import { match } from '../../../utils/common.util'

const fontSizes = {
  h1: 20,
  h2: 18,
  h3: 16,
  _: 14
}
const styles = (props, { colors }) => {
  const hasStyleInProps = key => props[key]
  const fontStyle = find(hasStyleInProps, keys(fontSizes))
  const fontSize = match(fontStyle)(fontSizes)

  return {
    color: props.color || colors.white,
    fontSize
  }
}

export default glamorous(Text)(styles)
