// @flow
import { Text } from 'react-native'
import glamorous from 'glamorous-native'
import { keys, find } from 'ramda'

const FONT_SIZE = 14
const fontSizes = {
  h1: 20,
  h2: 18,
  h3: 16
}
const styles = (props, { colors }) => {
  const hasStyleInProps = key => props[key]
  const fontStyle = find(hasStyleInProps, keys(fontSizes))
  const fontSize =
    (fontStyle && fontSizes[fontStyle]) || FONT_SIZE
  return {
    color: props.color || colors.white,
    fontSize
  }
}

export default glamorous(Text)(styles)
