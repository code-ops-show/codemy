import * as React from 'react'
import { FunctionComponent, Dispatch, useState, useEffect } from 'react'

import Loader from '~/components/loader'

import Duration from './duration'

import MemberButton from '../member_button' 

import api from '~/api'

type TotalDuration = {
  [key: string]: number
}

const getStats = async (dispatch: Dispatch<TotalDuration>) => {
  const response = await fetch(api('studio', 'v1.statistics'))
  const body = await response.json()

  dispatch(body.data.total_duration)
}

const Statistics: FunctionComponent = () => {
  const [totalDuration, setTotalDuration] = useState<TotalDuration>({
    member: 0,
    public: 0,
    registered: 0
  })

  useEffect(() => { getStats(setTotalDuration) }, [])

  if (totalDuration.public === 0) return <Loader />

  return (
    <div className='ml-5 mr-5 sm:mr-5 md:mr-10 lg:mr-10 xl:mr-10'>
      {Object.keys(totalDuration).map(key => 
        <Duration key={`duration_${key}`} id={key} duration={totalDuration[key]} />
      )}

      <MemberButton />
    </div>
  )
}

export default Statistics
