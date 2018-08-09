// @flow
import { compose, branch, renderComponent, renderNothing } from 'recompose'

import Constants from '../../constants'
import type { RenderPredicate, GenericComponent, GenericHOC } from '../../types'

type Nothing = Constants.NOTHING
type NonOptimalState = {
  when: RenderPredicate,
  render: Nothing | GenericComponent
}

type renderWhenFn = (NonOptimalState[]) => GenericHOC
const renderWhen: renderWhenFn = states =>
  compose(
    ...states.map(({ when, render }) => {
      const component =
        render === Constants.NOTHING ? renderNothing : renderComponent(render)
      return branch(when, component)
    })
  )

export type { NonOptimalState }
export default renderWhen
