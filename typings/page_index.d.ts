import { FunctionComponent, LazyExoticComponent } from 'react'
import { RouteProps } from './route'

export interface PagesIndex {
  [key: string]: FunctionComponent<RouteProps>
}

export interface LazyPagesIndex {
  [key: string]: LazyExoticComponent<any>
}