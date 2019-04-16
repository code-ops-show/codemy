import * as React from 'react'
import { useRouteNode } from 'react-router5'
import { FunctionComponent, lazy, Suspense } from 'react'
import { LazyPagesIndex } from 'typings/page_index'

import Loader from '~/components/loader'

const pages: LazyPagesIndex = {
  'posts': lazy(() => import('./browse')),
  'posts.page': lazy(() => import('./browse')),
  'posts.show.sets': lazy(() => import('./show')),
  'posts.show.collections': lazy(() => import('./show'))
}

const Pages: FunctionComponent = () => {
  const { route, router } = useRouteNode('posts')

  const SubPage = pages[route.name]

  return (
    <Suspense fallback={<Loader />}>
      <SubPage route={route} router={router} />
    </Suspense>
  )
}

export default Pages
