import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Feature, FeatureProps } from './feature'

import media from './media.svg'

import MemberButton from '../member_button'

const Features: FunctionComponent = () => {
  const { t } = useTranslation('pages')

  const features: Array<FeatureProps> = t(
    'root.how.features', { returnObjects: true }
  )

  return (
    <div className='container mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
      <div className='flex-1 mt-20 mx-5'>
        <img src={media} />
      </div>
      <div className='flex-1 mt-10 mx-5 sm:mx-5 md:mx-20 lg:mx-20 xl:mx-20'>
        {features.map((feature, index) => <Feature key={`feature_${index}`} {...feature} />)}

        <MemberButton />
      </div>
    </div>
  )
}

export default Features