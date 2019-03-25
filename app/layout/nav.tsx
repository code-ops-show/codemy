import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useRoute } from 'react-router5'
import { isAuth } from '~/helpers/routes'

import logo from '~/assets/logo.svg'

import * as styles from './nav.sass'

const PageLinks: FunctionComponent = () => {
  const { t } = useTranslation('layout')
  const { route } = useRoute()
  const auth: boolean = isAuth(route)

  if (auth) return null

  return (
    <div className='w-full block flex flex-grow lg:flex lg:items-center lg:w-auto'>
      <div className='text-lg lg:flex-grow'>
        <Link
          routeName='root'
          activeClassName={styles.active}
          className={c(styles.link, 'mr-10 hover:text-teal-lighter')}
        >
          {t('application.nav.home')}
        </Link>
        <a
          href='#'
          className={c(styles.link, 'mr-10 hover:text-teal-lighter')}
        >
          {t('application.nav.videos')}
        </a>
        <a
          href='#'
          className={c(styles.link, 'mr-10 hover:text-teal-lighter')}
        >
          {t('application.nav.membership')}
        </a>
        <a
          href='#'
          className={c(styles.link, 'mr-10 hover:text-teal-lighter')}
        >
          {t('application.nav.about')}
        </a>
      </div>
      <div className='text-lg'>
        <Link
          routeName='auth.login'
          activeClassName={styles.active}
          className={c(styles.link, 'mr-10 hover:text-teal-lighter')}
        >
          {t('application.nav.login')}
        </Link>
        <a
          href='#'
          className={c(
            styles.link,
            'mr-5 border rounded px-4 py-2 hover:bg-white hover:text-denim'
          )}
        >
          {t('application.nav.register')}
        </a>
      </div>
    </div>
  )
}

const Nav: FunctionComponent = () => {
  const { route } = useRoute()

  let logoClass: string = 'flex items-center flex-no-shrink text-white ml-5 mr-10'

  const auth: boolean = isAuth(route)

  if (auth) { logoClass = 'text-center' }

  return (
    <nav className='flex items-center justify-between flex-wrap pt-10 pb-20'>
      <div className={c('container mx-auto z-10', { flex: !auth })}>
        <div className={logoClass}>
          <img src={logo} width={54} height={54} alt='Codemy Logo' />
        </div>
        <PageLinks />
      </div>
    </nav>
  )
}

export default Nav
