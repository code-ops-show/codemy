import * as React from 'react'
import { FunctionComponent, useState, useEffect, Dispatch } from 'react'

import PostProps from 'typings/post'

import Loader from '~/components/loader'

import Post from './post'

const url: string = 'https://www.codemy.net/v1/posts/search/page/1'

const getPosts = async (dispatch: Dispatch<Array<PostProps>>) => {
  const response = await fetch(url)
  const json = await response.json()

  dispatch(json.data)
}

const RecentUploads: FunctionComponent = () => {
  const [posts, setPosts] = useState<Array<PostProps>>([])

  useEffect(() => { getPosts(setPosts) }, [])

  if (posts.length === 0) return <Loader />

  return (
    <div className='container mx-auto mt-20'>
      <div className='flex content-start flex-wrap'>
        {posts.map(post => (
          <Post {...post} />
        ))}
      </div>
    </div>
  )
}

export default RecentUploads
