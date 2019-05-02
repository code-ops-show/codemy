import { useState, useEffect } from 'react'
import { SetType } from '~api/typings/studio/v1'

import { CollectionResponse } from '~api/typings'
import { get } from '~api/middleware'

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

  function onLoad(json: SetsResponse) {
    setSets(json.data)
    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onLoad, name, path, params)
  }, [])

  return { loading, sets }
}

export default useSets
