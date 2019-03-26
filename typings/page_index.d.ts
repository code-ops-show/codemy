import { FunctionComponent } from 'react'
import { RouteProps } from './route'

export interface PageIndex {
  [key: string]: FunctionComponent<RouteProps>
}