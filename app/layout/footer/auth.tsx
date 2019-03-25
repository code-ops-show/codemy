import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router5'

const Auth: FunctionComponent = () => {
  const { t } = useTranslation('layout')

  return (
    <div className='text-center my-10'>
      <Link routeName='root' className='text-white no-underline'>
        <i className='fas fa-angle-double-left mr-3'></i>
        {t('footer.auth.home')}
      </Link>
    </div>
  )
}

export default Auth