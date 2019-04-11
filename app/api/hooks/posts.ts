import { useState, useEffect } from 'react'
import { PostType } from '~/api/studio/v1/typings'
import { get, CollectionResponse, SingletonResponse } from '~/api'

type PostsResponse = CollectionResponse<PostType, { total_pages: number }>
type PostResponse = SingletonResponse<PostType>

type PageParamsType = {
  page: number
}

function usePosts(name: string, path: string, params?: PageParamsType) {
  const [loading, setLoading] = useState<boolean>(false)
  const [post, setPost] = useState<PostType>()
  const [posts, setPosts] = useState<PostType[]>([])
  const [page, setPage] = useState<number>(params && params.page ? params.page : 1)
  const [totalPages, setTotalPages] = useState<number>(1)

  function beforeStart() {
    setLoading(true)
  }

  function onCollectionLoad(json: PostsResponse) {
    setPosts(json.data)

    if (json.meta) setTotalPages(json.meta.total_pages)

    setLoading(false)
  }

  function onItemLoad(json: PostResponse) {
    setPost(json.data)

    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onCollectionLoad, name, path, { page: page, ...params })
  }, [page])

  return { loading, posts, page, setPage, totalPages }
}

export default usePosts
