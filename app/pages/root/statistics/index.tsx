import * as React from 'react'
import { FunctionComponent, Dispatch, useState, useEffect } from 'react'

import Loader from '~/components/loader'

import Duration from './duration'

import MemberButton from '../member_button'  

const url: string = 'https://www.codemy.net/v1/statistics'

type TotalDuration = {
  [key: string]: number
}

const getStats = async (dispatch: Dispatch<TotalDuration>) => {
  const response = await fetch(url)
  const body = await response.json()

  dispatch(body.data.total_duration)
}

const Statistics: FunctionComponent = () => {
  const [total_duration, setTotalDuration] = useState<TotalDuration>({
    member: 0,
    public: 0,
    registered: 0
  })

  useEffect(() => { getStats(setTotalDuration) }, [])

  if (total_duration.public === 0) return <Loader />

  return (
    <div className='ml-5 mr-5 sm:mr-5 md:mr-10 lg:mr-10 xl:mr-10'>
      {Object.keys(total_duration).map(key => 
        <Duration key={`duration_${key}`} id={key} duration={total_duration[key]} />
      )}

      <MemberButton />
    </div>
  )
}

export default Statistics
