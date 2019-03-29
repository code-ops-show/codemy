import * as React from 'react'
import { useRouteNode } from 'react-router5'
import { FunctionComponent, lazy, Suspense } from 'react'
import { LazyPagesIndex } from 'typings/page_index'

import Loader from '~/components/loader'

const pages: LazyPagesIndex = {
  'posts': lazy(() => import('./browse')),
  'posts.show': lazy(() => import('./show'))
}

const Pages: FunctionComponent = () => {
  const { route } = useRouteNode('posts')

  const SubPage = pages[route.name]

  return (
    <Suspense fallback={<Loader />}>
      <SubPage route={route} />
    </Suspense>
  )
}

export default Pages
