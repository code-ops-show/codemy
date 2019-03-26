import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import work from './work.svg'

import * as styles from './index.sass'

import { Criterion, CriterionProps } from './criterion'

import MemberButton from '../member_button'

const Topics: FunctionComponent = () => {
  const { t } = useTranslation('pages')
  
  const criteria: Array<CriterionProps> = t(
    'root.what.criteria', { returnObjects: true }
  )

  return (
    <div className='flex container flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row mx-auto mt-20'>
      <div className='flex-1 mx-5 z-10'>
        {criteria.map((criterion, index) => 
          <Criterion key={`criterion_${index}`} {...criterion} />)}

        <MemberButton />
      </div>
      <div className='flex-1 relative z-0'>
        <img src={work} alt={t('root.what.description')} className={styles.work_graphic} />
      </div>
    </div>
  )
}

export default Topics
