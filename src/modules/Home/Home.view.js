// @flow
import React from 'react'
import { Button } from 'react-native'

import { Wrapper, Text } from '../../components/Styled'
import I18n from '../../i18n'

type Props = {
  TOGGLE_LANGUAGE: Function
}

const HomeView = (props: Props) => (
  <Wrapper>
    <Text>{I18n.t('home.view.welcome')}</Text>
    <Button
      onPress={props.TOGGLE_LANGUAGE('vi')}
      title={'vi'}
    />
    <Button
      onPress={props.TOGGLE_LANGUAGE('en')}
      title={'en'}
    />
  </Wrapper>
)

export default HomeView
