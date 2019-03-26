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
    <footer className='py-5 text-white text-center'>
      {links.map((link, index) =>
        <Link key={`auth_footer_${index}`} routeName={link.path} className={c(styles.link, 'text-white no-underline')}>
          {link.title}
        </Link>
      )}
    </footer>
  )
}

export default Auth