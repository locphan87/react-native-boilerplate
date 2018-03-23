// @flow
import { createActions } from 'redux-actions'
import typeToReducer from 'type-to-reducer'

import I18n from '../../i18n'

const actions = createActions('SET_LANGUAGE')

const initialState: string = I18n.currentLocale()
const reducer = typeToReducer(
  {
    [actions.setLanguage]: (state, action) => action.payload
  },
  initialState
)

export { actions }
export default reducer
