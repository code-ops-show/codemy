import * as React from 'react'
import { FunctionComponent } from 'react'

import { Platform, PlatformData } from './platform'

export type CriterionData = {
  name: string
  platforms: Array<PlatformData>
}

const Criterion: FunctionComponent<CriterionData> = props => {
  const { name, platforms } = props

  return (
    <div className='flex-1 mx-5'>
      <h4 className='text-xl font-semibold mb-3'>{name}</h4>
      {platforms.map((platform, index) => 
        <Platform key={`footer_platform_${index}`} {...platform} />)}
    </div>
  )
}

export { Criterion }
