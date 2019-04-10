import * as React from 'react'
import { useRouteNode } from 'react-router5'
import { FunctionComponent } from 'react'
import { PagesIndex } from 'typings/page_index'

import terms from './terms'
import membership from './membership'
import privacy from './privacy'
import about from './about'

const pages: PagesIndex = {
  'pages.terms': terms,
  'pages.membership': membership,
  'pages.privacy': privacy,
  'pages.about': about
}

const Pages: FunctionComponent = () => {
  const { route, router } = useRouteNode('pages')

  const SubPage = pages[route.name]

  return <SubPage route={route} router={router} />
}

export default Pages
