import * as React from 'react'
import { FunctionComponent, Dispatch, useState, useEffect } from 'react'

import Loader from '~/components/loader'

import Duration from './duration'

import MemberButton from '../member_button' 

import { useStatistic } from '~/api/hooks'


const Statistics: FunctionComponent = () => {
  const {loading, statistic} = useStatistic('studio', 'v1.statistics')

  if (loading) return <Loader />

  const { total_duration } = statistic

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
