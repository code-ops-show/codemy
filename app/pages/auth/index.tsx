import * as React from 'react'
import { useRouteNode } from 'react-router5'
import { FunctionComponent } from 'react'
import { PagesIndex } from 'typings/page_index' 

import login from './login'
import register from './register'

const pages: PagesIndex = {
  'auth.login': login,
  'auth.register': register
}

const Auth: FunctionComponent = () => {
  const { route, router } = useRouteNode('auth')

  const SubPage = pages[route.name]

  return <SubPage route={route} router={router} />
}

export default Auth
