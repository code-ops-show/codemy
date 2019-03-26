import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { RouteProps } from 'typings/route'

import { Fields } from '~/components/auth/register'

const Register: FunctionComponent<RouteProps> = props => {
  const { t } = useTranslation('pages')

  return (
    <div className='container max-w-sm mx-auto animated fadeIn'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-5'>
        <h1 className='text-grey-darkest mb-5 text-3xl font-thin'>{t('auth.register.title')}</h1>
        <p className='text-grey-dark mb-5 leading-normal text-lg'>{t('auth.register.description')}</p>
        <Fields />
      </form>
    </div>
  )
}

export default Register
