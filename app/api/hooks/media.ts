import { useState, useEffect } from 'react'
import { MediumType } from '~api/typings/studio/v1'

import { CollectionResponse } from '~api/typings'
import { get } from '~api/middleware'

type MediaResponse = CollectionResponse<MediumType, {}>

type PostMediaParams = {
  postId: string
}

function useMedia(name: string, path: string, params: PostMediaParams) {
  const [loading, setLoading] = useState<boolean>(true)
  const [media, setMedia] = useState<MediumType[]>([])

  const { postId } = params

  function beforeStart() {
    setLoading(true)
  }

  function onLoad(json: MediaResponse) {
    setMedia(json.data)

    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onLoad, name, path, params)
  }, [postId])

  return { loading, media }
}

export { useMedia }
