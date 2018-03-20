import type { UnaryPredicateFn } from 'ramda'
import type { ComponentType } from 'react'
import type { HOC } from 'react'

declare type ID = string
declare type GenericProps = Object
declare type GenericComponent = ComponentType<GenericProps>
declare type GenericHOC = HOC<GenericProps, GenericProps>
declare type RenderPredicate = UnaryPredicateFn<
  GenericProps
>
declare type GoalProp = {
  id: number,
  title: string,
  start: number,
  current: number,
  end: number
}

declare type Payload = Object
