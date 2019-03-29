import * as React from 'react'
import c from 'classnames'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router5'

import logo from '~/assets/logo.svg'

import * as styles from './default.sass'

import { Criterion, CriterionData } from './criterion'

const Default: FunctionComponent = () => {
  const { t } = useTranslation('layout')

  const criteria: Array<CriterionData> = t('application.footer.default.criteria', { returnObjects: true })

  return (
    <footer className='py-20 relative text-white'>
      <div className='container mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
        <div className='flex-no-shrink z-10 mt-10 ml-5 mr-20 mb-10'>
          <img src={logo} width={64} />
        </div>
        <div className='flex w-full flex-wrap items-stretch'>
          {criteria.map((criterion, index) => 
            <Criterion key={`footer_criterion_${index}`} {...criterion} />)}
        </div>
      </div>
      <div className={c(styles.legal, 'container mx-auto mt-5 text-center')}>
        <p className='mx-5 text-sm'>
          <span className='text-pacific-light'>{t('application.footer.copyright')}</span>
          <span>
            <Link routeName='pages.terms' className='text-pacific-light'>
              {t('application.footer.terms')}
            </Link>
          </span>
          <span>
            <Link routeName='pages.privacy' className='text-pacific-light'>
              {t('application.footer.privacy')}
            </Link>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Default