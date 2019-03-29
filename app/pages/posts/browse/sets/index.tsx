import * as React from 'react'
import { FunctionComponent, Dispatch, useState, useEffect } from 'react'
import { SetProps } from 'typings/set'

import Loader from '~/components/loader'

import { Set } from './set'

const url: string = 'https://www.codemy.net/v1/sets'

const getSets = async (dispatch: Dispatch<Array<SetProps>>) => {
  const response = await fetch(url)
  const json = await response.json()

  dispatch(json.data)
}

const Sets: FunctionComponent = () => {
  const [sets, setSets] = useState<Array<SetProps>>([])

  useEffect(() => { getSets(setSets) }, [])

  if (sets.length === 0) return <Loader />

  return (
    <div className='flex flex-wrap items-stretch mx-2'>
      {sets.map(set => <Set {...set} />)}
    </div>
  )
}

export default Sets