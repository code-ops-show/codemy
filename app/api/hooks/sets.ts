import { useState, useEffect } from 'react'
import { SetType } from '~/api/studio/v1/typings'
import { get } from '~/api'

function useSets(name: string, path: string, params?: Object): { loading: boolean; sets: Array<SetType> } {
  const [loading, setLoading] = useState<boolean>(true)
  const [sets, setSets] = useState<SetType[]>([])

  useEffect(() => {
    get(setLoading, setSets, name, path, params)
  }, [])

  return { loading, sets }
}

export default useSets
