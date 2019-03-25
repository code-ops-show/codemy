import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { useRoute } from 'react-router5'

import { isAuth } from '~/helpers/routes'

import Auth from './auth'
import Default from './default'

const footerContent: Function = () => {
  const { route } = useRoute()

  const auth: boolean = isAuth(route)

  if (auth) return <Auth />

  return <Default />
}


const Footer: FunctionComponent = () => {
  return (
    <footer className='py-20 relative text-white'>
      {footerContent()}
    </footer>
  )
}

export default Footer