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
      {sets.map(set => 
        <a href='#' className='block mb-2 ml-3 no-underline text-pacific-lighter hover:text-white'>{set}</a>)}
    </div>
  )
}

export { Platform }
