import { useState, useEffect } from 'react'
import { PostType } from '~api/typings/studio/v1'

import { CollectionResponse, SingletonResponse } from '~api/typings'
import { get } from '~api/middleware'

type PostsResponse = CollectionResponse<PostType, { total_pages: number }>
type PostResponse = SingletonResponse<PostType>

type PageParamsType = {
  page?: string
  setId?: string
  order?: string
}

type PostParamsType = {
  postId: string
}

function usePost(name: string, path: string, params: PostParamsType) {
  const [loading, setLoading] = useState<boolean>(true)
  const [post, setPost] = useState<PostType>()

  const { postId } = params

  function beforeStart(): void {
    setLoading(true)
  }

  function onLoad(json: PostResponse): void {
    setPost(json.data)

    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onLoad, name, path, { postId: params.postId })
  }, [postId])

  return { loading, post }
}

function usePosts(name: string, path: string, params?: PageParamsType) {
  const [loading, setLoading] = useState<boolean>(false)
  const [posts, setPosts] = useState<PostType[]>([])
  const [page, setPage] = useState<string>(params && params.page ? params.page : '1')
  const [totalPages, setTotalPages] = useState<number>(1)

  function beforeStart() {
    setLoading(true)
  }

  function onLoad(json: PostsResponse) {
    setPosts(json.data)

    if (json.meta) setTotalPages(json.meta.total_pages)

    setLoading(false)
  }

  useEffect(() => {
    get(beforeStart, onLoad, name, path, { page: page, ...params })
  }, [page])

  return { loading, posts, page, setPage, totalPages }
}

export { usePosts, usePost }
