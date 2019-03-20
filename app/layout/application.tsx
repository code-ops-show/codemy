import * as React from 'react'
import { FunctionComponent, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import { routeContext } from 'react-router5'

import * as styles from './application.sass'

import Nav from './nav'
import Footer from './footer'

import favicon from '~/assets/favicon.png'

import Pages from '../pages'

const Application: FunctionComponent<any> = () => {
  const context = useContext(routeContext)
  const { t } = useTranslation('layout')

  const { route } = context

  return (
    <main id='application' className={styles.app}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{t('application.title')}</title>
        <link rel='canonical' href='https://about.codemy.net' />
        <meta name='description' content={t('application.description')} />
        <link rel='shortcut icon' type='image/png' href={favicon} />
      </Helmet>
      <Nav />
      <Pages route={route} />
      <Footer />
    </main>
  )
}

export default Application
