import React from 'react'

import { Text } from '../../../components/Styled'
import I18n from '../../../i18n'

const HeaderTitle = ({ titleKey, title }) => (
  <Text style={styles.container}>{title || I18n.t(titleKey)}</Text>
)
const styles = {
  container: {
    fontSize: 18,
    color: 'white'
  }
}

export default HeaderTitle
