// @flow
import { createAction } from 'redux-actions'
import typeToReducer from 'type-to-reducer'

import I18n from '../../i18n'

const SET_LANGUAGE = 'LANGUAGE/SET_LANGUAGE'
const setLanguage = createAction(SET_LANGUAGE)
const actions = { setLanguage }

const initialState: string = I18n.currentLocale()
const reducer = typeToReducer(
  {
    [SET_LANGUAGE]: (state, action) => action.payload
  },
  initialState
)

export { actions }
export default reducer
