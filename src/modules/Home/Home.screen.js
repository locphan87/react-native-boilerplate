// @flow
import React from 'react'

import { Wrapper, Text } from '../../components/Styled'
import I18n from '../../i18n'

const HomeScreen = () => (
  <Wrapper>
    <Text>Welcome to Progress App</Text>
    <Text>{I18n.t('hello')}</Text>
  </Wrapper>
)

export default HomeScreen
