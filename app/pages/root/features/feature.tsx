import * as React from 'react'
import { FunctionComponent } from 'react'

import i from './icons'

interface IconIndex {
  [key: string]: any
}

const icons: IconIndex = i

export interface FeatureProps {
  name: string
  icon: string
}

const Feature: FunctionComponent<FeatureProps> = (props) => {
  const { name, icon } = props

  return (
    <div className='my-10 flex' data-aos='fade-up'>
      <div className='flex-shrink'>
        <img src={icons[icon]} width={128} className='bg-white shadow rounded-full border-4 border-white w-32 h-32 align-middle mr-5' /> 
      </div>
      <div className='flex-1'>
        <p className='my-5 text-lg text-grey-darker leading-normal'>{name}</p>
      </div>
    </div>
  )
}

export { Feature }
