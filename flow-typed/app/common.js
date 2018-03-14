import type { UnaryPredicateFn } from 'ramda'
import type { ComponentType } from 'react'

declare type GenericProps = Object
declare type GenericComponent = ComponentType<GenericProps>
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
