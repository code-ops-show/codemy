import { useState, useEffect } from 'react'
import { PostType } from '~/api/studio/v1/typings'
import { get } from '~/api'

function usePosts(name: string, path: string, params?: Object) {
  const [loading, setLoading] = useState<boolean>(true)
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    get(setLoading, setPosts, name, path, params)
  }, [])

  return { loading, posts }
}

export default usePosts
