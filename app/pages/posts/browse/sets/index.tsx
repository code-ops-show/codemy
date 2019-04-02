import * as React from 'react'
import { FunctionComponent } from 'react'
import { useSets } from '~/api/hooks'

import Loader from '~/components/loader'

import { Set } from './set'

const Sets: FunctionComponent = () => {
  const { loading, sets } = useSets('studio', 'v1.sets')

  if (loading) return <Loader />

  return (
    <div className='flex flex-wrap items-stretch mx-2'>
      {sets.map(set => <Set {...set} />)}
    </div>
  )
}

export default Sets