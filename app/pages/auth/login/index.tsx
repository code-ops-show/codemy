import * as React from 'react'
import {
  FunctionComponent,
  FormEvent,
  ChangeEvent,
  Dispatch,
  useState
} from 'react'
import { Link } from 'react-router5'
import { useTranslation } from 'react-i18next'

import * as form from '~/styles/auth/form.sass'

import { RouteProps } from 'typings/route'

type StatesIndex = {
  [key: string]: Dispatch<any>
}

const Login: FunctionComponent<RouteProps> = props => {
  const { t } = useTranslation('pages')

  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const states: StatesIndex = {
    email: setEmail,
    password: setPassword
  }

  function submitForm(e: FormEvent) {
    e.preventDefault()
  }

  function onChange(name: string, e: ChangeEvent<HTMLInputElement>) {
    states[name](e.target.value)
  }

  return (
    <div className='container max-w-sm mx-auto animated fadeIn'>
      <form
        className='bg-white shadow-md rounded p-8 mb-4 mx-5'
        onSubmit={submitForm}
      >
        <h1 className='text-grey-darkest mb-5 text-3xl font-thin'>
          {t('auth.login.heading')}
        </h1>
        <p className='text-grey-dark mb-5 leading-normal text-lg'>
          {t('auth.login.description')}
        </p>
        <div className='mb-6'>
          <label className={form.label} htmlFor='email'>
            {t('auth.login.email')}
          </label>
          <input
            className={form.text_entry}
            type='email'
            name='email'
            onChange={e => onChange('email', e)}
            required
          />
        </div>
        <div className='mb-6'>
          <label className={form.label} htmlFor='password'>
            {t('auth.login.password')}
          </label>
          <input
            className={form.text_entry}
            type='password'
            name='password'
            onChange={e => onChange('password', e)}
            required
          />
        </div>
        <div>
          <button className={form.button}>{t('auth.login.button')}</button>
        </div>
        <div className='mt-5 text-center'>
          <Link
            routeName='auth.register'
            className='text-teal-dark no-underline hover:underline'
          >
            {t('auth.login.register')}
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
