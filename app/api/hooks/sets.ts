import { useState, useEffect } from 'react'
import { SetType } from '~/api/studio/v1/typings'
import { get, CollectionResponse } from '~/api'

type SetsResponse = CollectionResponse<SetType, Object>

function useSets(
  name: string,
  path: string,
  params?: Object
): { loading: boolean; sets: Array<SetType> } {
  const [loading, setLoading] = useState<boolean>(false)
  const [sets, setSets] = useState<SetType[]>([])

  function beforeStart() {
    setLoading(true)
  }

  function onCollectionLoad(json: SetsResponse) {
    setSets(json.data)
    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onCollectionLoad, name, path, params)
  }, [])

  return { loading, sets }
}

export default useSets
