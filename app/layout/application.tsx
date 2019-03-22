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

  return (
    <main id='application' className='font-codemy-sans'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{t('application.title')}</title>
        <link rel='canonical' href='https://about.codemy.net' />
        <meta name='description' content={t('application.description')} />
        <link rel='shortcut icon' type='image/png' href={favicon} />
      </Helmet>
      <Nav />
      <div className='min-h-screen'>
        <Pages route={route} />
      </div>
      <Footer />
    </main>
  )
}

export default Application
