import * as React from 'react'
import { useRouteNode } from 'react-router5'
import { FunctionComponent } from 'react'
import { PageIndex } from 'typings/page_index' 

import login from './login'
import register from './register'

const pages: PageIndex = {
  'auth.login': login,
  'auth.register': register
}

const Auth: FunctionComponent = () => {
  const { route } = useRouteNode('auth')

  const SubPage = pages[route.name]

  return <SubPage route={route} />
}

export default Auth
