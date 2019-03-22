import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import { useRoute } from 'react-router5'

import Nav from './nav'
import Footer from './footer'

import favicon from '~/assets/favicon.png'

import Pages from '../pages'

const Application: FunctionComponent<any> = () => {
  const { t } = useTranslation('layout')
  const { route } = useRoute()

  const metaTags: Array<{ name: string, content: string }> = [
    { name: 'description', content: t('application.description') }
  ]

  return (
    <main id='application' className='font-codemy-sans'>
      <Helmet title={t('application.title')} meta={metaTags} />
      <Nav />
      <div className='min-h-screen'>
        <Pages route={route} />
      </div>
      <Footer />
    </main>
  )
}

export default Application
