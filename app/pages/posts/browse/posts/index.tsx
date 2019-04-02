import * as React from 'react'
import { FunctionComponent } from 'react'

import Loader from '~/components/loader'

import { usePosts } from '~/api/hooks'

import Post from './post'

const Posts: FunctionComponent = () => {
  const {loading, posts} = usePosts('studio', 'v1.posts.search.page', { page: 1 })

  if (loading) return <Loader />

  return (
    <div className='flex flex-wrap mx-2'>
      {posts.map(post => <Post {...post} />)}
    </div>
  )
}

export default Posts
