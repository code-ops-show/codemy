import * as React from 'react'
import { FunctionComponent } from 'react'  
import { useTranslation } from 'react-i18next'

const SignUp: FunctionComponent = () => {
  const { t } = useTranslation('pages')

  return (
    <form className='font-codemy-sans bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className='text-grey-darkest mb-5 text-3xl font-thin'>{t('root.sign_up.title')}</h2>
      <p className='text-grey-dark mb-5 leading-normal text-lg'>{t('root.sign_up.description')}</p>
      <div className='mb-8'>
        <label className='block text-grey-dark mb-2' htmlFor='email'>
          {t('root.sign_up.email')}
        </label>
        <input className='bg-grey-light text-grey-dark appearance-none w-full rounded py-3 px-3 leading-tight focus:outline-none' type='email' name='email' required/>
      </div>
      <div className='mb-4'>
        <label className='block text-grey-dark mb-2' htmlFor='password'>
          {t('root.sign_up.password')}
        </label>
        <input className='bg-grey-light text-grey-dark appearance-none w-full rounded py-3 px-3 leading-tight focus:outline-none' type='password' name='password' required/>
      </div>
      <div className='mb-6'>
        <label className='block text-grey-dark mb-2' htmlFor='password'>
          {t('root.sign_up.password_confirm')}
        </label>
        <input className='bg-grey-light text-grey-dark appearance-none w-full rounded py-3 px-3 leading-tight focus:outline-none' type='password' name='password_confirmation' required/>
      </div>
      <div>
        <button className='w-full p-3 bg-green text-white rounded'>
          {t('root.sign_up.create_account')}
        </button>
      </div>
    </form>
  )
}

export default SignUp
