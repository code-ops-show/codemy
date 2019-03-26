import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router5'

import * as styles from './auth.sass'

const Auth: FunctionComponent = () => {
  const { t } = useTranslation('layout')

  const links: Array<{ title: string, path: string }> = t(
    'application.footer.auth.links', { returnObjects: true }
  )

  return (
    <footer className='text-white text-center'>
      <div className='mt-8 mb-5'>
        {links.map((link, index) =>
          <Link key={`auth_footer_${index}`} routeName={link.path} className={c(styles.link, 'text-white no-underline')}>
            {link.title}
          </Link>
        )}
      </div>
      <div className='container mx-auto mt-5 mb-10'>
        <p className='text-pacific-light text-xs'>{t('application.footer.copyright')}</p>
      </div>
    </footer>
  )
}

export default Auth