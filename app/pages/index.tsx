import * as React from 'react'
import { FunctionComponent } from 'react'
import { RouteNode, useRouteNode } from 'react-router5'
import { lazy, Suspense } from 'react'

import { GridLoader } from 'react-spinners'

import { constants, State } from 'router5'
import { RouteProps } from 'typings/route'

const Loader: FunctionComponent = () => {
  return (
    <div className='flex container mx-auto p-20 justify-center'>
      <GridLoader color='#fff' />
    </div>
  )
}

interface PagesIndex {
  [key: string]: React.LazyExoticComponent<any>
}

const pages: PagesIndex = {
  root: lazy(() => import('./root')),
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
  const { route } = useRouteNode('')
  
  return (
    <PageComponent route={route} {...props} />
  )
}
