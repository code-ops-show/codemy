import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { RouteProps } from 'typings/route'

import * as hero from '~/styles/hero.sass'
import * as styles from './index.sass'

import { Plan, PlanType } from './plan'

type PlansType = {
  monthly: PlanType,
  yearly: PlanType, 
  free: PlanType
}

type FaqType = {
  question: string,
  answer: string
}

const Membership: FunctionComponent<RouteProps> = () => {
  const { t } = useTranslation('pages')

  const plans: PlansType = t('pages.membership.plans', { returnObjects: true })
  const faqs: FaqType[] = t('pages.membership.faqs.content', { returnObjects: true })
  
  return(
    <div className='animated fadeIn'>
      <section id='hero' className={c(styles.hero, 'animated pulse')}>
        <div className={hero.bg}></div>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto text-white z-10'>
          <div className='flex-1 mx-5 mb-6'>
            <h1 className='mb-10 text-center font-thin antialiased text-5xl'>{t('pages.membership.heading')}</h1>
            <p className='leading-normal text-center font-normal text-lg'>{t('pages.membership.slogan')}</p>
          </div>
        </div>
      </section>
      <section id='pricing' className={styles.pricing}>
        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row relative container mx-auto text-white z-10'>
          <div className='flex-1 mb-10'>
            <Plan {...plans.monthly} />
          </div>
          <div className='flex-1 mt-0 sm:mt-0 md:mt-0 lg:-mt-12 xl:-mt-12 mb-10'>
            <Plan {...plans.yearly} />
          </div>
          <div className='flex-1'>
            <Plan {...plans.free} />
          </div>
        </div>
      </section>
      <section id='faqs' className='bg-white pt-10 pb-10'>
        <div className='container mx-auto'>
          <h2 className='text-center text-4xl font-normal'>{t('pages.membership.faqs.heading')}</h2>
          <div className='flex content-start flex-wrap items-stretch'>
            {faqs.map((faq, index) => 
              <div key={`faq_${index}`} className='w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2'>
                <div className='m-10'>
                  <h3 className='text-2xl font-light mb-10'>{faq.question}</h3>
                  <p className='leading-normal text-lg text-grey-dark'>
                    {faq.answer}
                  </p>
                </div>
              </div>)}
          </div>
        </div>

        <div className='container mx-auto mt-20 text-center'>
          <h5 className='text-center font-normal text-2xl mb-10'>{t('pages.membership.more_questions')}</h5>
          <button className='p-5 bg-teal mb-20 text-white rounded shadow'>
            {t('pages.membership.contact')}
          </button>
        </div>
      </section>
    </div>
  )
}

export default Membership
