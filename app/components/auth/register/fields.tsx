import * as React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router5'
import { useTranslation } from 'react-i18next'

import * as form from '~/styles/auth/form.sass'

const Fields: FunctionComponent = () => {
  const { t } = useTranslation('components')

  return (
    <>
      <div className='mb-8'>
        <label className={form.label} htmlFor='email'>
          {t('auth.register.fields.email')}
        </label>
        <input className={form.text_entry} type='email' name='email' required/>
      </div>
      <div className='mb-4'>
        <label className={form.label} htmlFor='password'>
          {t('auth.register.fields.password')}
        </label>
        <input className={form.text_entry} type='password' name='password' required/>
      </div>
      <div className='mb-6'>
        <label className={form.label} htmlFor='password'>
          {t('auth.register.fields.password_confirm')}
        </label>
        <input className={form.text_entry} type='password' name='password_confirmation' required/>
      </div>
      <div>
        <button className={form.button}>
          {t('auth.register.fields.create_account')}
        </button>
      </div>
      <div className='mt-5 text-center'>
        <Link routeName='auth.login' className='text-teal-dark no-underline hover:underline'>
          {t('auth.register.fields.login')}
        </Link>
      </div>
    </>
  )
}

export default Fields
