import { StyleSheet } from 'react-native'

import { COLORS } from '../../themes'

const styles = {
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  button: {
    marginTop: 10
  },
  disabled: {
    opacity: 0.7
  }
}

export { styles as stylesObj }
export default StyleSheet.create(styles)
