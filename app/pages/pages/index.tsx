import * as React from 'react'
import { useRouteNode } from 'react-router5'
import { FunctionComponent } from 'react'
import { PageIndex } from 'typings/page_index'

import membership from './membership'

const pages: PageIndex = {
  'pages.pricing': membership
}

const Pages: FunctionComponent = () => {
  const { route } = useRouteNode('pages')

  const SubPage = pages[route.name]

  return <SubPage route={route} />
}

export default Pages
