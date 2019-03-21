import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'  
import { useTranslation } from 'react-i18next'

import * as form from '~/styles/form.sass'

const SignUp: FunctionComponent = () => {
  const { t } = useTranslation('pages')

  return (
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className='text-grey-darkest mb-5 text-3xl font-thin'>{t('root.sign_up.title')}</h2>
      <p className='text-grey-dark mb-5 leading-normal text-lg'>{t('root.sign_up.description')}</p>
      <div className='mb-8'>
        <label className='block text-grey-dark mb-2' htmlFor='email'>
          {t('root.sign_up.email')}
        </label>
        <input className={form.text_entry} type='email' name='email' required/>
      </div>
      <div className='mb-4'>
        <label className='block text-grey-dark mb-2' htmlFor='password'>
          {t('root.sign_up.password')}
        </label>
        <input className={form.text_entry} type='password' name='password' required/>
      </div>
      <div className='mb-6'>
        <label className='block text-grey-dark mb-2' htmlFor='password'>
          {t('root.sign_up.password_confirm')}
        </label>
        <input className={form.text_entry} type='password' name='password_confirmation' required/>
      </div>
      <div>
        <button className='w-full p-3 bg-teal text-white rounded'>
          {t('root.sign_up.create_account')}
        </button>
      </div>
    </form>
  )
}

export default SignUp
