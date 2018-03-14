// @flow
import {
  branch,
  renderComponent,
  renderNothing
} from 'recompose'

type Nothing = 'Nothing'
export type NonOptimalState = {
  when: RenderPredicate,
  render: Nothing | GenericComponent
}

const nonOptimalStates = (states: NonOptimalState[]) =>
  states.map(({ when, render }) => {
    const component =
      render === 'Nothing'
        ? renderNothing
        : renderComponent(render)
    return branch(when, component)
  })

export default nonOptimalStates
