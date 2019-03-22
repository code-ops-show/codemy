import * as React from 'react'
import { useRouteNode } from 'react-router5'
import { FunctionComponent } from 'react'

import { RouteProps } from 'typings/route'

import login from './login'

type AuthPageIndex = {
  [key: string]: FunctionComponent<RouteProps>
}

const pages: AuthPageIndex = {
  'auth.login': login
}

const Auth: FunctionComponent = () => {
  const { route } = useRouteNode('auth')

  const SubPage = pages[route.name]

  return (<SubPage route={route} />)
}

export default Auth
