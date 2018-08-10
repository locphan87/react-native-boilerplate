// @flow
import React from 'react'
import { Button } from 'react-native'
import { compose, head, without, defaultTo } from 'ramda'
import { ENV } from 'env-config'

import { Wrapper, Text } from '../../components/Styled'
import I18n from '../../i18n'

type Props = {
  language: string,
  TOGGLE_LANGUAGE: Function
}

const languages = ['en', 'vi']

const HomeView = (props: Props) => {
  const { language } = props
  const newLanguage: string = compose(
    defaultTo(''),
    head,
    without([language])
  )(languages)
  const changeLanguageTitle = newLanguage.toUpperCase()

  return (
    <Wrapper>
      <Text>{I18n.t('home.view.welcome')}</Text>
      <Text>{`ENV: ${ENV && ENV.toUpperCase()}`}</Text>
      <Button
        onPress={props.TOGGLE_LANGUAGE(newLanguage)}
        title={changeLanguageTitle}
      />
    </Wrapper>
  )
}
HomeView.displayName = 'HomeView'

export default HomeView
