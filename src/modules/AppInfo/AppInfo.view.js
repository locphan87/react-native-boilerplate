// @flow
import React from 'react'
import { ENV } from 'env-config'

import appJSON from '../../../app.json'
import I18n from '../../i18n'

import { Container, Row, Label, Value } from './AppInfo.view.style'

const AppInfoView = () => (
  <Container>
    <Row>
      <Label>{I18n.t('appName')}</Label>
      <Value>{appJSON.expo.name}</Value>
    </Row>
    <Row>
      <Label>{I18n.t('environment')}</Label>
      <Value>{ENV}</Value>
    </Row>
  </Container>
)
AppInfoView.displayName = 'AppInfoView'

export default AppInfoView
