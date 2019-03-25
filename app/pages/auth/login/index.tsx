import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router5'

import { RouteProps } from 'typings/route'

const Login: FunctionComponent<RouteProps> = props => {
  const { t } = useTranslation('components')

  return (
    <div className='container max-w-sm mx-auto animated fadeIn'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-5'>
        <h1 className='text-grey-darkest mb-5 text-3xl font-thin'>{t('forms.login.heading')}</h1>
        <p className='text-grey-dark mb-5 leading-normal text-lg'>{t('forms.login.description')}</p>
      </form>
    </div>
  )
}

export default Login
