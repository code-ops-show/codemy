import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { RouteProps } from 'typings/route'

const Login: FunctionComponent<RouteProps> = props => {
  const { t } = useTranslation('components')

  const { route } = props

  return (
    <div className='container max-w-sm mx-auto animated fadeIn'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-grey-darkest mb-5 text-3xl font-thin'>{t('forms.login.heading')}</h2>
      </form>
    </div>
  )
}

export default Login
