// @flow
import { Text } from 'react-native'
import glamorous from 'glamorous-native'
import { keys, find } from 'ramda'

import { match } from '../../../utils/common.util'
import { FONTS } from '../../../themes'

const styles = (props, { colors }) => {
  const hasStyleInProps = key => props[key]
  const fontStyle = find(hasStyleInProps, keys(FONTS.SIZE))
  const fontSize = match(fontStyle)(FONTS.SIZE)

  return {
    color: props.color || colors.white,
    fontSize
  }
}

export default glamorous(Text)(styles)
