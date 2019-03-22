import * as React from 'react'
import { FunctionComponent } from 'react'

import loader from 'svg-loaders/svg-smil-loaders/puff.svg'

const Loader: FunctionComponent = () => {
  return (
    <div className='flex container mx-auto p-20 justify-center'>
      <img src={loader} className='w-48 h-48 bg-denim p-10 rounded-full z-20 shadow-lg' />
    </div>
  )
}

export default Loader
