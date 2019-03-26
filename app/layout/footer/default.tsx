import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import logo from '~/assets/logo.svg'

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
        {criteria.map((criterion, index) => 
          <Criterion key={`footer_criterion_${index}`} {...criterion} />)}
      </div>
      <div className='container mx-auto mt-5'>
        <p className='text-pacific-light'>{t('application.footer.copyright')}</p>
      </div>
    </footer>
  )
}

export default Default