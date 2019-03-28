import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { RouteProps } from 'typings/route'

import * as hero from '~/styles/hero.sass'
import * as styles from './index.sass'

const Membership: FunctionComponent<RouteProps> = () => {
  const { t } = useTranslation('pages')
  
  return(
    <div className='animated fadeIn'>
      <section id='hero' className={styles.hero}>
        <div className={hero.bg}></div>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto text-white z-10'>
          <div className='flex-1 mx-5 mb-6'>
            <h1 className='mb-10 text-center font-thin antialiased text-5xl mr-20'>{t('pages.membership.heading')}</h1>
            <p className='leading-normal text-center font-normal text-lg mr-12'>{t('pages.membership.slogan')}</p>
          </div>
        </div>
      </section>
      <section id='pricing' className={styles.pricing}>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto text-white z-10'>
          <div className='flex-1'>
            <div id='monthly' className='mx-10 shadow-lg'>
              <div className='bg-pacific-light p-5 text-center text-3xl rounded-t-lg'>{t('pages.membership.monthly_price')}</div>
              <div className='p-5 bg-white rounded-b-lg'>

              </div>
            </div>
          </div>
          <div className='flex-1'>
            <div id='yearly'>
            </div>
          </div>
          <div className='flex-1'>
            <div id='free'>
            </div>
          </div>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}

export default Membership
