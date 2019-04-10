import * as React from 'react'
import { FunctionComponent } from 'react'
import { useRouteNode } from 'react-router5'
import { lazy, Suspense } from 'react'
import { constants, State } from 'router5'
import { RouteProps } from 'typings/route'
import { LazyPagesIndex } from 'typings/page_index'

import Loader from '~/components/loader'

const pages: LazyPagesIndex = {
  root: lazy(() => import('./root')),
  auth: lazy(() => import('./auth')),
  pages: lazy(() => import('./pages')),
  posts: lazy(() => import('./posts')),
  conversations: lazy(() => import('./conversations')),
  not_found: lazy(() => import('./not_found'))
}

const PageComponent: FunctionComponent<RouteProps> = (props: {
  route: State
}) => {
  const { route } = props

  let [page] = route.name.split('.')

  if (page === constants.UNKNOWN_ROUTE) {
    page = 'not_found'
  }

  const Page = pages[page]

  return (
    <Suspense fallback={<Loader />}>
      <Page {...props} />
    </Suspense>
  )
}

export default (props: { route: State }) => {
  const { route, router } = useRouteNode('')
  
  return <PageComponent route={route} router={router} {...props} />
}
