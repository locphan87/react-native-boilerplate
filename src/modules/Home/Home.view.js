// @flow
import React from 'react'

import { Wrapper, Text } from '../../components/Styled'
import I18n from '../../i18n'

const HomeView = () => (
  <Wrapper>
    <Text>{I18n.t('home.view.welcome')}</Text>
  </Wrapper>
)

export default HomeView
