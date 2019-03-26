import * as React from 'react'
import { FunctionComponent } from 'react'
import { useRoute } from 'react-router5'

import { isAuth } from '~/helpers/routes'

import Auth from './auth'
import Default from './default'

const Footer: FunctionComponent = () => {
  const { route } = useRoute()

  if (isAuth(route)) return <Auth />

  return <Default />
}

export default Footer