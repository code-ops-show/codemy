import * as React from 'react'
import { useRouteNode } from 'react-router5'
import { FunctionComponent } from 'react'
import { PageIndex } from 'typings/page_index'

import terms from './terms'
import membership from './membership'
import privacy from './privacy'

const pages: PageIndex = {
  'pages.terms': terms,
  'pages.membership': membership,
  'pages.privacy': privacy
}

const Pages: FunctionComponent = () => {
  const { route } = useRouteNode('pages')

  const SubPage = pages[route.name]

  return <SubPage route={route} />
}

export default Pages
