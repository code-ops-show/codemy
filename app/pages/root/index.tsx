import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import SignUp from './sign_up'

import * as styles from './index.sass'

const Root:FunctionComponent = () => {
  const { t } = useTranslation('pages')

  return (
    <>
      <section id='hero' className='py-10 relative z-0'>
        <div className={c(styles.bg, 'absolute pin-t pin-b pin-l pin-r z-0')}></div>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto text-white z-10'>
          <div className='flex-1 mx-5 mb-6'>
            <h1 className='mb-10 font-normal antialiased text-5xl mr-20'>{t('root.slogan')}</h1>
            <p className='leading-normal font-normal text-2xl mr-12'>{t('root.description')}</p>
          </div>
          <div className='flex-1 mx-5'>
            <SignUp />
          </div>
        </div>
      </section>
    </>
  )
}

export default Root