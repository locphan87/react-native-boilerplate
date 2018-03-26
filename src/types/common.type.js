// @flow
import type { UnaryPredicateFn } from 'ramda'
import type { ComponentType } from 'react'
import type { HOC } from 'recompose'

type ID = string
type GenericProps = Object
type GenericComponent = ComponentType<GenericProps>
type GenericHOC = HOC<GenericProps, GenericProps>
type RenderPredicate = UnaryPredicateFn<GenericProps>
type Payload = Object

export type {
  ID,
  GenericProps,
  GenericComponent,
  RenderPredicate,
  GenericHOC,
  Payload
}
