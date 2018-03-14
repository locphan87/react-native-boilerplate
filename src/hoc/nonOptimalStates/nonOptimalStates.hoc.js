// @flow
import {
  branch,
  renderComponent,
  renderNothing
} from 'recompose'

import Constants from '../../constants'

type Nothing = Constants.NOTHING
export type NonOptimalState = {
  when: RenderPredicate,
  render: Nothing | GenericComponent
}

const nonOptimalStates = (states: NonOptimalState[]) =>
  states.map(({ when, render }) => {
    const component =
      render === Constants.NOTHING
        ? renderNothing
        : renderComponent(render)
    return branch(when, component)
  })

export default nonOptimalStates
