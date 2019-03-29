import * as React from 'react'
import { FunctionComponent } from 'react'

export type PlatformData = {
  name: string
  sets: Array<string>
}

const Platform: FunctionComponent<PlatformData> = props => {
  const { name, sets } = props

  return (
    <div className='ml-3 mb-5'>
      <h5 className='text-lg font-normal text-pacific-light mb-3'>{name}</h5>
      {sets.map((set, index) => 
        <a href='#' key={`platform_set_link_${index}`} className='block mb-2 ml-3 no-underline leading-normal text-pacific-lighter hover:text-white'>{set}</a>)}
    </div>
  )
}

export { Platform }
