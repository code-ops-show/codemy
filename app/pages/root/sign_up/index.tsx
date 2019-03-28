import * as React from 'react'
import { FunctionComponent } from 'react'  
import { useTranslation } from 'react-i18next'

import { Fields } from '~/components/auth/register'

const SignUp: FunctionComponent = () => {
  const { t } = useTranslation('pages')

  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className='text-grey-darkest mb-5 text-3xl font-thin'>{t('root.sign_up.title')}</h2>
      <p className='text-grey-dark mb-5 leading-normal text-lg'>{t('root.sign_up.description')}</p>
      <Fields />
    </form>
  )
}

export default SignUp
