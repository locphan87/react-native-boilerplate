// @flow
import Sentry from 'sentry-expo'
import { SentryLog } from 'react-native-sentry'

const {
  setUserContext,
  setTagsContext,
  captureMessage,
  captureException
} = Sentry
const configure = (dsn: string) => {
  Sentry.config(dsn, {
    deactivateStacktraceMerging: false,
    logLevel: SentryLog.Debug
  }).install()
}

export {
  configure,
  setTagsContext,
  setUserContext,
  captureMessage,
  captureException
}
